"use client";

import { useState, useEffect, useRef } from "react";

const WORDS = ["successful", "driven", "high-quality", "ambitious", "results-focused"];
const INTERVAL_MS = 900;
const ORANGE = "rgb(180, 83, 9)";

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
          background: #ffffff;
          padding: 56px 24px 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .pb-wave {
          position: absolute;
          left: 0;
          width: 100%;
          height: 32px;
          pointer-events: none;
          line-height: 0;
        }
        .pb-wave svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .pb-wave-top {
          top: -1px;
        }
        .pb-wave-bottom {
          bottom: -1px;
          transform: scaleY(-1);
        }
        .pb-content {
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .pb-section.pb-in-view .pb-content {
          opacity: 1;
          transform: translateY(0);
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
          color: ${ORANGE};
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
        {/* Top wave curve */}
        <div className="pb-wave pb-wave-top" aria-hidden>
          <svg viewBox="0 0 1200 32" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M0 16 C200 0 400 32 600 16 C800 0 1000 32 1200 16 L1200 32 L0 32 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        {/* Bottom wave curve */}
        <div className="pb-wave pb-wave-bottom" aria-hidden>
          <svg viewBox="0 0 1200 32" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M0 16 C200 0 400 32 600 16 C800 0 1000 32 1200 16 L1200 32 L0 32 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
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
    </>
  );
}
