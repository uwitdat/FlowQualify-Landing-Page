"use client";

import { useEffect, useRef, useState } from "react";
import { BUTTON_PRIMARY } from "../config/constants";

interface Props {
  outerStyle?: React.CSSProperties;
}


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
        .cca-outer {
          padding: 0;
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.65s ease-out, transform 0.65s ease-out;
          display: flex;
          flex-direction: column;
        }
        .cca-outer.cca-revealed { opacity: 1; transform: translateY(0); }
        .cca-inner {
          padding: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          flex: 1;
          box-sizing: border-box;
        }
        .cca-content { position: relative; z-index: 1; display: flex; flex-direction: column; flex: 1; }

      `}</style>

      <div ref={cardRef} className={`cca-outer${revealed ? " cca-revealed" : ""}`} style={outerStyle}>
        <div className="cca-inner">
          <div className="cca-content">

            {/* Title */}
            <h3 style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 24px", color: "#0F172A", textAlign: "center" }}>
              The FlowQualify Difference
            </h3>

            {/* Comparison cards — larger */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {/* Traditional */}
              <div style={{ background: "#F1F5F9", border: "1px solid #CBD5E1", borderRadius: "16px", padding: "24px 28px" }}>
                <div style={{ marginBottom: "14px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#0F172A", textTransform: "uppercase", letterSpacing: "0.06em" }}>Traditional Agency</span>
                </div>
                {["Slow response (hrs/days)", "Web form — 35% fill rate", "Chasing cold leads"].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: i < 2 ? "12px" : 0 }}>
                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#94A3B8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500, lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* FlowQualify — teal to match user chat bubble */}
              <div style={{ background: "rgba(13, 148, 136, 0.08)", border: "1px solid rgba(13, 148, 136, 0.4)", borderRadius: "16px", padding: "24px 28px" }}>
                <div style={{ marginBottom: "14px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#0F172A", textTransform: "uppercase", letterSpacing: "0.06em" }}>FlowQualify</span>
                </div>
                {["Under 90s auto-response", "Chat — 82% open rate", "Pre-qualified, ready to close"].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: i < 2 ? "12px" : 0 }}>
                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgb(13, 148, 136)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500, lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
