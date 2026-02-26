import Link from "next/link";
import FadeIn from "../components/fade-in";

export default function CTA() {
  return (
    <div className="relative border-t border-black/6 bg-white py-24 sm:py-32 overflow-hidden">
      {/* Gradient orb */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 50% 100%, rgba(232,138,232,0.15) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <FadeIn>
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[rgb(125,48,125)]">
            Ready to grow?
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-[rgb(10,9,9)] sm:text-5xl">
            Your next qualified appointment
            <br />
            <span className="text-[rgb(125,48,125)]">is one step away.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[rgb(107,114,128)]">
            Stop chasing leads that go nowhere. Let FlowQualify fill your calendar
            with homeowners who already have budget, timeline, and intent.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/opt-in"
              className="inline-flex items-center rounded-lg bg-[rgb(125,48,125)] px-8 py-4 text-base font-semibold text-white shadow-[0_4px_14px_rgba(125,48,125,0.40)] transition hover:bg-[rgb(105,38,105)] hover:shadow-[0_4px_20px_rgba(125,48,125,0.50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(125,48,125)]"
            >
              Book An Appointment →
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
