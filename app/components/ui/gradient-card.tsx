"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Tonal grounds for the cards. Deliberately muted, plaster-like tints rather
 * than stock pastels — they read as paint chips, which suits the trade.
 * `accent` also drives the decorative motif, which is drawn in currentColor.
 */
export const TONES = {
  ember: {
    from: "#FDF2E8", to: "#F6DBC2",
    ink: "#6B2E11", body: "#7A4526", accent: "#C2410C",
    edge: "rgba(194,65,12,0.18)",
    sh1: "rgba(124,45,18,0.06)", sh2: "rgba(124,45,18,0.30)",
  },
  verdigris: {
    from: "#EAF6F3", to: "#CBE6E0",
    ink: "#0F4B47", body: "#2F5F5A", accent: "#0F766E",
    edge: "rgba(15,118,110,0.18)",
    sh1: "rgba(19,78,74,0.06)", sh2: "rgba(19,78,74,0.30)",
  },
  indigo: {
    from: "#EFEEFD", to: "#D8D5F7",
    ink: "#2B2878", body: "#4A4788", accent: "#4F46E5",
    edge: "rgba(79,70,229,0.18)",
    sh1: "rgba(49,46,129,0.06)", sh2: "rgba(49,46,129,0.30)",
  },
  moss: {
    from: "#EDF6EF", to: "#D0E9D7",
    ink: "#12492A", body: "#345E44", accent: "#15803D",
    edge: "rgba(21,128,61,0.18)",
    sh1: "rgba(20,83,45,0.06)", sh2: "rgba(20,83,45,0.30)",
  },
} as const;

export type Tone = keyof typeof TONES;

export interface GradientCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  tone: Tone;
  badgeText: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  /** Decorative motif, bled off the bottom-right corner. */
  graphic: React.ReactNode;
  /** Terminal card — the CTA becomes a solid button so the eye lands here. */
  emphasis?: boolean;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  ({ className, tone, badgeText, title, description, ctaText, ctaHref, graphic, emphasis = false, ...props }, ref) => {
    const t = TONES[tone];
    const vars = {
      "--gc-from": t.from,
      "--gc-to": t.to,
      "--gc-ink": t.ink,
      "--gc-body": t.body,
      "--gc-accent": t.accent,
      "--gc-edge": t.edge,
      "--gc-sh1": t.sh1,
      "--gc-sh2": t.sh2,
    } as React.CSSProperties;

    return (
      <div ref={ref} style={vars} className={cn("group relative h-full", className)} {...props}>
        <article
          className={cn(
            "relative flex h-full w-full flex-col overflow-hidden rounded-[20px]",
            "border border-[var(--gc-edge)] p-7 sm:p-8",
            "bg-[linear-gradient(145deg,var(--gc-from)_0%,var(--gc-to)_100%)]",
            "shadow-[0_1px_2px_var(--gc-sh1),0_14px_32px_-16px_var(--gc-sh2)]",
            "transition-[transform,box-shadow] duration-300 ease-out will-change-transform",
            "group-hover:-translate-y-1 group-hover:shadow-[0_2px_4px_var(--gc-sh1),0_26px_48px_-18px_var(--gc-sh2)]",
            "motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
          )}
        >
          <div
            aria-hidden="true"
            className={cn(
              // single-column cards are narrow, so the motif retreats into the corner
              // beside the CTA (clear of the description) until the grid splits
              "pointer-events-none absolute -bottom-[9%] -right-[7%] w-[30%] max-w-[118px] opacity-30",
              "min-[821px]:-bottom-[14%] min-[821px]:-right-[9%] min-[821px]:w-[58%] min-[821px]:max-w-[238px] min-[821px]:opacity-[0.58]",
              "text-[color:var(--gc-accent)]",
              "transition-transform duration-500 ease-out",
              "group-hover:scale-[1.09] group-hover:rotate-[3deg]",
              "motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0"
            )}
          >
            {graphic}
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/55 px-3 py-1 text-[12.5px] font-semibold text-[color:var(--gc-ink)] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--gc-accent)]" />
              {badgeText}
            </span>

            <div className="flex-grow">
              <h3 className="max-w-[19ch] text-[clamp(20px,2.05vw,25px)] font-extrabold leading-[1.18] tracking-[-0.025em] text-[color:var(--gc-ink)]">
                {title}
              </h3>
              <p className="mt-2.5 max-w-[30ch] text-[14.5px] leading-[1.65] text-[color:var(--gc-body)]">
                {description}
              </p>
            </div>

            <a
              href={ctaHref}
              className={cn(
                "group/cta mt-7 inline-flex w-fit items-center gap-2 rounded-full text-[14px] font-bold",
                "transition-[background-color,color,box-shadow] duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--gc-accent)]",
                emphasis
                  ? "bg-[var(--gc-accent)] px-4 py-2.5 text-white shadow-[0_8px_18px_-8px_var(--gc-sh2)] hover:brightness-110 active:brightness-95"
                  : "text-[color:var(--gc-accent)] hover:opacity-80 active:opacity-100"
              )}
            >
              {ctaText}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0"
              >
                <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    );
  }
);
GradientCard.displayName = "GradientCard";

