"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Hammer, ShieldCheck, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/cn";

const SERVICE_DETAILS: Record<string, { capabilities: string[]; deliverables: string[] }> = {
  "New STP Design & Build": {
    capabilities: [
      "Hydraulic + influent profiling",
      "Equipment + electrical + controls design",
      "On-site build and commissioning",
      "Sector-specific configuration",
    ],
    deliverables: [
      "Engineered drawings",
      "Installed & commissioned STP",
      "Operating procedures",
      "Handover & training",
    ],
  },
  "STP Rehabilitation": {
    capabilities: [
      "Performance diagnostics",
      "Component-level replacement",
      "Hydraulic re-balancing",
      "Process re-tuning",
    ],
    deliverables: [
      "Rehab report",
      "Updated process train",
      "Verified discharge readings",
      "Maintenance plan",
    ],
  },
  "STP Relocation": {
    capabilities: [
      "Survey & disassembly plan",
      "Transport + re-foundation",
      "Re-installation",
      "Re-commissioning",
    ],
    deliverables: [
      "Relocation timeline",
      "Reinstalled STP",
      "Operating handover",
      "Service continuity",
    ],
  },
  "AOP System Upgrades": {
    capabilities: [
      "AOP integration into existing trains",
      "Ozone + elevated pH chemistry tuning",
      "Microbubble contact integration",
      "Tertiary polish staging",
    ],
    deliverables: [
      "Upgraded AOP train",
      "Effluent quality observations",
      "Operating procedures",
      "Ongoing service plan",
    ],
  },
  "DAO Compliance Support": {
    capabilities: [
      "Design aligned with DAO 2016-08 / 2021-19",
      "Sampling-readiness planning",
      "Operations documentation",
      "Monitoring routine setup",
    ],
    deliverables: [
      "Compliance-aligned design",
      "Sampling protocol",
      "Documentation pack",
      "Maintenance cadence",
    ],
  },
  "Preventive Maintenance": {
    capabilities: [
      "Scheduled servicing",
      "Parts replacement",
      "Performance tuning",
      "Effluent stability monitoring",
    ],
    deliverables: [
      "Service schedule",
      "Performance log",
      "Quarterly review",
      "On-call support",
    ],
  },
  "Troubleshooting & Diagnostics": {
    capabilities: [
      "Odor / foaming diagnostics",
      "Sludge bulking analysis",
      "Off-spec effluent root-cause",
      "Equipment-fault tracing",
    ],
    deliverables: [
      "Diagnostic report",
      "Corrective actions",
      "Verified resolution",
      "Preventive recommendations",
    ],
  },
  "Water Reuse Readiness": {
    capabilities: [
      "System design for reuse objectives",
      "Tertiary polishing planning",
      "Non-potable application mapping",
      "Modular upgrade pathway",
    ],
    deliverables: [
      "Reuse-ready architecture",
      "Application matrix",
      "Upgrade roadmap",
      "Operating considerations",
    ],
  },
};

type Phase = "DESIGN" | "BUILD" | "SUPPORT";

const SERVICE_PHASE: Record<string, Phase> = {
  "New STP Design & Build": "DESIGN",
  "STP Rehabilitation": "BUILD",
  "STP Relocation": "BUILD",
  "AOP System Upgrades": "BUILD",
  "DAO Compliance Support": "DESIGN",
  "Preventive Maintenance": "SUPPORT",
  "Troubleshooting & Diagnostics": "SUPPORT",
  "Water Reuse Readiness": "DESIGN",
};

