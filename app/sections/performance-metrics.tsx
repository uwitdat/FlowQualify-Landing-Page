"use client";

import { BUTTON_PRIMARY, HERO_PANEL_BG } from "../config/constants";

const METRICS = [
  {
    value: "0",
    label: "Shared leads — every appointment is exclusive to you",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BUTTON_PRIMARY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "15-25",
    label: "Qualified appointments hitting your calendar every month",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BUTTON_PRIMARY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    value: "<90s",
    label: "We respond in under 90 seconds",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BUTTON_PRIMARY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function PerformanceMetrics() {
  return (
    <>
      <style>{`
        .pm-section {
          position: relative;
          padding: 0 0 96px;
        }
        .pm-curve-wrap {
          margin: 0 8px;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .pm-curve-wrap { margin: 0; }
        }
        .pm-curve {
          width: 100%;
          position: relative;
          background: ${HERO_PANEL_BG};
          padding: 104px 0 104px;
        }
        .pm-inner {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }
        .pm-heading {
          text-align: center;
          padding: 0 24px 32px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .pm-title {
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 12px;
        }
        .pm-sub {
          font-size: 17px;
          color: #475569;
          line-height: 1.5;
          margin: 0;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        .pm-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        .pm-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
        }
        .pm-card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .pm-card-value {
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 8px;
        }
        .pm-card-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.35;
          margin: 0;
        }
        @media (max-width: 800px) {
          .pm-curve { padding: 80px 0 80px; }
          .pm-cards { grid-template-columns: 1fr; gap: 20px; max-width: 320px; margin: 0 auto; }
        }
      `}</style>

      <section className="pm-section">
        <div className="pm-heading">
          <h2 className="pm-title">The <span style={{ color: BUTTON_PRIMARY }}>numbers</span> speak for themselves</h2>
          <p className="pm-sub">
            Performance metrics that matter to your bottom line.
          </p>
        </div>
        <div className="pm-curve-wrap">
          <div className="pm-curve">
            <div className="pm-inner">
            <div className="pm-cards">
              {METRICS.map((card) => (
                <div key={card.label} className="pm-card">
                  <div className="pm-card-icon">{card.icon}</div>
                  <div className="pm-card-value">{card.value}</div>
                  <p className="pm-card-label">{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
