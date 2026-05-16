/**
 * Project portfolio sourced from two official Aeroasia-Hydromex PDFs:
 *
 *   - Aeroasia-Hydromex Company Profile (STP AOP CONTRACTOR)
 *   - Aeroasia-Hydromex Completed and On Going Projects (the newer
 *     dedicated projects PDF, preferred for the project list).
 *
 * Names are preserved as shown in the source. Only obvious typos are
 * corrected (e.g. "Calmba" → "Calamba", "Bol;bok" → "Bolbok",
 * "St Like's" → "St Luke's", "219" → "2019"). Duplicate listings are
 * kept where the source lists them separately, per project-history
 * convention.
 */

import {
  Building2,
  Hospital,
  Palmtree,
  Beaker,
  Factory,
  type LucideIcon,
} from "lucide-react";

export type ProjectIndustry =
  | "healthcare"
  | "commercial"
  | "tourism"
  | "food"
  | "light";

export type ProjectStatus = "completed" | "ongoing";

export type ProjectEntry = {
  name: string;
  location?: string;
  year?: string;
};

export type ProjectCategory = {
  industry: ProjectIndustry;
  label: string;
  status: ProjectStatus;
  icon: LucideIcon;
  /** Short blurb framed for the buyer. Not a guarantee. */
  blurb: string;
  projects: ProjectEntry[];
};

/* ──────────────────────────────────────────────────────────────── */
/* COMPLETED PROJECTS                                               */
/* ──────────────────────────────────────────────────────────────── */

