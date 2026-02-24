"use client";

import {
  ClockIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import FadeIn from "../components/fade-in";
import { ACCENT_COLORS } from "../config/constants";

const metrics = [
  {
    value: "100+",
    label: "Hours back every month",
    sublabel: "Intake and screening run in the background so you don’t",
    icon: ClockIcon,
  },
  {
    value: "92%",
    label: "Faster first response",
    sublabel: "Leads get a reply in seconds, not hours or the next day",
    icon: ChartBarIcon,
  },
  {
    value: "3–5x",
    label: "Quicker to bookable",
    sublabel: "From first message to calendar in a fraction of the time",
    icon: ArrowTrendingUpIcon,
  },
];

export default function Results() {
  return (
    <div
      id="results"
      className="relative border-t border-white/5 bg-[rgb(15,14,18)] py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(194,89,194)]/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Less screening, more closing
            </h2>
            <p className="mt-4 text-lg text-[rgb(156,163,175)]">
              The payoff isn’t more leads—it’s better use of the ones you
              already get.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
          {metrics.map((metric, index) => {
            const c = ACCENT_COLORS[index % ACCENT_COLORS.length];
            const Icon = metric.icon;
            return (
              <FadeIn key={metric.label} delay={index * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-lg ring-1 ring-[rgb(194,89,194)]/10">
                  <div
                    className="mx-auto flex size-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: c.muted, color: c.main }}
                  >
                    <Icon className="size-7" aria-hidden />
                  </div>
                  <p className="mt-6 text-4xl font-semibold tracking-tight text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[rgb(194,89,194)]">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm text-[rgb(156,163,175)]">
                    {metric.sublabel}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}
