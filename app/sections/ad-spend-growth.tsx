"use client";

import { Fragment } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { PAGE_BACKGROUND } from "../config/constants";

const MONTHS = [
  {
    label: "Month 1",
    adSpend: "$1,200",
    consultations: "4–8",
    jobsClosed: "1–3",
    revenue: "$10–30k",
    accentColor: "rgb(79, 70, 229)",
    accentMuted: "rgba(79, 70, 229, 0.07)",
    accentBorder: "rgba(79, 70, 229, 0.2)",
  },
  {
    label: "Month 2",
    adSpend: "$1,500",
    consultations: "10–15",
    jobsClosed: "3–6",
    revenue: "$30–60k",
    accentColor: "rgb(124, 58, 237)",
    accentMuted: "rgba(124, 58, 237, 0.07)",
    accentBorder: "rgba(124, 58, 237, 0.2)",
  },
  {
    label: "Month 3",
    adSpend: "$2,000",
    consultations: "16–24",
    jobsClosed: "6–10",
    revenue: "$60–100k",
    accentColor: "rgb(5, 150, 105)",
    accentMuted: "rgba(5, 150, 105, 0.07)",
    accentBorder: "rgba(5, 150, 105, 0.25)",
  },
];

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function AdSpendGrowth() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px",
  });

  return (
    <>
      <style>{`
        .asg-section {
          background: ${PAGE_BACKGROUND};
          padding: 96px 24px;
        }

        .asg-header {
          text-align: center;
          margin-bottom: 52px;
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.75s ${EASE}, transform 0.75s ${EASE};
        }
        .asg-section.asg-on .asg-header {
          opacity: 1;
          transform: translateY(0);
        }

        .asg-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgb(79, 70, 229);
          margin-bottom: 12px;
        }
        .asg-platform-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(24, 119, 242, 0.08);
          border: 1px solid rgba(24, 119, 242, 0.22);
          border-radius: 999px;
          padding: 7px 14px 7px 10px;
          margin-bottom: 18px;
        }
        .asg-platform-label {
          font-size: 12px;
          font-weight: 700;
          color: #1877F2;
          letter-spacing: 0.01em;
          line-height: 1;
        }
        .asg-title {
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0 0 16px;
        }
        .asg-title-accent {
          color: rgb(79, 70, 229);
        }
        .asg-sub {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.65;
          max-width: 540px;
          margin: 0 auto;
        }

        /* Cards row */
        .asg-row {
          display: flex;
          align-items: stretch;
          max-width: 900px;
          margin: 0 auto 24px;
          gap: 0;
        }

        /* Growth arrow between cards */
        .asg-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 0 10px;
          padding-top: 38px;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.5s ${EASE}, transform 0.5s ${EASE};
        }
        .asg-section.asg-on .asg-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Card reveal wrapper */
        .asg-card-wrap {
          flex: 1;
          min-width: 0;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ${EASE}, transform 0.65s ${EASE};
        }
        .asg-section.asg-on .asg-card-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        .asg-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          height: 100%;
          border: 1.5px solid #E2E8F0;
          transition: border-color 0.2s ease, transform 0.22s ease, box-shadow 0.22s ease;
        }
        .asg-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.09), 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .asg-card-top {
          padding: 16px 22px 14px;
          display: flex;
          align-items: center;
          gap: 9px;
        }
        .asg-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .asg-month-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .asg-revenue {
          padding: 4px 22px 18px;
        }
        .asg-rev-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 5px;
        }
        .asg-rev-value {
          font-size: clamp(28px, 3.2vw, 34px);
          font-weight: 900;
          letter-spacing: -0.025em;
          line-height: 1.1;
        }

        .asg-divider {
          height: 1px;
          background: #f1f5f9;
          margin: 0 22px;
        }

        .asg-metrics {
          padding: 15px 22px 22px;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .asg-metric {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 6px;
        }
        .asg-m-label {
          font-size: 13px;
          color: #6b7280;
        }
        .asg-m-val {
          font-size: 13px;
          font-weight: 700;
          color: #1f2937;
          text-align: right;
        }

        @media (max-width: 680px) {
          .asg-section { padding: 72px 16px; }
          .asg-row {
            flex-direction: column;
            gap: 14px;
          }
          .asg-arrow {
            padding: 0;
            padding-left: 0;
            align-self: center;
            transform: rotate(90deg) translateX(-6px);
          }
          .asg-section.asg-on .asg-arrow {
            transform: rotate(90deg) translateX(0);
          }
          .asg-caveat { padding: 18px 20px; }
        }
      `}</style>

      <section
        id="ad-spend-growth"
        className={`asg-section${isIntersecting ? " asg-on" : ""}`}
        ref={ref}
      >
        <div className="asg-header">
          <div className="asg-platform-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="asg-platform-label">Powered by Meta &amp; Instagram Ads</span>
          </div>
          <h2 className="asg-title">
            The <span className="asg-title-accent">FlowQualify</span> Effect
          </h2>
          <p className="asg-sub">
            We handle every ad, every lead, every booking — end to end. This is what your pipeline looks like when the system is running for you.
          </p>
        </div>

        <div className="asg-row">
          {MONTHS.map((m, i) => (
            <Fragment key={m.label}>
              {i > 0 && (
                <div
                  className="asg-arrow"
                  style={{
                    transitionDelay: isIntersecting ? `${180 + i * 80}ms` : "0ms",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="rgb(5, 150, 105)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              <div
                className="asg-card-wrap"
                style={{
                  transitionDelay: isIntersecting ? `${100 + i * 100}ms` : "0ms",
                }}
              >
                <div className="asg-card" style={{ borderColor: m.accentBorder }}>
                  <div className="asg-card-top" style={{ background: m.accentMuted }}>
                    <div className="asg-dot" style={{ background: m.accentColor }} />
                    <span className="asg-month-label" style={{ color: m.accentColor }}>
                      {m.label}
                    </span>
                  </div>

                  <div className="asg-revenue">
                    <div className="asg-rev-label">Revenue</div>
                    <div className="asg-rev-value" style={{ color: m.accentColor }}>
                      {m.revenue}
                    </div>
                  </div>

                  <div className="asg-divider" />

                  <div className="asg-metrics">
                    <div className="asg-metric">
                      <span className="asg-m-label">Ad spend</span>
                      <span className="asg-m-val">{m.adSpend}</span>
                    </div>
                    <div className="asg-metric">
                      <span className="asg-m-label">Booked consultations</span>
                      <span className="asg-m-val">{m.consultations}</span>
                    </div>
                    <div className="asg-metric">
                      <span className="asg-m-label">Jobs closed</span>
                      <span className="asg-m-val">{m.jobsClosed}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
