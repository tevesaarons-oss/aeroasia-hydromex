"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PROJECT_STATS } from "@/lib/data";
import {
  COMPLETED_PROJECT_CATEGORIES,
  ONGOING_PROJECT_CATEGORIES,
  COMPLETED_TOTAL,
  ONGOING_TOTAL,
  ALL_PROJECTS_TOTAL,
} from "@/lib/projects";
import { PHBackdrop } from "./PHBackdrop";

/**
 * Homepage Projects section — curated summary, not a dump.
 *
 * Renders one card per industry with:
 *   - completed + ongoing counts
 *   - 2 sample named entries pulled from the PDF lists
 *   - link to the full /projects portfolio
 *
 * The full categorized portfolio lives on /projects (ProjectsPortfolio).
 */
export function ProjectsTimeline() {
  const ongoingByIndustry = new Map(
    ONGOING_PROJECT_CATEGORIES.map((c) => [c.industry, c]),
  );

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden py-10 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-full w-[55%] opacity-50">
          <PHBackdrop className="h-full w-full" />
        </div>
        <div className="absolute -left-32 top-1/3 size-[420px] rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute inset-0 bg-blueprint-fine opacity-30" />
      </div>

      {/*
        Mobile reorders to put real content first:
          heading → compact chip → category cards → CTA → stats → footnote
        Desktop keeps the original premium order via `sm:block`, which
        ignores `order-N` and falls back to DOM flow.
      */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:block sm:gap-0 sm:px-8">
        <SectionHeading
          className="order-1"
          eyebrow="National Project Portfolio"
          title={
            <>
              A project legacy built{" "}
              <span className="gradient-text-cyan">across the Philippines.</span>
            </>
          }
          description={`Named entries from Aeroasia-Hydromex's company profile and completed/ongoing project portfolio materials — ${COMPLETED_TOTAL} completed projects across five industries, with ${ONGOING_TOTAL} more awarded or in pipeline.`}
        />

        {/* Compact stats chip — mobile only */}
        <div className="order-2 flex justify-center sm:hidden">
          <div className="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-cyan/25 bg-cyan/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-silver/95">
            <span className="text-cyan/95">
              {ALL_PROJECTS_TOTAL} named entries
            </span>
            <span className="text-silver/40">·</span>
            <span>{COMPLETED_TOTAL} completed</span>
            <span className="text-silver/40">·</span>
            <span>{ONGOING_TOTAL} ongoing</span>
          </div>
        </div>

        {/* Stats grid — desktop position 2, mobile order-5 */}
        <Reveal className="order-5 sm:order-none">
          <div className="grid auto-rows-fr grid-cols-2 gap-2.5 rounded-2xl border border-white/10 bg-navy-2/50 p-3 sm:mt-12 sm:gap-4 sm:p-6 lg:grid-cols-4">
            {PROJECT_STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center rounded-xl bg-white/[0.02] px-2 py-3 text-center sm:px-3 sm:py-4"
              >
                <div className="text-display gradient-text-cyan text-balance text-[22px] font-semibold leading-none sm:text-3xl lg:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1.5 text-balance font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-silver/85 sm:mt-2 sm:tracking-[0.18em]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Curated-summary label bar — desktop only (chip handles mobile) */}
        <Reveal delay={0.05} className="hidden sm:block sm:order-none">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85 sm:mt-10">
            <span className="flex items-center gap-2 text-cyan/95">
              <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(0,200,255,0.7)]" />
              Curated Summary · By Industry
            </span>
            <span>
              {COMPLETED_TOTAL} completed · {ONGOING_TOTAL} ongoing & awarded
            </span>
          </div>
        </Reveal>

        {/* Category cards — desktop position 4, mobile order-3 (first content) */}
        <div className="order-3 grid grid-cols-1 gap-3 sm:order-none sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
          {COMPLETED_PROJECT_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            const ongoing = ongoingByIndustry.get(cat.industry);
            const samples = cat.projects.slice(0, 2);

            return (
              <motion.div
                key={cat.industry}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.04 }}
                className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-navy-2/65 to-navy/30 p-5"
              >
                <header className="flex items-center justify-between gap-2">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-cyan/10 ring-1 ring-cyan/25">
                    <Icon className="size-4 text-cyan" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-silver/80">
                    CAT-{String(i + 1).padStart(2, "0")}
                  </span>
                </header>

                <h3 className="text-display mt-4 text-balance text-base font-semibold leading-snug text-white">
                  {cat.label}
                </h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full border border-cyan/25 bg-cyan/8 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-cyan/95">
                    {cat.projects.length} completed
                  </span>
                  {ongoing && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-electric/25 bg-electric/8 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ice">
                      <Clock className="size-2.5" />
                      {ongoing.projects.length} ongoing
                    </span>
                  )}
                </div>

                <ul className="mt-4 space-y-1.5 text-[12.5px] leading-relaxed text-silver/95">
                  {samples.map((p) => (
                    <li key={`${p.name}-${p.year ?? ""}`} className="flex items-start gap-1.5">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-cyan/70" />
                      <span className="line-clamp-1">{p.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to full portfolio — desktop position 5, mobile order-4 */}
        <Reveal delay={0.1} className="order-4 sm:order-none">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cyan/25 bg-gradient-to-br from-cyan/10 via-navy-2/55 to-navy/30 p-5 sm:mt-10 sm:p-6">
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                Full Portfolio · {ALL_PROJECTS_TOTAL} named entries
              </div>
              <h3 className="text-display mt-2 text-balance text-lg font-semibold leading-snug text-white sm:text-xl">
                See every completed, ongoing, and awarded project.
              </h3>
              <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-silver/95">
                The full categorized portfolio &mdash; Healthcare, Commercial,
                Tourism &amp; Residential, Food, and Light Industry &mdash;
                with downloadable company-profile and projects PDFs.
              </p>
            </div>
            <Link
              href="/projects"
              className="btn-primary inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-semibold"
            >
              View Full Portfolio
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        {/* Footnote — mobile order-6, desktop position 6 */}
        <Reveal delay={0.12} className="order-6 sm:order-none">
          <p className="mx-auto max-w-3xl text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-silver/85 sm:mt-8">
            <MapPin className="mr-1.5 inline-block size-3 align-[-2px] text-cyan" />
            Named entries from Aeroasia-Hydromex&rsquo;s company profile and
            completed/ongoing project portfolio materials · Part of the
            company&rsquo;s broader nationwide service.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
