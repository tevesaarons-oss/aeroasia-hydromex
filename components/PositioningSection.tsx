"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  MapPin,
  PencilRuler,
  Hammer,
  Recycle,
  Zap,
  Settings2,
  Headphones,
} from "lucide-react";

type Stage = {
  step: number;
  title: string;
  desc: string;
  icon: typeof MapPin;
  code: string;
};

const STAGES: Stage[] = [
  { step: 1, title: "Site Assessment", desc: "Hydraulic loading, influent profiling, site constraints.", icon: MapPin, code: "PHASE-01" },
  { step: 2, title: "STP Design", desc: "Custom engineering for facility, sector, and growth path.", icon: PencilRuler, code: "PHASE-02" },
  { step: 3, title: "Installation", desc: "Full build, electrical, controls, and commissioning.", icon: Hammer, code: "PHASE-03" },
  { step: 4, title: "Rehabilitation", desc: "Restore aging or underperforming STPs back to spec.", icon: Recycle, code: "PHASE-04" },
  { step: 5, title: "AOP Upgrade", desc: "Integrate Advanced Oxidation Process as polish or core stage.", icon: Zap, code: "PHASE-05" },
  { step: 6, title: "Preventive Maintenance", desc: "Scheduled servicing, diagnostics, performance tuning.", icon: Settings2, code: "PHASE-06" },
  { step: 7, title: "After-Sales Support", desc: "Nationwide on-call support and troubleshooting.", icon: Headphones, code: "PHASE-07" },
];

export function PositioningSection() {
  return (
    <section className="relative scroll-mt-20 overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-fine opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Project Lifecycle"
          title={
            <>
              One partner from{" "}
              <span className="gradient-text-cyan">assessment to after-sales support.</span>
            </>
          }
          description="We don't just install equipment. Aeroasia engineers every stage of the lifecycle — site assessment, design, installation, rehabilitation, AOP upgrades, preventive maintenance, and nationwide after-sales support."
        />

        <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-navy-2/40 to-navy/30 p-6 sm:p-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
            <span>Delivery Pipeline · 7 phases</span>
            <span className="hidden md:inline">Assess → Design → Build → Maintain</span>
            <span>RAIL · LC-07</span>
          </div>

          {/* Desktop horizontal rail */}
          <div className="relative hidden lg:block">
            <div className="absolute left-[3%] right-[3%] top-[42px] h-[2px] bg-gradient-to-r from-cyan/30 via-cyan/70 to-cyan/30" />
            <motion.div
              className="absolute top-[40px] h-[6px] w-[14%] rounded-full bg-gradient-to-r from-cyan via-electric to-ice opacity-90"
              animate={{ left: ["-14%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ boxShadow: "0 0 28px 6px rgba(0,200,255,0.6)" }}
            />
            <ol className="relative grid grid-cols-7 gap-2">
              {STAGES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.li
                    key={s.code}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative flex size-[84px] items-center justify-center rounded-full border-2 border-cyan/50 bg-navy shadow-[0_0_28px_-6px_rgba(0,200,255,0.7)]">
                      <span className="absolute inset-0 rounded-full bg-cyan/15 blur-md" />
                      <Icon className="relative size-5 text-cyan" />
                      <span className="text-display absolute -bottom-1 right-1 rounded-full bg-navy px-1.5 py-0.5 font-mono text-[10px] font-semibold text-clean/90 ring-1 ring-white/15">
                        {String(s.step).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                      {s.code}
                    </div>
                    <h3 className="text-display mt-1.5 max-w-[140px] text-[15px] font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 max-w-[160px] text-[12.5px] leading-relaxed text-silver/95">
                      {s.desc}
                    </p>
                  </motion.li>
                );
              })}
            </ol>
          </div>

          {/* Mobile / tablet stacked rail */}
          <ol className="relative space-y-4 lg:hidden">
            <div className="pointer-events-none absolute left-[34px] top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-cyan/60 via-electric/40 to-cyan/20" />
            {STAGES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.code}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="relative flex items-start gap-4 pl-1"
                >
                  <div className="relative z-10 flex size-[60px] shrink-0 items-center justify-center rounded-full border-2 border-cyan/50 bg-navy shadow-[0_0_18px_-4px_rgba(0,200,255,0.7)]">
                    <Icon className="size-5 text-cyan" />
                    <span className="absolute -bottom-1 -right-1 rounded-full bg-navy px-1.5 py-0.5 font-mono text-[10px] font-semibold text-clean/90 ring-1 ring-white/15">
                      {String(s.step).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 pt-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                      {s.code}
                    </div>
                    <h3 className="text-display mt-1 text-base font-semibold leading-snug text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-silver/95">
                      {s.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
