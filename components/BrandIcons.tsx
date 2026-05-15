import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "fill" | "viewBox">;

/**
 * Minimal monochrome brand glyphs. lucide-react removed third-party brand
 * icons, so we ship our own. All use `currentColor` so they inherit text
 * color and pair with the existing cyan/ice palette.
 */

export function FacebookIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H17V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.1H8v3h2.5V21h3z" />
    </svg>
  );
}

export function MessengerIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.145 2 11.27c0 2.92 1.466 5.527 3.756 7.218V22l3.435-1.886c.916.254 1.887.39 2.81.39 5.523 0 10-4.145 10-9.234C22 6.145 17.523 2 12 2zm.998 12.421l-2.55-2.715-4.978 2.715 5.475-5.808 2.612 2.715 4.916-2.715-5.475 5.808z" />
    </svg>
  );
}

export function WhatsAppIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.762-1.653-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 2.003a9.996 9.996 0 00-8.521 15.244L2 22l4.91-1.413A9.998 9.998 0 1012.04 2.003z" />
    </svg>
  );
}
