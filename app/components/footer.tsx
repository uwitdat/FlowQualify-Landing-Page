import Link from "next/link";
import { COMPANY_NAME } from "../config/constants";

export default function Footer() {
  return (
    <footer style={{ background: "#22150d", color: "#f9f0d9", padding: "56px 24px 40px" }}>
      <style>{`
        .oh-footer-inner {
          max-width: 1200px; margin: 0 auto;
        }
        .oh-footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(249,240,217,0.12);
          margin-bottom: 32px;
        }
        .oh-footer-brand {
          font-size: 18px; font-weight: 900; color: #f9f0d9;
          letter-spacing: -0.02em; margin-bottom: 12px;
        }
        .oh-footer-tagline {
          font-size: 13px; color: rgba(249,240,217,0.5);
          line-height: 1.6; max-width: 240px;
        }
        .oh-footer-col-title {
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(249,240,217,0.4);
          margin-bottom: 16px;
        }
        .oh-footer-link {
          display: block; font-size: 14px; font-weight: 500;
          color: rgba(249,240,217,0.65); text-decoration: none;
          margin-bottom: 10px; transition: color 0.15s;
        }
        .oh-footer-link:hover { color: #FFFF8B; }
        .oh-footer-bottom {
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 12px;
        }
        .oh-footer-copy {
          font-size: 12px; color: rgba(249,240,217,0.35); margin: 0;
        }
        .oh-footer-legal {
          display: flex; gap: 20px;
        }
        .oh-footer-legal a {
          font-size: 12px; color: rgba(249,240,217,0.4);
          text-decoration: none; transition: color 0.15s;
        }
        .oh-footer-legal a:hover { color: #FFFF8B; }
        @media (max-width: 640px) {
          .oh-footer-top { grid-template-columns: 1fr; gap: 32px; }
          .oh-footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="oh-footer-inner">
        <div className="oh-footer-top">
          {/* Brand col */}
          <div>
            <div className="oh-footer-brand">{COMPANY_NAME}</div>
            <p className="oh-footer-tagline">
              AI-powered lead qualification for kitchen &amp; bathroom remodelers.
              Only qualified appointments reach your calendar.
            </p>
          </div>

          {/* Product col */}
          <div>
            <div className="oh-footer-col-title">Product</div>
            <Link href="/opt-in" className="oh-footer-link">Get Started</Link>
            <a href="#how-it-works" className="oh-footer-link">How It Works</a>
            <a href="#results" className="oh-footer-link">Results</a>
            <a href="#faq" className="oh-footer-link">FAQ</a>
          </div>

          {/* Legal col */}
          <div>
            <div className="oh-footer-col-title">Legal</div>
            <Link href="/privacy-policy" className="oh-footer-link">Privacy Policy</Link>
            <Link href="/terms-of-service" className="oh-footer-link">Terms of Service</Link>
            <Link href="/data-deletion" className="oh-footer-link">Data Deletion</Link>
          </div>
        </div>

        <div className="oh-footer-bottom">
          <p className="oh-footer-copy">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}, Inc. All rights reserved.
          </p>
          <div className="oh-footer-legal">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
