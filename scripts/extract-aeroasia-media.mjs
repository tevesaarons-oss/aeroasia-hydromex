#!/usr/bin/env node
/**
 * Aeroasia-Hydromex media extractor.
 *
 * Crawls a fixed set of Aeroasia website pages, harvests image/video URLs
 * (img, srcset, picture/source, og:image, CSS background-image, Wix static
 * media), downloads originals into public/assets/extracted/<category>/, and
 * writes lib/extractedMedia.ts with a categorized manifest.
 *
 * Usage:
 *   node scripts/extract-aeroasia-media.mjs
 *
 * Only operates on aeroasiahydromex.com. No external stock photos. Safe to
 * re-run — overwrites manifest and resaves existing files.
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const EXTRACT_BASE = path.join(ROOT, "public/assets/extracted");
const MANIFEST_PATH = path.join(ROOT, "lib/extractedMedia.ts");

const ORIGIN = "https://www.aeroasiahydromex.com";

// Seed pages — script will also follow same-origin nav links it discovers.
const SEED_PAGES = [
  "/",
  "/about",
  "/aboutus",
  "/we-are-aeroasia",
  "/aeroasia-core-values",
  "/services",
  "/technology",
  "/aeroasia-experience",
  "/stp",
  "/projects",
  "/projects-2009",
  "/projects-2013",
  "/projects-2019",
  "/projects-2022",
  "/team",
  "/contact",
  "/contactus",
  "/blog",
];

const CATEGORIES = ["logo", "home", "services", "technology", "projects", "team", "contact", "videos"];

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15";

const fetchOpts = {
  headers: {
    "user-agent": UA,
    accept: "text/html,application/xhtml+xml,application/xml,image/*;q=0.9,*/*;q=0.8",
  },
  redirect: "follow",
};

/* ---------------------- helpers ---------------------- */

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function safeFetch(url, type = "text") {
  try {
    const res = await fetch(url, fetchOpts);
    if (!res.ok) return { ok: false, status: res.status };
    if (type === "buffer") {
      const buf = Buffer.from(await res.arrayBuffer());
      return { ok: true, buf, contentType: res.headers.get("content-type") ?? "" };
    }
    const text = await res.text();
    return { ok: true, text };
  } catch (e) {
    return { ok: false, error: String(e?.message ?? e) };
  }
}

function uniq(arr) {
  return [...new Set(arr)];
}

/** Try to upgrade a Wix-resized URL back to the original. */
function originalize(url) {
  if (!url) return url;
  try {
    const u = new URL(url, ORIGIN);
    // Wix static media: …/media/<hash>.<ext>/v1/fill/…  → strip /v1/…
    if (u.host.includes("wixstatic.com") && u.pathname.includes("/v1/")) {
      u.pathname = u.pathname.split("/v1/")[0];
    }
    return u.toString();
  } catch {
    return url;
  }
}

function absolutize(href, base) {
  try {
    return new URL(href, base).toString();
  } catch {
    return null;
  }
}

function fileExtFromUrl(url) {
  try {
    const u = new URL(url);
    const last = path.basename(u.pathname);
    const ext = path.extname(last).toLowerCase().replace(/^\./, "");
    if (!ext) return "bin";
    return ext.replace(/[^a-z0-9]/g, "") || "bin";
  } catch {
    return "bin";
  }
}

function filenameFromUrl(url) {
  try {
    const u = new URL(url);
    const last = path.basename(u.pathname) || "asset";
    // strip query/fragment, sanitize
    return last.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
  } catch {
    return "asset.bin";
  }
}

function hashShort(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return Math.abs(h).toString(36).slice(0, 6);
}

/* ---------------------- HTML scrape ---------------------- */

