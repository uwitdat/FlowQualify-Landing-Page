"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export const Landing = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const tokens = [
      "$25k", "✓", "scope", "$40k", "budget", "✓", "$18k", "yes", "timeline",
      "$32k", "✓", "booked", "$50k", "qualify", "✓", "$28k", "ready", "$60k",
      "?", "scope", "✓", "$15k", "budget", "$45k", "yes", "✓", "$22k",
      "ready", "booked", "$38k", "✓", "timeline", "$55k", "qualify", "$12k",
      "✓", "scope", "$70k", "yes", "$35k", "✓", "budget", "$48k", "✓", "$20k",
      "$42k", "qualified", "?", "✓", "$65k", "booked", "scope", "$30k", "yes",
    ];

    tokens.forEach((text) => {
      const span = document.createElement("span");
      span.className = "fql-token";
      span.textContent = text;

      const left = 2 + Math.random() * 96;
      const top = 2 + Math.random() * 96;
      const size = 9 + Math.random() * 10;
      const dur = (5 + Math.random() * 9).toFixed(1) + "s";
      const del = "-" + (Math.random() * 8).toFixed(1) + "s";
      const dy = "-" + (5 + Math.random() * 18).toFixed(0) + "px";
      const r = ((Math.random() - 0.5) * 12).toFixed(1) + "deg";
      const op = (0.04 + Math.random() * 0.09).toFixed(3);

      span.style.cssText = `
        left:${left}%; top:${top}%;
        font-size:${size}px;
        --d:${dur}; --del:${del}; --dy:${dy}; --r:${r};
        color:rgba(255,255,255,${op});
      `;
      bg.appendChild(span);
    });

    return () => {
      while (bg.firstChild) bg.removeChild(bg.firstChild);
    };
  }, []);

  return (
    <>
      <style>{`
        .fql-section {
          position: relative;
          background: #242220;
          height: 100vh;
          overflow: hidden;
        }

        /* Scattered background tokens */
        .fql-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .fql-token {
          position: absolute;
          font-family: var(--font-plus-jakarta), Inter, sans-serif;
          font-weight: 600;
          user-select: none;
          animation: fqlDrift var(--d) ease-in-out var(--del) infinite alternate;
        }
        @keyframes fqlDrift {
          from { transform: translateY(0) rotate(var(--r)); }
          to   { transform: translateY(var(--dy)) rotate(var(--r)); }
        }

        /* Left: chat bubble sketch */
        .fql-illus-left {
          position: absolute;
          left: clamp(48px, 9vw, 130px);
          top: 50%;
          z-index: 5;
          animation: fqlFloatA 5.4s ease-in-out infinite;
        }
        @keyframes fqlFloatA {
          0%, 100% { transform: translateY(-50%); }
          50%       { transform: translateY(calc(-50% - 12px)); }
        }

        /* Right: amber cursor */
        .fql-cursor-right {
          position: absolute;
          right: clamp(60px, 9vw, 130px);
          top: 62%;
          z-index: 5;
          animation: fqlFloatB 4.8s ease-in-out 0.8s infinite;
        }
        @keyframes fqlFloatB {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-12px); }
        }

        /* Center content */
        .fql-center {
          position: relative;
          z-index: 10;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 32px;
        }

        .fql-h1 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(48px, 6vw, 78px);
          font-weight: 900;
          color: #f0ebe0;
          line-height: 1.04;
          letter-spacing: -0.025em;
          margin-bottom: 26px;
        }

        .fql-caret {
          display: inline-block;
          width: 4px;
          height: 0.82em;
          background: #C9A84C;
          vertical-align: middle;
          margin-left: 4px;
          border-radius: 1px;
          animation: fqlBlink 1.1s step-end infinite;
        }
        @keyframes fqlBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .fql-sub {
          font-size: clamp(14px, 1.75vw, 18px);
          color: rgba(240,235,224,0.46);
          line-height: 1.74;
          max-width: 500px;
          margin-bottom: 42px;
        }

        .fql-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0ebe0;
          color: #242220;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 34px;
          border-radius: 999px;
          text-decoration: none;
          border: 1.5px solid transparent;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          letter-spacing: 0.01em;
        }
        .fql-btn:hover {
          background: transparent;
          color: #f0ebe0;
          border-color: rgba(240,235,224,0.22);
        }

        @media (max-width: 960px) {
          .fql-illus-left, .fql-cursor-right { display: none; }
        }
      `}</style>

      <section className="fql-section">

        {/* Floating qualification tokens */}
        <div className="fql-bg" ref={bgRef} />

        {/* Left: chat bubble sketch */}
        <div className="fql-illus-left">
          <svg width="108" height="108" viewBox="0 0 108 108" fill="none"
            stroke="rgba(240,235,224,0.52)" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="8" width="82" height="54" rx="16"
              fill="rgba(255,255,255,0.04)" strokeWidth="1.8"/>
            <path d="M 18,62 L 8,86 L 42,68"
              fill="rgba(255,255,255,0.04)" strokeWidth="1.7"/>
            <line x1="20" y1="27" x2="70" y2="27" strokeWidth="1.4" stroke="rgba(240,235,224,0.28)"/>
            <line x1="20" y1="39" x2="58" y2="39" strokeWidth="1.4" stroke="rgba(240,235,224,0.28)"/>
            <line x1="20" y1="51" x2="66" y2="51" strokeWidth="1.4" stroke="rgba(240,235,224,0.28)"/>
          </svg>
        </div>

        {/* Right: amber cursor — hand-drawn sketch */}
        <div className="fql-cursor-right">
          <svg width="62" height="74" viewBox="0 0 46 56" fill="none"
            strokeLinecap="round" strokeLinejoin="round">
            {/* Main arrow outline — no fill, just strokes */}
            <path d="M 5,4 L 4,41 L 14,30 L 24,48 L 31,44 L 21,26 L 37,25 Z"
              stroke="#C9A84C" strokeWidth="2.0" fill="none"/>
            {/* Inner sketch double-line for hand-drawn feel */}
            <path d="M 8,8 L 7,36 L 15,27"
              stroke="rgba(201,168,76,0.45)" strokeWidth="1.0" fill="none"/>
            {/* Slight overshoot at tip */}
            <path d="M 5,4 L 3,2"
              stroke="#C9A84C" strokeWidth="1.3" fill="none"/>
            {/* Small tail overshoot */}
            <path d="M 37,25 L 39,24"
              stroke="rgba(201,168,76,0.5)" strokeWidth="1.0" fill="none"/>
          </svg>
        </div>

        {/* Centered content */}
        <div className="fql-center">
          <h1 className="fql-h1">
            Fill your calendar with<br />qualified appointments.<span className="fql-caret" />
          </h1>
          <p className="fql-sub">
            FlowQualify is a turnkey, performance-based lead generation system for contractors & remodelers who want a calendar consistently filled with exclusive, qualified jobs.
          </p>
          <Link href="/opt-in" className="fql-btn">Book Your Demo →</Link>
        </div>

      </section>
    </>
  );
};

export default Landing;