export const COMPLETED_PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    industry: "healthcare",
    label: "Healthcare",
    status: "completed",
    icon: Hospital,
    blurb:
      "Hospitals, clinics, dialysis centers, and other healthcare facilities — systems designed to support continuous operation and DENR compliance.",
    projects: [
      { name: "Calamba Medical Center", location: "Calamba City, Laguna", year: "2009" },
      { name: "San Pablo Doctors Hospital", location: "San Pablo City, Laguna", year: "2009" },
      { name: "Community General Hospital", location: "San Pablo City, Laguna", year: "2010" },
      { name: "Laguna Doctors Hospital", location: "Sta. Cruz, Laguna", year: "2010" },
      { name: "Paete General Hospital", location: "Paete, Laguna", year: "2011" },
      { name: "Siniloan Pioneer General Hospital", location: "Siniloan, Laguna", year: "2011" },
      { name: "Luis Tirso Medical Center", location: "Paniqui, Tarlac", year: "2011" },
      { name: "Dr. Montano Ramos Medical Center", location: "Quezon City", year: "2011" },
      { name: "Perpetual Soccour Hospital", location: "Sampaloc, Manila", year: "2012" },
      { name: "Mendero Medical Center", location: "Consolacion, Cebu", year: "2013" },
      { name: "Gabriela Silang General Hospital", location: "Vigan, Ilocos Sur", year: "2013" },
      { name: "Palawan Adventist Hospital", location: "Puerto Princesa City, Palawan", year: "2014" },
      { name: "Urdaneta Sacred Heart Center", location: "Urdaneta City, Pangasinan", year: "2014" },
      { name: "Calamba Medical Center Tower 2", location: "Calamba City, Laguna", year: "2015" },
      { name: "Our Health Center", location: "Cabuyao, Laguna", year: "2015" },
      { name: "Metro Antipolo Medical Center", location: "Antipolo City", year: "2016" },
      { name: "Southern Isabela General Hospital", location: "Santiago City, Isabela", year: "2016" },
      { name: "Sacred Heart Medical Center", location: "Angeles City, Pampanga", year: "2016" },
      { name: "Calamba Medical Kidney Center", year: "2018" },
      { name: "Manila Adventist Hospital", location: "Pasay City", year: "2018" },
      { name: "Taytay Doctors Hospital", location: "Taytay, Rizal", year: "2019" },
      { name: "Ortigas Hospital", location: "Cainta, Rizal", year: "2019" },
      { name: "Ace Medical Center", location: "Tacloban City", year: "2019" },
      { name: "Ace Medical Center", location: "Cebu City", year: "2019" },
      { name: "Mandaluyong City Dialysis Center", year: "2019" },
      { name: "Rosario Maclang General Hospital", location: "Batasan, Quezon City", year: "2019" },
      { name: "Morong Medical and Hemodialysis Center", location: "Morong, Rizal", year: "2020" },
      { name: "Urdaneta Sacred Heart Center (Upgrading of STP Equip)", location: "Urdaneta City, Pangasinan", year: "2021" },
      { name: "Metro Lemery Medical Center", location: "Lemery, Batangas", year: "2021" },
      { name: "Rosario Memorial Hospital", location: "Pampanga", year: "2021" },
      { name: "Metro San Jose Medical Center", location: "San Jose, Batangas", year: "2021" },
      { name: "Cabuyao City Hospital", location: "Cabuyao, Laguna", year: "2021" },
      { name: "Hemotek Renal Center", location: "San Fernando, Pampanga", year: "2021" },
      { name: "Karmelli Clinic and Hospital", location: "Laoag City, Ilocos Norte", year: "2021" },
      { name: "Bayugan City Doctors Hospital", location: "Bayugan City, Agusan del Sur", year: "2021" },
      { name: "Allied Care Experts Medical Center", location: "Tacloban City", year: "2022" },
      { name: "Maitum Municipal Hospital", location: "Sarangani", year: "2022" },
      { name: "Allied Care Experts Medical Center", location: "Puerto Princesa City, Palawan", year: "2022" },
      { name: "Sta Rosa Hospital and Medical Center", location: "Sta Rosa, Laguna", year: "2022" },
      { name: "Palawan Adventist Hospital", location: "Puerto Princesa City, Palawan", year: "2021" },
      { name: "Morong Medical and Hemodialysis Center", location: "Morong, Rizal", year: "2020" },
      { name: "Siniloan Pioneer General Hospital (Upgrading of STP Equip)", location: "Siniloan, Laguna", year: "2022" },
      { name: "Unihealth Quezon and Medical Center", location: "Tayabas, Quezon", year: "2022" },
      { name: "Christ the King Hospital", location: "Las Piñas", year: "2022" },
      { name: "Ace Medical Center Palawan", year: "2022" },
      { name: "Sarangani Provincial Hospital", year: "2022" },
      { name: "Ace Medical Center Legazpi", location: "Legazpi, Albay", year: "2023" },
      { name: "Laguna Doctors Hospital (Ph-2)", year: "2023" },
      { name: "Mabini General Hospital", location: "Bolbok, Batangas City", year: "2023" },
      { name: "Sto Rosario Hospital Inc", location: "Batangas", year: "2023" },
      { name: "Unihealth Quezon Hospital and Medical Center", year: "2023" },
      { name: "Unihealth Southwoods Hospital and Medical Center Inc", year: "2023" },
      { name: "Urology Center of The Philippines", year: "2023" },
      { name: "Lipa Medix Medical Center", location: "Lipa City, Batangas", year: "2024" },
      { name: "St Luke's Medical Center", location: "Quezon City", year: "2024" },
      { name: "St John the Baptist Hospital", location: "Calamba, Laguna", year: "2024" },
      { name: "Healthserv Medical Center", location: "Los Baños, Laguna", year: "2024" },
      { name: "Chonghua Medical Center", location: "Fuente, Cebu", year: "2024" },
      { name: "St. Luke Medical Center", location: "Quezon City", year: "2025" },
    ],
  },
  {
    industry: "commercial",
    label: "Commercial Developments",
    status: "completed",
    icon: Building2,
    blurb:
      "Malls, BPO towers, public markets, and mixed-use centers — compact-footprint STP design with low-odor operation for urban sites.",
    projects: [
      { name: "EM Commercial Center", location: "Binangonan, Rizal", year: "2015" },
      { name: "Madison Galleries", location: "Muntinlupa City", year: "2015" },
      { name: "Gaisano Mall Surigao", location: "Surigao City", year: "2015" },
      { name: "Gaisano Mall Danao", location: "Danao, Cebu", year: "2016" },
      { name: "Gaisano Mall Balamban", location: "Balamban, Cebu", year: "2016" },
      { name: "I-Mall Camarin", location: "Caloocan City", year: "2017" },
      { name: "Oakridge 1", location: "Cebu City", year: "2017" },
      { name: "Gaisano Mall Calapan", location: "Calapan City, Mindoro", year: "2017" },
      { name: "Gaisano Mall Bislig", location: "Bislig, Cebu", year: "2017" },
      { name: "Gaisano Mall Lapaz", location: "Lapaz, Iloilo City", year: "2017" },
      { name: "Gaisano Mall Digos", location: "Digos City", year: "2018" },
      { name: "Gaisano Mall Calbayog", location: "Calbayog City", year: "2018" },
      { name: "Gaisano Mall Jaialai", location: "Cebu City", year: "2018" },
      { name: "Gaisano Mall Tisa", location: "Cebu City", year: "2018" },
      { name: "East Narra Event Center", location: "Concepcion, Marikina City", year: "2018" },
      { name: "Gaisano Mall Mambaling", location: "Cebu City", year: "2018" },
      { name: "Gaisano Mall Buhangin", location: "Davao City", year: "2018" },
      { name: "Jumbo Jenra Mall", location: "San Fernando City, Pampanga", year: "2018" },
      { name: "Lucky Gold Plaza", location: "Pasig City", year: "2018" },
      { name: "Oakridge 2", location: "Cebu City", year: "2018" },
      { name: "Jenra Mall", location: "Angeles City", year: "2019" },
      { name: "Gaisano Mall Kidapawan", location: "Kidapawan City", year: "2019" },
      { name: "I-Mall Antipolo", location: "Antipolo City", year: "2019" },
      { name: "Gaisano Mall Talamban", location: "Cebu City", year: "2019" },
      { name: "Gaisano Mall Sara", location: "Iloilo City", year: "2020" },
      { name: "Gaisano Mall Estancia", location: "Iloilo City", year: "2020" },
      { name: "Gaisano Mall Mandaue", location: "Cebu", year: "2020" },
      { name: "EM Commercial Center (Upgrading of STP Equip)", location: "Binangonan, Rizal", year: "2022" },
      { name: "Jumbo Jenra Mall/Supermarket (Upgrading of STP Equip)", location: "San Fernando City, Pampanga", year: "2022" },
      { name: "Unisun Shopping Mall", location: "Sta. Cruz, Laguna", year: "2022" },
      { name: "iMet BPO Towers", location: "MOA Complex, Pasay City" },
      { name: "Jumbo Jenra Apalit", location: "Apalit, Pampanga", year: "2024" },
      { name: "Antipolo Public Market", year: "2024" },
      { name: "SUKI Market", location: "San Pedro, Laguna", year: "2024" },
      { name: "SUKI Market Dapitan", year: "2024" },
    ],
  },
  {
    industry: "tourism",
    label: "Tourism & Residential",
    status: "completed",
    icon: Palmtree,
    blurb:
      "Hotels, resorts, condominiums, and residential developments — low-noise, low-odor design suited to guest-facing and coastal environments.",
    projects: [
      { name: "Panglao Island Resort and Spa", location: "Panglao, Bohol", year: "2015" },
      { name: "Gaisano City Soho", location: "Cebu City", year: "2015" },
      { name: "Green Canyon Resort and Hotel", location: "Mabalacat, Pampanga", year: "2016" },
      { name: "Illustrata Condominium", location: "San Juan City", year: "2017" },
      { name: "Tsuneishi Hotel", location: "Balamban, Cebu", year: "2017" },
      { name: "Qew Hotel", location: "Tagbilaran, Bohol", year: "2017" },
      { name: "One Tagaytay Hotel", location: "Tagaytay City", year: "2018" },
      { name: "The Lind Hotel", location: "Boracay, Aklan", year: "2018" },
      { name: "Pinnacle Hotel", location: "Boracay, Aklan", year: "2018" },
      { name: "Plantation Bay Resort and Hotel", location: "Mactan, Cebu", year: "2018" },
      { name: "Cocobana Resort", location: "Malapascua, Cebu", year: "2019" },
      { name: "Busuanga Bay Lodge", location: "Busuanga City", year: "2019" },
      { name: "Blue Lotus Hotel", location: "Davao City", year: "2019" },
      { name: "L'Oasis Malabon", location: "Malabon City", year: "2019" },
      { name: "La Verdad Christian College", location: "Caloocan City", year: "2019" },
      { name: "The Lind", year: "2022" },
      { name: "Lime Hotel Manila", location: "Pasay City", year: "2022" },
      { name: "Lime Resort Hotel", location: "El Nido", year: "2022" },
      { name: "Funny Lion Inn", year: "2022" },
      { name: "Funny Lion Mall", year: "2022" },
      { name: "Amorita Hotel", year: "2022" },
      { name: "Angkla Beach Club and Boutique Resort", location: "El Nido", year: "2022" },
      { name: "Sacred Heart College of Lucena City", year: "2022" },
      { name: "Medical Arts Building", location: "Cebu City", year: "2022" },
      { name: "Global Business Tower", location: "Quezon City", year: "2022" },
      { name: "SSK Business Tower", year: "2022" },
      { name: "Kings Court Building", location: "Makati", year: "2023" },
      { name: "UP-SDI", year: "2023" },
      { name: "Puregold/BQ Lias", location: "Marilao, Bulacan", year: "2023" },
    ],
  },
  {
    industry: "food",
    label: "Food Industry",
    status: "completed",
    icon: Beaker,
    blurb:
      "Commissaries, canning, and food production facilities — AOP paired with Aeroasia's oil digester for FOG-heavy waste streams.",
    projects: [
      { name: "Bakemaster Commissary", location: "Taguig City", year: "2016" },
      { name: "Citra Mina Canning", location: "General Santos City", year: "2017" },
      { name: "Café France Commissary", location: "Sta. Ana, Manila", year: "2018" },
      { name: "Buenarich Commissary", location: "Quezon City", year: "2018" },
      { name: "Buenarich Commissary", location: "Davao City", year: "2019" },
      { name: "3 Brixton Commissary", location: "Pasig City" },
    ],
  },
  {
    industry: "light",
    label: "Light Industry",
    status: "completed",
    icon: Factory,
    blurb:
      "Warehouses, logistics, offices, and BPO centers — compact AOP suited to urban-zoned light-industrial sites.",
    projects: [
      { name: "SM Silangan Warehouses", location: "Calamba City", year: "2019" },
      { name: "BB1 Barandal Warehouses", location: "Calamba City", year: "2021" },
      { name: "Big Ben Warehouses", location: "Taguig, Metro Manila", year: "2021" },
      { name: "Honda Philippines", location: "Manila", year: "2021" },
      { name: "EEI Corp. ESD Yard", location: "Tanza, Cavite", year: "2021" },
      { name: "EE iMet BPO Towers 2, 3 & 4", location: "Pasay City", year: "2022" },
      { name: "Therma South Inc. (ABOITIZ)", location: "Davao City", year: "2022" },
      { name: "Hasting Motors Corporation", location: "Carmona, Cavite", year: "2022" },
      { name: "SB Hain Landfill", location: "Calamba City", year: "2022" },
    ],
  },
];

