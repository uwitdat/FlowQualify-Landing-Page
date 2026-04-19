"use client";

import React from "react";

// Pre-seeded particles — higher opacity + larger drift than before
// Fields: id, x%, y%, size px, opacity, duration s, delay s, drift X/Y px
const PARTICLES = [
  { id: 0,  x: 8,  y: 12, s: 3,  o: 0.03, dur: 22, del: 0,  dx: 80,  dy: 100 },
  { id: 1,  x: 22, y: 68, s: 3,  o: 0.03, dur: 28, del: 3,  dx: -70, dy: 75  },
  { id: 2,  x: 45, y: 28, s: 4,  o: 0.03, dur: 32, del: 6,  dx: 55,  dy: -85 },
  { id: 3,  x: 73, y: 82, s: 3,  o: 0.03, dur: 20, del: 2,  dx: -60, dy: -90 },
  { id: 4,  x: 88, y: 18, s: 4,  o: 0.03, dur: 34, del: 8,  dx: -85, dy: 110 },
  { id: 5,  x: 60, y: 55, s: 3,  o: 0.03, dur: 26, del: 4,  dx: 65,  dy: -70 },
  { id: 6,  x: 15, y: 44, s: 3,  o: 0.02, dur: 30, del: 10, dx: 95,  dy: 55  },
  { id: 7,  x: 35, y: 80, s: 4,  o: 0.03, dur: 24, del: 1,  dx: -50, dy: -80 },
  { id: 8,  x: 78, y: 46, s: 3,  o: 0.03, dur: 29, del: 5,  dx: 72,  dy: -100},
  { id: 9,  x: 52, y: 8,  s: 3,  o: 0.02, dur: 22, del: 9,  dx: -80, dy: 88  },
  { id: 10, x: 92, y: 70, s: 4,  o: 0.02, dur: 33, del: 3,  dx: -65, dy: -55 },
  { id: 11, x: 28, y: 34, s: 3,  o: 0.03, dur: 25, del: 7,  dx: 85,  dy: 72  },
  { id: 12, x: 65, y: 20, s: 3,  o: 0.02, dur: 20, del: 12, dx: -55, dy: 95  },
  { id: 13, x: 42, y: 62, s: 4,  o: 0.03, dur: 31, del: 4,  dx: 60,  dy: -65 },
  { id: 14, x: 18, y: 86, s: 3,  o: 0.02, dur: 24, del: 10, dx: 100, dy: -88 },
  { id: 15, x: 82, y: 36, s: 3,  o: 0.03, dur: 27, del: 2,  dx: -75, dy: 62  },
  { id: 16, x: 55, y: 74, s: 4,  o: 0.02, dur: 22, del: 14, dx: 55,  dy: -105},
  { id: 17, x: 5,  y: 50, s: 3,  o: 0.03, dur: 30, del: 6,  dx: 90,  dy: 78  },
] as const;

export default function FlowBackground() {
  return (
    <>
      <style>{`
        .fb-root {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 14%, black 62%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0%, black 14%, black 62%, transparent 100%);
        }

        @keyframes fbBlob1 {
          0%,  100% { transform: translate(0px,    0px)   scale(1.00); }
          25%        { transform: translate(110px, -75px)  scale(1.12); }
          50%        { transform: translate(55px,  130px)  scale(0.88); }
          75%        { transform: translate(-95px,  35px)  scale(1.08); }
        }
        @keyframes fbBlob2 {
          0%,  100% { transform: translate(0px,    0px)   scale(1.00); }
          30%        { transform: translate(-120px, 85px)  scale(1.10); }
          60%        { transform: translate(75px, -105px)  scale(0.86); }
          85%        { transform: translate(40px,   55px)  scale(1.05); }
        }
        @keyframes fbBlob3 {
          0%,  100% { transform: translate(0px,   0px)   scale(1.00); }
          35%        { transform: translate(90px,  75px)  scale(1.14); }
          65%        { transform: translate(-50px,-95px)  scale(0.90); }
        }

        .fb-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          will-change: transform;
          backface-visibility: hidden;
        }

        .fb-blob-1 {
          width: 600px; height: 500px;
          top: -120px; right: -100px;
          background: radial-gradient(ellipse at center, rgba(79, 70, 229, 0.06) 0%, transparent 68%);
          filter: blur(120px);
          animation: fbBlob1 16s ease-in-out infinite;
        }
        .fb-blob-2 {
          width: 560px; height: 480px;
          bottom: -100px; left: -110px;
          background: radial-gradient(ellipse at center, rgba(59,130,246,0.04) 0%, transparent 68%);
          filter: blur(100px);
          animation: fbBlob2 20s ease-in-out infinite 4s;
        }
        .fb-blob-3 {
          width: 480px; height: 420px;
          top: calc(38% - 210px);
          left: calc(40% - 240px);
          background: radial-gradient(ellipse at center, rgba(99,102,241,0.035) 0%, transparent 68%);
          filter: blur(100px);
          animation: fbBlob3 13s ease-in-out infinite 7s;
        }

        @keyframes fbDrift {
          0%   { transform: translate(0px, 0px); opacity: var(--fb-o); }
          50%  { transform: translate(var(--fb-dx), var(--fb-dy)); opacity: calc(var(--fb-o) * 0.4); }
          100% { transform: translate(0px, 0px); opacity: var(--fb-o); }
        }
        .fb-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          will-change: transform, opacity;
          backface-visibility: hidden;
          animation: fbDrift var(--fb-dur) ease-in-out var(--fb-del) infinite;
        }
      `}</style>

      <div className="fb-root" aria-hidden="true">
        <div className="fb-blob fb-blob-1" />
        <div className="fb-blob fb-blob-2" />
        <div className="fb-blob fb-blob-3" />
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="fb-particle"
            style={{
              left:   `${p.x}%`,
              top:    `${p.y}%`,
              width:  `${p.s}px`,
              height: `${p.s}px`,
              background: `rgba(140, 180, 255, ${p.o})`,
              "--fb-o":   p.o,
              "--fb-dx":  `${p.dx}px`,
              "--fb-dy":  `${p.dy}px`,
              "--fb-dur": `${p.dur}s`,
              "--fb-del": `${p.del}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
}
