"use client";

import Script from "next/script";

const TYPEFORM_ID = "01KJE6PMXSA1T38ZM7TYSQJ0AX";

export default function ApplyPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f9f0d9",
      fontFamily: "system-ui, -apple-system, sans-serif",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header text */}
      <div style={{
        maxWidth: "760px",
        width: "100%",
        margin: "0 auto",
        padding: "24px 32px 18px",
        textAlign: "center",
      }}>
        <h1 style={{
          fontSize: "clamp(18px, 2.8vw, 26px)",
          fontWeight: 700,
          color: "#22150d",
          lineHeight: 1.35,
          margin: "0 0 12px",
        }}>
          <strong>Step 2:</strong> Fill Out The Application Below. Once
          Complete, You Will Book Your Strategy Call On The Next Step…
        </h1>

        <p style={{
          fontSize: "15px",
          color: "rgba(34,21,13,0.55)",
          marginBottom: "18px",
          lineHeight: 1.6,
        }}>
          <strong style={{ color: "#22150d" }}>NOTE:</strong> This is{" "}
          <strong style={{ textDecoration: "underline", color: "#22150d" }}>ONLY</strong> for
          Kitchen &amp; Bathroom Remodeling business owners. If you do not own a
          remodeling company, please leave this page.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid rgba(34,21,13,0.12)", margin: 0 }} />
      </div>

      {/* Typeform */}
      <div style={{ flex: 1, width: "100%", minHeight: "calc(100vh - 160px)" }}>
        <div
          data-tf-live={TYPEFORM_ID}
          style={{ width: "100%", height: "100%", minHeight: "calc(100vh - 160px)" }}
        />
      </div>

      <Script src="//embed.typeform.com/next/embed.js" strategy="afterInteractive" />
    </div>
  );
}
