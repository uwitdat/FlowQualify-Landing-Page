"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  CheckBadgeIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { ACCENT_SECONDARY, BUTTON_PRIMARY, BUTTON_PRIMARY_HOVER } from "../config/constants";
import { HeroChatDemo } from "../components/HeroChatDemo";

function useCountUp(
  target: number,
  active: boolean,
  durationMs = 900,
  delayMs = 0,
) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setStarted(true), delayMs);
    return () => clearTimeout(t);
  }, [active, delayMs]);
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    let rafId: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / durationMs, 1);
      setValue(Math.round(easeOutCubic(t) * target));
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, target, durationMs]);
  return value;
}

export const Hero = () => {
  const [chatProgress, setChatProgress] = useState(0);
  const [showBookingNotification, setShowBookingNotification] = useState(false);
  const onChatProgress = useCallback((visibleCount: number) => {
    setChatProgress(visibleCount);
  }, []);
  const onBookingNotificationShow = useCallback(() => {
    setShowBookingNotification(true);
  }, []);
  const onLoopRestart = useCallback(() => {
    setShowBookingNotification(false);
  }, []);

  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  const pct1 = useCountUp(34, statsVisible, 900, 100);
  const pct2 = useCountUp(28, statsVisible, 900, 200);
  const pct3 = useCountUp(46, statsVisible, 900, 300);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&display=swap');
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
          max-width: 1400px;
          margin: 0 auto;
          min-height: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: stretch;
          padding: 0 16px;
        }
        @media (min-width: 1024px) {
          .hero-container { padding: 0 32px; }
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          margin: 80px 48px 64px 0;
          max-width: 600px;
        }
        .hero-left-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 0;
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
          background: ${BUTTON_PRIMARY};
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: transform 0.18s ease, background 0.18s ease;
          cursor: pointer;
          white-space: nowrap;
          border: 1px solid ${BUTTON_PRIMARY};
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          background: ${BUTTON_PRIMARY_HOVER};
          color: #fff;
          border-color: ${BUTTON_PRIMARY_HOVER};
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
        .hero-annotation-wrap {
          position: relative;
          margin: -4px 0 28px;
          max-width: 400px;
          display: inline-block;
        }
        .hero-annotation-text {
          font-family: 'Caveat', cursive;
          font-size: 18px;
          font-weight: 500;
          color: rgba(180, 83, 9, 0.82);
          line-height: 1.45;
          margin: 0;
          padding: 10px 14px;
          border: 1.5px solid rgba(180, 83, 9, 0.25);
          border-radius: 5px;
          background: rgba(180, 83, 9, 0.04);
          transform: rotate(-0.8deg);
          display: block;
        }
        .hero-annotation-arrow {
          position: absolute;
          right: -92px;
          top: 50%;
          transform: translateY(-65%);
          width: 88px;
          height: 58px;
          overflow: visible;
          pointer-events: none;
        }
        .hero-tagline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
          margin-bottom: 20px;
        }
        .hero-tagline svg { flex-shrink: 0; width: 16px; height: 16px; }
        .hero-right-col {
          position: relative;
          width: 100%;
          min-width: 0;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }
        .hero-stat-row {
          display: flex;
          gap: 8px;
          width: 100%;
          margin-top: auto;
        }
        .hero-stat-card {
          flex: 1 1 0;
          min-width: 160px;
          box-sizing: border-box;
          padding: 18px 20px;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          overflow: hidden;
          background: #fff;
          border-radius: 14px;
          border-left: 4px solid transparent;
          position: relative;
        }
        .hero-stat-card:nth-child(1) { border-left-color: rgb(13, 148, 136); background: #f0f9f8; z-index: 1; transform: translateY(8px) translateX(0); }
        .hero-stat-card:nth-child(2) { border-left-color: rgb(180, 83, 9); background: #fef8f2; z-index: 2; transform: translateY(8px) translateX(-32px); }
        .hero-stat-card:nth-child(3) { border-left-color: rgb(139, 92, 246); background: #f5f3fe; z-index: 3; transform: translateY(8px) translateX(-64px); }
        .hero-stat-card.hero-stat-card-visible {
          opacity: 1;
        }
        .hero-stat-card:nth-child(1).hero-stat-card-visible { transform: translateY(0) translateX(0); }
        .hero-stat-card:nth-child(2).hero-stat-card-visible { transform: translateY(0) translateX(-32px); }
        .hero-stat-card:nth-child(3).hero-stat-card-visible { transform: translateY(0) translateX(-64px); }
        .hero-stat-label {
          font-size: 14px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: 0.02em;
          margin-bottom: 4px;
        }
        .hero-stat-change {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 800;
          margin-top: 10px;
          padding: 8px 14px;
          border-radius: 10px;
          letter-spacing: 0.02em;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }
        .hero-stat-change svg { width: 18px; height: 18px; flex-shrink: 0; }
        .hero-stat-card:nth-child(1) .hero-stat-change { color: rgb(13, 148, 136); background: rgba(13, 148, 136, 0.18); }
        .hero-stat-card:nth-child(1) .hero-stat-change svg { color: rgb(13, 148, 136); }
        .hero-stat-card:nth-child(2) .hero-stat-change { color: rgb(180, 83, 9); background: rgba(180, 83, 9, 0.15); }
        .hero-stat-card:nth-child(2) .hero-stat-change svg { color: rgb(180, 83, 9); }
        .hero-stat-card:nth-child(3) .hero-stat-change { color: rgb(139, 92, 246); background: rgba(139, 92, 246, 0.15); }
        .hero-stat-card:nth-child(3) .hero-stat-change svg { color: rgb(139, 92, 246); }
        @media (max-width: 1020px) {
          .hero-section { padding: 80px 20px 24px; min-height: auto; display: flex; align-items: stretch; }
          .hero-container { grid-template-columns: 1fr; grid-template-rows: auto; gap: 20px; align-items: stretch; min-height: 0; flex: 1; }
          .hero-left { align-items: center; text-align: center; margin: 0; max-width: none; padding: 0 8px; min-height: 0; flex-shrink: 0; }
          .hero-h1 { font-size: clamp(28px, 7vw, 36px); margin-bottom: 20px; }
          .hero-subhead { text-align: center; margin-left: auto; margin-right: auto; margin-bottom: 28px; font-size: 15px; line-height: 1.6; }
          .hero-cta-row { justify-content: center; margin-bottom: 24px; gap: 10px; }
          .hero-btn-primary, .hero-btn-ghost { font-size: 14px; padding: 10px 18px; }
          .hero-tagline { display: flex; justify-content: center; text-align: center; flex-wrap: wrap; max-width: 100%; margin-top: 16px; margin-bottom: 20px; }
          .hero-stat-row { justify-content: center; flex-wrap: wrap; gap: 10px; margin-top: 32px; }
          .hero-stat-card { min-width: 0; flex: 1 1 140px; max-width: 220px; padding: 14px 12px; }
          .hero-stat-card:nth-child(2), .hero-stat-card:nth-child(2).hero-stat-card-visible { transform: translateY(0) translateX(0); }
          .hero-stat-card:nth-child(2).hero-stat-card-visible { transform: translateY(0) translateX(0); }
          .hero-stat-card:nth-child(3), .hero-stat-card:nth-child(3).hero-stat-card-visible { transform: translateY(0) translateX(0); }
          .hero-stat-card:nth-child(3).hero-stat-card-visible { transform: translateY(0) translateX(0); }
          .hero-stat-label { font-size: 13px; }
          .hero-stat-change { font-size: 14px; padding: 6px 10px; margin-top: 8px; }
          .hero-stat-change svg { width: 16px; height: 16px; }
          .hero-right-col { display: none; }
        }
        @media (max-width: 520px) {
          .hero-h1 { margin-bottom: 18px; }
          .hero-subhead { font-size: 14px; margin-bottom: 22px; }
          .hero-cta-row { margin-bottom: 20px; }
          .hero-tagline { display: none; }
          .hero-btn-primary, .hero-btn-ghost { font-size: 13px; padding: 9px 16px; }
          .hero-stat-row { flex-direction: row; flex-wrap: nowrap; justify-content: center; gap: 12px; margin-top: 28px; }
          .hero-stat-card { flex: none; max-width: none; min-width: 0; padding: 0; background: transparent; border-left: none; border-radius: 0; box-shadow: none; }
          .hero-stat-card:nth-child(1), .hero-stat-card:nth-child(2), .hero-stat-card:nth-child(3) { background: transparent; }
          .hero-stat-label { font-size: 11px; font-weight: 600; color: #0F172A; margin-bottom: 2px; }
          .hero-stat-change { font-size: 12px; font-weight: 800; padding: 0; margin-top: 0; background: transparent; box-shadow: none; }
          .hero-stat-change svg { width: 12px; height: 12px; }
          .hero-stat-card:nth-child(1) .hero-stat-change { color: rgb(13, 148, 136); background: transparent; }
          .hero-stat-card:nth-child(1) .hero-stat-change svg { color: rgb(13, 148, 136); }
          .hero-stat-card:nth-child(2) .hero-stat-change { color: rgb(180, 83, 9); background: transparent; }
          .hero-stat-card:nth-child(2) .hero-stat-change svg { color: rgb(180, 83, 9); }
          .hero-stat-card:nth-child(3) .hero-stat-change { color: rgb(139, 92, 246); background: transparent; }
          .hero-stat-card:nth-child(3) .hero-stat-change svg { color: rgb(139, 92, 246); }
        }
        @media (max-width: 400px) {
          .hero-section { padding: 72px 16px 24px; overflow-x: hidden; }
          .hero-container { overflow-x: hidden; flex: 1; min-height: 0; }
          .hero-left { margin: 0; padding: 0; }
          .hero-h1 { font-size: 26px; margin-bottom: 16px; }
          .hero-subhead { font-size: 13px; margin-bottom: 20px; line-height: 1.55; }
          .hero-cta-row { margin-bottom: 20px; gap: 8px; }
          .hero-btn-primary, .hero-btn-ghost { font-size: 12px; padding: 8px 14px; }
          .hero-stat-row { margin-top: 24px; }
          .hero-right-col { display: none; }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-container">
          {/* Left half — all text content */}
          <div className="hero-left">
            <div className="hero-left-content">
              <p className="hero-tagline" style={{ color: ACCENT_SECONDARY }}>
                <CheckBadgeIcon aria-hidden />
                Done For You Lead Generation For Home Remodelers
              </p>
              <h1 className="hero-h1">
                Fill your calendar with{" "}
                <span className="hero-grad">qualified appointments.</span>
              </h1>
              <p className="hero-subhead">
                FlowQualify is a turnkey, performance-based lead generation
                system for{" "}
                <span style={{ color: BUTTON_PRIMARY, fontWeight: 700 }}>contractors &amp; remodelers</span>
                {" "}who want a calendar
                consistently filled with exclusive, qualified jobs.
              </p>
              <div className="hero-cta-row">
                <Link href="/opt-in" className="hero-btn-primary">
                  Book Demo
                </Link>
                <Link href="/opt-in" className="hero-btn-ghost">
                  How It Works
                </Link>
              </div>
            </div>
            <div className="hero-stat-row">
              <div
                className={`hero-stat-card ${statsVisible ? "hero-stat-card-visible" : ""}`}
              >
                <div className="hero-stat-label">Qualified Leads</div>
                <span className="hero-stat-change">
                  <ArrowTrendingUpIcon aria-hidden />+{pct1}%
                </span>
              </div>
              <div
                className={`hero-stat-card ${statsVisible ? "hero-stat-card-visible" : ""}`}
              >
                <div className="hero-stat-label">Appointments</div>
                <span className="hero-stat-change">
                  <ArrowTrendingUpIcon aria-hidden />+{pct2}%
                </span>
              </div>
              <div
                className={`hero-stat-card ${statsVisible ? "hero-stat-card-visible" : ""}`}
              >
                <div className="hero-stat-label">Close Rate</div>
                <span className="hero-stat-change">
                  <ArrowTrendingUpIcon aria-hidden />+{pct3}%
                </span>
              </div>
            </div>
          </div>
          {/* Right half — chat; on mobile, metrics below chat */}
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div className="hero-right-col">
              <HeroChatDemo
                onBookingNotificationShow={onBookingNotificationShow}
                onLoopRestart={onLoopRestart}
                onChatProgress={onChatProgress}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
