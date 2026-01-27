"use client";

import FadeIn from "../components/fade-in";
import {
  LinkIcon,
  ChatBubbleBottomCenterTextIcon,
  EyeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  ArrowTrendingUpIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { ACCENT_COLORS } from "../config/constants";

const steps = [
  {
    name: "Connect Your Channels",
    description: "Link Facebook, Instagram, SMS, and email in minutes.",
    icon: LinkIcon,
  },
  {
    name: "AI Engages Instantly",
    description: "Every lead gets a personalized conversation immediately.",
    icon: CpuChipIcon,
  },
  {
    name: "Smart Qualification",
    description:
      "AI collects project details automatically through natural dialogue.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Analyze Images",
    description: "Vision AI understands project scope from homeowner photos.",
    icon: EyeIcon,
  },
  {
    name: "Score Your Leads",
    description: "See which leads are ready to book vs. need nurturing.",
    icon: ChartBarIcon,
  },
  {
    name: "Get Detailed Briefs",
    description: "Review fully qualified leads with complete context.",
    icon: DocumentTextIcon,
  },
  {
    name: "Book High-Value Appointments",
    description: "Focus only on leads worth your time.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Watch Your Pipeline Grow",
    description: "Track metrics and scale effortlessly.",
    icon: ArrowTrendingUpIcon,
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold text-[rgb(194,89,194)]">
              How It Works
            </h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              From first message to booked consultation
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const c = ACCENT_COLORS[index % ACCENT_COLORS.length];
              return (
              <FadeIn key={step.name} delay={index * 60}>
                <div className="flex flex-col">
                  <div
                    className="flex size-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: c.muted, color: c.main }}
                  >
                    <step.icon className="size-6" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-white">
                    {index + 1}. {step.name}
                  </p>
                  <p className="mt-1 text-sm text-[rgb(156,163,175)]">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
