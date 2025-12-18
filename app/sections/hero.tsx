"use client";

import Logo from "../components/logo";
import FadeIn from "../components/fade-in";
import { COMPANY_NAME } from "../config/constants";

export const Hero = () => {
  return (
    <div className="bg-[rgb(10,9,9)]">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[rgb(194,89,194)]/10">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <FadeIn>
                <div className="max-w-lg">
                  <Logo className="h-11 w-11" />

                  <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-[rgb(194,89,194)]">
                    Automated intake & lead qualification
                  </p>

                  <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                    Stop wasting time on{" "}
                    <span className="text-[rgb(194,89,194)]">
                      unqualified leads.
                    </span>
                  </h1>

                  <p className="mt-8 text-pretty text-lg font-medium text-[rgb(156,163,175)] sm:text-xl/8">
                    {COMPANY_NAME} designs and runs a custom intake assistant
                    for your business. It asks the right questions, filters out
                    bad fits, and sends you only structured, qualified leads —
                    24/7 on WhatsApp, SMS, or DMs.
                  </p>

                  <p className="mt-4 text-sm text-[rgb(156,163,175)]">
                    Done-for-you setup, no tech skills required. You focus on
                    closing, we handle the back-and-forth.
                  </p>

                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#contact"
                      className="rounded-md bg-[rgb(194,89,194)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[rgb(174,69,174)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(194,89,194)] transition-colors"
                    >
                      Book a free strategy call
                    </a>
                    <a
                      href="#features"
                      className="text-sm/6 font-semibold text-white hover:text-[rgb(194,89,194)] transition-colors"
                    >
                      Learn more <span aria-hidden="true">→</span>
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
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-[rgb(10,9,9)]">
                      <div className="px-6 pb-14 pt-6">
                        {/* Your code example / chat mockup goes here */}
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
