import type { Metadata } from "next";
import {
  ArrowUpRight,
  BookOpen,
  Hash,
  FileText,
  CalendarDays,
  User,
  Clock,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Wastewater Wisdom · Technical Insights",
  description:
    "Editorial and technical insights from Aeroasia-Hydromex Technologies on AOP, STP design, compliance, and wastewater treatment in the Philippines.",
};

export default function BlogPage() {
  const [featured, secondary, ...rest] = BLOG_POSTS;

  return (
    <>
      <Navbar />
      <main className="max-w-full overflow-x-clip pt-24 sm:pt-28">
        <section className="relative scroll-mt-20 overflow-hidden py-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-fine opacity-30" />
          <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-[420px] w-[420px] rounded-full bg-electric/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              align="left"
              eyebrow="Wastewater Wisdom · Technical Insights"
              title={
                <>
                  Notes from the field on{" "}
                  <span className="gradient-text-cyan">
                    AOP, compliance, and wastewater engineering.
                  </span>
                </>
              }
              description={
                <>
                  Articles published on Aeroasia-Hydromex&rsquo;s existing
                  blog. Each card opens the original article on{" "}
                  <span className="text-cyan/90">aeroasiahydromex.com</span> in
                  a new tab.
                </>
              }
            />

            {/* TIER 1 — Featured (newest) */}
            <FeaturedCard post={featured} />

            {/* TIER 2 — Wide secondary, image-left horizontal */}
            {secondary && <SecondaryCard post={secondary} index={1} />}

            {/* TIER 3 — Compact insight grid */}
            {rest.length > 0 && (
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {rest.map((post, i) => (
                  <Reveal key={post.slug} delay={i * 0.04}>
                    <li className="h-full">
                      <CompactCard post={post} index={i + 2} />
                    </li>
                  </Reveal>
                ))}
              </ul>
            )}

            <Reveal delay={0.1}>
              <p className="mx-auto mt-12 max-w-3xl text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-silver/85">
                Titles, dates, authors, and excerpts preserved from
                Aeroasia-Hydromex&rsquo;s existing blog · Full article text
                lives at the source links above.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ──────────────────────────────────────────────────────────────── */

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Reveal>
      <a
        href={post.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-12 block overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-to-br from-cyan/12 via-navy-2/55 to-navy/40 transition-colors hover:border-cyan/55"
      >
        <div className="relative grid gap-0 lg:grid-cols-[1.25fr_1fr]">
          {/* Engineering corner brackets */}
          <span className="pointer-events-none absolute left-4 top-4 z-10 size-3.5 border-l border-t border-cyan/55" />
          <span className="pointer-events-none absolute right-4 top-4 z-10 size-3.5 border-r border-t border-cyan/55" />
          <span className="pointer-events-none absolute bottom-4 left-4 z-10 size-3.5 border-b border-l border-cyan/55" />
          <span className="pointer-events-none absolute bottom-4 right-4 z-10 size-3.5 border-b border-r border-cyan/55" />

          {/* Text side */}
          <div className="order-2 p-6 sm:p-10 lg:order-1">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
              <div className="flex items-center gap-2">
                <span className="size-1.5 animate-pulse rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(0,200,255,0.7)]" />
                Latest Insight · POST-01
              </div>
              <span className="text-silver/85">
                Source · aeroasiahydromex.com
              </span>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-cyan/25 bg-cyan/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan/95"
                >
                  <Hash className="mr-1 inline-block size-3 align-[-2px]" />
                  {t}
                </li>
              ))}
            </ul>

            <h2 className="text-display mt-4 text-balance text-2xl font-semibold leading-snug text-white sm:text-3xl md:text-[34px]">
              {post.title}
            </h2>

            <ArticleMeta
              date={post.date}
              author={post.author}
              readingTime={post.readingTime}
            />

            {post.excerpt && (
              <p className="mt-4 text-[15px] leading-relaxed text-clean/90">
                {post.excerpt}
              </p>
            )}

            <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-cyan">
              Read on aeroasiahydromex.com
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>

          {/* Image side */}
          <div className="relative order-1 min-h-[260px] overflow-hidden lg:order-2 lg:min-h-[420px]">
            {post.thumbnail ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-transparent lg:from-navy/85 lg:via-navy/15" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 bg-navy-2/60">
                <div className="absolute inset-0 bg-blueprint opacity-40" />
                <div className="absolute inset-0 bg-dotgrid opacity-25" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <BookOpen className="size-8 text-cyan/80" />
                  <div className="text-display mt-3 text-base font-semibold text-clean/85">
                    {post.title.split(":")[0]}
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/80">
                    POST-01
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function SecondaryCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Reveal>
      <a
        href={post.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-2/60 to-navy/30 transition-colors hover:border-cyan/45"
      >
        <div className="grid gap-0 md:grid-cols-[1fr_1.25fr]">
          {/* Image left */}
          <div className="relative aspect-[16/10] overflow-hidden bg-navy-2/60 md:aspect-auto md:min-h-[220px]">
            {post.thumbnail ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-navy/60 md:to-navy/70" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-navy-2/60">
                <BookOpen className="size-8 text-cyan/60" />
              </div>
            )}
          </div>

          {/* Text right */}
          <div className="flex flex-col p-5 sm:p-6">
            <header className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 font-mono text-[10px] uppercase tracking-[0.22em]">
              <span className="flex items-center gap-1.5 text-cyan/85">
                <FileText className="size-3.5" />
                POST-{String(index + 1).padStart(2, "0")} · Editor&rsquo;s Pick
              </span>
              <span className="text-silver/80">Insight</span>
            </header>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-cyan/20 bg-cyan/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-cyan/90"
                >
                  {t}
                </li>
              ))}
            </ul>

            <h3 className="text-display mt-3 text-balance text-xl font-semibold leading-snug text-white sm:text-[22px]">
              {post.title}
            </h3>

            <ArticleMeta
              date={post.date}
              author={post.author}
              readingTime={post.readingTime}
            />

            {post.excerpt && (
              <p className="mt-3 text-[14px] leading-relaxed text-silver/95">
                {post.excerpt}
              </p>
            )}

            <div className="mt-auto pt-5">
              <div className="inline-flex items-center gap-2 text-[13px] font-medium text-cyan group-hover:text-clean">
                Read on aeroasiahydromex.com
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function CompactCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <a
      href={post.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-2/60 to-navy/30"
    >
      {post.thumbnail && (
        <div className="relative aspect-[16/10] overflow-hidden bg-navy-2/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.thumbnail}
            alt={post.title}
            className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <header className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 font-mono text-[10px] uppercase tracking-[0.22em]">
          <span className="flex items-center gap-1.5 text-cyan/85">
            <FileText className="size-3.5" />
            POST-{String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-silver/80">Technical Insight</span>
        </header>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-cyan/20 bg-cyan/5 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-cyan/90"
            >
              {t}
            </li>
          ))}
        </ul>

        <h3 className="text-display mt-4 text-balance text-lg font-semibold leading-snug text-white">
          {post.title}
        </h3>

        <ArticleMeta
          date={post.date}
          author={post.author}
          readingTime={post.readingTime}
        />

        {post.excerpt && (
          <p className="mt-3 text-[13.5px] leading-relaxed text-silver/95">
            {post.excerpt}
          </p>
        )}

        <div className="mt-auto pt-5">
          <div className="inline-flex items-center gap-2 text-[13px] font-medium text-cyan group-hover:text-clean">
            Read on aeroasiahydromex.com
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </a>
  );
}

function ArticleMeta({
  date,
  author,
  readingTime,
}: {
  date?: string;
  author?: string;
  readingTime?: string;
}) {
  if (!date && !author && !readingTime) return null;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
      {author && (
        <span className="inline-flex items-center gap-1.5">
          <User className="size-3 text-cyan/80" />
          {author}
        </span>
      )}
      {date && (
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="size-3 text-cyan/80" />
          {date}
        </span>
      )}
      {readingTime && (
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3 text-cyan/80" />
          {readingTime}
        </span>
      )}
    </div>
  );
}
