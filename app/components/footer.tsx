import Link from "next/link";
import { COMPANY_NAME, BUTTON_PRIMARY } from "../config/constants";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          font-size: 13px; font-weight: 500; color: #64748B;
          text-decoration: none; transition: color 0.15s;
        }
        .footer-link:hover { color: ${BUTTON_PRIMARY}; }
      `}</style>

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
