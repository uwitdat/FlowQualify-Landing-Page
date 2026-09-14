"use client";

import { useState } from "react";
import { CalendarCheck, ChevronRight, Hammer, MessageCircle, ShieldCheck, Timer, TrendingUp, Wallet } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { PAGE_BACKGROUND } from "../config/constants";
import { StatisticCard, type StatisticCardProps } from "../components/ui/statistic-card";

type Budget = 30 | 50;

type Plan = {
  label: string;       // pill tag
  caveat: string;      // one line under the budget picker
  adsMonthly: string;  // ~30 days of spend
  allIn: string;
  funnel: Array<Pick<StatisticCardProps, "value" | "footerValue"> & { badge: string }>;
};

/**
 * Figures from the contractor Meta ads projections (value = Expected column,
 * footer = Lower column).
 *  - $50/day: the $1,500/mo tier as published.
 *  - $30/day: the minimum. The projections start at $1,000/mo, so these are
 *    that tier scaled to $900/mo and rounded down, with jobs and revenue kept
 *    consistent with ~$27K per job. Deliberately conservative.
 */
const PLANS: Record<Budget, Plan> = {
  30: {
    label: "Minimum",
    caveat: "Our lowest budget. Fewer leads, and results take longer to build while Meta learns your area.",
    adsMonthly: "$900",
    allIn: "$1,400",
    funnel: [
      { value: "13–19", badge: "Start in 2–6 days", footerValue: "13–16" },
      { value: "5–7", badge: "4–6 show up", footerValue: "4–5" },
      { value: "1–3", badge: "30–35% close", footerValue: "1" },
      { value: "$25–55K", badge: "~$27K/job", footerValue: "$15–35K" },
    ],
  },
  50: {
    label: "Recommended",
    caveat: "More chats means Meta finds your best homeowners faster, so bookings build sooner.",
    adsMonthly: "$1,500",
    allIn: "$2,000",
    funnel: [
      { value: "24–31", badge: "Start in 2–6 days", footerValue: "20–26" },
      { value: "9–11", badge: "7–9 show up", footerValue: "6–8" },
      { value: "3–4", badge: "30–35% close", footerValue: "2–3" },
      { value: "$75–115K", badge: "~$27K/job", footerValue: "$36–65K" },
    ],
  },
};

/** Card chrome for the funnel; read left to right, each step is smaller than the last. */
const FUNNEL: Array<Omit<StatisticCardProps, "value" | "footerValue" | "badge">> = [
  { tone: "ink", title: "Homeowner chats", footerLabel: "Slow month", icon: MessageCircle, motif: 0 },
  { tone: "plum", title: "Visits booked", footerLabel: "Slow month", icon: CalendarCheck, motif: 1 },
  { tone: "indigo", title: "Jobs sold", footerLabel: "Slow month", icon: Hammer, motif: 2 },
  { tone: "verdigris", title: "Revenue sold", footerLabel: "Slow month", icon: TrendingUp, motif: 3 },
];

/**
 * The terms behind those numbers, as a second row of cards: light, so the
 * funnel above stays the loudest thing on the section. One sold bathroom
 * clears ~$2.0K–$2.8K profit per the projections, which covers either plan.
 */
const costCard = (plan: Plan): StatisticCardProps => ({
  tone: "indigo",
  variant: "light",
  title: "All-in monthly cost",
  value: plan.allIn,
  badge: { label: `${plan.adsMonthly} ads + $500 FlowQualify` },
  footerLabel: "Usually covered by",
  footerValue: "1 sold bathroom",
  icon: Wallet,
  motif: 0,
});

