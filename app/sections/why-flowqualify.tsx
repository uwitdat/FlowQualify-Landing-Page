"use client";

import FadeIn from "../components/fade-in";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { ACCENT_COLORS } from "../config/constants";

const differentiators = [
  "Real image understanding with vision AI",
  "Pricing-grounded knowledge base (RAG)",
  "Contractor-specific business logic",
  "State machine for intelligent qualification",
  "Multi-step conversational workflows",
  "Automated follow-up and booking",
  "Custom rules per contractor",
  "Lead scoring and prioritization",
];

const perfectFor = [
  "Home improvement contractors",
  "Hardscaping and landscaping companies",
  "Kitchen and bathroom renovators",
  "General contractors",
  "Any service-based business with high-ticket projects",
];

export default function WhyFlowQualify() {
  return (
    <div
      id="why"
      className="bg-[rgb(10,9,9)] py-24 sm:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold text-[rgb(194,89,194)]">
              Why FlowQualify?
            </h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Unlike simple chatbots, FlowQualify is a complete lead
              qualification engine
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-3xl">
          <ul className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, index) => {
              const c = ACCENT_COLORS[index % ACCENT_COLORS.length];
              return (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-white/[0.03] p-4 ring-1 ring-white/5"
                >
                  <FadeIn delay={index * 50} className="flex items-start gap-3">
                    <CheckBadgeIcon
                      className="mt-0.5 size-5 shrink-0"
                      style={{ color: c.main }}
                      aria-hidden="true"
                    />
                    <span className="text-[rgb(209,213,219)]">{item}</span>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
          <p className="mt-10 text-center text-lg font-medium text-[rgb(194,89,194)]">
            This isn&apos;t AI fluff—it&apos;s a true backend engine that works
            24/7.
          </p>
        </div>

        <FadeIn delay={200}>
          <div className="mx-auto mt-20 max-w-2xl text-center">
            <h3 className="text-lg font-semibold text-white">
              Perfect For
            </h3>
            <p className="mt-4 flex flex-wrap justify-center gap-2 text-[rgb(156,163,175)]">
              {perfectFor.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < perfectFor.length - 1 && (
                    <span className="mx-1.5 text-white/40">•</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
