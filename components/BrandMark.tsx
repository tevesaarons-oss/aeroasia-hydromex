"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { mediaAssets } from "@/lib/media";

/**
 * Engineered corporate brand mark for Aeroasia-Hydromex.
 *
 * - If `mediaAssets.logo.enabled` is true and the file loads, the official
 *   logo is used and the SVG monogram is hidden.
 * - Otherwise renders a hexagonal badge with an "AH" monogram and a stylized
 *   water drop — deliberately not pretending to be the official mark.
 */
export function BrandMark({
  size = "md",
  className,
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  const [logoFailed, setLogoFailed] = useState(false);
  const useOfficialLogo = mediaAssets.logo.enabled && !logoFailed;
  const dim = size === "sm" ? "size-8" : "size-10";

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Aeroasia-Hydromex home"
    >
      <span
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-lg border border-cyan/40 bg-gradient-to-br from-navy-2 via-navy to-navy-2 shadow-[0_8px_24px_-10px_rgba(0,200,255,0.55)]",
          dim,
        )}
      >
        {useOfficialLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={mediaAssets.logo.src}
            alt={mediaAssets.logo.alt ?? "Aeroasia-Hydromex"}
            className="size-full object-contain p-1"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <svg viewBox="0 0 32 32" className="size-full" aria-hidden>
            <defs>
              <linearGradient id="bm-grad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#00c8ff" />
                <stop offset="100%" stopColor="#009dff" />
              </linearGradient>
            </defs>
            <polygon
              points="16,4 27,10 27,22 16,28 5,22 5,10"
              fill="none"
              stroke="url(#bm-grad)"
              strokeWidth="1.2"
              strokeLinejoin="round"
              opacity="0.85"
            />
            <path
              d="M16 9 C 12 13 11 17 13 19.5 C 14.6 21.7 17.4 21.7 19 19.5 C 21 17 20 13 16 9 Z"
              fill="url(#bm-grad)"
              opacity="0.95"
            />
            <circle cx="14.8" cy="14.6" r="1" fill="#f7fcff" opacity="0.85" />
          </svg>
        )}
      </span>
      <span className="text-display flex flex-col leading-none">
        <span
          className={cn(
            "font-semibold tracking-tight text-white",
            size === "sm" ? "text-[13px]" : "text-[15px]",
          )}
        >
          Aeroasia<span className="text-cyan">·</span>Hydromex
        </span>
        <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-silver/80">
          Technologies Co. Ltd.
        </span>
      </span>
    </Link>
  );
}
