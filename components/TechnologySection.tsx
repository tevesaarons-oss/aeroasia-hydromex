import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProcessDiagram } from "./ProcessDiagram";
import { MediaPanel } from "./MediaPanel";
import { AOP_BENEFITS } from "@/lib/data";
import { mediaAssets } from "@/lib/media";
import {
  officialAopDiagram,
  realEquipmentPhotos,
} from "@/lib/curatedMedia";

export function TechnologySection() {
  return (
    <section id="technology" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-electric/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-cyan/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Advanced Oxidation Process"
          title={
            <>
              Advanced Oxidation Process &mdash;{" "}
              <span className="gradient-text-cyan">engineered for difficult wastewater.</span>
            </>
          }
          description={
            <>
              AOP uses highly reactive hydroxyl radicals (·OH) to break down
              contaminants that conventional treatment may struggle to remove.
              Aeroasia&rsquo;s locally engineered approach combines anaerobic
              digestion, ozone, elevated pH, microbubble contact, and tertiary
              treatment &mdash; a staged train designed for cleaner effluent.
            </>
          }
        />

        {/* Schematic — primary engineering visual */}
        <Reveal>
          <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-b from-navy-2/40 to-navy/30 p-6 sm:p-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/95">
              <span>Treatment Train · 8 Stages</span>
              <span className="hidden sm:inline">Influent → ·OH Core → Effluent</span>
              <span>Schematic · AOP-08</span>
            </div>
            <ProcessDiagram />
          </div>
        </Reveal>

        {/* Official AOP diagram + real equipment photos */}
        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
            {/* Official Aeroasia AOP process flow diagram */}
            <figure className="card-lift relative overflow-hidden rounded-2xl border border-cyan/30 bg-gradient-to-b from-navy-2/60 to-navy/30 p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                <span>Official AOP Flow · Aeroasia</span>
                <span className="text-silver/80">DOC · AOP-FLOW-01</span>
              </div>
              <div className="overflow-hidden rounded-xl bg-clean">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={officialAopDiagram.src}
                  alt={officialAopDiagram.alt}
                  className="aspect-[16/9] w-full object-contain"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-[13px] leading-relaxed text-silver/95">
                Real Aeroasia AOP process train &mdash; from kitchen / influent
                through grease trap, digesters, AOP core, multimedia filter,
                and ceramic membrane to discharge or recycle.
              </figcaption>
            </figure>

            {/* Real equipment photos */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {realEquipmentPhotos.map((eq, i) => (
                <figure
                  key={eq.src}
                  className="card-lift relative overflow-hidden rounded-2xl border border-white/10 bg-navy-2/40 shadow-[0_30px_70px_-40px_rgba(0,157,255,0.45)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={eq.src}
                    alt={eq.alt}
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 p-4">
                    <span className="text-display text-sm font-semibold text-clean">
                      {eq.caption}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
                      AOP-{String(i + 2).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Manifest-driven AOP media (only renders when user enables in lib/media.ts) */}
        {(mediaAssets.aopSystem.enabled ||
          mediaAssets.aopDiagram.enabled ||
          mediaAssets.aopMicrobubble.enabled) && (
          <Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mediaAssets.aopSystem.enabled && (
                <MediaPanel asset={mediaAssets.aopSystem} caption={mediaAssets.aopSystem.caption} code="AOP-S1" aspectRatio="aspect-[4/3]" />
              )}
              {mediaAssets.aopDiagram.enabled && (
                <MediaPanel asset={mediaAssets.aopDiagram} caption={mediaAssets.aopDiagram.caption} code="AOP-S2" aspectRatio="aspect-[4/3]" />
              )}
              {mediaAssets.aopMicrobubble.enabled && (
                <MediaPanel asset={mediaAssets.aopMicrobubble} caption={mediaAssets.aopMicrobubble.caption} code="AOP-S3" aspectRatio="aspect-[4/3]" />
              )}
            </div>
          </Reveal>
        )}

        {/* Benefits grid */}
        <div className="mt-16">
          <Reveal>
            <h3 className="text-display text-center text-xl font-semibold text-white sm:text-2xl">
              Why facilities choose Aeroasia AOP
            </h3>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AOP_BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={`${b.title}-${i}`} delay={i * 0.04}>
                  <div className="card-lift glass h-full rounded-2xl p-5">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-cyan/10 ring-1 ring-cyan/30">
                      <Icon className="size-4.5 text-cyan" />
                    </div>
                    <h4 className="text-display mt-4 text-[15px] font-semibold leading-snug text-white">
                      {b.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-silver/95">
                      {b.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-silver/85">
              Final system design and treatment performance depend on
              wastewater characteristics, site conditions, operation, and
              maintenance.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
