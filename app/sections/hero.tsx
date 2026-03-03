"use client";

import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <style>{`
        .dh-hero {
          position: relative;
          background: #1c1a17;
          overflow: hidden;
          padding: 80px 40px 100px;
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .dh-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
          z-index: 0;
        }

        .dh-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .dh-illus-left {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
        }

        .dh-hero-text { text-align: center; }

        .dh-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .dh-eyebrow-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #C9A84C;
          box-shadow: 0 0 8px rgba(201,168,76,0.8);
          animation: dhPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes dhPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }

        .dh-h1 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(42px, 5.5vw, 72px);
          font-weight: 900;
          color: #f5efe0;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .dh-h1 em {
          font-style: italic;
          color: #C9A84C;
        }

        .dh-sub {
          font-size: 16px;
          color: rgba(245,239,224,0.5);
          line-height: 1.75;
          max-width: 380px;
          margin: 0 auto 36px;
        }

        .dh-ctas {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .dh-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #C9A84C;
          color: #1c1a17;
          font-size: 14px;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s;
          letter-spacing: 0.01em;
        }
        .dh-btn-primary:hover { background: #d4b55e; }

        .dh-btn-ghost {
          font-size: 14px;
          font-weight: 500;
          color: rgba(245,239,224,0.45);
          text-decoration: none;
          border-bottom: 1px solid rgba(245,239,224,0.15);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .dh-btn-ghost:hover { color: #f5efe0; border-color: rgba(245,239,224,0.4); }

        .dh-social-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .dh-av-stack { display: flex; }
        .dh-av {
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 2px solid #1c1a17;
          margin-left: -8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 800; color: #1c1a17;
        }
        .dh-av:first-child { margin-left: 0; }
        .dh-av-1 { background: #C9A84C; }
        .dh-av-2 { background: #d4b55e; }
        .dh-av-3 { background: #b8922e; }
        .dh-av-4 { background: #e8c870; }

        .dh-social-copy {
          font-size: 12px;
          color: rgba(245,239,224,0.35);
          line-height: 1.5;
        }
        .dh-social-copy strong { color: rgba(245,239,224,0.7); font-weight: 700; }

        .dh-illus-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .dh-annotation {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          font-weight: 500;
          color: rgba(245,239,224,0.4);
          max-width: 200px;
          line-height: 1.5;
          text-align: right;
        }

        /* ── Chat bubble animations ── */
        .dh-bubble-1 { animation: dhBubbleIn 0.4s ease forwards; animation-delay: 0.8s; opacity: 0; }
        .dh-bubble-2 { animation: dhBubbleIn 0.4s ease forwards; animation-delay: 1.8s; opacity: 0; }
        .dh-bubble-3 { animation: dhBubbleIn 0.4s ease forwards; animation-delay: 2.8s; opacity: 0; }
        .dh-bubble-4 { animation: dhBubbleIn 0.4s ease forwards; animation-delay: 3.8s; opacity: 0; }
        @keyframes dhBubbleIn {
          from { opacity: 0; transform: translateY(6px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── Phone draw-on ── */
        .dh-draw-path {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: dhDrawOn 1.8s ease forwards;
        }
        @keyframes dhDrawOn { to { stroke-dashoffset: 0; } }

        /* ── Float idle ── */
        .dh-float-idle   { animation: dhFloatIdle 4s ease-in-out infinite; }
        .dh-float-idle-b { animation: dhFloatIdle 4.8s ease-in-out 0.6s infinite; }
        @keyframes dhFloatIdle {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }

        /* ── Typing dots ── */
        .dh-typing-dot { animation: dhTypingDot 1.2s ease-in-out infinite; }
        .dh-typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .dh-typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes dhTypingDot {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40%           { opacity: 1;   transform: scale(1); }
        }

        /* ── Kitchen island: lights flicker on ── */
        @keyframes dhLightOn {
          0%   { fill: rgba(255,240,180,0); }
          28%  { fill: rgba(255,240,180,0.15); }
          34%  { fill: rgba(255,240,180,0.75); }
          40%  { fill: rgba(255,240,180,0.28); }
          46%  { fill: rgba(255,240,180,0.82); }
          100% { fill: rgba(255,240,180,0.82); }
        }
        .dh-light-1 { animation: dhLightOn 1.6s ease forwards 0.5s; }
        .dh-light-2 { animation: dhLightOn 1.6s ease forwards 1.1s; }

        /* ── Kitchen island: glow cones appear ── */
        @keyframes dhGlowIn { to { opacity: 1; } }
        .dh-glow-1 { opacity: 0; animation: dhGlowIn 0.7s ease forwards 2.1s; }
        .dh-glow-2 { opacity: 0; animation: dhGlowIn 0.7s ease forwards 2.6s; }

        /* ── Kitchen island: fumes / steam rise ── */
        @keyframes dhFumeRise {
          0%   { opacity: 0; transform: translateY(14px); }
          12%  { opacity: 0.62; }
          72%  { opacity: 0.28; }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .dh-fume-1 { animation: dhFumeRise 4s ease-in-out 2.8s infinite; }
        .dh-fume-2 { animation: dhFumeRise 4s ease-in-out 3.9s infinite; }
        .dh-fume-3 { animation: dhFumeRise 4s ease-in-out 5.0s infinite; }

        /* ── Stat pills ── */
        .dh-stat-pills {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 56px auto 0;
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .dh-stat-pill {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(245,239,224,0.08);
          border-radius: 999px;
          padding: 8px 18px;
          font-size: 12px;
          font-weight: 600;
          color: rgba(245,239,224,0.45);
        }
        .dh-stat-pill strong { color: #C9A84C; font-weight: 800; }

        @media (max-width: 960px) {
          .dh-hero-inner { grid-template-columns: 1fr; }
          .dh-illus-left, .dh-illus-right { display: none; }
        }
        @media (max-width: 600px) {
          .dh-hero { padding: 60px 20px 80px; }
        }
      `}</style>

      <section className="dh-hero">

        <div className="dh-hero-inner">

          {/* ── LEFT: Phone + Chat ── */}
          <div className="dh-illus-left">

            <div className="dh-float-idle">
              <svg width="190" height="340" viewBox="0 0 190 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="dh-draw-path" x="20" y="10" width="150" height="320" rx="24" ry="24"
                  stroke="rgba(245,239,224,0.18)" strokeWidth="2" fill="rgba(255,255,255,0.03)"/>
                <rect x="30" y="28" width="130" height="284" rx="16" ry="16"
                  fill="rgba(255,255,255,0.04)" stroke="rgba(245,239,224,0.07)" strokeWidth="1"/>
                <rect x="65" y="36" width="60" height="16" rx="8" fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
                <rect x="30" y="60" width="130" height="30" fill="rgba(255,255,255,0.05)"/>
                <circle cx="50" cy="75" r="9" fill="rgba(201,168,76,0.25)" stroke="rgba(201,168,76,0.6)" strokeWidth="1.2"/>
                <text x="50" y="74" textAnchor="middle" fontSize="5.5" fill="#C9A84C" fontFamily="Inter, sans-serif" fontWeight="800">A&amp;B</text>
                <text x="50" y="81" textAnchor="middle" fontSize="4.8" fill="#C9A84C" fontFamily="Inter, sans-serif" fontWeight="600">Reno</text>
                <text x="68" y="73" fontSize="7" fill="rgba(245,239,224,0.7)" fontFamily="Inter, sans-serif" fontWeight="700">A&amp;B Renovations</text>
                <text x="68" y="82" fontSize="6.5" fill="rgba(16,185,129,0.8)" fontFamily="Inter, sans-serif">● Active now</text>
                <line x1="30" y1="90" x2="160" y2="90" stroke="rgba(245,239,224,0.06)" strokeWidth="1"/>

                <g className="dh-bubble-1">
                  <rect x="78" y="100" width="72" height="22" rx="11" fill="rgba(201,168,76,0.85)"/>
                  <text x="114" y="115" textAnchor="middle" fontSize="7.5" fill="#1c1a17" fontFamily="Inter, sans-serif" fontWeight="600">Hey, kitchen quote?</text>
                </g>
                <g className="dh-bubble-2">
                  <rect x="38" y="130" width="90" height="22" rx="11" fill="rgba(255,255,255,0.08)"/>
                  <text x="83" y="145" textAnchor="middle" fontSize="7" fill="rgba(245,239,224,0.85)" fontFamily="Inter, sans-serif">What&apos;s your budget range?</text>
                </g>
                <g className="dh-bubble-3">
                  <rect x="95" y="160" width="55" height="22" rx="11" fill="rgba(201,168,76,0.85)"/>
                  <text x="122" y="175" textAnchor="middle" fontSize="7.5" fill="#1c1a17" fontFamily="Inter, sans-serif" fontWeight="600">Around $25–30k</text>
                </g>
                <g className="dh-bubble-4">
                  <rect x="38" y="190" width="52" height="22" rx="11" fill="rgba(255,255,255,0.08)"/>
                  <circle className="dh-typing-dot" cx="52" cy="201" r="3" fill="rgba(245,239,224,0.5)"/>
                  <circle className="dh-typing-dot" cx="64" cy="201" r="3" fill="rgba(245,239,224,0.5)"/>
                  <circle className="dh-typing-dot" cx="76" cy="201" r="3" fill="rgba(245,239,224,0.5)"/>
                </g>
                <g className="dh-bubble-4" style={{ animationDelay: "4.5s" }}>
                  <rect x="38" y="220" width="104" height="26" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.35)" strokeWidth="1"/>
                  <text x="90" y="231" textAnchor="middle" fontSize="6.5" fill="rgba(16,185,129,0.9)" fontFamily="Inter, sans-serif" fontWeight="700">✓ LEAD QUALIFIED</text>
                  <text x="90" y="240" textAnchor="middle" fontSize="6" fill="rgba(245,239,224,0.35)" fontFamily="Inter, sans-serif">Budget · Scope · Timeline</text>
                </g>
                <rect x="18" y="100" width="2" height="28" rx="1" fill="rgba(245,239,224,0.12)"/>
                <rect x="170" y="115" width="2" height="20" rx="1" fill="rgba(245,239,224,0.12)"/>
              </svg>
            </div>

            <div className="dh-annotation" style={{ marginRight: "12px", alignSelf: "flex-end" }}>
              When someone clicks your ad, system qualifies intelligently and naturally through conversation
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                <path d="M12 24 C10 16, 6 10, 8 4" stroke="rgba(245,239,224,0.3)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M6 6 L8 2 L12 5" stroke="rgba(245,239,224,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </div>

          {/* ── CENTER: Text ── */}
          <div className="dh-hero-text">
            <div className="dh-eyebrow">
              <span className="dh-eyebrow-dot" />
              Done-for-you lead qualification
            </div>

            <h1 className="dh-h1">
              Get real appointments.
            </h1>

            <p className="dh-sub">
              Every inquiry is vetted in real-time conversation — so you only speak with homeowners ready to move forward.
            </p>

            <div className="dh-ctas">
              <Link href="/opt-in" className="dh-btn-primary">Book Your Demo →</Link>
              <a href="#features" className="dh-btn-ghost">See how it works</a>
            </div>

            <div className="dh-social-row">
              <div className="dh-av-stack">
                <div className="dh-av dh-av-1">M</div>
                <div className="dh-av dh-av-2">T</div>
                <div className="dh-av dh-av-3">R</div>
                <div className="dh-av dh-av-4">J</div>
              </div>
              <div className="dh-social-copy">
                <strong>50+ remodelers</strong> trust FlowQualify
              </div>
            </div>
          </div>

          {/* ── RIGHT: Kitchen Island + Range Hood (excalidraw sketch) ── */}
          <div className="dh-illus-right">
            <div className="dh-float-idle-b">
              <svg
                width="290" height="300" viewBox="0 0 290 300" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="rgba(245,239,224,0.72)"
                strokeLinecap="round" strokeLinejoin="round"
              >
                {/* ── Ceiling hint (dashed) ── */}
                <line x1="0" y1="14" x2="290" y2="14"
                  stroke="rgba(245,239,224,0.14)" strokeWidth="1" strokeDasharray="5 4"/>

                {/* ── Exhaust duct — rectangular chimney from hood to ceiling ── */}
                <rect x="88" y="8" width="54" height="40" rx="2"
                  fill="rgba(255,255,255,0.06)" strokeWidth="1.5"/>
                {/* Upward airflow chevrons inside duct */}
                <path d="M109,34 L115,27 L121,34"
                  strokeWidth="1.1" stroke="rgba(245,239,224,0.35)" fill="none"/>
                <path d="M109,24 L115,17 L121,24"
                  strokeWidth="1.1" stroke="rgba(245,239,224,0.35)" fill="none"/>
                {/* EXHAUST label */}
                <text x="115" y="7" textAnchor="middle" fontSize="5"
                  fill="rgba(245,239,224,0.28)" fontFamily="Inter, sans-serif" letterSpacing="0.12em">EXHAUST</text>
                {/* Angled collector flares — show hood collecting vapors into duct */}
                <line x1="88" y1="46" x2="18" y2="56"
                  strokeWidth="1.1" stroke="rgba(245,239,224,0.35)"/>
                <line x1="142" y1="46" x2="212" y2="56"
                  strokeWidth="1.1" stroke="rgba(245,239,224,0.35)"/>

                {/* ── Range hood body ── */}
                <rect x="18" y="46" width="194" height="68" rx="4"
                  fill="rgba(255,255,255,0.04)" strokeWidth="1.7"/>

                {/* Hood vent slats (horizontal dashes) */}
                <line x1="24" y1="62" x2="206" y2="62" strokeWidth="1" strokeDasharray="6 4" stroke="rgba(245,239,224,0.22)"/>
                <line x1="24" y1="76" x2="206" y2="76" strokeWidth="1" strokeDasharray="6 4" stroke="rgba(245,239,224,0.22)"/>
                <line x1="24" y1="90" x2="206" y2="90" strokeWidth="1" strokeDasharray="6 4" stroke="rgba(245,239,224,0.22)"/>
                <line x1="24" y1="104" x2="206" y2="104" strokeWidth="1" strokeDasharray="6 4" stroke="rgba(245,239,224,0.22)"/>

                {/* Center fan/grille box */}
                <rect x="82" y="56" width="66" height="48" rx="3"
                  fill="none" strokeWidth="1" stroke="rgba(245,239,224,0.22)"/>
                {/* Fan cross */}
                <line x1="82" y1="80" x2="148" y2="80" strokeWidth="0.8" stroke="rgba(245,239,224,0.18)"/>
                <line x1="115" y1="56" x2="115" y2="104" strokeWidth="0.8" stroke="rgba(245,239,224,0.18)"/>

                {/* ── Recessed lights under hood ── */}
                {/* Light bodies */}
                <circle className="dh-light-1" cx="50" cy="118" r="8"
                  strokeWidth="1.3" stroke="rgba(245,239,224,0.55)"/>
                <circle className="dh-light-2" cx="180" cy="118" r="8"
                  strokeWidth="1.3" stroke="rgba(245,239,224,0.55)"/>

                {/* Light glow cones */}
                <path className="dh-glow-1"
                  d="M42,127 L26,162 L74,162 Z"
                  fill="rgba(255,240,180,0.07)" stroke="none"/>
                <path className="dh-glow-2"
                  d="M172,127 L156,162 L204,162 Z"
                  fill="rgba(255,240,180,0.07)" stroke="none"/>

                {/* ── Steam / fumes rising from cooktop ── */}
                {/* Fume 1 — left of center */}
                <path className="dh-fume-1"
                  d="M85,162 C81,152 89,144 84,134 C79,124 87,130 83,120"
                  fill="none" strokeWidth="1.5" stroke="rgba(245,239,224,0.5)"/>
                {/* Fume 2 — center */}
                <path className="dh-fume-2"
                  d="M115,160 C119,150 111,142 115,132 C119,122 112,128 116,118"
                  fill="none" strokeWidth="1.5" stroke="rgba(245,239,224,0.5)"/>
                {/* Fume 3 — right of center */}
                <path className="dh-fume-3"
                  d="M148,162 C152,152 144,144 148,134 C152,124 145,130 149,120"
                  fill="none" strokeWidth="1.5" stroke="rgba(245,239,224,0.5)"/>

                {/* ── Countertop ── */}
                <rect x="16" y="165" width="198" height="8" rx="2"
                  fill="rgba(255,255,255,0.09)" strokeWidth="1.6"/>

                {/* ── Cooktop (inset on counter) ── */}
                <rect x="44" y="155" width="142" height="18" rx="3"
                  fill="rgba(255,255,255,0.04)" strokeWidth="1.2" stroke="rgba(245,239,224,0.42)"/>

                {/* Gas burners — 4 circles (2×2) */}
                {/* Front-left */}
                <circle cx="82" cy="163" r="9" strokeWidth="1.3" stroke="rgba(245,239,224,0.45)"/>
                <circle cx="82" cy="163" r="4" strokeWidth="0.9" stroke="rgba(245,239,224,0.28)" fill="none"/>
                <circle cx="82" cy="163" r="1.5" fill="rgba(245,239,224,0.45)"/>
                {/* Front-right */}
                <circle cx="110" cy="163" r="7" strokeWidth="1.2" stroke="rgba(245,239,224,0.42)"/>
                <circle cx="110" cy="163" r="3" strokeWidth="0.8" stroke="rgba(245,239,224,0.25)" fill="none"/>
                <circle cx="110" cy="163" r="1.2" fill="rgba(245,239,224,0.4)"/>
                {/* Back-left */}
                <circle cx="140" cy="163" r="7" strokeWidth="1.2" stroke="rgba(245,239,224,0.42)"/>
                <circle cx="140" cy="163" r="3" strokeWidth="0.8" stroke="rgba(245,239,224,0.25)" fill="none"/>
                <circle cx="140" cy="163" r="1.2" fill="rgba(245,239,224,0.4)"/>
                {/* Back-right */}
                <circle cx="168" cy="163" r="9" strokeWidth="1.3" stroke="rgba(245,239,224,0.45)"/>
                <circle cx="168" cy="163" r="4" strokeWidth="0.9" stroke="rgba(245,239,224,0.28)" fill="none"/>
                <circle cx="168" cy="163" r="1.5" fill="rgba(245,239,224,0.45)"/>

                {/* ── Island body ── */}
                <rect x="22" y="173" width="186" height="112" rx="3"
                  fill="rgba(255,255,255,0.03)" strokeWidth="1.6"/>

                {/* Horizontal drawer dividers */}
                <line x1="22" y1="212" x2="208" y2="212" strokeWidth="1" stroke="rgba(245,239,224,0.2)"/>
                <line x1="22" y1="244" x2="208" y2="244" strokeWidth="1" stroke="rgba(245,239,224,0.2)"/>

                {/* Center vertical divider */}
                <line x1="115" y1="173" x2="115" y2="285" strokeWidth="1" stroke="rgba(245,239,224,0.16)"/>

                {/* Drawer handles — top row */}
                <line x1="55" y1="194" x2="86" y2="194" strokeWidth="1.9"/>
                <line x1="144" y1="194" x2="175" y2="194" strokeWidth="1.9"/>
                {/* Drawer handles — middle row */}
                <line x1="55" y1="229" x2="86" y2="229" strokeWidth="1.9"/>
                <line x1="144" y1="229" x2="175" y2="229" strokeWidth="1.9"/>
                {/* Drawer handles — bottom row */}
                <line x1="55" y1="261" x2="86" y2="261" strokeWidth="1.9"/>
                <line x1="144" y1="261" x2="175" y2="261" strokeWidth="1.9"/>
              </svg>
            </div>

          </div>

        </div>

        {/* ── Stat pills ── */}
        <div className="dh-stat-pills">
          <div className="dh-stat-pill"><strong>12–25+</strong>&nbsp; qualified appointments/mo</div>
          <div className="dh-stat-pill"><strong>&lt;90s</strong>&nbsp; response time</div>
          <div className="dh-stat-pill"><strong>Pay-per-qualified-appointment</strong>&nbsp; no retainer</div>
        </div>

      </section>
    </>
  );
};
