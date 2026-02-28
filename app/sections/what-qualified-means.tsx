"use client";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import FadeIn from "../components/fade-in";
import { ACCENT_COLORS } from "../config/constants";

const outcomes = [
  "We run Meta and Instagram ads to fill your pipeline—you get more leads without running ads yourself.",
  "We qualify 24/7 so only bookable appointments hit your calendar. No tire-kickers, no wrong-fit jobs.",
  "You show up to close. We handle lead gen, intake, and booking so you focus on signed contracts and revenue.",
];

export default function WhatQualifiedMeans() {
  return (
    <div
      id="what-qualified"
      className="bg-background border-t border-border py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-base font-semibold text-accent">
              More appointments. More revenue.
            </h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              We get you leads. You get paid.
            </p>
            <p className="mt-6 text-lg text-text-secondary">
              No ad management. No intake grind. We run the ads, qualify every
              lead, and put only the right appointments on your calendar.
            </p>
          </div>
        </FadeIn>

        <ul className="mx-auto mt-12 max-w-xl space-y-4">
          {outcomes.map((item, index) => {
            const c = ACCENT_COLORS[index % ACCENT_COLORS.length];
            return (
              <FadeIn key={item} delay={index * 60}>
                <li className="flex gap-4 rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/5">
                  <CheckCircleIcon
                    className="size-6 shrink-0 mt-0.5"
                    style={{ color: c.main }}
                    aria-hidden
                  />
                  <span className="text-foreground">{item}</span>
                </li>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