/* ──────────────────────────────────────────────────────────────── */
/* ONGOING / AWARDED PROJECTS                                       */
/* ──────────────────────────────────────────────────────────────── */

export const ONGOING_PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    industry: "healthcare",
    label: "Healthcare · Awarded but Not Yet Started",
    status: "ongoing",
    icon: Hospital,
    blurb: "Healthcare projects currently in design, mobilization, or awarded pipeline.",
    projects: [
      { name: "JKQ Medical and Wellness Center", location: "Pangasinan" },
      { name: "Nueva Vizcaya Medical Mission Group Hospital", location: "Nueva Vizcaya" },
      { name: "Tarlac City General Hospital" },
      { name: "Sta Cruz General Hospital" },
      { name: "Healthserv Los Baños Medical Center" },
      { name: "Unihealth Southwest", location: "Bacoor City, Cavite" },
      { name: "King Solomon Hospital and Medical Center" },
      { name: "Westlake Medical Center", location: "San Pedro, Laguna" },
    ],
  },
  {
    industry: "light",
    label: "Light Industry",
    status: "ongoing",
    icon: Factory,
    blurb: "Light-industrial projects currently in pipeline.",
    projects: [
      { name: "EEI New Training Center", location: "Tanza, Cavite" },
      { name: "Imus MRF", location: "Imus, Cavite" },
      { name: "Agri Pacific Corporation / BEHN MEYER", location: "Bulacan" },
    ],
  },
  {
    industry: "commercial",
    label: "Commercial Developments",
    status: "ongoing",
    icon: Building2,
    blurb: "Commercial developments currently in pipeline.",
    projects: [
      { name: "CMT Mandaue Retail Bloc", location: "Mandaue City" },
      { name: "Victory Liner Terminal", location: "Baguio City" },
      { name: "Ibaan New Public Market", location: "Lipa City, Batangas" },
    ],
  },
  {
    industry: "tourism",
    label: "Tourism & Residential",
    status: "ongoing",
    icon: Palmtree,
    blurb: "Tourism and residential developments currently in pipeline.",
    projects: [
      { name: "VCDU Royal Subdivision", location: "Butuan City" },
      { name: "Baguio Country Club", location: "Baguio City" },
      { name: "Pradera Theme Park" },
      { name: "Weltanchaung Corporation Building", location: "Mandaluyong City" },
      { name: "Realica 14 Storey Office Building / Madrigal Project" },
      { name: "Pradera Theme Park", location: "Pampanga" },
      { name: "Plaza Antonina", location: "Orani, Bataan" },
      { name: "Chateau de Maisons", location: "Baguio City" },
      { name: "Jamins Hotel" },
      { name: "CIIT 12 Storey Institutional Building" },
      { name: "PIO Monton Great Lake Resort", location: "Butuan City" },
      { name: "Davao Global Township", location: "Davao City" },
      { name: "San Juan Beach Resort Hotel", location: "San Juan, La Union" },
      { name: "West Grove Agri Farm Hotel", location: "Malvar, Batangas" },
      { name: "Mandani Bay HT Land", location: "Mandani Bay Ave., Cebu" },
      { name: "Isabela Sports Complex", location: "Santiago, Isabela" },
      { name: "Alphaland Baguio Mountain Pines Place", location: "Itogon, Benguet" },
      { name: "CJCLDS CDO Temple", location: "CDO, Misamis Oriental" },
      { name: "Raftel Commercial Building", location: "Pagbilao, Quezon" },
      { name: "SKYWORLD Hotel", location: "Baguio, Benguet" },
      { name: "PARKWAY Residences", location: "Baguio, Benguet" },
      { name: "Kanlaon Commercial Building", location: "Quezon City" },
      { name: "LANDERS Superstore", location: "Parañaque, MM" },
      { name: "My Enso Lofts Building", location: "Quezon City" },
      { name: "Esperanza Tower", location: "Cebu City" },
    ],
  },
];

