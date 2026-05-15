"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hospital, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PROJECT_GROUPS, STATS } from "@/lib/data";
import { cn } from "@/lib/cn";
import { PHBackdrop } from "./PHBackdrop";
import { realStpInstallPhotos } from "@/lib/curatedMedia";
import { mediaAssets } from "@/lib/media";
import { MediaPanel } from "./MediaPanel";

export function ProjectsTimeline() {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    if (active === "all") return PROJECT_GROUPS;
    return PROJECT_GROUPS.filter((g) => g.range === active);
  }, [active]);

  const totalNamedProjects = PROJECT_GROUPS.reduce(
    (acc, g) => acc + g.projects.length,
    0,
  );

  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden py-14 sm:py-20">
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
              <span className="gradient-text-cyan">across the Philippines.</span>
            </>
          }
          description={`The projects below reflect the named entries currently listed in Aeroasia-Hydromex's existing project history. They sit within the company's broader stated 200+ project experience. ${totalNamedProjects} named entries are shown across four milestone year groups.`}
        />

        <Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-navy-2/50 p-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-display gradient-text-cyan text-3xl font-semibold sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {[
              { key: "all", label: "All Years" },
              ...PROJECT_GROUPS.map((g) => ({ key: g.range, label: g.range })),
            ].map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setActive(opt.key)}
                className={cn(
                  "rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-all",
                  active === opt.key
                    ? "border-cyan/60 bg-cyan/15 text-white shadow-[0_0_30px_-10px_rgba(0,200,255,0.7)]"
                    : "border-white/10 bg-white/[0.03] text-silver/90 hover:border-cyan/30 hover:text-white",
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="space-y-16"
            >
              {filtered.map((g, gi) => {
                const photo = realStpInstallPhotos[gi % realStpInstallPhotos.length];
                const groupAsset =
                  mediaAssets.projects[g.range as keyof typeof mediaAssets.projects];
                const isRight = gi % 2 === 1;

                return (
                  <motion.div
                    key={g.range}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                    className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
                  >
                    <div className={cn(isRight && "lg:order-2")}>
                      <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                        <div>
                          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                            <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(0,200,255,0.7)]" />
                            Milestone · {String(gi + 1).padStart(2, "0")}
                          </div>
                          <h3 className="text-display mt-2 text-3xl font-semibold text-white sm:text-4xl">
                            {g.range}
                          </h3>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
                          {g.projects.length} named projects
                        </span>
                      </div>

                      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                        {g.projects.map((p, i) => (
                          <motion.li
                            key={p}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.4, delay: gi * 0.05 + i * 0.02 }}
                            className="card-lift group flex items-start gap-3 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-3.5"
                          >
                            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-cyan/10 ring-1 ring-cyan/25">
                              <Hospital className="size-3.5 text-cyan" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-display text-[13.5px] font-medium leading-snug text-white">
                                {p}
                              </div>
                              <div className="mt-1 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-silver/80">
                                <MapPin className="size-3" />
                                Philippines
                              </div>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className={cn(isRight && "lg:order-1")}>
                      {groupAsset?.enabled ? (
                        <MediaPanel
                          asset={groupAsset}
                          caption={groupAsset.caption ?? g.range}
                          code={`PORT-${String(gi + 1).padStart(2, "0")}`}
                          aspectRatio="aspect-[5/4]"
                        />
                      ) : (
                        <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-2/40 shadow-[0_30px_70px_-40px_rgba(0,157,255,0.45)]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="aspect-[5/4] w-full object-cover"
                            loading="lazy"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
                          <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 p-4">
                            <span className="text-display text-sm font-semibold text-clean">
                              {photo.caption ?? "Aeroasia installation"}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
                              PORT-{String(gi + 1).padStart(2, "0")} · {g.range}
                            </span>
                          </figcaption>
                        </figure>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 max-w-3xl text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-silver/85">
            Named entries from Aeroasia-Hydromex&rsquo;s existing project history ·
            Part of the company&rsquo;s broader stated 200+ project experience ·
            Installation photos from Aeroasia&rsquo;s own project portfolio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
