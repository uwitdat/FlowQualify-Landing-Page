"use client";

import FadeIn from "../components/fade-in";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { ACCENT_COLORS } from "../config/constants";
//

const differentiators = [
  "Meta and Instagram ads that fill your pipeline",
  "Real image understanding with vision AI",
  "Pricing-grounded knowledge base (RAG)",
  "Contractor-specific business logic",
  "State machine for intelligent qualification",
  "Multi-step conversational workflows",
  "Automated follow-up and booking",
  "Custom rules per contractor",
  "Lead scoring and prioritization",
];

export default function WhyFlowQualify() {
  return (
    <div
      id="why"
      className="bg-background py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold text-accent">
              Why FlowQualify?
            </h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Unlike simple chatbots, FlowQualify is lead gen and a complete
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
                    <span className="text-foreground">{item}</span>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
          <p className="mt-10 text-center text-lg font-medium text-accent">
            This isn&apos;t AI fluff—it&apos;s a true backend engine that works
            24/7.
          </p>
        </div>
      </div>
    </div>
  );
}
