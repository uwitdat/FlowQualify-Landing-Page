"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { BoltIcon, CalendarDaysIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const CHAT_SCRIPT: { sender: "lead" | "ai"; text: string }[] = [
  { sender: "lead", text: "Hi, we're looking to redo our kitchen." },
  {
    sender: "ai",
    text: "Thanks for reaching out! A kitchen reno can really transform your home. What's not working for you in the space right now?",
  },
  {
    sender: "lead",
    text: "Counters and cabinets are dated. We're planning to sell in about a year.",
  },
  {
    sender: "ai",
    text: "Makes sense to add value before listing. To give you a good ballpark — what's your rough budget for the project?",
  },
  { sender: "lead", text: "Around 45k." },
  {
    sender: "ai",
    text: "Perfect. When would work for a quick call — this week or next?",
  },
  { sender: "lead", text: "Thursday afternoon works." },
  {
    sender: "ai",
    text: "You're set for Thursday at 2pm. We'll send a calendar invite. Talk then!",
  },
];

const MESSAGE_DELAY_MS = 2200;
const TYPING_DURATION_MS = 800;
const NOTIFICATION_DURATION_MS = 8500;
const LOOP_PAUSE_MS = 2000;
const MAX_VISIBLE_MESSAGES = 6;

interface HeroChatDemoProps {
  onBookingNotificationShow?: () => void;
  onLoopRestart?: () => void;
  onChatProgress?: (visibleCount: number) => void;
}

