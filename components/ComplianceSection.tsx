"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  BadgeCheck,
  ClipboardList,
  FileText,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { COMPLIANCE_POINTS } from "@/lib/data";

export function ComplianceSection() {
  return (
    <section className="relative scroll-mt-20 overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-fine opacity-25" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Compliance Engineering"
          title={
            <>
              Designed around compliance,{" "}
              <span className="gradient-text-cyan">performance, and continuity.</span>
            </>
          }
          description="Aeroasia designs systems around effluent quality, operational reliability, and Philippine regulatory requirements — supporting compliance through proper system design, operation, maintenance, and monitoring."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0e2238] via-[#0a1d31] to-[#0a1d31] p-6 sm:p-8 shadow-[0_30px_70px_-40px_rgba(0,157,255,0.45)]">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-cyan/15 ring-1 ring-cyan/40">
                    <FileText className="size-4.5 text-cyan" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                      Aeroasia Compliance Dossier
                    </div>
                    <div className="text-display text-base font-semibold text-white">
                      Effluent Standards Alignment
                    </div>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
                  DOC · COMP-01
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-xl border border-cyan/35 bg-gradient-to-br from-cyan/10 via-navy-2/50 to-navy/30 p-4">
                  <div className="absolute right-3 top-3 font-mono text-[9px] uppercase tracking-[0.22em] text-cyan/75">
                    REG · 01
                  </div>
                  <BadgeCheck className="size-5 text-cyan" />
                  <div className="text-display mt-2.5 text-[15px] font-semibold text-white">
                    DENR DAO 2016-08
                  </div>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-silver/95">
                    Water quality guidelines and general effluent standards.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-electric/40 bg-gradient-to-br from-electric/12 via-navy-2/50 to-navy/30 p-4">
                  <div className="absolute right-3 top-3 font-mono text-[9px] uppercase tracking-[0.22em] text-electric/80">
                    REG · 02
                  </div>
                  <ShieldCheck className="size-5 text-electric" />
                  <div className="text-display mt-2.5 text-[15px] font-semibold text-white">
                    DENR DAO 2021-19
                  </div>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-silver/95">
                    Updated effluent expectations and reporting frameworks.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-2.5">
                  <ClipboardList className="size-4.5 text-cyan" />
                  <span className="text-display text-[14px] font-semibold text-white">
                    Aeroasia compliance scope
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
                  6 items
                </span>
              </div>

              <ul className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.02]">
                {COMPLIANCE_POINTS.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-center gap-3 px-4 py-3 text-[13.5px] text-silver/95"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-cyan/15 ring-1 ring-cyan/30">
                      <FileCheck2 className="size-3.5 text-cyan" />
                    </span>
                    <span className="w-10 shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{c}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan/85">
                      Aligned
                    </span>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-5 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-silver/85">
                Aeroasia designs systems to support compliance through proper
                engineering, operation, maintenance, and monitoring. Final
                regulatory outcomes depend on facility operation and site
                conditions.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-2 via-navy to-navy-2 p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-32 -top-32 size-64 rounded-full bg-cyan/12 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-25" />

              <div className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                Effluent design targets
              </div>
              <h3 className="text-display relative mt-2 text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Designed to align with current Philippine standards.
              </h3>
              <p className="relative mt-4 text-[14.5px] leading-relaxed text-silver/95">
                Each Aeroasia STP is engineered around DAO 2016-08 and
                DAO 2021-19 effluent expectations, with sampling-readiness
                operational planning and continuous service support.
              </p>

              <ul className="relative mt-6 space-y-3">
                {[
                  { k: "Effluent Quality", v: "DAO-aligned design targets" },
                  { k: "Sampling Readiness", v: "Documentation + monitoring routine" },
                  { k: "Preventive Maintenance", v: "Scheduled servicing cadence" },
                  { k: "Operations Support", v: "Nationwide on-call coverage" },
                ].map((row) => (
                  <li
                    key={row.k}
                    className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
                      {row.k}
                    </span>
                    <span className="text-right text-[13.5px] text-clean/95">
                      {row.v}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
                <span>Designed · Engineered · Maintained</span>
                <span className="text-cyan/85">Aeroasia · Nationwide</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
