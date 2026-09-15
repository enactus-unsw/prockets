/**
 * Warm neutral ramp, single hue family (~23-37deg) so the darks belong to the
 * same palette as the mids. Mirrored as --p-* custom properties in globals.css
 * for the plain-CSS classes; keep the two in sync.
 *
 * Plain (non "use client") module so Server Components can import these
 * constants directly — importing them from a "use client" file instead
 * resolves to an empty client-reference placeholder during server rendering.
 */
export const colors = {
  50: "#faf8f5",
  100: "#e8e2d8",
  200: "#c8b4a0",
  300: "#a89080",
  400: "#8a7060",
  500: "#6b5545",
  600: "#4a3c31",
  700: "#332e28",
  800: "#23201c",
  900: "#171512",
};

/** Logo amber. Used sparingly: primary CTA, active nav, rules, hero glow. */
export const accent = {
  DEFAULT: "#fbc74c",
  hi: "#fdd97f",
  lo: "#e0a92f",
  /** Near-black for text sitting on a filled accent surface (11.4:1). */
  ink: "#1b1712",
};

/** rgba() helper for the translucent washes the hero leans on. */
export function alpha(hex: string, a: number) {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}
