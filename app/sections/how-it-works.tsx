"use client";

import { useEffect, useRef, useState } from "react";
import FlowBackground from "../components/FlowBackground";

const TOTAL = 4;
const DURATION = 5000;

export default function HowItWorks() {
  const [current, setCurrent] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % TOTAL);
      setCycleKey((k) => k + 1);
    }, DURATION);
    timerRef.current = id;
    return () => clearInterval(id);
  }, []);

  const handleDotClick = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent(i);
    setCycleKey((k) => k + 1);
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % TOTAL);
      setCycleKey((k) => k + 1);
    }, DURATION);
    timerRef.current = id;
  };

  return (
    <>
      <style>{`
        .hiw-section { padding: 96px 24px; background: #ffffff; position: relative; }
        .hiw-white-wrap {
          max-width: 1160px; margin: 0 auto;
          background: #ffffff; border-radius: 24px;
          padding: 56px 32px 48px;
          position: relative; z-index: 1;
        }
        .hiw-container { max-width: 1120px; margin: 0 auto; position: relative; }

        .hiw-header { text-align: center; max-width: 620px; margin: 0 auto 64px; }
        .hiw-title {
          font-size: 36px; font-weight: 800; color: #0F172A;
          letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 14px;
        }
        .hiw-title span { color: rgb(180, 83, 9); }
        .hiw-subtitle { font-size: 16px; color: #374151; line-height: 1.65; }

        .hiw-grid {
          display: grid;
          grid-template-columns: 1fr 36px 1fr 36px 1fr 36px 1fr;
          align-items: stretch;
          gap: 0;
          overflow: visible;
          min-width: 0;
        }

        .hiw-card {
          background: white;
          border: 1.5px solid #CBD5E1;
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          transition: border-color 0.4s ease,
                      background 0.4s ease,
                      box-shadow 0.4s ease,
                      transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
          z-index: 1;
          cursor: pointer;
          min-width: 0;
        }
        .hiw-card.active {
          border-color: rgba(180, 83, 9, 0.4);
          background: white;
          z-index: 10;
          box-shadow: 0 4px 24px rgba(180, 83, 9, 0.12);
          transform: scale(1.02);
        }

        .hiw-progress { display: none; }

        /* Step labels — black when inactive, amber when active */
        .hiw-step-label {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          color: #0F172A; text-transform: uppercase; margin-bottom: 14px;
          transition: color 0.4s ease;
        }
        .hiw-card.active .hiw-step-label { color: rgb(180, 83, 9); }

        .hiw-icon-badge {
          width: 48px; height: 48px; border-radius: 10px;
          background: #F1F5F9;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px; flex-shrink: 0;
          transition: background 0.45s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1);
        }
        .hiw-card.active .hiw-icon-badge { background: linear-gradient(135deg, rgb(154, 52, 18), rgb(180, 83, 9)); }
        .hiw-icon-badge svg { stroke: #64748B; transition: stroke 0.4s ease; }
        .hiw-card.active .hiw-icon-badge svg { stroke: #FFFFFF; }

        .hiw-card-title {
          font-size: 18px; font-weight: 700; color: #0F172A; margin-bottom: 8px;
          transition: color 0.4s ease;
        }
        .hiw-card.active .hiw-card-title { color: #0F172A; }

        .hiw-card-desc {
          font-size: 12.5px; color: #374151; line-height: 1.6; margin-bottom: 18px;
          transition: color 0.4s ease;
        }
        .hiw-card.active .hiw-card-desc { color: #1F2937; }

        .hiw-mockup {
          margin-top: auto; border-radius: 10px;
          background: white; border: 1px solid #E2E8F0; padding: 14px;
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
        }
        .hiw-card.active .hiw-mockup {
          box-shadow: 0 4px 16px rgba(180, 83, 9, 0.15);
          border-color: rgba(180, 83, 9, 0.3);
        }

        .hiw-bubble { margin-bottom: 4px; display: flex; align-items: flex-end; }
        .hiw-bubble.bot  { justify-content: flex-start; }
        .hiw-bubble.user { justify-content: flex-end; }
        .hiw-bubble span {
          padding: 5px 8px; border-radius: 8px; font-size: 7.5px;
          line-height: 1.4; max-width: 82%;
        }
        .hiw-bubble.user span { background: #3B82F6; color: #FFFFFF; border-bottom-right-radius: 2px; }
        .hiw-bubble.bot  span { background: #E4E6EB; color: #1C1E21; border-bottom-left-radius: 2px; }
        .hiw-av {
          width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .hiw-av-bot  { background: #16A34A; margin-right: 5px; }
        .hiw-av-user { background: #CBD5E1; margin-left: 5px; }


        .hiw-conn-wrap {
          display: flex; align-items: center; justify-content: center;
          height: 100%; padding: 0 4px;
        }
        .hiw-conn-inner {
          width: 100%; height: 3px;
          background: #E2E8F0; border-radius: 999px;
          position: relative; overflow: hidden;
          display: flex; align-items: center;
          transition: background 0.4s ease;
        }
        .hiw-conn-dot {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: 10px; height: 10px; border-radius: 50%;
          background: #E2E8F0; border: 2px solid #E2E8F0;
          z-index: 2; transition: border-color 0.4s ease, background 0.4s ease;
        }
        /* Connectors — theme purple when active */
        .hiw-conn-wrap.active .hiw-conn-dot  { border-color: rgb(180, 83, 9); background: rgb(180, 83, 9); }
        .hiw-conn-wrap.active .hiw-conn-inner { background: rgba(180, 83, 9, 0.2); }

        /* Stack vertically before squish; full mobile tweaks */
        @media (max-width: 900px) {
          .hiw-section { padding: 64px 16px 72px; }
          .hiw-white-wrap { padding: 40px 20px 36px; }
          .hiw-header { margin-bottom: 40px; }
          .hiw-title { font-size: 28px; }
          .hiw-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .hiw-conn-wrap { display: none; }
          .hiw-card { padding: 22px 20px; }
          .hiw-card.active { transform: none; }
          .hiw-card-title { font-size: 17px; }
          .hiw-card-desc { font-size: 12px; }
          .hiw-mockup { padding: 12px; }
        }
        @media (max-width: 480px) {
          .hiw-section { padding: 48px 12px 56px; }
          .hiw-white-wrap { padding: 28px 16px 24px; }
          .hiw-header { margin-bottom: 32px; }
          .hiw-title { font-size: 24px; }
          .hiw-card { padding: 18px 16px; }
          .hiw-card-title { font-size: 16px; }
        }
      `}</style>

      <section className="hiw-section">
        <FlowBackground />
        <div className="hiw-white-wrap">
        <div className="hiw-container">

          {/* Header */}
          <div className="hiw-header">
            <h2 className="hiw-title">
              From Ad Click to <span>Booked Job</span> —<br />On Autopilot. At Any Scale.
            </h2>
            <p className="hiw-subtitle">
              We <strong>run the ads</strong>, <strong>qualify the leads</strong>, and <strong>book the calls</strong> — all on autopilot. You just show up.
            </p>
          </div>

          {/* 5-col grid: card · connector · card · connector · card */}
          <div className="hiw-grid">

            {/* Card 1 */}
            <div className={`hiw-card${current === 0 ? " active" : ""}`} onClick={() => handleDotClick(0)}>
              <div key={`prog-0-${current === 0 ? cycleKey : "idle"}`} className="hiw-progress" />
              <div className="hiw-step-label">Step 01</div>
              <div className="hiw-icon-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="hiw-card-title">Homeowner Clicks Ad</h3>
              <p className="hiw-card-desc">
                Your ad reaches in-market homeowners in your area.
              </p>
              {/* Simplified Facebook ad mockup */}
              <div className="hiw-mockup" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(135deg, #3B82F6, #2563EB)", padding: "8px 12px", display: "flex", alignItems: "center", gap: "7px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(219,234,254,0.95)">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div style={{ fontSize: "8px", fontWeight: 700, color: "#fff", letterSpacing: "0.02em" }}>Sponsored · Kitchen &amp; Bath</div>
                </div>
                <div style={{ padding: "10px 12px", background: "#F8FAFC" }}>
                  <div style={{ fontSize: "8.5px", fontWeight: 700, color: "#0F172A", marginBottom: "5px", lineHeight: 1.3 }}>Kitchen &amp; Bath Remodeling</div>
                  <div style={{ fontSize: "7.5px", color: "#374151", marginBottom: "10px", lineHeight: 1.5 }}>
                    Get a free quote — we serve homeowners within 25 miles.
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ background: "linear-gradient(135deg, #3B82F6, #2563EB)", color: "white", fontSize: "7px", fontWeight: 700, padding: "4px 10px", borderRadius: "4px" }}>
                      Send Message →
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector 1→2 */}
            <div className={`hiw-conn-wrap${current === 0 ? " active" : ""}`}>
              <div className="hiw-conn-inner">
                <div className="hiw-conn-dot" />
              </div>
            </div>

            {/* Card 2 */}
            <div className={`hiw-card${current === 1 ? " active" : ""}`} onClick={() => handleDotClick(1)}>
              <div key={`prog-1-${current === 1 ? cycleKey : "idle"}`} className="hiw-progress" />
              <div className="hiw-step-label">Step 02</div>
              <div className="hiw-icon-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="hiw-card-title">AI Qualifies in Messenger</h3>
              <p className="hiw-card-desc">
                Scope, budget, and timeline qualified instantly — no forms.
              </p>
              <div className="hiw-mockup">
                <div className="hiw-bubble user">
                  <span>Hey, I want a kitchen remodel quote</span>
                  <div className="hiw-av hiw-av-user">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" fill="#94A3B8"/>
                      <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" fill="#94A3B8"/>
                    </svg>
                  </div>
                </div>
                <div className="hiw-bubble bot">
                  <div className="hiw-av hiw-av-bot">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
                      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10.5z"/>
                      <rect x="9" y="13" width="6" height="8" fill="white" opacity="0.6"/>
                    </svg>
                  </div>
                  <span>What&apos;s your budget range?</span>
                </div>
                <div className="hiw-bubble user">
                  <span>Around $25–30k</span>
                  <div className="hiw-av hiw-av-user">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" fill="#94A3B8"/>
                      <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" fill="#94A3B8"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector 2→3 */}
            <div className={`hiw-conn-wrap${current === 1 ? " active" : ""}`}>
              <div className="hiw-conn-inner">
                <div className="hiw-conn-dot" />
              </div>
            </div>

            {/* Card 3 — Lead Summary */}
            <div className={`hiw-card${current === 2 ? " active" : ""}`} onClick={() => handleDotClick(2)}>
              <div key={`prog-2-${current === 2 ? cycleKey : "idle"}`} className="hiw-progress" />
              <div className="hiw-step-label">Step 03</div>
              <div className="hiw-icon-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <h3 className="hiw-card-title">Lead Summary Generated</h3>
              <p className="hiw-card-desc">
                A ready-to-use project brief lands in your CRM, email, or text.
              </p>
              {/* Simplified brief mockup — teal header to match brand */}
              <div className="hiw-mockup" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(135deg, rgb(154, 52, 18), rgb(180, 83, 9))", padding: "8px 12px", display: "flex", alignItems: "center", gap: "7px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(186,230,253,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                  </svg>
                  <div style={{ fontSize: "8px", fontWeight: 700, color: "#fff" }}>Estimator Brief · Sarah M.</div>
                </div>
                <div style={{ padding: "10px 12px", background: "#F0F9FF" }}>
                  <div style={{ marginBottom: "6px" }}>
                    <div style={{ fontSize: "7.5px", color: "#374151", lineHeight: 1.5 }}>
                      <strong style={{ color: "#0F172A" }}>Project:</strong> Kitchen — cabinets, countertops &amp; island
                    </div>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <div style={{ fontSize: "7.5px", color: "#374151", lineHeight: 1.5 }}>
                      <strong style={{ color: "#0F172A" }}>Budget:</strong> $25k–$30k &nbsp;·&nbsp; Ready in 2 months
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector 3→4 */}
            <div className={`hiw-conn-wrap${current === 2 ? " active" : ""}`}>
              <div className="hiw-conn-inner">
                <div className="hiw-conn-dot" />
              </div>
            </div>

            {/* Card 4 — Booked */}
            <div className={`hiw-card${current === 3 ? " active" : ""}`} onClick={() => handleDotClick(3)}>
              <div key={`prog-3-${current === 3 ? cycleKey : "idle"}`} className="hiw-progress" />
              <div className="hiw-step-label">Step 04</div>
              <div className="hiw-icon-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <polyline points="9 16 11 18 15 14" />
                </svg>
              </div>
              <h3 className="hiw-card-title">Confirmed Appointment Booked</h3>
              <p className="hiw-card-desc">
                Only qualified homeowners reach your calendar.
              </p>
              {/* Simplified confirmed appointment mockup */}
              <div className="hiw-mockup" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(135deg, #059669, #10B981)", padding: "8px 12px", display: "flex", alignItems: "center", gap: "7px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(209,250,229,0.95)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div style={{ fontSize: "8px", fontWeight: 700, color: "#fff" }}>Confirmed · Sarah M.</div>
                </div>
                <div style={{ padding: "10px 12px", background: "#F0FDF4" }}>
                  <div style={{ marginBottom: "6px" }}>
                    <div style={{ fontSize: "8px", fontWeight: 700, color: "#0F172A", lineHeight: 1.4 }}>
                      Thu, Mar 6 · 10:00 AM
                    </div>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <div style={{ fontSize: "7.5px", color: "#374151", lineHeight: 1.5 }}>
                      $28k · Kitchen remodel, ready in 2 months
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        </div>
      </section>
    </>
  );
}
