"use client";

// TODO: Replace CalendarPlaceholder with your real Calendly inline embed.
// In Calendly: Event Types → Share → "Add to website" → Inline Embed → copy snippet.

export default function BookPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f9f0d9",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 32px 96px",
        textAlign: "center",
      }}>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(26px, 4vw, 46px)",
          fontWeight: 900,
          color: "#22150d",
          lineHeight: 1.2,
          margin: "0 0 20px",
          letterSpacing: "-0.025em",
        }}>
          One last step — pick a time and{" "}
          <span style={{ background: "#FFFF8B", padding: "0 6px", borderRadius: "4px" }}>
            let&apos;s talk
          </span>
        </h1>

        {/* Subhead */}
        <p style={{
          fontSize: "clamp(15px, 2vw, 19px)",
          color: "rgba(34,21,13,0.6)",
          lineHeight: 1.65,
          margin: "0 0 40px",
          maxWidth: "560px",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          Pick a date &amp; time below. We&apos;ll walk you through exactly how FlowQualify fills your calendar with qualified remodeling appointments.
        </p>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid rgba(34,21,13,0.12)", margin: "0 0 40px" }} />

        {/* Calendar embed placeholder */}
        <CalendarPlaceholder />
      </div>
    </div>
  );
}

function CalendarPlaceholder() {
  return (
    <div style={{
      border: "1.5px dashed rgba(34,21,13,0.2)",
      borderRadius: "14px",
      padding: "64px 32px",
      background: "#ede4cc",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "14px",
    }}>
      <svg
        width="48" height="48" viewBox="0 0 24 24"
        fill="none" stroke="rgba(34,21,13,0.3)"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
      <p style={{ fontSize: "16px", fontWeight: 700, color: "#22150d", margin: 0 }}>
        Calendar Booking Widget Goes Here
      </p>
      <p style={{ fontSize: "13px", color: "rgba(34,21,13,0.45)", margin: 0, maxWidth: "440px", lineHeight: 1.6 }}>
        Replace this block with your Calendly inline embed.
        In Calendly: Event Types → Share → &ldquo;Add to website&rdquo; → Inline Embed → copy the snippet.
      </p>
    </div>
  );
}
