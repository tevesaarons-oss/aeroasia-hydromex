"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/lib/data";

/**
 * AOP treatment train as a premium engineering schematic.
 * Color train: industrial gray-blue (influent) → cyan (·OH oxidation)
 * → ice-blue / clean white (effluent).
 */

const STAGE_COLOR = [
  "#3a4a59", // 01 — raw influent
  "#345566", // 02 — primary
  "#1f6a92", // 03 — anaerobic
  "#0098cc", // 04 — ozone+pH
  "#00c8ff", // 05 — ·OH (peak energy)
  "#5fd9ff", // 06 — microbubble
  "#a4ecff", // 07 — tertiary
  "#f7fcff", // 08 — effluent (clean water white, brightest)
];

const STAGE_LABEL = [
  "INFLUENT",
  "PRIMARY HANDLING",
  "ANAEROBIC DIGESTION",
  "OZONE + pH",
  "·OH OXIDATION",
  "MICROBUBBLE CONTACT",
  "TERTIARY POLISHING",
  "CLEANER EFFLUENT",
];

// Compact, readable descriptions tuned for in-diagram legibility.
const STEP_SHORT_DESC: Record<number, string> = {
  1: "Raw wastewater enters from facility drainage.",
  2: "Solids and grit are removed before treatment.",
  3: "Organic load reduced in oxygen-free reactors.",
  4: "Ozone and elevated pH set the chemistry stage.",
  5: "Highly reactive ·OH radicals oxidize contaminants.",
  6: "Microbubbles boost gas-to-water contact.",
  7: "Final clarification and filtration polish.",
  8: "Designed to support DENR compliance.",
};

export function ProcessDiagram() {
  return (
    <div className="relative">
      {/* --- Desktop horizontal schematic --- */}
      <div className="hidden lg:block">
        <svg
          viewBox="0 0 1280 220"
          className="w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="pipe-train" x1="0" x2="1" y1="0" y2="0">
              {STAGE_COLOR.map((c, i) => (
                <stop
                  key={i}
                  offset={`${(i / (STAGE_COLOR.length - 1)) * 100}%`}
                  stopColor={c}
                />
              ))}
            </linearGradient>
          </defs>

          {/* Backbone pipe */}
          <line
            x1="60"
            y1="110"
            x2="1220"
            y2="110"
            stroke="url(#pipe-train)"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.95"
          />
          {/* Animated flow dashes (brighter for visibility) */}
          <line
            x1="60"
            y1="110"
            x2="1220"
            y2="110"
            stroke="#f7fcff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="14 18"
            className="animate-pipe-flow"
            opacity="0.85"
          />

          {/* Tick marks under each node */}
          {STAGE_COLOR.map((_, i) => {
            const x = 60 + (i * 1160) / 7;
            return (
              <line
                key={`tick-${i}`}
                x1={x}
                y1={94}
                x2={x}
                y2={126}
                stroke="rgba(215,230,239,0.4)"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* Step nodes positioned over the pipe */}
        <ol className="relative -mt-[148px] grid grid-cols-8 gap-3">
          {PROCESS.map((p, i) => {
            const Icon = p.icon;
            const color = STAGE_COLOR[i];
            const stageLabel = STAGE_LABEL[i];
            const isFinal = i === STAGE_COLOR.length - 1;
            return (
              <motion.li
                key={p.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.07,
                  ease: [0.2, 0.7, 0.2, 1],
                }}
                className="flex flex-col items-center px-1 text-center"
              >
                <div
                  className="relative flex size-[88px] items-center justify-center rounded-full border-2 bg-navy"
                  style={{
                    borderColor: `${color}cc`,
                    boxShadow: isFinal
                      ? `0 0 36px -4px ${color}, 0 0 12px -2px #ddf7ff`
                      : `0 0 30px -6px ${color}`,
                  }}
                >
                  <span
                    className="absolute inset-0 rounded-full opacity-35 blur-md"
                    style={{ background: color }}
                  />
                  <Icon
                    className="relative size-6"
                    style={{ color: isFinal ? "#f7fcff" : color }}
                  />
                  <span className="text-display absolute -bottom-1 right-1 rounded-full bg-navy px-1.5 py-0.5 text-[10px] font-semibold text-silver/90 ring-1 ring-white/15">
                    {p.step.toString().padStart(2, "0")}
                  </span>
                </div>

                <div
                  className="mt-5 font-mono text-[10px] font-medium uppercase tracking-[0.18em]"
                  style={{ color: `${color}ee` }}
                >
                  {stageLabel}
                </div>
                <h3
                  className={`text-display mt-2 max-w-[160px] text-[15px] font-semibold leading-snug ${isFinal ? "text-clean" : "text-white"}`}
                >
                  {p.title}
                </h3>
                <p className="mt-2 max-w-[170px] text-[12.5px] leading-relaxed text-silver/95">
                  {STEP_SHORT_DESC[p.step] ?? p.desc}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>

      {/* --- Mobile / tablet stacked schematic --- */}
      <ol className="relative space-y-5 lg:hidden">
        {/* vertical pipe gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[36px] top-2 bottom-2 w-[6px] rounded-full"
          style={{
            background: `linear-gradient(180deg, ${STAGE_COLOR.join(",")})`,
            opacity: 0.95,
          }}
        />
        {/* animated overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[38px] top-2 bottom-2 w-[2px] rounded-full"
          style={{
            background:
              "repeating-linear-gradient(180deg, rgba(247,252,255,0.95) 0 12px, transparent 12px 28px)",
            animation: "pipe-flow 4s linear infinite",
          }}
        />

        {PROCESS.map((p, i) => {
          const Icon = p.icon;
          const color = STAGE_COLOR[i];
          const stageLabel = STAGE_LABEL[i];
          const isFinal = i === STAGE_COLOR.length - 1;
          return (
            <motion.li
              key={p.step}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="relative flex items-start gap-4 pl-1"
            >
              <div
                className="relative z-10 flex size-[64px] shrink-0 items-center justify-center rounded-full border-2 bg-navy"
                style={{
                  borderColor: `${color}cc`,
                  boxShadow: isFinal
                    ? `0 0 24px -4px ${color}, 0 0 10px -2px #ddf7ff`
                    : `0 0 18px -4px ${color}aa`,
                }}
              >
                <Icon
                  className="size-5"
                  style={{ color: isFinal ? "#f7fcff" : color }}
                />
                <span className="text-display absolute -bottom-1 -right-1 rounded-full bg-navy px-1.5 py-0.5 text-[10px] font-semibold text-silver/90 ring-1 ring-white/15">
                  {p.step.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="min-w-0 pt-1">
                <div
                  className="font-mono text-[10px] font-medium uppercase tracking-[0.18em]"
                  style={{ color: `${color}ee` }}
                >
                  {stageLabel}
                </div>
                <h3
                  className={`text-display mt-1 text-[16px] font-semibold leading-snug ${isFinal ? "text-clean" : "text-white"}`}
                >
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-silver/95">
                  {STEP_SHORT_DESC[p.step] ?? p.desc}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
