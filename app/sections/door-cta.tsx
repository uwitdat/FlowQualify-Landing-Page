"use client";

export default function DoorCta() {
  return (
    <>
      <style>{`
        .door-cta-section {
          background: #ffffff;
          padding: 80px 24px 96px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .door-cta-headline {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 900;
          color: #0F172A;
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
          background: #0F172A;
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
          background: rgb(180,83,9);
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
        {/* Calendar + check — qualified appointments / get started */}
        <svg
          width="200"
          height="240"
          viewBox="0 0 200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          {/* Soft glow behind calendar */}
          <ellipse cx="100" cy="115" rx="75" ry="70" fill="rgba(180,83,9,0.06)" />
          {/* Calendar card */}
          <rect x="45" y="50" width="110" height="130" rx="14" fill="#ffffff" stroke="#E2E8F0" strokeWidth="2" />
          {/* Calendar header bar */}
          <rect x="45" y="50" width="110" height="32" rx="14" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" strokeLinejoin="round" />
          <rect x="49" y="54" width="102" height="24" rx="10" fill="rgb(180,83,9)" fillOpacity="0.12" />
          {/* Grid lines — month grid */}
          <line x1="68" y1="90" x2="132" y2="90" stroke="#E2E8F0" strokeWidth="1.2" />
          <line x1="68" y1="112" x2="132" y2="112" stroke="#E2E8F0" strokeWidth="1.2" />
          <line x1="68" y1="134" x2="132" y2="134" stroke="#E2E8F0" strokeWidth="1.2" />
          <line x1="68" y1="90" x2="68" y2="156" stroke="#E2E8F0" strokeWidth="1.2" />
          <line x1="100" y1="90" x2="100" y2="156" stroke="#E2E8F0" strokeWidth="1.2" />
          <line x1="132" y1="90" x2="132" y2="156" stroke="#E2E8F0" strokeWidth="1.2" />
          {/* Highlighted “booked” cell */}
          <rect x="70" y="114" width="28" height="18" rx="6" fill="rgb(180,83,9)" fillOpacity="0.18" stroke="rgb(180,83,9)" strokeWidth="1.5" />
          {/* Checkmark */}
          <path d="M 78 126 L 84 132 L 96 118" stroke="rgb(180,83,9)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>

        <h2 className="door-cta-headline">Get started — right away.</h2>
        <a href="/opt-in" className="door-cta-btn">
          Apply To Work With Us
          <span className="door-cta-arrow">→</span>
        </a>
      </section>
    </>
  );
}
