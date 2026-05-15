"use client";

import { useState, type ReactNode } from "react";
import type { MediaAsset } from "@/lib/media";
import { cn } from "@/lib/cn";
import { MediaPlaceholder } from "./MediaPlaceholder";

/**
 * Decorative auto-playing video panel. Falls back to fallback ReactNode or
 * placeholder if the asset is not enabled or fails to load. Always muted,
 * looped, and playsInline so it's safe as a hero/background loop.
 */
export function VideoPanel({
  asset,
  fallback,
  caption,
  code,
  className,
  aspectRatio = "aspect-[4/3]",
  decorative = true,
}: {
  asset: MediaAsset;
  fallback?: ReactNode;
  caption?: string;
  code?: string;
  className?: string;
  aspectRatio?: string;
  decorative?: boolean;
}) {
  const [errored, setErrored] = useState(false);
  const showVideo = asset.enabled && !errored;

  return (
    <figure className={cn("relative w-full", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-2/40 shadow-[0_30px_70px_-40px_rgba(0,157,255,0.35)]",
          aspectRatio,
        )}
      >
        {showVideo ? (
          <>
            <video
              src={asset.src}
              poster={asset.poster}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden={decorative}
              onError={() => setErrored(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
          </>
        ) : (
          (fallback ?? (
            <MediaPlaceholder
              label={caption ?? asset.alt ?? "Video pending"}
              code={code}
              aspectRatio={aspectRatio}
              className="absolute inset-0"
            />
          ))
        )}

        {showVideo && caption && (
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
    </figure>
  );
}
