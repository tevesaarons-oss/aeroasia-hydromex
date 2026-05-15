"use client";

import { motion } from "framer-motion";
import { Film, Truck, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { recentSetupVideos, type RecentSetupVideo } from "@/lib/media";

/**
 * "Recent Set-ups" — asymmetric video panel showing real Aeroasia field
 * media. The visual fixes vs the previous pass:
 *
 *  - Caption + meta now sit in a header bar ABOVE the video, not overlaid
 *    on top of it. Native HTML5 controls are no longer obstructed.
 *  - Engineering corner brackets are removed from over the playable area.
 *    A subtle hairline on the bottom of the card serves the same accent role.
 *  - Video uses object-contain over a bg-black letterbox so non-16:9 source
 *    is never awkwardly cropped.
 *
 * Renders only when ≥1 video is enabled in lib/media.ts. With both videos
 * disabled the section disappears cleanly.
 */

const TYPE_ICON: Record<RecentSetupVideo["type"], typeof Film> = {
  field: Film,
  fabrication: Wrench,
  deployment: Truck,
  install: Wrench,
};

export function RecentSetupsSection() {
  const videos = recentSetupVideos.filter((v) => v.enabled);
  if (videos.length === 0) return null;

  const [featured, ...rest] = videos;
  const secondary = rest[0];

  return (
    <section className="relative scroll-mt-20 overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-[420px] w-[420px] rounded-full bg-electric/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="left"
          eyebrow="Recent Set-ups · Field Media"
          title={
            <>
              A closer look at Aeroasia systems,{" "}
              <span className="gradient-text-cyan">field work, and treatment infrastructure.</span>
            </>
          }
          description="Recent setup footage from Aeroasia-Hydromex&rsquo;s existing project materials — fabrication shop work and on-the-ground deployment. These are the actual videos featured on the company&rsquo;s public website."
        />

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-b from-navy-2/40 to-navy/30 p-4 sm:p-6">
          {/* Instrument bar */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
            <div className="flex items-center gap-2">
              <span className="size-1.5 animate-pulse rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(0,200,255,0.7)]" />
              <span>Field Media · Recent Set-up Footage</span>
            </div>
            <span className="hidden text-cyan/85 sm:inline">
              {videos.length} clip{videos.length === 1 ? "" : "s"} · Source: Aeroasia public site
            </span>
            <span>FEED · SETUP-{String(videos.length).padStart(2, "0")}</span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.55fr_1fr]">
            <VideoCard video={featured} code="SETUP-01" />

            <div className="flex flex-col gap-4">
              {secondary && <VideoCard video={secondary} code="SETUP-02" />}

              <Reveal delay={0.1}>
                <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-2/70 to-navy/30 p-5 sm:p-6">
                  <div className="pointer-events-none absolute -bottom-20 -right-20 size-48 rounded-full bg-cyan/10 blur-3xl" />
                  <div className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                    Note · Field Media
                  </div>
                  <h3 className="text-display relative mt-2 text-balance text-lg font-semibold leading-snug text-white">
                    Field visuals from existing company media.
                  </h3>
                  <p className="relative mt-3 text-[13.5px] leading-relaxed text-silver/95">
                    A closer look at Aeroasia treatment infrastructure and
                    system presentation materials &mdash; pulled directly from
                    the company&rsquo;s public-facing project page.
                  </p>
                  <p className="relative mt-3 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-silver/85">
                    Actual treatment performance depends on wastewater
                    characteristics, site conditions, system design,
                    operation, and maintenance.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video, code }: { video: RecentSetupVideo; code: string }) {
  const Icon = TYPE_ICON[video.type] ?? Film;
  return (
    <motion.figure
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
      className="overflow-hidden rounded-2xl border border-cyan/30 bg-navy-2/50 shadow-[0_30px_70px_-40px_rgba(0,157,255,0.55)]"
    >
      {/* Header — sits ABOVE the video, no overlap with controls or content */}
      <header className="flex items-center justify-between gap-2 border-b border-white/10 bg-navy-2/70 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em]">
        <span className="flex items-center gap-2 text-cyan/95">
          <Icon className="size-3.5 text-cyan" />
          <span>{video.caption}</span>
        </span>
        <span className="text-silver/80">
          {code} · {video.meta ?? "Field"}
        </span>
      </header>

      {/* Video letterboxed in a fixed-aspect black frame so source is never cropped */}
      <div className="relative aspect-[16/9] bg-black">
        <video
          src={video.src}
          poster={video.poster}
          preload="metadata"
          controls
          playsInline
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>

      {/* Bottom hairline — decorative only */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent" />
    </motion.figure>
  );
}
