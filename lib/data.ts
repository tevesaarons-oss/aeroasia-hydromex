import {
  Activity,
  AlertTriangle,
  Beaker,
  Building2,
  ClipboardCheck,
  Clock,
  Cpu,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Hammer,
  Hospital,
  Layers,
  Leaf,
  Lightbulb,
  MapPin,
  Palmtree,
  Recycle,
  Settings2,
  Ship,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Truck,
  Users,
  Volume2,
  Wrench,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Stat = { value: string; label: string };

/**
 * Hero-level company stats. Broader marketing framing — kept separate
 * from the PDF-grounded project counts so the two clusters never
 * contradict each other. "138+ Completed" comes from the dedicated
 * completed/ongoing projects PDF.
 */
export const STATS: Stat[] = [
  { value: "138+", label: "Completed Projects" },
  { value: "15+", label: "Years of Expertise" },
  { value: "70+", label: "Employees Nationwide" },
  { value: "Nationwide", label: "Service Coverage" },
];

/**
 * PDF-grounded project counts. Used in project sections so the numbers
 * match `lib/projects.ts` exactly (which derives the totals from the
 * source PDF lists). Never mixed with the broader STATS above.
 */
export const PROJECT_STATS: Stat[] = [
  { value: "177", label: "Named Project Entries" },
  { value: "138", label: "Completed Projects" },
  { value: "39", label: "Ongoing / Awarded" },
  { value: "15+", label: "Years of Expertise" },
];

export type Problem = { icon: LucideIcon; title: string; desc: string };

export const PROBLEMS: Problem[] = [
  {
    icon: AlertTriangle,
    title: "Failed DENR sampling",
    desc: "Effluent that drifts out of spec puts permits, operations, and reputation at risk.",
  },
  {
    icon: Volume2,
    title: "Odor & noise complaints",
    desc: "Poorly engineered systems create persistent issues for guests, patients, and neighbors.",
  },
  {
    icon: Clock,
    title: "Undersized or aging STPs",
    desc: "Legacy systems struggle as facilities grow, sectors evolve, and standards tighten.",
  },
  {
    icon: Gauge,
    title: "High operating costs",
    desc: "Inefficient aeration, sludge handling, and chemical usage quietly drain budgets every month.",
  },
  {
    icon: Layers,
    title: "Poor sludge & solids handling",
    desc: "Inadequate primary and secondary treatment cascades problems through the entire process train.",
  },
  {
    icon: Wrench,
    title: "No clear maintenance partner",
    desc: "Without continuous support, performance degrades long before a major failure becomes visible.",
  },
  {
    icon: Workflow,
    title: "Limited future capacity",
    desc: "Non-modular designs make expansion, AOP upgrades, and water reuse retrofits prohibitively complex.",
  },
];

export type Capability = { icon: LucideIcon; title: string; desc: string };

export const CAPABILITIES: Capability[] = [
  {
    icon: MapPin,
    title: "Site Assessment & Consultation",
    desc: "Hydraulic loading, influent profiling, and site constraints reviewed by Aeroasia engineers.",
  },
  {
    icon: Hammer,
    title: "STP Design & Installation",
    desc: "Custom-engineered sewage treatment plants built around your facility, sector, and growth path.",
  },
  {
    icon: Recycle,
    title: "Rehabilitation & Relocation",
    desc: "Restore underperforming systems or relocate STPs without disrupting facility operations.",
  },
  {
    icon: Zap,
    title: "AOP Integration",
    desc: "Locally engineered Advanced Oxidation Process integrated as a polish or core treatment stage.",
  },
  {
    icon: ShieldCheck,
    title: "DAO-Compliant Upgrades",
    desc: "System design aligned with DENR AO 2016-08 and DAO 2021-19 effluent expectations.",
  },
  {
    icon: Settings2,
    title: "Preventive Maintenance",
    desc: "Scheduled servicing, diagnostics, and troubleshooting to keep treatment performance stable.",
  },
  {
    icon: Droplets,
    title: "Water Reuse Readiness",
    desc: "Modular, upgrade-ready infrastructure that supports wastewater reuse objectives where applicable.",
  },
  {
    icon: Users,
    title: "Nationwide Support",
    desc: "70+ employees and a satellite office network providing after-sales coverage across the Philippines.",
  },
];

export type Service = { icon: LucideIcon; title: string; desc: string };

export const SERVICES: Service[] = [
  {
    icon: Hammer,
    title: "Sewage Treatment Plant (STP) Design & Build",
    desc: "End-to-end engineering for new STP facilities — hydraulic design, equipment, electrical, controls, and commissioning, designed to support DENR compliance from day one.",
  },
  {
    icon: Recycle,
    title: "STP Rehabilitation & Upgrading",
    desc: "Bring aging or underperforming sewage treatment plants back to spec — process re-tuning, component-level replacement, and capacity upgrades with minimum operational disruption.",
  },
  {
    icon: Zap,
    title: "Advanced Oxidation Process (AOP) Technology",
    desc: "Locally engineered AOP — hydroxyl-radical chemistry integrated as a polish or core treatment stage, including retrofits into existing STP trains.",
  },
  {
    icon: ShieldCheck,
    title: "DENR Compliance · DAO 2016-08 & 2021-19",
    desc: "DENR-compliant system design aligned with DAO 2016-08 and DAO 2021-19 effluent expectations, with sampling-readiness planning and operations documentation.",
  },
  {
    icon: ClipboardCheck,
    title: "Discharge Permit (DP) Assistance",
    desc: "Assistance with discharge permit (DP) requirements — system-design alignment with permit conditions, documentation, and operational planning to prepare facilities for permitting.",
  },
  {
    icon: Settings2,
    title: "Preventive Maintenance & After-Sales Support",
    desc: "Scheduled servicing, parts replacement, performance tuning, and nationwide on-call after-sales support — designed to keep discharge stable over the system's operating life.",
  },
  {
    icon: Activity,
    title: "Troubleshooting & Diagnostics",
    desc: "Diagnostic services for odor, foaming, sludge bulking, off-spec effluent, and equipment faults — with low-odor design principles applied to corrective recommendations.",
  },
  {
    icon: Truck,
    title: "STP Relocation",
    desc: "Disassembly, transport, and re-commissioning of existing STPs as facilities expand or reconfigure.",
  },
  {
    icon: Droplets,
    title: "Water Reuse Readiness",
    desc: "System design that supports wastewater reuse objectives — for landscaping, flushing, cooling, and process applications, where applicable.",
  },
];

export type Sector = {
  icon: LucideIcon;
  title: string;
  concern: string;
};

export const SECTORS: Sector[] = [
  {
    icon: Hospital,
    title: "Hospitals & Healthcare",
    concern:
      "Hospitals, clinics, dialysis centers, and healthcare facilities. AOP setups designed to remain effective in the presence of antibiotics, chemical reagents, and disinfectants — and ready for upgrading toward recycling options where applicable.",
  },
  {
    icon: ShoppingBag,
    title: "Malls & Commercial Centers",
    concern:
      "Commercial developments — small footprint requirements and cost-effective operation tailored to malls, public markets, and BPO towers.",
  },
  {
    icon: Palmtree,
    title: "Hotels & Resorts",
    concern:
      "Hotels, resorts, condominium units, and other residential developments. Minimal noise, tolerable odor emission, and high-quality effluent — suited to densely populated and environmentally sensitive sites.",
  },
  {
    icon: Factory,
    title: "Light Industry",
    concern:
      "Warehouses, logistics, offices, and BPO centers — compact AOP for sites with minimal pollutant volume that still need DENR compliance and low-odor design in urban areas.",
  },
  {
    icon: Beaker,
    title: "Food Industry",
    concern:
      "Commissaries, food processing, and canning. AOP paired with Aeroasia-Hydromex's oil digester — designed to minimize foul odor, reduce FOG volume substantially, and render grease degradable.",
  },
  {
    icon: FlaskConical,
    title: "Laboratories",
    concern:
      "Sensitive, controlled discharge with documentation and consistent compliance readiness.",
  },
  {
    icon: Building2,
    title: "Condos & Mixed-Use",
    concern:
      "Residential developments and mixed-use buildings — low-noise, low-odor design suited to basement or podium installs in tight urban footprints.",
  },
  {
    icon: Users,
    title: "Municipal / LGU Facilities",
    concern:
      "Public service reliability, long-term operating cost, and clear regulatory alignment.",
  },
  {
    icon: Sprout,
    title: "Agricultural Facilities",
    concern:
      "Variable seasonal loading, nutrient management, and reuse objectives where applicable.",
  },
  {
    icon: Ship,
    title: "Ports & Shipping",
    concern:
      "Coastal compliance, marine-adjacent discharge, and high-availability treatment continuity.",
  },
];

export type ProcessStep = {
  step: number;
  title: string;
  desc: string;
  icon: LucideIcon;
};

export const PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: "Influent Intake",
    desc: "Raw wastewater enters the system from the facility's drainage network.",
    icon: Droplets,
  },
  {
    step: 2,
    title: "Screening & Primary",
    desc: "Solids and grit are removed before biological and chemical treatment begins.",
    icon: Layers,
  },
  {
    step: 3,
    title: "Anaerobic Digestion",
    desc: "Organic load is reduced biologically in oxygen-free reactors.",
    icon: Leaf,
  },
  {
    step: 4,
    title: "Ozone + Elevated pH",
    desc: "Ozone gas and raised pH set the chemistry stage for hydroxyl radical formation.",
    icon: Beaker,
  },
  {
    step: 5,
    title: "Hydroxyl Radicals",
    desc: "Highly reactive ·OH radicals oxidize contaminants that conventional steps may struggle to remove.",
    icon: Zap,
  },
  {
    step: 6,
    title: "Microbubble Contact",
    desc: "Microbubbles increase gas-to-water contact efficiency, improving oxidation performance.",
    icon: Cpu,
  },
  {
    step: 7,
    title: "Tertiary Polish",
    desc: "Final clarification and filtration prepare the effluent for safe, compliant discharge.",
    icon: ShieldCheck,
  },
  {
    step: 8,
    title: "Cleaner Effluent",
    desc: "Designed to support DENR compliance and, where applicable, wastewater reuse objectives.",
    icon: Recycle,
  },
];

