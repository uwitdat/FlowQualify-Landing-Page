"use client";

import FlowBackground from "../components/FlowBackground";
import ComparisonCardAnimated from "../components/ComparisonCardAnimated";

export default function MessageAds() {
  return (
    <>
      <style>{`
        .ma-section { background: #ffffff; padding: 140px 24px 120px; position: relative; overflow: hidden; }
        .ma-container { max-width: 1120px; margin: 0 auto; position: relative; z-index: 1; }
        .ma-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: stretch;
        }

        /* Headline accent */
        .ma-headline-accent {
          color: #0F172A;
        }

        /* Stat cards */
        .ma-stat-card {
          display: flex; align-items: center; gap: 16px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 16px 20px;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .ma-stat-card:hover {
          border-color: #93CAD9;
          box-shadow: 0 4px 20px rgba(26,107,138,0.08);
        }
        .ma-stat-icon {
          width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .ma-stat-num {
          font-size: 28px; font-weight: 900; line-height: 1;
          color: #1a6b8a; letter-spacing: -0.02em;
        }
        .ma-stat-label { font-size: 13px; font-weight: 700; color: #0F172A; margin-top: 1px; }
        .ma-stat-sub { font-size: 11.5px; color: #94A3B8; margin-top: 2px; line-height: 1.4; }

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
          {/* ── Centered eyebrow ── */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#ffffff", border: "1.5px solid #0094FF", borderRadius: "999px", padding: "10px 26px 10px 10px", boxShadow: "0 0 22px rgba(0,148,255,0.40), 0 0 48px rgba(0,148,255,0.15), 0 2px 8px rgba(0,148,255,0.14)" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#0094FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 14px rgba(0,148,255,0.80), 0 0 28px rgba(0,148,255,0.40)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 5.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.561-6.863 3.131 3.26 5.888-3.26-6.562 6.863z" />
                </svg>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#0094FF" }}>
                Why Messaging Beats Web Forms
              </span>
            </div>
          </div>

          <div className="ma-grid">

            {/* ── Left column ── */}
            <div style={{ paddingTop: "48px" }}>

              {/* Bullets */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: "56px" }}>
                {[
                  {
                    bg: "#E0F2FE", stroke: "#0284C7",
                    icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><polyline points="9 16 11 18 15 14" /></>,
                    text: "Books qualified phone appointments directly onto your calendar",
                  },
                  {
                    bg: "#EDE9FE", stroke: "#8B5CF6",
                    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
                    text: "Responds to every lead in under 90 seconds & pre-qualifies automatically",
                  },
                  {
                    bg: "#F0FDF4", stroke: "#16A34A",
                    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
                    text: "Sends the full project brief to your email or phone the moment they book",
                  },
                  {
                    bg: "#FDF4FF", stroke: "#C026D3",
                    icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
                    text: "Learns your services & process — answers homeowner questions like someone on your team",
                  },

                ].map((item, i, arr) => (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center", padding: "20px 0", borderBottom: i < arr.length - 1 ? "1px solid #F0EEFF" : "none" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={item.stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {item.icon}
                      </svg>
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#0F172A", lineHeight: 1.45 }}>{item.text}</div>
                  </div>
                ))}
              </div>

              {/* Stat cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  {
                    num: "82%",
                    label: "Message Open Rate",
                    sub: "vs. 21% for cold email follow-up",
                    iconBg: "#E0F4FA",
                    iconStroke: "#1a6b8a",
                    icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
                  },
                  {
                    num: "4x",
                    label: "More Booked Appointments",
                    sub: "per 100 ad clicks vs. web forms",
                    iconBg: "#EDE9FE",
                    iconStroke: "#8B5CF6",
                    icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><polyline points="9 16 11 18 15 14" /></>,
                  },
                ].map((s, i) => (
                  <div key={i} className="ma-stat-card">
                    <div className="ma-stat-icon" style={{ background: s.iconBg }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={s.iconStroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {s.icon}
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                        <div className="ma-stat-num">{s.num}</div>
                        <div className="ma-stat-label">{s.label}</div>
                      </div>
                      <div className="ma-stat-sub">{s.sub}</div>
                    </div>
                  </div>
                ))}
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