const TERMS: StatisticCardProps[] = [
  {
    tone: "verdigris",
    variant: "light",
    title: "Shared leads",
    value: "0",
    badge: { label: "100% exclusive" },
    footerLabel: "Every appointment",
    footerValue: "yours alone",
    icon: ShieldCheck,
    motif: 1,
  },
  {
    tone: "plum",
    variant: "light",
    title: "Response time",
    value: "<90s",
    badge: { label: "Nights & weekends" },
    footerLabel: "Typical manual follow-up",
    footerValue: "hours",
    icon: Timer,
    motif: 2,
  },
];

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function PerformanceMetrics() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px",
  });
  const [budget, setBudget] = useState<Budget>(50);
  const plan = PLANS[budget];

  return (
    <>
      <style>{`
        .pm-section {
          background: ${PAGE_BACKGROUND};
          padding: 96px 24px;
        }
        .pm-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 48px;
        }
        .pm-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.65s ${EASE}, transform 0.65s ${EASE};
        }
        .pm-section.pm-on .pm-reveal {
          opacity: 1;
          transform: translateY(0);
        }
        .pm-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(24, 119, 242, 0.08);
          border: 1px solid rgba(24, 119, 242, 0.22);
          border-radius: 999px;
          padding: 7px 14px 7px 10px;
          margin-bottom: 18px;
          font-size: 12px;
          font-weight: 700;
          color: #1877F2;
          line-height: 1;
        }
        .pm-title {
          font-size: clamp(32px, 4.4vw, 50px);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .pm-title em {
          font-style: normal;
          color: rgb(79, 70, 229);
        }
        .pm-sub {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.65;
          margin: 0 auto;
          max-width: 620px;
        }

        /* budget picker */
        .pm-picker {
          display: inline-flex;
          gap: 4px;
          margin-top: 26px;
          padding: 4px;
          background: #ffffff;
          border: 1px solid rgb(229, 231, 235);
          border-radius: 14px;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 10px 24px -16px rgba(49, 46, 129, 0.25);
        }
        .pm-opt {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
          min-width: 150px;
          min-height: 52px;
          padding: 7px 18px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          font: inherit;
          color: #334155;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
        }
        .pm-opt:hover { background: #F1F5F9; }
        .pm-opt:active { background: #E2E8F0; }
        .pm-opt:focus-visible { outline: 2px solid rgb(79, 70, 229); outline-offset: 2px; }
        .pm-opt[aria-checked="true"] {
          background: rgb(79, 70, 229);
          color: #ffffff;
          box-shadow: 0 8px 18px -8px rgba(79, 70, 229, 0.7);
        }
        .pm-opt-price { font-size: 17px; font-weight: 800; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
        .pm-opt-tag { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; opacity: 0.7; }
        .pm-opt[aria-checked="true"] .pm-opt-tag { opacity: 0.85; }
        .pm-caveat {
          min-height: 44px;
          max-width: 520px;
          margin: 12px auto 0;
          font-size: 14px;
          line-height: 1.55;
          color: #64748B;
        }
        .pm-caveat b { color: #0F172A; font-weight: 700; }

        .pm-swap { animation: pm-swap 0.4s ${EASE} both; }
        @keyframes pm-swap { from { opacity: 0.35; transform: translateY(6px); } to { opacity: 1; transform: none; } }

        .pm-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          max-width: 1160px;
          margin: 0 auto;
        }

        .pm-step { position: relative; }
        .pm-step-arrow {
          position: absolute;
          top: 50%;
          right: -18px;
          z-index: 2;
          display: grid;
          place-items: center;
          width: 12px;
          height: 24px;
          margin-top: -12px;
          color: #94A3B8;
        }

        .pm-terms {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          max-width: 1160px;
          margin: 24px auto 0;
        }

        .pm-note {
          max-width: 720px;
          margin: 20px auto 0;
          text-align: center;
          font-size: 12px;
          line-height: 1.6;
          color: #94A3B8;
        }

        @media (max-width: 1079px) {
          .pm-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 720px; }
          .pm-step-arrow { display: none; }
          .pm-terms { max-width: 720px; gap: 16px; }
        }
        @media (max-width: 640px) {
          .pm-section { padding: 64px 16px; }
          .pm-header { margin-bottom: 36px; }
          .pm-sub { font-size: 15px; }
          .pm-picker { display: flex; width: 100%; max-width: 360px; margin: 22px auto 0; }
          .pm-opt { flex: 1; min-width: 0; }
          .pm-caveat { font-size: 13.5px; min-height: 64px; }
          .pm-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          /* cost card full width (its badge is long), the other two side by side */
          .pm-terms { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 12px; }
          .pm-terms > :first-child { grid-column: 1 / -1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pm-reveal, .pm-opt { transition-duration: 0.01ms; }
          .pm-swap { animation: none; }
        }
      `}</style>

      <section
        id="results"
        className={`pm-section${isIntersecting ? " pm-on" : ""}`}
        ref={ref}
      >
        <div className="pm-header pm-reveal">
          <div className="pm-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Powered by Meta &amp; Instagram Ads
          </div>
          <h2 className="pm-title">
            What <em>${budget} a day</em> in ads can bring in
          </h2>
          <p className="pm-sub">
            A typical month for a kitchen and bath remodeler. Pick a daily ad budget to see the numbers.
          </p>

          <div className="pm-picker" role="radiogroup" aria-label="Daily ad budget">
            {([30, 50] as Budget[]).map((b) => (
              <button
                key={b}
                type="button"
                role="radio"
                aria-checked={budget === b}
                className="pm-opt"
                onClick={() => setBudget(b)}
                onKeyDown={(e) => {
                  if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
                    e.preventDefault();
                    const next: Budget = b === 30 ? 50 : 30;
                    setBudget(next);
                    (e.currentTarget.parentElement?.querySelector(`[data-b="${next}"]`) as HTMLElement | null)?.focus();
                  }
                }}
                tabIndex={budget === b ? 0 : -1}
                data-b={b}
              >
                <span className="pm-opt-price">${b}/day</span>
                <span className="pm-opt-tag">{PLANS[b].label}</span>
              </button>
            ))}
          </div>
          <p className="pm-caveat" aria-live="polite">
            <b>{plan.adsMonthly}/mo in ads.</b> {plan.caveat}
          </p>
        </div>

        <div className="pm-grid">
          {FUNNEL.map((card, i) => (
            <div
              key={card.title}
              className="pm-step pm-reveal"
              style={{ transitionDelay: isIntersecting ? `${120 + i * 80}ms` : "0ms" }}
            >
              <div key={budget} className="pm-swap" style={{ height: "100%", animationDelay: `${i * 40}ms` }}>
                <StatisticCard
                  {...card}
                  value={plan.funnel[i].value}
                  badge={{ label: plan.funnel[i].badge }}
                  footerValue={plan.funnel[i].footerValue}
                />
              </div>
              {i < FUNNEL.length - 1 && (
                <span className="pm-step-arrow" aria-hidden="true">
                  <ChevronRight size={16} strokeWidth={2.5} />
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="pm-terms">
          {[costCard(plan), ...TERMS].map((term, i) => (
            <div
              key={term.title}
              className="pm-reveal"
              style={{ transitionDelay: isIntersecting ? `${440 + i * 80}ms` : "0ms" }}
            >
              <StatisticCard {...term} />
            </div>
          ))}
        </div>

        <p className="pm-note pm-reveal" style={{ transitionDelay: isIntersecting ? "520ms" : "0ms" }}>
          $30 a day is our minimum ad budget. Estimates from industry benchmarks, not a guarantee. Month one is realistic; months two and three usually improve. Assumes a 30–35% close rate and a mix of kitchen ($35K–$55K) and bath ($15K–$28K) jobs. Results depend on your area, season, and sales process.
        </p>
      </section>
    </>
  );
}
