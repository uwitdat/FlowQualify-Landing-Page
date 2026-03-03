"use client";

export const DashboardPreview = () => {
  return (
    <>
      <style>{`
        .dpv-wrap {
          position: relative;
          background: #242220;
          padding: 0 24px 100px;
          overflow: hidden;
        }
        .dpv-inner {
          max-width: 1360px;
          margin: 0 auto;
        }
        .dpv-label {
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.6);
          padding-top: 72px;
          margin-bottom: 16px;
        }
        .dpv-h2 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(26px, 2.8vw, 42px);
          font-weight: 700;
          color: #f0ebe0;
          text-align: center;
          line-height: 1.22;
          margin-bottom: 10px;
        }
        .dpv-sub {
          text-align: center;
          font-size: clamp(15px, 1.4vw, 18px);
          color: #C9A84C;
          font-weight: 600;
          letter-spacing: 0.01em;
          margin-bottom: 52px;
        }
        .dpv-stage {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 20px;
        }
        .dpv-browser-wrap {
          position: relative;
          z-index: 5;
          flex-shrink: 0;
          width: clamp(540px, 60vw, 980px);
          border-radius: 12px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.07),
            0 50px 120px rgba(0,0,0,0.8),
            0 20px 40px rgba(0,0,0,0.5);
        }
        .dpv-chrome {
          background: #232323;
          height: 36px;
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 6px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          flex-shrink: 0;
        }
        .dpv-d  { width: 11px; height: 11px; border-radius: 50%; flex-shrink: 0; }
        .dpv-dr { background: #ff5f57; }
        .dpv-dy { background: #febc2e; }
        .dpv-dg { background: #28c840; }
        .dpv-addr {
          flex: 1;
          height: 21px;
          background: rgba(255,255,255,0.06);
          border-radius: 4px;
          margin: 0 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: rgba(255,255,255,0.22);
          font-family: Inter, monospace;
        }
        .dpv-panel-l {
          flex-shrink: 0;
          z-index: 4;
          width: clamp(220px, 20vw, 300px);
          transform: rotate(-7deg) translateY(-16px) translateZ(0);
          filter: drop-shadow(-8px 28px 40px rgba(0,0,0,0.75));
          will-change: transform;
        }
        .dpv-panel-r {
          flex-shrink: 0;
          z-index: 4;
          width: clamp(220px, 20vw, 300px);
          transform: rotate(7deg) translateY(-16px) translateZ(0);
          filter: drop-shadow(8px 28px 40px rgba(0,0,0,0.75));
          will-change: transform;
        }
        .dpv-panel-l svg, .dpv-panel-r svg {
          width: 100%; height: auto; display: block;
          text-rendering: geometricPrecision;
          shape-rendering: geometricPrecision;
        }
        @media (max-width: 1100px) {
          .dpv-panel-l, .dpv-panel-r { display: none; }
          .dpv-browser-wrap { width: 100%; }
        }
        @media (max-width: 600px) {
          .dpv-wrap { padding: 0 16px 70px; }
        }
      `}</style>

      <section className="dpv-wrap">
        <div className="dpv-inner">
          <p className="dpv-label">Your command center</p>
          <h2 className="dpv-h2">Every qualified lead, every booked job — one place.</h2>
          <p className="dpv-sub">All generated on{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              auto-pilot
              <svg
                style={{ position: "absolute", bottom: "-6px", left: "-2px", width: "calc(100% + 4px)", height: "12px", overflow: "visible" }}
                viewBox="0 0 100 12" preserveAspectRatio="none"
              >
                {/* First stroke — slightly wavy */}
                <path
                  d="M0,5 C12,3 28,7 46,4 C64,1 80,6 100,4"
                  stroke="#C9A84C" strokeWidth="2.2" fill="none" strokeLinecap="round"
                />
                {/* Second stroke — offset, natural double-line */}
                <path
                  d="M0,9 C14,7 30,11 48,8 C66,5 82,10 100,8"
                  stroke="#C9A84C" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeOpacity="0.65"
                />
              </svg>
            </span>
            .
          </p>

          <div className="dpv-stage">

            {/* ── Left panel: Lead Details ── */}
            <div className="dpv-panel-l">
              <svg viewBox="0 0 280 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="panelClipL"><rect width="280" height="520" rx="10"/></clipPath>
                  <linearGradient id="ldFade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="72%" stopColor="#141414" stopOpacity="0"/>
                    <stop offset="100%" stopColor="#141414" stopOpacity="1"/>
                  </linearGradient>
                </defs>
                <rect width="280" height="520" rx="10" fill="#141414" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>
                <g clipPath="url(#panelClipL)">
                  {/* Header */}
                  <text x="16" y="27" fontSize="14" fill="#f0ebe0" fontFamily="Inter,sans-serif" fontWeight="700">Lead Details</text>
                  <rect x="110" y="13" width="36" height="18" rx="4" fill="rgba(16,185,129,0.18)" stroke="rgba(16,185,129,0.38)" strokeWidth="1"/>
                  <text x="128" y="26" textAnchor="middle" fontSize="9" fill="rgba(16,185,129,0.9)" fontFamily="Inter,sans-serif" fontWeight="600">Text</text>
                  <text x="264" y="27" fontSize="16" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">×</text>
                  <line x1="0" y1="40" x2="280" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  {/* Tabs */}
                  <text x="10" y="57" fontSize="9" fill="rgba(255,255,255,0.85)" fontFamily="Inter,sans-serif" fontWeight="600">Lead Details</text>
                  <line x1="10" y1="64" x2="64" y2="64" stroke="rgba(224,36,131,0.85)" strokeWidth="2"/>
                  <text x="70" y="57" fontSize="9" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Insights</text>
                  <text x="112" y="57" fontSize="9" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Est. Brief</text>
                  <text x="158" y="57" fontSize="9" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Conversation</text>
                  <text x="224" y="57" fontSize="9" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Appts</text>
                  <line x1="0" y1="70" x2="280" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  {/* Lead Value row */}
                  <text x="14" y="90" fontSize="12" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Lead Value</text>
                  <text x="116" y="90" fontSize="9" fill="rgba(224,36,131,0.55)" fontFamily="Inter,sans-serif">↻ Refresh</text>
                  <rect x="158" y="77" width="110" height="20" rx="5" fill="rgba(224,36,131,0.82)"/>
                  <text x="213" y="91" textAnchor="middle" fontSize="8.5" fill="white" fontFamily="Inter,sans-serif" fontWeight="600">Unmark as High Value</text>
                  {/* High badge */}
                  <rect x="14" y="99" width="40" height="20" rx="5" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.38)" strokeWidth="1"/>
                  <text x="34" y="113" textAnchor="middle" fontSize="10" fill="rgba(16,185,129,0.9)" fontFamily="Inter,sans-serif" fontWeight="600">High</text>
                  {/* Score Rationale card */}
                  <rect x="10" y="128" width="260" height="68" rx="6" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.055)" strokeWidth="1"/>
                  <text x="20" y="144" fontSize="10" fill="rgba(255,255,255,0.5)" fontFamily="Inter,sans-serif" fontWeight="600">Score Rationale</text>
                  <text x="20" y="159" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">Margaret&apos;s lead is strong due to her complete</text>
                  <text x="20" y="172" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">submission and defined budget for kitchen reno.</text>
                  <text x="20" y="185" fontSize="9" fill="rgba(255,255,255,0.24)" fontFamily="Inter,sans-serif">Flexible timeline reduces urgency classification.</text>
                  {/* Lead Assessment */}
                  <text x="14" y="215" fontSize="12" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Lead Assessment</text>
                  {/* Budget card */}
                  <rect x="10" y="222" width="260" height="44" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.055)" strokeWidth="1"/>
                  <text x="20" y="239" fontSize="10.5" fill="rgba(255,255,255,0.6)" fontFamily="Inter,sans-serif" fontWeight="600">Budget Alignment</text>
                  <rect x="148" y="228" width="54" height="16" rx="4" fill="rgba(59,130,246,0.14)" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
                  <text x="175" y="240" textAnchor="middle" fontSize="8.5" fill="rgba(96,165,250,0.88)" fontFamily="Inter,sans-serif" fontWeight="600">MEDIUM</text>
                  <text x="20" y="256" fontSize="9" fill="rgba(255,255,255,0.3)" fontFamily="Inter,sans-serif">$50K–$100K within typical renovation range.</text>
                  {/* Scope card */}
                  <rect x="10" y="272" width="260" height="44" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.055)" strokeWidth="1"/>
                  <text x="20" y="289" fontSize="10.5" fill="rgba(255,255,255,0.6)" fontFamily="Inter,sans-serif" fontWeight="600">Scope Complexity</text>
                  <rect x="158" y="278" width="54" height="16" rx="4" fill="rgba(59,130,246,0.14)" stroke="rgba(59,130,246,0.3)" strokeWidth="1"/>
                  <text x="185" y="290" textAnchor="middle" fontSize="8.5" fill="rgba(96,165,250,0.88)" fontFamily="Inter,sans-serif" fontWeight="600">MEDIUM</text>
                  <text x="20" y="306" fontSize="9" fill="rgba(255,255,255,0.3)" fontFamily="Inter,sans-serif">Kitchen Renovation with layout changes needed.</text>
                  {/* Contact Information */}
                  <text x="14" y="336" fontSize="12" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Contact Information</text>
                  <text x="14" y="356" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Name</text>
                  <text x="14" y="370" fontSize="10.5" fill="rgba(255,255,255,0.75)" fontFamily="Inter,sans-serif" fontWeight="600">Margaret Thatch</text>
                  <text x="148" y="356" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Phone</text>
                  <text x="148" y="370" fontSize="10.5" fill="rgba(255,255,255,0.75)" fontFamily="Inter,sans-serif" fontWeight="600">+1 (416) 509 2939</text>
                  <text x="14" y="390" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Email</text>
                  <text x="14" y="404" fontSize="10.5" fill="rgba(255,255,255,0.75)" fontFamily="Inter,sans-serif" fontWeight="600">margaret@gmail.com</text>
                  <text x="148" y="390" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Postal Code</text>
                  <text x="148" y="404" fontSize="10.5" fill="rgba(255,255,255,0.75)" fontFamily="Inter,sans-serif" fontWeight="600">M2M4L9</text>
                  {/* Project Details */}
                  <text x="14" y="432" fontSize="12" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Project Details</text>
                  <text x="14" y="452" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Project Type</text>
                  <text x="14" y="466" fontSize="10.5" fill="rgba(255,255,255,0.75)" fontFamily="Inter,sans-serif" fontWeight="600">Kitchen Renovation</text>
                  <text x="148" y="452" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Budget</text>
                  <text x="148" y="466" fontSize="10.5" fill="rgba(255,255,255,0.75)" fontFamily="Inter,sans-serif" fontWeight="600">$50K – $100K</text>
                  <text x="14" y="486" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Timeline</text>
                  <text x="14" y="500" fontSize="10.5" fill="rgba(255,255,255,0.75)" fontFamily="Inter,sans-serif">Just exploring</text>
                  {/* Bottom fade */}
                  <rect x="0" y="420" width="280" height="100" fill="url(#ldFade)"/>
                </g>
              </svg>
            </div>

            {/* ── Center: Browser + CRM ── */}
            <div className="dpv-browser-wrap">
              <div className="dpv-chrome">
                <div className="dpv-d dpv-dr"/>
                <div className="dpv-d dpv-dy"/>
                <div className="dpv-d dpv-dg"/>
                <div className="dpv-addr">app.flowqualify.com/leads</div>
              </div>
              <svg width="100%" viewBox="0 0 860 490" xmlns="http://www.w3.org/2000/svg" style={{display:"block"}}>
                <defs>
                  <linearGradient id="dpvFade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0f0f0f" stopOpacity="0"/>
                    <stop offset="100%" stopColor="#0f0f0f" stopOpacity="1"/>
                  </linearGradient>
                </defs>
                {/* Sidebar */}
                <rect width="185" height="490" fill="#111"/>
                <circle cx="22" cy="28" r="9" fill="rgba(224,36,131,0.25)"/>
                <circle cx="22" cy="28" r="5" fill="rgba(224,36,131,0.6)"/>
                <text x="38" y="33" fontSize="12.5" fill="#f0ebe0" fontFamily="Inter,sans-serif" fontWeight="800">FlowQualify</text>
                <text x="166" y="33" fontSize="11" fill="rgba(255,255,255,0.15)" fontFamily="Inter,sans-serif">‹</text>
                <text x="28" y="73" fontSize="10.5" fill="rgba(255,255,255,0.35)" fontFamily="Inter,sans-serif">Dashboard</text>
                <rect x="8" y="81" width="168" height="26" rx="5" fill="rgba(255,255,255,0.07)"/>
                <text x="28" y="98" fontSize="10.5" fill="rgba(255,255,255,0.9)" fontFamily="Inter,sans-serif" fontWeight="600">Leads</text>
                <text x="28" y="125" fontSize="10.5" fill="rgba(255,255,255,0.32)" fontFamily="Inter,sans-serif">Appointments</text>
                <text x="28" y="150" fontSize="10.5" fill="rgba(255,255,255,0.32)" fontFamily="Inter,sans-serif">Ads &amp; Performance</text>
                <text x="28" y="175" fontSize="10.5" fill="rgba(255,255,255,0.32)" fontFamily="Inter,sans-serif">Form Builder</text>
                <text x="28" y="200" fontSize="10.5" fill="rgba(255,255,255,0.32)" fontFamily="Inter,sans-serif">Email Assistant</text>
                <text x="28" y="225" fontSize="10.5" fill="rgba(255,255,255,0.32)" fontFamily="Inter,sans-serif">Knowledge Base</text>
                <text x="28" y="250" fontSize="10.5" fill="rgba(255,255,255,0.32)" fontFamily="Inter,sans-serif">AI Playground</text>
                <line x1="10" y1="272" x2="174" y2="272" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <text x="14" y="288" fontSize="8.5" fill="rgba(255,255,255,0.18)" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1">PERSONAL</text>
                <text x="28" y="308" fontSize="10.5" fill="rgba(255,255,255,0.32)" fontFamily="Inter,sans-serif">Settings</text>
                <text x="28" y="331" fontSize="10.5" fill="rgba(255,255,255,0.32)" fontFamily="Inter,sans-serif">Integrations</text>
                <line x1="10" y1="456" x2="174" y2="456" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                <text x="14" y="469" fontSize="8.5" fill="rgba(255,255,255,0.15)" fontFamily="Inter,sans-serif">Contractor</text>
                <text x="14" y="484" fontSize="10" fill="rgba(255,255,255,0.55)" fontFamily="Inter,sans-serif" fontWeight="600">A &amp; B Renovations</text>
                {/* Main content */}
                <rect x="185" y="0" width="675" height="490" fill="#0f0f0f"/>
                <text x="205" y="28" fontSize="19" fill="#f0ebe0" fontFamily="Inter,sans-serif" fontWeight="700">Leads</text>
                <text x="205" y="44" fontSize="9.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">All contacts and leads for A &amp; B Renovations</text>
                <rect x="755" y="12" width="92" height="26" rx="6" fill="rgba(224,36,131,0.85)"/>
                <text x="801" y="29" textAnchor="middle" fontSize="9.5" fill="white" fontFamily="Inter,sans-serif" fontWeight="600">+ Create Lead</text>
                <rect x="205" y="54" width="642" height="26" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                <text x="220" y="71" fontSize="9.5" fill="rgba(255,255,255,0.18)" fontFamily="Inter,sans-serif">Search by name, email, phone, project...</text>
                <rect x="205" y="88" width="100" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                <text x="248" y="103" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.4)" fontFamily="Inter,sans-serif">All States ▾</text>
                <rect x="314" y="88" width="130" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                <text x="379" y="103" textAnchor="middle" fontSize="9.5" fill="rgba(255,255,255,0.4)" fontFamily="Inter,sans-serif">Recently Updated ▾</text>
                <rect x="205" y="118" width="642" height="24" rx="4" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.18)" strokeWidth="1"/>
                <text x="218" y="134" fontSize="9.5" fill="rgba(16,185,129,0.8)" fontFamily="Inter,sans-serif" fontWeight="600">High Value Leads</text>
                <text x="300" y="134" fontSize="9.5" fill="rgba(255,255,255,0.3)" fontFamily="Inter,sans-serif"> are highlighted in green.</text>
                <rect x="640" y="122" width="88" height="16" rx="4" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.35)" strokeWidth="1"/>
                <text x="684" y="134" textAnchor="middle" fontSize="7.5" fill="rgba(16,185,129,0.85)" fontFamily="Inter,sans-serif">Show All High Value</text>
                {/* Table header */}
                <rect x="205" y="148" width="642" height="20" fill="rgba(255,255,255,0.015)"/>
                <text x="218" y="162" fontSize="8.5" fill="rgba(255,255,255,0.18)" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="0.06em">CONTACT</text>
                <text x="418" y="162" fontSize="8.5" fill="rgba(255,255,255,0.18)" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="0.06em">PROJECT</text>
                <text x="536" y="162" fontSize="8.5" fill="rgba(255,255,255,0.18)" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="0.06em">BUDGET</text>
                <text x="642" y="162" fontSize="8.5" fill="rgba(255,255,255,0.18)" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="0.06em">STATE</text>
                <text x="747" y="162" fontSize="8.5" fill="rgba(255,255,255,0.18)" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="0.06em">UPDATED</text>
                {/* Row 1 */}
                <rect x="205" y="168" width="642" height="34" fill="rgba(16,185,129,0.04)"/>
                <text x="218" y="183" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Margaret Thatch</text>
                <text x="218" y="196" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">+1(416)509 2939</text>
                <text x="418" y="188" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">Kitchen Renovation</text>
                <text x="536" y="188" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">$50,000–100,000</text>
                <rect x="638" y="178" width="78" height="17" rx="8.5" fill="rgba(59,130,246,0.14)" stroke="rgba(59,130,246,0.38)" strokeWidth="1"/>
                <text x="677" y="190" textAnchor="middle" fontSize="8" fill="rgba(96,165,250,0.9)" fontFamily="Inter,sans-serif" fontWeight="600">Ready to Book</text>
                <text x="747" y="188" fontSize="9" fill="rgba(255,255,255,0.22)" fontFamily="Inter,sans-serif">3/2/2026</text>
                <line x1="205" y1="202" x2="847" y2="202" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                {/* Row 2 */}
                <rect x="205" y="202" width="642" height="34" fill="rgba(16,185,129,0.03)"/>
                <text x="218" y="217" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Martine</text>
                <text x="218" y="230" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">lawmartin481@gmail.com</text>
                <text x="418" y="222" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">kitchen renovation</text>
                <text x="536" y="222" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">$40,000</text>
                <rect x="638" y="212" width="78" height="17" rx="8.5" fill="rgba(59,130,246,0.14)" stroke="rgba(59,130,246,0.38)" strokeWidth="1"/>
                <text x="677" y="224" textAnchor="middle" fontSize="8" fill="rgba(96,165,250,0.9)" fontFamily="Inter,sans-serif" fontWeight="600">Ready to Book</text>
                <text x="747" y="222" fontSize="9" fill="rgba(255,255,255,0.22)" fontFamily="Inter,sans-serif">3/2/2026</text>
                <line x1="205" y1="236" x2="847" y2="236" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                {/* Row 3 */}
                <rect x="205" y="236" width="642" height="34" fill="rgba(16,185,129,0.04)"/>
                <text x="218" y="251" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Pete Lannisport</text>
                <text x="218" y="264" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">+1(647)964 3925</text>
                <text x="418" y="256" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">Kitchen Renovation</text>
                <text x="536" y="256" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">$100,000–200,000</text>
                <rect x="638" y="246" width="78" height="17" rx="8.5" fill="rgba(59,130,246,0.14)" stroke="rgba(59,130,246,0.38)" strokeWidth="1"/>
                <text x="677" y="258" textAnchor="middle" fontSize="8" fill="rgba(96,165,250,0.9)" fontFamily="Inter,sans-serif" fontWeight="600">Ready to Book</text>
                <text x="747" y="256" fontSize="9" fill="rgba(255,255,255,0.22)" fontFamily="Inter,sans-serif">3/2/2026</text>
                <line x1="205" y1="270" x2="847" y2="270" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                {/* Row 4 */}
                <text x="218" y="285" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Alla Alexander</text>
                <text x="218" y="298" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">+1(647)202 2494</text>
                <text x="418" y="290" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">kitchen remodel</text>
                <text x="536" y="290" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">$18,000</text>
                <rect x="638" y="280" width="66" height="17" rx="8.5" fill="rgba(251,191,36,0.11)" stroke="rgba(251,191,36,0.32)" strokeWidth="1"/>
                <text x="671" y="292" textAnchor="middle" fontSize="8" fill="rgba(251,191,36,0.88)" fontFamily="Inter,sans-serif" fontWeight="600">Qualifying</text>
                <text x="747" y="290" fontSize="9" fill="rgba(255,255,255,0.22)" fontFamily="Inter,sans-serif">3/2/2026</text>
                <line x1="205" y1="304" x2="847" y2="304" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                {/* Row 5 */}
                <text x="218" y="319" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Huey Lewis</text>
                <text x="218" y="332" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">+1(416)928 3923</text>
                <text x="418" y="324" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">kitchen renovation</text>
                <text x="536" y="324" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">$65,000</text>
                <rect x="638" y="314" width="66" height="17" rx="8.5" fill="rgba(251,191,36,0.11)" stroke="rgba(251,191,36,0.32)" strokeWidth="1"/>
                <text x="671" y="326" textAnchor="middle" fontSize="8" fill="rgba(251,191,36,0.88)" fontFamily="Inter,sans-serif" fontWeight="600">Qualifying</text>
                <text x="747" y="324" fontSize="9" fill="rgba(255,255,255,0.22)" fontFamily="Inter,sans-serif">3/2/2026</text>
                <line x1="205" y1="338" x2="847" y2="338" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                {/* Row 6 */}
                <text x="218" y="353" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Saul Goodman</text>
                <text x="218" y="366" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">+1(416)827 2844</text>
                <text x="418" y="358" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">Basement Reno</text>
                <text x="536" y="358" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">$45,000</text>
                <rect x="638" y="348" width="66" height="17" rx="8.5" fill="rgba(251,191,36,0.11)" stroke="rgba(251,191,36,0.32)" strokeWidth="1"/>
                <text x="671" y="360" textAnchor="middle" fontSize="8" fill="rgba(251,191,36,0.88)" fontFamily="Inter,sans-serif" fontWeight="600">Qualifying</text>
                <text x="747" y="358" fontSize="9" fill="rgba(255,255,255,0.22)" fontFamily="Inter,sans-serif">3/2/2026</text>
                <line x1="205" y1="372" x2="847" y2="372" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                {/* Row 7 */}
                <text x="218" y="387" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Hector Salamanca</text>
                <text x="218" y="400" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">+1(647)982 4939</text>
                <text x="418" y="392" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">Full kitchen reno</text>
                <text x="536" y="392" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">$75,000</text>
                <rect x="638" y="382" width="66" height="17" rx="8.5" fill="rgba(251,191,36,0.11)" stroke="rgba(251,191,36,0.32)" strokeWidth="1"/>
                <text x="671" y="394" textAnchor="middle" fontSize="8" fill="rgba(251,191,36,0.88)" fontFamily="Inter,sans-serif" fontWeight="600">Qualifying</text>
                <text x="747" y="392" fontSize="9" fill="rgba(255,255,255,0.22)" fontFamily="Inter,sans-serif">3/2/2026</text>
                <line x1="205" y1="406" x2="847" y2="406" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                {/* Row 8 */}
                <rect x="205" y="406" width="642" height="34" fill="rgba(16,185,129,0.03)"/>
                <text x="218" y="421" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Dan</text>
                <text x="218" y="434" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">danspergler@gmail.com</text>
                <text x="418" y="426" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">Cabinet Refacing</text>
                <text x="536" y="426" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">$20,000</text>
                <rect x="638" y="416" width="78" height="17" rx="8.5" fill="rgba(59,130,246,0.14)" stroke="rgba(59,130,246,0.38)" strokeWidth="1"/>
                <text x="677" y="428" textAnchor="middle" fontSize="8" fill="rgba(96,165,250,0.9)" fontFamily="Inter,sans-serif" fontWeight="600">Ready to Book</text>
                <text x="747" y="426" fontSize="9" fill="rgba(255,255,255,0.22)" fontFamily="Inter,sans-serif">2/25/2026</text>
                <line x1="205" y1="440" x2="847" y2="440" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                {/* Row 9 */}
                <rect x="205" y="440" width="642" height="50" fill="rgba(16,185,129,0.03)"/>
                <text x="218" y="455" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Stannis B</text>
                <text x="218" y="468" fontSize="8.5" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">+1(647)961 3929</text>
                <text x="418" y="460" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">Kitchen Renovation</text>
                <text x="536" y="460" fontSize="9.5" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">$25,000–50,000</text>
                <rect x="638" y="450" width="78" height="17" rx="8.5" fill="rgba(59,130,246,0.14)" stroke="rgba(59,130,246,0.38)" strokeWidth="1"/>
                <text x="677" y="462" textAnchor="middle" fontSize="8" fill="rgba(96,165,250,0.9)" fontFamily="Inter,sans-serif" fontWeight="600">Ready to Book</text>
                <text x="747" y="460" fontSize="9" fill="rgba(255,255,255,0.22)" fontFamily="Inter,sans-serif">2/22/2026</text>
                {/* Bottom fade */}
                <rect x="185" y="390" width="675" height="100" fill="url(#dpvFade)"/>
              </svg>
            </div>

            {/* ── Right panel: Estimator Brief ── */}
            <div className="dpv-panel-r">
              <svg viewBox="0 0 280 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="panelClipR"><rect width="280" height="520" rx="10"/></clipPath>
                  <linearGradient id="ebFade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="72%" stopColor="#141414" stopOpacity="0"/>
                    <stop offset="100%" stopColor="#141414" stopOpacity="1"/>
                  </linearGradient>
                </defs>
                <rect width="280" height="520" rx="10" fill="#141414" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>
                <g clipPath="url(#panelClipR)">
                  {/* Header */}
                  <text x="16" y="27" fontSize="14" fill="#f0ebe0" fontFamily="Inter,sans-serif" fontWeight="700">Lead Details</text>
                  <rect x="110" y="13" width="36" height="18" rx="4" fill="rgba(16,185,129,0.18)" stroke="rgba(16,185,129,0.38)" strokeWidth="1"/>
                  <text x="128" y="26" textAnchor="middle" fontSize="9" fill="rgba(16,185,129,0.9)" fontFamily="Inter,sans-serif" fontWeight="600">Text</text>
                  <text x="264" y="27" fontSize="16" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">×</text>
                  <line x1="0" y1="40" x2="280" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  {/* Tabs — Estimator Brief active */}
                  <text x="10" y="57" fontSize="9" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Lead Details</text>
                  <text x="70" y="57" fontSize="9" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Insights</text>
                  <text x="112" y="57" fontSize="9" fill="rgba(255,255,255,0.85)" fontFamily="Inter,sans-serif" fontWeight="600">Est. Brief</text>
                  <line x1="112" y1="64" x2="158" y2="64" stroke="rgba(224,36,131,0.85)" strokeWidth="2"/>
                  <text x="162" y="57" fontSize="9" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Conversation</text>
                  <text x="228" y="57" fontSize="9" fill="rgba(255,255,255,0.28)" fontFamily="Inter,sans-serif">Appts</text>
                  <line x1="0" y1="70" x2="280" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  {/* Heading */}
                  <rect x="14" y="81" width="13" height="16" rx="2.5" fill="rgba(224,36,131,0.3)"/>
                  <text x="34" y="94" fontSize="12" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Estimator Brief</text>
                  <text x="222" y="94" fontSize="9.5" fill="rgba(224,36,131,0.7)" fontFamily="Inter,sans-serif">Regenerate</text>
                  {/* Content box */}
                  <rect x="10" y="104" width="260" height="402" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                  {/* Brief title */}
                  <text x="20" y="122" fontSize="9.5" fill="rgba(255,255,255,0.65)" fontFamily="Inter,sans-serif" fontWeight="600">Estimator Brief – Kitchen Reno for Margaret</text>
                  {/* S1 */}
                  <text x="20" y="142" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Section 1: Location &amp; Contact</text>
                  <text x="20" y="156" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Client name: Margaret Thatch</text>
                  <text x="20" y="168" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Phone: +14165092939</text>
                  <text x="20" y="180" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Email: margaret@gmail.com</text>
                  <text x="20" y="192" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Postal: M2M4L9 · 📍 4.4 km from base</text>
                  {/* S2 */}
                  <text x="20" y="212" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Section 2: Project Overview &amp; Goals</text>
                  <text x="20" y="226" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Kitchen reno focused on improving layout</text>
                  <text x="20" y="238" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">  and storage.</text>
                  <text x="20" y="250" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Client is cooking more at home.</text>
                  {/* S3 */}
                  <text x="20" y="270" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Section 3: Scope, Surfaces &amp; Access</text>
                  <text x="20" y="284" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Known scope: potential layout changes,</text>
                  <text x="20" y="296" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">  moving appliances (stove/fridge).</text>
                  <text x="20" y="308" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Confirm entry points and parking on arrival.</text>
                  {/* S4 */}
                  <text x="20" y="328" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Section 4: Budget, Timeline &amp; Fit</text>
                  <text x="20" y="342" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Budget: $50K–$100K aligns with full reno</text>
                  <text x="20" y="354" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">  costs ($70k–$120k+ for layout changes).</text>
                  <text x="20" y="366" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Timeline: Client is just exploring options.</text>
                  {/* S5 */}
                  <text x="20" y="386" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Section 5: Risks &amp; Red Flags</text>
                  <text x="20" y="400" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Exact project address not confirmed.</text>
                  <text x="20" y="412" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Missing project size/measurements.</text>
                  <text x="20" y="424" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Client still exploring; may indicate indecision.</text>
                  {/* S6 */}
                  <text x="20" y="444" fontSize="10" fill="rgba(255,255,255,0.82)" fontFamily="Inter,sans-serif" fontWeight="600">Section 6: On-Site Game Plan</text>
                  <text x="20" y="458" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Open by discussing current kitchen pain points.</text>
                  <text x="20" y="470" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Ask about specific storage and layout goals.</text>
                  <text x="20" y="482" fontSize="9" fill="rgba(255,255,255,0.58)" fontFamily="Inter,sans-serif">– Measure kitchen dimensions and features.</text>
                  {/* Bottom fade */}
                  <rect x="0" y="420" width="280" height="100" fill="url(#ebFade)"/>
                </g>
              </svg>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPreview;
