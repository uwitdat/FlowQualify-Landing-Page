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

        {/* Main headline: Kitchen & Bath / Remodelers */}
        <h1 style={{
          textAlign: "center",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 900,
          color: "#0F172A",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          margin: "0 0 4px",
        }}>
          KITCHEN & BATH
        </h1>
        <h2 style={{
          textAlign: "center",
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 900,
          color: "#0F172A",
          lineHeight: 1.12,
          letterSpacing: "-0.02em",
          margin: "0 0 0",
        }}>
          REMODELERS
        </h2>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(180, 83, 9, 0.25)", margin: "12px auto 10px", maxWidth: "480px", width: "100%" }} />

        {/* Tagline */}
        <p style={{ textAlign: "center", fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: BUTTON_PRIMARY, margin: "0 0 20px" }}>
          THIS IS FOR YOU
        </p>

        {/* Core question */}
        <h3 style={{
          textAlign: "center",
          fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: 800,
          color: "#0F172A",
          lineHeight: 1.25,
          margin: "0 0 16px",
        }}>
          Want{" "}
          <span style={{ color: BUTTON_PRIMARY }}>15–25</span>{" "}
          exclusive qualified appointments every month?
        </h3>

        {/* Supporting paragraph */}
        <p style={{ textAlign: "center", fontSize: "16px", color: "#64748B", lineHeight: 1.6, margin: "0 auto 24px", maxWidth: "520px" }}>
          Every homeowner is <strong style={{ color: "#0F172A" }}>pre-screened</strong> and <strong style={{ color: "#0F172A" }}>ready to move forward</strong> before you speak to them — not someone who filled out a form and forgot about it.
        </p>

        {/* Benefits list */}
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: "0 auto 24px",
          maxWidth: "400px",
          textAlign: "left",
        }}>
          {[
            { first: "Only", rest: "pay per appointment delivered" },
            { first: "No", rest: "retainers. No monthly fees." },
            { first: "One", rest: "contractor per market area" },
          ].map((item) => (
            <li key={item.first} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", fontSize: "16px", color: "#166534", fontWeight: 600 }}>
              <span style={{ color: "#22c55e", flexShrink: 0 }} aria-hidden>✓</span>
              <span><strong style={{ color: "#166534" }}>{item.first}</strong> {item.rest}</span>
            </li>
          ))}
        </ul>

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
