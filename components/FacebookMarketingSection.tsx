import { Mail, ArrowUpRight, Radio } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CONTACT, SOCIAL } from "@/lib/data";
import { FacebookIcon, MessengerIcon, WhatsAppIcon } from "./BrandIcons";
import {
  enabledFacebookMedia,
  facebookMediaFor,
  type FacebookAsset,
} from "@/lib/facebookMedia";

/**
 * "Active Project Updates & Set-ups" — connects the website to the live
 * Facebook business page (A. Hydromex STP & AOP Wastewater Solutions PH)
 * which is the company's active marketing channel.
 *
 * Renders any Facebook assets registered in `lib/facebookMedia.ts`. If
 * the manifest is empty, the section falls back to a clean text-only
 * panel that points readers to the page. No placeholder media is shown.
 */
export function FacebookMarketingSection() {
  const featured = facebookMediaFor("marketing-section-featured")[0];
  const supporting = facebookMediaFor("marketing-section-supporting");
  const hasAnyMedia = enabledFacebookMedia().length > 0;

  return (
    <section className="relative scroll-mt-20 overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-fine opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-cyan/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-[420px] w-[420px] rounded-full bg-electric/8 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="left"
          eyebrow="Active Project Updates & Set-ups"
          title={
            <>
              Follow recent set-ups on the{" "}
              <span className="gradient-text-cyan">
                A. Hydromex Facebook page.
              </span>
            </>
          }
          description={
            <>
              <span className="text-clean">{SOCIAL.pageName}</span> is the
              active marketing channel for project posts, recent set-ups,
              and direct conversations with the team. The fastest reply is
              on Messenger or WhatsApp.
            </>
          }
        />

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-3xl border border-cyan/25 bg-gradient-to-br from-cyan/8 via-navy-2/55 to-navy/40 shadow-[0_30px_70px_-40px_rgba(0,157,255,0.45)]">
            {/* Instrument bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-navy-2/55 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85 sm:px-8">
              <div className="flex items-center gap-2 text-cyan/95">
                <Radio className="size-3.5 animate-pulse" />
                Live Page · Active Marketing Channel
              </div>
              <span>FEED · FB-AHYDROMEXSTP</span>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
              {/* Left — visual side */}
              <div className="relative bg-navy-2/30 p-5 sm:p-6 lg:p-8">
                {featured ? (
                  <FacebookFeaturedTile asset={featured} />
                ) : (
                  <EmptyVisualPanel />
                )}
              </div>

              {/* Right — calls to action */}
              <div className="relative flex flex-col gap-4 border-t border-white/10 p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                    Reach the team directly
                  </div>
                  <h3 className="text-display mt-2 text-balance text-xl font-semibold leading-snug text-white sm:text-2xl">
                    Message on Facebook, chat on Messenger, or send a
                    WhatsApp.
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-silver/95">
                    Follow A. Hydromex STP &amp; AOP Wastewater Solutions PH
                    for recent set-ups, project materials, and wastewater
                    treatment updates &mdash; or open a direct conversation
                    using the channels below.
                  </p>
                </div>

                <div className="grid gap-2">
                  <ChannelButton
                    href={SOCIAL.facebookUrl}
                    icon={FacebookIcon}
                    label="Visit Facebook Page"
                    accent
                  />
                  <ChannelButton
                    href={SOCIAL.messengerUrl}
                    icon={MessengerIcon}
                    label="Message on Messenger"
                  />
                  <ChannelButton
                    href={SOCIAL.whatsappUrl}
                    icon={WhatsAppIcon}
                    label={`WhatsApp · ${CONTACT.whatsappDisplay}`}
                  />
                  <ChannelButton
                    href={`mailto:${CONTACT.primaryEmail}`}
                    icon={Mail}
                    label="Send Email Inquiry"
                  />
                </div>

                {/* Supporting media strip — only renders when assets exist */}
                {supporting.length > 0 && (
                  <div className="mt-auto border-t border-white/10 pt-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-silver/75">
                      More from the page
                    </div>
                    <ul className="mt-3 grid grid-cols-3 gap-2">
                      {supporting.slice(0, 6).map((a) => (
                        <li key={a.id}>
                          <FacebookThumb asset={a} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-white/10 bg-navy-2/55 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-silver/75 sm:px-8">
              {hasAnyMedia
                ? "Media saved from the active Facebook business page · A. Hydromex STP & AOP Wastewater Solutions PH"
                : "Live updates live on the Facebook page · Visit to see the latest project set-ups"}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────── */

function EmptyVisualPanel() {
  return (
    <div className="relative flex aspect-[5/4] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-2 via-navy to-navy-2 p-8 text-center">
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-25" />
      <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-cyan/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 size-48 rounded-full bg-electric/12 blur-3xl" />

      {/* Engineering corner brackets */}
      <span className="pointer-events-none absolute left-4 top-4 size-3.5 border-l border-t border-cyan/55" />
      <span className="pointer-events-none absolute right-4 top-4 size-3.5 border-r border-t border-cyan/55" />
      <span className="pointer-events-none absolute bottom-4 left-4 size-3.5 border-b border-l border-cyan/55" />
      <span className="pointer-events-none absolute bottom-4 right-4 size-3.5 border-b border-r border-cyan/55" />

      <span className="relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/30 via-electric/20 to-ice/10 ring-1 ring-cyan/40">
        <FacebookIcon className="size-6 text-cyan" />
      </span>
      <h4 className="text-display relative mt-5 text-balance text-xl font-semibold leading-snug text-white sm:text-2xl">
        A. Hydromex STP &amp; AOP Wastewater Solutions PH
      </h4>
      <p className="relative mt-3 max-w-md text-[14px] leading-relaxed text-silver/95">
        Recent set-ups, project posts, and direct messages happen on the
        Facebook page. Open the page for live updates.
      </p>
      <a
        href={SOCIAL.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan hover:text-clean"
      >
        Open Facebook Page
        <ArrowUpRight className="size-3.5" />
      </a>
    </div>
  );
}

function FacebookFeaturedTile({ asset }: { asset: FacebookAsset }) {
  return (
    <a
      href={asset.sourceUrl ?? SOCIAL.facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-navy-2/40"
    >
      <div className="relative aspect-[5/4] w-full">
        {asset.type === "video" ? (
          <video
            src={asset.src}
            poster={asset.poster}
            preload="metadata"
            controls
            playsInline
            className="size-full object-cover"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset.src}
            alt={asset.caption ?? "A. Hydromex set-up"}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
      </div>
      {asset.caption && (
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 p-4 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/95">
          <span className="text-cyan/95">{asset.caption}</span>
          <span className="text-silver/80">FB · LIVE</span>
        </div>
      )}
    </a>
  );
}

function FacebookThumb({ asset }: { asset: FacebookAsset }) {
  return (
    <a
      href={asset.sourceUrl ?? SOCIAL.facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block aspect-square overflow-hidden rounded-lg border border-white/10 bg-navy-2/50"
      aria-label={asset.caption ?? "Facebook post"}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset.poster ?? asset.src}
        alt={asset.caption ?? "Facebook post"}
        className="size-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </a>
  );
}

function ChannelButton({
  href,
  icon: Icon,
  label,
  accent = false,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  accent?: boolean;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={
        accent
          ? "btn-primary inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold"
          : "btn-ghost inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium"
      }
    >
      <Icon className="size-4" />
      {label}
    </a>
  );
}
