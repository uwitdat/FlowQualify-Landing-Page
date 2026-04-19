"use client";

import { useState, useEffect, useRef } from "react";
import { BUTTON_PRIMARY, CARD_SURFACE } from "../config/constants";

const WORDS = ["successful", "driven", "high-quality", "ambitious", "results-focused"];
const INTERVAL_MS = 900;

export default function PitchBanner() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .pb-section {
          position: relative;
          padding: 0 0 72px;
        }
        .pb-curve-wrap {
          margin: 0 8px;
          overflow: hidden;
        }
        @media (max-width: 1024px) {
          .pb-curve-wrap { margin: 0; }
        }
        .pb-curve {
          width: 100%;
          position: relative;
          background: ${CARD_SURFACE};
          border-radius: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 12px 40px rgba(15, 23, 42, 0.06);
          padding: 80px 0 80px;
        }
        .pb-content {
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          text-align: center;
          padding: 0 24px;
        }
        .pb-section.pb-in-view .pb-content {
          opacity: 1;
          transform: translateY(0);
        }
        .pb-text {
          font-size: clamp(26px, 4vw, 46px);
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0;
        }
        .pb-word {
          color: ${BUTTON_PRIMARY};
          display: inline-block;
          min-width: 1ch;
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .pb-word-fade {
          opacity: 0;
          transform: translateY(-6px);
        }
      `}</style>
      <div
        ref={sectionRef}
        className={`pb-section${inView ? " pb-in-view" : ""}`}
      >
        <div className="pb-curve-wrap">
          <div className="pb-curve">
            <div className="pb-content">
              <p className="pb-text">
                Made for{" "}
                <span className={`pb-word${fading ? " pb-word-fade" : ""}`}>
                  {WORDS[index]}
                </span>{" "}
                remodelers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
