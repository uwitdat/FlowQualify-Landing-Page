"use client";

import { useState, useCallback } from "react";
import { HeroChatDemo } from "../components/HeroChatDemo";

export default function ChatPreview() {
  const [, setShowBooking] = useState(false);
  const onBookingNotificationShow = useCallback(() => setShowBooking(true), []);
  const onLoopRestart = useCallback(() => setShowBooking(false), []);
  const onChatProgress = useCallback((_n: number) => {}, []);

  return (
    <>
      <style>{`
        .cpv-section {
          background: #ffffff;
          padding: 80px 24px 60px;
        }
        .cpv-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .cpv-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgb(180,83,9);
          display: block; margin-bottom: 10px;
        }
        .cpv-title {
          font-size: clamp(26px, 3.5vw, 38px); font-weight: 900;
          color: #0F172A; letter-spacing: -0.025em; line-height: 1.15;
          margin: 0 0 12px;
        }
        .cpv-sub {
          font-size: 16px; color: #64748B; line-height: 1.6;
          max-width: 520px; margin: 0 auto;
        }
        .cpv-demo-wrap {
          max-width: 560px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06);
        }
        @media (max-width: 600px) {
          .cpv-section { padding: 56px 12px 40px; }
          .cpv-demo-wrap { border-radius: 14px; }
        }
      `}</style>

      <section className="cpv-section">
        <div className="cpv-header">
          <span className="cpv-eyebrow">AI Qualification in Action</span>
          <h2 className="cpv-title">Watch how we qualify your leads</h2>
          <p className="cpv-sub">
            Our AI handles the conversation — budget, scope, and timeline
            confirmed automatically in Messenger before they ever hit your calendar.
          </p>
        </div>

        <div className="cpv-demo-wrap">
          <HeroChatDemo
            onBookingNotificationShow={onBookingNotificationShow}
            onLoopRestart={onLoopRestart}
            onChatProgress={onChatProgress}
          />
        </div>
      </section>
    </>
  );
}
