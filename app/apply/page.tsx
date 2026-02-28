"use client";

import Script from "next/script";
import { BUTTON_PRIMARY } from "../config/constants";

const TYPEFORM_ID = "01KJE6PMXSA1T38ZM7TYSQJ0AX";

export default function ApplyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        fontFamily: "system-ui, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @media (max-width: 600px) {
          .apply-header { padding-top: 96px !important; padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
      {/* Header text */}
      <div
        className="apply-header"
        style={{
          maxWidth: "760px",
          width: "100%",
          margin: "0 auto",
          padding: "64px 32px 18px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(18px, 2.8vw, 26px)",
            fontWeight: 700,
            color: "#0F172A",
            lineHeight: 1.35,
            margin: "0 0 12px",
          }}
        >
          <strong style={{ color: BUTTON_PRIMARY }}>Step 2:</strong> Fill Out The Application Below. Once
          Complete, You Will Book Your Strategy Call On The Next Step…
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#0F172A",
            marginBottom: "18px",
            lineHeight: 1.6,
          }}
        >
          <strong>NOTE:</strong> This is{" "}
          <strong style={{ textDecoration: "underline" }}>ONLY</strong> for
          Kitchen &amp; Bathroom Remodeling business owners. If you do not own a
          remodeling company, please leave this page.
        </p>
      </div>

      {/* Typeform — full width, large enough for Calendly slide */}
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
