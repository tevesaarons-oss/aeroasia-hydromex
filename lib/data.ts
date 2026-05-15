import {
  Activity,
  AlertTriangle,
  Beaker,
  Building2,
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

export const STATS: Stat[] = [
  { value: "200+", label: "Completed Projects" },
  { value: "15+", label: "Years of Expertise" },
  { value: "70+", label: "Employees Nationwide" },
  { value: "Nationwide", label: "Service Coverage" },
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
    title: "New STP Design & Build",
    desc: "End-to-end engineering for greenfield facilities — hydraulic design, equipment, electrical, controls, and commissioning.",
  },
  {
    icon: Recycle,
    title: "STP Rehabilitation",
    desc: "Bring aging or underperforming sewage treatment plants back to spec with minimum disruption.",
  },
  {
    icon: Truck,
    title: "STP Relocation",
    desc: "Disassembly, transport, and re-commissioning of existing STPs as facilities expand or reconfigure.",
  },
  {
    icon: Zap,
    title: "AOP System Upgrades",
    desc: "Retrofit Advanced Oxidation Process technology into existing treatment trains for stronger polish.",
  },
  {
    icon: ShieldCheck,
    title: "DAO Compliance Support",
    desc: "System design and operational planning aligned with DENR AO 2016-08 and DAO 2021-19 standards.",
  },
  {
    icon: Settings2,
    title: "Preventive Maintenance",
    desc: "Scheduled servicing, parts replacement, and performance tuning — keeping discharge stable.",
  },
  {
    icon: Activity,
    title: "Troubleshooting & Diagnostics",
    desc: "Diagnostive services for odor, foaming, sludge bulking, off-spec effluent, and equipment faults.",
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
      "Infection-sensitive environments, continuous operations, DENR sampling readiness, and high operational reliability.",
  },
  {
    icon: ShoppingBag,
    title: "Malls & Commercial Centers",
    concern:
      "High foot traffic, odor control, compact footprint, and reliability for daily mall operations.",
  },
  {
    icon: Palmtree,
    title: "Hotels & Resorts",
    concern:
      "Guest experience, coastal and water-sensitive locations, and environmental stewardship.",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    concern:
      "Stronger wastewater loads, variable influent, and robust systems that hold up to continuous duty.",
  },
  {
    icon: Beaker,
    title: "Food & Beverage Plants",
    concern:
      "High-BOD, high-FOG streams that demand engineered primary and secondary treatment.",
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
      "Urban footprints, low-noise operation, and modular systems that fit basement or podium installs.",
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

export type ProjectGroup = {
  range: string;
  projects: string[];
};

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    range: "2009 – 2012",
    projects: [
      "Calamba Medical Center",
      "San Pablo Doctors Hospital",
      "Community General Hospital",
      "Laguna Doctors Hospital",
      "Paete General Hospital",
      "Siniloan Pioneer General Hospital",
      "Luis Tirso Medical Center",
      "Dr. Montano Ramos Medical Center",
      "Perpetual Soccour Hospital",
    ],
  },
  {
    range: "2013 – 2018",
    projects: [
      "Gabriela Silang General Hospital",
      "Palawan Adventist Hospital",
      "Urdaneta Sacred Heart Center",
      "Calamba Medical Center Tower 2",
      "Our Health Center",
      "Metro Antipolo Medical Center",
      "Southern Isabela General Hospital",
      "Sacred Heart Medical Center",
      "Calamba Medical Kidney Center",
      "Manila Adventist Hospital",
    ],
  },
  {
    range: "2019 – 2021",
    projects: [
      "Taytay Doctors Hospital",
      "Ortigas Hospital",
      "Maitum Municipal Hospital",
      "ACE Medical Center Cebu City",
      "Mandaluyong City Dialysis Center",
      "Rosario Maclang General Hospital",
      "Morong Medical and Hemodialysis Center",
      "Urdaneta Sacred Heart Center",
      "Metro Lemery Medical Center",
      "Rosario Memorial Hospital",
      "Metro San Jose Medical Center",
      "Cabuyao City Hospital",
      "Hemotek Renal Center",
      "Karmelli Clinic and Hospital",
      "Bayugan City Doctors Hospital",
    ],
  },
  {
    range: "2022 – 2025",
    projects: [
      "Allied Care Experts Medical Center Tacloban",
      "Allied Care Experts Medical Center Puerto Princesa",
      "Sta. Rosa Hospital and Medical Center",
      "Palawan Adventist Hospital",
      "Morong Medical and Hemodialysis Center",
      "Siniloan Pioneer General Hospital",
      "Unihealth Quezon and Medical Center",
      "Christ the King Hospital",
      "Unihealth Southwoods Hospital and Medical Center",
      "Urology Center of the Philippines",
      "Lipa Medix Medical Center",
      "JKQ Medical and Wellness Center",
      "Sto. Rosario Hospital",
      "St. John The Baptist Hospital",
      "Mabini General Hospital",
    ],
  },
];

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
  primaryEmail: "info@aeroasiahydromex.com",
  emails: [
    "info@aeroasiahydromex.com",
    "aerorandd@gmail.com",
    "sales.aeroasiahydromex@gmail.com",
    "aeroasiahydromex@yahoo.com",
  ],
  phones: ["+63 976 112 9515", "+63 961 726 5158"],
  satelliteOffice: "049 566 8330",
  address:
    "Poblacion Room 306 ETG Building, A. Mabini St., San Pedro, Laguna",
};

export { Lightbulb };