export type AOPBenefit = { icon: LucideIcon; title: string; desc: string };

export const AOP_BENEFITS: AOPBenefit[] = [
  { icon: ShieldCheck, title: "Higher pollutant removal potential", desc: "Designed to target contaminants conventional treatment may struggle with." },
  { icon: Droplets, title: "Engineered for cleaner discharge", desc: "System design aligned with DAO 2016-08 and DAO 2021-19 expectations." },
  { icon: Volume2, title: "Lower odor profile", desc: "Designed for occupied buildings, hospitals, and urban sites." },
  { icon: Activity, title: "Low-noise operation", desc: "Suitable for guest-facing and residential-adjacent installations." },
  { icon: Layers, title: "Compact footprint", desc: "Engineered to fit constrained urban and podium environments." },
  { icon: Workflow, title: "Modular expansion", desc: "Upgrade-ready as your facility grows or standards evolve." },
  { icon: ShieldCheck, title: "Supports DENR compliance", desc: "Designed to support compliance through engineering, operation, and maintenance." },
  { icon: Recycle, title: "Reuse-ready", desc: "Supports wastewater reuse objectives where applicable to site conditions." },
];

export type Value = { letter: string; title: string; desc: string };

export const VALUES: Value[] = [
  { letter: "A", title: "Accountability", desc: "Owning every stage of design, build, and operation." },
  { letter: "A", title: "Affordability", desc: "Cost-conscious engineering without compromising performance." },
  { letter: "E", title: "Environmental Commitment", desc: "Designing toward cleaner discharge and responsible water stewardship." },
  { letter: "R", title: "Reliability", desc: "Systems engineered to perform across the full operating life." },
  { letter: "O", title: "Openness to Innovation", desc: "Continuously refining AOP and treatment process design." },
];

