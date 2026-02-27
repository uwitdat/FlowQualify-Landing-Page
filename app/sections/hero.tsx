"use client";

import Link from "next/link";
import FlowBackground from "../components/FlowBackground";
import SplineScene from "../components/SplineScene";

export const Hero = () => {
  return (
    <>
      <style>{`
        .hero-section {
          background: #ffffff;
          padding: 100px 20px 104px;
          position: relative;
          overflow: hidden;
        }

        .hero-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; pointer-events: none; }
        .hero-container a,
        .hero-container button,
        .hero-container .hero-eyebrow,
        .hero-container .hero-video-bare,
        .hero-container .hero-social-row { pointer-events: auto; }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }

        /* Eyebrow pill */
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          background: #ffffff;
          border-radius: 999px;
          padding: 8px 20px 8px 8px; margin-bottom: 26px;
        }
        .hero-eyebrow-text {
          font-size: 14px; font-weight: 700; color: #1a6b8a;
          letter-spacing: 0.01em; white-space: nowrap;
        }

        /* Headline */
        .hero-h1 {
          font-size: 62px; font-weight: 900; line-height: 1.04;
          color: #0F172A; letter-spacing: -0.03em; margin-bottom: 22px;
        }
        .hero-grad {
          color: #1a6b8a;
        }

        /* Subhead */
        .hero-subhead {
          font-size: 17px; line-height: 1.72; color: #374151;
          max-width: 436px; margin-bottom: 32px;
        }

        /* Pay-per tag */
        .hero-ppa-tag {
          display: inline-flex; align-items: center; gap: 7px;
          background: #F0F9FF;
          border-radius: 6px; padding: 6px 12px; margin-bottom: 18px;
          box-shadow: 0 0 14px rgba(26,107,138,0.30), 0 0 28px rgba(26,107,138,0.12), 0 2px 6px rgba(26,107,138,0.10);
        }
        .hero-ppa-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #1a6b8a; flex-shrink: 0;
          box-shadow: 0 0 6px rgba(26,107,138,0.6);
        }
        .hero-ppa-text {
          font-size: 12.5px; font-weight: 700; color: #1a6b8a;
          letter-spacing: 0.03em;
        }

        /* CTA row */
        .hero-cta-row {
          display: flex; align-items: center; gap: 20px;
          margin-bottom: 52px; flex-wrap: wrap;
        }
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #0d5c73 0%, #1a6b8a 55%, #1e92b0 100%);
          color: #fff; font-size: 15px; font-weight: 800;
          padding: 16px 34px; border-radius: 14px; text-decoration: none;
          box-shadow: 0 4px 28px rgba(26,107,138,0.45), 0 1px 4px rgba(0,0,0,0.10);
          letter-spacing: -0.01em;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          cursor: pointer; white-space: nowrap; border: none;
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 44px rgba(26,107,138,0.55), 0 4px 12px rgba(30,146,176,0.30);
        }
        .hero-btn-arrow { display: inline-block; transition: transform 0.18s ease; }
        .hero-btn-primary:hover .hero-btn-arrow { transform: translateX(3px); }

        .hero-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          color: #64748B; font-size: 14px; font-weight: 600;
          text-decoration: none; cursor: pointer;
          transition: color 0.2s ease; white-space: nowrap;
        }
        .hero-btn-ghost:hover { color: #0F172A; }
        .hero-play-btn {
          width: 30px; height: 30px; border-radius: 50%;
          background: #F1F5F9;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: background 0.2s ease;
        }
        .hero-btn-ghost:hover .hero-play-btn { background: #E2E8F0; }

        /* Social proof */
        .hero-social-row { display: flex; align-items: center; gap: 14px; }
        .hero-av-stack { display: flex; }
        .hero-av {
          width: 34px; height: 34px; border-radius: 50%;
          border: 2.5px solid #fff; margin-left: -10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 800; color: white;
        }
        .hero-av:first-child { margin-left: 0; }
        .hero-av-1 { background: linear-gradient(135deg, #3B82F6, #2563EB); }
        .hero-av-2 { background: linear-gradient(135deg, #06B6D4, #0891B2); }
        .hero-av-3 { background: linear-gradient(135deg, #6366F1, #4F46E5); }
        .hero-av-4 { background: linear-gradient(135deg, #10B981, #059669); }
        .hero-social-copy { font-size: 13px; color: #64748B; line-height: 1.55; }
        .hero-social-copy strong { color: #0F172A; font-weight: 700; }
        .hero-stars { color: #F59E0B; font-size: 13px; letter-spacing: 1.5px; }

        /* Right column — video */
        .hero-video-col { display: flex; justify-content: flex-end; align-items: center; }
        .hero-video-bare {
          width: 282px; height: 590px;
          border-radius: 44px;
          overflow: hidden;
          border: 9px solid #1a1a1a;
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.10),
            0 28px 64px rgba(0,0,0,0.20);
        }
        .hero-video-bare video {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }

        @media (max-width: 920px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-h1 { font-size: 40px; }
          .hero-video-col { display: none; }
        }
      `}</style>

      <section className="hero-section">
        {/* Animated mesh background — sits at z-index 0, content at z-index 1 */}
        <FlowBackground />
        <SplineScene />

        <div className="hero-container">
          <div className="hero-grid">

            {/* ── Left column ── */}
            <div>
              <div className="hero-eyebrow">
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#1a6b8a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 12px rgba(26,107,138,0.50)" }}>
                  {/* Calendar-check icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <polyline points="9 16 11 18 15 14" />
                  </svg>
                </div>
                <span className="hero-eyebrow-text">Done-For-You Lead Generation for Kitchen &amp; Bathroom Remodelers</span>
              </div>

              <h1 className="hero-h1">
                Qualified<br />
                Kitchen &amp; Bath<br />
                <span className="hero-grad">Appointments —</span><br />
                Ready to Close.
              </h1>

              <div className="hero-ppa-tag">
                <div className="hero-ppa-dot" />
                <span className="hero-ppa-text">Pay Per Qualified Appointment Basis</span>
              </div>

              <p className="hero-subhead">
                Every lead is fully pre-qualified in chat — budget, scope, and timeline confirmed before it ever hits your calendar.
              </p>

              <div className="hero-cta-row">
                <Link href="/opt-in" className="hero-btn-primary">
                  Book Your Demo Call
                  <span className="hero-btn-arrow">→</span>
                </Link>
                <Link href="/opt-in" className="hero-btn-ghost">
                  <span className="hero-play-btn">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                      <path d="M1 1.5L9 6L1 10.5V1.5Z" fill="#64748B" />
                    </svg>
                  </span>
                  See How It Works
                </Link>
              </div>

              <div className="hero-social-row">
                <div className="hero-av-stack">
                  <div className="hero-av hero-av-1">M</div>
                  <div className="hero-av hero-av-2">T</div>
                  <div className="hero-av hero-av-3">R</div>
                  <div className="hero-av hero-av-4">J</div>
                </div>
                <div className="hero-social-copy">
                  <div className="hero-stars">★★★★★</div>
                  <strong>50+ remodelers</strong> trust FlowQualify
                </div>
              </div>
            </div>

            {/* ── Right column — video ── */}
            <div className="hero-video-col">
              <div className="hero-video-bare">
                <video
                  src={process.env.NEXT_PUBLIC_VIDEO_CHAT || "/videos/chat.mp4"}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
