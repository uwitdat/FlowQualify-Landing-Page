"use client";

import { BUTTON_PRIMARY, BUTTON_PRIMARY_HOVER, PAGE_BACKGROUND } from "../config/constants";

export default function DoorCta() {
  return (
    <>
      <style>{`
        .door-cta-section {
          background: ${PAGE_BACKGROUND};
          padding: 80px 24px 96px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }
        .door-cta-visual {
          position: relative;
        }
        @keyframes door-cta-flow {
          0% { opacity: 0; }
          100% { opacity: 0.6; }
        }
        .door-cta-pipeline-path {
          animation: door-cta-flow 0.8s ease-out forwards;
        }
        .door-cta-section .door-cta-headline {
          position: relative;
          z-index: 1;
        }
        .door-cta-headline {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 900;
          color: #111827;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 32px 0 28px;
        }
        .door-cta-sub {
          font-size: 17px;
          color: #64748B;
          line-height: 1.6;
          margin: 0 0 36px;
          max-width: 420px;
        }
        .door-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: ${BUTTON_PRIMARY};
          color: #ffffff;
          font-size: 15px;
          font-weight: 800;
          padding: 16px 34px;
          border-radius: 14px;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: transform 0.18s ease, background 0.18s ease;
          white-space: nowrap;
        }
        .door-cta-btn:hover {
          background: ${BUTTON_PRIMARY_HOVER};
          transform: translateY(-2px);
        }
        .door-cta-arrow {
          display: inline-block;
          transition: transform 0.18s ease;
        }
        .door-cta-btn:hover .door-cta-arrow {
          transform: translateX(3px);
        }
      `}</style>

      <section className="door-cta-section">
        <div className="door-cta-visual">
        <svg
          width="280"
          height="240"
          viewBox="0 0 280 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          <ellipse cx="185" cy="115" rx="75" ry="70" fill="rgba(79,70,229,0.06)" />
            <g fill="rgba(79,70,229,0.15)" stroke="rgb(79, 70, 229)" strokeWidth="1.2">
              <circle cx="32" cy="75" r="12" />
              <circle cx="32" cy="115" r="12" />
              <circle cx="32" cy="155" r="12" />
            </g>
            <path d="M 48 75 Q 70 95 90 115 L 125 115" stroke="rgb(79, 70, 229)" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" fill="none" opacity="0.5" className="door-cta-pipeline-path" />
            <path d="M 48 115 L 125 115" stroke="rgb(79, 70, 229)" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" fill="none" opacity="0.5" className="door-cta-pipeline-path" style={{ animationDelay: "0.15s" }} />
            <path d="M 48 155 Q 70 135 90 115 L 125 115" stroke="rgb(79, 70, 229)" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" fill="none" opacity="0.5" className="door-cta-pipeline-path" style={{ animationDelay: "0.3s" }} />
            <rect x="125" y="50" width="110" height="130" rx="14" fill="#ffffff" stroke="#E2E8F0" strokeWidth="2" />
            <rect x="125" y="50" width="110" height="32" rx="14" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" strokeLinejoin="round" />
            <rect x="129" y="54" width="102" height="24" rx="10" fill="rgb(79,70,229)" fillOpacity="0.12" />
            <line x1="148" y1="90" x2="212" y2="90" stroke="#E2E8F0" strokeWidth="1.2" />
            <line x1="148" y1="112" x2="212" y2="112" stroke="#E2E8F0" strokeWidth="1.2" />
            <line x1="148" y1="134" x2="212" y2="134" stroke="#E2E8F0" strokeWidth="1.2" />
            <line x1="148" y1="90" x2="148" y2="156" stroke="#E2E8F0" strokeWidth="1.2" />
            <line x1="180" y1="90" x2="180" y2="156" stroke="#E2E8F0" strokeWidth="1.2" />
            <line x1="212" y1="90" x2="212" y2="156" stroke="#E2E8F0" strokeWidth="1.2" />
            <rect x="150" y="114" width="28" height="18" rx="6" fill="rgb(79,70,229)" fillOpacity="0.18" stroke="rgb(79, 70, 229)" strokeWidth="1.5" />
            <path d="M 155 123 L 160 128 L 173 117" stroke="rgb(79, 70, 229)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        </div>

        <h2 className="door-cta-headline">Get started — right away.</h2>
        <p className="door-cta-sub">
          Tell us about your business. We'll reach out within 24 hours to see if we're a fit.
        </p>
        <a href="/opt-in" className="door-cta-btn">
          Apply To Work With Us
          <span className="door-cta-arrow">→</span>
        </a>
      </section>
    </>
  );
}
