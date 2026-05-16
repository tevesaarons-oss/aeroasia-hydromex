"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Mail } from "lucide-react";
import { NAV_LINKS, SOCIAL, CONTACT } from "@/lib/data";
import { cn } from "@/lib/cn";
import { BrandMark } from "./BrandMark";
import { FacebookIcon, MessengerIcon, WhatsAppIcon } from "./BrandIcons";

/** Internal absolute routes use next/link; hash-only and external use <a>. */
function NavItem({
  href,
  children,
  onClick,
  className,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const isInternalRoute = href.startsWith("/");
  if (isInternalRoute) {
    return (
      <Link href={href} onClick={onClick} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-navy/75 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
        <BrandMark size="md" />

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <NavItem
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm text-silver/95 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </NavItem>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={SOCIAL.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="A. Hydromex on Facebook"
            className="btn-ghost flex size-10 items-center justify-center rounded-full"
          >
            <FacebookIcon className="size-4" />
          </a>
          <a
            href={SOCIAL.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm"
          >
            <MessengerIcon className="size-4" />
            Message on Facebook
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="btn-ghost flex size-10 items-center justify-center rounded-full md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden",
          "overflow-hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl transition-[max-height,opacity] duration-300",
          open ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col px-5 py-4">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <NavItem
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm text-silver/90 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </NavItem>
            </li>
          ))}

          <li className="mt-3">
            <a
              href={SOCIAL.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-5 text-sm"
            >
              <FacebookIcon className="size-4" />
              Message us on Facebook
            </a>
            <p className="mt-2 px-1 text-[11px] leading-relaxed text-silver/80">
              The Facebook page is the active marketing and inquiry
              channel.
            </p>
          </li>

          <li className="mt-3 border-t border-white/10 pt-3">
            <div className="px-1 pb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
              Connect through Messenger or WhatsApp
            </div>
            <ul className="grid grid-cols-2 gap-2">
              <SocialMenuLink
                href={SOCIAL.messengerUrl}
                icon={MessengerIcon}
                label="Messenger"
                onClick={() => setOpen(false)}
              />
              <SocialMenuLink
                href={SOCIAL.whatsappUrl}
                icon={WhatsAppIcon}
                label="WhatsApp"
                onClick={() => setOpen(false)}
              />
              <SocialMenuLink
                href={`mailto:${CONTACT.primaryEmail}`}
                icon={Mail}
                label="Email"
                onClick={() => setOpen(false)}
                external={false}
              />
              <SocialMenuLink
                href={SOCIAL.facebookUrl}
                icon={FacebookIcon}
                label="FB Page"
                onClick={() => setOpen(false)}
              />
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

function SocialMenuLink({
  href,
  icon: Icon,
  label,
  onClick,
  external = true,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[13px] text-silver/95 transition-colors hover:border-cyan/35 hover:bg-cyan/10 hover:text-cyan"
      >
        <Icon className="size-4 text-cyan" />
        {label}
      </a>
    </li>
  );
}
