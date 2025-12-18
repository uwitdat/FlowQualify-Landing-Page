"use client";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import FadeIn from "../components/fade-in";
import { COMPANY_NAME } from "../config/constants";

const features = [
  {
    name: "Custom qualification flows",
    description:
      "Define exactly what makes a lead a good fit — budget, timeline, service type, location — and we automate the questioning with AI.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Structured lead summaries",
    description:
      "Every chat becomes a clean, structured profile instead of a messy message thread. Easy to search, analyze, and take action on.",
    icon: LockClosedIcon,
  },
  {
    name: "24/7 automated intake",
    description:
      "Capture and qualify leads even when you're offline. No missed opportunities, no delays, no repetitive manual back-and-forth.",
    icon: ArrowPathIcon,
  },
  {
    name: "Instant routing to your team",
    description:
      "When a lead is qualified, we package the details and alert your team instantly by email, Slack, or CRM so you can close faster.",
    icon: FingerPrintIcon,
  },
];

export default function Features() {
  return (
    <div
      id="features"
      className="py-20 bg-[rgb(10,9,9)] flex flex-col items-center justify-center"
    >
      {/* Feature section */}
      <div className="max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-[rgb(194,89,194)]">
              Built to qualify leads, not just chat
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
              Powerful AI workflows that save time and boost conversions
            </p>
            <p className="mt-6 text-lg/8 text-[rgb(156,163,175)]">
              {COMPANY_NAME} captures structured information, filters out
              low-fit leads, and delivers clean summaries to your team —
              automatically.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <FadeIn key={feature.name} delay={index * 100}>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-white">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[rgb(194,89,194)]">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-[rgb(156,163,175)]">
                    {feature.description}
                  </dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
