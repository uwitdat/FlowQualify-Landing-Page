"use client";

import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  HomeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import FadeIn from "../components/fade-in";
import { ACCENT_COLORS } from "../config/constants";

const criteria = [
  {
    title: "Fits your minimums",
    description:
      "We confirm budget and scope against the bar you set. Tire-kickers and wrong-fit projects never make it to your calendar.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Real timing",
    description:
      "We surface people who are ready to move—not “someday” or “just curious.” Your time goes to leads with actual start dates in mind.",
    icon: CalendarDaysIcon,
  },
  {
    title: "Right person in the room",
    description:
      "The conversation is with whoever can say yes. No playing phone tag with a spouse or chasing someone who can’t sign the check.",
    icon: UserGroupIcon,
  },
  {
    title: "Scope in hand before you call",
    description:
      "Project type, location, and key details are in the brief. You show up to the call already knowing what you’re walking into.",
    icon: HomeIcon,
  },
  {
    title: "One click to book",
    description:
      "When a lead clears your bar, they’re scored and ready. You approve the slot; we handle the rest. Your job is to close.",
    icon: CheckCircleIcon,
  },
];

export default function WhatQualifiedMeans() {
  return (
    <div
      id="what-qualified"
      className="bg-[rgb(10,9,9)] border-t border-white/5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold text-[rgb(194,89,194)]">
              Your bar, our filter
            </h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Only the right leads hit your calendar
            </p>
            <p className="mt-6 text-lg text-[rgb(156,163,175)]">
              You set the criteria. We run the conversations and only push
              through leads that clear the bar—so you spend time closing, not
              screening.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:gap-8">
          {criteria.map((item, index) => {
            const c = ACCENT_COLORS[index % ACCENT_COLORS.length];
            const Icon = item.icon;
            return (
              <FadeIn
                key={item.title}
                delay={index * 80}
                className="flex gap-4 rounded-xl bg-white/[0.03] p-6 ring-1 ring-white/5"
              >
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: c.main }}
                  aria-hidden
                >
                  <Icon className="size-6 text-white" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[rgb(156,163,175)]">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[rgb(156,163,175)]">
          Works with whatever’s already sending you leads—your site, social,
          referrals. We don’t bring the traffic; we make sure the traffic that
          shows up is worth your time.
        </p>
      </div>
    </div>
  );
}
