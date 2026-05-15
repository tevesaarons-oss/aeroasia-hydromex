# Aeroasia-Hydromex media assets

This directory holds optional real-world assets that progressively enhance the website.
The site works fully without any of these files — when an asset is missing or its
`enabled` flag is `false` in [`lib/media.ts`](../../lib/media.ts), the corresponding
component falls back to a premium engineering placeholder or SVG schematic.

## Folder structure

- `logo/` — Official Aeroasia logo
  - `aeroasia-logo.png` — primary mark (color)
  - `aeroasia-logo-white.png` — white variant for dark sections
- `hero/` — Hero imagery
  - `treatment-plant.jpg` — installed STP / treatment facility
  - `water-treatment-system.jpg` — alternate hero photo
- `technology/` — AOP technology
  - `aop-system.jpg` — AOP system installation photo
  - `aop-diagram.png` — Aeroasia's official AOP process diagram
  - `microbubble-process.jpg` — microbubble / ozone contact close-up
  - `before-water.jpg` — influent / raw wastewater sample photo
  - `after-water.jpg` — treated effluent sample photo
- `projects/` — Project portfolio
  - `2009-2012-01.jpg`, `2013-2018-01.jpg`, `2019-2021-01.jpg`, `2022-2025-01.jpg` — one per year group, expandable
- `team/` — Field engineering / operations photos
  - `field-01.jpg` through `field-06.jpg` — engineers on site, inspections, installations, maintenance, control panels, STP tanks
- `videos/` — Background and inline videos (autoplay muted loop)
  - `hero-treatment-loop.mp4`
  - `aop-process.mp4`
  - `before-after.mp4`
- `documents/` — Optional downloadable documents (datasheets, brochures)

## How to enable an asset

1. Drop the file into the correct folder using the filename above.
2. Open [`lib/media.ts`](../../lib/media.ts) and flip `enabled: false` to `enabled: true`
   for the matching entry.
3. The site picks it up on the next build / hot reload.

No code changes required.

## Asset guidance

- Photos: high-resolution (≥ 1600px on long edge), JPG or WebP, real Aeroasia work only — no stock photos.
- Logos: PNG with transparent background, ideally 512px on the long edge.
- Videos: H.264 MP4, ≤ 8 MB if used as a hero loop, 1080p max. Provide a matching JPG poster for fallback rendering.
- Captions/metadata are configured per-asset in `lib/media.ts`.
