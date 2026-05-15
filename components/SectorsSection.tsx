import {
  ShieldCheck,
  Activity,
  Volume2,
  Layers,
  Wrench,
  Droplets,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SECTORS } from "@/lib/data";
import { cn } from "@/lib/cn";

/**
 * Sectors — "Compliance Environment Matrix"
 *
 * A varied-tile grid rather than another left-selector panel, so the
 * page rhythm shifts when readers leave the Services section. Buyer
 * categories with the strongest demand (Hospitals, Industrial, LGU,
 * Malls) get larger tiles; secondary sectors sit at standard size.
 *
 * Each tile shows the sector's wastewater concern alongside small
 * concern tags drawn from a fixed vocabulary so the page reads like a
 * map of buyer environments Aeroasia serves.
 */

type Concern =
  | "Compliance"
  | "Sampling Readiness"
  | "Odor Control"
  | "Continuous Operation"
  | "High-volume Wastewater"
  | "Compact Footprint"
  | "Maintenance Support";

const CONCERN_ICON: Record<Concern, LucideIcon> = {
  Compliance: ShieldCheck,
  "Sampling Readiness": Activity,
  "Odor Control": Volume2,
  "Continuous Operation": Activity,
  "High-volume Wastewater": Droplets,
  "Compact Footprint": Layers,
  "Maintenance Support": Wrench,
};

type TileSize = "hero" | "wide" | "standard";

type SectorTile = {
  title: string;
  size: TileSize;
  concerns: Concern[];
};

/** Display order + sizing. Source order in SECTORS is preserved as data. */
const TILES: SectorTile[] = [
  {
    title: "Hospitals & Healthcare",
    size: "hero",
    concerns: ["Continuous Operation", "Sampling Readiness", "Compliance"],
  },
  {
    title: "Industrial Facilities",
    size: "hero",
    concerns: ["High-volume Wastewater", "Continuous Operation", "Compliance"],
  },
  {
    title: "Malls & Commercial Centers",
    size: "wide",
    concerns: ["Compact Footprint", "Odor Control", "Continuous Operation"],
  },
  {
    title: "Municipal / LGU Facilities",
    size: "wide",
    concerns: ["Compliance", "Maintenance Support"],
  },
  {
    title: "Hotels & Resorts",
    size: "standard",
    concerns: ["Odor Control", "Compliance"],
  },
  {
    title: "Food & Beverage Plants",
    size: "standard",
    concerns: ["High-volume Wastewater", "Compliance"],
  },
  {
    title: "Laboratories",
    size: "standard",
    concerns: ["Compliance", "Sampling Readiness"],
  },
  {
    title: "Condos & Mixed-Use",
    size: "standard",
    concerns: ["Compact Footprint", "Odor Control"],
  },
  {
    title: "Agricultural Facilities",
    size: "wide",
    concerns: ["Maintenance Support"],
  },
  {
    title: "Ports & Shipping",
    size: "wide",
    concerns: ["Compliance", "Continuous Operation"],
  },
];

const SIZE_CLASSES: Record<TileSize, string> = {
  hero: "lg:col-span-2 lg:row-span-2",
  wide: "lg:col-span-2",
  standard: "lg:col-span-1",
};

