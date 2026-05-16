import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { VALUES } from "@/lib/data";
import { teamPhoto } from "@/lib/curatedMedia";

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Aeroasia"
          title={
            <>
              Rooted in engineering.{" "}
              <span className="gradient-text-cyan">
                Driven by environmental responsibility.
              </span>
            </>
          }
        />

        {/* Top: 2-column — origin story (left) + mission / foundation (right) */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-white/10 bg-gradient-to-b from-navy-2/55 to-navy/30 p-6 sm:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                Origin · 2006 → 2009 → Today
              </div>
              <h3 className="text-display mt-2 text-xl font-semibold leading-tight text-white sm:text-2xl">
                The Aeroasia story.
              </h3>
              <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-silver/95">
                <p>
                  In 2006, the groundwork was laid when Engr. Norlan Unson
                  of Aeroasia partnered with Dr. Harald Kremnitz of the HWK
                  Foundation. Together they adapted the patented Hydromex
                  technology &mdash; originally designed for toxic and
                  hazardous waste treatment &mdash; for wastewater
                  management.
                </p>
                <p>
                  That collaboration led to a locally developed Advanced
                  Oxidation Process (AOP). With the refined technology,
                  Aeroasia-Hydromex Technologies Co. Ltd. was officially
                  established in 2009 and has been serving healthcare,
                  commercial, tourism &amp; residential, food, and light-
                  industrial facilities across the Philippines since.
                </p>
                <p>
                  Today, Aeroasia-Hydromex is a nationwide team of 70+
                  engineers, technicians, and operators committed to
                  cleaner water, smarter infrastructure, and DENR-compliant
                  system design.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.05}>
            <figure className="card-lift flex h-full flex-col rounded-2xl border border-cyan/30 bg-gradient-to-br from-cyan/12 via-navy-2/50 to-navy/40 p-6 sm:p-8">
              <Quote className="size-6 text-cyan" />
              <blockquote className="text-display mt-4 text-balance text-[20px] font-medium leading-snug text-white sm:text-[22px]">
                &ldquo;Our mission is clear: convert wastewater into a
                valuable resource while strictly adhering to DENR guidelines
                outlined in the Wastewater DAO 2016-21.&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                The Aeroasia Mission
              </figcaption>
              <p className="mt-4 text-[14.5px] leading-relaxed text-silver/95">
                Leading wastewater management through five values that
                converge to establish industry standards &mdash; pursuing a
                cleaner, greener world and redefining water solutions for a
                sustainable tomorrow.
              </p>
              <p className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/70">
                DAO 2016-08 · DAO 2021-19 · Nationwide service
              </p>
            </figure>
          </Reveal>
        </div>

        {/* Bottom: full-width AERO-way band */}
        <Reveal delay={0.08}>
          <section
            aria-labelledby="aero-way-heading"
            className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-2/70 via-navy/40 to-navy-2/60 p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-20" />
            <div className="pointer-events-none absolute -right-32 -top-32 size-64 rounded-full bg-cyan/10 blur-3xl" />

            <header className="relative flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                  Operating Philosophy
                </div>
                <h3
                  id="aero-way-heading"
                  className="text-display mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl"
                >
                  The <span className="gradient-text-cyan">AERO-way</span>
                </h3>
              </div>
              <p className="max-w-md text-[14px] leading-relaxed text-silver/95">
                Five values that guide how Aeroasia-Hydromex designs, builds,
                and supports wastewater treatment systems across the
                Philippines.
              </p>
            </header>

            <ul className="relative mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              {VALUES.map((v, i) => (
                <li
                  key={`${v.letter}-${v.title}`}
                  className="min-w-0"
                >
                  <article className="card-lift group flex h-full min-w-0 flex-col rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-cyan/40">
                    <div className="flex items-center justify-between">
                      <div className="text-display flex size-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/25 via-electric/15 to-ice/10 text-lg font-semibold text-white ring-1 ring-cyan/30">
                        {v.letter}
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-silver/75">
                        {String(i + 1).padStart(2, "0")} / 05
                      </span>
                    </div>
                    <h4 className="text-display mt-4 text-[15px] font-semibold leading-snug text-white">
                      {v.title}
                    </h4>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-silver/95">
                      {v.desc}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* Team band */}
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-navy-2/40 shadow-[0_30px_70px_-40px_rgba(0,157,255,0.45)]">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={teamPhoto.src}
                alt={teamPhoto.alt}
                className="aspect-[21/9] w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/90 via-transparent to-navy/40" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                  <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(0,200,255,0.7)]" />
                  Team · TEAM-01
                </div>
                <div className="max-w-xl">
                  <h3 className="text-display text-balance text-2xl font-semibold text-white sm:text-3xl">
                    70+ engineers, technicians, and operators &mdash;{" "}
                    <span className="gradient-text-cyan">
                      deployed nationwide.
                    </span>
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-clean/90">
                    The Aeroasia-Hydromex team designs, installs,
                    rehabilitates, and supports wastewater treatment systems
                    across the Philippines &mdash; from greenfield builds to
                    on-call troubleshooting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
