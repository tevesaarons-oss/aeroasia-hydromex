import { Droplets, Beaker, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { MediaPanel } from "./MediaPanel";
import { VideoPanel } from "./VideoPanel";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { mediaAssets } from "@/lib/media";

export function BeforeAfterSection() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-fine opacity-25" />
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-electric/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-ice/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="From Wastewater to Cleaner Effluent"
          title={
            <>
              The visible difference engineered{" "}
              <span className="gradient-text-cyan">stage by stage.</span>
            </>
          }
          description="A snapshot of what Aeroasia treatment trains are designed to deliver — from raw influent through AOP-driven oxidation to cleaner, polished effluent. Real results will replace the placeholders below when Aeroasia provides project photos."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Before */}
          <Reveal>
            <div className="card-lift overflow-hidden rounded-2xl border border-white/10 bg-navy-2/40 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-graphite/60 ring-1 ring-white/15">
                    <Droplets className="size-4 text-silver/85" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
                      Stage · 01
                    </div>
                    <h3 className="text-display text-base font-semibold text-white">
                      Influent
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver/70">
                  Raw
                </span>
              </div>
              <div className="mt-4">
                <MediaPanel
                  asset={mediaAssets.beforeWater}
                  caption="Raw wastewater sample"
                  code="BA-01"
                  aspectRatio="aspect-[4/3]"
                  fallback={
                    <MediaPlaceholder
                      label="Raw wastewater sample"
                      code="BA-01"
                      aspectRatio="aspect-[4/3]"
                    />
                  }
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-silver/95">
                Untreated influent enters from the facility&rsquo;s drainage
                network — variable loading, solids, organics, and contaminants
                depending on the sector.
              </p>
            </div>
          </Reveal>

          {/* Process video / schematic */}
          <Reveal delay={0.05}>
            <div className="card-lift relative overflow-hidden rounded-2xl border border-cyan/30 bg-gradient-to-br from-cyan/10 via-navy-2/40 to-navy/40 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-cyan/15 ring-1 ring-cyan/40">
                    <Beaker className="size-4 text-cyan" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                      Stage · 02
                    </div>
                    <h3 className="text-display text-base font-semibold text-white">
                      AOP Treatment
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan/85">
                  ·OH
                </span>
              </div>
              <div className="mt-4">
                <VideoPanel
                  asset={mediaAssets.beforeAfterVideo}
                  caption="Treatment in operation"
                  code="BA-02"
                  aspectRatio="aspect-[4/3]"
                  fallback={
                    <MediaPlaceholder
                      label="Treatment process video"
                      code="BA-02"
                      aspectRatio="aspect-[4/3]"
                    />
                  }
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-silver/95">
                Anaerobic digestion, ozone, elevated pH, hydroxyl radicals,
                microbubble contact, and tertiary polishing — engineered to
                produce cleaner discharge.
              </p>
            </div>
          </Reveal>

          {/* After */}
          <Reveal delay={0.1}>
            <div className="card-lift overflow-hidden rounded-2xl border border-ice/40 bg-gradient-to-br from-ice/10 via-navy-2/40 to-navy/40 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-ice/15 ring-1 ring-ice/40">
                    <Sparkles className="size-4 text-clean" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-clean">
                      Stage · 03
                    </div>
                    <h3 className="text-display text-base font-semibold text-white">
                      Cleaner Effluent
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-clean/85">
                  Polished
                </span>
              </div>
              <div className="mt-4">
                <MediaPanel
                  asset={mediaAssets.afterWater}
                  caption="Treated effluent sample"
                  code="BA-03"
                  aspectRatio="aspect-[4/3]"
                  fallback={
                    <MediaPlaceholder
                      label="Treated effluent sample"
                      code="BA-03"
                      aspectRatio="aspect-[4/3]"
                    />
                  }
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-silver/95">
                Polished discharge engineered to support DENR compliance — and,
                where applicable to site conditions, suitable for non-potable
                reuse objectives.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-silver/85">
            Actual treatment performance depends on wastewater characteristics,
            site conditions, system design, operation, and maintenance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
