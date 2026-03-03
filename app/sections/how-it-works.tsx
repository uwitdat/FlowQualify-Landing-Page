"use client";

import { useState, useEffect, useRef } from "react";
import { GridPattern } from "../components/ui/grid-pattern";

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
  { text: ", and " },
  { text: "book real appointments", style: { color: "rgb(180,83,9)", fontWeight: 700 } as React.CSSProperties },
  { text: " directly on " },
  { text: "your calendar", style: { color: "rgb(22,163,74)", fontWeight: 700 } as React.CSSProperties },
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
          background: #ffffff;
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
          min-height: 200px;
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
        .hiw2-cursor {
          display: inline-block;
          width: 3px;
          height: 0.9em;
          background: #0F172A;
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: hiw2-blink 0.9s step-end infinite;
        }
        @keyframes hiw2-blink {
          50% { opacity: 0; }
        }
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
            className="fill-gray-400/[0.08]"
            squareClassName="fill-gray-400/[0.06]"
            stroke="rgba(156, 163, 175, 0.2)"
            strokeWidth={0.6}
            squares={HIW_GRID_SQUARES}
          />
        </div>
        <div className="hiw2-wrap">
          <div className="hiw2-body">
            <p className="hiw2-p1">
              {inView ? renderParagraph(P1_PARTS, visibleChars, 0) : null}
              {visibleChars > 0 && visibleChars <= p1Len && visibleChars < totalChars && (
                <span className="hiw2-cursor" aria-hidden />
              )}
            </p>

            <p className="hiw2-main">
              {inView ? renderParagraph(P2_PARTS, visibleChars, p2Start) : null}
              {(visibleChars > p1Len && visibleChars < totalChars) || (visibleChars >= totalChars && totalChars > 0) ? (
                <span className="hiw2-cursor" aria-hidden />
              ) : null}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
