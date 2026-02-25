"use client";

import { useEffect, useRef, useState } from "react";
import { ClockIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { FaFacebookMessenger } from "react-icons/fa";
import FadeIn from "../components/fade-in";
import { ACCENT_COLORS } from "../config/constants";

const DURATION_MS = 1600;
const COUNT_UP_DELAY_MS = 700;
const ANIMATED_METRICS = [
  { target: 30, suffix: "+" },
  { target: 92, suffix: "%" },
] as const;

const metrics = [
  {
    value: "30+",
    label: "Hours back every month",
    sublabel:
      "No more chasing, calling back, or driving out to unqualified jobs",
    icon: ClockIcon,
    animate: true,
  },
  {
    value: "92%",
    label: "Reply in seconds, not hours",
    sublabel: "First response happens the moment they click your ad",
    icon: FaFacebookMessenger,
    animate: true,
  },
  {
    value: "3–5x",
    label: "Quicker to bookable",
    sublabel: "From first message to calendar in a fraction of the time",
    icon: ArrowTrendingUpIcon,
    animate: false,
  },
];

function easeOutQuart(t: number) {
  return 1 - (1 - t) ** 4;
}

export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState([0, 0]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;
        setHasAnimated(true);
      },
      { threshold: 0.2, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed < COUNT_UP_DELAY_MS) {
        requestAnimationFrame(tick);
        return;
      }
      const animElapsed = elapsed - COUNT_UP_DELAY_MS;
      const t = Math.min(animElapsed / DURATION_MS, 1);
      const eased = easeOutQuart(t);

      setDisplayValues([
        Math.round(eased * ANIMATED_METRICS[0].target),
        Math.round(eased * ANIMATED_METRICS[1].target),
      ]);

      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      id="results"
      className="relative border-t border-white/5 bg-[rgb(15,14,18)] py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(232,138,232)]/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Less screening, more closing
            </h2>
            <p className="mt-4 text-lg text-[rgb(156,163,175)]">
              We bring the leads with Meta and Instagram ads, then qualify them
              so you get more booked appointments and closed deals.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
          {metrics.map((metric, index) => {
            const c = ACCENT_COLORS[index % ACCENT_COLORS.length];
            const Icon = metric.icon;
            const displayValue =
              metric.animate && ANIMATED_METRICS[index]
                ? `${displayValues[index]}${ANIMATED_METRICS[index].suffix}`
                : metric.value;
            return (
              <FadeIn key={metric.label} delay={index * 100}>
                <div className="rounded-2xl border border-white/40 bg-white/[0.04] p-8 text-center shadow-sm ring-1 ring-white/20">
                  <div
                    className="mx-auto flex size-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: c.muted, color: c.main }}
                  >
                    <Icon className="size-7" aria-hidden />
                  </div>
                  <p className="mt-6 text-4xl font-semibold tracking-tight text-white tabular-nums">
                    {displayValue}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[rgb(232,138,232)]">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-[rgb(209,213,219)]">
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
