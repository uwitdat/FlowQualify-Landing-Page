"use client";

import {
  MegaphoneIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import FadeIn from "../components/fade-in";
import { ACCENT_COLORS } from "../config/constants";

const features = [
  {
    name: "Ads that fill your pipeline",
    description:
      "We run your Meta and Instagram ads so you get a steady stream of leads. No in-house ads team, no guessing—just more opportunities.",
    icon: MegaphoneIcon,
  },
  {
    name: "Qualification that runs 24/7",
    description:
      "We engage every lead instantly, collect budget and timeline, and only book the ones that meet your bar. Your calendar fills with appointments that close.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Booked appointments, not chaos",
    description:
      "Qualified leads land on your calendar with full briefs and talking points. You show up ready to close—no screening, no chasing.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Revenue you can count on",
    description:
      "More qualified appointments mean more signed contracts. We handle lead gen and intake; you focus on delivering and getting paid.",
    icon: BanknotesIcon,
  },
];

export default function Features() {
  return (
    <div
      id="features"
      className="py-20 bg-background flex flex-col items-center justify-center border-t border-border"
    >
      <div className="max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-accent">
              What you get
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
              Leads and appointments without the grind
            </p>
            <p className="mt-6 text-lg/8 text-text-secondary">
              We run ads, qualify every lead, and book only the right
              appointments. You get a full calendar and more revenue.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid gap-10 sm:grid-cols-2">
            {features.map((feature, index) => {
              const color = ACCENT_COLORS[index % ACCENT_COLORS.length];
              const Icon = feature.icon;
              return (
                <FadeIn
                  key={feature.name}
                  delay={index * 80}
                  className="relative pl-14"
                >
                  <div
                    className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: color.main }}
                    aria-hidden="true"
                  >
                    <Icon className="size-6 text-white" aria-hidden="true" />
                  </div>
                  <dt className="text-base/7 font-semibold text-white">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-text-secondary">
                    {feature.description}
                  </dd>
                </FadeIn>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
