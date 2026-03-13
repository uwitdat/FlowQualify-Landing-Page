"use client";

import { useRef } from "react";
import Script from "next/script";
import { BUTTON_PRIMARY, BUTTON_PRIMARY_HOVER } from "../config/constants";

export default function OptInPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div style={{
      background: "#ffffff",
      fontFamily: "system-ui, -apple-system, sans-serif",
      minHeight: "100vh",
    }}>
      <style>{`
        .opt-in-video-wrap { height: 520px; }
        @media (max-width: 600px) {
          .opt-in-content { padding-top: 96px !important; padding-left: 20px !important; padding-right: 20px !important; }
          .opt-in-video-wrap { height: 320px; }
        }
      `}</style>
      <div
        className="opt-in-content"
        style={{
          maxWidth: "960px",
          width: "100%",
          margin: "0 auto",
          padding: "64px 32px 48px",
          boxSizing: "border-box",
        }}
      >

        {/* Headline */}
        <h1 style={{
          textAlign: "center",
          fontSize: "clamp(26px, 4vw, 38px)",
          fontWeight: 900,
          color: "#0F172A",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          margin: "0 0 20px",
        }}>
          Attention: Kitchen & Bath Remodelers
        </h1>

        {/* Subheadline */}
        <h2 style={{
          textAlign: "center",
          fontSize: "clamp(20px, 2.8vw, 28px)",
          fontWeight: 800,
          color: "#0F172A",
          lineHeight: 1.3,
          margin: "0 auto 20px",
          maxWidth: "640px",
        }}>
          Get <span style={{ color: BUTTON_PRIMARY }}>15–25</span> Qualified Appointments Every Month — No Chasing. No Monthly Fees. No Contracts
        </h2>

        {/* Paragraph */}
        <p style={{ textAlign: "center", fontSize: "16px", color: "#64748B", lineHeight: 1.6, margin: "0 auto 16px", maxWidth: "560px" }}>
          Every homeowner is qualified and warmed up before they ever reach you — you walk into every call with their scope, budget, timeline, photos & more already in hand.
        </p>

        {/* Closing line */}
        <p style={{ textAlign: "center", fontSize: "15px", color: "#64748B", lineHeight: 1.6, margin: "0 auto 28px", maxWidth: "540px" }}>
          Most marketing agencies hand you a lead and leave you to figure out the rest. We built something different. See how it works below.
        </p>

        {/* Step indicator */}
        <p style={{ textAlign: "center", fontSize: "14px", color: "#64748B", marginBottom: "14px", fontWeight: 500 }}>
          <strong style={{ color: "#0F172A" }}>Step 1 of 2:</strong> Watch the Short Video Below
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
            src={process.env.NEXT_PUBLIC_VIDEO_MAIN || "/videos/MainVideo.mp4"}
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
