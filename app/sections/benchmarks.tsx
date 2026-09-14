"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { PAGE_BACKGROUND } from "../config/constants";
import {
  GradientCard,
  AdsGraphic,
  ScreenGraphic,
  BriefGraphic,
  PipelineGraphic,
  type Tone,
} from "../components/ui/gradient-card";

/** One CTA destination for the whole page; the copy varies, the next step doesn't. */
const CTA_HREF = "/opt-in";

type Card = {
  tone: Tone;
  badgeText: string;
  title: string;
  description: string;
  ctaText: string;
  graphic: React.ReactNode;
  emphasis?: boolean;
};

// Badges read "we / we / we / you" to mirror the headline. Plain jobsite words,
// no marketing terms (high-intent, lead score, prioritized). Titles and the
// Platform section's tabs don't repeat each other: this section is what we do
// for you, that one is what you see.
const CARDS: Card[] = [
  {
    tone: "ember",
    badgeText: "We run your ads",
    title: "We find homeowners ready to remodel",
    description:
      "We build and run your Facebook and Instagram ads, aimed at local homeowners planning a kitchen or bath. Nothing for you to learn.",
    ctaText: "Run this in my area",
    graphic: AdsGraphic,
  },
  {
    tone: "verdigris",
    badgeText: "We screen every lead",
    title: "Only serious homeowners reach your phone",
    description:
      "We reply in under 90 seconds and ask about budget, project, and timeline. Price shoppers never make it to you.",
    ctaText: "Send me serious leads",
    graphic: ScreenGraphic,
  },
  {
    tone: "indigo",
    badgeText: "We brief you",
    title: "Know the job before you pull up",
    description:
      "The moment a homeowner is ready, their budget, project details, and any red flags hit your phone, inbox, and CRM.",
    ctaText: "Get briefed on every job",
    graphic: BriefGraphic,
  },
  {
    tone: "moss",
    badgeText: "You close",
    title: "You just show up and close",
    description:
      "No running ads, chasing forms, or sorting bad leads. Every lead is tracked for you, so you can stick to quoting and building.",
    ctaText: "Check if my area's open",
    graphic: PipelineGraphic,
    emphasis: true,
  },
];

const STAGGER_MS = 80;
const REVEAL_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Benchmarks() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px",
  });

  return (
    <>
      <style>{`
        .bm2-section {
          background: ${PAGE_BACKGROUND};
          padding: 96px 24px;
        }
        .bm2-header {
          text-align: center;
          margin-bottom: 52px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s ${REVEAL_EASE}, transform 0.75s ${REVEAL_EASE};
        }
        .bm2-section.bm2-revealed .bm2-header {
          opacity: 1;
          transform: translateY(0);
        }
        .bm2-card-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ${REVEAL_EASE}, transform 0.6s ${REVEAL_EASE};
        }
        .bm2-section.bm2-revealed .bm2-card-reveal {
          opacity: 1;
          transform: translateY(0);
        }
        .bm2-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgb(79,70,229);
          display: block; margin-bottom: 10px;
        }
        .bm2-title {
          font-size: clamp(28px, 3.5vw, 38px); font-weight: 900;
          color: #0F172A; letter-spacing: -0.025em; line-height: 1.15;
          margin: 0;
        }
        .bm2-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 1080px;
          margin: 0 auto;
        }
        @media (max-width: 820px) {
          .bm2-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 540px) {
          .bm2-section { padding: 64px 16px; }
          .bm2-header { margin-bottom: 32px; }
          .bm2-title { font-size: 26px; }
          .bm2-title br { display: none; }
          .bm2-grid { gap: 14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bm2-header, .bm2-card-reveal { transition-duration: 0.01ms; }
        }
      `}</style>

      <section id="benchmarks" className={`bm2-section${isIntersecting ? " bm2-revealed" : ""}`} ref={ref}>
        <div className="bm2-header">
          <span className="bm2-eyebrow">What we do</span>
          <h2 className="bm2-title">
            We run the ads. We qualify the leads.<br />You close the jobs.
          </h2>
        </div>

        <div className="bm2-grid">
          {CARDS.map((card, index) => (
            <div
              key={card.badgeText}
              className="bm2-card-reveal"
              style={{ transitionDelay: isIntersecting ? `${120 + index * STAGGER_MS}ms` : "0ms" }}
            >
              <GradientCard
                tone={card.tone}
                badgeText={card.badgeText}
                title={card.title}
                description={card.description}
                ctaText={card.ctaText}
                ctaHref={CTA_HREF}
                graphic={card.graphic}
                emphasis={card.emphasis}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
