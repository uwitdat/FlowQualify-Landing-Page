"use client";

import FadeIn from "../components/fade-in";
import { COMPANY_NAME } from "../config/constants";

const stats = [
  { id: 1, name: "Hours of manual intake saved", value: "100+ / month" },
  { id: 2, name: "Average response time reduction", value: "92%" },
  { id: 3, name: "Faster lead qualification", value: "3–5x" },
  { id: 4, name: "Leads routed to teams", value: "24/7" },
];

export default function Stats() {
  return (
    <div id="how-it-works" className="bg-[rgb(10,9,9)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Tangible results that drive growth
              </h2>
              <p className="mt-4 text-lg/8 text-[rgb(156,163,175)]">
                {COMPANY_NAME} helps businesses respond faster, close more
                deals, and eliminate repetitive intake work.
              </p>
            </div>
          </FadeIn>

          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <FadeIn key={stat.id} delay={index * 100}>
                <div className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm/6 font-semibold text-[rgb(156,163,175)]">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
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
