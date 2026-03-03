"use client";

import { useEffect, useState } from "react";

const WORDS = ["busy", "growing", "quality-driven", "serious", "ambitious", "successful"];

export const Pitch = () => {
  const [idx, setIdx] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setOut(true);
      setTimeout(() => {
        setIdx(i => (i + 1) % WORDS.length);
        setOut(false);
      }, 200);
    }, 1100);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        .pt-section {
          position: relative;
          background: #e8e3d8;
          min-height: 500px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 110px 80px 120px;
        }

        .pt-wave {
          position: absolute;
          left: 0;
          width: 100%;
          pointer-events: none;
          z-index: 2;
        }
        .pt-wave-top  { top:    -1px; }
        .pt-wave-bottom { bottom: -1px; }

        .pt-content {
          position: relative;
          z-index: 4;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
        }

        .pt-h2 {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(44px, 5.8vw, 76px);
          font-weight: 700;
          color: #1c1917;
          line-height: 1.12;
          letter-spacing: -0.025em;
        }

        .pt-word {
          color: #C9A84C;
          display: inline-block;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .pt-word-out {
          opacity: 0;
          transform: translateY(-10px);
        }

        /* × marks */
        .pt-x {
          position: absolute;
          pointer-events: none;
          z-index: 3;
        }

        /* Illustrations */
        .pt-illus-left {
          position: absolute;
          bottom: 88px;
          left: 4%;
          z-index: 3;
          opacity: 0.72;
        }
        .pt-illus-right {
          position: absolute;
          top: 72px;
          right: 4%;
          z-index: 3;
          opacity: 0.72;
          width: 140px;
          height: 220px;
        }
        .pt-string {
          position: absolute;
          opacity: 0.2;
          pointer-events: none;
        }
        @keyframes ptSteamRise {
          0%   { opacity: 0; transform: translateY(10px); }
          18%  { opacity: 0.65; }
          70%  { opacity: 0.3; }
          100% { opacity: 0; transform: translateY(-18px); }
        }
        .pt-steam-1 { animation: ptSteamRise 3.0s ease-in-out 0.3s infinite; }
        .pt-steam-2 { animation: ptSteamRise 3.0s ease-in-out 1.1s infinite; }
        .pt-steam-3 { animation: ptSteamRise 3.0s ease-in-out 1.9s infinite; }

        @media (max-width: 960px) {
          .pt-illus-left, .pt-illus-right { display: none; }
          .pt-section { padding: 90px 32px 100px; }
        }
        @media (max-width: 600px) {
          .pt-h2 { font-size: clamp(36px, 9vw, 52px); }
          .pt-section { padding: 75px 24px 85px; }
        }
      `}</style>

      <section className="pt-section">

        {/* Wave top — landing dark bg bleeds in from top */}
        <svg className="pt-wave pt-wave-top" height="90" viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,45 Q720,82 0,58 Z" fill="#242220"/>
        </svg>

        {/* Fridge sketch — open door, lower left */}
        <div className="pt-illus-left">
          <svg width="160" height="225" viewBox="-52 0 162 225" fill="none"
            stroke="rgba(28,26,23,0.65)" strokeLinecap="round" strokeLinejoin="round">

            {/* === FRIDGE INTERIOR BODY === */}
            <path d="M6,5 L103,4 C105,4 106,6 106,8 L105,213 C105,215 103,216 101,216 L7,215 C5,215 4,213 4,211 L4,7 C4,5 5,5 6,5 Z"
              strokeWidth="1.8" fill="rgba(28,26,23,0.06)"/>

            {/* Freezer separator */}
            <path d="M4,72 C35,73 70,72 106,71" strokeWidth="1.7"/>

            {/* Interior shelves */}
            <path d="M4,110 C40,111 70,110 106,109" strokeWidth="1.1" stroke="rgba(28,26,23,0.35)" strokeDasharray="5 3"/>
            <path d="M4,152 C40,153 70,152 106,151" strokeWidth="1.1" stroke="rgba(28,26,23,0.35)" strokeDasharray="5 3"/>
            <path d="M4,188 C40,189 70,188 106,187" strokeWidth="1.1" stroke="rgba(28,26,23,0.35)" strokeDasharray="5 3"/>

            {/* Interior items — bottle */}
            <path d="M22,108 L22,90 C22,88 24,86 24,82 L24,76" strokeWidth="1.1" stroke="rgba(28,26,23,0.4)" fill="none"/>
            <path d="M20,108 L26,108" strokeWidth="1" stroke="rgba(28,26,23,0.4)"/>
            <ellipse cx="24" cy="76" rx="3" ry="2" strokeWidth="1" stroke="rgba(28,26,23,0.35)" fill="none"/>
            {/* Container on shelf */}
            <rect x="56" y="120" width="20" height="28" rx="2" strokeWidth="1" stroke="rgba(28,26,23,0.32)" fill="rgba(28,26,23,0.03)"/>
            {/* Can */}
            <rect x="72" y="82" width="14" height="22" rx="3" strokeWidth="1" stroke="rgba(28,26,23,0.3)" fill="rgba(28,26,23,0.03)"/>

            {/* Hinges — right side */}
            <rect x="98" y="9"   width="7" height="11" rx="1.5" strokeWidth="1" stroke="rgba(28,26,23,0.4)" fill="rgba(28,26,23,0.07)"/>
            <rect x="98" y="64"  width="7" height="11" rx="1.5" strokeWidth="1" stroke="rgba(28,26,23,0.4)" fill="rgba(28,26,23,0.07)"/>
            <rect x="98" y="202" width="7" height="11" rx="1.5" strokeWidth="1" stroke="rgba(28,26,23,0.4)" fill="rgba(28,26,23,0.07)"/>

            {/* === OPEN DOOR — swung 90° to the left, shown in perspective === */}
            <path d="M4,5 L-46,10 C-48,10 -48,13 -48,15 L-47,208 C-47,211 -45,212 -43,211 L4,213"
              strokeWidth="1.8" fill="rgba(28,26,23,0.04)"/>

            {/* Door hinge edge */}
            <line x1="4" y1="5" x2="4" y2="213" strokeWidth="1.1" stroke="rgba(28,26,23,0.5)"/>

            {/* Freezer/fridge separator on door */}
            <path d="M4,72 L-47,77" strokeWidth="1.5"/>

            {/* Freezer handle on open door */}
            <path d="M-20,28 C-22,28 -22,30 -22,32 L-22,54 C-22,56 -21,57 -20,56" strokeWidth="2.1"/>
            {/* Fridge handle on open door */}
            <path d="M-20,108 C-22,108 -22,110 -22,112 L-22,155 C-22,157 -21,158 -20,157" strokeWidth="2.1"/>

            {/* Dispenser panel on door face */}
            <rect x="-44" y="18" width="22" height="36" rx="2" strokeWidth="0.9" stroke="rgba(28,26,23,0.28)" fill="rgba(28,26,23,0.03)"/>
            <rect x="-41" y="21" width="16" height="10" rx="1.5" strokeWidth="0.7" stroke="rgba(28,26,23,0.22)" fill="none"/>
            <circle cx="-33" cy="44" r="4" strokeWidth="0.8" stroke="rgba(28,26,23,0.22)" fill="none"/>

            {/* Floor shadow */}
            <path d="M-47,219 L107,220" strokeWidth="1.3" stroke="rgba(28,26,23,0.28)"/>
          </svg>
        </div>

        {/* Coffee cup on books — upper right */}
        <div className="pt-illus-right">
          <svg width="140" height="220" viewBox="0 0 140 220" fill="none"
            stroke="rgba(28,26,23,0.65)" strokeLinecap="round" strokeLinejoin="round">
            {/* Bottom book */}
            <path d="M8,204 L132,202 C134,202 135,203 135,205 L134,214 C134,215 133,215 131,215 L9,215 C7,215 7,213 7,211 Z"
              strokeWidth="1.7" fill="rgba(28,26,23,0.05)"/>
            <path d="M8,204 C7,208 7,212 8,215" strokeWidth="1.5"/>
            <line x1="10" y1="207" x2="130" y2="206" strokeWidth="0.5" stroke="rgba(28,26,23,0.2)"/>
            <line x1="10" y1="210" x2="130" y2="209" strokeWidth="0.5" stroke="rgba(28,26,23,0.2)"/>
            {/* Middle book */}
            <path d="M12,188 L128,186 C130,186 131,188 131,190 L130,203 C130,204 129,204 127,204 L13,204 C11,204 11,202 12,200 Z"
              strokeWidth="1.6" fill="rgba(28,26,23,0.04)"/>
            <path d="M12,188 C11,194 11,199 12,204" strokeWidth="1.5"/>
            <line x1="14" y1="191" x2="126" y2="190" strokeWidth="0.5" stroke="rgba(28,26,23,0.2)"/>
            <line x1="14" y1="195" x2="126" y2="194" strokeWidth="0.5" stroke="rgba(28,26,23,0.2)"/>
            <line x1="14" y1="199" x2="126" y2="198" strokeWidth="0.5" stroke="rgba(28,26,23,0.2)"/>
            {/* Top book */}
            <path d="M16,173 L122,171 C124,171 125,173 125,175 L124,188 C124,189 123,189 121,189 L17,189 C15,189 15,187 16,185 Z"
              strokeWidth="1.5" fill="rgba(28,26,23,0.04)"/>
            <path d="M16,173 C15,178 15,183 16,188" strokeWidth="1.4"/>
            <line x1="18" y1="176" x2="120" y2="175" strokeWidth="0.5" stroke="rgba(28,26,23,0.2)"/>
            <line x1="18" y1="180" x2="120" y2="179" strokeWidth="0.5" stroke="rgba(28,26,23,0.2)"/>
            <line x1="18" y1="184" x2="120" y2="183" strokeWidth="0.5" stroke="rgba(28,26,23,0.2)"/>
            {/* Mug body */}
            <path d="M28,118 L108,116 C110,116 112,118 112,121 L111,170 C111,172 109,173 107,173 L29,172 C27,172 26,171 26,169 L26,120 C26,118 27,118 28,118 Z"
              strokeWidth="1.9" fill="rgba(28,26,23,0.04)"/>
            {/* Handle */}
            <path d="M112,133 C124,133 128,139 127,152 C126,163 120,168 112,167" strokeWidth="1.8" fill="none"/>
            {/* Rim arc top */}
            <path d="M26,121 C50,117 85,117 112,121" strokeWidth="1.3" stroke="rgba(28,26,23,0.42)"/>
            {/* Coffee surface */}
            <path d="M31,128 C55,125 82,125 109,128" strokeWidth="1.1" stroke="rgba(28,26,23,0.3)"/>
            {/* Base */}
            <path d="M26,169 C50,172 85,172 112,169" strokeWidth="1.3" stroke="rgba(28,26,23,0.42)"/>
            {/* Steam wisps — animated */}
            <path className="pt-steam-1"
              d="M50,116 C46,105 55,96 50,84 C45,72 54,80 49,68"
              fill="none" strokeWidth="1.7" stroke="rgba(28,26,23,0.62)"/>
            <path className="pt-steam-2"
              d="M70,114 C75,103 66,94 71,82 C76,70 67,78 72,66"
              fill="none" strokeWidth="1.7" stroke="rgba(28,26,23,0.62)"/>
            <path className="pt-steam-3"
              d="M92,115 C88,104 97,95 92,83 C87,71 96,79 91,67"
              fill="none" strokeWidth="1.7" stroke="rgba(28,26,23,0.62)"/>
          </svg>
        </div>

        {/* Main content */}
        <div className="pt-content">
          <h2 className="pt-h2">
            Made for{" "}
            <span className={`pt-word${out ? " pt-word-out" : ""}`}>{WORDS[idx]}</span>
            <br />remodelers.
          </h2>
        </div>

        {/* Wave bottom — hero dark bg bleeds in from bottom */}
        <svg className="pt-wave pt-wave-bottom" height="90" viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path d="M0,42 Q720,12 1440,48 L1440,90 L0,90 Z" fill="#1c1a17"/>
        </svg>

      </section>
    </>
  );
};

export default Pitch;
