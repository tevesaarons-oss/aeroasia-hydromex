/**
 * Highly stylized, abstract Philippine archipelago dot pattern.
 * Not a literal geographic map — a low-fidelity national projection
 * built from positioned dots so it reads as "nationwide" without
 * misrepresenting precise geography.
 */
export function PHBackdrop({ className }: { className?: string }) {
  // Dot clusters approximate the three island groups.
  // Coordinates are in viewBox units (0-200 wide, 0-260 tall).
  const dots: { x: number; y: number; r?: number; o?: number }[] = [
    // Luzon cluster (north)
    ...generateCluster(82, 50, 22, 14, 12),
    // Visayas cluster (mid)
    ...generateCluster(98, 130, 26, 10, 8),
    // Mindanao cluster (south)
    ...generateCluster(118, 200, 30, 16, 14),
    // small island scatter
    ...generateCluster(70, 95, 10, 4, 6),
    ...generateCluster(140, 165, 12, 5, 7),
  ];

  return (
    <svg
      viewBox="0 0 200 260"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <radialGradient id="ph-gradient" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00c8ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Soft glow halo */}
      <ellipse cx="100" cy="140" rx="80" ry="120" fill="url(#ph-gradient)" />
      {/* Dots */}
      <g>
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.r ?? 1.2}
            fill="#00c8ff"
            opacity={d.o ?? 0.35}
          />
        ))}
      </g>
      {/* Faint connecting lines suggesting nationwide reach */}
      <g stroke="rgba(0,200,255,0.18)" strokeWidth="0.4" fill="none">
        <path d="M 82 50 Q 95 90 98 130" />
        <path d="M 98 130 Q 110 168 118 200" />
      </g>
    </svg>
  );
}

function generateCluster(
  cx: number,
  cy: number,
  radius: number,
  rows: number,
  cols: number,
): { x: number; y: number; r?: number; o?: number }[] {
  const out: { x: number; y: number; r?: number; o?: number }[] = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // pseudo-random offsets keep cluster organic
      const seed = (i * 7 + j * 13 + cx + cy) % 100;
      const dx = ((seed * 9301 + 49297) % 233280) / 233280 - 0.5;
      const dy = ((seed * 1217 + 7919) % 233280) / 233280 - 0.5;
      const x = cx + (j - cols / 2) * 2.2 + dx * 3;
      const y = cy + (i - rows / 2) * 2.8 + dy * 3;
      // distance from center for falloff
      const d = Math.hypot(x - cx, y - cy);
      if (d > radius) continue;
      const o = 0.45 - (d / radius) * 0.35;
      out.push({ x, y, r: 0.9 + Math.abs(dx) * 0.6, o });
    }
  }
  return out;
}
