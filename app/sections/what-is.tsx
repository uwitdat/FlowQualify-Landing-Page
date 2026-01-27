"use client";

import FadeIn from "../components/fade-in";

export default function WhatIs() {
  return (
    <div
      id="what"
      className="bg-[rgb(10,9,9)] border-t border-white/5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <FadeIn>
          <h2 className="text-base font-semibold text-[rgb(194,89,194)]">
            What is FlowQualify?
          </h2>
          <p className="mt-6 text-xl text-[rgb(209,213,219)] sm:text-2xl">
            FlowQualify is an AI-powered lead qualification platform designed
            specifically for contractors. It automatically engages with leads
            via SMS, email, Facebook, and Instagram, qualifying them 24/7 while
            you sleep.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
