"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  BoltIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { GridPattern } from "./ui/grid-pattern";

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
  { sender: "lead", text: "Around 45-85k." },
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
const MAX_VISIBLE_MESSAGES = 4;
const MAX_VISIBLE_MESSAGES_MOBILE = 1;
const MOBILE_BREAKPOINT_PX = 1020;
const MOBILE_ONLY_BREAKPOINT_PX = 1020;
const STATIC_CHAT_MESSAGE_COUNT = 3;
const VALUE_BUBBLE_DELAY_MS = 700;
const BOOKING_NOTIFICATION_DELAY_MS = 1200;
const BOOKING_BUDGET = "$45-85k";

interface HeroChatDemoProps {
  onBookingNotificationShow?: () => void;
  onLoopRestart?: () => void;
  onChatProgress?: (visibleCount: number) => void;
}

export function HeroChatDemo({
  onBookingNotificationShow,
  onLoopRestart,
  onChatProgress,
}: HeroChatDemoProps) {
  const bookingTimeoutsRef = useRef<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOnly, setIsMobileOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingSender, setTypingSender] = useState<"ai" | "lead" | null>(null);
  const [showValueBubble, setShowValueBubble] = useState(false);
  const [showBookingNotification, setShowBookingNotification] = useState(false);
  const [trustLineVisible, setTrustLineVisible] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT_PX}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_ONLY_BREAKPOINT_PX}px)`);
    const update = () => setIsMobileOnly(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    onChatProgress?.(visibleCount);
  }, [visibleCount, onChatProgress]);

  const nextSender = CHAT_SCRIPT[visibleCount]?.sender ?? null;

  const advance = useCallback(() => {
    if (visibleCount >= CHAT_SCRIPT.length) {
      setTypingSender(null);
      bookingTimeoutsRef.current.forEach(clearTimeout);
      bookingTimeoutsRef.current = [];
      const id1 = window.setTimeout(
        () => setShowBookingNotification(true),
        VALUE_BUBBLE_DELAY_MS,
      );
      const id2 = window.setTimeout(
        () => setShowValueBubble(true),
        VALUE_BUBBLE_DELAY_MS + BOOKING_NOTIFICATION_DELAY_MS,
      );
      bookingTimeoutsRef.current = [id1, id2];
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
    if (isMobileOnly) return;
    if (visibleCount === 0 && typingSender === null) {
      setTypingSender(nextSender ?? "ai");
    }
  }, [isMobileOnly, visibleCount, typingSender, nextSender]);

  useEffect(() => {
    if (showBookingNotification) {
      onBookingNotificationShow?.();
      const trustT = setTimeout(() => setTrustLineVisible(true), 1400);
      const t = setTimeout(() => {
        bookingTimeoutsRef.current.forEach(clearTimeout);
        bookingTimeoutsRef.current = [];
        setShowValueBubble(false);
        setShowBookingNotification(false);
        setTrustLineVisible(false);
        setKey((k) => k + 1);
        setVisibleCount(0);
        setTypingSender(CHAT_SCRIPT[0].sender);
        onLoopRestart?.();
      }, NOTIFICATION_DURATION_MS);
      return () => {
        clearTimeout(trustT);
        clearTimeout(t);
      };
    }
  }, [showBookingNotification, onBookingNotificationShow, onLoopRestart]);

  useEffect(() => {
    if (isMobileOnly) return;
    if (
      visibleCount === 0 &&
      typingSender !== null &&
      !showBookingNotification
    ) {
      const t = setTimeout(() => {
        setTypingSender(null);
        setVisibleCount(1);
      }, TYPING_DURATION_MS);
      return () => clearTimeout(t);
    }
    if (
      typingSender === null &&
      visibleCount > 0 &&
      visibleCount < CHAT_SCRIPT.length
    ) {
      const t = setTimeout(advance, MESSAGE_DELAY_MS);
      return () => clearTimeout(t);
    }
    if (
      typingSender === null &&
      visibleCount === CHAT_SCRIPT.length &&
      !showBookingNotification
    ) {
      const t = setTimeout(advance, MESSAGE_DELAY_MS);
      return () => clearTimeout(t);
    }
  }, [isMobileOnly, visibleCount, typingSender, showBookingNotification, advance]);

  return (
    <div className="hero-chat-demo" key={key} aria-hidden>
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
          min-width: 0;
          box-sizing: border-box;
        }
        .hero-chat-panel {
          width: 100%;
          max-width: 520px;
          max-height: 100%;
          min-width: 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: transparent;
          padding: 24px 22px 20px;
        }
        .hero-chat-messages {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-height: 420px;
          overflow: hidden;
          overflow-x: hidden;
          padding-bottom: 6px;
          justify-content: flex-end;
          min-width: 0;
        }
        .hero-chat-msg {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          max-width: 95%;
          min-width: 0;
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
          max-width: 100%;
          overflow-wrap: break-word;
          word-break: break-word;
          box-sizing: border-box;
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
          color: #fff;
          background: rgb(139, 92, 246);
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
          max-width: 100%;
          min-width: 0;
          padding: 12px 16px;
          background: rgba(71, 85, 105, 0.96);
          border: 1px solid rgba(148, 163, 184, 0.28);
          border-radius: 18px;
          border-bottom-left-radius: 4px;
          animation: heroChatFadeIn 0.3s ease-out;
        }
        .hero-chat-typing .hero-chat-avatar {
          background: rgb(139, 92, 246);
          color: #fff;
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
        .hero-chat-typing.lead-typing .hero-chat-typing-dots span {
          background: rgba(255, 255, 255, 0.9);
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
        .hero-chat-value-bubble {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 18px;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          background: rgba(59, 130, 246, 0.95);
          border-radius: 14px;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          animation: heroChatFadeIn 0.4s ease-out;
          align-self: center;
          margin-top: 4px;
        }
        .hero-chat-value-bubble svg {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
        }
        .hero-chat-value-bubble span,
        .hero-chat-booking-notification span {
          overflow-wrap: break-word;
          word-break: break-word;
          min-width: 0;
        }
        .hero-chat-booking-notification {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 18px;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          background: rgba(13, 148, 136, 0.95);
          border-radius: 14px;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          animation: heroChatFadeIn 0.4s ease-out;
          align-self: center;
          margin-top: 4px;
        }
        .hero-chat-trust-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 0;
          margin-top: 20px;
          padding-top: 16px;
          font-size: 14px;
          font-weight: 600;
          color: #0F172A;
          letter-spacing: 0.02em;
          opacity: 0;
          transition: opacity 1.2s ease 0.3s;
        }
        .hero-chat-trust-line.hero-chat-trust-line-visible {
          opacity: 1;
        }
        .hero-chat-trust-line svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          color: rgb(180, 83, 9);
        }
        .hero-chat-booking-notification svg {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
        }
        @media (max-width: 1020px) {
          .hero-chat-grid-wrap { display: none; }
          .hero-chat-gradient-edge { display: none; }
          .hero-chat-demo { padding: 16px 16px 48px; }
          .hero-chat-panel { max-width: 100%; padding: 18px 12px 20px; }
          .hero-chat-messages { min-height: 140px; justify-content: flex-end; }
          .hero-chat-msg { max-width: 100%; }
          .hero-chat-bubble { font-size: 14px; padding: 12px 14px; }
        }
        @media (max-width: 400px) {
          .hero-chat-demo { padding: 12px 12px 40px; }
          .hero-chat-panel { padding: 14px 8px 16px; }
          .hero-chat-messages { min-height: 120px; }
          .hero-chat-bubble { font-size: 13px; padding: 10px 12px; }
        }
        .hero-chat-gradient-edge {
          position: absolute;
          pointer-events: none;
          z-index: 2;
        }
        .hero-chat-gradient-edge.top {
          top: 0; left: 0; right: 0; height: 80px;
          background: linear-gradient(to bottom, #fff 0%, transparent 100%);
        }
        .hero-chat-gradient-edge.bottom {
          bottom: 0; left: 0; right: 0; height: 80px;
          background: linear-gradient(to top, #fff 0%, transparent 100%);
        }
        .hero-chat-gradient-edge.left {
          top: 0; bottom: 0; left: 0; width: 80px;
          background: linear-gradient(to right, #fff 0%, transparent 100%);
        }
        .hero-chat-gradient-edge.right {
          top: 0; bottom: 0; right: 0; width: 80px;
          background: linear-gradient(to left, #fff 0%, transparent 100%);
        }
      `}</style>
      <div
        className="hero-chat-grid-wrap absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
        style={{ zIndex: 0 }}
      >
        <GridPattern
          width={72}
          height={72}
          x={-1}
          y={-1}
          className="fill-gray-400/[0.08]"
          squareClassName="fill-gray-400/[0.06]"
          stroke="rgba(156, 163, 175, 0.2)"
          strokeWidth={0.6}
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
      <div className="hero-chat-gradient-edge top" aria-hidden />
      <div className="hero-chat-gradient-edge bottom" aria-hidden />
      <div className="hero-chat-gradient-edge left" aria-hidden />
      <div className="hero-chat-gradient-edge right" aria-hidden />
      <div
        className="relative z-[1]"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          minHeight: 0,
        }}
      >
        <div className="hero-chat-panel">
          <div className="hero-chat-messages">
            {isMobileOnly
              ? CHAT_SCRIPT.slice(0, STATIC_CHAT_MESSAGE_COUNT).map(
                  (msg, i) => (
                    <div
                      key={`static-${i}`}
                      className={`hero-chat-msg ${msg.sender}`}
                      style={{ animation: "none" }}
                    >
                      <div className="hero-chat-avatar">
                        {msg.sender === "lead" ? (
                          <Image
                            src="/user.png"
                            alt=""
                            width={32}
                            height={32}
                            className="hero-chat-avatar-img"
                            aria-hidden
                          />
                        ) : (
                          <BoltIcon className="w-5 h-5" aria-hidden />
                        )}
                      </div>
                      <div className="hero-chat-bubble">{msg.text}</div>
                    </div>
                  ),
                )
              : (() => {
                  const hasTyping =
                    typingSender !== null &&
                    visibleCount < CHAT_SCRIPT.length;
                  const maxSlots = isMobile
                    ? MAX_VISIBLE_MESSAGES_MOBILE
                    : MAX_VISIBLE_MESSAGES;
                  const messageSlots = hasTyping ? maxSlots - 1 : maxSlots;
                  const start =
                    messageSlots <= 0
                      ? visibleCount
                      : Math.max(0, visibleCount - messageSlots);
                  return CHAT_SCRIPT.slice(start, visibleCount).map(
                    (msg, i) => {
                      const scriptIndex = start + i;
                      return (
                        <div
                          key={`${key}-${scriptIndex}`}
                          className={`hero-chat-msg ${msg.sender}`}
                        >
                          <div className="hero-chat-avatar">
                            {msg.sender === "lead" ? (
                              <Image
                                src="/user.png"
                                alt=""
                                width={32}
                                height={32}
                                className="hero-chat-avatar-img"
                                aria-hidden
                              />
                            ) : (
                              <BoltIcon className="w-5 h-5" aria-hidden />
                            )}
                          </div>
                          <div className="hero-chat-bubble">{msg.text}</div>
                        </div>
                      );
                    },
                  );
                })()}
            {!isMobileOnly &&
              typingSender === "ai" &&
              visibleCount < CHAT_SCRIPT.length && (
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
            {!isMobileOnly &&
              typingSender === "lead" &&
              visibleCount < CHAT_SCRIPT.length && (
              <div className="hero-chat-typing lead-typing">
                <div className="hero-chat-avatar">
                  <Image
                    src="/user.png"
                    alt=""
                    width={32}
                    height={32}
                    className="hero-chat-avatar-img"
                    aria-hidden
                  />
                </div>
                <div className="hero-chat-typing-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            {!isMobileOnly && showBookingNotification && (
              <div className="hero-chat-booking-notification">
                <CheckCircleIcon aria-hidden />
                <span>Appointment booked — Thursday, 2:00 PM</span>
                <CalendarDaysIcon aria-hidden />
              </div>
            )}
            {!isMobileOnly && showValueBubble && (
              <div className="hero-chat-value-bubble">
                <CheckCircleIcon aria-hidden />
                <span>
                  You just closed a {BOOKING_BUDGET} project with FlowQualify
                </span>
                <CurrencyDollarIcon aria-hidden />
              </div>
            )}
          </div>
          <p
            className={`hero-chat-trust-line ${isMobileOnly || trustLineVisible ? "hero-chat-trust-line-visible" : ""}`}
          >
            <StarIcon aria-hidden />
            Over 50+ remodelers trust FlowQualify
          </p>
        </div>
      </div>
    </div>
  );
}
