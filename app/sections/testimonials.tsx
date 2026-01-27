"use client";

import FadeIn from "../components/fade-in";

const testimonials = [
  {
    body: "Before FlowQualify, I was constantly stuck in DMs and texts answering the same questions. Now every lead comes in pre-qualified with budget, timeline, and project scope. My calendar is full of serious homeowners ready to book.",
    author: {
      name: "Andrew Paiano",
      handle: "Paiano Contracting Inc.",
      website: "https://www.paianocontracting.com/",
    },
  },
  {
    body: "We used to miss a lot of inquiries that came in after hours and on weekends. FlowQualify engages every lead instantly and sends us clean briefs with project details and photos. Our team only talks to qualified prospects.",
    author: {
      name: "Daniel P.",
      handle: "Sposa Millwork",
      website: "https://www.sposakitchens.com/",
    },
  },
  {
    body: "As a kitchen and bath renovator, I only want to meet people who have budget and timeline. FlowQualify filters out the tire-kickers and sends me detailed profiles with talking points. I never walk into a call cold.",
    author: {
      name: "Dries Vincent",
      handle: "V.D Kitchen & Bath",
      website: "https://example.com",
    },
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-[rgb(10,9,9)] py-24 sm:py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-semibold text-[rgb(194,89,194)]">
              Testimonials
            </h2>
            <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Contractors using FlowQualify to qualify leads 24/7
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.author.handle} delay={index * 50}>
                <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-white/[0.03] p-8 text-sm/6 ring-1 ring-white/5">
                    <blockquote className="text-[rgb(156,163,175)]">
                      <p>{`"${testimonial.body}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6">
                      <div className="font-semibold text-white">
                        {testimonial.author.name}
                      </div>
                      <div className="text-[rgb(156,163,175)]">
                        {testimonial.author.handle}
                      </div>
                      <a
                        href={testimonial.author.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-medium text-[rgb(194,89,194)] hover:underline"
                      >
                        Visit website →
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
