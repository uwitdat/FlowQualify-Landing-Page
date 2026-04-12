"use client";

import { useRef } from "react";
import Script from "next/script";
import { BUTTON_PRIMARY, BUTTON_PRIMARY_HOVER } from "../config/constants";

export default function OptInPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div style={{
      background: "#ffffff",
      fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
      minHeight: "100vh",
    }}>
      <style>{`
        .opt-in-video-wrap { width: 100%; }
        @media (max-width: 600px) {
          .opt-in-content { padding-top: 60px !important; padding-left: 20px !important; padding-right: 20px !important; }
          .opt-in-cta-btn { width: 100% !important; padding: 16px 24px !important; font-size: 17px !important; }
          .opt-in-sub { font-size: 12px !important; }
          .opt-in-gta { font-size: 11px !important; white-space: nowrap; }
          .opt-in-accent p { font-size: 12.5px !important; }
        }
      `}</style>
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

        {/* Headline */}
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

        {/* GTA sub-line */}
        <p className="opt-in-gta" style={{
          textAlign: "center",
          fontSize: "clamp(11px, 1.3vw, 13px)",
          fontWeight: 600,
          color: "#0F172A",
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          margin: "-10px 0 14px",
        }}>
          For Kitchen &amp; Bath Remodelers in Toronto &amp; the GTA
        </p>

        {/* Subheadline */}
        <h1 style={{
          textAlign: "center",
          fontSize: "clamp(26px, 4vw, 44px)",
          fontWeight: 900,
          color: "#0F172A",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          margin: "0 auto 16px",
          maxWidth: "740px",
        }}>
          Get <span style={{ color: BUTTON_PRIMARY }}>15–25</span> Pre-Qualified Appointments Every Month
        </h1>

        {/* Supporting line */}
        <p className="opt-in-sub" style={{
          textAlign: "center",
          fontSize: "clamp(13px, 1.5vw, 16px)",
          fontWeight: 500,
          color: "#475569",
          lineHeight: 1.65,
          margin: "0 auto 12px",
          maxWidth: "600px",
        }}>
          We generate, qualify, and book appointments directly on your calendar — homeowners pre-screened for <strong>serious project budgets</strong> and <strong>ready-to-start timelines</strong>.
        </p>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid #E2E8F0", margin: "0 auto 16px", maxWidth: "480px" }} />

        {/* Step indicator */}
        <p style={{ textAlign: "center", fontSize: "14px", color: "#64748B", marginBottom: "12px", fontWeight: 500 }}>
          See how the system works (2 min)
        </p>

        {/* Video */}
        <div
          className="opt-in-video-wrap"
          style={{
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid rgba(180, 83, 9, 0.25)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.12)",
            background: "#000",
            marginBottom: "16px",
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

        {/* Accent line below video */}
        <div className="opt-in-accent" style={{ textAlign: "center", margin: "0 auto 16px", maxWidth: "560px" }}>
          <p style={{ fontSize: "clamp(13px, 1.5vw, 15px)", fontWeight: 500, color: "#64748B", margin: "0 0 4px" }}>
            Most agencies send leads.
          </p>
          <p style={{ fontSize: "clamp(13px, 1.5vw, 15px)", fontWeight: 700, color: BUTTON_PRIMARY, textDecoration: "underline", textUnderlineOffset: "3px", margin: 0 }}>
            We built something different.
          </p>
        </div>

        {/* CTA buttons */}
        <div style={{ textAlign: "center", paddingBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
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

          {/* Trust badge */}
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#64748B", marginTop: "4px", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#16a34a", fontSize: "15px" }}>✓</span>
            <span><span style={{ color: "#0F172A" }}>Zero risk.</span> Only pay for appointments that show up.</span>
          </span>
        </div>

      </div>

      {/* iClosed popup widget */}
      <Script src="https://app.iclosed.io/assets/widget.js" strategy="afterInteractive" />
    </div>
  );
}
