"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Building2,
  ClipboardCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACT } from "@/lib/data";
import { cn } from "@/lib/cn";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const phone = String(data.get("phone") ?? "");
    const sector = String(data.get("sector") ?? "");
    const message = String(data.get("message") ?? "");
    const lines = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Sector: ${sector}`,
      "",
      message,
    ];
    const body = encodeURIComponent(lines.join("\r\n"));
    const subject = encodeURIComponent(
      "Site Assessment Request · Aeroasia-Hydromex",
    );
    setSubmitted(true);
    window.location.href = `mailto:${CONTACT.primaryEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-fine opacity-25" />
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-cyan/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-electric/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left — Request a Site Assessment form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-2 via-navy to-navy-2 p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-cyan/12 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-20" />

              <div className="relative mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan">
                    <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(0,200,255,0.7)]" />
                    Final Step · Step 03
                  </div>
                  <h2 className="text-display mt-3 text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                    Request a{" "}
                    <span className="gradient-text-cyan">Site Assessment.</span>
                  </h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-clean/90">
                    Tell us about your facility. We&rsquo;ll get back within one
                    business day to schedule a site walk or technical call.
                  </p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
                  FORM · SITE-ASSESS-01
                </span>
              </div>

              <div className="relative grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Company / Facility" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="relative mt-4">
                <Field
                  label="Sector"
                  name="sector"
                  placeholder="Hospital, mall, industrial, LGU, resort…"
                />
              </div>
              <div className="relative mt-4">
                <label className="text-display block font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-silver/85">
                  What are you trying to solve?
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="New STP, rehabilitation, AOP upgrade, sampling support, maintenance contract…"
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-silver/40 focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20"
                />
              </div>

              {/* Submit row */}
              <div className="relative mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-silver/90">
                  Submitting opens your email client preloaded for{" "}
                  <span className="text-clean/95">{CONTACT.primaryEmail}</span>.
                </p>
                <button
                  type="submit"
                  className={cn(
                    "btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm",
                  )}
                >
                  {submitted ? (
                    <>
                      <Check className="size-4" />
                      Opening email…
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Request
                    </>
                  )}
                </button>
              </div>

              {/* What you'll get */}
              <div className="relative mt-7 grid gap-2 border-t border-white/10 pt-5 sm:grid-cols-3">
                {[
                  "Engineer-level review",
                  "Site assessment plan",
                  "Indicative scope & next steps",
                ].map((t, i) => (
                  <div key={t} className="flex items-start gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
                    <ClipboardCheck className="mt-0.5 size-3.5 text-cyan" />
                    <span>
                      <span className="text-cyan/85">{String(i + 1).padStart(2, "0")} ·</span>{" "}
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </form>
          </Reveal>

          {/* Right — contact channels */}
          <Reveal delay={0.05}>
            <div className="grid gap-4">
              <ContactCard icon={Mail} title="Email" code="CH-01">
                <ul className="space-y-2 text-[13.5px]">
                  {CONTACT.emails.map((e) => (
                    <li key={e}>
                      <a
                        href={`mailto:${e}`}
                        className="text-silver/95 hover:text-cyan"
                      >
                        {e}
                      </a>
                    </li>
                  ))}
                </ul>
              </ContactCard>

              <ContactCard icon={Phone} title="Phone" code="CH-02">
                <ul className="space-y-2 text-[13.5px]">
                  {CONTACT.phones.map((p) => (
                    <li key={p}>
                      <a
                        href={`tel:${p.replace(/\s+/g, "")}`}
                        className="text-silver/95 hover:text-cyan"
                      >
                        {p}
                      </a>
                    </li>
                  ))}
                  <li className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-silver/80">
                    Satellite Office · {CONTACT.satelliteOffice}
                  </li>
                </ul>
              </ContactCard>

              <ContactCard icon={MapPin} title="Office" code="CH-03">
                <p className="text-[13.5px] leading-relaxed text-silver/95">
                  {CONTACT.address}
                </p>
                <div className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85">
                  <Building2 className="size-3" />
                  Nationwide service · 70+ employees
                </div>
              </ContactCard>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  code,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  code: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-lift rounded-2xl border border-white/10 bg-navy-2/45 p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <Icon className="size-4.5 text-cyan" />
          <h3 className="text-display text-[13px] font-semibold uppercase tracking-[0.18em] text-white">
            {title}
          </h3>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-silver/85">
          {code}
        </span>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-display block font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-silver/85">
        {label}
        {required && <span className="ml-0.5 text-cyan">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-silver/40 focus:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/20"
      />
    </label>
  );
}
