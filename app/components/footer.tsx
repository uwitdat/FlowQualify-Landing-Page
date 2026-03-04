import Link from "next/link";
import { COMPANY_NAME, BUTTON_PRIMARY } from "../config/constants";

const METRICS = [
  { value: "50+", label: "Remodelers trust FlowQualify" },
  { value: "12-25", label: "Qualified appointments per month" },
  { value: "<90s", label: "Average response time" },
  { value: "0", label: "Monthly retainer — pay per appointment" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          padding: 48px 24px 40px;
          background: #fff;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          box-sizing: border-box;
        }
        .footer-metric {
          text-align: center;
        }
        .footer-metric-value {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: ${BUTTON_PRIMARY};
          line-height: 1.2;
        }
        .footer-metric-label {
          font-size: 14px;
          font-weight: 500;
          color: #64748B;
          margin-top: 6px;
          line-height: 1.4;
        }
        @media (max-width: 720px) {
          .footer-metrics { grid-template-columns: repeat(2, 1fr); gap: 20px; padding: 40px 20px 32px; }
          .footer-metric-value { font-size: 24px; }
          .footer-metric-label { font-size: 13px; }
        }
        .footer-link {
          font-size: 13px; font-weight: 500; color: #64748B;
          text-decoration: none; transition: color 0.15s;
        }
        .footer-link:hover { color: ${BUTTON_PRIMARY}; }
      `}</style>

      {/* Metrics panel — above footer */}
      <div className="footer-metrics">
        {METRICS.map((m) => (
          <div key={m.label} className="footer-metric">
            <div className="footer-metric-value">{m.value}</div>
            <div className="footer-metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      <footer style={{ background: "#fff", padding: "40px 24px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>

        {/* Brand */}
        <div style={{ fontSize: "15px", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em" }}>
          Flow<span style={{ color: BUTTON_PRIMARY }}>Qualify</span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <span style={{ color: "#E2E8F0", fontSize: "12px" }}>·</span>
          <Link href="/terms-of-service" className="footer-link">Terms of Service</Link>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "12px", color: "#CBD5E1", margin: 0 }}>
          &copy; {new Date().getFullYear()} {COMPANY_NAME}, Inc. All rights reserved.
        </p>

      </div>
    </footer>
    </>
  );
}
