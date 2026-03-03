"use client";
import Link from "next/link";

export default function Integrations() {
  return (
    <>
      <style>{`
        .cta2-section {
          background: #1c1a17;
          padding: 100px 24px 0;
          position: relative;
          overflow: hidden;
        }
        .cta2-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: flex-end;
        }
        .cta2-left { padding-bottom: 110px; }
        .cta2-headline {
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 900;
          color: #f9f0d9;
          line-height: 1.06;
          letter-spacing: -0.03em;
          margin: 0 0 40px;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .cta2-btn {
          display: inline-block;
          background: #f9f0d9;
          color: #22150d;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 30px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: background 0.2s, transform 0.15s;
        }
        .cta2-btn:hover { background: #fff; transform: translateY(-2px); }

        /* Paper fly animations */
        @keyframes cta-fly1 {
          0%   { transform: translate(0,0) rotate(-4deg); }
          100% { transform: translate(-88px,-72px) rotate(-26deg); }
        }
        @keyframes cta-fly2 {
          0%   { transform: translate(0,0) rotate(6deg); }
          100% { transform: translate(-118px,-35px) rotate(20deg); }
        }
        @keyframes cta-fly3 {
          0%   { transform: translate(0,0) rotate(-2deg); }
          100% { transform: translate(-60px,-95px) rotate(-16deg); }
        }
        @keyframes cta-fly4 {
          0%   { transform: translate(0,0) rotate(10deg); }
          100% { transform: translate(-105px,-52px) rotate(32deg); }
        }
        @keyframes cta-fly5 {
          0%   { transform: translate(0,0) rotate(-7deg); }
          100% { transform: translate(-44px,-80px) rotate(-20deg); }
        }
        .cta2-p1 { animation: cta-fly1 3s ease-in-out infinite alternate; }
        .cta2-p2 { animation: cta-fly2 2.6s ease-in-out 0.35s infinite alternate; }
        .cta2-p3 { animation: cta-fly3 3.4s ease-in-out 0.65s infinite alternate; }
        .cta2-p4 { animation: cta-fly4 2.9s ease-in-out 0.95s infinite alternate; }
        .cta2-p5 { animation: cta-fly5 3.2s ease-in-out 0.18s infinite alternate; }

        /* Sparkle */
        @keyframes cta-twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.25; transform: scale(0.6); }
        }
        .cta2-s1 { animation: cta-twinkle 1.8s ease-in-out infinite; }
        .cta2-s2 { animation: cta-twinkle 2.3s ease-in-out 0.45s infinite; }
        .cta2-s3 { animation: cta-twinkle 1.6s ease-in-out 0.85s infinite; }
        .cta2-s4 { animation: cta-twinkle 2.6s ease-in-out 0.2s infinite; }
        .cta2-s5 { animation: cta-twinkle 2s ease-in-out 1.1s infinite; }
        .cta2-s6 { animation: cta-twinkle 1.5s ease-in-out 0.6s infinite; }

        @media (max-width: 760px) {
          .cta2-inner { grid-template-columns: 1fr; }
          .cta2-left { padding-bottom: 48px; }
        }
      `}</style>

      <section className="cta2-section" id="cta">
        <div className="cta2-inner">

          {/* Left: headline + button only */}
          <div className="cta2-left">
            <h2 className="cta2-headline">
              Get started—<br />right away.
            </h2>
            <Link href="/opt-in" className="cta2-btn">
              Apply to work with us →
            </Link>
          </div>

          {/* Right: realistic door sketch + animated papers */}
          <div style={{ position: "relative", alignSelf: "flex-end" }}>
            <svg viewBox="0 0 500 430" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", display: "block" }}>

              {/* ── FLOOR LINE ── */}
              <path d="M30,405 C150,402 340,406 478,403"
                stroke="#f9f0d9" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.3"/>

              {/* ── DOOR FRAME ── */}
              {/* Left post (outer) */}
              <path d="M162,42 C163,180 162,310 163,402"
                stroke="#f9f0d9" strokeWidth="2.8" strokeLinecap="round"/>
              {/* Left post (inner edge) */}
              <path d="M174,50 C175,180 174,310 175,398"
                stroke="#f9f0d9" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.5"/>
              {/* Right post (outer) — hinge side */}
              <path d="M338,42 C339,180 338,310 339,402"
                stroke="#f9f0d9" strokeWidth="2.8" strokeLinecap="round"/>
              {/* Right post (inner edge) */}
              <path d="M326,50 C327,180 326,310 327,398"
                stroke="#f9f0d9" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.5"/>
              {/* Top beam */}
              <path d="M162,42 C220,40 280,41 338,42"
                stroke="#f9f0d9" strokeWidth="2.8" strokeLinecap="round"/>
              {/* Top beam underside */}
              <path d="M174,52 C220,50 280,51 326,52"
                stroke="#f9f0d9" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.5"/>
              {/* Threshold */}
              <path d="M162,402 C220,400 280,401 338,402"
                stroke="#f9f0d9" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.6"/>

              {/* ── DOOR PANEL (open, hinge on right, swings left toward viewer) ── */}
              {/* At ~55° open: visible face width ≈ 90px (hinge x=326, left edge x=236) */}

              {/* Door face — front surface */}
              <path d="M238,52 C275,50 312,50 326,52 L326,398 C312,398 274,399 238,400 Z"
                stroke="#f9f0d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

              {/* Door top edge (foreshortened, going back in perspective) */}
              <path d="M238,52 C236,50 234,49 232,50 L174,52"
                stroke="#f9f0d9" strokeWidth="1.6" strokeLinecap="round"/>
              {/* Door bottom edge (foreshortened) */}
              <path d="M238,400 C236,401 234,402 232,403 L174,402"
                stroke="#f9f0d9" strokeWidth="1.6" strokeLinecap="round"/>
              {/* Door left edge (the visible edge/thickness strip) */}
              <path d="M232,50 C231,180 231,310 232,403"
                stroke="#f9f0d9" strokeWidth="1.6" strokeLinecap="round"/>

              {/* ── DOOR KNOB (right side of door face) ── */}
              <circle cx="305" cy="228" r="7"
                stroke="#f9f0d9" strokeWidth="1.8" fill="none"/>
              <circle cx="305" cy="228" r="3"
                stroke="#f9f0d9" strokeWidth="1.2" fill="none" strokeOpacity="0.6"/>

              {/* ── ANIMATED PAPERS flying left out the opening ── */}

              {/* Paper 1 — upper */}
              <g className="cta2-p1" style={{ transformOrigin: "210px 162px" }}>
                <path d="M196,148 C200,145 220,144 225,147 L226,150 L224,176 C220,179 200,179 196,176 Z"
                  stroke="#f9f0d9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M200,156 C208,155 220,155 223,156" stroke="#f9f0d9" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.55"/>
                <path d="M200,163 C209,162 220,162 223,163" stroke="#f9f0d9" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.55"/>
                <path d="M200,170 C207,169 217,169 220,170" stroke="#f9f0d9" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.55"/>
              </g>

              {/* Paper 2 — middle */}
              <g className="cta2-p2" style={{ transformOrigin: "212px 248px" }}>
                <path d="M197,234 C201,231 222,230 227,233 L228,236 L226,262 C222,265 201,265 197,262 Z"
                  stroke="#f9f0d9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M201,242 C210,241 222,241 225,242" stroke="#f9f0d9" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.55"/>
                <path d="M201,250 C211,249 222,249 225,250" stroke="#f9f0d9" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.55"/>
                <path d="M201,258 C208,257 219,257 222,258" stroke="#f9f0d9" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.55"/>
              </g>

              {/* Paper 3 — small, high */}
              <g className="cta2-p3" style={{ transformOrigin: "220px 120px" }}>
                <path d="M208,108 C212,106 228,105 232,108 L233,110 L231,132 C228,135 211,135 208,132 Z"
                  stroke="#f9f0d9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M212,116 C218,115 228,115 230,116" stroke="#f9f0d9" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.5"/>
                <path d="M212,123 C219,122 228,122 230,123" stroke="#f9f0d9" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.5"/>
              </g>

              {/* Paper 4 — lower */}
              <g className="cta2-p4" style={{ transformOrigin: "204px 324px" }}>
                <path d="M190,311 C194,308 212,307 217,310 L218,313 L216,336 C212,339 193,339 190,336 Z"
                  stroke="#f9f0d9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M194,319 C202,318 213,318 215,319" stroke="#f9f0d9" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.5"/>
                <path d="M194,327 C203,326 213,326 215,327" stroke="#f9f0d9" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.5"/>
              </g>

              {/* Paper 5 — tiny */}
              <g className="cta2-p5" style={{ transformOrigin: "226px 204px" }}>
                <path d="M218,195 C221,193 234,192 237,195 L238,197 L236,214 C234,216 220,217 218,214 Z"
                  stroke="#f9f0d9" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M221,202 C227,201 234,201 236,202" stroke="#f9f0d9" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.5"/>
                <path d="M221,209 C227,208 234,208 236,209" stroke="#f9f0d9" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.5"/>
              </g>

              {/* ── SPARKLES ── */}
              <g className="cta2-s1" style={{ transformOrigin: "390px 68px" }}>
                <path d="M390,56 L390,80 M378,68 L402,68 M382,60 L398,76 M382,76 L398,60"
                  stroke="#ff4db8" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.95"/>
              </g>
              <g className="cta2-s2" style={{ transformOrigin: "440px 88px" }}>
                <path d="M440,82 L440,94 M434,88 L446,88"
                  stroke="#00e5ff" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.9"/>
              </g>
              <g className="cta2-s3" style={{ transformOrigin: "358px 148px" }}>
                <path d="M358,141 L358,155 M351,148 L365,148"
                  stroke="#69ff47" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.85"/>
              </g>
              <g className="cta2-s4" style={{ transformOrigin: "462px 218px" }}>
                <path d="M456,212 L468,224 M468,212 L456,224"
                  stroke="#ff8800" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.9"/>
              </g>
              <g className="cta2-s5" style={{ transformOrigin: "408px 308px" }}>
                <path d="M408,301 L408,315 M401,308 L415,308"
                  stroke="#4d6cff" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.9"/>
              </g>
              <g className="cta2-s6" style={{ transformOrigin: "478px 158px" }}>
                <path d="M478,152 L478,164 M472,158 L484,158 M474,154 L482,162 M474,162 L482,154"
                  stroke="#ffe600" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.9"/>
              </g>

            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
