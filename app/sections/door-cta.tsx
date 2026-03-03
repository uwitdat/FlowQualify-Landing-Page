"use client";

export default function DoorCta() {
  return (
    <>
      <style>{`
        @keyframes paper1-fly {
          0%   { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10%  { opacity: 1; }
          60%  { opacity: 1; }
          100% { transform: translate(-54px, -72px) rotate(-22deg); opacity: 0; }
        }
        @keyframes paper2-fly {
          0%   { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          15%  { opacity: 1; }
          65%  { opacity: 1; }
          100% { transform: translate(-30px, -90px) rotate(14deg); opacity: 0; }
        }
        @keyframes paper3-fly {
          0%   { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          5%   { opacity: 1; }
          55%  { opacity: 1; }
          100% { transform: translate(14px, -80px) rotate(-8deg); opacity: 0; }
        }
        @keyframes paper4-fly {
          0%   { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          20%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(52px, -60px) rotate(26deg); opacity: 0; }
        }
        .door-paper-1 { animation: paper1-fly 2.6s ease-out infinite; animation-delay: 0s; }
        .door-paper-2 { animation: paper2-fly 2.6s ease-out infinite; animation-delay: 0.55s; }
        .door-paper-3 { animation: paper3-fly 2.6s ease-out infinite; animation-delay: 1.1s; }
        .door-paper-4 { animation: paper4-fly 2.6s ease-out infinite; animation-delay: 1.7s; }

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
        {/* Excalidraw-style door illustration */}
        <svg
          width="200"
          height="240"
          viewBox="0 0 200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          {/* Flying papers (animated, originate near top of door opening) */}
          <g className="door-paper-1" style={{ transformOrigin: "85px 70px" }}>
            <rect x="73" y="60" width="26" height="20" rx="2" fill="#fff" stroke="#334155" strokeWidth="2" strokeLinecap="round" transform="rotate(-6 85 70)" />
            <line x1="77" y1="67" x2="95" y2="65" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="77" y1="72" x2="91" y2="71" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <g className="door-paper-2" style={{ transformOrigin: "95px 68px" }}>
            <rect x="83" y="58" width="24" height="19" rx="2" fill="#fff" stroke="#334155" strokeWidth="2" strokeLinecap="round" transform="rotate(8 95 68)" />
            <line x1="87" y1="65" x2="103" y2="63" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="87" y1="70" x2="100" y2="69" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <g className="door-paper-3" style={{ transformOrigin: "100px 65px" }}>
            <rect x="88" y="55" width="23" height="18" rx="2" fill="#fff" stroke="#334155" strokeWidth="2" strokeLinecap="round" transform="rotate(-3 100 65)" />
            <line x1="92" y1="62" x2="107" y2="60" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="92" y1="67" x2="105" y2="66" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <g className="door-paper-4" style={{ transformOrigin: "110px 72px" }}>
            <rect x="98" y="62" width="24" height="19" rx="2" fill="#fff" stroke="#334155" strokeWidth="2" strokeLinecap="round" transform="rotate(12 110 72)" />
            <line x1="102" y1="69" x2="118" y2="67" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="102" y1="74" x2="115" y2="73" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Door frame */}
          {/* Left post */}
          <path d="M 62 220 C 63 218 62 200 62 180 C 61 140 60 100 61 60 C 61 40 62 30 62 28" stroke="#22150d" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          {/* Right post */}
          <path d="M 138 220 C 137 218 138 200 138 180 C 139 140 140 100 139 60 C 139 40 138 30 138 28" stroke="#22150d" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          {/* Top beam */}
          <path d="M 60 28 C 75 27 95 27 100 28 C 110 27 125 27 140 28" stroke="#22150d" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          {/* Floor */}
          <path d="M 52 222 C 68 221 88 222 100 221 C 112 222 128 221 148 222" stroke="#22150d" strokeWidth="2.8" strokeLinecap="round" fill="none" />

          {/* Door slab — clean, no panels */}
          <path d="M 62 220 L 62 28 L 138 28 L 138 220 Z"
            fill="#F8F4EE" stroke="#22150d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

          {/* Doorknob — on the right side of door */}
          <circle cx="130" cy="132" r="6" fill="#22150d" opacity="0.7" />
          <circle cx="130" cy="132" r="3.5" fill="#F8F4EE" opacity="0.55" />

          {/* Steps */}
          <path d="M 42 222 C 62 222 88 222 100 222 C 112 222 138 222 158 222 L 162 230 C 138 230 112 230 100 230 C 88 230 62 230 38 230 Z"
            fill="#EDE8DF" stroke="#22150d" strokeWidth="2" strokeLinecap="round" />
          <path d="M 32 230 C 62 230 88 230 100 230 C 112 230 138 230 168 230 L 172 238 C 138 238 112 238 100 238 C 88 238 62 238 28 238 Z"
            fill="#E0D9CE" stroke="#22150d" strokeWidth="2" strokeLinecap="round" />
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
