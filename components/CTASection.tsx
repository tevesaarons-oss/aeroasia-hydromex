import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SOCIAL } from "@/lib/data";
import { FacebookIcon, WhatsAppIcon } from "./BrandIcons";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
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
                  upgrades &mdash; message us on Facebook, or connect through
                  Messenger or WhatsApp for the fastest reply. Follow the
                  active Facebook page for recent set-ups.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={SOCIAL.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex h-13 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
                >
                  <FacebookIcon className="size-4.5" />
                  Message on Facebook
                  <ArrowRight className="size-4.5" />
                </a>
                <a
                  href={SOCIAL.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex h-13 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
                >
                  <WhatsAppIcon className="size-4.5" />
                  Contact via WhatsApp
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium text-silver/95 transition-colors hover:text-cyan"
                >
                  Or send an email inquiry
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
