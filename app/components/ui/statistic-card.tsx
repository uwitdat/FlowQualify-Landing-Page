"use client";

import * as React from "react";
import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Solid card grounds. Ink matches the platform section, indigo is the brand
 * accent, plum is the brand's button fill, verdigris is the deep teal the
 * "What we do" cards already use. `sh` tints the card's own shadow.
 */
export const STAT_TONES = {
  ink:       { bg: "#0E1220", rgb: "14,18,32",    sh: "14,18,32" },
  plum:      { bg: "#93279A", rgb: "147,39,154",  sh: "110,24,116" },
  indigo:    { bg: "#4F46E5", rgb: "79,70,229",   sh: "49,46,129" },
  verdigris: { bg: "#0B7A70", rgb: "11,122,112",  sh: "8,78,72" },
} as const;

export type StatTone = keyof typeof STAT_TONES;

export interface StatisticCardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  tone: StatTone;
  /** `solid` fills the card with the tone; `light` is a white card with the tone as its accent. */
  variant?: "solid" | "light";
  title: string;
  value: string;
  /** Small pill beside the value. `trend` adds an up/down arrow. */
  badge?: { label: string; trend?: "up" | "down" };
  footerLabel: string;
  footerValue: string;
  icon: LucideIcon;
  /** Which translucent shape cluster sits in the top-right corner (0–3). */
  motif?: number;
}

const StatisticCard = React.forwardRef<HTMLElement, StatisticCardProps>(
  ({ className, tone, variant = "solid", title, value, badge, footerLabel, footerValue, icon: Icon, motif = 0, style, ...props }, ref) => {
    const t = STAT_TONES[tone];
    const light = variant === "light";
    const id = React.useId().replace(/:/g, "");

    return (
      <article
        ref={ref}
        className={cn(
          "@container relative flex h-full flex-col overflow-hidden rounded-xl border",
          light ? "border-[#E5E7EB] bg-white text-[#0F172A]" : "border-white/10 text-white",
          className
        )}
        style={{
          ...(light
            ? { boxShadow: `0 1px 2px rgba(15,23,42,0.04), 0 14px 30px -18px rgba(${t.sh},0.32)` }
            : {
                background: t.bg,
                boxShadow: `0 1px 2px rgba(${t.sh},0.14), 0 10px 22px -10px rgba(${t.sh},0.45), 0 28px 48px -28px rgba(${t.sh},0.5)`,
              }),
          ...style,
        }}
        {...props}
      >
        {light && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px]" style={{ background: t.bg }} />}
        <Motif index={motif} id={id} color={light ? t.bg : "#fff"} faint={light} />

        {/* narrow cards (two-up on phones) tighten padding and type via the container query */}
        <header className="relative z-10 flex min-h-14 items-center justify-between gap-2.5 px-5 @max-[230px]:min-h-11 @max-[230px]:px-3.5">
          <h3 className={cn("text-sm font-medium leading-tight @max-[230px]:text-[13px]", light ? "text-[#475569]" : "text-white/90")}>{title}</h3>
          <Icon aria-hidden="true" strokeWidth={2} className={cn("size-4 shrink-0", !light && "text-white/70")} style={light ? { color: t.bg } : undefined} />
        </header>

        <div className="relative z-10 flex grow flex-col justify-end gap-2.5 p-5 @max-[230px]:gap-2 @max-[230px]:px-3.5 @max-[230px]:pb-3.5 @max-[230px]:pt-3">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <span className="text-[28px] font-semibold leading-8 tracking-[-0.02em] tabular-nums @max-[230px]:text-[23px] @max-[230px]:leading-7">{value}</span>
            {badge && (
              <span
                className={cn(
                  "inline-flex h-6 items-center gap-1 whitespace-nowrap rounded-md px-[0.45rem] text-xs font-semibold @max-[230px]:h-5 @max-[230px]:text-[10.5px] [&_svg]:size-3.5",
                  !light && "bg-white/20"
                )}
                style={light ? { background: `rgba(${t.rgb},0.09)`, color: t.bg } : undefined}
              >
                {badge.trend === "up" && <ArrowUp aria-hidden="true" />}
                {badge.trend === "down" && <ArrowDown aria-hidden="true" />}
                {badge.label}
              </span>
            )}
          </div>
          <p
            className={cn(
              "mt-2 border-t pt-2.5 text-xs @max-[230px]:mt-1 @max-[230px]:pt-2 @max-[230px]:text-[11px]",
              light ? "border-[#EEF0F5] text-[#64748B]" : "border-white/20 text-white/80"
            )}
          >
            {footerLabel}: <span className={cn("font-medium", light ? "text-[#0F172A]" : "text-white")}>{footerValue}</span>
          </p>
        </div>
      </article>
    );
  }
);
StatisticCard.displayName = "StatisticCard";