/* ── decorative motifs ───────────────────────────────────────────────────────
   One vocabulary — rounded plates, a ring, a check — in three tonal steps of
   the card's accent, so the four read as a family. Inline SVG keeps them
   dependency-free, weightless, and recolourable per tone.                    */

export const AdsGraphic = (
  <svg viewBox="0 0 220 220" fill="currentColor" role="presentation">
    <rect x="18" y="62" width="132" height="98" rx="16" opacity="0.15" transform="rotate(-10 84 111)" />
    <rect x="40" y="50" width="132" height="98" rx="16" opacity="0.3" transform="rotate(-4 106 99)" />
    <rect x="60" y="42" width="132" height="98" rx="16" opacity="0.72" />
    <circle cx="94" cy="76" r="12" fill="#fff" opacity="0.72" />
    <rect x="78" y="102" width="96" height="10" rx="5" fill="#fff" opacity="0.55" />
    <rect x="78" y="120" width="62" height="10" rx="5" fill="#fff" opacity="0.34" />
  </svg>
);

export const ScreenGraphic = (
  <svg viewBox="0 0 220 220" fill="currentColor" role="presentation">
    <rect x="24" y="34" width="114" height="74" rx="16" opacity="0.22" />
    <path d="M52 108l20 20v-20z" opacity="0.22" />
    <rect x="44" y="60" width="72" height="9" rx="4.5" fill="#fff" opacity="0.5" />
    <rect x="44" y="79" width="46" height="9" rx="4.5" fill="#fff" opacity="0.32" />
    <rect x="66" y="94" width="108" height="74" rx="16" opacity="0.74" />
    <path d="M150 168l-20 22v-22z" opacity="0.74" />
    <path
      d="M90 129l16 16 28-30"
      fill="none"
      stroke="#fff"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.88"
    />
  </svg>
);

export const BriefGraphic = (
  <svg viewBox="0 0 220 220" fill="currentColor" role="presentation">
    <rect x="26" y="30" width="122" height="158" rx="16" opacity="0.2" transform="rotate(-7 87 109)" />
    <path d="M60 32h72l32 32v120a14 14 0 01-14 14H60a14 14 0 01-14-14V46a14 14 0 0114-14z" opacity="0.74" />
    <path d="M132 32l32 32h-32z" fill="#fff" opacity="0.46" />
    <rect x="64" y="86" width="74" height="10" rx="5" fill="#fff" opacity="0.55" />
    <rect x="64" y="107" width="54" height="10" rx="5" fill="#fff" opacity="0.36" />
    <circle cx="150" cy="152" r="32" fill="#fff" opacity="0.3" />
    <path
      d="M150 124a28 28 0 11-22 45"
      fill="none"
      stroke="#fff"
      strokeWidth="11"
      strokeLinecap="round"
      opacity="0.92"
    />
  </svg>
);

export const PipelineGraphic = (
  <svg viewBox="0 0 220 220" fill="currentColor" role="presentation">
    <rect x="22" y="48" width="170" height="134" rx="18" opacity="0.2" />
    <rect x="48" y="130" width="32" height="32" rx="10" opacity="0.44" />
    <rect x="94" y="100" width="32" height="62" rx="10" opacity="0.62" />
    <rect x="140" y="68" width="32" height="94" rx="10" opacity="0.8" />
  </svg>
);

export { GradientCard };
