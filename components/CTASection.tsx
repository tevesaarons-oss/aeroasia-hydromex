import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT } from "@/lib/data";

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-navy-2 via-navy to-navy-2 p-8 sm:p-14">
            {/* Decorative layers — pure cyan/ice only */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-32 -top-32 size-96 rounded-full bg-cyan/25 blur-3xl" />
              <div className="absolute -left-32 bottom-0 size-96 rounded-full bg-electric/15 blur-3xl" />
              <div className="absolute inset-0 bg-blueprint-fine opacity-30" />
            </div>

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan">
                  <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(0,200,255,0.7)]" />
                  Ready to engineer the next system
                </div>
                <h2 className="text-display mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                  Ready to upgrade your{" "}
                  <span className="gradient-text-cyan">wastewater system?</span>
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-silver/95">
                  Whether you&rsquo;re building a new facility, rehabilitating
                  an aging STP, preparing for DENR sampling, or exploring AOP
                  upgrades &mdash; Aeroasia-Hydromex can help engineer the right
                  path forward.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="#contact"
                  className="btn-primary inline-flex h-13 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
                >
                  Book a Consultation
                  <ArrowRight className="size-4.5" />
                </a>
                <a
                  href={`tel:${CONTACT.phones[0].replace(/\s+/g, "")}`}
                  className="btn-ghost inline-flex h-13 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
                >
                  <Phone className="size-4.5" />
                  {CONTACT.phones[0]}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
