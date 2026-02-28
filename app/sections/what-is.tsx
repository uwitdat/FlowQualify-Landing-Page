"use client";

import FadeIn from "../components/fade-in";

export default function WhatIs() {
  return (
    <div
      id="what"
      className="bg-background border-t border-border py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <FadeIn>
          <h2 className="text-base font-semibold text-accent">
            What is FlowQualify?
          </h2>
          <p className="mt-6 text-xl text-foreground sm:text-2xl">
            FlowQualify is lead gen and AI qualification for contractors. We run
            Meta and Instagram ads to fill your pipeline, and we qualify every
            lead—from our ads, your site, social, or referrals—around the clock
            so only the right ones land on your calendar.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
