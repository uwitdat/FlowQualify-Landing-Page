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
        .opt-in-video-wrap { height: 520px; }
        @media (max-width: 600px) {
          .opt-in-content { padding-top: 80px !important; padding-left: 20px !important; padding-right: 20px !important; }
          .opt-in-video-wrap { height: 320px; }
        }
      `}</style>
      <div
        className="opt-in-content"
        style={{
          maxWidth: "780px",
          width: "100%",
          margin: "0 auto",
          padding: "64px 32px 48px",
          boxSizing: "border-box",
        }}
      >

        {/* Headline */}
        <p style={{
          textAlign: "center",
          fontSize: "clamp(18px, 2.5vw, 26px)",
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

        {/* Subheadline */}
        <h1 style={{
          textAlign: "center",
          fontSize: "clamp(28px, 4.5vw, 48px)",
          fontWeight: 900,
          color: "#0F172A",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          margin: "0 auto 16px",
          maxWidth: "680px",
        }}>
          Get <span style={{ color: BUTTON_PRIMARY }}>15–25</span> Qualified Appointments Every Month
        </h1>

        {/* Supporting line */}
        <p style={{
          textAlign: "center",
          fontSize: "clamp(16px, 2vw, 20px)",
          fontWeight: 500,
          color: "#475569",
          lineHeight: 1.5,
          margin: "0 auto 12px",
          maxWidth: "520px",
        }}>
          No contracts. No monthly fees. No chasing cold leads.
        </p>

        {/* Accent line */}
        <p style={{
          textAlign: "center",
          fontSize: "clamp(15px, 1.8vw, 18px)",
          fontWeight: 700,
          color: "#0F172A",
          margin: "0 auto 28px",
          maxWidth: "520px",
        }}>
          Most agencies hand you a lead and leave you to figure it out.{" "}
          <span style={{ color: BUTTON_PRIMARY, textDecoration: "underline", textUnderlineOffset: "3px" }}>We built something different.</span>
        </p>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid #E2E8F0", margin: "0 auto 20px", maxWidth: "480px" }} />

        {/* Step indicator */}
        <p style={{ textAlign: "center", fontSize: "14px", color: "#64748B", marginBottom: "16px", fontWeight: 500 }}>
          <strong style={{ color: "#0F172A" }}>Step 1 of 2:</strong> Watch the Video Below
        </p>

        {/* Video — fixed height so it's a good size; page scrolls normally */}
        <div
          className="opt-in-video-wrap"
          style={{
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid rgba(180, 83, 9, 0.25)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.12)",
            background: "#000",
            marginBottom: "24px",
          }}
        >
          <video
            ref={videoRef}
            src={process.env.NEXT_PUBLIC_VIDEO_MAIN || "/videos/FlowMainVideo.mp4"}
            style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
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

        {/* CTA buttons */}
        <div style={{ textAlign: "center", paddingBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <button
            data-iclosed-link="https://app.iclosed.io/e/FlowQualify/15-min-phone-call-free-project-generation-call"
            data-embed-type="popup"
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
            Apply To Work With Us!
          </button>
        </div>

      </div>

      {/* iClosed popup widget */}
      <Script src="https://app.iclosed.io/assets/widget.js" strategy="afterInteractive" />
    </div>
  );
}
