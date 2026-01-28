"use client";

import { PlayCircleIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import FadeIn from "../components/fade-in";
import { ACCENT_COLORS } from "../config/constants";

const demos = [
  {
    src: process.env.NEXT_PUBLIC_VIDEO_DEMO_1 || "/videos/demo-1.mp4",
    title: "Demo 1",
    description: "See FlowQualify in action.",
    icon: PlayCircleIcon,
  },
  {
    src: process.env.NEXT_PUBLIC_VIDEO_DEMO_2 || "/videos/demo-2.mp4",
    title: "Demo 2",
    description: "Scheduling and Qualification",
    icon: VideoCameraIcon,
  },
];

export default function Demos() {
  return (
    <div
      id="demos"
      className="bg-[rgb(10,9,9)] py-24 sm:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-[rgb(194,89,194)]">
              Demos
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Watch FlowQualify in action
            </p>
            <p className="mt-6 text-lg text-[rgb(156,163,175)]">
              Use the controls to play, pause, rewind, and scrub through each
              demo.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-7xl gap-10 sm:grid-cols-2 lg:mt-20">
          {demos.map((demo, index) => {
            const c = ACCENT_COLORS[index % ACCENT_COLORS.length];
            return (
            <FadeIn key={demo.src} delay={index * 100}>
              <div className="flex flex-col">
                <div className="aspect-video overflow-hidden rounded-xl bg-[rgb(20,19,19)] ring-1 ring-white/10">
                  <video
                    src={demo.src}
                    controls
                    className="h-full w-full object-contain"
                    preload="metadata"
                    aria-label={`${demo.title} video`}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: c.muted, color: c.main }}
                  >
                    <demo.icon className="size-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{demo.title}</h3>
                    <p className="mt-0.5 text-sm text-[rgb(156,163,175)]">
                      {demo.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}
