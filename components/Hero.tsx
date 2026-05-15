"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HeroVisual } from "./HeroVisual";
import { VideoPanel } from "./VideoPanel";
import { STATS } from "@/lib/data";
import { mediaAssets } from "@/lib/media";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14"
    >
      {/* Layered atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-44 left-1/2 h-[680px] w-[1100px] -translate-x-1/2 rounded-full bg-electric/14 blur-3xl" />
        <div className="absolute top-1/3 -left-44 h-[520px] w-[520px] rounded-full bg-cyan/14 blur-3xl" />
        <div className="absolute top-1/4 right-0 h-[520px] w-[520px] rounded-full bg-ice/8 blur-3xl" />
        <div className="absolute inset-0 bg-blueprint-fine opacity-50" />
        <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-cyan"
          >
            <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(0,200,255,0.7)]" />
            <span>Advanced Oxidation Process · Locally Engineered</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="text-display mt-5 text-balance text-[40px] font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-[56px] lg:text-[60px]"
          >
            Engineered for Compliance,
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text-cyan">Built with Reliance.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-3 max-w-xl text-[12px] uppercase tracking-[0.22em] text-silver/80 sm:text-[13px]"
          >
            Clean water solutions with lasting alliance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-clean/95 sm:text-base"
          >
            Aeroasia-Hydromex Technologies designs, builds, rehabilitates, and
            maintains advanced wastewater treatment systems — powered by{" "}
            <span className="text-cyan">Advanced Oxidation Process</span>{" "}
            technology and designed to support DENR compliance for hospitals,
            industries, malls, resorts, and LGUs nationwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm"
            >
              Book a Consultation
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#technology"
              className="btn-ghost inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm"
            >
              Explore the Technology
              <ChevronDown className="size-4" />
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-8 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-silver/95"
          >
            {[
              "200+ Projects",
              "15+ Years",
              "70+ Employees Nationwide",
              "DAO-Compliant Systems",
              "AOP Technology",
            ].map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
              >
                {chip}
              </li>
            ))}
          </motion.ul>

          {/* Inline counters — kept lightweight to preserve laptop fold */}
          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-white/10 pt-5 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.07 }}
              >
                <div className="text-display text-2xl font-semibold text-white sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-silver/80">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative mx-auto w-full max-w-[560px] lg:max-w-[600px]"
        >
          {mediaAssets.heroVideo.enabled ? (
            <VideoPanel
              asset={mediaAssets.heroVideo}
              aspectRatio="aspect-[5/4]"
              fallback={<HeroVisual />}
            />
          ) : (
            <HeroVisual />
          )}
        </motion.div>
      </div>
    </section>
  );
}