/* ──────────────────────────────────────────────────────────────── */
/* DERIVED TOTALS                                                   */
/* ──────────────────────────────────────────────────────────────── */

function countBy(categories: ProjectCategory[]): number {
  return categories.reduce((sum, c) => sum + c.projects.length, 0);
}

export const COMPLETED_TOTAL = countBy(COMPLETED_PROJECT_CATEGORIES);
export const ONGOING_TOTAL = countBy(ONGOING_PROJECT_CATEGORIES);
export const ALL_PROJECTS_TOTAL = COMPLETED_TOTAL + ONGOING_TOTAL;

export const INDUSTRY_LABEL: Record<ProjectIndustry, string> = {
  healthcare: "Healthcare",
  commercial: "Commercial Developments",
  tourism: "Tourism & Residential",
  food: "Food Industry",
  light: "Light Industry",
};

export const INDUSTRY_ICON: Record<ProjectIndustry, LucideIcon> = {
  healthcare: Hospital,
  commercial: Building2,
  tourism: Palmtree,
  food: Beaker,
  light: Factory,
};

/* ──────────────────────────────────────────────────────────────── */
/* COMPANY MATERIALS · downloadable source PDFs                     */
/* ──────────────────────────────────────────────────────────────── */

export const COMPANY_MATERIALS = [
  {
    label: "Company Profile",
    description:
      "Full company overview: history, AOP technology, services, mission, vision, AERO-way, and team.",
    href: "/assets/documents/aeroasia-hydromex-company-profile.pdf",
    code: "DOC-CP-01",
  },
  {
    label: "Completed & Ongoing Projects",
    description:
      "Categorized project history across Healthcare, Commercial, Tourism & Residential, Food, and Light Industry — plus awarded and ongoing projects.",
    href: "/assets/documents/aeroasia-hydromex-completed-and-ongoing-projects.pdf",
    code: "DOC-PRJ-01",
  },
];
