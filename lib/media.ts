/**
 * Aeroasia-Hydromex optional media manifest.
 *
 * Drop real files into /public/assets/* and flip `enabled: true` here to
 * progressively enhance the site. No code changes required.
 * Missing assets gracefully fall back to engineering schematics / placeholders.
 */

export type MediaAsset = {
  src: string;
  enabled: boolean;
  alt?: string;
  poster?: string;
  caption?: string;
};

export type ProjectAsset = MediaAsset & {
  meta?: string;
};

export const mediaAssets = {
  logo: {
    src: "/assets/logo/aeroasia-logo.png",
    enabled: false,
    alt: "Aeroasia-Hydromex Technologies",
  } as MediaAsset,
  logoWhite: {
    src: "/assets/logo/aeroasia-logo-white.png",
    enabled: false,
    alt: "Aeroasia-Hydromex Technologies",
  } as MediaAsset,

  // Hero: optional background video or photo to replace/augment the schematic.
  // If both are disabled, the SVG treatment-train schematic shows.
  heroImage: {
    src: "/assets/hero/treatment-plant.jpg",
    enabled: false,
    alt: "Aeroasia-installed wastewater treatment plant",
  } as MediaAsset,
  heroVideo: {
    src: "/assets/videos/hero-treatment-loop.mp4",
    enabled: false,
    poster: "/assets/hero/treatment-plant.jpg",
    alt: "Aeroasia treatment system in operation",
  } as MediaAsset,

  // AOP technology
  aopSystem: {
    src: "/assets/technology/aop-system.jpg",
    enabled: false,
    alt: "Aeroasia AOP system installation",
    caption: "AOP system — installation photo",
  } as MediaAsset,
  aopDiagram: {
    src: "/assets/technology/aop-diagram.png",
    enabled: false,
    alt: "Aeroasia Advanced Oxidation Process diagram",
    caption: "Official AOP process diagram",
  } as MediaAsset,
  aopMicrobubble: {
    src: "/assets/technology/microbubble-process.jpg",
    enabled: false,
    alt: "Microbubble contact in AOP train",
    caption: "Microbubble contact close-up",
  } as MediaAsset,
  aopVideo: {
    src: "/assets/videos/aop-process.mp4",
    enabled: false,
    poster: "/assets/technology/aop-system.jpg",
    alt: "AOP process in motion",
  } as MediaAsset,

  // Before / After section
  beforeWater: {
    src: "/assets/technology/before-water.jpg",
    enabled: false,
    alt: "Influent / raw wastewater sample",
    caption: "Influent — raw wastewater",
  } as MediaAsset,
  afterWater: {
    src: "/assets/technology/after-water.jpg",
    enabled: false,
    alt: "Treated effluent sample",
    caption: "Effluent — treated water",
  } as MediaAsset,
  beforeAfterVideo: {
    src: "/assets/videos/before-after.mp4",
    enabled: false,
    poster: "/assets/technology/aop-system.jpg",
    alt: "Treatment process in operation",
  } as MediaAsset,

  // Field / operations photos
  field: [
    {
      src: "/assets/team/field-01.jpg",
      enabled: false,
      alt: "Engineers on site",
      caption: "On-site engineering",
      meta: "Site visit",
    },
    {
      src: "/assets/team/field-02.jpg",
      enabled: false,
      alt: "System inspection",
      caption: "System inspection",
      meta: "Maintenance",
    },
    {
      src: "/assets/team/field-03.jpg",
      enabled: false,
      alt: "Installation in progress",
      caption: "Installation in progress",
      meta: "Build",
    },
    {
      src: "/assets/team/field-04.jpg",
      enabled: false,
      alt: "Preventive maintenance",
      caption: "Preventive maintenance",
      meta: "Service",
    },
    {
      src: "/assets/team/field-05.jpg",
      enabled: false,
      alt: "Control panel",
      caption: "Control panel walkthrough",
      meta: "Operations",
    },
    {
      src: "/assets/team/field-06.jpg",
      enabled: false,
      alt: "STP tank and equipment",
      caption: "STP equipment",
      meta: "Equipment",
    },
  ] as ProjectAsset[],

  // Legacy year-range project photos. Kept for backward compatibility
  // with the homepage projects component pattern; current project
  // portfolio is sourced category-by-category from `lib/projects.ts`.
  projects: {
    "2009 – 2012": {
      src: "/assets/projects/2009-2012-01.jpg",
      enabled: false,
      alt: "Project from 2009–2012",
      caption: "2009 – 2012",
    } as MediaAsset,
    "2013 – 2018": {
      src: "/assets/projects/2013-2018-01.jpg",
      enabled: false,
      alt: "Project from 2013–2018",
      caption: "2013 – 2018",
    } as MediaAsset,
    "2019 – 2021": {
      src: "/assets/projects/2019-2021-01.jpg",
      enabled: false,
      alt: "Project from 2019–2021",
      caption: "2019 – 2021",
    } as MediaAsset,
    "2022 – 2025": {
      src: "/assets/projects/2022-2025-01.jpg",
      enabled: false,
      alt: "Project from 2022–2025",
      caption: "2022 – 2025",
    } as MediaAsset,
  } satisfies Record<string, MediaAsset>,
};

/* ------------------------------------------------------------------ *
 *  Recent Set-ups — videos pulled from Aeroasia's existing public site.
 *  Both files are real Aeroasia material (fabrication + deployment).
 * ------------------------------------------------------------------ */

export type RecentSetupVideo = {
  src: string;
  poster?: string;
  enabled: boolean;
  caption: string;
  type: "field" | "fabrication" | "deployment" | "install";
  meta?: string;
};

export const recentSetupVideos: RecentSetupVideo[] = [
  {
    src: "/assets/extracted/videos/recent-setup-01.mp4",
    poster: "/assets/extracted/videos/recent-setup-01-poster.jpg",
    enabled: true,
    caption: "Fabrication",
    type: "fabrication",
    meta: "Aeroasia field media",
  },
  {
    src: "/assets/extracted/videos/recent-setup-02.mp4",
    poster: "/assets/extracted/videos/recent-setup-02-poster.jpg",
    enabled: true,
    caption: "Deployment",
    type: "deployment",
    meta: "Aeroasia field media",
  },
];

export const hasRecentSetupVideos = (): boolean =>
  recentSetupVideos.some((v) => v.enabled);

/* ------------------------------------------------------------------ *
 *  Section-level "is anything real enabled here?" helpers.
 *  Used by the homepage so optional media sections only appear when
 *  Aeroasia has provided at least one real asset. With zero assets the
 *  site still presents as a complete, production-ready website.
 * ------------------------------------------------------------------ */

const anyEnabled = (...items: MediaAsset[]): boolean =>
  items.some((m) => m?.enabled);

export const hasBeforeAfterMedia = (): boolean =>
  anyEnabled(
    mediaAssets.beforeWater,
    mediaAssets.afterWater,
    mediaAssets.beforeAfterVideo,
  );

export const hasFieldOpsMedia = (): boolean =>
  mediaAssets.field.some((f) => f.enabled);

export const hasAopMedia = (): boolean =>
  anyEnabled(
    mediaAssets.aopSystem,
    mediaAssets.aopDiagram,
    mediaAssets.aopMicrobubble,
    mediaAssets.aopVideo,
  );

export const hasProjectMedia = (): boolean =>
  Object.values(mediaAssets.projects).some((p) => p.enabled);

export const hasHeroMedia = (): boolean =>
  anyEnabled(mediaAssets.heroImage, mediaAssets.heroVideo);
