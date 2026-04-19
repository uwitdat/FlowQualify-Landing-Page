"use client";

import FlowBackground from "../components/FlowBackground";
import ComparisonCardAnimated from "../components/ComparisonCardAnimated";
import { BUTTON_PRIMARY, ACCENT_SECONDARY, PAGE_BACKGROUND } from "../config/constants";

export default function MessageAds() {
  return (
    <>
      <style>{`
        .ma-section { background: ${PAGE_BACKGROUND}; padding: 140px 24px 120px; position: relative; overflow: hidden; }
        .ma-container { max-width: 1120px; margin: 0 auto; position: relative; z-index: 1; }
        .ma-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: stretch;
        }

        /* Stat cards — theme */
        .ma-stat-card {
          display: flex; align-items: center; gap: 16px;
          background: rgba(79, 70, 229, 0.06);
          border: 1px solid rgba(79, 70, 229, 0.25);
          border-radius: 14px;
          padding: 16px 20px;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .ma-stat-card:hover {
          border-color: rgba(79, 70, 229, 0.5);
          box-shadow: 0 4px 20px rgba(79, 70, 229, 0.12);
        }
        .ma-stat-icon {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .ma-stat-num {
          font-size: 28px; font-weight: 900; line-height: 1;
          color: rgb(79, 70, 229); letter-spacing: -0.02em;
        }
        .ma-stat-label { font-size: 13px; font-weight: 700; color: #0F172A; margin-top: 1px; }
        .ma-stat-sub { font-size: 11.5px; color: #64748B; margin-top: 2px; line-height: 1.4; }

        /* Icon bubbles */
        .ma-icon-bubble {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .ma-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="ma-section">
        <FlowBackground />
        <div className="ma-container">
          {/* ── Section title (generic) ── */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: BUTTON_PRIMARY }}>
              The Difference
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 900, letterSpacing: "-0.02em", color: "#0F172A", margin: "8px 0 0", lineHeight: 1.2 }}>
              Messaging beats web forms
            </h2>
          </div>

          <div className="ma-grid">

            {/* ── Left column ── */}
            <div style={{ paddingTop: "48px" }}>

              {/* Bullets */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  {
                    icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><polyline points="9 16 11 18 15 14" /></>,
                    text: "Books qualified phone appointments directly onto your calendar",
                  },
                  {
                    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
                    text: "Responds to every lead in under 90 seconds & pre-qualifies automatically",
                  },
                  {
                    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
                    text: "Sends the full project brief to your email or phone the moment they book",
                  },
                  {
                    icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
                    text: "Learns your services & process — answers homeowner questions like someone on your team",
                  },
                ].map((item, i, arr) => {
                  const useSecondary = i % 2 === 0;
                  const bg = useSecondary ? "rgba(13, 148, 136, 0.15)" : "rgba(79, 70, 229, 0.15)";
                  const stroke = useSecondary ? ACCENT_SECONDARY : BUTTON_PRIMARY;
                  const borderColor = i < arr.length - 1 ? (useSecondary ? "rgba(13, 148, 136, 0.2)" : "rgba(79, 70, 229, 0.12)") : "none";
                  return (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center", padding: "20px 0", borderBottom: borderColor !== "none" ? `1px solid ${borderColor}` : "none" }}>
                      <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          {item.icon}
                        </svg>
                      </div>
                      <div style={{ fontSize: "15px", fontWeight: 500, color: "#0F172A", lineHeight: 1.45 }}>{item.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Right column — animated comparison card ── */}
            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <ComparisonCardAnimated outerStyle={{ flex: 1, display: "flex", flexDirection: "column" }} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
