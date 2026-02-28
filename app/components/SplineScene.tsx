"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const SCENE_URL =
  "https://prod.spline.design/FuztHB4qXsmte41o/scene.splinecode";

/**
 * Returns true only on desktop-class devices with WebGL support.
 */
function canRunSpline(mobileBreakpoint: number): boolean {
  if (typeof window === "undefined") return false;
  if (window.innerWidth < mobileBreakpoint) return false;
  if (navigator.hardwareConcurrency <= 2) return false;

  const c = document.createElement("canvas");
  const gl = c.getContext("webgl2") || c.getContext("webgl");
  return !!gl;
}

export default function SplineScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capable, setCapable] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const appRef = useRef<unknown>(null);

  useEffect(() => {
    setCapable(canRunSpline(768));
  }, []);

  const initSpline = useCallback(async () => {
    if (!canvasRef.current) return;

    try {
      const { Application } = await import("@splinetool/runtime");
      const app = new Application(canvasRef.current);
      appRef.current = app;
      await app.load(SCENE_URL);
      setLoaded(true);
    } catch (err) {
      console.warn("Spline failed to load:", err);
      setFailed(true);
    }
  }, []);

  /* Load Spline once we know the device is capable */
  useEffect(() => {
    if (!capable) return;

    initSpline();

    /* Timeout – if it hasn't loaded in 20s, give up gracefully */
    const timer = setTimeout(() => {
      setFailed((prev) => {
        if (!prev && !loaded) return true;
        return prev;
      });
    }, 20_000);

    return () => clearTimeout(timer);
  }, [capable, initSpline, loaded]);

  /* Hide the watermark with CSS only — no DOM removal */
  useEffect(() => {
    if (!loaded) return;

    const style = document.createElement("style");
    style.textContent = `
      /* Hide Spline watermark via CSS — safe, no DOM mutation */
      a[href*="spline.design"] {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
        opacity: 0 !important;
        position: absolute !important;
        width: 0 !important;
        height: 0 !important;
        overflow: hidden !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [loaded]);

  /* Don't render at all on incapable devices or after timeout */
  if (!capable || failed) return null;

  return (
    <>
      <style>{`
        /* ── Spline background layer ── */
        .spline-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          /* pointer-events enabled so the scene is interactive */
        }

        .spline-bg canvas {
          width: 100%;
          height: 100%;
          display: block;
          opacity: ${loaded ? 1 : 0};
          transition: opacity 1s ease;
          /* Large 3D scene anchored to the right column (~40% of hero width) */
          transform: scale(1.9) translateX(26%);
          transform-origin: right center;
        }

        /* Left-side white fade so hero text stays readable */
        .spline-bg::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 52%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.92) 55%, rgba(255,255,255,0) 100%);
          pointer-events: none;
          z-index: 2;
        }

        /* Bottom gradient so next section blends in */
        .spline-bg::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to top, #ffffff 0%, transparent 100%);
          pointer-events: none;
          z-index: 2;
        }

        /* Subtle loading spinner */
        .spline-bg-loading {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: ${loaded ? 0 : 0.4};
          transition: opacity 0.6s ease;
          pointer-events: none;
        }

        .spline-bg-spinner {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 3px solid rgba(26, 107, 138, 0.12);
          border-top-color: rgba(26, 107, 138, 0.5);
          animation: spline-bg-spin 0.8s linear infinite;
        }

        @keyframes spline-bg-spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 920px) {
          .spline-bg { display: none; }
        }
      `}</style>

      <div className="spline-bg">
        {/* Loading indicator */}
        <div className="spline-bg-loading">
          <div className="spline-bg-spinner" />
        </div>

        <canvas ref={canvasRef} />
      </div>
    </>
  );
}
