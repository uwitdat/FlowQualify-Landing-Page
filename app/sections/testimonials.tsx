"use client";

import Image from "next/image";
import FadeIn from "../components/fade-in";
import { StarIcon } from "@heroicons/react/24/solid";

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="text-amber-400">
          {i <= full ? (
            <StarIcon className="size-5 sm:size-6" aria-hidden />
          ) : i === full + 1 && hasHalf ? (
            <StarIcon className="size-5 opacity-60 sm:size-6" aria-hidden />
          ) : (
            <StarIcon className="size-5 opacity-30 sm:size-6" aria-hidden />
          )}
        </span>
      ))}
    </div>
  );
}

const testimonials = [
  {
    stars: 5,
    body: "Before FlowQualify, I was constantly stuck in DMs and texts answering the same questions. Now every lead comes in pre-qualified with budget, timeline, and project scope. My calendar is full of serious homeowners ready to book.",
    author: {
      name: "Andrew Paiano",
      handle: "Paiano Contracting Inc.",
      website: "https://www.paianocontracting.com/",
    },
    image: "/testimonials/paiano.jpg",
  },
  {
    stars: 5,
    body: "We used to miss a lot of inquiries that came in after hours and on weekends. FlowQualify engages every lead instantly and sends us clean briefs with project details and photos. Our team only talks to qualified prospects.",
    author: {
      name: "Daniel P.",
      handle: "Sposa Millwork",
      website: "https://www.sposakitchens.com/",
    },
    image: "/testimonials/sposa.jpg",
  },
  // {
  //   body: "As a kitchen and bath renovator, I only want to meet people who have budget and timeline. FlowQualify filters out the tire-kickers and sends me detailed profiles with talking points. I never walk into a call cold.",
  //   author: {
  //     name: "Dries Vincent",
  //     handle: "V.D Kitchen & Bath",
  //     website: "https://example.com",
  //   },
  // },
];

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="relative border-t border-white/5 bg-[rgb(10,9,9)] py-24 sm:py-32"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgb(232,138,232)]/5 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold uppercase tracking-wider text-[rgb(232,138,232)]">
              Testimonials
            </h2>
            <p className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              What contractors are saying
            </p>
            <p className="mt-3 text-lg text-[rgb(156,163,175)]">
              Real results from lead gen and qualification.
            </p>
          </div>
        </FadeIn>

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-8 sm:mt-20 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author.handle} delay={index * 80}>
              <figure className="group relative flex flex-col rounded-2xl border border-white/40 bg-white/[0.04] p-8 shadow-sm ring-1 ring-white/20 transition hover:border-white/50 hover:ring-white/30">
                <div className="flex items-start gap-3">
                  <span className="relative size-12 shrink-0 overflow-hidden rounded-full border border-white">
                    <Image
                      src={testimonial.image}
                      alt=""
                      width={48}
                      height={48}
                      className="object-cover"
                      sizes="48px"
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <StarRating rating={testimonial.stars} />
                    <blockquote className="mt-4 text-base leading-relaxed text-[rgb(209,213,219)]">
                      <p>{`"${testimonial.body}"`}</p>
                    </blockquote>
                  </div>
                </div>
                <figcaption className="mt-8 flex flex-wrap items-center gap-3 pt-6">
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-[rgb(156,163,175)]">
                      {testimonial.author.handle}
                    </div>
                  </div>
                  <a
                    href={testimonial.author.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto rounded-full border border-white/50 bg-[rgb(232,138,232)]/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-[rgb(232,138,232)]/50 hover:border-white/70"
                  >
                    Visit website →
                  </a>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
