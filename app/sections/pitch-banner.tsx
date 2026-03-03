"use client";

import { useState, useEffect } from "react";

const WORDS = ["successful", "driven", "high-quality", "ambitious", "results-focused"];
const INTERVAL_MS = 900;

export default function PitchBanner() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setFading(false);
      }, 250);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        @keyframes contractor-bob {
          0%, 100% { transform: translateY(0px) rotate(0.5deg); }
          50%       { transform: translateY(-5px) rotate(-0.5deg); }
        }
        @keyframes contractor-arm-wave {
          0%, 100% { transform: rotate(0deg); transform-origin: 62px 72px; }
          40%       { transform: rotate(-18deg); transform-origin: 62px 72px; }
          70%       { transform: rotate(-8deg); transform-origin: 62px 72px; }
        }
        .pb-section {
          background: #ffffff;
          padding: 48px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .pb-text {
          font-size: clamp(26px, 4vw, 46px);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0;
        }
        .pb-word {
          color: rgb(180, 83, 9);
          display: inline-block;
          min-width: 1ch;
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .pb-word-fade {
          opacity: 0;
          transform: translateY(-6px);
        }
      `}</style>
      <div className="pb-section">
        {/* Excalidraw-style happy contractor — left side */}
        <div style={{
          position: "absolute",
          left: "clamp(16px, 5vw, 80px)",
          bottom: "-18px",
          pointerEvents: "none",
          userSelect: "none",
        }}>
          <svg
            width="110"
            height="200"
            viewBox="0 0 110 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              animation: "contractor-bob 3.2s ease-in-out infinite",
              transformOrigin: "center bottom",
              opacity: 0.78,
            }}
          >
            {/* Hard hat */}
            <path d="M 28 38 C 28 24 38 14 55 13 C 72 12 82 22 82 36 L 82 42 C 82 42 70 44 55 44 C 40 44 28 42 28 42 Z"
              fill="#EDE8DF" stroke="#22150d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 24 42 C 30 40 42 39 55 39 C 68 39 80 40 86 42 L 86 46 C 80 47 68 48 55 48 C 42 48 30 47 24 46 Z"
              fill="#22150d" stroke="#22150d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            {/* Hard hat brim band */}
            <path d="M 32 38 C 40 36 50 35 55 35 C 60 35 70 36 78 38"
              stroke="#22150d" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.35" />

            {/* Head */}
            <ellipse cx="55" cy="62" rx="18" ry="20" fill="#F8F4EE" stroke="#22150d" strokeWidth="2.4" strokeLinecap="round" />

            {/* Happy face */}
            {/* Eyes */}
            <circle cx="48" cy="58" r="2.5" fill="#22150d" />
            <circle cx="62" cy="58" r="2.5" fill="#22150d" />
            {/* Eye sparkle */}
            <circle cx="49.5" cy="57" r="1" fill="#fff" />
            <circle cx="63.5" cy="57" r="1" fill="#fff" />
            {/* Big smile */}
            <path d="M 45 67 C 48 73 62 73 65 67" stroke="#22150d" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            {/* Rosy cheeks */}
            <circle cx="44" cy="65" r="4" fill="rgb(180,83,9)" opacity="0.12" />
            <circle cx="66" cy="65" r="4" fill="rgb(180,83,9)" opacity="0.12" />

            {/* Neck */}
            <path d="M 50 80 L 50 88 M 60 80 L 60 88" stroke="#22150d" strokeWidth="2" strokeLinecap="round" />

            {/* Body — contractor vest/shirt */}
            <path d="M 36 88 C 34 90 32 100 31 115 C 30 128 30 140 31 152 L 79 152 C 80 140 80 128 79 115 C 78 100 76 90 74 88 Z"
              fill="#EDE8DF" stroke="#22150d" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Vest stripe / pocket */}
            <path d="M 48 92 L 48 140 M 62 92 L 62 140" stroke="#22150d" strokeWidth="1.4" strokeLinecap="round" opacity="0.25" />
            <rect x="44" y="100" width="14" height="10" rx="2" fill="none" stroke="#22150d" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
            {/* Pencil in pocket */}
            <line x1="52" y1="100" x2="52" y2="94" stroke="rgb(180,83,9)" strokeWidth="2" strokeLinecap="round" />

            {/* Left arm — down holding clipboard */}
            <path d="M 36 92 C 32 96 26 108 24 122 C 22 130 22 136 24 138"
              stroke="#22150d" strokeWidth="2.6" strokeLinecap="round" fill="none" />
            {/* Clipboard */}
            <rect x="12" y="136" width="22" height="28" rx="3" fill="#F8F4EE" stroke="#22150d" strokeWidth="2" strokeLinecap="round" />
            <rect x="19" y="133" width="8" height="5" rx="1" fill="#22150d" opacity="0.6" />
            <line x1="16" y1="146" x2="30" y2="146" stroke="#22150d" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
            <line x1="16" y1="151" x2="30" y2="151" stroke="#22150d" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
            <line x1="16" y1="156" x2="26" y2="156" stroke="#22150d" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />

            {/* Right arm — raised and waving */}
            <g style={{ animation: "contractor-arm-wave 2.4s ease-in-out infinite", transformOrigin: "74px 92px" }}>
              <path d="M 74 92 C 78 86 84 78 86 68 C 88 60 86 56 84 56"
                stroke="#22150d" strokeWidth="2.6" strokeLinecap="round" fill="none" />
              {/* Hand waving */}
              <ellipse cx="84" cy="53" rx="7" ry="5" fill="#F8F4EE" stroke="#22150d" strokeWidth="2" strokeLinecap="round" transform="rotate(-20 84 53)" />
              {/* Fingers */}
              <path d="M 80 49 C 78 45 79 41 81 41" stroke="#22150d" strokeWidth="1.6" strokeLinecap="round" fill="none" />
              <path d="M 84 48 C 83 43 84 40 86 40" stroke="#22150d" strokeWidth="1.6" strokeLinecap="round" fill="none" />
              <path d="M 88 50 C 88 45 90 43 91 44" stroke="#22150d" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            </g>

            {/* Legs */}
            <path d="M 42 152 C 42 162 41 172 40 186 L 50 186 C 51 172 52 162 55 152"
              fill="#22150d" stroke="#22150d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
            <path d="M 68 152 C 68 162 69 172 70 186 L 60 186 C 59 172 58 162 55 152"
              fill="#22150d" stroke="#22150d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
            {/* Boots */}
            <path d="M 37 184 C 36 186 34 190 34 192 L 52 192 L 52 186 Z"
              fill="#22150d" stroke="#22150d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 73 184 C 74 186 76 190 76 192 L 58 192 L 58 186 Z"
              fill="#22150d" stroke="#22150d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="pb-text">
          Made for{" "}
          <span className={`pb-word${fading ? " pb-word-fade" : ""}`}>
            {WORDS[index]}
          </span>{" "}
          remodelers.
        </p>
      </div>
    </>
  );
}
