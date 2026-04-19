"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { PAGE_BACKGROUND } from "../config/constants";

const ICON_COLORS = {
  orange: "#B45309",
  teal: "#0D9488",
  blue: "#2563EB",
  green: "#16A34A",
  violet: "#7C3AED",
  rose: "#E11D48",
} as const;

const CARDS = [
  {
    tag: "Ad Management",
    title: "Ads That Find Buyers",
    desc: "Highly creative targeted Facebook & Instagram campaigns reaching high-intent and affluent homeowners in your area.",
    iconColor: ICON_COLORS.orange,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_COLORS.orange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8.01c0-2.22-1.79-4.01-4-4.01H6L2 9l4 5h12c2.21 0 4-1.79 4-4V8.01z" />
        <line x1="6" y1="1" x2="6" y2="5" />
        <line x1="6" y1="19" x2="6" y2="23" />
        <line x1="10" y1="3" x2="10" y2="5" />
        <line x1="10" y1="19" x2="10" y2="21" />
      </svg>
    ),
  },
  {
    tag: "Intelligent Qualification",
    title: "Every Lead Pre-Screened",
    desc: "Budget, scope, timeline & more confirmed in natural back and forth conversation before they ever hit your calendar.",
    iconColor: ICON_COLORS.teal,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_COLORS.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    tag: "Estimator Brief",
    title: "Walk In Knowing the Deal",
    desc: "A full project brief — budget, scope, risks — lands in your inbox & CRM the moment a lead qualifies.",
    iconColor: ICON_COLORS.blue,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_COLORS.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    tag: "Automated Booking",
    title: "Appointments Automatically Booked",
    desc: "Qualified homeowners land on your calendar automatically. Zero back-and-forth.",
    iconColor: ICON_COLORS.green,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_COLORS.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
    ),
  },
  {
    tag: "CRM",
    title: "Your Pipeline, Organized",
    desc: "Every lead tracked, scored, and prioritized. High-value prospects flagged and ready to act on.",
    iconColor: ICON_COLORS.violet,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_COLORS.violet} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    tag: "Done For You",
    title: "We Handle Everything",
    desc: "Ads, Systems integration, booking, CRM — fully managed. You just show up, close the job.",
    iconColor: ICON_COLORS.rose,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_COLORS.rose} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const STAGGER_MS = 70;
const REVEAL_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Benchmarks() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px",
  });

  return (
    <>
      <style>{`
        .bm2-section {
          background: ${PAGE_BACKGROUND};
          padding: 96px 24px;
        }
        .bm2-header {
          text-align: center;
          margin-bottom: 52px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s ${REVEAL_EASE}, transform 0.75s ${REVEAL_EASE};
        }
        .bm2-section.bm2-revealed .bm2-header {
          opacity: 1;
          transform: translateY(0);
        }
        .bm2-card-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ${REVEAL_EASE}, transform 0.6s ${REVEAL_EASE};
        }
        .bm2-section.bm2-revealed .bm2-card-reveal {
          opacity: 1;
          transform: translateY(0);
        }
        .bm2-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgb(79,70,229);
          display: block; margin-bottom: 10px;
        }
        .bm2-title {
          font-size: clamp(28px, 3.5vw, 38px); font-weight: 900;
          color: #0F172A; letter-spacing: -0.025em; line-height: 1.15;
          margin: 0;
        }
        .bm2-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .bm2-card {
          padding: 28px 26px;
          border: 1.5px solid #E2E8F0;
          border-radius: 16px;
          background: #ffffff;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .bm2-card:hover {
          border-color: rgba(79,70,229,0.3);
          transform: translateY(-2px);
        }
        .bm2-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: rgba(79,70,229,0.09);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .bm2-tag {
          font-size: 10.5px; font-weight: 800; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgb(79,70,229);
          margin-bottom: 7px;
        }
        .bm2-card-title {
          font-size: 17px; font-weight: 800; color: #0F172A;
          margin: 0 0 8px; line-height: 1.3;
        }
        .bm2-desc {
          font-size: 14px; color: #64748B;
          line-height: 1.6; margin: 0;
        }
        @media (max-width: 860px) {
          .bm2-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 540px) {
          .bm2-section { padding: 64px 16px; }
          .bm2-grid { grid-template-columns: 1fr; gap: 14px; }
          .bm2-card { padding: 22px 20px; }
        }
      `}</style>

      <section id="benchmarks" className={`bm2-section${isIntersecting ? " bm2-revealed" : ""}`} ref={ref}>
        <div className="bm2-header">
          <span className="bm2-eyebrow">What We Do</span>
          <h2 className="bm2-title">
            We run the ads. We qualify the leads.<br />You Close the Jobs.
          </h2>
        </div>

        <div className="bm2-grid">
          {CARDS.map((card, index) => (
            <div
              key={card.tag}
              className="bm2-card-reveal"
              style={{ transitionDelay: isIntersecting ? `${120 + index * STAGGER_MS}ms` : "0ms" }}
            >
              <div className="bm2-card">
                <div
                  className="bm2-icon"
                  style={{
                    background: `${card.iconColor}18`,
                    border: `1px solid ${card.iconColor}40`,
                  }}
                >
                  {card.icon}
                </div>
                <div className="bm2-tag" style={{ color: card.iconColor }}>
                  {card.tag}
                </div>
                <h3 className="bm2-card-title">{card.title}</h3>
                <p className="bm2-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
