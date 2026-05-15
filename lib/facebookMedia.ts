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
 * Empty by design. Add entries as the client supplies Facebook page
 * materials. Until at least one row is `enabled: true`, the
 * "Active Project Updates & Set-ups" section renders the text-only
 * fallback that points users to the live Facebook page.
 */
export const FACEBOOK_MEDIA: FacebookAsset[] = [];

export function enabledFacebookMedia(): FacebookAsset[] {
  return FACEBOOK_MEDIA.filter((a) => a.enabled);
}

export function facebookMediaFor(
  placement: FacebookPlacement,
): FacebookAsset[] {
  return enabledFacebookMedia().filter((a) => a.placement === placement);
}
