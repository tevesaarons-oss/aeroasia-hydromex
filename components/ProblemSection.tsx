"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Volume2, Clock, Gauge, Layers, Wrench, Workflow } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * Compliance Risk Dashboard — left statement + right stack of risk strips
 * with animated severity bars. Reads like an executive risk panel.
 */

type Risk = {
  code: string;
  title: string;
  category: string;
  severity: number;
  level: "high" | "elevated" | "moderate";
  icon: typeof AlertTriangle;
};

const RISKS: Risk[] = [
  { code: "R-01", title: "Failed DENR sampling", category: "Compliance", severity: 92, level: "high", icon: AlertTriangle },
  { code: "R-02", title: "Odor & noise complaints", category: "Operations", severity: 78, level: "elevated", icon: Volume2 },
  { code: "R-03", title: "Undersized or aging STPs", category: "Capacity", severity: 84, level: "elevated", icon: Clock },
  { code: "R-04", title: "High operating costs", category: "Cost", severity: 71, level: "elevated", icon: Gauge },
  { code: "R-05", title: "Poor sludge & solids handling", category: "Process", severity: 68, level: "moderate", icon: Layers },
  { code: "R-06", title: "No clear maintenance partner", category: "Service", severity: 64, level: "moderate", icon: Wrench },
  { code: "R-07", title: "Limited future capacity", category: "Growth", severity: 58, level: "moderate", icon: Workflow },
];

const LEVEL_COLOR = {
  high: { bar: "from-rose-500 to-orange-400", chip: "border-rose-400/50 bg-rose-400/10 text-rose-200" },
  elevated: { bar: "from-amber-400 to-yellow-300", chip: "border-amber-400/50 bg-amber-400/10 text-amber-200" },
  moderate: { bar: "from-cyan to-electric", chip: "border-cyan/50 bg-cyan/10 text-cyan" },
};

export function ProblemSection() {
  return (
    <section className="relative scroll-mt-20 overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-amber-500/8 blur-3xl" />
        <div className="absolute -right-40 top-1/2 h-[420px] w-[420px] rounded-full bg-rose-500/8 blur-3xl" />
        <div className="absolute inset-0 bg-blueprint-fine opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Left — statement */}
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-amber-200/95">
                <span className="size-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_2px_rgba(251,191,36,0.6)]" />
                Compliance Risk Panel
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Wastewater failure is a{" "}
                <span className="gradient-text-cyan">compliance, reputation, and operations</span>{" "}
                risk.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty text-[15px] leading-relaxed text-clean/90">
                Hospitals, malls, factories, resorts, ports, and LGUs cannot
                afford failed DENR sampling, odor complaints, shutdown risk, or
                systems that cannot scale. Aeroasia exists to make sure none of
                these become a problem your operations team has to manage.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                {[
                  { k: "HIGH", v: RISKS.filter((r) => r.level === "high").length, c: "text-rose-300" },
                  { k: "ELEVATED", v: RISKS.filter((r) => r.level === "elevated").length, c: "text-amber-300" },
                  { k: "MODERATE", v: RISKS.filter((r) => r.level === "moderate").length, c: "text-cyan" },
                ].map((s) => (
                  <div key={s.k}>
                    <div className={`text-display text-3xl font-semibold ${s.c}`}>{s.v}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — risk strips */}
          <div>
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
              <span>Risk Register · 07 scenarios shown</span>
              <span className="text-cyan/85">Live · auto-graded</span>
            </div>
            <ul className="space-y-2.5">
              {RISKS.map((r, i) => {
                const Icon = r.icon;
                const palette = LEVEL_COLOR[r.level];
                return (
                  <motion.li
                    key={r.code}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="card-lift group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-navy-2/70 to-navy/40 p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                        <Icon className="size-5 text-clean/90" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-silver/80">
                            {r.code} · {r.category}
                          </span>
                          <span className={`rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] ${palette.chip}`}>
                            {r.level}
                          </span>
                        </div>
                        <h3 className="text-display mt-1.5 text-[15px] font-semibold leading-snug text-white">
                          {r.title}
                        </h3>
                        <div className="mt-3 flex items-center gap-3">
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${r.severity}%` }}
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{ duration: 0.9, delay: 0.15 + i * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
                              className={`h-full rounded-full bg-gradient-to-r ${palette.bar}`}
                            />
                          </div>
                          <span className="w-9 text-right font-mono text-[11px] font-semibold text-clean/95">
                            {r.severity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
            <Reveal delay={0.2}>
              <p className="mt-5 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-silver/85">
                Severity scores are illustrative · Actual risk depends on
                facility, sector, age of system, and operating conditions.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
