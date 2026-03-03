"use client";

import { BUTTON_PRIMARY } from "../config/constants";

export default function ApplyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFFBF7",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <style>{`
        .apply-hero { background: #0F172A; }
        .apply-section-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid rgba(180,83,9,0.15);
          box-shadow: 0 2px 24px rgba(0,0,0,0.06);
          padding: 40px 44px;
          margin-bottom: 24px;
        }
        .apply-notion-frame {
          width: 100%;
          min-height: 700px;
          border: none;
          border-radius: 12px;
        }
        @media (max-width: 640px) {
          .apply-section-card { padding: 28px 20px; }
          .apply-hero-inner { padding: 48px 20px 36px !important; }
          .apply-body { padding: 24px 16px !important; }
        }
      `}</style>

      {/* ── Hero banner ── */}
      <div className="apply-hero">
        <div
          className="apply-hero-inner"
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "64px 32px 48px",
            textAlign: "center",
          }}
        >
          {/* Step badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(180,83,9,0.18)",
            border: "1px solid rgba(180,83,9,0.4)",
            borderRadius: "100px",
            padding: "6px 18px",
            marginBottom: "24px",
          }}>
            <span style={{ color: BUTTON_PRIMARY, fontWeight: 700, fontSize: "13px", letterSpacing: "0.05em" }}>
              YOU&apos;RE BOOKED
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(28px, 4vw, 46px)",
            fontWeight: 900,
            color: "#FFFBF7",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            margin: "0 0 20px",
          }}>
            Here&apos;s What You&apos;re{" "}
            <span style={{ color: BUTTON_PRIMARY }}>Getting Into</span>
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#94A3B8",
            lineHeight: 1.65,
            margin: "0 auto",
            maxWidth: "560px",
          }}>
            Before your call, read through everything below so we can make the most of our time together.
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div
        className="apply-body"
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "48px 32px 80px",
        }}
      >

        {/* What to expect card */}
        <div className="apply-section-card">
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: BUTTON_PRIMARY,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0F172A", margin: 0 }}>
              What happens on the call
            </h2>
          </div>

          <ul style={{ margin: 0, padding: "0 0 0 20px", lineHeight: 1.85, color: "#334155", fontSize: "16px" }}>
            <li style={{ marginBottom: "10px" }}>We&apos;ll walk through your current lead situation and where the gaps are</li>
            <li style={{ marginBottom: "10px" }}>We&apos;ll show you exactly how FlowQualify runs ads, qualifies leads, and books appointments for your business</li>
            <li style={{ marginBottom: "10px" }}>You&apos;ll see real numbers — cost per lead, close rates, pipeline value</li>
            <li style={{ marginBottom: "10px" }}>If it&apos;s a fit, we&apos;ll outline next steps to get started within the week</li>
            <li>No fluff, no pitch decks — just a direct conversation</li>
          </ul>
        </div>

        {/* Who this is for */}
        <div className="apply-section-card">
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "#0F172A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0F172A", margin: 0 }}>
              This is for you if…
            </h2>
          </div>

          <ul style={{ margin: 0, padding: "0 0 0 20px", lineHeight: 1.85, color: "#334155", fontSize: "16px" }}>
            <li style={{ marginBottom: "10px" }}>You own a kitchen &amp; bath remodeling company doing at least $30K/month</li>
            <li style={{ marginBottom: "10px" }}>You want exclusive, qualified appointments — not shared internet leads</li>
            <li style={{ marginBottom: "10px" }}>You&apos;re tired of chasing unqualified leads and want a predictable pipeline</li>
            <li>You&apos;re ready to scale and have the capacity to handle more jobs</li>
          </ul>
        </div>

        {/* Full System Flow diagram */}
        <div className="apply-section-card" style={{ padding: "32px 32px 40px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0F172A", margin: "0 0 6px" }}>
            Full Overview &amp; Process Breakdown
          </h2>
          <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 32px" }}>
            This is exactly what happens from the moment a homeowner clicks your ad.
          </p>

          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.18em", color: "#94A3B8", textTransform: "uppercase" }}>Full System Flow</span>
          </div>

          <style>{`
            .apl-pill {
              display: flex; align-items: center; gap: 10px;
              border-radius: 999px; padding: 13px 28px;
              font-weight: 700; font-size: 15px;
              width: fit-content; margin: 0 auto; white-space: nowrap;
            }
            .apl-arrow { text-align: center; color: #94A3B8; font-size: 20px; padding: 4px 0; }
            .apl-branch-tag {
              display: inline-flex; align-items: center;
              padding: 8px 14px; border-radius: 999px;
              font-size: 13px; font-weight: 600;
              background: #DCFCE7; border: 1.5px solid #86EFAC; color: #166534;
              white-space: nowrap;
            }
            .apl-crm-box {
              border: 2px dashed #D97706; border-radius: 20px;
              background: #FFFBEB; padding: 14px 28px;
              display: flex; align-items: center; gap: 10px;
              font-weight: 700; font-size: 15px; color: #92400E;
              width: fit-content; margin: 0 auto;
            }
          `}</style>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="apl-pill" style={{ background: "#FECACA", border: "1.5px solid #F87171", color: "#7F1D1D" }}>
              <span style={{ fontSize: "18px" }}>📞</span> Clicks Ad
            </div>
            <div className="apl-arrow">↓</div>
            <div className="apl-pill" style={{ background: "#BFDBFE", border: "1.5px solid #60A5FA", color: "#1E3A8A" }}>
              <span style={{ fontSize: "18px" }}>💬</span> Messenger Opens
            </div>
            <div className="apl-arrow">↓</div>
            <div className="apl-pill" style={{ background: "#FEF9C3", border: "1.5px solid #FDE047", color: "#713F12" }}>
              <span style={{ fontSize: "18px" }}>⚡</span> System Responds
            </div>
            <div className="apl-arrow">↓</div>

            {/* CRM + branches row */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 0, width: "100%" }}>
              <svg width="28" height="284" viewBox="0 0 28 284" fill="none" style={{ flexShrink: 0, marginTop: "6px", opacity: 0.3 }}>
                <path d="M 22 8 C 6 8 6 272 22 272" stroke="#64748B" strokeWidth="2" strokeDasharray="5 4" fill="none" strokeLinecap="round"/>
                <polyline points="16,2 22,8 28,2" stroke="#64748B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div className="apl-crm-box">
                    <span style={{ fontSize: "18px" }}>⚙️</span> Auto Syncs Into CRM
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="24" height="108" viewBox="0 0 24 108" fill="none" style={{ flexShrink: 0 }}>
                      <line x1="2" y1="18" x2="22" y2="18" stroke="#CBD5E1" strokeWidth="1.5"/>
                      <line x1="2" y1="54" x2="22" y2="54" stroke="#CBD5E1" strokeWidth="1.5"/>
                      <line x1="2" y1="90" x2="22" y2="90" stroke="#CBD5E1" strokeWidth="1.5"/>
                      <line x1="2" y1="18" x2="2" y2="90" stroke="#CBD5E1" strokeWidth="1.5"/>
                    </svg>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <span className="apl-branch-tag">Lead Details</span>
                        <span className="apl-branch-tag">Photo Analysis</span>
                      </div>
                      <span className="apl-branch-tag">Estimator Brief</span>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <span className="apl-branch-tag">Auto Follow-Up</span>
                        <span className="apl-branch-tag">Raw Conversation</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="apl-arrow">↓</div>
                <div className="apl-pill" style={{ background: "#FED7AA", border: "1.5px solid #FB923C", color: "#7C2D12" }}>
                  <span style={{ fontSize: "18px" }}>✅</span> Qualifies + Books
                </div>
                <div className="apl-arrow">↓</div>
                <div className="apl-pill" style={{ background: "#BBF7D0", border: "1.5px solid #4ADE80", color: "#14532D" }}>
                  <span style={{ fontSize: "18px" }}>📄</span> Estimator Brief Sent
                </div>
                <div className="apl-arrow">↓</div>
                <div className="apl-pill" style={{ background: "#99F6E4", border: "1.5px solid #2DD4BF", color: "#134E4A" }}>
                  <span style={{ fontSize: "18px" }}>🧍</span> Walk In Prepared
                </div>
              </div>
              <div style={{ width: "28px", flexShrink: 0 }} />
            </div>
          </div>
        </div>

        {/* Bottom reminder */}
        <div style={{
          textAlign: "center",
          marginTop: "16px",
          padding: "28px 24px",
          background: "rgba(180,83,9,0.06)",
          borderRadius: "12px",
          border: "1px solid rgba(180,83,9,0.18)",
        }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", margin: "0 0 6px" }}>
            Your call is confirmed — check your inbox for the calendar invite.
          </p>
          <p style={{ fontSize: "14px", color: "#64748B", margin: 0 }}>
            Questions? Reply to the confirmation email and we&apos;ll get right back to you.
          </p>
        </div>

      </div>
    </div>
  );
}
