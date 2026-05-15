import { cn } from "@/lib/cn";

/**
 * Premium engineering-grid placeholder. Used wherever a real media file is
 * not yet available. Deliberately not a "broken image" — reads as an
 * intentional schematic card.
 */
export function MediaPlaceholder({
  label = "Project image pending",
  code,
  className,
  aspectRatio = "aspect-[4/3]",
}: {
  label?: string;
  code?: string;
  className?: string;
  aspectRatio?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-2/70 via-navy/40 to-navy-2/70",
        aspectRatio,
        className,
      )}
    >
      <div className="absolute inset-0 bg-blueprint opacity-40" />
      <div className="absolute inset-0 bg-dotgrid opacity-25" />
      <div className="pointer-events-none absolute -top-12 -right-12 size-40 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 size-40 rounded-full bg-electric/10 blur-3xl" />

      {/* Engineering corner brackets */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] text-cyan/30"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.6">
          <path d="M0 6 L0 0 L6 0" />
          <path d="M94 0 L100 0 L100 6" />
          <path d="M100 94 L100 100 L94 100" />
          <path d="M6 100 L0 100 L0 94" />
        </g>
      </svg>

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/80">
          Asset placeholder
        </div>
        <div className="text-display mt-1.5 max-w-[80%] text-sm font-medium text-clean/85">
          {label}
        </div>
        {code && (
          <div className="mt-3 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-silver/70">
            {code}
          </div>
        )}
      </div>
    </div>
  );
}