// Project portfolio data moved to `lib/projects.ts`. Source of truth is
// now the two Aeroasia-Hydromex PDFs (company profile + the dedicated
// completed/ongoing projects list).

export const COMPLIANCE_POINTS = [
  "DENR Administrative Order 2016-08",
  "DENR Administrative Order 2021-19",
  "General Effluent Standards alignment",
  "Sampling-readiness operational planning",
  "Preventive maintenance & service continuity",
  "Operations documentation & support",
];

export const NAV_LINKS = [
  { href: "/#technology", label: "Technology" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export const CONTACT = {
  primaryEmail: "payganejrphilip@gmail.com",
  /** Display phone, as shown on the Facebook business page. */
  phone: "0906 788 7601",
  /** E.164 form for tel: and wa.me/ URLs. */
  phoneE164: "+639067887601",
  whatsappDisplay: "+63 906 788 7601",
};

/**
 * A. Hydromex STP & AOP Wastewater Solutions PH — active Facebook business
 * presence. This is the primary marketing channel; the website routes leads
 * toward Messenger, WhatsApp, and the email above.
 */
export const SOCIAL = {
  pageName: "A. Hydromex STP & AOP Wastewater Solutions PH",
  facebookUrl: "https://www.facebook.com/AHydromexSTP",
  messengerUrl: "https://m.me/AHydromexSTP",
  whatsappUrl: "https://wa.me/639067887601",
  emailUrl: "mailto:payganejrphilip@gmail.com",
};

export { Lightbulb };