function extractMediaFromHtml(html, baseUrl) {
  const urls = new Set();
  const videos = new Set();
  const links = new Set();

  // <img src="...">
  for (const m of html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) {
    urls.add(m[1]);
  }
  // <img ... srcset="url 1x, url 2x">
  for (const m of html.matchAll(/<img\b[^>]*\bsrcset=["']([^"']+)["'][^>]*>/gi)) {
    for (const part of m[1].split(",")) {
      const u = part.trim().split(/\s+/)[0];
      if (u) urls.add(u);
    }
  }
  // <source srcset="..." or src="..."> inside picture/video
  for (const m of html.matchAll(/<source\b[^>]*\b(srcset|src)=["']([^"']+)["'][^>]*>/gi)) {
    for (const part of m[2].split(",")) {
      const u = part.trim().split(/\s+/)[0];
      if (!u) continue;
      if (/\.(mp4|webm|m4v|mov)(\?|$)/i.test(u)) videos.add(u);
      else urls.add(u);
    }
  }
  // <video src="...">
  for (const m of html.matchAll(/<video\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) {
    videos.add(m[1]);
  }
  // background-image: url(...)
  for (const m of html.matchAll(/background(?:-image)?\s*:\s*[^;"}]*url\(["']?([^"')]+)["']?\)/gi)) {
    urls.add(m[1]);
  }
  // og:image / twitter:image / link rel=icon|preload as=image
  for (const m of html.matchAll(/<meta\b[^>]*property=["'](og:image|twitter:image)["'][^>]*content=["']([^"']+)["'][^>]*>/gi)) {
    urls.add(m[2]);
  }
  for (const m of html.matchAll(/<meta\b[^>]*content=["']([^"']+)["'][^>]*property=["'](og:image|twitter:image)["'][^>]*>/gi)) {
    urls.add(m[1]);
  }
  for (const m of html.matchAll(/<link\b[^>]*\brel=["'](?:icon|shortcut icon|apple-touch-icon|preload)["'][^>]*\bhref=["']([^"']+)["'][^>]*>/gi)) {
    urls.add(m[1]);
  }
  // Direct mp4/webm/mov references anywhere
  for (const m of html.matchAll(/https?:\/\/[^"' )<>]+\.(?:mp4|webm|mov|m4v)(?:\?[^"' )<>]*)?/gi)) {
    videos.add(m[0]);
  }
  // Wix static media bare URLs
  for (const m of html.matchAll(/https:\/\/static\.wixstatic\.com\/media\/[^"' )<>]+/gi)) {
    if (/\.(mp4|webm|mov|m4v)/i.test(m[0])) videos.add(m[0]);
    else urls.add(m[0]);
  }

  // Same-origin nav links worth crawling
  for (const m of html.matchAll(/<a\b[^>]*\bhref=["']([^"'#]+)["'][^>]*>/gi)) {
    const abs = absolutize(m[1], baseUrl);
    if (!abs) continue;
    if (!abs.startsWith(ORIGIN)) continue;
    // Skip obvious junk (mailto/tel/anchors)
    if (/^(mailto|tel|javascript):/i.test(abs)) continue;
    // Skip file extensions
    if (/\.(jpg|jpeg|png|gif|svg|webp|pdf|mp4|webm|zip)(\?|$)/i.test(abs)) continue;
    links.add(abs);
  }

  return {
    images: uniq([...urls].map((u) => absolutize(u, baseUrl)).filter(Boolean)),
    videos: uniq([...videos].map((u) => absolutize(u, baseUrl)).filter(Boolean)),
    links: uniq([...links]),
  };
}

/* ---------------------- categorization ---------------------- */

function categorize(sourcePage, url) {
  const u = url.toLowerCase();
  const p = (sourcePage ?? "").toLowerCase();

  if (/favicon|logo/.test(u)) return "logo";
  if (/\.(mp4|webm|mov|m4v)(\?|$)/.test(u)) return "videos";
  if (p.includes("project")) return "projects";
  if (p.includes("team")) return "team";
  if (p.includes("contact")) return "contact";
  if (p.includes("service") || p.includes("stp") || p.includes("aeroasia-experience")) return "services";
  if (p.includes("technolog") || p.includes("aop")) return "technology";
  if (p === "/" || p === "/home" || p === "" || p.includes("about") || p.includes("we-are") || p.includes("core-value")) return "home";
  return "home";
}

function qualityNote(url, contentType, size) {
  if (/svg/i.test(url) || (contentType ?? "").includes("svg")) return "svg · scalable";
  if (size != null && size < 5 * 1024) return "very small · likely thumbnail or icon";
  if (size != null && size < 20 * 1024) return "small · low resolution";
  if (size != null && size > 1024 * 1024) return "high";
  if (/wixstatic\.com\/media\//.test(url)) return "wix static · raw quality unknown";
  return "medium";
}

function recommendedUse(category, url, contentType, size) {
  if (category === "logo") return "logo";
  if (category === "videos") return "background video / inline media";
  if (size != null && size < 20 * 1024) return "use sparingly · low resolution";
  if (/illustration|graphic|cartoon/i.test(url)) return "use sparingly · likely illustration";
  if (category === "projects") return "card visual · use only with caption";
  if (category === "team") return "card visual · only if clearly Aeroasia personnel";
  if (category === "services") return "inline illustration · use sparingly";
  if (category === "technology") return "supporting visual · keep schematic as primary";
  return "inline illustration · accent only";
}

/* ---------------------- main ---------------------- */

async function ensureDirs() {
  for (const c of CATEGORIES) {
    await fs.mkdir(path.join(EXTRACT_BASE, c), { recursive: true });
  }
  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
}

async function crawl() {
  const visited = new Set();
  const queue = SEED_PAGES.map((p) => ORIGIN + p);
  const pages = []; // { url, html }

  while (queue.length && visited.size < 25) {
    const url = queue.shift();
    if (visited.has(url)) continue;
    visited.add(url);

    process.stdout.write(`  fetch ${url} … `);
    const res = await safeFetch(url, "text");
    if (!res.ok) {
      console.log(`skip (${res.status ?? res.error ?? "error"})`);
      continue;
    }
    console.log(`ok (${res.text.length} B)`);
    pages.push({ url, html: res.text });

    // Enqueue same-origin nav links discovered on this page
    const parsed = extractMediaFromHtml(res.text, url);
    for (const link of parsed.links) {
      if (!visited.has(link) && !queue.includes(link)) queue.push(link);
    }
    await sleep(120);
  }
  return pages;
}

async function downloadAsset(url, destPath) {
  const res = await safeFetch(url, "buffer");
  if (!res.ok) return null;
  await fs.writeFile(destPath, res.buf);
  return { size: res.buf.length, contentType: res.contentType };
}

async function main() {
  console.log("Aeroasia media extractor\n--------------------------");
  await ensureDirs();

  console.log("\n[1/3] Crawling pages…");
  const pages = await crawl();
  console.log(`  crawled ${pages.length} pages`);

  console.log("\n[2/3] Extracting media references…");
  const seen = new Map(); // url → { sourcePages: [], type }
  for (const p of pages) {
    const { images, videos } = extractMediaFromHtml(p.html, p.url);
    for (const u of images) {
      const orig = originalize(u);
      if (!seen.has(orig)) seen.set(orig, { sourcePages: [], type: "image" });
      seen.get(orig).sourcePages.push(p.url);
    }
    for (const u of videos) {
      const orig = originalize(u);
      if (!seen.has(orig)) seen.set(orig, { sourcePages: [], type: "video" });
      seen.get(orig).sourcePages.push(p.url);
    }
  }
  console.log(`  found ${seen.size} unique media URLs`);

  console.log("\n[3/3] Downloading and cataloging…");
  const entries = [];
  let idx = 0;
  for (const [url, meta] of seen) {
    idx++;
    // Skip data URIs / placeholders
    if (/^data:/.test(url)) continue;
    if (!/^https?:/.test(url)) continue;
    // Skip generic Wix UI sprites that are obvious chrome
    if (/wix-style|wixapps|wix\.com\/.*\/svg/.test(url)) continue;

    const sourcePage = meta.sourcePages[0];
    const category = categorize(sourcePage, url);
    const ext = fileExtFromUrl(url) || "bin";
    let base = filenameFromUrl(url);
    if (!base.includes(".")) base = `${base}.${ext}`;
    // Disambiguate
    const prefix = String(idx).padStart(3, "0");
    const filename = `${prefix}-${hashShort(url)}-${base}`;
    const localDir = path.join(EXTRACT_BASE, category);
    const localPath = path.join(localDir, filename);

    process.stdout.write(`  [${prefix}] ${category}/${filename} … `);
    const dl = await downloadAsset(url, localPath);
    if (!dl) {
      console.log("FAIL");
      continue;
    }
    console.log(`${dl.size} B (${dl.contentType})`);

    const recommended = recommendedUse(category, url, dl.contentType, dl.size);
    const quality = qualityNote(url, dl.contentType, dl.size);

    entries.push({
      filename,
      localPath: `/assets/extracted/${category}/${filename}`,
      sourcePage,
      originalUrl: url,
      category,
      contentType: dl.contentType,
      sizeBytes: dl.size,
      qualityNote: quality,
      recommendedUse: recommended,
    });
    await sleep(80);
  }

  console.log(`\n  downloaded ${entries.length} files`);

  // Build manifest
  const byCat = {};
  for (const c of CATEGORIES) byCat[c] = [];
  for (const e of entries) (byCat[e.category] ?? (byCat[e.category] = [])).push(e);

  const videoCount = entries.filter((e) => e.category === "videos").length;
  const logoCount = entries.filter((e) => e.category === "logo").length;

  const manifestTs = `/**
 * Aeroasia website assets extracted by scripts/extract-aeroasia-media.mjs.
 * Re-generate with: node scripts/extract-aeroasia-media.mjs
 *
 * IMPORTANT:
 * - Use these only as Aeroasia-sourced visuals — never imply real project
 *   results unless captioned with care.
 * - Many entries are likely Wix illustrations or chrome; check the
 *   recommendedUse field before placing them prominently.
 */

export type ExtractedAsset = {
  filename: string;
  localPath: string;
  sourcePage: string;
  originalUrl: string;
  category:
    | "logo"
    | "home"
    | "services"
    | "technology"
    | "projects"
    | "team"
    | "contact"
    | "videos";
  contentType: string;
  sizeBytes: number;
  qualityNote: string;
  recommendedUse: string;
};

export const extractedAssets: ExtractedAsset[] = ${JSON.stringify(entries, null, 2)};

export const extractedByCategory = {
${CATEGORIES.map(
  (c) =>
    `  ${c}: extractedAssets.filter((a) => a.category === ${JSON.stringify(c)}),`,
).join("\n")}
};

export const extractionSummary = {
  totalAssets: ${entries.length},
  totalVideos: ${videoCount},
  totalLogos: ${logoCount},
  videosFound: ${videoCount > 0},
  pagesCrawled: ${pages.length},
};
`;
  await fs.writeFile(MANIFEST_PATH, manifestTs);
  console.log(`\nManifest written: ${path.relative(ROOT, MANIFEST_PATH)}`);
  console.log(`Summary: ${entries.length} assets · ${logoCount} logos · ${videoCount} videos`);
  if (videoCount === 0) {
    console.log("⚠ No videos found on the crawled pages.");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