export function HeroChatDemo({ onBookingNotificationShow, onLoopRestart, onChatProgress }: HeroChatDemoProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingSender, setTypingSender] = useState<"ai" | "lead" | null>(null);
  const [showBookingNotification, setShowBookingNotification] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    onChatProgress?.(visibleCount);
  }, [visibleCount, onChatProgress]);

  const nextSender = CHAT_SCRIPT[visibleCount]?.sender ?? null;

  const advance = useCallback(() => {
    if (visibleCount >= CHAT_SCRIPT.length) {
      setTypingSender(null);
      setShowBookingNotification(true);
      return;
    }
    const who = CHAT_SCRIPT[visibleCount].sender;
    setTypingSender(who);
    const typingTimer = setTimeout(() => {
      setTypingSender(null);
      setVisibleCount((c) => c + 1);
    }, TYPING_DURATION_MS);
    return () => clearTimeout(typingTimer);
  }, [visibleCount]);

  useEffect(() => {
    if (visibleCount === 0 && typingSender === null) {
      setTypingSender(nextSender ?? "ai");
    }
  }, [visibleCount, typingSender, nextSender]);

  useEffect(() => {
    if (showBookingNotification) {
      onBookingNotificationShow?.();
      const t = setTimeout(() => {
        setShowBookingNotification(false);
        setKey((k) => k + 1);
        setVisibleCount(0);
        setTypingSender(CHAT_SCRIPT[0].sender);
        onLoopRestart?.();
      }, NOTIFICATION_DURATION_MS);
      return () => clearTimeout(t);
    }
  }, [showBookingNotification, onBookingNotificationShow, onLoopRestart]);

  useEffect(() => {
    if (visibleCount === 0 && typingSender !== null && !showBookingNotification) {
      const t = setTimeout(() => {
        setTypingSender(null);
        setVisibleCount(1);
      }, TYPING_DURATION_MS);
      return () => clearTimeout(t);
    }
    if (typingSender === null && visibleCount > 0 && visibleCount < CHAT_SCRIPT.length) {
      const t = setTimeout(advance, MESSAGE_DELAY_MS);
      return () => clearTimeout(t);
    }
    if (typingSender === null && visibleCount === CHAT_SCRIPT.length && !showBookingNotification) {
      const t = setTimeout(advance, MESSAGE_DELAY_MS);
      return () => clearTimeout(t);
    }
  }, [visibleCount, typingSender, showBookingNotification, advance]);

  return (
    <div
      className="hero-chat-demo"
      key={key}
      aria-hidden
    >
      <style>{`
        .hero-chat-demo {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px 20px 100px;
          z-index: 5;
          overflow: hidden;
        }
        .hero-chat-panel {
          width: 100%;
          max-width: 520px;
          max-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: rgba(0, 0, 0, 0.18);
          border-radius: 22px;
          padding: 24px 22px 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .hero-chat-messages {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-height: 300px;
          overflow-y: auto;
          overflow-x: hidden;
          padding-bottom: 6px;
          justify-content: flex-end;
        }
        .hero-chat-msg {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          max-width: 95%;
          animation: heroChatFadeIn 0.4s ease-out;
        }
        .hero-chat-msg.lead {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        .hero-chat-msg.ai {
          align-self: flex-start;
        }
        @keyframes heroChatFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-chat-bubble {
          padding: 14px 18px;
          border-radius: 18px;
          font-size: 15px;
          line-height: 1.5;
          color: #fff;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
        }
        .hero-chat-msg.lead .hero-chat-bubble {
          background: rgba(13, 148, 136, 0.95);
          border-bottom-right-radius: 4px;
        }
        .hero-chat-msg.ai .hero-chat-bubble {
          background: rgba(71, 85, 105, 0.96);
          border: 1px solid rgba(148, 163, 184, 0.28);
          border-bottom-left-radius: 4px;
        }
        .hero-chat-avatar {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-chat-msg.lead .hero-chat-avatar {
          overflow: hidden;
          background: rgba(13, 148, 136, 0.2);
        }
        .hero-chat-msg.ai .hero-chat-avatar {
          color: rgba(255, 255, 255, 0.95);
          background: rgba(167, 139, 250, 0.5);
        }
        .hero-chat-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-chat-typing {
          display: flex;
          align-items: center;
          gap: 8px;
          align-self: flex-start;
          padding: 12px 16px;
          background: rgba(71, 85, 105, 0.96);
          border: 1px solid rgba(148, 163, 184, 0.28);
          border-radius: 18px;
          border-bottom-left-radius: 4px;
          animation: heroChatFadeIn 0.3s ease-out;
        }
        .hero-chat-typing .hero-chat-avatar {
          background: rgba(167, 139, 250, 0.5);
          color: rgba(255, 255, 255, 0.95);
        }
        .hero-chat-typing.lead-typing .hero-chat-avatar {
          background: rgba(13, 148, 136, 0.25);
          overflow: hidden;
        }
        .hero-chat-typing.lead-typing {
          align-self: flex-end;
          flex-direction: row-reverse;
          background: rgba(13, 148, 136, 0.95);
          border-radius: 18px;
          border-bottom-left-radius: 18px;
          border-bottom-right-radius: 4px;
        }
        .hero-chat-typing-dots {
          display: flex;
          gap: 4px;
        }
        .hero-chat-typing-dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          animation: heroChatBounce 0.6s ease-in-out infinite;
        }
        .hero-chat-typing-dots span:nth-child(2) { animation-delay: 0.1s; }
        .hero-chat-typing-dots span:nth-child(3) { animation-delay: 0.2s; }
        @keyframes heroChatBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
        .hero-chat-booking-notification {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: rgba(13, 148, 136, 0.95);
          border-radius: 14px;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 8px 24px rgba(13, 148, 136, 0.35);
          animation: heroChatFadeIn 0.4s ease-out;
          align-self: center;
          margin-top: 8px;
        }
        .hero-chat-booking-notification svg {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
        }
        @media (max-width: 900px) {
          .hero-chat-demo { padding: 16px 12px 80px; }
          .hero-chat-panel { max-width: 100%; padding: 18px 14px 14px; }
          .hero-chat-bubble { font-size: 14px; padding: 12px 16px; }
        }
        @media (max-width: 400px) {
          .hero-chat-demo { padding: 12px 8px 40px; }
          .hero-chat-panel { padding: 14px 10px 12px; }
          .hero-chat-bubble { font-size: 13px; padding: 10px 12px; }
        }
      `}</style>
      <div className="hero-chat-panel">
      <div className="hero-chat-messages">
        {CHAT_SCRIPT.slice(Math.max(0, visibleCount - MAX_VISIBLE_MESSAGES), visibleCount).map((msg, i) => {
          const scriptIndex = Math.max(0, visibleCount - MAX_VISIBLE_MESSAGES) + i;
          return (
          <div
            key={`${key}-${scriptIndex}`}
            className={`hero-chat-msg ${msg.sender}`}
          >
            <div className="hero-chat-avatar">
              {msg.sender === "lead" ? (
                <Image src="/user.png" alt="" width={32} height={32} className="hero-chat-avatar-img" aria-hidden />
              ) : (
                <BoltIcon className="w-5 h-5" aria-hidden />
              )}
            </div>
            <div className="hero-chat-bubble">{msg.text}</div>
          </div>
          );
        })}
        {typingSender === "ai" && visibleCount < CHAT_SCRIPT.length && (
          <div className="hero-chat-typing">
            <div className="hero-chat-avatar">
              <BoltIcon className="w-5 h-5" aria-hidden />
            </div>
            <div className="hero-chat-typing-dots">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
        {typingSender === "lead" && visibleCount < CHAT_SCRIPT.length && (
          <div className="hero-chat-typing lead-typing">
            <div className="hero-chat-avatar">
              <Image src="/user.png" alt="" width={32} height={32} className="hero-chat-avatar-img" aria-hidden />
            </div>
            <div className="hero-chat-typing-dots">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
        {showBookingNotification && (
          <div className="hero-chat-booking-notification">
            <CheckCircleIcon aria-hidden />
            <span>Appointment booked — Thursday, 2:00 PM</span>
            <CalendarDaysIcon aria-hidden />
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
