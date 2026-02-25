"use client";

import Link from "next/link";
import {
  BoltIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  PlayIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import FadeIn from "../components/fade-in";

const features = [
  {
    icon: CalendarDaysIcon,
    label: "Booked appointments, not dead leads",
    iconBoxClass:
      "bg-[rgb(232,138,232)]/20 border-[rgb(232,138,232)]/50 text-[rgb(232,138,232)]",
  },
  {
    icon: DocumentTextIcon,
    label: "Full project brief before every visit",
    iconBoxClass:
      "bg-[rgb(34,211,238)]/20 border-[rgb(34,211,238)]/50 text-[rgb(34,211,238)]",
  },
  {
    icon: BoltIcon,
    label: "AI responds in seconds — 24/7",
    iconBoxClass: "bg-amber-400/20 border-amber-400/50 text-amber-400",
  },
  {
    icon: MegaphoneIcon,
    label: "Ads targeting homeowners ready to buy",
    iconBoxClass: "bg-emerald-400/20 border-emerald-400/50 text-emerald-400",
  },
];

export const Hero = () => {
  return (
    <div className="bg-[rgb(10,9,9)]">
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-[rgb(232,138,232)]/10 via-[rgb(10,9,9)] to-[#000201]">
        <div className="mx-auto max-w-7xl px-4 pt-6 pb-24 sm:px-6 sm:pb-32 lg:pt-12 lg:pb-40">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:gap-8 xl:gap-12 lg:items-center">
            {/* Left column — copy and CTAs (takes remaining space); center when stacked, left when side-by-side */}
            <FadeIn>
              <div className="min-w-0 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-400/10 px-4 py-2">
                    <StarIcon
                      className="size-5 shrink-0 text-amber-400"
                      aria-hidden
                    />
                    <span className="text-sm font-semibold text-white">
                      Built For & Trusted by Home Remodelers
                    </span>
                  </div>
                </div>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Stop Chasing Leads.
                  <br />
                  <span className="text-[rgb(232,138,232)]">
                    Start Closing Jobs.
                  </span>
                </h1>

                <p className="mt-6 mx-auto max-w-lg text-base leading-relaxed text-[rgb(209,213,219)] lg:mx-0">
                  FlowQualify runs your{" "}
                  <span className="font-semibold text-emerald-400">
                    Meta ads
                  </span>
                  , qualifies every lead via{" "}
                  <span className="font-semibold text-[rgb(34,211,238)]">
                    Messenger
                  </span>{" "}
                  in real-time, and delivers a{" "}
                  <span className="font-semibold text-[rgb(232,138,232)]">
                    full project brief
                  </span>{" "}
                  before every appointment.
                </p>

                <div className="mt-8 flex justify-center lg:justify-start">
                  <ul className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-3">
                    {features.map(({ icon: Icon, label, iconBoxClass }) => (
                      <li
                        key={label}
                        className="flex min-w-0 items-center gap-3"
                      >
                        <span
                          className={`flex size-10 shrink-0 items-center justify-center rounded-lg border ${iconBoxClass}`}
                        >
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <span className="whitespace-nowrap text-xs font-medium text-white sm:text-sm">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Link
                    href="/opt-in"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 bg-[rgb(125,48,125)] px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:border-white/60 hover:bg-[rgb(105,38,105)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(125,48,125)] transition-colors"
                  >
                    Book An Appointment
                    {/* <ArrowRightIcon className="size-5" aria-hidden /> */}
                  </Link>
                  <Link
                    href="/opt-in"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-[rgb(232,138,232)] bg-transparent px-6 py-3.5 text-base font-semibold text-white hover:bg-[rgb(232,138,232)]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(232,138,232)] transition-colors"
                  >
                    <PlayIcon className="size-5" aria-hidden />
                    See How It Works
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Right column — video, aligned right to give left column more room */}
            <FadeIn delay={100} className="lg:justify-self-end">
              <div className="flex flex-col items-center gap-4 min-w-0">
                <div className="relative aspect-[9/16] max-h-[620px] w-full max-w-[320px] overflow-hidden rounded-2xl bg-[#000201] lg:max-w-[380px] lg:max-h-[680px]">
                  <video
                    src={process.env.NEXT_PUBLIC_VIDEO_CHAT || "/videos/chat.mp4"}
                    className="h-full w-full object-cover"
                    playsInline
                    muted
                    loop
                    autoPlay
                    preload="metadata"
                    aria-label="FlowQualify chat qualification demo"
                  />
                </div>
                <p className="flex items-center gap-2 text-sm font-semibold text-amber-400">
                  <BoltIcon className="size-4 shrink-0" aria-hidden />
                  Booked & Qualified In Under 7 Minutes
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[rgb(10,9,9)] sm:h-32" />
      </div>
    </div>
  );
};
