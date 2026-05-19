import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /**
   * When true, skip the Reveal fade-in for the eyebrow/title/description
   * so the heading is visible immediately on first paint. Use for
   * above-the-fold headings, especially on mobile where waiting for
   * framer-motion to hydrate would leave the section background blank.
   */
  eager?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  eager = false,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal eager={eager}>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan sm:mb-4">
            <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(0,194,255,0.7)]" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05} eager={eager}>
        <h2 className="text-display text-balance text-[26px] font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1} eager={eager}>
          <p className="mt-3 text-pretty text-[14.5px] leading-relaxed text-silver/95 sm:mt-5 sm:text-base md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
