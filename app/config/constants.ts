export const COMPANY_NAME = "FlowQualify";
export const COMPANY_NAME_SHORT = "FlowQualify";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://flowqualify.app";

export const META_DESCRIPTION =
  "Never miss a qualified lead again. FlowQualify automates your entire lead qualification process with AI that engages leads 24/7 via SMS, email, Facebook, and Instagram. Intelligent lead scoring, image analysis, and automated booking.";

/** For solid button bg; meets WCAG AA contrast with white. */
export const BUTTON_PRIMARY = "rgb(115, 45, 115)";
export const BUTTON_PRIMARY_HOVER = "rgb(95, 35, 95)";

/** Accent colors for icons and highlights—use by index: ACCENT_COLORS[i % ACCENT_COLORS.length] */
export const ACCENT_COLORS = [
  { main: "rgb(194,89,194)", muted: "rgba(194,89,194,0.2)" }, // pink (primary)
  { main: "rgb(34,211,238)", muted: "rgba(34,211,238,0.2)" }, // cyan
  { main: "rgb(251,191,36)", muted: "rgba(251,191,36,0.2)" }, // amber
  { main: "rgb(52,211,153)", muted: "rgba(52,211,153,0.2)" }, // emerald
  { main: "rgb(96,165,250)", muted: "rgba(96,165,250,0.2)" }, // blue
  { main: "rgb(167,139,250)", muted: "rgba(167,139,250,0.2)" }, // violet
] as const;
