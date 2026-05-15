"use client";

import { motion } from "framer-motion";

/**
 * Engineered schematic visual: influent → primary → AOP core →
 * microbubble polish → effluent, with pipe connectors, valves,
 * fill indicators, and blueprint annotations.
 * Color train transitions from industrial gray-blue to clear cyan/ice.
 */

// Deterministic pseudo-random for SSR-safe bubble seeding
const BUBBLES = Array.from({ length: 12 }).map((_, i) => {
  const r = (n: number) =>
    Math.abs((Math.sin(i * 12.9898 + n) * 43758.5453) % 1);
  return {
    id: i,
    left: 14 + r(1) * 70,
    size: 3 + r(2) * 7,
    delay: r(3) * 4,
    duration: 5 + r(4) * 4,
  };
});

// Pre-computed hydroxyl node positions to keep SSR/client identical.
const HYDROXYL_NODES = [0, 60, 120, 180, 240, 300].map((deg) => {
  const r = 62;
  const rad = (deg * Math.PI) / 180;
  return {
    deg,
    cx: Math.round(Math.cos(rad) * r * 100) / 100,
    cy: Math.round(Math.sin(rad) * r * 100) / 100,
  };
});

export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[660px] sm:aspect-[5/4]">
      {/* Outer atmospheric glow */}
      <div className="absolute inset-0 -z-10 rounded-[36px] bg-cyan/12 blur-3xl" />

      {/* Frame */}
      <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-navy-2 via-navy to-navy-2 shadow-[0_40px_120px_-40px_rgba(0,157,255,0.4)]">
        {/* Blueprint backdrop */}
        <div className="absolute inset-0 bg-blueprint opacity-50" />

        {/* Top status bar — instrument-style */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 border-b border-white/10 bg-gradient-to-b from-navy-2/95 to-transparent px-5 py-3 text-[10px] font-mono uppercase tracking-[0.22em] text-silver/95">
          <div className="flex items-center gap-2">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald shadow-[0_0_8px_2px_rgba(46,204,113,0.6)]" />
            <span>AOP · ONLINE</span>
          </div>
          <div className="hidden sm:block">AEROASIA · HYDROMEX TREATMENT TRAIN</div>
          <div>SYS-001</div>
        </div>

        {/* Main schematic */}
        <svg
          viewBox="0 0 640 480"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="influent-tank" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2a3744" />
              <stop offset="100%" stopColor="#13202d" />
            </linearGradient>
            <linearGradient id="influent-water" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4a5b6c" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#1c2b39" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="primary-water" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0a3d62" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#082c47" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="aop-core" cx="0.5" cy="0.5" r="0.55">
              <stop offset="0%" stopColor="#ddf7ff" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#00c8ff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#009dff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="effluent-water" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#ddf7ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9be1ff" stopOpacity="0.75" />
            </linearGradient>
            <radialGradient id="effluent-glow" cx="0.5" cy="0.5" r="0.6">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ddf7ff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="pipe-grad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#0a3d62" />
              <stop offset="50%" stopColor="#00c8ff" />
              <stop offset="100%" stopColor="#ddf7ff" />
            </linearGradient>
            <filter id="aop-glow">
              <feGaussianBlur stdDeviation="8" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ---------- INFLUENT TANK (left) ---------- */}
          <g transform="translate(30,150)">
            {/* tank body */}
            <rect width="92" height="200" rx="6" fill="url(#influent-tank)" stroke="rgba(215,230,239,0.22)" />
            {/* water level */}
            <rect x="6" y="58" width="80" height="138" rx="3" fill="url(#influent-water)" />
            {/* fill marks */}
            <g stroke="rgba(215,230,239,0.25)" strokeWidth="1">
              <line x1="92" y1="80" x2="98" y2="80" />
              <line x1="92" y1="120" x2="98" y2="120" />
              <line x1="92" y1="160" x2="98" y2="160" />
            </g>
            {/* murky surface ripple */}
            <motion.path
              d="M 6 60 Q 28 54 46 60 T 86 60"
              fill="none"
              stroke="rgba(215,230,239,0.35)"
              strokeWidth="1.5"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* labels */}
            <text x="46" y="-12" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" letterSpacing="2.5" fill="#9ab2c6">INFLUENT</text>
            <text x="46" y="220" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" letterSpacing="2" fill="#6b8093">RAW · T-01</text>
          </g>

          {/* pipe: influent → primary */}
          <g>
            <line x1="122" y1="250" x2="180" y2="250" stroke="#0a3d62" strokeWidth="6" strokeLinecap="round" />
            <line x1="122" y1="250" x2="180" y2="250" stroke="#00c8ff" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 8" className="animate-pipe-flow" opacity="0.85" />
            {/* valve marker */}
            <circle cx="151" cy="250" r="5" fill="#061827" stroke="#00c8ff" strokeWidth="1.5" />
            <line x1="146" y1="250" x2="156" y2="250" stroke="#00c8ff" strokeWidth="1.2" />
            <text x="151" y="238" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="7" letterSpacing="1.5" fill="#6b8093">V-01</text>
          </g>

          {/* ---------- PRIMARY HANDLING ---------- */}
          <g transform="translate(180,180)">
            <rect width="68" height="140" rx="6" fill="url(#influent-tank)" stroke="rgba(215,230,239,0.22)" />
            <rect x="5" y="32" width="58" height="103" rx="3" fill="url(#primary-water)" />
            {/* screen lines */}
            <g stroke="rgba(0,200,255,0.45)" strokeWidth="1">
              <line x1="14" y1="42" x2="14" y2="130" />
              <line x1="24" y1="42" x2="24" y2="130" />
              <line x1="34" y1="42" x2="34" y2="130" />
              <line x1="44" y1="42" x2="44" y2="130" />
              <line x1="54" y1="42" x2="54" y2="130" />
            </g>
            <text x="34" y="-10" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" letterSpacing="2" fill="#9ab2c6">PRIMARY</text>
            <text x="34" y="156" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" letterSpacing="2" fill="#6b8093">SCREEN · S-01</text>
          </g>

          {/* pipe: primary → AOP */}
          <g>
            <line x1="248" y1="250" x2="270" y2="250" stroke="#0a3d62" strokeWidth="6" strokeLinecap="round" />
            <line x1="248" y1="250" x2="270" y2="250" stroke="#00c8ff" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 8" className="animate-pipe-flow" opacity="0.85" />
          </g>

          {/* ---------- AOP CORE ---------- */}
          <g transform="translate(320,250)">
            <circle r="98" fill="url(#aop-core)" filter="url(#aop-glow)" />
            {/* outer ring */}
            <circle r="62" fill="none" stroke="rgba(0,200,255,0.55)" strokeDasharray="3 6" />
            {/* middle counter-rotating */}
            <motion.circle
              r="46"
              fill="none"
              stroke="rgba(221,247,255,0.65)"
              strokeDasharray="2 8"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            {/* inner ring */}
            <motion.circle
              r="32"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1"
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
            {/* hydroxyl nodes on outer ring */}
            <g suppressHydrationWarning>
              {HYDROXYL_NODES.map(({ deg, cx, cy }) => (
                <motion.circle
                  key={deg}
                  cx={cx}
                  cy={cy}
                  r="3.5"
                  fill="#ddf7ff"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: deg / 220, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 4px rgba(0,200,255,0.9))" }}
                />
              ))}
            </g>
            {/* hydroxyl molecule marks */}
            <g fontFamily="ui-monospace,monospace" fontSize="9" letterSpacing="2" fill="#cdeaff" textAnchor="middle">
              <text y="4">·OH</text>
              <text y="-72" fontSize="7" letterSpacing="2.5" fill="#7fd8ff">AOP CORE</text>
            </g>
            {/* tag */}
            <text y="118" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" letterSpacing="2" fill="#6b8093">OXIDATION · R-AOP</text>
          </g>

          {/* pipe: AOP → microbubble polish */}
          <g>
            <line x1="418" y1="250" x2="440" y2="250" stroke="#0a3d62" strokeWidth="6" strokeLinecap="round" />
            <line x1="418" y1="250" x2="440" y2="250" stroke="#00c8ff" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 8" className="animate-pipe-flow" opacity="0.85" />
          </g>

          {/* ---------- MICROBUBBLE / TERTIARY ---------- */}
          <g transform="translate(440,190)">
            <rect width="58" height="120" rx="6" fill="rgba(8,31,53,0.85)" stroke="rgba(0,200,255,0.4)" />
            {/* effluent water */}
            <rect x="4" y="22" width="50" height="93" rx="3" fill="rgba(0,200,255,0.18)" />
            {/* rising microbubbles */}
            {[20, 32, 44].map((cx, i) => (
              <g key={cx}>
                {[0, 1, 2, 3].map((j) => (
                  <motion.circle
                    key={`${cx}-${j}`}
                    cx={cx}
                    cy={100}
                    r={1.6 + (j % 2) * 0.6}
                    fill="#ddf7ff"
                    animate={{ cy: [110, 28], opacity: [0, 0.9, 0] }}
                    transition={{
                      duration: 2.4 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.4 + j * 0.6,
                      ease: "easeIn",
                    }}
                  />
                ))}
              </g>
            ))}
            <text x="29" y="-10" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" letterSpacing="2" fill="#9ab2c6">POLISH</text>
            <text x="29" y="135" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" letterSpacing="2" fill="#6b8093">MICROBUBBLE · M-01</text>
          </g>

          {/* pipe: polish → effluent */}
          <g>
            <line x1="498" y1="250" x2="528" y2="250" stroke="url(#pipe-grad)" strokeWidth="6" strokeLinecap="round" />
            <line x1="498" y1="250" x2="528" y2="250" stroke="#ddf7ff" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 8" className="animate-pipe-flow" opacity="0.9" />
          </g>

          {/* ---------- EFFLUENT TANK (right) — clean treated water ---------- */}
          <g transform="translate(528,150)">
            {/* outer halo for "clean water" emphasis */}
            <rect width="82" height="200" rx="6" fill="url(#effluent-glow)" opacity="0.6" />
            <rect width="82" height="200" rx="6" fill="rgba(8,31,53,0.55)" stroke="rgba(221,247,255,0.75)" strokeWidth="1.2" />
            <rect x="6" y="58" width="70" height="138" rx="3" fill="url(#effluent-water)" />
            {/* level marks */}
            <g stroke="rgba(221,247,255,0.55)" strokeWidth="1">
              <line x1="0" y1="80" x2="6" y2="80" />
              <line x1="0" y1="120" x2="6" y2="120" />
              <line x1="0" y1="160" x2="6" y2="160" />
            </g>
            {/* highlight band — sense of crystalline clarity */}
            <rect x="6" y="60" width="70" height="6" fill="#ffffff" opacity="0.55" />
            <motion.path
              d="M 6 64 Q 26 58 41 64 T 76 64"
              fill="none"
              stroke="rgba(255,255,255,0.95)"
              strokeWidth="1.5"
              animate={{ x: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <text x="41" y="-12" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="10" fontWeight="600" letterSpacing="2.5" fill="#f7fcff">EFFLUENT</text>
            <text x="41" y="220" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" letterSpacing="2" fill="#9be1ff">CLEAR · T-02</text>
          </g>

          {/* Lower annotation rail */}
          <g stroke="rgba(215,230,239,0.18)" strokeWidth="1">
            <line x1="30" y1="395" x2="610" y2="395" strokeDasharray="2 6" />
          </g>
          <g fontFamily="ui-monospace,monospace" fontSize="8" letterSpacing="2" fill="#7d93a8" textAnchor="middle">
            <text x="76" y="415">INFLUENT</text>
            <text x="214" y="415">PRIMARY</text>
            <text x="320" y="415">·OH OXIDATION</text>
            <text x="469" y="415">POLISH</text>
            <text x="569" y="415">EFFLUENT</text>
          </g>
          <g fontFamily="ui-monospace,monospace" fontSize="7" letterSpacing="2" fill="#4f6477" textAnchor="middle">
            <text x="76" y="428">DARKER · MUTED</text>
            <text x="214" y="428">SCREENING</text>
            <text x="320" y="428">CYAN · ELECTRIC</text>
            <text x="469" y="428">MICROBUBBLE</text>
            <text x="569" y="428">ICE · CLEAR</text>
          </g>

          {/* engineering callouts in corners */}
          <g fontFamily="ui-monospace,monospace" fontSize="8" letterSpacing="2" fill="#4f6477">
            <text x="30" y="118">REV · 2025.05</text>
            <text x="610" y="118" textAnchor="end">SCH · AOP-08</text>
          </g>
        </svg>

        {/* Floating microbubbles overlay */}
        <div className="pointer-events-none absolute inset-0">
          {BUBBLES.map((b) => (
            <span
              key={b.id}
              className="absolute bottom-[18%] rounded-full bg-cyan/40"
              style={{
                left: `${b.left}%`,
                width: b.size,
                height: b.size,
                animation: `bubble-rise ${b.duration}s ${b.delay}s ease-in infinite`,
                boxShadow: "0 0 8px 1px rgba(0,200,255,0.55)",
              }}
            />
          ))}
        </div>

        {/* Bottom readouts — like an instrument panel */}
        <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-1 border-t border-white/10 bg-gradient-to-t from-navy/95 to-transparent px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.18em] text-silver/95 sm:gap-3">
          <div className="flex items-center gap-2">
            <span className="size-1 rounded-full bg-cyan shadow-[0_0_6px_1px_rgba(0,200,255,0.7)]" />
            <span>FLOW · STABLE</span>
          </div>
          <div className="text-center text-silver/95">DAO 2016-08 · 2021-19</div>
          <div className="text-right text-ice">EFFLUENT · CLEAR</div>
        </div>
      </div>
    </div>
  );
}
