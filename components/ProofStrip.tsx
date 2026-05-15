const TAGS = [
  "Hospitals",
  "Medical Centers",
  "Malls",
  "Resorts",
  "Industrial Facilities",
  "Food & Beverage",
  "Laboratories",
  "Condominiums",
  "Municipal / LGU",
  "Ports & Shipping",
  "Agricultural",
  "Mixed-Use Developments",
];

export function ProofStrip() {
  const doubled = [...TAGS, ...TAGS];
  return (
    <section
      aria-label="Sectors served"
      className="relative isolate overflow-hidden border-y border-white/10 bg-navy-2/40 py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-navy-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-navy-2 to-transparent" />
      <div className="relative flex w-[200%] animate-marquee gap-8 whitespace-nowrap">
        {doubled.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="text-display flex items-center gap-3 text-sm font-medium uppercase tracking-[0.22em] text-silver/95"
          >
            <span className="size-1.5 rounded-full bg-cyan/80 shadow-[0_0_8px_2px_rgba(0,194,255,0.45)]" />
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
