import { Mail, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS, SERVICES, SOCIAL } from "@/lib/data";
import { BrandMark } from "./BrandMark";
import { FacebookIcon, MessengerIcon, WhatsAppIcon } from "./BrandIcons";

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/10 bg-navy-2/70 pt-14 pb-8 sm:mt-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-blueprint-fine opacity-20" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <BrandMark size="md" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver/90">
            Engineered for Compliance, Built with Reliance. Clean water
            solutions with lasting alliance &mdash; serving hospitals,
            industries, malls, resorts, and LGUs across the Philippines.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
            <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_1px_rgba(0,200,255,0.7)]" />
            <span>Nationwide · 70+ Employees</span>
          </div>

          {/* Primary social/contact channel row */}
          <ul className="mt-6 flex flex-wrap gap-2">
            <SocialPill
              href={SOCIAL.facebookUrl}
              icon={FacebookIcon}
              label="Facebook"
            />
            <SocialPill
              href={SOCIAL.messengerUrl}
              icon={MessengerIcon}
              label="Messenger"
            />
            <SocialPill
              href={SOCIAL.whatsappUrl}
              icon={WhatsAppIcon}
              label="WhatsApp"
            />
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-display font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan/85">
            Navigate
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-silver/95 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-display font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan/85">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title} className="text-silver/95">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-display font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan/85">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-silver/95">
            <li className="flex items-start gap-2.5">
              <FacebookIcon className="mt-0.5 size-4 shrink-0 text-cyan/80" />
              <a
                href={SOCIAL.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {SOCIAL.pageName}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-cyan/80" />
              <a
                href={SOCIAL.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp · {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-cyan/80" />
              <a
                href={`tel:${CONTACT.phoneE164}`}
                className="hover:text-white"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-cyan/80" />
              <a
                href={`mailto:${CONTACT.primaryEmail}`}
                className="break-all hover:text-white"
              >
                {CONTACT.primaryEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-white/10 px-5 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-silver/80 sm:flex-row sm:items-center sm:px-8">
        <p>
          © {new Date().getFullYear()} Aeroasia-Hydromex Technologies Co. Ltd. ·
          All rights reserved.
        </p>
        <p className="text-silver/45">
          Industrial · Agricultural · Commercial · Medical · Institutional · Municipal · Laboratory · Food &amp; Beverage
        </p>
      </div>
    </footer>
  );
}

function SocialPill({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-silver/95 transition-colors hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan"
        aria-label={`Open ${label}`}
      >
        <Icon className="size-3.5" />
        {label}
      </a>
    </li>
  );
}
