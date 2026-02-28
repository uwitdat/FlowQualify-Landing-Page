"use client";

import FlowBackground from "../components/FlowBackground";

export default function Results() {
  return (
    <>
      <style>{`
        .ce-section {
          background: #ffffff;
          padding: 96px 24px;
          position: relative;
          overflow: hidden;
        }
        .ce-container { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }

        /* ── Header ── */
        .ce-header { text-align: center; margin-bottom: 60px; }

        /* Eyebrow pill — mirrors WHY MESSAGE ADS WIN but purple */
        .ce-eyebrow-pill {
          display: inline-flex; align-items: center; gap: 10px;
          background: #ffffff;
          border: 1.5px solid #1a6b8a; border-radius: 999px;
          padding: 8px 20px 8px 8px; margin-bottom: 22px;
          box-shadow:
            0 0 0 3px rgba(26,107,138,0.10),
            0 0 22px rgba(26,107,138,0.50),
            0 0 48px rgba(26,107,138,0.20),
            0 2px 8px rgba(26,107,138,0.18);
        }
        .ce-eyebrow-icon {
          width: 28px; height: 28px; border-radius: 50%;
          background: #1a6b8a;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 14px rgba(26,107,138,0.85), 0 0 28px rgba(26,107,138,0.45);
        }
        .ce-eyebrow-text {
          font-size: 12px; font-weight: 800; color: #1a6b8a;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .ce-title {
          font-size: 48px; font-weight: 900; color: #0F172A;
          letter-spacing: -0.03em; line-height: 1.08;
          margin-bottom: 14px;
        }
        .ce-title .ce-accent { color: #0F172A; }
        .ce-sub {
          font-size: 16px; color: #555555; line-height: 1.65;
          max-width: 500px; margin: 0 auto;
        }

        /* ── Cards wrapper ── */
        .ce-cards {
          display: grid;
          grid-template-columns: 1fr 64px 1fr;
          align-items: stretch;
          gap: 0;
          margin-bottom: 28px;
        }

        /* ── Bad card outer ── */
        .ce-bad-outer {
          position: relative;
          isolation: isolate;
        }

        /* Red animated gradient border wrap */
        .ce-card-bad-wrap {
          padding: 2px;
          border-radius: 22px;
          background: linear-gradient(135deg, #F87171, #EF4444, #DC2626, #F87171);
          background-size: 300% 300%;
          animation: ceBadGradShift 6s ease infinite, ceBadPulse 4.5s ease-in-out infinite;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        @keyframes ceBadGradShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ceBadPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
          50%       { box-shadow: 0 6px 28px rgba(0,0,0,0.12); }
        }

        /* ── Bad card ── */
        .ce-card-bad {
          background: linear-gradient(155deg, #fff 70%, #FFF5F5 100%);
          border-radius: 20px;
          padding: 36px 36px 32px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .ce-card-bad::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #F87171, #EF4444);
          border-radius: 20px 20px 0 0;
        }

        /* ── Good card outer ── */
        .ce-good-outer {
          position: relative;
          isolation: isolate;
        }

        /* ── Good card — cool grey border + green glow pulse ── */
        .ce-card-good-wrap {
          padding: 2px;
          border-radius: 22px;
          background: linear-gradient(135deg, #94A3B8, #CBD5E1, #94A3B8);
          background-size: 300% 300%;
          animation: ceGoodGradShift 6s ease infinite, ceGoodPulse 4.5s ease-in-out infinite;
        }
        @keyframes ceGoodGradShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ceGoodPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
          50%       { box-shadow: 0 6px 28px rgba(0,0,0,0.12); }
        }
        .ce-card-good {
          background: linear-gradient(155deg, #fff 70%, #F0FDF4 100%);
          border-radius: 20px;
          padding: 36px 36px 32px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* ── Card header row ── */
        .ce-card-head {
          display: flex; align-items: center; gap: 14px; margin-bottom: 32px;
        }
        .ce-head-icon {
          width: 42px; height: 42px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ce-head-icon-bad  { background: #FEE2E2; }
        .ce-head-icon-good { background: linear-gradient(135deg, #EDE9FE, #FDF4FF); }
        .ce-card-label { font-size: 18px; font-weight: 800; color: #0F172A; letter-spacing: -0.01em; }

        /* ── Stats ── */
        .ce-stats { display: flex; flex-direction: column; gap: 22px; flex: 1; }
        .ce-stat-key {
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.10em;
          text-transform: uppercase; color: #6B7280; margin-bottom: 3px;
        }
        .ce-stat-val {
          font-size: 46px; font-weight: 900; line-height: 1; letter-spacing: -0.02em;
        }
        .ce-val-bad  { color: #EF4444; }
        .ce-val-good { color: #1a6b8a; }

        /* ── Improvement pill ── */
        .ce-improve-pill {
          display: inline-flex; align-items: center; gap: 4px;
          background: #DCFCE7; color: #16A34A;
          font-size: 11px; font-weight: 700;
          padding: 3px 9px; border-radius: 999px;
          vertical-align: middle; margin-left: 10px;
          position: relative; top: -4px;
        }

        /* ── Bottom badge on each card ── */
        .ce-card-badge {
          display: inline-flex; align-items: center; gap: 8px;
          border-radius: 999px; padding: 10px 20px;
          font-size: 13px; font-weight: 700;
          margin-top: 30px; align-self: flex-start;
        }
        .ce-badge-bad {
          background: #FEE2E2; color: #DC2626; border: 1px solid #FECACA;
        }
        .ce-badge-good {
          background: linear-gradient(135deg, #0d5c73, #1a6b8a);
          color: #fff;
          box-shadow: 0 4px 16px rgba(26,107,138,0.35);
        }

        /* ── VS divider — centred above both halos ── */
        .ce-vs-col {
          display: flex; align-items: center; justify-content: center;
          position: relative; z-index: 20;
        }
        .ce-vs-badge {
          width: 40px; height: 40px;
          background: #ffffff;
          border-radius: 50%;
          border: 1.5px solid #CBD5E1;
          display: flex; align-items: center; justify-content: center;
          color: #64748B; font-size: 11px; font-weight: 800; letter-spacing: 0.06em;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
          flex-shrink: 0;
        }

        /* ── Bottom insight bar ── */
        .ce-insight-bar {
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 28px 28px 0;
          display: flex; align-items: center; gap: 16px;
          box-shadow: none;
        }
        .ce-insight-dot {
          width: 28px; height: 28px; border-radius: 50%;
          background: linear-gradient(135deg, #A855F7, #EC4899);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ce-insight-text { font-size: 14px; color: #0F172A; line-height: 1.6; }
        .ce-insight-text strong { color: #0F172A; font-weight: 700; }

        @media (max-width: 860px) {
          .ce-cards { grid-template-columns: 1fr; }
          .ce-vs-col { padding: 12px 0; }
          .ce-title { font-size: 34px; }
        }
      `}</style>

      <section className="ce-section">
        <FlowBackground />
        <div className="ce-container">

          {/* ── Header ── */}
          <div className="ce-header">
            <div className="ce-eyebrow-pill">
              <div className="ce-eyebrow-icon">
                {/* Trending up icon */}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <span className="ce-eyebrow-text">The Competitive Edge</span>
            </div>
            <h2 className="ce-title">
              You vs. <span className="ce-accent">Typical Contractors</span>
            </h2>
            <p className="ce-sub">
              See exactly where the gap is — and why pre-qualified leads change everything.
            </p>
          </div>

          {/* ── Cards ── */}
          <div className="ce-cards">

            {/* Bad card — red halo + animated border */}
            <div className="ce-bad-outer">
              <div className="ce-card-bad-wrap">
                <div className="ce-card-bad">
                  <div className="ce-card-head">
                    <div className="ce-head-icon ce-head-icon-bad">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                    </div>
                    <div className="ce-card-label">Typical Contractor</div>
                  </div>

                  <div className="ce-stats">
                    <div>
                      <div className="ce-stat-key">Response Time</div>
                      <div className="ce-stat-val ce-val-bad">4–8 hrs</div>
                    </div>
                    <div>
                      <div className="ce-stat-key">Show Rate</div>
                      <div className="ce-stat-val ce-val-bad">55–65%</div>
                    </div>
                    <div>
                      <div className="ce-stat-key">Close Rate</div>
                      <div className="ce-stat-val ce-val-bad">20–25%</div>
                    </div>
                  </div>

                  <div className="ce-card-badge ce-badge-bad">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    Slow. Costly. High drop-off.
                  </div>
                </div>
              </div>
            </div>

            {/* VS — z-index 20 sits above both halos */}
            <div className="ce-vs-col">
              <div className="ce-vs-badge">VS</div>
            </div>

            {/* Good card — purple halo + animated border */}
            <div className="ce-good-outer">
              <div className="ce-card-good-wrap">
                <div className="ce-card-good">
                  <div className="ce-card-head">
                    <div className="ce-head-icon ce-head-icon-good">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="ce-card-label">With FlowQualify</div>
                  </div>

                  <div className="ce-stats">
                    <div>
                      <div className="ce-stat-key">Response Time</div>
                      <div className="ce-stat-val ce-val-good">
                        &lt;60 sec
                        <span className="ce-improve-pill">↑ 480×</span>
                      </div>
                    </div>
                    <div>
                      <div className="ce-stat-key">Show Rate</div>
                      <div className="ce-stat-val ce-val-good">
                        82%
                        <span className="ce-improve-pill">↑ +27%</span>
                      </div>
                    </div>
                    <div>
                      <div className="ce-stat-key">Close Rate</div>
                      <div className="ce-stat-val ce-val-good">
                        38%
                        <span className="ce-improve-pill">↑ +15%</span>
                      </div>
                    </div>
                  </div>

                  <div className="ce-card-badge ce-badge-good">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Fast. Qualified. Compounding.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ── Bottom insight bar ── */}
          <div className="ce-insight-bar">
            <div className="ce-insight-dot">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="ce-insight-text">
              One closed job usually pays for your entire month —{" "}
              <strong>everything after that is profit.</strong>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
