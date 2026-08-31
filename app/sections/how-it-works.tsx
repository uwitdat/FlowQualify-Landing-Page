"use client";

import { useState, useEffect, useRef } from "react";
import { GridPattern } from "../components/ui/grid-pattern";
import { PAGE_BACKGROUND } from "../config/constants";

const HIW_GRID_SQUARES = (() => {
  const out: Array<[number, number]> = [];
  for (let i = 0; i < 20; i += 4) {
    for (let j = 0; j < 20; j += 4) {
      out.push([i + 2, j + 2]);
    }
  }
  return out;
})();

/** Segments for typewriter: { text, style? }. Order matches the two paragraphs. */
const P1_PARTS = [
  { text: "Plenty of marketing agencies run ads, send traffic to a form, and walk away. " },
  { text: "That's not us.", style: { color: "rgb(200,40,40)", fontWeight: 700 } as React.CSSProperties },
];
const P2_PARTS = [
  { text: "We qualify every homeowner through conversation, send you a " },
  { text: "full project brief", style: { color: "rgb(124,58,237)", fontWeight: 700 } as React.CSSProperties },
  { text: ", and notify you " },
  { text: "the moment they qualify", style: { color: "rgb(79, 70, 229)", fontWeight: 700 } as React.CSSProperties },
  { text: " — so you can " },
  { text: "close faster", style: { color: "rgb(22,163,74)", fontWeight: 700 } as React.CSSProperties },
  { text: "." },
];

function useTypewriter(totalChars: number, active: boolean, charDelayMs = 28) {
  const [visibleChars, setVisibleChars] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;
    let count = 0;
    const id = setInterval(() => {
      count += 1;
      setVisibleChars((c) => Math.min(c + 1, totalChars));
      if (count >= totalChars) clearInterval(id);
    }, charDelayMs);
    return () => clearInterval(id);
  }, [active, totalChars, charDelayMs]);

  return visibleChars;
}

function renderParagraph(
  parts: { text: string; style?: React.CSSProperties }[],
  visibleChars: number,
  paragraphStartIndex: number
) {
  let used = 0;
  const nodes: React.ReactNode[] = [];
  for (const part of parts) {
    const partLen = part.text.length;
    const start = paragraphStartIndex + used;
    const showLen = Math.max(0, Math.min(partLen, visibleChars - start));
    used += partLen;
    if (showLen === 0) break;
    const content = part.text.slice(0, showLen);
    if (part.style) {
      nodes.push(
        <span key={nodes.length} style={part.style}>
          {content}
        </span>
      );
    } else {
      nodes.push(content);
    }
    if (showLen < partLen) break;
  }
  return nodes;
}

/** Full text for layout (invisible) so height is reserved and no jerk on scroll. */
function renderFullParagraph(parts: { text: string; style?: React.CSSProperties }[]) {
  return parts.map((part, i) =>
    part.style ? (
      <span key={i} style={part.style}>{part.text}</span>
    ) : (
      part.text
    )
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setInView(true);
        }
      },
      { threshold: 0.25, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const p1Len = P1_PARTS.map((p) => p.text).join("").length;
  const p2Len = P2_PARTS.map((p) => p.text).join("").length;
  const totalChars = p1Len + p2Len;
  const p2Start = p1Len;
  const visibleChars = useTypewriter(totalChars, inView, 26);

  return (
    <>
      <style>{`
        .hiw2-section {
          background: ${PAGE_BACKGROUND};
          padding: 120px 48px;
          position: relative;
          overflow: hidden;
        }
        .hiw2-grid-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .hiw2-wrap {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }
        .hiw2-body {
          width: 100%;
          position: relative;
        }
        .hiw2-body-layout {
          visibility: hidden;
          width: 100%;
          pointer-events: none;
        }
        .hiw2-body-visible {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
        }
        .hiw2-p1 {
          font-size: clamp(24px, 3vw, 42px);
          font-weight: 900;
          color: #0F172A;
          line-height: 1.25;
          letter-spacing: -0.028em;
          margin: 0 0 56px;
        }
        .hiw2-main {
          font-size: clamp(24px, 3vw, 42px);
          font-weight: 900;
          color: #0F172A;
          line-height: 1.25;
          letter-spacing: -0.028em;
          margin: 0;
        }
        .hiw2-grid-sq { fill: rgba(156, 163, 175, 0.06); }
        @media (max-width: 540px) {
          .hiw2-section { padding: 60px 18px; }
          .hiw2-p1, .hiw2-main { font-size: 22px; }
          .hiw2-p1 { margin-bottom: 40px; }
        }
      `}</style>

      <section id="how-it-works" className="hiw2-section" ref={sectionRef}>
        <div className="hiw2-grid-wrap" aria-hidden>
          <GridPattern
            width={72}
            height={72}
            x={-1}
            y={-1}
            fill="rgba(156, 163, 175, 0.08)"
            className="fill-gray-400/[0.08]"
            squareClassName="hiw2-grid-sq"
            stroke="rgba(156, 163, 175, 0.2)"
            strokeWidth={0.6}
            squares={HIW_GRID_SQUARES}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          />
        </div>
        <div className="hiw2-wrap">
          <div className="hiw2-body">
            {/* Invisible full text reserves height so typewriter doesn't cause layout shift */}
            <div className="hiw2-body-layout" aria-hidden>
              <p className="hiw2-p1">{renderFullParagraph(P1_PARTS)}</p>
              <p className="hiw2-main">{renderFullParagraph(P2_PARTS)}</p>
            </div>
            {/* Visible typewriter layer overlaid in same space */}
            <div className="hiw2-body-visible">
              <p className="hiw2-p1">
                {inView ? renderParagraph(P1_PARTS, visibleChars, 0) : null}
              </p>
              <p className="hiw2-main">
                {inView ? renderParagraph(P2_PARTS, visibleChars, p2Start) : null}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
