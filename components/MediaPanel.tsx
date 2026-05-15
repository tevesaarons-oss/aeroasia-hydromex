"use client";

import { useState, type ReactNode } from "react";
import type { MediaAsset } from "@/lib/media";
import { cn } from "@/lib/cn";
import { MediaPlaceholder } from "./MediaPlaceholder";

/**
 * Renders a real image asset when `asset.enabled` is true AND the file loads
 * successfully. Otherwise shows either the provided `fallback` (e.g. an SVG
 * schematic) or a premium MediaPlaceholder.
 */
export function MediaPanel({
  asset,
  fallback,
  caption,
  code,
  meta,
  className,
  aspectRatio = "aspect-[4/3]",
}: {
  asset: MediaAsset;
  fallback?: ReactNode;
  caption?: string;
  code?: string;
  meta?: { label: string; value: string }[];
  className?: string;
  aspectRatio?: string;
}) {
  const [errored, setErrored] = useState(false);
  const showImage = asset.enabled && !errored;

  return (
    <figure className={cn("relative w-full", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-2/40 shadow-[0_30px_70px_-40px_rgba(0,157,255,0.35)]",
          aspectRatio,
        )}
      >
        {showImage ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset.src}
              alt={asset.alt ?? ""}
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => setErrored(true)}
              loading="lazy"
            />
            {/* dark gradient overlay for readability */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
          </>
        ) : (
          (fallback ?? (
            <MediaPlaceholder
              label={caption ?? asset.alt ?? "Asset pending"}
              code={code}
              aspectRatio={aspectRatio}
              className="absolute inset-0"
            />
          ))
        )}

        {/* Caption overlay */}
        {showImage && caption && (
          <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 p-4">
            <span className="text-display text-sm font-semibold text-clean">
              {caption}
            </span>
            {code && (
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
                {code}
              </span>
            )}
          </figcaption>
        )}
      </div>

      {meta && meta.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-silver/75">
          {meta.map((m) => (
            <li key={m.label}>
              <span className="text-silver/55">{m.label}</span>{" "}
              <span className="text-silver/95">· {m.value}</span>
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}
