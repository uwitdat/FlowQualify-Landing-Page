"use client";

import {
  CpuChipIcon,
  ChartBarIcon,
  PhotoIcon,
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import FadeIn from "../components/fade-in";
import { ACCENT_COLORS } from "../config/constants";

const benefits = [
  { icon: CpuChipIcon, label: "AI engages every lead instantly" },
  { icon: ChartBarIcon, label: "Smart lead scoring and prioritization" },
  { icon: PhotoIcon, label: "Image analysis for project understanding" },
  { icon: CalendarDaysIcon, label: "Automated appointment booking" },
  { icon: ChatBubbleBottomCenterTextIcon, label: "Pre-call talking points" },
  { icon: Square3Stack3DIcon, label: "Complete pipeline dashboard" },
] as const;

export const Hero = () => {
  return (
    <div className="bg-[rgb(10,9,9)]">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[rgb(194,89,194)]/10">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <FadeIn>
                <div className="max-w-lg">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[rgb(194,89,194)]">
                    AI-Powered Lead Qualification for Contractors
                  </p>

                  <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                    Never miss a{" "}
                    <span className="text-[rgb(194,89,194)]">
                      qualified lead
                    </span>{" "}
                    again.
                  </h1>

                  <p className="mt-8 text-pretty text-lg font-medium text-[rgb(156,163,175)] sm:text-xl/8">
                    FlowQualify automates your entire lead qualification process
                    with AI that engages leads 24/7 via SMS, email, Facebook, and
                    Instagram. Get intelligent lead scoring, image analysis,
                    automated appointment booking, and detailed briefs—all while
                    you focus on closing deals.
                  </p>

                  <ul className="mt-6 grid gap-3 text-sm text-[rgb(156,163,175)] sm:grid-cols-2">
                    {benefits.map(({ icon: Icon, label }, i) => {
                      const c = ACCENT_COLORS[i % ACCENT_COLORS.length];
                      return (
                        <li key={label} className="flex items-center gap-3">
                          <span
                            className="flex size-8 shrink-0 items-center justify-center rounded-lg"
                            style={{ backgroundColor: c.muted, color: c.main }}
                          >
                            <Icon className="size-4" aria-hidden />
                          </span>
                          {label}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-10 flex items-center gap-x-4">
                    <a
                      href="#contact"
                      className="rounded-md bg-[rgb(115,45,115)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(95,35,95)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(115,45,115)] transition-colors"
                    >
                      Get Started
                    </a>
                    <a
                      href="#demos"
                      className="text-sm/6 font-semibold text-white hover:text-[rgb(194,89,194)] transition-colors"
                    >
                      See How It Works <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-[rgb(20,19,19)] shadow-xl shadow-[rgb(194,89,194)]/10 ring-1 ring-white/5 md:-mr-20 lg:-mr-36"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-[rgb(194,89,194)] [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  aria-hidden="true"
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-[rgb(194,89,194)] opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                />
                <div className="relative px-3 pt-4 sm:pt-5 md:pl-5 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-full max-w-3xl overflow-hidden rounded-tl-xl bg-[rgb(10,9,9)]">
                      <div className="relative w-full h-[min(580px,72vh)]">
                        <video
                          src={process.env.NEXT_PUBLIC_VIDEO_FLOW_DEMO || "/videos/flow-demo.mp4"}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-contain"
                          aria-label="FlowQualify demo"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 md:rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[rgb(10,9,9)] sm:h-32" />
      </div>
    </div>
  );
};