export function SectorsSection() {
  const tilesBySector = new Map(TILES.map((t) => [t.title, t]));

  return (
    <section id="sectors" className="relative scroll-mt-20 py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-fine opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-cyan/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-[420px] w-[420px] rounded-full bg-electric/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Compliance Environment Matrix"
          title={
            <>
              A map of the{" "}
              <span className="gradient-text-cyan">
                high-compliance environments
              </span>{" "}
              Aeroasia serves.
            </>
          }
          description="Different buyer environments place different demands on a wastewater system. Each tile below names the operating concerns Aeroasia designs against — read it as a map of the sectors and conditions the system is built to handle."
        />

        {/* Compliance vocabulary key — small inline legend */}
        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-white/10 bg-navy-2/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-silver/85 sm:gap-x-5">
            <span className="text-cyan/85">Concerns</span>
            <span className="text-silver/40">·</span>
            {(
              [
                "Compliance",
                "Sampling Readiness",
                "Odor Control",
                "Continuous Operation",
                "High-volume Wastewater",
                "Compact Footprint",
                "Maintenance Support",
              ] as Concern[]
            ).map((c) => {
              const Icon = CONCERN_ICON[c];
              return (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 text-silver/90"
                >
                  <Icon className="size-3 text-cyan/85" />
                  {c}
                </span>
              );
            })}
          </div>
        </Reveal>

        {/* Matrix grid — varied tile sizes */}
        <div className="mt-10 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {TILES.map((tile, i) => {
            const sector = SECTORS.find((s) => s.title === tile.title);
            if (!sector) return null;
            return (
              <SectorTileCard
                key={tile.title}
                sector={sector}
                tile={tile}
                index={i}
              />
            );
          })}
        </div>

        {/* Footer bar — small key-line beneath the grid */}
        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
            <span>
              {tilesBySector.size} sectors · Aeroasia · Nationwide
            </span>
            <span className="text-cyan/85">
              Designed against the operating concerns shown
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectorTileCard({
  sector,
  tile,
  index,
}: {
  sector: (typeof SECTORS)[number];
  tile: SectorTile;
  index: number;
}) {
  const SectorIcon = sector.icon;
  const isHero = tile.size === "hero";

  return (
    <Reveal delay={index * 0.03}>
      <article
        className={cn(
          "card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-2/65 via-navy/40 to-navy-2/55 p-5 sm:p-6",
          SIZE_CLASSES[tile.size],
          isHero &&
            "border-cyan/25 from-cyan/8 via-navy-2/60 to-navy/35 shadow-[0_30px_70px_-45px_rgba(0,157,255,0.5)]",
        )}
      >
        {/* Subtle blueprint texture for hero tiles */}
        {isHero && (
          <>
            <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-25" />
            <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-cyan/12 blur-3xl" />
          </>
        )}

        {/* Engineering corner brackets on hero tiles only */}
        {isHero && (
          <>
            <span className="pointer-events-none absolute left-3 top-3 size-3.5 border-l border-t border-cyan/50" />
            <span className="pointer-events-none absolute right-3 top-3 size-3.5 border-r border-t border-cyan/50" />
            <span className="pointer-events-none absolute bottom-3 left-3 size-3.5 border-b border-l border-cyan/50" />
            <span className="pointer-events-none absolute bottom-3 right-3 size-3.5 border-b border-r border-cyan/50" />
          </>
        )}

        <header className="relative flex items-start justify-between gap-3">
          <span
            className={cn(
              "flex shrink-0 items-center justify-center rounded-xl ring-1",
              isHero
                ? "size-12 bg-gradient-to-br from-cyan/30 via-electric/20 to-ice/10 ring-cyan/40"
                : "size-9 bg-cyan/10 ring-cyan/25",
            )}
          >
            <SectorIcon
              className={cn("text-cyan", isHero ? "size-5.5" : "size-4")}
            />
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-silver/75">
            SEC-{String(index + 1).padStart(2, "0")}
          </span>
        </header>

        <h3
          className={cn(
            "text-display relative mt-4 text-balance font-semibold leading-snug text-white",
            isHero ? "text-2xl sm:text-[26px]" : "text-base sm:text-lg",
          )}
        >
          {sector.title}
        </h3>

        <p
          className={cn(
            "relative mt-2 leading-relaxed text-silver/95",
            isHero ? "text-[14.5px]" : "text-[13px]",
          )}
        >
          {sector.concern}
        </p>

        {/* Concern tags */}
        <ul
          className={cn(
            "relative mt-auto flex flex-wrap gap-1.5 pt-4",
            isHero && "border-t border-white/10",
          )}
        >
          {tile.concerns.map((c) => {
            const Icon = CONCERN_ICON[c];
            return (
              <li
                key={c}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full border border-cyan/25 bg-cyan/8 px-2 py-0.5 font-mono uppercase tracking-[0.14em] text-cyan/95",
                  isHero ? "text-[10px]" : "text-[9px]",
                )}
              >
                <Icon className="size-2.5" />
                {c}
              </li>
            );
          })}
        </ul>

        {/* Hero-only footer with location/scope hint */}
        {isHero && (
          <div className="relative mt-4 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-silver/85">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3 text-cyan/80" />
              Nationwide
            </span>
            <span className="text-cyan/85">Primary buyer environment</span>
          </div>
        )}
      </article>
    </Reveal>
  );
}
