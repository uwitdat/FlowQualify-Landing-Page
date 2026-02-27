"use client";

import { useState } from "react";

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "How is this different from other lead gen services?",
    answer: (
      <>
        <p>Most agencies hand you a form submission and expect you to chase it down. By the time you call, the lead is cold, there&apos;s no rapport, and you&apos;re competing with whoever else they contacted. FlowQualify is the opposite.</p>
        <p>Our AI engages the homeowner in a real conversation the moment they click your ad — asking questions, building context, and qualifying them before a booking ever hits your calendar. By the time you speak to them, rapport is already built, they&apos;re engaged, and they&apos;re expecting your call.</p>
        <p>Every lead is stored in a <strong>simple CRM built for remodelers</strong> — everything in one place: contact details, project scope, budget, and the full conversation. Easy to review, easy to act on, whenever you want.</p>
        <p>No shared leads, no bidding against other contractors, no retainer. You only pay when a qualified homeowner books.</p>
      </>
    ),
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No long-term contracts required. FlowQualify runs on prepaid appointment packages — you purchase a set of qualified appointments and use them at your own pace. No monthly retainer, no lock-in, no ad spend markup. You have full flexibility to pause or adjust as needed.",
  },
  {
    question: 'What does "qualified" actually mean?',
    answer: (
      <div>
        <p style={{ marginBottom: "14px", color: "#334155", lineHeight: 1.65 }}>
          We don't pass along anyone who fills out a form. A lead is only considered qualified when they meet <strong>all</strong> of the following criteria:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {[
            { icon: "$", label: "Budget Verified", desc: "Confirmed budget meets your minimum project size." },
            { icon: "📅", label: "Timeline Confirmed", desc: "Looking to start within 90 days — not \"someday.\"" },
            { icon: "🏠", label: "Homeowner", desc: "They own the property and can approve the work." },
            { icon: "👤", label: "Decision Maker", desc: "The person who signs off is available to meet." },
          ].map((item) => (
            <div key={item.label} style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "12px 14px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A", marginBottom: "3px" }}>{item.label}</div>
              <div style={{ fontSize: "12.5px", color: "#64748B", lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "14px", color: "#334155", lineHeight: 1.65, fontSize: "14.5px" }}>
          Only leads who clear every bar reach your calendar. You pay per qualified appointment — not per lead, not per click, not on a retainer.
        </p>
      </div>
    ),
  },
  {
    question: "How many appointments can I expect per month?",
    answer:
      "It depends on your market, project type, and ad budget — but most remodelers start seeing 5–15 qualified appointments per month. During onboarding we'll recommend a volume that fits your current capacity, and you can scale up or dial back at any point.",
  },
  {
    question: "What if a lead doesn't show up?",
    answer: (
      <>
        <p>We screen out bad fits before they ever reach your calendar.</p>
        <p>If someone books a call and doesn&apos;t answer, you won&apos;t be charged — we only count appointments where the homeowner actually picks up. You&apos;ll also have the full conversation thread if you want to follow up on your own terms.</p>
      </>
    ),
  },
  {
    question: "What's the qualification process like?",
    answer: (
      <>
        <p>When someone clicks your ad, they&apos;re taken straight into a conversation which converts better — not a landing page or form.</p>
        <p>Our system asks about their project, confirms budget, timeline, location, and homeownership, and screens for fit against your criteria. Leads that qualify are offered a booking slot. Those that don&apos;t are handled gracefully and filtered out.</p>
        <p>You only ever see the ones who made it through.</p>
      </>
    ),
  },
  {
    question: "What information do I get about each appointment?",
    answer: (
      <>
        <p>You get a full pre-visit project brief — the homeowner&apos;s name, contact info, address, project scope, confirmed budget, timeline, and qualifying notes pulled directly from the conversation.</p>
        <p>It&apos;s sent to you by text or email the moment they finish booking, so you start the call already knowing the deal. It&apos;s also automatically integrated into your Google or Outlook calendar with the booked time — no manual entry needed.</p>
      </>
    ),
  },
  {
    question: "Can I pause or adjust my appointment volume?",
    answer:
      "Absolutely. You control the pace. Pause anytime, increase volume when you have capacity, or reduce it during busy season. FlowQualify works around your schedule — not the other way around.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free strategy call using the button below. We'll learn about your business, your target market, and what a qualified lead looks like for you. If it's a good fit, we can typically have your first Messenger campaigns running within a week.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "#fff", padding: "100px 24px" }}>
      <style>{`
        .faq-wrap { max-width: 760px; margin: 0 auto; }
        .faq-eyebrow {
          display: inline-block; font-size: 12px; font-weight: 800;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #8B5CF6; margin-bottom: 16px;
        }
        .faq-title {
          font-size: 40px; font-weight: 900; color: #0F172A;
          letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 14px;
        }
        .faq-sub {
          font-size: 16px; color: #64748B; line-height: 1.6; margin-bottom: 52px;
        }
        .faq-item {
          border: 1px solid #E2E8F0; border-radius: 12px;
          overflow: hidden; margin-bottom: 10px;
          transition: border-color 0.15s ease;
        }
        .faq-item.open { border-color: #C4B5FD; }
        .faq-btn {
          width: 100%; display: flex; align-items: center;
          justify-content: space-between; gap: 16px;
          padding: 18px 22px; background: #fff;
          border: none; cursor: pointer; text-align: left;
          transition: background 0.15s ease;
        }
        .faq-btn:hover { background: #FAFAFA; }
        .faq-q {
          font-size: 15.5px; font-weight: 700; color: #0F172A; line-height: 1.45;
        }
        .faq-icon {
          width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: #F5F3FF; color: #8B5CF6;
          font-size: 16px; font-weight: 700; line-height: 1;
          padding-bottom: 1px;
          transition: background 0.15s ease, transform 0.2s ease;
        }
        .faq-item.open .faq-icon { background: #8B5CF6; color: #fff; transform: rotate(45deg); }
        .faq-body {
          overflow: hidden; transition: max-height 0.25s ease, opacity 0.2s ease;
          opacity: 0; max-height: 0;
        }
        .faq-item.open .faq-body { opacity: 1; }
        .faq-answer {
          border-top: 1px solid #F1F5F9;
          padding: 20px 22px 24px;
          font-size: 14.5px; color: #475569; line-height: 1.75;
        }
        .faq-answer p { margin: 0 0 10px; }
        .faq-answer p:last-child { margin-bottom: 0; }
        @media (max-width: 600px) {
          .faq-title { font-size: 30px; }
          .faq-answer > div > div[style*="grid"] { grid-template-columns: 1fr !important; }
        }

        /* CTA block */
        .faq-cta-wrap {
          max-width: 760px; margin: 72px auto 0;
          background: #ffffff;
          border: 1px solid #E2E8F0; border-radius: 20px;
          padding: 56px 48px; text-align: center;
          position: relative; overflow: hidden;
        }
        .faq-cta-headline {
          font-size: 34px; font-weight: 900; color: #0F172A;
          letter-spacing: -0.025em; line-height: 1.15; margin: 0 0 14px;
        }
        .faq-cta-sub {
          font-size: 16px; color: #64748B; line-height: 1.65;
          margin: 0 0 32px; max-width: 480px; margin-left: auto; margin-right: auto;
        }
        .faq-cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #0d5c73 0%, #1a6b8a 55%, #1e92b0 100%);
          color: #fff; font-size: 15px; font-weight: 800;
          padding: 16px 34px; border-radius: 14px; text-decoration: none;
          box-shadow: 0 4px 28px rgba(26,107,138,0.40), 0 1px 4px rgba(0,0,0,0.10);
          letter-spacing: -0.01em;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          white-space: nowrap;
        }
        .faq-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 44px rgba(26,107,138,0.50), 0 4px 12px rgba(30,146,176,0.28);
        }
        .faq-cta-arrow { display: inline-block; transition: transform 0.18s ease; }
        .faq-cta-btn:hover .faq-cta-arrow { transform: translateX(3px); }
        .faq-cta-trust {
          display: flex; align-items: center; justify-content: center;
          gap: 6px; margin-top: 20px; flex-wrap: wrap;
        }
        .faq-cta-trust-dot { color: #C4B5FD; font-size: 10px; }
        .faq-cta-trust-item { font-size: 12px; font-weight: 600; color: #94A3B8; }
        @media (max-width: 600px) {
          .faq-cta-wrap { padding: 40px 24px; }
          .faq-cta-headline { font-size: 26px; }
        }
      `}</style>

      <div className="faq-wrap">
        <div style={{ textAlign: "center" }}>
          <span className="faq-eyebrow">FAQ</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-sub">Everything you need to know about how FlowQualify works.</p>
        </div>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`faq-item${isOpen ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq-btn"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q">{faq.question}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-body" style={{ maxHeight: isOpen ? 600 : 0 }}>
                  <div className="faq-answer">
                    {typeof faq.answer === "string" ? faq.answer : faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CTA Block ── */}
      <div className="faq-cta-wrap">
        <h2 className="faq-cta-headline">Still have questions?<br />Let&apos;s talk through it.</h2>
        <p className="faq-cta-sub">
          Book a free strategy call and we&apos;ll walk you through exactly how FlowQualify works — no pressure, no pitch deck.
        </p>
        <a href="/opt-in" className="faq-cta-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Book Your Free Strategy Call
          <span className="faq-cta-arrow">→</span>
        </a>
        <div className="faq-cta-trust">
          <span className="faq-cta-trust-item">No setup fees</span>
          <span className="faq-cta-trust-dot">·</span>
          <span className="faq-cta-trust-item">No monthly retainer</span>
          <span className="faq-cta-trust-dot">·</span>
          <span className="faq-cta-trust-item">Pay only for qualified appointments</span>
        </div>
      </div>
    </section>
  );
}
