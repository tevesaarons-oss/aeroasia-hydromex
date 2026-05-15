/**
 * Hand-curated picks from the auto-extracted Aeroasia assets.
 *
 * Each entry below was visually verified to be a real Aeroasia photo, the
 * official AOP diagram, real Aeroasia personnel, or branded company content.
 * Generic Wix illustrations, watercolor backgrounds, and social-icon chrome
 * were rejected and are not surfaced here.
 *
 * To re-extract:
 *   node scripts/extract-aeroasia-media.mjs
 */

export type CuratedAsset = {
  src: string;
  alt: string;
  caption?: string;
  note: string; // why this asset is used and how
};

/* --- TIER 1: HERO QUALITY · real Aeroasia material --- */

export const officialAopDiagram: CuratedAsset = {
  src: "/assets/extracted/technology/198-f4jr1b-2062c8_f730649c91504a4793917704dd813ca8_mv2.png",
  alt: "Aeroasia official AOP treatment train diagram",
  caption: "Official process diagram",
  note: "The real Aeroasia AOP flow: Grease Trap → Equalization → Digestion → AOP → Multimedia → Ammonia Filter → Ceramic Membrane → Discharge.",
};

export const realEquipmentPhotos: CuratedAsset[] = [
  {
    src: "/assets/extracted/technology/196-kzmh2f-bbe6c5_8672425858a54ac09a26afb1a985fb5b_mv2.png",
    alt: "Aeroasia AOP equipment installed on site",
    caption: "Installed AOP equipment",
    note: "Real Aeroasia field installation — blue pressure vessels, control cabinets, piping.",
  },
  {
    src: "/assets/extracted/technology/197-7lrxxo-bbe6c5_7b9b543422644b75ba3eb1776d31cebd_mv2.png",
    alt: "Aeroasia engineers performing on-site service",
    caption: "Engineers on site",
    note: "Real Aeroasia personnel in uniform performing field work.",
  },
];

export const realStpInstallPhotos: CuratedAsset[] = [
  {
    src: "/assets/extracted/projects/104-wwzjrz-2062c8_c2ff52a465ff485aa12ccb4a847e337a_mv2.png",
    alt: "Indoor STP installation with stainless steel treatment tanks",
    caption: "Indoor STP · stainless tanks",
    note: "Real Aeroasia STP install in a basement utility room.",
  },
  {
    src: "/assets/extracted/projects/105-mkxdq9-2062c8_259046529f9e47cb8a8190d10cb576e5_mv2.png",
    alt: "Aeroasia STP control room with pumping equipment",
    caption: "STP control room",
    note: "Real Aeroasia install — pressure vessel, pumps, treatment tanks.",
  },
  {
    src: "/assets/extracted/projects/106-rudw64-2062c8_03ff15c4deb44d5aa1520368d1c7cd7f_mv2.png",
    alt: "Rooftop STP installation under metal roof shelter",
    caption: "Rooftop STP",
    note: "Aeroasia rooftop install — three treatment cells under roof shelter.",
  },
  {
    src: "/assets/extracted/projects/107-gli5lm-2062c8_ee131700b1a74526ae1dc07f433afb06_mv2.png",
    alt: "Outdoor AOP system with blue pressure vessels and control panel",
    caption: "Outdoor AOP train",
    note: "Aeroasia outdoor install with full treatment train and control panel.",
  },
];

export const teamPhoto: CuratedAsset = {
  src: "/assets/extracted/contact/115-xqmkd6-bbe6c5_2dbf2f8a128145e9a814fc876970815d_mv2.png",
  alt: "The Aeroasia-Hydromex team in matching blue uniforms",
  caption: "The Aeroasia-Hydromex team",
  note: "Real Aeroasia team photo — 20+ engineers and technicians in branded uniforms.",
};

export const brandedHeroCards: CuratedAsset[] = [
  {
    src: "/assets/extracted/home/161-bawll0-2062c8_6be1315a445543bca59a64466b8d8895_mv2.png",
    alt: "Aeroasia branded card: TREATING WHAT OTHERS CAN'T",
    caption: "Treating what others can't",
    note: "Aeroasia's own marketing card with logo and installed equipment.",
  },
  {
    src: "/assets/extracted/home/162-qhkewo-2062c8_df0d2069fdcf40a789cd76da2f66190b_mv2.png",
    alt: "Aeroasia branded card: BUILT THROUGH EXPERIENCE",
    caption: "Built through experience",
    note: "Aeroasia's own marketing card emphasising AOP since 2009.",
  },
  {
    src: "/assets/extracted/home/163-v9ozfg-2062c8_fca9d281fd534126a060cc6705cc0013_mv2.png",
    alt: "Aeroasia branded card: Inside AeroAsia's Advanced Oxidation Process",
    caption: "Inside Aeroasia's AOP",
    note: "Aeroasia's own marketing card highlighting AOP technology.",
  },
  {
    src: "/assets/extracted/home/164-4y01oq-2062c8_abbac9a26ab244f68f8686eff73924bd_mv2.png",
    alt: "Aeroasia branded card: Industries We Serve",
    caption: "Industries we serve",
    note: "Aeroasia's own marketing card highlighting sector coverage.",
  },
];

export const additionalInstallPhotos: CuratedAsset[] = [
  {
    src: "/assets/extracted/contact/116-ta51no-2062c8_bfc02abc784a488ea5904343dc0d0e56_mv2.png",
    alt: "Aeroasia indoor STP installation",
    caption: "Indoor STP install",
    note: "Real Aeroasia install — additional view of stainless cells.",
  },
  {
    src: "/assets/extracted/contact/118-oedkjp-2062c8_2495aba1b46144c785281d61f39da485_mv2.png",
    alt: "Aeroasia STP piping and dosing system",
    caption: "Piping & dosing system",
    note: "Real Aeroasia install — PVC piping, chemical dosing barrel, treatment tanks.",
  },
];

/* --- TIER 2: USE SPARINGLY · stylized illustrations from Wix --- */
export const serviceIllustrations: CuratedAsset[] = [
  // Intentionally empty — the Wix illustrations (services/075-079) are too
  // generic to use prominently. They remain on disk and in the auto-manifest
  // for future use, but are not surfaced through this curated layer.
];

/* --- Convenience helpers --- */

export const hasRealAopDiagram = true;
export const hasRealEquipmentPhotos = realEquipmentPhotos.length > 0;
export const hasRealStpInstallPhotos = realStpInstallPhotos.length > 0;
export const hasTeamPhoto = true;
export const hasBrandedCards = brandedHeroCards.length > 0;
