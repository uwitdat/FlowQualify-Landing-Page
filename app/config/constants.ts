export const COMPANY_NAME = "FlowQualify";
export const COMPANY_NAME_SHORT = "FlowQualify";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://flowqualify.app";

export const META_DESCRIPTION =
  "Qualified leads. Closed deals. FlowQualify runs Meta and Instagram ads to bring in leads, then qualifies them 24/7 with AI—scoring, image analysis, and automated booking so only the right appointments hit your calendar.";

/** Page canvas — cool gray (light mode default). */
export const PAGE_BACKGROUND = "#f3f4f6";

/** White cards, sidebars, floating panels. */
export const CARD_SURFACE = "#ffffff";

/** Primary text — gray-900. */
export const FOREGROUND = "#111827";

/** Secondary / muted body text. */
export const TEXT_SECONDARY = "#6b7280";

/** Primary accent — deep indigo (light); white text on solid buttons. */
export const BUTTON_PRIMARY = "rgb(79, 70, 229)";
export const BUTTON_PRIMARY_HOVER = "rgb(67, 56, 202)";

/** Dark mode accent — brighter indigo (use with `.dark` in CSS). */
export const DARK_BUTTON_PRIMARY = "rgb(99, 102, 241)";
export const DARK_BUTTON_PRIMARY_HOVER = "rgb(129, 140, 248)";

/** Secondary accent — teal (user chat bubble, success-adjacent). */
export const ACCENT_SECONDARY = "rgb(13, 148, 136)";

/** Semantic */
export const SEMANTIC_SUCCESS = "rgb(22, 163, 74)";
export const SEMANTIC_DESTRUCTIVE = "rgb(220, 38, 38)";

/**
 * Section band behind curved / full-width blocks (matches page canvas on light).
 * Prefer `PAGE_BACKGROUND` in new code.
 */
export const HERO_PANEL_BG = PAGE_BACKGROUND;

/** Demo accent — in-page app mockups (benchmarks) only. */
export const DEMO_ACCENT = "rgb(194, 89, 194)";
export const DEMO_ACCENT_HOVER = "rgb(170, 70, 170)";

/** Single accent for consistent branding; muted variant for backgrounds. */
export const ACCENT_COLORS = [
  { main: "rgb(79, 70, 229)", muted: "rgba(79, 70, 229, 0.2)" },
] as const;
