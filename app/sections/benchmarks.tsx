"use client";

import FadeIn from "../components/fade-in";

export default function Benchmarks() {
  return (
    <div
      id="benchmarks"
      className="border-t border-white/5 bg-[rgb(10,9,9)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold text-[rgb(194,89,194)]">
              By the numbers
            </h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Benchmarks and economics that matter
            </p>
            <p className="mt-6 text-lg text-[rgb(156,163,175)]">
              Real conversion data and contractor profiles we use to model
              outcomes.
            </p>
          </div>
        </FadeIn>

        {/* Key conversion benchmarks */}
        <FadeIn delay={80}>
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[rgb(194,89,194)]">
              Key conversion benchmarks
            </h3>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-1 border-b border-white/5 pb-4 sm:border-0 sm:pb-0">
                <dt className="text-sm text-[rgb(156,163,175)]">
                  Industry avg response time (no system)
                </dt>
                <dd className="text-xl font-semibold text-red-400">4–8 hours</dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-white/5 pb-4 sm:border-0 sm:pb-0">
                <dt className="text-sm text-[rgb(156,163,175)]">
                  FlowQualify response time
                </dt>
                <dd className="text-xl font-semibold text-emerald-400">
                  &lt; 60 seconds
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-white/5 pb-4 sm:border-0 sm:pb-0">
                <dt className="text-sm text-[rgb(156,163,175)]">
                  Lead conversion lift (fast response)
                </dt>
                <dd className="text-xl font-semibold text-emerald-400">
                  +391%
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-white/5 pb-4 sm:border-0 sm:pb-0">
                <dt className="text-sm text-[rgb(156,163,175)]">
                  Benchmark show rate (confirmed appts)
                </dt>
                <dd className="text-xl font-semibold text-white">82%</dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-white/5 pb-4 sm:border-0 sm:pb-0">
                <dt className="text-sm text-[rgb(156,163,175)]">
                  Benchmark close rate (of confirmed shows)
                </dt>
                <dd className="text-xl font-semibold text-white">38%</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-[rgb(156,163,175)]">
                  Target CPL (message ad starts)
                </dt>
                <dd className="text-xl font-semibold text-white">$18–$28</dd>
              </div>
            </dl>
          </div>
        </FadeIn>

        {/* Contractor economics */}
        <FadeIn delay={120}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[rgb(194,89,194)]">
              Contractor economics — why the ROI story sells itself
            </h3>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div className="rounded-xl bg-white/[0.03] p-6 ring-1 ring-white/5">
                <h4 className="text-base font-semibold text-[rgb(194,89,194)]">
                  Bathroom remodeler — typical profile
                </h4>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[rgb(156,163,175)]">Avg ticket size</dt>
                    <dd className="font-semibold text-white">$18,000</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[rgb(156,163,175)]">Gross margin</dt>
                    <dd className="font-semibold text-white">35–45%</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[rgb(156,163,175)]">Net margin (after overhead)</dt>
                    <dd className="font-semibold text-white">10–14%</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[rgb(156,163,175)]">Net profit per closed job</dt>
                    <dd className="font-semibold text-[rgb(194,89,194)]">$1,800–$2,520</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[rgb(156,163,175)]">Jobs to cover $2k ad spend + fee</dt>
                    <dd className="font-semibold text-white">2 jobs</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                    <dt className="text-[rgb(156,163,175)]">ROI at 6 closed jobs/month</dt>
                    <dd className="font-semibold text-emerald-400">2.7x–3.8x</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-xl bg-white/[0.03] p-6 ring-1 ring-white/5">
                <h4 className="text-base font-semibold text-[rgb(194,89,194)]">
                  Kitchen remodeler — typical profile
                </h4>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[rgb(156,163,175)]">Avg ticket size</dt>
                    <dd className="font-semibold text-white">$32,000</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[rgb(156,163,175)]">Gross margin</dt>
                    <dd className="font-semibold text-white">28–38%</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[rgb(156,163,175)]">Net margin (after overhead)</dt>
                    <dd className="font-semibold text-white">8–12%</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[rgb(156,163,175)]">Net profit per closed job</dt>
                    <dd className="font-semibold text-[rgb(194,89,194)]">$2,560–$3,840</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[rgb(156,163,175)]">Jobs to cover $2k ad spend + fee</dt>
                    <dd className="font-semibold text-white">1–2 jobs</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-white/10 pt-3">
                    <dt className="text-[rgb(156,163,175)]">ROI at 4 closed jobs/month</dt>
                    <dd className="font-semibold text-emerald-400">2.6x–3.8x</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Model assumptions - compact */}
        <FadeIn delay={160}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-[rgb(194,89,194)]">
              Model assumptions
            </h3>
            <p className="mt-2 text-sm text-[rgb(156,163,175)]">
              Underlying inputs we use for projections (Meta Message Ads / home
              service).
            </p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-0.5">
                <dt className="text-xs text-[rgb(156,163,175)]">Cost per conversation start</dt>
                <dd className="font-semibold text-white">$18–$35</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-xs text-[rgb(156,163,175)]">Qualification rate (FlowQualify RAG)</dt>
                <dd className="font-semibold text-white">25–35%</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-xs text-[rgb(156,163,175)]">Blended avg ticket</dt>
                <dd className="font-semibold text-white">$20,000</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-xs text-[rgb(156,163,175)]">Show rate (confirmed appts)</dt>
                <dd className="font-semibold text-white">70–82%</dd>
              </div>
              <div className="flex flex-col gap-0.5 sm:col-span-2 lg:col-span-1">
                <dt className="text-xs text-[rgb(156,163,175)]">Contractor close rate</dt>
                <dd className="font-semibold text-white">30–40% of confirmed shows</dd>
              </div>
            </dl>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-8 text-center text-xs text-[rgb(107,114,128)] max-w-3xl mx-auto">
            All projections are estimates based on Meta Ads industry benchmarks
            for home service message campaigns and competitor data. Actual
            results vary based on creative quality, targeting precision, market
            size, and other factors.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
