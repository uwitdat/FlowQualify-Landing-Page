"use client";

import { useRef } from "react";
import { BUTTON_PRIMARY, BUTTON_PRIMARY_HOVER } from "../config/constants";

export default function OptInPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div style={{
      height: "100vh",
      background: "#ffffff",
      fontFamily: "system-ui, -apple-system, sans-serif",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      <style>{`
        @media (max-width: 600px) {
          .opt-in-content { padding-top: 96px !important; padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
      <div
        className="opt-in-content"
        style={{
          maxWidth: "960px",
          width: "100%",
          margin: "0 auto",
          padding: "64px 32px 24px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxSizing: "border-box",
        }}
      >

        {/* Main headline */}
        <h1 style={{
          textAlign: "center",
          fontSize: "clamp(26px, 4vw, 44px)",
          fontWeight: 900,
          color: "#0F172A",
          lineHeight: 1.12,
          letterSpacing: "-0.02em",
          margin: "0 0 16px",
        }}>
          Get{" "}
          <span style={{ textDecoration: "underline", textDecorationThickness: "4px", textDecorationColor: BUTTON_PRIMARY }}>
            12–25 Qualified Appointments
          </span>{" "}
          Every Month — With Homeowners Ready to Start Their Project.
        </h1>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(180, 83, 9, 0.2)", margin: "0 auto 14px", maxWidth: "560px", width: "100%" }} />

        {/* Step indicator */}
        <p style={{ textAlign: "center", fontSize: "14px", color: "#64748B", marginBottom: "14px", fontWeight: 500 }}>
          <strong style={{ color: "#0F172A" }}>Step 1 of 2:</strong> Watch the Short Video Below
        </p>

        {/* Video — flex-grows to fill remaining space */}
        <div style={{
          flex: 1,
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid rgba(180, 83, 9, 0.25)",
          boxShadow: "0 8px 48px rgba(0,0,0,0.12)",
          background: "#000",
          marginBottom: "20px",
          minHeight: 0,
        }}>
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

        {/* CTA button */}
        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
          <a
            href="/apply"
            style={{
              display: "inline-block",
              background: BUTTON_PRIMARY,
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 800,
              padding: "18px 64px",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.background = BUTTON_PRIMARY_HOVER;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.background = BUTTON_PRIMARY;
            }}
          >
            Apply To Work With Us!
          </a>
        </div>

      </div>
    </div>
  );
}
