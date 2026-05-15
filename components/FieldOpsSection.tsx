import { Wrench, HardHat } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { MediaPanel } from "./MediaPanel";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { mediaAssets } from "@/lib/media";

export function FieldOpsSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-fine opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-cyan/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Field Engineering & Operations"
          title={
            <>
              Engineered, installed, and supported{" "}
              <span className="gradient-text-cyan">in the field.</span>
            </>
          }
          description="Aeroasia is not just a technology concept. We&rsquo;re a real engineering and operations partner — installation, rehabilitation, troubleshooting, preventive maintenance, and after-sales support, delivered on site across the Philippines."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mediaAssets.field.map((f, i) => (
            <Reveal key={f.src} delay={i * 0.05}>
              <div className="card-lift overflow-hidden rounded-2xl border border-white/10 bg-navy-2/40 p-4">
                <MediaPanel
                  asset={f}
                  caption={f.caption}
                  code={`FOPS-${String(i + 1).padStart(2, "0")}`}
                  aspectRatio="aspect-[4/3]"
                  fallback={
                    <MediaPlaceholder
                      label={f.caption ?? "Field photo pending"}
                      code={`FOPS-${String(i + 1).padStart(2, "0")}`}
                      aspectRatio="aspect-[4/3]"
                    />
                  }
                />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                      {f.meta ?? "Field"}
                    </div>
                    <h3 className="text-display mt-1 text-[15px] font-semibold leading-snug text-white">
                      {f.caption}
                    </h3>
                  </div>
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan/10 ring-1 ring-cyan/30">
                    {i % 2 === 0 ? (
                      <HardHat className="size-4 text-cyan" />
                    ) : (
                      <Wrench className="size-4 text-cyan" />
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-silver/85">
            70+ engineers, technicians, and operators · Nationwide coverage · Real
            field engagement on every project
          </p>
        </Reveal>
      </div>
    </section>
  );
}
