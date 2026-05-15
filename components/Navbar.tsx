"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/cn";
import { BrandMark } from "./BrandMark";

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

        <div className="hidden md:block">
          <NavItem
            href="/#contact"
            className="btn-primary inline-flex h-10 items-center rounded-full px-5 text-sm"
          >
            Book a Consultation
          </NavItem>
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
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
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
          <li className="mt-2">
            <NavItem
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary inline-flex h-11 w-full items-center justify-center rounded-full px-5 text-sm"
            >
              Book a Consultation
            </NavItem>
          </li>
        </ul>
      </div>
    </header>
  );
}
