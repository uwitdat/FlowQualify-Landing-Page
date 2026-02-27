"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  outerStyle?: React.CSSProperties;
}


const funnelRows = [
  { label: "Click ad",  web: 100, msg: 100, webPct: 100, msgPct: 100 },
  { label: "Fill / Open", web: 35,  msg: 82,  webPct: 35,  msgPct: 82  },
  { label: "Qualify",  web: 15,  msg: 50,  webPct: 15,  msgPct: 50  },
];

export default function ComparisonCardAnimated({ outerStyle }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);


  return (
    <>
      <style>{`
        @keyframes ccaGradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ccaBarGrow {
          from { width: 0%; }
        }
        .cca-outer {
          padding: 2px;
          border-radius: 22px;
          background: linear-gradient(135deg, #6B8CAE, #8B9DC3, #A8BDD4, #6B8CAE);
          background-size: 300% 300%;
          animation: ccaGradientShift 6s ease infinite;
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.65s ease-out, transform 0.65s ease-out;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .cca-outer.cca-revealed { opacity: 1; transform: translateY(0); }
        .cca-outer.cca-revealed:hover {
          transform: translateY(0) scale(1.03);
          transition: opacity 0.65s ease-out, transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
        }
        .cca-inner {
          background: #ffffff;
          border-radius: 20px;
          padding: 28px 28px 0;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          flex: 1;
          box-sizing: border-box;
        }
        .cca-drift-bg {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background: linear-gradient(120deg, #E0F4FA 0%, #EEF8FB 50%, #F0FDF4 100%);
          opacity: 0.35;
        }
        .cca-content { position: relative; z-index: 1; display: flex; flex-direction: column; flex: 1; }

        /* Progress bar */
        .cca-bar-track {
          height: 5px; border-radius: 999px; background: #F1F5F9;
          overflow: hidden; margin-top: 4px;
        }
        .cca-bar-fill {
          height: 100%; border-radius: 999px;
        }
        .cca-bar-fill.revealed {
          animation: ccaBarGrow 0.9s ease-out forwards;
        }

        /* Booked footer */
      `}</style>

      <div ref={cardRef} className={`cca-outer${revealed ? " cca-revealed" : ""}`} style={outerStyle}>
        <div className="cca-inner">
          <div className="cca-drift-bg" />
          <div className="cca-content">

            {/* Title */}
            <h3 style={{ fontSize: "18px", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 20px", color: "#0F172A", textAlign: "center" }}>
              The FlowQualify Difference
            </h3>

            {/* Mini comparison cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "22px" }}>
              {/* Traditional */}
              <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "12px", padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }}>
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#FECACA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "9px", fontWeight: 800, color: "#B91C1C", textTransform: "uppercase", letterSpacing: "0.06em" }}>Traditional Agency</span>
                </div>
                {["Slow response (hrs/days)", "Web form — 35% fill rate", "Chasing cold leads"].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginBottom: i < 2 ? "7px" : 0 }}>
                    <div style={{ width: "13px", height: "13px", borderRadius: "50%", background: "#FECACA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                      <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <span style={{ fontSize: "10.5px", color: "#7F1D1D", lineHeight: 1.45 }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* FlowQualify */}
              <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "12px", padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }}>
                  <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#BBF7D0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "9px", fontWeight: 800, color: "#15803D", textTransform: "uppercase", letterSpacing: "0.06em" }}>FlowQualify</span>
                </div>
                {["Under 90s auto-response", "Chat — 82% open rate", "Pre-qualified, ready to close"].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginBottom: i < 2 ? "7px" : 0 }}>
                    <div style={{ width: "13px", height: "13px", borderRadius: "50%", background: "#BBF7D0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                      <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span style={{ fontSize: "10.5px", color: "#14532D", lineHeight: 1.45 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Funnel label */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #E2E8F0)" }} />
              <span style={{ fontSize: "9.5px", fontWeight: 800, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.10em", whiteSpace: "nowrap" }}>
                Funnel — per 100 Ad Clicks
              </span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #E2E8F0)" }} />
            </div>

            {/* Funnel rows with bars */}
            <div style={{ marginBottom: "16px" }}>
              {/* Column headers */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", padding: "6px 0", marginBottom: "2px" }}>
                <div style={{ fontSize: "8.5px", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Stage</div>
                <div style={{ fontSize: "8.5px", fontWeight: 700, color: "#DC2626", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center" }}>Web Form</div>
                <div style={{ fontSize: "8.5px", fontWeight: 700, color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center" }}>Messenger</div>
              </div>
              {funnelRows.map((row) => (
                <div key={row.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", alignItems: "center", padding: "7px 0", borderTop: "1px solid #F8FAFC" }}>
                  <div style={{ fontSize: "10.5px", color: "#475569", fontWeight: 600 }}>{row.label}</div>
                  {/* Web */}
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "12px", fontWeight: 800, color: "#DC2626" }}>{row.web}</div>
                    <div className="cca-bar-track">
                      <div className={`cca-bar-fill${revealed ? " revealed" : ""}`} style={{ width: revealed ? `${row.webPct}%` : "0%", background: "linear-gradient(90deg, #FECACA, #DC2626)", animationDuration: "0.9s" }} />
                    </div>
                  </div>
                  {/* Messenger */}
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "12px", fontWeight: 800, color: "#16A34A" }}>{row.msg}</div>
                    <div className="cca-bar-track">
                      <div className={`cca-bar-fill${revealed ? " revealed" : ""}`} style={{ width: revealed ? `${row.msgPct}%` : "0%", background: "linear-gradient(90deg, #BBF7D0, #16A34A)", animationDuration: "0.9s" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Insight callout */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ width: "100%", background: "linear-gradient(135deg, #F0FDF4 0%, #E0F4FA 100%)", border: "1px solid #BBF7D0", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#1a6b8a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "9.5px", fontWeight: 800, color: "#1a6b8a", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Booking Conversion Rate</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "8px" }}>
                  <div style={{ textAlign: "center" as const }}>
                    <div style={{ fontSize: "28px", fontWeight: 900, color: "#DC2626", lineHeight: 1 }}>3%</div>
                    <div style={{ fontSize: "9px", color: "#B91C1C", fontWeight: 600, marginTop: "3px" }}>Web Form</div>
                  </div>
                  <div style={{ fontSize: "10px", fontWeight: 800, color: "#CBD5E1" }}>→</div>
                  <div style={{ textAlign: "center" as const }}>
                    <div style={{ fontSize: "28px", fontWeight: 900, color: "#16A34A", lineHeight: 1 }}>12%</div>
                    <div style={{ fontSize: "9px", color: "#15803D", fontWeight: 600, marginTop: "3px" }}>Messenger</div>
                  </div>
                </div>
                <div style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px solid rgba(26,107,138,0.12)", textAlign: "center" as const }}>
                  <span style={{ fontSize: "10px", color: "#334155", fontWeight: 600, lineHeight: 1.5 }}>
                    Messenger books <strong style={{ color: "#1a6b8a" }}>4x more appointments</strong> from the same ad spend
                  </span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
