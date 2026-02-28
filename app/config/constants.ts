export const COMPANY_NAME = "FlowQualify";
export const COMPANY_NAME_SHORT = "FlowQualify";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://flowqualify.app";

export const META_DESCRIPTION =
  "Qualified leads. Closed deals. FlowQualify runs Meta and Instagram ads to bring in leads, then qualifies them 24/7 with AI—scoring, image analysis, and automated booking so only the right appointments hit your calendar.";

/** Primary accent — amber; masculine, contractor-friendly, distinct from Meta blue. */
export const BUTTON_PRIMARY = "rgb(180, 83, 9)";
export const BUTTON_PRIMARY_HOVER = "rgb(154, 52, 18)";

/** Secondary accent — teal (matches user chat bubble); variety, success. */
export const ACCENT_SECONDARY = "rgb(13, 148, 136)";

/** Hero right panel — dark slate (not blue). */
export const HERO_PANEL_BG = "rgb(30, 41, 59)";

/** Demo accent — in-page app mockups (benchmarks) only. */
export const DEMO_ACCENT = "rgb(194, 89, 194)";
export const DEMO_ACCENT_HOVER = "rgb(170, 70, 170)";

/** Single accent for consistent branding; muted variant for backgrounds. */
export const ACCENT_COLORS = [
  { main: "rgb(180, 83, 9)", muted: "rgba(180, 83, 9, 0.2)" },
] as const;
