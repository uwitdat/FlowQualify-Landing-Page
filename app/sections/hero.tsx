"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { CheckBadgeIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { ACCENT_SECONDARY, BUTTON_PRIMARY, HERO_PANEL_BG } from "../config/constants";
import { GridPattern } from "../components/ui/grid-pattern";
import { HeroChatDemo } from "../components/HeroChatDemo";

function useCountUp(target: number, active: boolean, durationMs = 1200, decimals = 0, delayMs = 0) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  // When cards hide (loop restart), delay reset so user doesn't see numbers snap to 0
  const RESET_DELAY_MS = 500;
  useEffect(() => {
    if (!active) {
      const id = setTimeout(() => {
        setStarted(false);
        setValue(0);
      }, RESET_DELAY_MS);
      return () => clearTimeout(id);
    }
    const t = setTimeout(() => setStarted(true), delayMs);
    return () => clearTimeout(t);
  }, [active, delayMs]);
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const startVal = 0;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    let rafId: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = easeOutCubic(t);
      const current = startVal + (target - startVal) * eased;
      setValue(decimals > 0 ? Math.round(current * Math.pow(10, decimals)) / Math.pow(10, decimals) : Math.round(current));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, target, durationMs, decimals]);
  return value;
}

export const Hero = () => {
  const [chatProgress, setChatProgress] = useState(0);
  const [showBookingNotification, setShowBookingNotification] = useState(false);
  const [trustLineVisible, setTrustLineVisible] = useState(false);

  const onChatProgress = useCallback((visibleCount: number) => {
    setChatProgress(visibleCount);
  }, []);
  const onBookingNotificationShow = useCallback(() => {
    setShowBookingNotification(true);
  }, []);
  const onLoopRestart = useCallback(() => {
    setShowBookingNotification(false);
    setTrustLineVisible(false);
  }, []);

  const card1Visible = chatProgress >= 2;
  const card2Visible = chatProgress >= 5;
  const card3Visible = showBookingNotification;

  useEffect(() => {
    if (!showBookingNotification) return;
    const t = setTimeout(() => setTrustLineVisible(true), 1400);
    return () => clearTimeout(t);
  }, [showBookingNotification]);

  const countLeads = useCountUp(12.4, card1Visible, 1100, 1, 150);
  const countAppointments = useCountUp(847, card2Visible, 1100, 0, 150);
  const countCloseRate = useCountUp(84, card3Visible, 1100, 0, 150);

  return (
    <>
      <style>{`
        .hero-section {
          background: #ffffff;
          padding: 0 0 40px 32px;
          position: relative;
          overflow: visible;
          min-height: calc(100vh + 40px);
          display: flex;
          align-items: stretch;
          margin-bottom: -32px;
        }
        .hero-container {
          width: 100%;
          min-height: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: stretch;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          text-align: left;
          margin: 48px 48px 64px 52px;
          max-width: 600px;
        }
        .hero-h1 {
          font-size: clamp(40px, 5vw, 62px);
          font-weight: 900;
          line-height: 1.08;
          color: #0F172A;
          letter-spacing: -0.03em;
          margin: 0 0 20px;
        }
        .hero-grad {
          color: ${BUTTON_PRIMARY};
        }
        .hero-subhead {
          font-size: 17px;
          line-height: 1.65;
          color: #64748B;
          max-width: 480px;
          margin: 0 0 32px;
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: ${BUTTON_PRIMARY};
          font-size: 15px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease;
          cursor: pointer;
          white-space: nowrap;
          border: 1px solid ${BUTTON_PRIMARY};
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          background: ${BUTTON_PRIMARY};
          color: #fff;
        }
        .hero-btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #0F172A;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          padding: 12px 24px;
          border-radius: 999px;
          border: 1px solid #000;
          background: #fff;
          transition: border-color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }
        .hero-btn-ghost:hover {
          border-color: #000;
          background: rgba(0, 0, 0, 0.04);
        }
        .hero-tagline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .hero-tagline svg { flex-shrink: 0; width: 18px; height: 18px; }
        .hero-right {
          position: relative;
          width: 100%;
          min-height: 100%;
          border-top-left-radius: 24px;
          border-bottom-left-radius: 24px;
          background: ${HERO_PANEL_BG};
          overflow: hidden;
        }
        .hero-panel-trust {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 96px 20px 16px;
          z-index: 10;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          text-align: center;
          letter-spacing: 0.02em;
          opacity: 0;
          transition: opacity 1.2s ease 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .hero-panel-trust.hero-panel-trust-visible {
          opacity: 1;
        }
        .hero-panel-trust svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          color: rgba(255, 255, 255, 0.95);
        }
        .hero-right-inner {
          position: absolute;
          inset: 0;
        }
        .hero-stat-row {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          gap: 8px;
          padding: 12px 12px 18px;
          z-index: 15;
          box-sizing: border-box;
        }
        .hero-stat-card {
          flex: 1;
          min-width: 0;
          background: rgba(15, 23, 42, 0.82);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 18px;
          padding: 18px 16px;
          opacity: 0;
          transform: translateY(10px) scale(0.96);
          transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
          overflow: hidden;
        }
        .hero-stat-card.hero-stat-card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .hero-stat-label {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;
          margin-bottom: 8px;
          position: relative;
        }
        .hero-stat-value {
          font-size: 24px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.04em;
          line-height: 1.15;
          font-variant-numeric: tabular-nums;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        .hero-stat-change {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 800;
          color: rgba(153, 246, 228, 1);
          margin-top: 10px;
          padding: 4px 8px;
          border-radius: 8px;
          background: rgba(13, 148, 136, 0.35);
          letter-spacing: 0.02em;
        }
        .hero-stat-change svg { width: 15px; height: 15px; flex-shrink: 0; color: rgba(153, 246, 228, 0.95); }
        /* Mobile: trust line above panel; metrics below chat */
        .hero-trust-above {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #0F172A;
          letter-spacing: 0.02em;
          margin-bottom: 12px;
        }
        .hero-trust-above svg { width: 18px; height: 18px; flex-shrink: 0; color: rgb(180, 83, 9); }
        @media (max-width: 900px) {
          .hero-section { padding: 80px 20px 64px; }
          .hero-container { grid-template-columns: 1fr; gap: 40px; align-items: center; }
          .hero-left { align-items: center; text-align: center; margin: 0; max-width: none; padding: 0 8px; }
          .hero-subhead { text-align: center; margin-left: auto; margin-right: auto; }
          .hero-cta-row { justify-content: center; }
          .hero-tagline { display: flex; justify-content: center; text-align: center; flex-wrap: wrap; max-width: 100%; }
          .hero-right { min-height: 280px; border-radius: 24px; display: flex; flex-direction: column; }
          .hero-panel-trust { display: none; }
          .hero-trust-above { display: flex; }
          .hero-right-inner { position: relative; flex: 1; min-height: 220px; }
          .hero-stat-row { position: static; display: flex; padding: 14px 12px 18px; border-top: 1px solid rgba(148, 163, 184, 0.2); }
        }
        /* 400px and below: no room for metrics; fix margins/overflow */
        @media (max-width: 400px) {
          .hero-section { padding: 72px 16px 48px; overflow-x: hidden; }
          .hero-container { overflow-x: hidden; }
          .hero-left { margin: 0 0 24px; padding: 0; }
          .hero-tagline { font-size: 12px; gap: 6px; }
          .hero-right { min-height: 240px; border-radius: 20px; }
          .hero-right-inner { min-height: 200px; }
          .hero-stat-row { display: none !important; }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-container">
          {/* Left half — all text content */}
          <div className="hero-left">
            <h1 className="hero-h1">
              Qualified
              <br />
              Appointments
              <br />
              <span className="hero-grad">Ready to Close.</span>
            </h1>
            <p className="hero-subhead">
              Every lead is fully pre-qualified in chat — budget, scope, and
              timeline confirmed before it ever hits your calendar.
            </p>
            <div className="hero-cta-row">
              <Link href="/opt-in" className="hero-btn-primary">
                Book Demo
              </Link>
              <Link href="/opt-in" className="hero-btn-ghost">
                How It Works
              </Link>
            </div>
            <p className="hero-tagline" style={{ color: ACCENT_SECONDARY }}>
              <CheckBadgeIcon aria-hidden />
              Done For You Lead Generation For Home Remodelers
            </p>
          </div>
          {/* Right half — rounded panel; on mobile, trust line above and metrics below chat */}
          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <p className="hero-trust-above">
              <StarIcon aria-hidden />
              Over 50+ remodelers trust FlowQualify
            </p>
            <div className="hero-right">
              <p className={`hero-panel-trust ${trustLineVisible ? "hero-panel-trust-visible" : ""}`}>
                <StarIcon aria-hidden />
                Over 50+ remodelers trust FlowQualify
              </p>
              <div className="hero-right-inner">
            <div
              className="absolute inset-0 overflow-hidden"
              aria-hidden
              style={{
                maskImage: `linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)`,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            >
              <GridPattern
                width={72}
                height={72}
                x={-1}
                y={-1}
                className="fill-white/[0.06] stroke-white/[0.08]"
                squareClassName="fill-white/[0.08]"
                squares={(() => {
                  const out: Array<[number, number]> = [];
                  for (let i = 0; i < 20; i += 4) {
                    for (let j = 0; j < 20; j += 4) {
                      out.push([i + 2, j + 2]);
                    }
                  }
                  return out;
                })()}
              />
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
              style={{
                background: `
                  linear-gradient(to right, rgba(30, 41, 59, 0.4) 0%, transparent 14%, transparent 86%, rgba(30, 41, 59, 0.4) 100%),
                  linear-gradient(to bottom, rgba(30, 41, 59, 0.35) 0%, transparent 16%, transparent 84%, rgba(30, 41, 59, 0.35) 100%)
                `,
              }}
            />
            <HeroChatDemo
              onBookingNotificationShow={onBookingNotificationShow}
              onLoopRestart={onLoopRestart}
              onChatProgress={onChatProgress}
            />
              </div>
            {/* Metric cards — bottom row; on mobile flows below chat */}
            <div className="hero-stat-row">
              <div className={`hero-stat-card ${card1Visible ? "hero-stat-card-visible" : ""}`}>
                <div className="hero-stat-label">Qualified Leads</div>
                <div className="hero-stat-value">{countLeads}K</div>
                <span className="hero-stat-change">
                  <ArrowTrendingUpIcon aria-hidden />
                  +34%
                </span>
              </div>
              <div className={`hero-stat-card ${card2Visible ? "hero-stat-card-visible" : ""}`}>
                <div className="hero-stat-label">Appointments Set</div>
                <div className="hero-stat-value">{countAppointments}</div>
                <span className="hero-stat-change">
                  <ArrowTrendingUpIcon aria-hidden />
                  +28%
                </span>
              </div>
              <div className={`hero-stat-card ${card3Visible ? "hero-stat-card-visible" : ""}`}>
                <div className="hero-stat-label">Close Rate</div>
                <div className="hero-stat-value">{countCloseRate}%</div>
                <span className="hero-stat-change">
                  <ArrowTrendingUpIcon aria-hidden />
                  +46%
                </span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};
