import { cn } from "@/lib/cn";

type Props = {
  /** Stage number, e.g. "02". Shown as the station code. */
  stage: string;
  /** Short label for the destination section, e.g. "Service Stack". */
  label: string;
  /** Optional supplementary annotation shown on the right side. */
  annotation?: string;
  className?: string;
};

/**
 * Pipeline-style transition between major sections. Renders a thin flowing
 * cyan hairline with a small station-code chip in the middle — meant to be
 * read as: "the page is moving from one engineering stage to the next."
 *
 * Visual is intentionally restrained: no looping animation, a single
 * gradient line, and chip styling that matches the navy/cyan/ice palette.
 */
export function SectionDivider({ stage, label, annotation, className }: Props) {
  return (
    <div className={cn("relative", className)} aria-hidden="true">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative flex items-center gap-3 py-6 sm:gap-5 sm:py-8">
          {/* Left flow line — pipe segment with a cap dot */}
          <div className="relative flex flex-1 items-center gap-2">
            <span className="size-1.5 shrink-0 rounded-full bg-cyan/55 shadow-[0_0_6px_1px_rgba(0,200,255,0.45)]" />
            <span className="h-px flex-1 bg-gradient-to-r from-cyan/45 via-cyan/20 to-transparent" />
          </div>

          {/* Station chip */}
          <div className="flex items-center gap-2.5 rounded-full border border-cyan/30 bg-navy-2/75 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] backdrop-blur">
            <span className="text-silver/85">Stage&nbsp;{stage}</span>
            <span className="text-cyan/45">·</span>
            <span className="text-cyan/95">{label}</span>
          </div>

          {/* Right flow line — mirrored, with directional cap */}
          <div className="relative flex flex-1 items-center gap-2">
            <span className="h-px flex-1 bg-gradient-to-l from-cyan/45 via-cyan/20 to-transparent" />
            <span className="relative size-2 shrink-0">
              <span className="absolute inset-0 rotate-45 border-r border-t border-cyan/60" />
            </span>
          </div>
        </div>

        {/* Optional sub-label, sits under the station chip in faint type */}
        {annotation && (
          <div className="-mt-3 mb-1 text-center font-mono text-[9px] uppercase tracking-[0.22em] text-silver/55">
            {annotation}
          </div>
        )}
      </div>
    </div>
  );
}