const PHASES: Array<{ key: Phase; label: string; icon: typeof Hammer }> = [
  { key: "DESIGN", label: "Design", icon: ShieldCheck },
  { key: "BUILD", label: "Build", icon: Hammer },
  { key: "SUPPORT", label: "Support", icon: Wrench },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const selected = SERVICES[active];
  const detail = SERVICE_DETAILS[selected.title] ?? { capabilities: [], deliverables: [] };
  const ActiveIcon = selected.icon;
  const activePhase = SERVICE_PHASE[selected.title] ?? "DESIGN";

  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="STP & AOP Service Stack"
          title={
            <>
              Engineering services for{" "}
              <span className="gradient-text-cyan">every stage of your wastewater system.</span>
            </>
          }
          description="Aeroasia operates across the full system lifecycle — from greenfield STP design and AOP integration to rehabilitation, diagnostive services, and after-sales support."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: vertical service list */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-navy-2/55 to-navy/30 p-3 sm:p-4">
            <div className="mb-2 flex items-center justify-between px-2 pt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
              <span>Service Stack</span>
              <span className="text-cyan/85">
                {String(active + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="flex flex-col gap-1">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                return (
                  <li key={s.title}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={cn(
                        "group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 text-left transition-all",
                        isActive
                          ? "border-cyan/55 bg-gradient-to-r from-cyan/15 via-cyan/8 to-transparent shadow-[0_0_28px_-8px_rgba(0,200,255,0.7)]"
                          : "border-transparent bg-transparent hover:border-white/10 hover:bg-white/[0.03]",
                      )}
                    >
                      {/* Active left edge accent bar */}
                      <span
                        className={cn(
                          "absolute inset-y-1.5 left-0 w-[3px] rounded-full transition-all",
                          isActive
                            ? "bg-gradient-to-b from-cyan via-electric to-cyan opacity-100 shadow-[0_0_10px_1px_rgba(0,200,255,0.7)]"
                            : "opacity-0",
                        )}
                      />
                      <span
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-lg ring-1 transition-colors",
                          isActive
                            ? "bg-cyan/25 ring-cyan/50"
                            : "bg-white/5 ring-white/10 group-hover:bg-cyan/10 group-hover:ring-cyan/30",
                        )}
                      >
                        <Icon className={cn("size-4.5", isActive ? "text-cyan" : "text-clean/85")} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div
                          className={cn(
                            "font-mono text-[9px] uppercase tracking-[0.22em] transition-colors",
                            isActive ? "text-cyan/95" : "text-silver/75",
                          )}
                        >
                          SVC-{String(i + 1).padStart(2, "0")} ·{" "}
                          {SERVICE_PHASE[s.title] ?? "DESIGN"}
                        </div>
                        <div className="text-display text-[14px] font-medium leading-snug text-white">
                          {s.title}
                        </div>
                      </div>
                      <ArrowUpRight
                        className={cn(
                          "size-4 shrink-0 transition-all",
                          isActive
                            ? "translate-x-0.5 -translate-y-0.5 text-cyan"
                            : "text-silver/40 group-hover:text-cyan",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-gradient-to-br from-navy-2 via-navy to-navy-2 p-6 sm:p-8 shadow-[0_30px_70px_-40px_rgba(0,157,255,0.45)]"
            >
              <div className="pointer-events-none absolute -right-32 -top-32 size-64 rounded-full bg-cyan/12 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-25" />

              {/* Engineering corner brackets */}
              <span className="pointer-events-none absolute left-3 top-3 size-3.5 border-l border-t border-cyan/55" />
              <span className="pointer-events-none absolute right-3 top-3 size-3.5 border-r border-t border-cyan/55" />
              <span className="pointer-events-none absolute bottom-3 left-3 size-3.5 border-b border-l border-cyan/55" />
              <span className="pointer-events-none absolute bottom-3 right-3 size-3.5 border-b border-r border-cyan/55" />

              <div className="relative flex flex-wrap items-center gap-3 border-b border-white/10 pb-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/30 via-electric/20 to-ice/10 ring-1 ring-cyan/40">
                  <ActiveIcon className="size-5.5 text-cyan" />
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                    SVC-{String(active + 1).padStart(2, "0")} · ACTIVE
                  </div>
                  <h3 className="text-display text-xl font-semibold text-white sm:text-2xl">
                    {selected.title}
                  </h3>
                </div>
              </div>

              {/* Pipeline strip — Design → Build → Support with active phase lit */}
              <div className="relative mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-navy-2/45 px-3 py-2.5">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-silver/70">
                  Stage
                </span>
                <div className="ml-1 flex flex-1 items-center gap-1.5">
                  {PHASES.map((p, pi) => {
                    const PhaseIcon = p.icon;
                    const isOn = p.key === activePhase;
                    return (
                      <div
                        key={p.key}
                        className="flex flex-1 items-center gap-1.5"
                      >
                        <span
                          className={cn(
                            "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-all",
                            isOn
                              ? "border-cyan/55 bg-cyan/15 text-cyan shadow-[0_0_14px_-4px_rgba(0,200,255,0.7)]"
                              : "border-white/10 bg-white/[0.03] text-silver/65",
                          )}
                        >
                          <PhaseIcon className="size-3" />
                          {p.label}
                        </span>
                        {pi < PHASES.length - 1 && (
                          <span className="h-px flex-1 bg-gradient-to-r from-cyan/35 via-cyan/20 to-cyan/10" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="relative mt-5 text-[15px] leading-relaxed text-clean/95">
                {selected.desc}
              </p>

              <div className="relative mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                    <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_6px_1px_rgba(0,200,255,0.6)]" />
                    Capabilities
                  </div>
                  <ul className="mt-3 space-y-2">
                    {detail.capabilities.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-[14px] leading-relaxed text-silver/95"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ice">
                    <span className="size-1.5 rounded-full bg-ice shadow-[0_0_6px_1px_rgba(221,247,255,0.55)]" />
                    Deliverables
                  </div>
                  <ul className="mt-3 space-y-2">
                    {detail.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-[14px] leading-relaxed text-silver/95"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ice" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
                <span className="inline-flex items-center gap-2">
                  <span className="size-1.5 animate-pulse rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(0,200,255,0.7)]" />
                  Service{" "}
                  {String(active + 1).padStart(2, "0")} of{" "}
                  {String(SERVICES.length).padStart(2, "0")}
                </span>
                <span className="text-cyan/85">Aeroasia · Nationwide</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
