"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import FadeIn from "../components/fade-in";

const faqs = [
  {
    question: "Do you run ads or bring us new leads?",
    answer:
      "Nope. We’re built for what happens after the lead shows up. You (or your current setup) get the traffic; we handle the conversation—who they are, what they want, budget, timeline—and only send you the ones that meet your bar. No ad spend, no lead gen; just smarter use of the inquiries you already get.",
  },
  {
    question: "What does the AI actually do?",
    answer:
      "It talks to leads over SMS, email, Facebook, and Instagram so you don’t have to. It asks the right questions, can look at photos they send, and scores everyone against your criteria. When someone’s a fit, you get a brief and a slot on your calendar. You step in when it’s time to close.",
  },
  {
    question: "What if someone’s not a fit or doesn’t show?",
    answer:
      "We screen out bad fits before they ever hit your calendar. If someone does book and flakes, you’ve still saved the hours you’d have spent qualifying them by hand—and you’ve got the full thread to follow up if you want.",
  },
  {
    question: "Who’s it for?",
    answer:
      "Contractors and home-improvement pros: kitchens and baths, landscaping, hardscaping, roofing, general contractors—anyone with higher-ticket jobs and a steady stream of leads who’d rather spend time closing than doing intake.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      id="faq"
      className="bg-[rgb(10,9,9)] border-t border-white/5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-center text-lg text-[rgb(156,163,175)]">
            Quick answers on how it works and who it’s for.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} delay={index * 50}>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-white hover:bg-white/[0.04] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-[rgb(194,89,194)]">
                      {isOpen ? (
                        <MinusIcon className="size-5" aria-hidden />
                      ) : (
                        <PlusIcon className="size-5" aria-hidden />
                      )}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-200"
                    style={{
                      maxHeight: isOpen ? 600 : 0,
                    }}
                  >
                    <p className="border-t border-white/10 px-5 py-4 text-[rgb(156,163,175)]">
                      {faq.answer}
                    </p>
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
