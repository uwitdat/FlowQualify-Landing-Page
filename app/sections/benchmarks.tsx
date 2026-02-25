"use client";

import {
  BoltIcon,
  ChartBarIcon,
  BanknotesIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import FadeIn from "../components/fade-in";

const fourBlocks = [
  {
    icon: BoltIcon,
    title: "First to respond wins",
    stat: "<60 sec",
    statLabel: "Avg. response time",
    statColor: "text-amber-400",
    iconBg: "bg-amber-400/20 border-amber-400/40 text-amber-400",
    supporting: "78% of homeowners hire the first contractor who calls back.",
    benefit: "+31% more bookings — from speed alone",
  },
  {
    icon: ChartBarIcon,
    title: "Real pipeline",
    statColor: "text-[rgb(232,138,232)]",
    iconBg:
      "bg-[rgb(232,138,232)]/20 border-[rgb(232,138,232)]/40 text-[rgb(232,138,232)]",
    supporting: "12 leads — 3–4 signed jobs per month.",
    benefit: "High-intent leads that actually pick up the phone.",
    statSplit: [
      { value: "82%", label: "Show rate" },
      { value: "38%", label: "Close rate" },
    ],
  },
  {
    icon: BanknotesIcon,
    title: "Cost per signed job",
    stat: "$500–$700",
    statLabel: "All-in. Per contract",
    statColor: "text-[rgb(34,211,238)]",
    iconBg:
      "bg-[rgb(34,211,238)]/20 border-[rgb(34,211,238)]/40 text-[rgb(34,211,238)]",
    supporting: "vs. $900–$1,500 on Angi or HomeAdvisor",
    benefit: "One job covers your entire month",
  },
  {
    icon: SparklesIcon,
    title: "Monthly upside",
    stat: "$8k–$15k+",
    statLabel: "Net profit potential",
    statColor: "text-[rgb(232,138,232)]",
    iconBg:
      "bg-[rgb(232,138,232)]/20 border-[rgb(232,138,232)]/40 text-[rgb(232,138,232)]",
    supporting:
      "After break-even, every signed job is pure profit. It compounds.",
    benefit: "After that first job, it's all profit — and it compounds.",
  },
];

export default function Benchmarks() {
  return (
    <div
      id="benchmarks"
      className="relative border-t border-white/5 bg-[rgb(10,9,9)] py-24 sm:py-32"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgb(232,138,232)]/5 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <p className="text-center text-base font-semibold uppercase tracking-wider text-[rgb(232,138,232)]">
            By the numbers
          </p>
          <h2 className="mt-3 text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            What this means for{" "}
            <span className="text-[rgb(232,138,232)]">your business</span>
          </h2>
          <p className="mt-4 text-center text-lg leading-relaxed text-[rgb(209,213,219)]">
            Speed. Certainty. Real leverage.
          </p>
          <p className="mt-1 text-center text-base font-semibold text-emerald-400">
            3–4x+ net return on every ad dollar
          </p>
        </FadeIn>

        {/* Four metric cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:grid-rows-[1fr_1fr]">
          {fourBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <div key={block.title} className="h-full min-h-0">
                <FadeIn delay={60 + index * 50} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/40 bg-white/[0.04] p-6 shadow-sm ring-1 ring-white/20 sm:p-7">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-full border ${block.iconBg}`}
                      >
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {block.title}
                      </h3>
                    </div>
                    {"statSplit" in block && block.statSplit ? (
                      <div className="mt-4 flex gap-12 sm:gap-16">
                        {block.statSplit.map((pair, i) => (
                          <div key={i} className="flex flex-col">
                            <span
                              className={`text-2xl font-bold tracking-tight tabular-nums sm:text-3xl ${block.statColor}`}
                            >
                              {pair.value}
                            </span>
                            <span className="mt-1.5 text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                              {pair.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        <p
                          className={`mt-4 text-2xl font-bold tracking-tight tabular-nums sm:text-3xl ${block.statColor}`}
                        >
                          {block.stat}
                        </p>
                        <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-[rgb(156,163,175)]">
                          {block.statLabel}
                        </p>
                      </>
                    )}
                    <p className="mt-4 text-[15px] leading-relaxed text-[rgb(209,213,219)]">
                      {block.supporting}
                    </p>
                    <p className="mt-3 text-sm font-medium text-[rgb(232,138,232)]">
                      → {block.benefit}
                    </p>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>

        {/* You vs. typical contractors — VS cards */}
        <FadeIn delay={280}>
          <div className="mt-16">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-white/80">
              The competitive edge
            </p>
            <h3 className="mt-3 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="text-white">You</span>{" "}
              <span className="text-[rgb(156,163,175)]">vs.</span>{" "}
              <span className="text-[rgb(232,138,232)]">
                Typical Contractors
              </span>
            </h3>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-10">
              {/* Typical contractor card */}
              <div className="relative rounded-2xl border-2 border-red-500/50 bg-gradient-to-b from-red-500/10 to-transparent p-6 ring-1 ring-red-500/30 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-red-400/60 bg-red-500/25 text-red-300">
                    <XMarkIcon className="size-5" aria-hidden />
                  </span>
                  <h4 className="text-lg font-semibold text-white">
                    Typical contractor
                  </h4>
                </div>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[rgb(209,213,219)]">
                      Response time
                    </dt>
                    <dd className="mt-0.5 text-xl font-bold tabular-nums text-red-300 sm:text-2xl">
                      4–8 hrs
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[rgb(209,213,219)]">
                      Show rate
                    </dt>
                    <dd className="mt-0.5 text-xl font-bold tabular-nums text-red-300 sm:text-2xl">
                      55–65%
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[rgb(209,213,219)]">
                      Close rate
                    </dt>
                    <dd className="mt-0.5 text-xl font-bold tabular-nums text-red-300 sm:text-2xl">
                      20–25%
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border-2 border-red-500/50 bg-red-500/25 px-4 py-2 text-xs font-semibold text-red-100">
                    <XMarkIcon className="size-4" aria-hidden />
                    Slow. Costly. High drop-off
                  </span>
                </div>
              </div>

              {/* With FlowQualify card */}
              <div className="relative rounded-2xl border-2 border-[rgb(232,138,232)]/60 bg-gradient-to-b from-[rgb(232,138,232)]/15 to-transparent p-6 ring-1 ring-[rgb(232,138,232)]/40 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-[rgb(232,138,232)]/60 bg-[rgb(232,138,232)]/25 text-[rgb(232,138,232)]">
                    <CheckCircleIcon className="size-5" aria-hidden />
                  </span>
                  <h4 className="text-lg font-semibold text-white">
                    With FlowQualify
                  </h4>
                </div>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[rgb(209,213,219)]">
                      Response time
                    </dt>
                    <dd className="mt-0.5 text-xl font-bold tabular-nums text-[rgb(232,138,232)] sm:text-2xl">
                      &lt;60 sec
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[rgb(209,213,219)]">
                      Show rate
                    </dt>
                    <dd className="mt-0.5 text-xl font-bold tabular-nums text-[rgb(232,138,232)] sm:text-2xl">
                      82%
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[rgb(209,213,219)]">
                      Close rate
                    </dt>
                    <dd className="mt-0.5 text-xl font-bold tabular-nums text-[rgb(232,138,232)] sm:text-2xl">
                      38%
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border-2 border-[rgb(232,138,232)]/60 bg-[rgb(232,138,232)]/25 px-4 py-2 text-xs font-semibold text-white">
                    <CheckCircleIcon
                      className="size-4 text-[rgb(232,138,232)]"
                      aria-hidden
                    />
                    Fast. Qualified. Compounding.
                  </span>
                </div>
              </div>
            </div>

            {/* Green banner */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-5 ring-1 ring-emerald-500/20">
              <CheckCircleIcon
                className="size-6 shrink-0 text-emerald-400"
                aria-hidden
              />
              <p className="text-center text-[15px] leading-relaxed text-white sm:text-left">
                After break-even, every additional signed project is pure
                profit.{" "}
                <span className="font-bold">
                  One job often covers your full ad spend + fee — the rest
                  compounds.
                </span>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={320}>
          <p className="mt-10 text-center text-sm leading-relaxed text-[rgb(156,163,175)] max-w-2xl mx-auto">
            Numbers based on Meta Ads benchmarks for home service and typical
            contractor profiles. Your results will vary by market, ticket size,
            and close rate.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
