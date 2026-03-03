"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OptInPage() {
  const router = useRouter();

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (!e.origin.includes("iclosed.io")) return;
      const data = e.data;
      const str = typeof data === "string" ? data.toLowerCase() : JSON.stringify(data ?? "").toLowerCase();
      if (
        str.includes("booking") ||
        str.includes("scheduled") ||
        str.includes("confirmed") ||
        str.includes("booked") ||
        str.includes("success") ||
        str.includes("complete")
      ) {
        router.push("/thank-you");
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [router]);

  return (
    <>
      <Script
        src="https://app.iclosed.io/assets/widget.js"
        strategy="afterInteractive"
      />
      <div style={{
        height: "100vh",
        background: "#f9f0d9",
        fontFamily: "system-ui, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
        <div style={{
          maxWidth: "960px",
          width: "100%",
          margin: "0 auto",
          padding: "28px 32px 24px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxSizing: "border-box",
        }}>

          {/* Attention line */}
          <p style={{ textAlign: "center", fontSize: "18px", fontWeight: 700, color: "rgba(34,21,13,0.55)", marginBottom: "10px" }}>
            Attention: Kitchen &amp; Bathroom Remodelers
          </p>

          {/* Main headline */}
          <h1 style={{
            textAlign: "center",
            fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 900,
            color: "#22150d",
            lineHeight: 1.12,
            letterSpacing: "-0.025em",
            margin: "0 0 16px",
          }}>
            Get{" "}
            <span style={{
              background: "#FFFF8B",
              padding: "0 6px",
              borderRadius: "4px",
            }}>
              12–25 Qualified Appointments
            </span>{" "}
            Every Month — With Homeowners Ready to Start Their Project.
          </h1>

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(34,21,13,0.12)", margin: "0 auto 14px", maxWidth: "560px", width: "100%" }} />

          {/* Step indicator */}
          <p style={{ textAlign: "center", fontSize: "13px", color: "rgba(34,21,13,0.45)", marginBottom: "14px", fontWeight: 500 }}>
            <strong style={{ color: "#22150d" }}>Step 1 of 2:</strong> Watch the Short Video Below
          </p>

          {/* Video */}
          <div style={{
            flex: 1,
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(34,21,13,0.14)",
            boxShadow: "0 8px 48px rgba(34,21,13,0.12)",
            background: "#22150d",
            marginBottom: "20px",
            minHeight: 0,
          }}>
            <video
              src={process.env.NEXT_PUBLIC_VIDEO_MAIN || "/videos/MainVideo.mp4"}
              style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              aria-label="FlowQualify overview and how it works"
            />
          </div>

          {/* CTA button */}
          <div style={{ textAlign: "center", paddingBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <button
              data-iclosed-link="https://app.iclosed.io/e/FlowQualify/15-min-phone-call-free-project-generation-call"
              data-embed-type="popup"
              style={{
                display: "inline-block",
                background: "#22150d",
                color: "#f9f0d9",
                fontSize: "18px",
                fontWeight: 800,
                padding: "18px 64px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "#FFFF8B";
                (e.currentTarget as HTMLButtonElement).style.color = "#22150d";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "#22150d";
                (e.currentTarget as HTMLButtonElement).style.color = "#f9f0d9";
              }}
            >
              Apply To Work With Us →
            </button>
            <a href="/thank-you" style={{ fontSize: "12px", color: "rgba(34,21,13,0.4)", textDecoration: "underline", cursor: "pointer" }}>
              Already booked? View confirmation →
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
