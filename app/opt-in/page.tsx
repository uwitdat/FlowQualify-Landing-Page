"use client";

import { useRef } from "react";
import Script from "next/script";
import { BUTTON_PRIMARY, BUTTON_PRIMARY_HOVER, PAGE_BACKGROUND } from "../config/constants";

export default function OptInPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div style={{
      background: PAGE_BACKGROUND,
      fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
      minHeight: "100vh",
    }}>
      <style>{`
        .opt-in-video-wrap { width: 100%; }
        .opt-in-h1 { text-wrap: balance; }
        .opt-in-price { text-wrap: balance; }

        .proof-section {
          background: #ffffff;
          border-top: 1px solid #E2E8F0;
          padding: 56px 32px 56px;
          width: 100%;
          box-sizing: border-box;
        }
        .proof-inner {
          max-width: 640px;
          margin: 0 auto;
        }
        .proof-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin: 0 auto;
        }
        .proof-card-img {
          display: block;
          width: 100%;
          height: auto;
        }

        .sticky-mobile-cta { display: none; }

        @media (max-width: 640px) {
          .opt-in-content { padding-top: 60px !important; padding-left: 20px !important; padding-right: 20px !important; padding-bottom: 100px !important; }
          .opt-in-h1 { font-size: 22px !important; margin-bottom: 14px !important; }
          .opt-in-price { font-size: 20px !important; margin-bottom: 14px !important; }
          .opt-in-cta-btn { width: 100% !important; padding: 16px 24px !important; font-size: 17px !important; }
          .proof-section { padding: 44px 20px 44px; }
          .proof-grid { grid-template-columns: 1fr; max-width: 400px; }
          .sticky-mobile-cta {
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background: #ffffff;
            border-top: 1px solid #E2E8F0;
            padding: 12px 20px 16px;
            box-shadow: 0 -4px 24px rgba(0,0,0,0.1);
          }
        }
      `}</style>

      {/* ── Light section: headline + video + first CTA ── */}
      <div
        className="opt-in-content"
        style={{
          maxWidth: "780px",
          width: "100%",
          margin: "0 auto",
          padding: "48px 32px 40px",
          boxSizing: "border-box",
        }}
      >
        {/* Attention */}
        <p style={{
          textAlign: "center",
          fontSize: "clamp(20px, 2.8vw, 28px)",
          fontWeight: 900,
          color: "#0F172A",
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          margin: "0 0 16px",
          animation: "pulse-attention 2s ease-in-out infinite",
        }}>
          <style>{`
            @keyframes pulse-attention {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.85; transform: scale(1.02); }
            }
          `}</style>
          🚨 Attention: Kitchen &amp; Bath Remodelers
        </p>

        {/* H1 */}
        <h1 className="opt-in-h1" style={{
          textAlign: "center",
          fontSize: "clamp(26px, 4vw, 44px)",
          fontWeight: 900,
          color: "#0F172A",
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          margin: "0 auto 10px",
          maxWidth: "740px",
        }}>
          Get <span style={{ textDecoration: "underline" }}>Pre-Qualified</span> Kitchen&nbsp;&amp;&nbsp;Bath Appointments Delivered Directly to Your Phone.
        </h1>

        {/* Price */}
        <p className="opt-in-price" style={{
          textAlign: "center",
          fontSize: "clamp(22px, 3.5vw, 38px)",
          fontWeight: 900,
          color: "#0F172A",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          margin: "0 0 8px",
        }}>
          Only <span style={{ color: "#16A34A" }}>$500/Month.</span>
        </p>

        {/* Exclusivity whisper */}
        <p style={{
          textAlign: "center",
          fontSize: "13px",
          fontStyle: "italic",
          fontWeight: 500,
          color: "#64748B",
          margin: "0 auto 14px",
          letterSpacing: "0.01em",
        }}>
          Your appointments are exclusive — never shared with another contractor in your market.
        </p>

        {/* Mechanism line */}
        <p style={{
          textAlign: "center",
          fontSize: "15px",
          fontWeight: 600,
          color: "#334155",
          margin: "0 auto 22px",
          lineHeight: 1.6,
          maxWidth: "500px",
          letterSpacing: "-0.01em",
        }}>
          We handle the ads. We do the qualifying.{" "}
          <span style={{ color: BUTTON_PRIMARY, fontWeight: 700 }}>You just close.</span>
        </p>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid #E2E8F0", margin: "0 auto 16px", maxWidth: "480px" }} />

        {/* Video intro */}
        <p style={{ textAlign: "center", fontSize: "14px", color: "#334155", marginBottom: "12px", fontWeight: 600 }}>
          <span style={{ color: BUTTON_PRIMARY, textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: 700 }}>We built something different</span> — see how it works (2 min)
        </p>

        {/* Video */}
        <div
          className="opt-in-video-wrap"
          style={{
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid rgba(79, 70, 229, 0.25)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.12)",
            background: "#000",
            marginBottom: "24px",
          }}
        >
          <video
            ref={videoRef}
            src={process.env.NEXT_PUBLIC_VIDEO_MAIN || "/videos/FlowMainVideo.mp4"}
            style={{ display: "block", width: "100%", height: "auto" }}
            controls
            autoPlay
            playsInline
            preload="metadata"
            aria-label="FlowQualify overview and how it works"
            onLoadedMetadata={() => {
              if (videoRef.current) videoRef.current.volume = 1;
            }}
          />
        </div>

        {/* First CTA */}
        <div style={{ textAlign: "center", paddingBottom: "8px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <button
            data-iclosed-link="https://app.iclosed.io/e/FlowQualify/strategy-call-see-if-flowqualify-is-a-fit"
            data-embed-type="popup"
            className="opt-in-cta-btn"
            style={{
              display: "inline-block",
              background: BUTTON_PRIMARY,
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 800,
              padding: "18px 64px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.background = BUTTON_PRIMARY_HOVER;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.background = BUTTON_PRIMARY;
            }}
          >
            Book Your Free Strategy Call
          </button>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#64748B", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#16a34a", fontSize: "15px" }}>✓</span>
            <span><span style={{ color: "#0F172A" }}>20-min call.</span> If we can't show you exactly how it works, don't sign up.</span>
          </span>
        </div>
      </div>

      {/* ── Proof section: white bg, full width ── */}
      <div className="proof-section">
        <div className="proof-inner">

          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "32px", height: "1px", background: "#16A34A", opacity: 0.5 }} />
              <span style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#16A34A",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}>
                Partner Results
              </span>
              <div style={{ width: "32px", height: "1px", background: "#16A34A", opacity: 0.5 }} />
            </div>
          </div>

          {/* Cards */}
          <div className="proof-grid">
            {[
              {
                headline: <>Nam Closed 3 Jobs Worth <span style={{ color: "#16A34A" }}>$52,000</span> — In Just <span style={{ color: BUTTON_PRIMARY }}>8 Weeks</span></>,
                img: "/images/nam.png",
                alt: "Nam FlowQualify results call",
                name: "Nam",
                trade: "Kitchen & Bath Remodeler",
              },
              {
                headline: <>Trevor Closed 2 Kitchen Jobs Worth <span style={{ color: "#16A34A" }}>$47,000</span> — In Just <span style={{ color: BUTTON_PRIMARY }}>6 Weeks</span></>,
                img: "/images/tevz.png",
                alt: "Trevor FlowQualify results call",
                name: "Trevor",
                trade: "Kitchen Remodeler",
              },
              {
                headline: <>Konn Closed 3 Bath Jobs Worth <span style={{ color: "#16A34A" }}>$41,000</span> — In Just <span style={{ color: BUTTON_PRIMARY }}>6 Weeks</span></>,
                img: "/images/konnb.png",
                alt: "Konn FlowQualify results call",
                name: "Konn",
                trade: "Bath Remodeler",
              },
              {
                headline: <>Marcus Closed 2 Jobs Worth <span style={{ color: "#16A34A" }}>$44,000</span> — In Just <span style={{ color: BUTTON_PRIMARY }}>7 Weeks</span></>,
                img: "/images/marcus.png",
                alt: "Marcus FlowQualify results call",
                name: "Marcus",
                trade: "Kitchen & Bath Remodeler",
              },
            ].map((card) => (
              <div key={card.name} style={{
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 2px 4px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.08)",
              }}>
                {/* Card header */}
                <div style={{ padding: "20px 18px 14px", textAlign: "center" }}>
                  <p style={{
                    fontSize: "clamp(14px, 1.6vw, 17px)",
                    fontWeight: 800,
                    color: "#0F172A",
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                    margin: 0,
                    textWrap: "balance",
                  } as React.CSSProperties}>
                    {card.headline}
                  </p>
                </div>

                <img
                  src={card.img}
                  alt={card.alt}
                  className="proof-card-img"
                />

                {/* Nameplate */}
                <div style={{
                  padding: "11px 16px",
                  background: "#F8FAFC",
                  borderTop: "1px solid #E2E8F0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#16A34A", display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.01em" }}>{card.name}</span>
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#64748B" }}>{card.trade}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Second CTA */}
          <div style={{ textAlign: "center", paddingTop: "48px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <p style={{
              fontSize: "clamp(15px, 2vw, 19px)",
              fontWeight: 700,
              color: "#0F172A",
              margin: "0 0 4px",
              letterSpacing: "-0.02em",
            }}>
              Ready to see if your market is available?
            </p>
            <button
              data-iclosed-link="https://app.iclosed.io/e/FlowQualify/strategy-call-see-if-flowqualify-is-a-fit"
              data-embed-type="popup"
              className="opt-in-cta-btn"
              style={{
                display: "inline-block",
                background: BUTTON_PRIMARY,
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: 800,
                padding: "18px 64px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.15s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.background = BUTTON_PRIMARY_HOVER;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.background = BUTTON_PRIMARY;
              }}
            >
              Book Your Free Strategy Call
            </button>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#64748B", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#16a34a", fontSize: "15px" }}>✓</span>
              <span><span style={{ color: "#0F172A" }}>We only work with one contractor per market</span> — check if yours is open.</span>
            </span>
          </div>

        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="sticky-mobile-cta">
        <button
          data-iclosed-link="https://app.iclosed.io/e/FlowQualify/strategy-call-see-if-flowqualify-is-a-fit"
          data-embed-type="popup"
          style={{
            display: "block",
            width: "100%",
            background: BUTTON_PRIMARY,
            color: "#ffffff",
            fontSize: "17px",
            fontWeight: 800,
            padding: "15px 24px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Book Your Free Strategy Call
        </button>
      </div>

      {/* iClosed popup widget */}
      <Script src="https://app.iclosed.io/assets/widget.js" strategy="afterInteractive" />
    </div>
  );
}
