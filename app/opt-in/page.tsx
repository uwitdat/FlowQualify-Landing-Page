"use client";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import FadeIn from "../components/fade-in";

const results = [
  "Booked appointments, not dead leads — every lead pre-qualified",
  "82% show rate on confirmed appointments",
  "38% close rate from show to signed contract",
  "AI responds in under 60 seconds, 24/7",
];

export default function OptInPage() {
  return (
    <div className="min-h-screen bg-[rgb(10,9,9)]">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[rgb(232,138,232)]/10 via-[rgb(10,9,9)] to-[rgb(10,9,9)]">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
          <FadeIn>
            <p className="text-center text-base font-semibold uppercase tracking-wider text-[rgb(232,138,232)]">
              Watch the full story
            </p>
            <h1 className="mt-3 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              How FlowQualify gets you{" "}
              <span className="text-[rgb(232,138,232)]">qualified appointments</span>
            </h1>
            <p className="mt-4 text-center text-lg text-[rgb(209,213,219)]">
              See how we run your ads, qualify every lead in real time, and put bookable appointments on your calendar.
            </p>
          </FadeIn>

          {/* Video */}
          <FadeIn delay={80}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl ring-1 ring-white/10">
              <video
                src={process.env.NEXT_PUBLIC_VIDEO_MAIN || "/videos/MainVideo.mp4"}
                className="aspect-video w-full"
                controls
                autoPlay
                muted
                playsInline
                preload="metadata"
                aria-label="FlowQualify overview and how it works"
              />
            </div>
          </FadeIn>

          {/* Results copy */}
          <FadeIn delay={120}>
            <div className="mt-14 rounded-2xl border border-white/40 bg-white/[0.04] p-6 shadow-sm ring-1 ring-white/20 sm:p-8">
              <h2 className="text-center text-xl font-semibold text-white sm:text-2xl">
                What this means for your business
              </h2>
              <ul className="mt-6 space-y-4" role="list">
                {results.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleIcon
                      className="mt-0.5 size-5 shrink-0 text-emerald-400"
                      aria-hidden
                    />
                    <span className="text-[15px] leading-relaxed text-[rgb(209,213,219)] sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
