"use client";

// TODO: Replace the placeholder below with your real Calendly (or Cal.com) inline embed.
// Calendly inline embed example:
//   1. Go to Calendly → Event Types → Share → Add to website → Inline embed
//   2. Copy the <div data-url="..."> snippet and the <script> tag
//   3. Replace the CalendarPlaceholder component below with that embed

export default function BookPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "60px 32px 96px",
          textAlign: "center",
        }}
      >
        {/* Main headline */}
        <h1
          style={{
            fontSize: "clamp(26px, 4vw, 46px)",
            fontWeight: 700,
            color: "#0F172A",
            lineHeight: 1.25,
            margin: "0 0 20px",
            letterSpacing: "-0.01em",
          }}
        >
          See Exactly How We Get You{" "}
          <strong style={{ fontWeight: 900 }}>12–25 Qualified</strong>{" "}
          Kitchen &amp; Bath Appointments{" "}
          <em style={{ fontStyle: "italic" }}>
            Booked Directly On Your Calendar Every Month…
          </em>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 19px)",
            color: "#374151",
            lineHeight: 1.6,
            margin: "0 0 40px",
          }}
        >
          Pick A Date &amp; Time Below To Speak With Our Team And Get Your
          Pipeline Running On Autopilot
        </p>

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #E2E8F0",
            margin: "0 0 40px",
          }}
        />

        {/* ── Calendar embed ── */}
        {/* Replace this placeholder with your Calendly / Cal.com inline embed */}
        <CalendarPlaceholder />
      </div>
    </div>
  );
}

function CalendarPlaceholder() {
  return (
    <div
      style={{
        border: "1.5px dashed #CBD5E1",
        borderRadius: "16px",
        padding: "64px 32px",
        background: "#F8FAFC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "14px",
        color: "#64748B",
      }}
    >
      {/* Calendar icon */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
      <p style={{ fontSize: "16px", fontWeight: 600, color: "#475569", margin: 0 }}>
        Calendar Booking Widget Goes Here
      </p>
      <p style={{ fontSize: "13px", color: "#94A3B8", margin: 0, maxWidth: "440px", lineHeight: 1.6 }}>
        Replace this block with your Calendly or Cal.com inline embed code.
        In Calendly: Event Types → Share → &ldquo;Add to website&rdquo; → Inline Embed → copy the snippet.
      </p>
    </div>
  );
}
