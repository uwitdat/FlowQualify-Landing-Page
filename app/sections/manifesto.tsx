export const Manifesto = () => {
  return (
    <>
      <style>{`
        .mf-section {
          position: relative;
          background: #ece7db;
          min-height: 85vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 130px 80px 150px;
        }

        .mf-wave {
          position: absolute;
          left: 0;
          width: 100%;
          pointer-events: none;
          z-index: 2;
        }
        .mf-wave-top    { top:    -1px; }
        .mf-wave-bottom { bottom: -1px; }

        .mf-content {
          position: relative;
          z-index: 4;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .mf-text { max-width: 720px; }

        .mf-para {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(28px, 3.2vw, 46px);
          font-weight: 700;
          color: #1c1917;
          line-height: 1.5;
          letter-spacing: -0.015em;
        }
        .mf-para + .mf-para { margin-top: 48px; }

        /* Decoration marks */
        .mf-deco {
          position: absolute;
          z-index: 3;
          pointer-events: none;
        }

        /* Illustrations */
        .mf-illus-tools {
          position: absolute;
          top: 72px;
          left: 3%;
          z-index: 3;
          opacity: 0.76;
        }
        .mf-illus-cal {
          position: absolute;
          bottom: 72px;
          right: 3%;
          z-index: 3;
          opacity: 0.76;
        }

        @media (max-width: 1100px) {
          .mf-illus-tools, .mf-illus-cal { display: none; }
          .mf-section { padding: 100px 40px 120px; }
        }
        @media (max-width: 600px) {
          .mf-para { font-size: clamp(24px, 6.5vw, 34px); }
          .mf-section { padding: 80px 24px 100px; }
        }
      `}</style>

      <section className="mf-section">

        {/* Wave top — dark hero bg bleeds in */}
        <svg className="mf-wave mf-wave-top" height="92" viewBox="0 0 1440 92" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,52 Q720,92 0,64 Z" fill="#1c1a17"/>
        </svg>

        {/* Decoration marks */}
        <svg className="mf-deco" style={{ top:"30%", right:"26%" }} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <line x1="2" y1="2" x2="14" y2="14" stroke="rgba(28,26,23,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="14" y1="2" x2="2" y2="14" stroke="rgba(28,26,23,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        {/* Sparkle */}
        <svg className="mf-deco" style={{ top:"20%", right:"16%" }} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <line x1="8" y1="0" x2="8" y2="16" stroke="rgba(28,26,23,0.16)" strokeWidth="1" strokeLinecap="round"/>
          <line x1="0" y1="8" x2="16" y2="8" stroke="rgba(28,26,23,0.16)" strokeWidth="1" strokeLinecap="round"/>
          <line x1="2" y1="2" x2="14" y2="14" stroke="rgba(28,26,23,0.1)" strokeWidth="1" strokeLinecap="round"/>
          <line x1="14" y1="2" x2="2" y2="14" stroke="rgba(28,26,23,0.1)" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        {/* Curved arrow */}
        <svg className="mf-deco" style={{ bottom:"34%", right:"22%" }} width="52" height="42" viewBox="0 0 52 42" fill="none">
          <path d="M6,20 C16,5 36,8 44,20" stroke="rgba(28,26,23,0.22)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M40,16 L46,22 L38,25" stroke="rgba(28,26,23,0.22)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
        {/* Small × near calendar */}
        <svg className="mf-deco" style={{ bottom:"52%", right:"6%" }} width="13" height="13" viewBox="0 0 13 13" fill="none">
          <line x1="2" y1="2" x2="11" y2="11" stroke="rgba(28,26,23,0.18)" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="11" y1="2" x2="2" y2="11" stroke="rgba(28,26,23,0.18)" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>

        {/* ── TOOLS ILLUSTRATION — upper left (like the books stack) ── */}
        <div className="mf-illus-tools">
          <svg width="220" height="252" viewBox="0 0 220 252" fill="none"
            stroke="rgba(28,26,23,0.65)" strokeLinecap="round" strokeLinejoin="round">

            {/* Tape measure — slightly imperfect circle body */}
            <path d="M59,11 C82,10 103,28 103,54 C104,81 85,100 58,100 C30,100 12,80 12,54 C11,27 36,12 59,11 Z"
              strokeWidth="1.9" fill="rgba(28,26,23,0.04)"/>
            {/* Inner ring — slightly oval */}
            <ellipse cx="57" cy="55" rx="16" ry="15" strokeWidth="1" stroke="rgba(28,26,23,0.28)" fill="none"/>
            {/* Center hub */}
            <circle cx="57" cy="55" r="6" strokeWidth="1.3" fill="rgba(28,26,23,0.1)"/>
            {/* Belt clip — slightly crooked */}
            <path d="M70,8 L80,8 C82,8 82,10 82,12 L82,26 C82,28 80,27 78,27 L70,28 C68,27 68,25 69,23 L69,10 C69,9 70,8 70,8 Z"
              strokeWidth="1.3" stroke="rgba(28,26,23,0.5)"/>
            {/* Pull-out tape — irregular edges */}
            <path d="M99,66 L150,67 C151,67 151,68 151,69 L150,74 C150,75 149,75 148,75 L99,74 C98,74 98,73 99,72 Z"
              strokeWidth="1.5"/>
            <path d="M148,64 L155,64 C156,64 156,65 156,66 L155,76 C155,77 154,76 153,76 L148,76 Z"
              strokeWidth="1.2" stroke="rgba(28,26,23,0.5)"/>
            {/* Tick marks — slightly uneven */}
            <line x1="108" y1="67" x2="109" y2="73" strokeWidth="0.8" stroke="rgba(28,26,23,0.38)"/>
            <line x1="116" y1="66" x2="116" y2="75" strokeWidth="1" stroke="rgba(28,26,23,0.5)"/>
            <line x1="124" y1="67" x2="123" y2="73" strokeWidth="0.8" stroke="rgba(28,26,23,0.38)"/>
            <line x1="132" y1="65" x2="133" y2="74" strokeWidth="1" stroke="rgba(28,26,23,0.5)"/>
            <line x1="140" y1="66" x2="141" y2="72" strokeWidth="0.8" stroke="rgba(28,26,23,0.38)"/>

            {/* Hammer — foreground, tilted */}
            <g transform="rotate(-18, 128, 110)">
              {/* Head — slightly irregular parallelogram-ish */}
              <path d="M77,83 C77,82 152,80 154,81 C156,82 155,85 154,87 L153,109 C153,112 150,111 148,111 L79,110 C76,110 76,107 77,105 Z"
                strokeWidth="1.9" fill="rgba(28,26,23,0.05)"/>
              {/* Claw fork — slightly curved */}
              <path d="M151,87 C157,83 163,79 168,76" strokeWidth="1.7" fill="none"/>
              <path d="M151,105 C158,109 163,111 168,115" strokeWidth="1.7" fill="none"/>
              {/* Handle — slightly tapered */}
              <path d="M114,109 L125,109 C127,110 127,112 126,113 L124,193 C124,195 122,196 120,196 L113,195 C111,195 111,193 112,192 L112,111 C112,110 113,109 114,109 Z"
                strokeWidth="1.9" fill="rgba(28,26,23,0.04)"/>
              {/* Grip wraps — slightly curved */}
              <path d="M113,148 C117,148 121,149 125,148" strokeWidth="0.9" stroke="rgba(28,26,23,0.3)" fill="none"/>
              <path d="M113,158 C116,158 121,157 125,158" strokeWidth="0.9" stroke="rgba(28,26,23,0.3)" fill="none"/>
              <path d="M113,168 C117,168 120,169 125,168" strokeWidth="0.9" stroke="rgba(28,26,23,0.3)" fill="none"/>
              <path d="M113,178 C116,178 120,177 125,178" strokeWidth="0.9" stroke="rgba(28,26,23,0.3)" fill="none"/>
            </g>

            {/* Level ruler — slightly off-horizontal */}
            <path d="M11,221 L207,219 C209,219 210,221 209,223 L208,243 C208,245 206,244 203,244 L12,244 C10,244 9,242 10,240 Z"
              strokeWidth="1.9" fill="rgba(28,26,23,0.04)"/>
            {/* Bubble window — slightly irregular oval */}
            <path d="M79,226 C82,223 118,223 123,226 C126,228 126,237 123,239 C118,242 82,242 79,239 C76,237 76,228 79,226 Z"
              strokeWidth="1.3" stroke="rgba(28,26,23,0.5)" fill="none"/>
            {/* Bubble — slightly off-center */}
            <circle cx="102" cy="232" r="5" strokeWidth="1.2" fill="rgba(28,26,23,0.06)"/>
            <line x1="102" y1="225" x2="101" y2="239" strokeWidth="0.8" stroke="rgba(28,26,23,0.28)"/>
            {/* End circles */}
            <circle cx="22" cy="232" r="5" strokeWidth="1.3" fill="none"/>
            <circle cx="197" cy="232" r="5" strokeWidth="1.2" fill="none"/>
            {/* Measurement notches — slightly uneven */}
            <line x1="33" y1="219" x2="33" y2="226" strokeWidth="1" stroke="rgba(28,26,23,0.35)"/>
            <line x1="44" y1="219" x2="45" y2="223" strokeWidth="0.8" stroke="rgba(28,26,23,0.28)"/>
            <line x1="57" y1="219" x2="56" y2="227" strokeWidth="1" stroke="rgba(28,26,23,0.35)"/>
            <line x1="68" y1="219" x2="68" y2="223" strokeWidth="0.8" stroke="rgba(28,26,23,0.28)"/>
          </svg>
        </div>

        {/* ── CALENDAR ILLUSTRATION — lower right (like the laptop/desk) ── */}
        <div className="mf-illus-cal">
          <svg width="240" height="248" viewBox="0 0 240 248" fill="none"
            stroke="rgba(28,26,23,0.62)" strokeLinecap="round" strokeLinejoin="round">

            {/* Calendar body — slightly imperfect */}
            <path d="M4,16 L192,13 C196,13 197,16 196,21 L195,238 C196,243 193,242 190,243 L5,242 C2,242 2,238 3,234 L3,20 C2,17 3,15 4,16 Z"
              strokeWidth="1.9" fill="rgba(28,26,23,0.03)"/>
            {/* Header bar — slightly off */}
            <path d="M4,16 L192,13 C196,13 196,16 195,20 L194,48 C194,50 191,50 188,50 L5,50 C2,50 3,47 3,45 L3,19 C3,16 3,15 4,16 Z"
              strokeWidth="1.9" fill="rgba(28,26,23,0.07)"/>
            {/* Header divider — slight curve */}
            <path d="M3,43 C60,44 140,43 196,42" strokeWidth="1" stroke="rgba(28,26,23,0.2)" fill="none"/>
            {/* Month label */}
            <text x="99" y="37" textAnchor="middle" fontSize="11"
              fill="rgba(28,26,23,0.7)" fontFamily="Inter, sans-serif" fontWeight="700"
              letterSpacing="0.08em">MARCH</text>
            {/* Ring holes — slightly varied sizes */}
            <circle cx="41" cy="14" r="6.5" strokeWidth="1.4" fill="rgba(28,26,23,0.06)"/>
            <circle cx="99" cy="13" r="5.8" strokeWidth="1.3" fill="rgba(28,26,23,0.06)"/>
            <circle cx="157" cy="15" r="6.2" strokeWidth="1.4" fill="rgba(28,26,23,0.06)"/>

            {/* Day abbreviations */}
            {["M","T","W","T","F","S","S"].map((d, i) => (
              <text key={i} x={16 + i * 27} y="56" fontSize="7.5"
                fill="rgba(28,26,23,0.5)" fontFamily="Inter, sans-serif" fontWeight="600"
                textAnchor="middle">{d}</text>
            ))}

            {/* Vertical grid lines — tiny imperfections */}
            <path d="M29,63 L30,241" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>
            <path d="M56,63 L55,241" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>
            <path d="M83,62 L83,241" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>
            <path d="M110,63 L111,240" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>
            <path d="M137,62 L136,241" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>
            <path d="M164,63 L165,241" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>
            {/* Horizontal grid lines — slight imperfections */}
            <path d="M3,62 L195,63" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>
            <path d="M3,92 L196,91" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>
            <path d="M3,122 L195,122" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>
            <path d="M3,152 L196,151" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>
            <path d="M3,182 L195,183" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>
            <path d="M3,212 L196,212" strokeWidth="0.7" stroke="rgba(28,26,23,0.15)"/>

            {/* Booked cells — amber highlight with check */}
            {[
              {col:1,row:0},{col:3,row:0},{col:5,row:0},
              {col:0,row:1},{col:2,row:1},{col:4,row:1},{col:6,row:1},
              {col:1,row:2},{col:3,row:2},{col:5,row:2},
              {col:0,row:3},{col:4,row:3},
              {col:2,row:4},{col:6,row:4},
            ].map(({col, row}, i) => {
              const cx = 2 + col * 27;
              const cy = 62 + row * 30;
              return (
                <g key={i}>
                  <rect x={cx + 1} y={cy + 1} width="24" height="28" rx="2"
                    fill="rgba(201,168,76,0.18)" stroke="rgba(201,168,76,0.55)" strokeWidth="1"/>
                  <text x={cx + 13} y={cy + 19} textAnchor="middle" fontSize="9"
                    fill="rgba(201,168,76,0.9)" fontFamily="Inter, sans-serif" fontWeight="700">✓</text>
                </g>
              );
            })}

            {/* Pencil — slightly wobblier body */}
            <g transform="translate(208, 60) rotate(13)">
              {/* Body — slightly irregular */}
              <path d="M1,0 L11,1 C12,1 12,3 12,4 L11,120 C11,121 10,122 9,122 L2,121 C1,121 0,120 0,119 L0,3 C0,1 1,0 1,0 Z"
                strokeWidth="1.5" fill="rgba(28,26,23,0.04)"/>
              {/* Center line — slight drift */}
              <path d="M6,0 C5.5,30 6.5,70 6,108" strokeWidth="0.8" stroke="rgba(28,26,23,0.25)" fill="none"/>
              {/* Tip */}
              <path d="M0,120 L6,140 L12,120 Z" strokeWidth="1.4" fill="rgba(28,26,23,0.06)"/>
              {/* Graphite point */}
              <line x1="6" y1="136" x2="6" y2="142" strokeWidth="1.2" stroke="rgba(28,26,23,0.7)"/>
              {/* Eraser band */}
              <rect x="0" y="-6" width="12" height="8" rx="2" strokeWidth="1.2" fill="rgba(28,26,23,0.08)"/>
              {/* Eraser top */}
              <rect x="1" y="-12" width="10" height="7" rx="2" strokeWidth="1.2" fill="rgba(201,168,76,0.25)" stroke="rgba(201,168,76,0.6)"/>
            </g>

            {/* Scattered sparkle marks near calendar */}
            <text x="218" y="52" fontSize="9" fill="rgba(28,26,23,0.2)" fontFamily="Inter, sans-serif">✦</text>
            <text x="228" y="210" fontSize="7" fill="rgba(28,26,23,0.18)" fontFamily="Inter, sans-serif">✦</text>
          </svg>
        </div>

        {/* ── Main text content ── */}
        <div className="mf-content">
          <div className="mf-text">

            {/* Paragraph 1 — the "that's not us" */}
            <p className="mf-para">
              Plenty of agencies run ads, send traffic to a lead form, and call it a day.{" "}
              {/* "That's not us." with natural red hand-drawn underline */}
              <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
                <em>That&apos;s not us.</em>
                <svg
                  style={{ position: "absolute", bottom: "-7px", left: 0, width: "100%", height: "14px", overflow: "visible" }}
                  viewBox="0 0 220 12" preserveAspectRatio="none"
                >
                  <path
                    d="M0,9 C18,4 42,11 68,7 C94,3 118,10 145,6 C165,3 188,9 220,7"
                    stroke="#c0392b" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </span>
            </p>

            {/* Paragraph 2 — what FlowQualify does */}
            <p className="mf-para">
              We qualify every lead through conversation, send you a project brief, then{" "}
              {/* "book real appointments" — natural purple underline */}
              <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
                book real appointments
                <svg
                  style={{ position: "absolute", bottom: "-7px", left: 0, width: "100%", height: "14px", overflow: "visible" }}
                  viewBox="0 0 280 12" preserveAspectRatio="none"
                >
                  <path
                    d="M0,9 C22,4 52,11 85,7 C118,3 148,10 180,6 C205,3 242,10 280,7"
                    stroke="#7c3aed" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </span>
              {" "}on{" "}
              {/* "your calendar." — natural green hand-drawn oval */}
              <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
                your calendar.
                <svg
                  style={{ position: "absolute", top: "-10px", left: "-30px", width: "calc(100% + 50px)", height: "calc(100% + 20px)", overflow: "visible" }}
                  viewBox="0 0 200 48" preserveAspectRatio="none"
                >
                  <path
                    d="M14,24 C12,10 44,-1 100,2 C156,-1 186,10 186,24 C186,38 156,49 100,46 C44,49 12,38 14,24"
                    stroke="#16a34a" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </span>
            </p>

          </div>
        </div>

        {/* Wave bottom — into FeaturesGrid cream */}
        <svg className="mf-wave mf-wave-bottom" height="92" viewBox="0 0 1440 92" preserveAspectRatio="none">
          <path d="M0,44 Q720,12 1440,50 L1440,92 L0,92 Z" fill="#f9f0d9"/>
        </svg>

      </section>
    </>
  );
};

export default Manifesto;
