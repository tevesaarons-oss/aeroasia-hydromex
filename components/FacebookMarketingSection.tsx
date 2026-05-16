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
 * Asset layering (so the section reads as curated, not a Facebook dump):
 *   - "marketing-section-featured"   → one large hero tile
 *   - "marketing-section-supporting" → field-visual tiles, captioned
 *   - "marketing-section-proof"      → small constrained proof panels
 *   - "social-badge"                 → small circular FB profile badge
 *
 * If nothing is enabled, the section falls back to a clean text panel
 * pointing to the live Facebook page — no placeholder media.
 */
export function FacebookMarketingSection() {
  const featured = facebookMediaFor("marketing-section-featured")[0];
  const supporting = facebookMediaFor("marketing-section-supporting");
  const proof = facebookMediaFor("marketing-section-proof");
  const badge = facebookMediaFor("social-badge")[0];
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
              <span className="text-clean">{SOCIAL.pageName}</span> is where
              recent set-ups, project posts, and live updates appear. Follow
              the active Facebook page for marketing materials and field
              media &mdash; use this site for a premium overview of the
              services, technology, projects, and team behind them.
            </>
          }
        />

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-3xl border border-cyan/25 bg-gradient-to-br from-cyan/8 via-navy-2/55 to-navy/40 shadow-[0_30px_70px_-40px_rgba(0,157,255,0.45)]">
            {/* Instrument bar with FB profile badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-navy-2/55 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85 sm:px-8">
              <div className="flex items-center gap-3">
                {badge && <FacebookBadge asset={badge} />}
                <span className="flex items-center gap-2 text-cyan/95">
                  <Radio className="size-3.5 animate-pulse" />
                  Live Page · Active Marketing Channel
                </span>
              </div>
              <span>FEED · FB-AHYDROMEXSTP</span>
            </div>

            {/* Top row — featured visual + CTAs */}
            <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
              <div className="relative bg-navy-2/30 p-5 sm:p-6 lg:p-8">
                {featured ? (
                  <FacebookFeaturedTile asset={featured} />
                ) : (
                  <EmptyVisualPanel />
                )}
              </div>

              <div className="relative flex flex-col gap-4 border-t border-white/10 p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan/85">
                    Follow the page · Message the team
                  </div>
                  <h3 className="text-display mt-2 text-balance text-xl font-semibold leading-snug text-white sm:text-2xl">
                    Follow active Facebook updates. Connect through
                    Messenger or WhatsApp.
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-silver/95">
                    Follow A. Hydromex STP &amp; AOP Wastewater Solutions PH
                    for recent set-ups and project materials. Message us on
                    Facebook for inquiries &mdash; or use Messenger,
                    WhatsApp, or email below for the fastest reply.
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
              </div>
            </div>

            {/* Supporting field visuals row */}
            {supporting.length > 0 && (
              <div className="border-t border-white/10 bg-navy-2/30 p-5 sm:p-6 lg:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
                  <span className="flex items-center gap-2 text-cyan/95">
                    <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(0,200,255,0.7)]" />
                    Field Set-ups · From the Facebook Page
                  </span>
                  <span>{supporting.length} curated visuals</span>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {supporting.map((asset, i) => (
                    <li key={asset.id}>
                      <FacebookSupportingTile asset={asset} index={i + 2} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Proof / compliance materials — small, constrained, not enlarged */}
            {proof.length > 0 && (
              <div className="border-t border-white/10 bg-navy-2/40 px-5 py-5 sm:px-8 sm:py-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
                  <span className="text-cyan/85">
                    Supporting Material · From the Facebook Page
                  </span>
                  <span className="text-silver/70">
                    Reference only · Not enlarged
                  </span>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {proof.map((asset) => (
                    <li key={asset.id}>
                      <FacebookProofChip asset={asset} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-white/10 bg-navy-2/55 px-5 py-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-silver/75 sm:px-8">
              {hasAnyMedia
                ? "Curated visuals saved from the active Facebook business page · A. Hydromex STP & AOP Wastewater Solutions PH"
                : "Live updates live on the Facebook page · Visit to see the latest project set-ups"}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────── */

function FacebookBadge({ asset }: { asset: FacebookAsset }) {
  return (
    <a
      href={SOCIAL.facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${SOCIAL.pageName} on Facebook`}
      className="relative inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-cyan/40 transition-transform hover:scale-105"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset.src}
        alt={asset.caption ?? SOCIAL.pageName}
        className="size-full object-cover"
        loading="lazy"
      />
      <span className="pointer-events-none absolute -bottom-0.5 -right-0.5 inline-flex size-3.5 items-center justify-center rounded-full bg-navy ring-1 ring-cyan/45">
        <FacebookIcon className="size-2 text-cyan" />
      </span>
    </a>
  );
}

function EmptyVisualPanel() {
  return (
    <div className="relative flex aspect-[5/4] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-2 via-navy to-navy-2 p-8 text-center">
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-25" />
      <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-cyan/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 size-48 rounded-full bg-electric/12 blur-3xl" />

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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
      </div>

      {/* Engineering frame */}
      <span className="pointer-events-none absolute left-3 top-3 size-3.5 border-l border-t border-cyan/55" />
      <span className="pointer-events-none absolute right-3 top-3 size-3.5 border-r border-t border-cyan/55" />
      <span className="pointer-events-none absolute bottom-3 left-3 size-3.5 border-b border-l border-cyan/55" />
      <span className="pointer-events-none absolute bottom-3 right-3 size-3.5 border-b border-r border-cyan/55" />

      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 p-4 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/95">
        <span className="text-cyan/95">
          {asset.caption ?? "Recent treatment system set-up"}
        </span>
        <span className="text-silver/85">SETUP · 01 · LIVE</span>
      </div>
    </a>
  );
}

function FacebookSupportingTile({
  asset,
  index,
}: {
  asset: FacebookAsset;
  index: number;
}) {
  return (
    <a
      href={asset.sourceUrl ?? SOCIAL.facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card-lift group relative block overflow-hidden rounded-2xl border border-white/10 bg-navy-2/45"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.src}
          alt={asset.caption ?? "A. Hydromex update"}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 p-3 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/95">
        <span className="text-cyan/95">
          {asset.caption ?? "A. Hydromex public Facebook update"}
        </span>
        <span className="text-silver/85">
          SETUP · {String(index).padStart(2, "0")}
        </span>
      </div>
    </a>
  );
}

function FacebookProofChip({ asset }: { asset: FacebookAsset }) {
  return (
    <a
      href={asset.sourceUrl ?? SOCIAL.facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-navy-2/55 p-2 pr-3 transition-colors hover:border-cyan/40"
    >
      <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md border border-white/10 bg-navy-2/70 sm:h-14 sm:w-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.src}
          alt={asset.caption ?? "Supporting material"}
          className="size-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 max-w-[180px] sm:max-w-[220px]">
        <div className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-cyan/95">
          {asset.caption ?? "Supporting material"}
        </div>
        <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-silver/70 group-hover:text-cyan/90">
          View on Facebook →
        </div>
      </div>
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
