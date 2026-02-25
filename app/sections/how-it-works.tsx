"use client";

import FadeIn from "../components/fade-in";
import {
  ChatBubbleBottomCenterTextIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { FaFacebookF } from "react-icons/fa";
import { ACCENT_COLORS } from "../config/constants";

const steps = [
  {
    number: "01",
    title: "We Run Your Meta Ads",
    description:
      "Targeted campaigns built for kitchen & bath remodelers. We handle creative, spend, and targeting — you never touch it.",
    icon: FaFacebookF,
    badges: ["Geographic Targeting", "Budget Qualification", "Intent Verification"],
  },
  {
    number: "02",
    title: "AI Qualifies Every Lead",
    description:
      "The moment someone clicks, our AI opens a Messenger chat and collects budget, timeline, and scope automatically — 24/7.",
    icon: ChatBubbleBottomCenterTextIcon,
    badges: ["Budget Verification", "Timeline Assessment", "Auto-Scoring"],
  },
  {
    number: "03",
    title: "Appointments Land With Full Briefs",
    description:
      "Every booking includes a project brief: budget confirmed, scope outlined, photos attached. No surprises when you show up.",
    icon: CalendarDaysIcon,
    badges: ["Exclusive Scheduling", "Project Brief", "Photo Analysis"],
  },
  {
    number: "04",
    title: "You Show Up and Close",
    description:
      "No chasing. No cold calls. No wasted drive-outs. Every appointment is pre-screened and ready for your quote.",
    icon: CheckBadgeIcon,
    badges: ["Pre-Screened Leads", "Zero Cold Calls", "High-Intent Only"],
  },
];

export default function HowItWorks() {
  return (
    <div
      id="how-it-works"
      className="bg-[rgb(10,9,9)] py-24 sm:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[rgb(232,138,232)]">
              How it works
            </h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              From ad click to booked job —
              <br />
              <span className="text-[rgb(232,138,232)]">on autopilot.</span>
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2">
          {steps.map((step, index) => {
            const c = ACCENT_COLORS[index % ACCENT_COLORS.length];
            const isMeta = index === 0;
            const metaBlue = "#1877F2";
            const metaBlueMuted = "rgba(24, 119, 242, 0.2)";
            const Icon = step.icon;
            return (
              <FadeIn key={step.title} delay={index * 80}>
                <div className="rounded-2xl border border-white/40 bg-white/[0.04] p-6 shadow-sm ring-1 ring-white/20">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex size-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold tabular-nums text-white ring-1 ring-white/20"
                      aria-hidden
                    >
                      {step.number}
                    </span>
                    <div
                      className="flex size-12 items-center justify-center rounded-full border"
                      style={{
                        backgroundColor: isMeta ? metaBlueMuted : c.muted,
                        borderColor: isMeta ? metaBlue : c.main,
                        color: isMeta ? metaBlue : c.main,
                      }}
                      aria-hidden
                    >
                      <Icon className="size-6" aria-hidden />
                    </div>
                  </div>
                    <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[rgb(209,213,219)]">
                      {step.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-[rgb(34,211,238)]/40 bg-[rgb(34,211,238)]/20 px-3 py-1 text-xs font-medium text-[rgb(34,211,238)]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}
