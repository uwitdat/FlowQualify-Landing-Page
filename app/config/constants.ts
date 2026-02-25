export const COMPANY_NAME = "FlowQualify";
export const COMPANY_NAME_SHORT = "FlowQualify";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://flowqualify.app";

export const META_DESCRIPTION =
  "Qualified leads. Closed deals. FlowQualify runs Meta and Instagram ads to bring in leads, then qualifies them 24/7 with AI—scoring, image analysis, and automated booking so only the right appointments hit your calendar.";

/** For solid button bg; meets WCAG AA contrast with white. */
export const BUTTON_PRIMARY = "rgb(115, 45, 115)";
export const BUTTON_PRIMARY_HOVER = "rgb(95, 35, 95)";

/** Accent colors for icons and highlights—use by index: ACCENT_COLORS[i % ACCENT_COLORS.length] */
export const ACCENT_COLORS = [
  { main: "rgb(232,138,232)", muted: "rgba(232,138,232,0.2)" }, // pink (primary)
  { main: "rgb(34,211,238)", muted: "rgba(34,211,238,0.2)" }, // cyan
  { main: "rgb(251,191,36)", muted: "rgba(251,191,36,0.2)" }, // amber
  { main: "rgb(52,211,153)", muted: "rgba(52,211,153,0.2)" }, // emerald
  { main: "rgb(96,165,250)", muted: "rgba(96,165,250,0.2)" }, // blue
  { main: "rgb(167,139,250)", muted: "rgba(167,139,250,0.2)" }, // violet
] as const;