/* ── corner motifs ─────────────────────────────────────────────────────────
   Soft shapes bled off the top-right corner, one cluster per card. White on
   solid cards; the accent colour, pulled back, on light ones.                */

function Motif({ index, id, color, faint }: { index: number; id: string; color: string; faint: boolean }) {
  const base = cn("pointer-events-none absolute right-0 top-0 z-0", faint && "opacity-70");
  const style = { color };
  switch (index % 4) {
    case 1:
      return (
        <svg aria-hidden="true" className={cn(base, "size-48")} viewBox="0 0 200 200" fill="none" style={style}>
          <defs>
            <filter id={`${id}b`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>
          <ellipse cx="170" cy="60" rx="40" ry="18" fill="currentColor" fillOpacity="0.13" filter={`url(#${id}b)`} />
          <rect x="120" y="20" width="60" height="20" rx="8" fill="currentColor" fillOpacity="0.10" />
          <polygon points="150,0 200,0 200,50" fill="currentColor" fillOpacity="0.07" />
          <circle cx="180" cy="100" r="14" fill="currentColor" fillOpacity="0.16" />
        </svg>
      );
    case 2:
      return (
        <svg aria-hidden="true" className={cn(base, "size-48")} viewBox="0 0 200 200" fill="none" style={style}>
          <defs>
            <filter id={`${id}b`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>
          <rect x="120" y="0" width="70" height="70" rx="35" fill="currentColor" fillOpacity="0.09" filter={`url(#${id}b)`} />
          <ellipse cx="170" cy="80" rx="28" ry="12" fill="currentColor" fillOpacity="0.12" />
          <polygon points="200,0 200,60 140,0" fill="currentColor" fillOpacity="0.07" />
          <circle cx="150" cy="30" r="10" fill="currentColor" fillOpacity="0.15" />
        </svg>
      );
    case 3:
      return (
        <svg aria-hidden="true" className={cn(base, "size-48")} viewBox="0 0 200 200" fill="none" style={style}>
          <defs>
            <filter id={`${id}b`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="16" />
            </filter>
          </defs>
          <polygon points="200,0 200,100 100,0" fill="currentColor" fillOpacity="0.09" />
          <ellipse cx="170" cy="40" rx="30" ry="18" fill="currentColor" fillOpacity="0.13" filter={`url(#${id}b)`} />
          <rect x="140" y="60" width="40" height="18" rx="8" fill="currentColor" fillOpacity="0.10" />
          <circle cx="150" cy="30" r="14" fill="currentColor" fillOpacity="0.18" />
          <line x1="120" y1="0" x2="200" y2="80" stroke="currentColor" strokeOpacity="0.08" strokeWidth="6" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" className={cn(base, "h-full w-2/3 opacity-60")} viewBox="0 0 300 200" fill="none" style={style}>
          <circle cx="220" cy="100" r="90" fill="currentColor" fillOpacity="0.08" />
          <circle cx="260" cy="60" r="60" fill="currentColor" fillOpacity="0.10" />
          <circle cx="200" cy="160" r="50" fill="currentColor" fillOpacity="0.07" />
          <circle cx="270" cy="150" r="30" fill="currentColor" fillOpacity="0.12" />
        </svg>
      );
  }
}

export { StatisticCard };
