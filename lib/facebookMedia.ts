/**
 * Manifest of media saved from the active Facebook business page:
 *
 *   https://www.facebook.com/AHydromexSTP
 *   A. Hydromex STP & AOP Wastewater Solutions PH
 *
 * Facebook blocks programmatic media extraction for unauthenticated
 * requests, so assets are saved manually under
 * `public/assets/facebook/...` and registered here. The marketing
 * section reads this manifest; entries with `enabled: false` are
 * hidden, and an empty manifest renders a clean text-only fallback.
 */

export type FacebookAssetType =
  | "photo"
  | "video"
  | "post-screenshot"
  | "graphic"
  | "branding";

/** Where each asset is best surfaced on the site. */
export type FacebookPlacement =
  | "marketing-section-featured"
  | "marketing-section-supporting"
  | "marketing-section-proof"
  | "social-badge"
  | "footer-strip"
  | "contact-card";

export type FacebookAsset = {
  /** Stable id, also used as React key. */
  id: string;
  /** What is in the asset. */
  type: FacebookAssetType;
  /** Local path under /public, e.g. /assets/facebook/photos/foo.jpg. */
  src: string;
  /** Optional poster image for videos. */
  poster?: string;
  /** Optional alt/caption (verbatim from the source post if available). */
  caption?: string;
  /** Original Facebook post or photo URL the asset was saved from. */
  sourceUrl?: string;
  /** Where this asset should be surfaced. */
  placement: FacebookPlacement;
  /** Toggle without deleting the row. */
  enabled: boolean;
};

/**
 * Curated selection of assets saved from the active Facebook page.
 * Only the strongest visuals are enabled; the section is meant to feel
 * premium and engineering-focused, not like a Facebook dump. Other
 * assets dropped into `public/assets/facebook/` can be added below
 * with `enabled: true` once they've been reviewed.
 */
export const FACEBOOK_MEDIA: FacebookAsset[] = [
  {
    id: "fb-profile-badge",
    type: "branding",
    src: "/assets/facebook/branding/fb-profile.jpg",
    caption: "A. Hydromex public Facebook update",
    sourceUrl: "https://www.facebook.com/AHydromexSTP",
    placement: "social-badge",
    enabled: true,
  },
  {
    id: "clean-systems-3",
    type: "photo",
    src: "/assets/facebook/photos/clean-systems-3.jpg",
    caption: "Recent treatment system set-up",
    sourceUrl: "https://www.facebook.com/AHydromexSTP",
    placement: "marketing-section-featured",
    enabled: true,
  },
  {
    id: "clean-systems-2",
    type: "photo",
    src: "/assets/facebook/photos/clean-systems-2.jpg",
    caption: "Recent treatment system set-up",
    sourceUrl: "https://www.facebook.com/AHydromexSTP",
    placement: "marketing-section-supporting",
    enabled: true,
  },
  {
    id: "site-inspection-3",
    type: "post-screenshot",
    src: "/assets/facebook/posts/site-inspection-3.jpg",
    caption: "Field inspection and system review",
    sourceUrl: "https://www.facebook.com/AHydromexSTP",
    placement: "marketing-section-supporting",
    enabled: true,
  },
  {
    id: "effluent-samples-1",
    type: "photo",
    src: "/assets/facebook/proof/effluent-samples-1.jpg",
    caption: "Effluent sample material",
    sourceUrl: "https://www.facebook.com/AHydromexSTP",
    placement: "marketing-section-proof",
    enabled: true,
  },
  {
    id: "class-a-compliance-01",
    type: "graphic",
    src: "/assets/facebook/proof/class-a-compliance-01.jpg",
    caption: "Compliance-related marketing material",
    sourceUrl: "https://www.facebook.com/AHydromexSTP",
    placement: "marketing-section-proof",
    enabled: true,
  },
];

export function enabledFacebookMedia(): FacebookAsset[] {
  return FACEBOOK_MEDIA.filter((a) => a.enabled);
}

export function facebookMediaFor(
  placement: FacebookPlacement,
): FacebookAsset[] {
  return enabledFacebookMedia().filter((a) => a.placement === placement);
}
