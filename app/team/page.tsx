import type { Metadata } from "next";
import { Users, Building2, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { teamPhoto } from "@/lib/curatedMedia";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Aeroasia-Hydromex Technologies operations are organized across key departments that support its environmental engineering and wastewater treatment mission.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-full overflow-x-clip pt-24 sm:pt-28">
        <section className="relative scroll-mt-20 overflow-hidden py-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-fine opacity-30" />
          <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-electric/8 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              align="left"
              eyebrow="Our Team"
              title={
                <>
                  Engineers, technicians, and operators &mdash;{" "}
                  <span className="gradient-text-cyan">organized for nationwide service.</span>
                </>
              }
              description="Aeroasia&rsquo;s operations are organized across key departments that support its environmental engineering and wastewater treatment mission."
            />

            {/* Team group photo — real Aeroasia personnel */}
            <Reveal>
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
                      <h2 className="text-display text-balance text-2xl font-semibold text-white sm:text-3xl">
                        70+ engineers, technicians, and operators &mdash;{" "}
                        <span className="gradient-text-cyan">deployed nationwide.</span>
                      </h2>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-clean/90">
                        The Aeroasia-Hydromex team designs, installs,
                        rehabilitates, and supports wastewater treatment
                        systems across the Philippines &mdash; from
                        greenfield builds to on-call troubleshooting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Organizational chart panel */}
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
              <Reveal>
                <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-navy-2/55 to-navy/30 p-5 sm:p-6">
                  <header className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
                    <div className="flex items-center gap-2">
                      <Users className="size-3.5 text-cyan" />
                      <span className="text-cyan/95">Organizational Chart</span>
                    </div>
                    <span>DOC · ORG-01</span>
                  </header>

                  <div className="mt-4 overflow-hidden rounded-2xl bg-clean">
                    <a
                      href="/assets/team/aeroasia-org-chart.png"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/team/aeroasia-org-chart.png"
                        alt="Aeroasia-Hydromex organizational chart"
                        className="h-auto w-full rounded-2xl object-contain"
                      />
                    </a>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a
                      href="/assets/team/aeroasia-org-chart.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan transition hover:border-cyan/55 hover:bg-cyan/15"
                    >
                      View Full Chart
                      <ExternalLink className="size-3.5" />
                    </a>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver/70">
                      Opens in a new tab
                    </span>
                  </div>

                  <p className="mt-4 text-[13.5px] leading-relaxed text-silver/95">
                    The organizational chart above reflects
                    Aeroasia-Hydromex&rsquo;s team structure as presented in
                    the company&rsquo;s source materials.
                  </p>
                </article>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-2 via-navy to-navy-2 p-5 sm:p-6">
                  <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-cyan/10 blur-3xl" />
                  <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-20" />

                  <div className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                    How Aeroasia is organized
                  </div>
                  <h3 className="text-display relative mt-2 text-balance text-xl font-semibold leading-snug text-white sm:text-2xl">
                    Departments aligned to engineering & operations.
                  </h3>
                  <p className="relative mt-3 text-[14px] leading-relaxed text-silver/95">
                    Operations across the company support the same outcome:
                    cleaner discharge, reliable treatment, and dependable
                    service for hospitals, industries, malls, resorts, and
                    LGUs nationwide.
                  </p>

                  <ul className="relative mt-5 space-y-3">
                    {[
                      "Engineering & Design",
                      "Fabrication & Installation",
                      "Operations & Maintenance",
                      "Troubleshooting & Diagnostics",
                      "Sales & Client Support",
                    ].map((d, i) => (
                      <li
                        key={d}
                        className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="flex size-7 items-center justify-center rounded-md bg-cyan/15 ring-1 ring-cyan/30">
                            <Building2 className="size-3.5 text-cyan" />
                          </span>
                          <span className="text-display text-[14px] font-medium text-white">
                            {d}
                          </span>
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
                          DEPT-{String(i + 1).padStart(2, "0")}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-6 border-t border-white/10 pt-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                      Operational focus
                    </div>
                    <ul className="mt-3 space-y-2 text-[13.5px] leading-relaxed text-silver/95">
                      {[
                        "Environmental engineering",
                        "Wastewater treatment operations",
                        "Fabrication and installation support",
                        "Preventive maintenance and after-sales service",
                        "Client coordination and nationwide deployment",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-cyan/80 shadow-[0_0_6px_1px_rgba(0,200,255,0.55)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
