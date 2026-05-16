"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Download, FileText, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PROJECT_STATS } from "@/lib/data";
import {
  COMPLETED_PROJECT_CATEGORIES,
  ONGOING_PROJECT_CATEGORIES,
  COMPLETED_TOTAL,
  ONGOING_TOTAL,
  ALL_PROJECTS_TOTAL,
  COMPANY_MATERIALS,
  type ProjectCategory,
  type ProjectEntry,
} from "@/lib/projects";
import { cn } from "@/lib/cn";
import { PHBackdrop } from "./PHBackdrop";

type StatusFilter = "all" | "completed" | "ongoing";

export function ProjectsPortfolio() {
  const [filter, setFilter] = useState<StatusFilter>("all");

  const sections = useMemo<ProjectCategory[]>(() => {
    if (filter === "completed") return COMPLETED_PROJECT_CATEGORIES;
    if (filter === "ongoing") return ONGOING_PROJECT_CATEGORIES;
    // "all" — interleave so each industry shows completed first, then ongoing.
    return [...COMPLETED_PROJECT_CATEGORIES, ...ONGOING_PROJECT_CATEGORIES];
  }, [filter]);

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden py-14 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-full w-[55%] opacity-50">
          <PHBackdrop className="h-full w-full" />
        </div>
        <div className="absolute -left-32 top-1/3 size-[420px] rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute inset-0 bg-blueprint-fine opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="National Project Portfolio"
          title={
            <>
              A project legacy built{" "}
              <span className="gradient-text-cyan">
                across the Philippines.
              </span>
            </>
          }
          description={`Named entries from Aeroasia-Hydromex's company profile and completed/ongoing project portfolio materials. ${COMPLETED_TOTAL} completed projects across five industries, with ${ONGOING_TOTAL} more awarded or in pipeline.`}
        />

        {/* Stats */}
        <Reveal>
          <div className="mt-12 grid auto-rows-fr grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-navy-2/50 p-4 sm:gap-4 sm:p-6 lg:grid-cols-4">
            {PROJECT_STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center rounded-xl bg-white/[0.02] px-3 py-4 text-center"
              >
                <div className="text-display gradient-text-cyan text-balance text-2xl font-semibold leading-none sm:text-3xl lg:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-balance font-mono text-[10px] uppercase leading-snug tracking-[0.16em] text-silver/85 sm:tracking-[0.18em]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Industry-count summary bar */}
        <Reveal delay={0.04}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl border border-white/10 bg-navy-2/40 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
            <span className="text-cyan/85">By industry</span>
            <span className="text-silver/40">·</span>
            {COMPLETED_PROJECT_CATEGORIES.map((c) => (
              <span
                key={c.industry}
                className="inline-flex items-center gap-1.5 text-silver/90"
              >
                <c.icon className="size-3 text-cyan/85" />
                {c.label} ·{" "}
                <span className="text-cyan/95">{c.projects.length}</span>
              </span>
            ))}
          </div>
        </Reveal>

        {/* Status filter */}
        <Reveal delay={0.06}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {(
              [
                {
                  key: "all" as StatusFilter,
                  label: `All · ${ALL_PROJECTS_TOTAL}`,
                },
                {
                  key: "completed" as StatusFilter,
                  label: `Completed · ${COMPLETED_TOTAL}`,
                },
                {
                  key: "ongoing" as StatusFilter,
                  label: `Ongoing & Awarded · ${ONGOING_TOTAL}`,
                },
              ]
            ).map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setFilter(opt.key)}
                className={cn(
                  "rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-all",
                  filter === opt.key
                    ? "border-cyan/60 bg-cyan/15 text-white shadow-[0_0_30px_-10px_rgba(0,200,255,0.7)]"
                    : "border-white/10 bg-white/[0.03] text-silver/90 hover:border-cyan/30 hover:text-white",
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Category sections */}
        <div className="mt-14 space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {sections.map((cat, gi) => (
                <CategoryBlock key={`${cat.status}-${cat.industry}`} category={cat} index={gi} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Company Materials — downloadable PDFs */}
        <CompanyMaterialsBlock />

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-3xl text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-silver/85">
            Named entries reflect the company&rsquo;s published project
            history in the source PDFs · Locations and years are preserved
            as listed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────── */

function CategoryBlock({
  category,
  index,
}: {
  category: ProjectCategory;
  index: number;
}) {
  const Icon = category.icon;
  const isOngoing = category.status === "ongoing";

  return (
    <Reveal delay={index * 0.04}>
      <section className="relative">
        <header className="flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex size-11 items-center justify-center rounded-xl ring-1",
                isOngoing
                  ? "bg-electric/15 ring-electric/35"
                  : "bg-cyan/10 ring-cyan/30",
              )}
            >
              <Icon
                className={cn(
                  "size-5",
                  isOngoing ? "text-ice" : "text-cyan",
                )}
              />
            </span>
            <div>
              <div
                className={cn(
                  "flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em]",
                  isOngoing ? "text-ice" : "text-cyan/85",
                )}
              >
                {isOngoing ? (
                  <>
                    <Clock className="size-3" />
                    Ongoing / Awarded
                  </>
                ) : (
                  <>
                    <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(0,200,255,0.7)]" />
                    Completed
                  </>
                )}
              </div>
              <h3 className="text-display mt-1 text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {category.label}
              </h3>
            </div>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
            {category.projects.length} named{" "}
            {category.projects.length === 1 ? "entry" : "entries"}
          </span>
        </header>

        <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-silver/95">
          {category.blurb}
        </p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {category.projects.map((p, i) => (
            <ProjectCard
              key={`${p.name}-${p.year ?? "x"}-${i}`}
              project={p}
              accent={isOngoing}
            />
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

function ProjectCard({
  project,
  accent,
}: {
  project: ProjectEntry;
  accent?: boolean;
}) {
  return (
    <li
      className={cn(
        "card-lift relative flex items-start gap-3 rounded-xl border bg-gradient-to-b from-white/[0.04] to-transparent p-3.5",
        accent ? "border-electric/25" : "border-white/10",
      )}
    >
      <div
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-lg ring-1",
          accent
            ? "bg-electric/15 ring-electric/30"
            : "bg-cyan/10 ring-cyan/25",
        )}
      >
        <span
          className={cn(
            "size-1.5 rounded-full",
            accent
              ? "bg-ice shadow-[0_0_6px_1px_rgba(221,247,255,0.55)]"
              : "bg-cyan shadow-[0_0_6px_1px_rgba(0,200,255,0.55)]",
          )}
        />
      </div>
      <div className="min-w-0">
        <div className="text-display text-[13.5px] font-medium leading-snug text-white">
          {project.name}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-silver/80">
          {project.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3" />
              {project.location}
            </span>
          )}
          {project.year && (
            <span className="inline-flex items-center gap-1 text-cyan/85">
              {project.year}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

function CompanyMaterialsBlock() {
  return (
    <Reveal delay={0.08}>
      <div className="mt-16 overflow-hidden rounded-2xl border border-cyan/25 bg-gradient-to-br from-cyan/8 via-navy-2/55 to-navy/40 p-5 sm:p-7">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
              <FileText className="size-3.5" />
              Company Materials · Source PDFs
            </div>
            <h3 className="text-display mt-2 text-balance text-xl font-semibold leading-snug text-white sm:text-2xl">
              Download the company profile and full project list.
            </h3>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
            DOCS · OFFICIAL
          </span>
        </header>

        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {COMPANY_MATERIALS.map((m) => (
            <li key={m.code}>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-navy-2/45 p-4 transition-colors hover:border-cyan/40"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                    <FileText className="size-3.5" />
                    {m.code}
                  </span>
                  <Download className="size-4 text-silver/70 transition-colors group-hover:text-cyan" />
                </div>
                <div className="text-display text-base font-semibold leading-snug text-white">
                  {m.label}
                </div>
                <p className="text-[13px] leading-relaxed text-silver/95">
                  {m.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan group-hover:text-clean">
                  Open PDF
                  <ArrowUpRight className="size-3.5" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
