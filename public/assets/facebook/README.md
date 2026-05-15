# Facebook marketing assets

Source: https://www.facebook.com/AHydromexSTP
Page: A. Hydromex STP & AOP Wastewater Solutions PH

Manually save assets from the Facebook page here, then enable them in
`lib/facebookMedia.ts`. The site renders cleanly with zero assets enabled —
the marketing section falls back to a text-only call to follow the page.

## Folders

- `branding/` — profile photo, cover photo, page logo variants
- `posts/` — screenshots or downloaded media from individual posts
- `photos/` — recent set-up / system / equipment photos
- `videos/` — promotional clips, site footage
- `contact/` — contact cards, business info graphics

## Naming

Use kebab-case + a date prefix where useful, e.g.:

- `branding/profile-2025.png`
- `posts/2025-03-stp-install-hospital.jpg`
- `videos/2025-03-aop-fabrication.mp4`

Then add the entry to `FACEBOOK_MEDIA` in `lib/facebookMedia.ts` with
`enabled: true` and a recommended placement.
