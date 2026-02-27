"use client";

export default function OptInPage() {
  return (
    <div style={{
      height: "100vh",
      background: "#ffffff",
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
        <p style={{ textAlign: "center", fontSize: "20px", fontWeight: 700, color: "#0F172A", marginBottom: "10px" }}>
          Attention: Kitchen &amp; Bathroom Remodelers
        </p>

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
          <span style={{ textDecoration: "underline", textDecorationThickness: "4px" }}>
            12–25 Qualified Appointments
          </span>{" "}
          Every Month — With Homeowners Ready to Start Their Project.
        </h1>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #E2E8F0", margin: "0 auto 14px", maxWidth: "560px", width: "100%" }} />

        {/* Step indicator */}
        <p style={{ textAlign: "center", fontSize: "14px", color: "#64748B", marginBottom: "14px", fontWeight: 500 }}>
          <strong style={{ color: "#0F172A" }}>Step 1 of 2:</strong> Watch the Short Video Below
        </p>

        {/* Video — flex-grows to fill remaining space */}
        <div style={{
          flex: 1,
          borderRadius: "14px",
          overflow: "hidden",
          border: "1px solid #E2E8F0",
          boxShadow: "0 8px 48px rgba(0,0,0,0.12)",
          background: "#000",
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
        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
          <a
            href="/apply"
            style={{
              display: "inline-block",
              background: "#C9A84C",
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 800,
              padding: "18px 64px",
              borderRadius: "10px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 36px rgba(201,168,76,0.50)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(201,168,76,0.35)";
            }}
          >
            Apply To Work With Us!
          </a>
        </div>

      </div>
    </div>
  );
}
