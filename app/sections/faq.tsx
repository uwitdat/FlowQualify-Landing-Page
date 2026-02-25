"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import FadeIn from "../components/fade-in";

const faqs: { question: string; answer: string | React.ReactNode }[] = [
  {
    question: "Do you run ads or bring us new leads?",
    answer:
      "Yes. We run ads on Meta and Instagram to bring in new leads. We also qualify every lead that comes in—who they are, what they want, budget, timeline—and only send you the ones that meet your bar. So you get both the traffic and the filter: we handle the conversation and only put bookable appointments on your calendar.",
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
    question: "Who's It Perfect For?",
    answer: (
      <ul className="space-y-3">
        {[
          "Home improvement contractors",
          "Hardscaping and landscaping companies",
          "Kitchen and bathroom renovators",
          "General contractors",
          "Any service-based business with high-ticket projects",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-white">
            <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-[rgb(34,211,238)]" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      id="faq"
      className="relative border-t border-white/5 bg-[rgb(10,9,9)] py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(232,138,232)]/5 via-transparent to-transparent pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-base font-semibold uppercase tracking-wider text-[rgb(232,138,232)]">
            FAQ
          </p>
          <h2 className="mt-3 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-center text-lg leading-relaxed text-[rgb(209,213,219)] max-w-2xl mx-auto">
            Quick answers on how it works and who it’s for.
          </p>
        </FadeIn>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} delay={index * 60}>
                <div
                  className={`relative overflow-hidden rounded-xl border bg-white/[0.04] shadow-sm ring-1 transition-all duration-200 ${
                    isOpen
                      ? "border-white/40 ring-white/20"
                      : "border-white/40 ring-white/20 hover:border-white/50 hover:ring-white/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(10,9,9)]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-medium text-white pr-2">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 rounded-full p-1 transition-colors ${
                        isOpen ? "bg-white/20 text-white" : "text-white/80"
                      }`}
                    >
                      {isOpen ? (
                        <MinusIcon className="size-5" aria-hidden />
                      ) : (
                        <PlusIcon className="size-5" aria-hidden />
                      )}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-200 ease-out"
                    style={{ maxHeight: isOpen ? 600 : 0 }}
                  >
                    <div className="border-t border-white/10 bg-white/[0.02] px-6 py-5">
                      {typeof faq.answer === "string" ? (
                        <p className="text-white/95 leading-relaxed text-[1.0625rem]">
                          {faq.answer}
                        </p>
                      ) : (
                        <div className="text-white/95 text-[1.0625rem] leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
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
