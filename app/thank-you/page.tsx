"use client";

import { useState } from "react";
import { BUTTON_PRIMARY } from "../config/constants";

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
          We don&apos;t pass along anyone who fills out a form. A lead is only considered qualified when they meet <strong>all</strong> of the following criteria:
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

export default function ThankYouPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @keyframes ty-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ty-check-pop {
          0%   { transform: scale(0) rotate(-15deg); opacity: 0; }
          60%  { transform: scale(1.15) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes ty-sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50%       { opacity: 1; transform: scale(1.2) rotate(20deg); }
        }
        @keyframes ty-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .ty-page { animation: ty-fade-up 0.5s ease both; }

        /* ── Email confirmation banner ── */
        .ty-email-banner {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          border-radius: 9999px;
          padding: 14px 24px;
          text-align: center;
          font-size: 15px;
          font-weight: 600;
          color: #166534;
          margin: 0 auto;
          max-width: 560px;
          box-sizing: border-box;
        }
        @media (max-width: 600px) {
          .ty-email-banner { font-size: 14px; padding: 12px 20px; }
        }

        /* ── Hero ── */
        .ty-hero {
          background: #ffffff;
          border-bottom: 1px solid #F1F5F9;
          padding: 72px 24px 68px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ty-hero-glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 55% 60% at 50% 0%, rgba(79,70,229,0.07) 0%, transparent 70%);
        }
        .ty-hero-check {
          width: 72px; height: 72px; border-radius: 50%;
          background: rgb(79,70,229);
          display: inline-flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          animation: ty-check-pop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.1s both, ty-float 3s ease-in-out 0.7s infinite;
          box-shadow: 0 0 0 12px rgba(79,70,229,0.1), 0 0 0 24px rgba(79,70,229,0.05);
        }
        .ty-hero-eyebrow {
          display: block;
          font-size: clamp(44px, 7vw, 72px);
          font-weight: 900;
          color: #0F172A;
          letter-spacing: -0.035em;
          line-height: 1.05;
          margin-bottom: 8px;
          position: relative;
        }
        .ty-hero-eyebrow-wrap {
          display: inline-block;
          position: relative;
          margin-bottom: 20px;
        }
        .ty-hero-eyebrow-underline {
          position: absolute;
          left: -4px;
          bottom: -10px;
          width: calc(100% + 8px);
          overflow: visible;
          pointer-events: none;
        }
        .ty-hero-h1 {
          font-size: clamp(18px, 2.5vw, 24px);
          font-weight: 600;
          color: #64748B;
          letter-spacing: -0.01em;
          line-height: 1.4;
          margin: 16px auto 0;
          max-width: 480px;
        }
        .ty-hero-h1 span { color: rgb(79,70,229); font-weight: 700; }
        .ty-hero-chips {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; margin-top: 28px; flex-wrap: wrap;
        }
        .ty-hero-chip {
          display: inline-flex; align-items: center; gap: 6px;
          background: #F8FAFC; border: 1px solid #E2E8F0;
          border-radius: 100px; padding: 6px 16px;
          font-size: 12px; font-weight: 600; color: #64748B;
        }
        .ty-hero-chip-dot { width: 6px; height: 6px; border-radius: 50%; background: rgb(79,70,229); flex-shrink: 0; }

        /* ── Sparkle decorations ── */
        .ty-sparkle {
          position: absolute; pointer-events: none;
          animation: ty-sparkle 2.8s ease-in-out infinite;
        }

        .ty-body  { max-width: 780px; margin: 0 auto; padding: 56px 24px 96px; }
        .ty-section { margin-bottom: 64px; }
        .ty-section h2 { font-size: 22px; font-weight: 800; color: #0F172A; margin: 0 0 8px; letter-spacing: -0.02em; }
        .ty-section p  { font-size: 16px; color: #334155; line-height: 1.75; margin: 0 0 16px; }
        .ty-callout {
          background: #F0FDF4; border: 1px solid #86EFAC; border-radius: 12px;
          padding: 16px 20px; display: flex; gap: 12px; align-items: flex-start; margin-bottom: 48px;
        }
        .ty-callout-text { font-size: 15px; color: #166534; font-weight: 600; line-height: 1.6; }
        .ty-callout-blue { background: #EFF6FF; border-color: #93C5FD; }
        .ty-callout-blue .ty-callout-text { color: #1E40AF; }
        .ty-hr { border: none; border-top: 1px solid #E2E8F0; margin: 48px 0; }
        .ty-old-list { list-style: none; padding: 0; margin: 16px 0 0; }
        .ty-old-list li { display: flex; gap: 10px; align-items: flex-start; font-size: 15px; color: #334155; line-height: 1.7; margin-bottom: 10px; }
        .ty-old-list li::before { content: "✕"; color: #EF4444; font-weight: 800; font-size: 14px; margin-top: 2px; flex-shrink: 0; }
        .ty-diagram { width: 100%; border-radius: 14px; box-shadow: 0 4px 24px rgba(0,0,0,0.1); margin: 20px 0; display: block; }
        .ty-diagram-caption { font-size: 11.5px; color: #94A3B8; text-align: center; font-style: italic; margin-top: 2px; }
        .ty-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(79,70,229,0.12); border: 1px solid rgba(79,70,229,0.3);
          border-radius: 100px; padding: 5px 14px;
          font-size: 12px; font-weight: 700; color: rgb(79,70,229);
          letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 20px;
        }

        /* ── FAQ styles (identical to main page) ── */
        .faq-wrap { max-width: 760px; margin: 0 auto; }
        .faq-item {
          border: 1px solid #E2E8F0; border-radius: 12px;
          overflow: hidden; margin-bottom: 10px;
          transition: border-color 0.15s ease;
        }
        .faq-item.open { border-color: rgba(79, 70, 229, 0.5); }
        .faq-btn {
          width: 100%; display: flex; align-items: center;
          justify-content: space-between; gap: 16px;
          padding: 18px 22px; background: #fff;
          border: none; cursor: pointer; text-align: left;
          transition: background 0.15s ease;
        }
        .faq-btn:hover { background: #FAFAFA; }
        .faq-q { font-size: 15.5px; font-weight: 700; color: #0F172A; line-height: 1.45; }
        .faq-icon {
          width: 26px; height: 26px; min-width: 26px; min-height: 26px;
          border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(79, 70, 229, 0.12); color: rgb(79, 70, 229);
          transition: background 0.15s ease, transform 0.2s ease;
        }
        .faq-icon svg { display: block; }
        .faq-item.open .faq-icon { background: rgb(79, 70, 229); color: #fff; transform: rotate(45deg); }
        .faq-body { overflow: hidden; transition: max-height 0.25s ease, opacity 0.2s ease; opacity: 0; max-height: 0; }
        .faq-item.open .faq-body { opacity: 1; }
        .faq-answer { border-top: 1px solid #F1F5F9; padding: 20px 22px 24px; font-size: 14.5px; color: #475569; line-height: 1.75; }
        .faq-answer p { margin: 0 0 10px; }
        .faq-answer p:last-child { margin-bottom: 0; }
        .faq-cta-wrap {
          max-width: 760px; margin: 72px auto 0;
          background: #ffffff; border: 1px solid rgba(79, 70, 229, 0.2);
          border-radius: 20px; padding: 56px 48px; text-align: center;
        }
        .faq-cta-headline { font-size: 34px; font-weight: 900; color: #0F172A; letter-spacing: -0.025em; line-height: 1.15; margin: 0 0 14px; }
        .faq-cta-sub { font-size: 16px; color: #64748B; line-height: 1.65; margin: 0 0 32px; max-width: 480px; margin-left: auto; margin-right: auto; }
        .faq-cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgb(79, 70, 229); color: #fff; font-size: 15px; font-weight: 800;
          padding: 16px 34px; border-radius: 14px; text-decoration: none;
          letter-spacing: -0.01em; transition: transform 0.18s ease; white-space: nowrap;
        }
        .faq-cta-btn:hover { transform: translateY(-2px); }
        .faq-cta-arrow { display: inline-block; transition: transform 0.18s ease; }
        .faq-cta-btn:hover .faq-cta-arrow { transform: translateX(3px); }
        .faq-cta-trust { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 20px; flex-wrap: wrap; }
        .faq-cta-trust-dot { color: rgba(79, 70, 229, 0.6); font-size: 10px; }
        .faq-cta-trust-item { font-size: 12px; font-weight: 600; color: #94A3B8; }

        @media (max-width: 600px) {
          .ty-hero { padding: 48px 20px 40px; }
          .ty-body { padding: 36px 18px 72px; }
          .ty-section h2 { font-size: 19px; }
          .faq-cta-wrap { padding: 40px 24px; }
          .faq-cta-headline { font-size: 26px; }
          .faq-answer > div > div[style*="grid"] { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="ty-page">

        {/* ── Hero ── */}
        <div className="ty-hero">
          {/* Glow layer */}
          <div className="ty-hero-glow" />

          {/* Sparkle decorations */}
          <svg className="ty-sparkle" style={{ top: "18%", left: "12%", animationDelay: "0s" }} width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 1 L11.5 8.5 L19 10 L11.5 11.5 L10 19 L8.5 11.5 L1 10 L8.5 8.5 Z" fill="rgb(79,70,229)" opacity="0.35" />
          </svg>
          <svg className="ty-sparkle" style={{ top: "25%", right: "10%", animationDelay: "0.9s" }} width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M10 1 L11.5 8.5 L19 10 L11.5 11.5 L10 19 L8.5 11.5 L1 10 L8.5 8.5 Z" fill="rgb(79,70,229)" opacity="0.25" />
          </svg>
          <svg className="ty-sparkle" style={{ bottom: "20%", left: "18%", animationDelay: "1.6s" }} width="10" height="10" viewBox="0 0 20 20" fill="none">
            <path d="M10 1 L11.5 8.5 L19 10 L11.5 11.5 L10 19 L8.5 11.5 L1 10 L8.5 8.5 Z" fill="#0F172A" opacity="0.12" />
          </svg>
          <svg className="ty-sparkle" style={{ bottom: "28%", right: "16%", animationDelay: "0.5s" }} width="12" height="12" viewBox="0 0 20 20" fill="none">
            <path d="M10 1 L11.5 8.5 L19 10 L11.5 11.5 L10 19 L8.5 11.5 L1 10 L8.5 8.5 Z" fill="#0F172A" opacity="0.1" />
          </svg>

          {/* Check icon */}
          <div>
            <div className="ty-hero-check">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          {/* Eyebrow — big celebratory heading */}
          <div>
            <div className="ty-hero-eyebrow-wrap">
              <div className="ty-hero-eyebrow">
                🎯 You&apos;re Booked
              </div>
              {/* Hand-drawn orange underline */}
              <svg
                className="ty-hero-eyebrow-underline"
                viewBox="0 0 340 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "14px" }}
              >
                <path
                  d="M 4 9 C 40 4 100 10 160 7 C 220 4 280 9 336 6"
                  stroke="rgb(79,70,229)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M 12 12 C 60 8 130 13 200 10 C 260 7 305 12 330 10"
                  stroke="rgb(79,70,229)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.35"
                />
              </svg>
            </div>
          </div>

          {/* Subtitle */}
          <h1 className="ty-hero-h1">
            Here&apos;s What You&apos;re{" "}
            <span>Getting Into</span>
          </h1>

        </div>

        {/* ── Body ── */}
        <div className="ty-body">

          {/* Email sent — confirm in inbox */}
          <div style={{ marginBottom: "24px" }}>
            <p className="ty-email-banner" role="status">
              Email sent. Check your inbox for an email with all the details — confirm your appointment there.
            </p>
          </div>

          {/* Thank-you video */}
          <div style={{ marginBottom: "32px", borderRadius: "14px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.1)", border: "1px solid #E2E8F0" }}>
            <video
              src={process.env.NEXT_PUBLIC_VIDEO_THANK_YOU || "/videos/thank-you.mp4"}
              controls
              autoPlay
              playsInline
              preload="metadata"
              style={{ display: "block", width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
              aria-label="Thank you video"
            />
          </div>

          <div className="ty-callout">
            <span style={{ fontSize: "20px" }}>📋</span>
            <span className="ty-callout-text">A quick overview before our call — takes 2 minutes to read.</span>
          </div>

          <hr className="ty-hr" />

          {/* ── Section 1: Old Agency Approach ── */}
          <div className="ty-section">
            <h2>The Old Traditional Agency Approach (and Why It Fails)</h2>
            <p style={{ color: "#64748B" }}>Most contractors have tried marketing before. Here&apos;s why it didn&apos;t work.</p>
            <img src="/TLF.png" alt="Traditional Lead Form diagram" className="ty-diagram" />
            <p style={{ marginTop: "24px" }}>
              Here&apos;s what that &ldquo;Old Way&rdquo; actually looks like — a multi-step form homeowners are sent after clicking an ad:
            </p>
            <p style={{ fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>The Old Way:</p>
            <ul className="ty-old-list">
              <li>Homeowner clicks your ad and hits a generic form</li>
              <li>Most don&apos;t finish it or give you almost no info</li>
              <li>You follow up hours later with <strong>no rapport</strong> and a cold lead</li>
              <li>They&apos;ve usually talked to someone else or forgotten the inquiry</li>
              <li>You still paid for the click but never got a real chance at the job</li>
            </ul>
            <div style={{ marginTop: "20px", padding: "14px 18px", background: "#FEF2F2", borderLeft: "4px solid #EF4444", borderRadius: "0 8px 8px 0" }}>
              <p style={{ margin: 0, fontSize: "15px", color: "#7F1D1D", fontWeight: 600 }}>
                Cold forms create cold leads — no rapport and no natural engagement built.
              </p>
            </div>
          </div>

          <hr className="ty-hr" />

          {/* ── Section 2: How FlowQualify Fixes This ── */}
          <div className="ty-section">
            <h2>How FlowQualify Fixes This</h2>
            <img src="/FSF.png" alt="Full System Flow diagram" className="ty-diagram" />
            <p style={{ marginTop: "20px" }}>
              When a homeowner clicks your ad, Messenger opens instantly — no form, no landing page.
            </p>
            <p>
              Over 70% of homeowners prefer messaging over filling out forms when reaching out to a contractor for the first time — especially through paid ads.
            </p>
            <p>
              Our system responds accordingly, qualifies them on project type, budget, timeline, and photos, then{" "}
              <strong>books them directly to your calendar and sends you confirmation.</strong>
            </p>
          </div>

          <hr className="ty-hr" />

          {/* ── Section 3: Messenger Qualification ── */}
          <div className="ty-section">
            <h2>Qualification / Intelligent Conversation through DMs</h2>
            <img src="/messenger-edited.png" alt="Messenger qualification conversation" className="ty-diagram" />
            <p className="ty-diagram-caption">This is what real qualification looks like — a natural conversation that builds rapport, gathers details, and warms the homeowner before you get involved.</p>
            <p style={{ marginTop: "20px" }}>
              When the chat ends, our system turns the whole conversation into an{" "}
              <strong>Estimator Brief</strong> sent to your email and uploaded into our CRM — scope, budget, timeline, photos, and notes. You walk in prepared.
            </p>
          </div>

          <hr className="ty-hr" />

          {/* ── Section 4: Estimator Brief ── */}
          <div className="ty-section">
            <h2>Lead Details Sent to Your Email</h2>
            <img src="/estimatorbrief.png" alt="Estimator Brief" className="ty-diagram" />
            <p className="ty-diagram-caption">A detailed, structured, ready-to-use estimator brief covering scope, budget, materials, risks, measurements, and next steps — all done automatically.</p>
            <p style={{ marginTop: "20px" }}>
              Every lead, conversation, estimator brief, photo, and project detail is{" "}
              <strong>automatically organized inside your custom CRM</strong>. You can see every lead that comes through — qualified or unqualified — and revisit them anytime.
            </p>
            <p>
              The good leads — the ones ready to book — get dropped right onto your calendar with <strong>all their project details sent to your email.</strong>
            </p>
            <p style={{ fontWeight: 800, color: "#0F172A" }}>You are not doing any of this manually.</p>
          </div>

          <hr className="ty-hr" />

          {/* Blue callout */}
          <div className="ty-callout ty-callout-blue" style={{ marginBottom: "64px" }}>
            <span style={{ fontSize: "20px" }}>📅</span>
            <span className="ty-callout-text">
              We&apos;ll walk through exactly how this applies to your market on the call. See you then.
            </span>
          </div>

          <hr className="ty-hr" />

          {/* ── FAQ ── */}
          <div style={{ paddingTop: "16px" }}>

            {/* Hand-drawn Excalidraw-style FAQ header */}
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <svg viewBox="0 0 520 110" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", maxWidth: "520px", overflow: "visible" }}>

                {/* Rough underline scribble beneath heading */}
                <path d="M 42 88 C 80 93 160 85 240 90 C 310 94 400 86 478 91"
                  stroke="rgb(79,70,229)" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.7"/>
                <path d="M 60 95 C 110 100 200 92 280 97 C 350 101 430 94 490 97"
                  stroke="rgb(79,70,229)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35"/>

                {/* Sparkle left */}
                <g stroke="rgb(79,70,229)" strokeWidth="2" strokeLinecap="round" opacity="0.8">
                  <line x1="18" y1="30" x2="18" y2="44"/>
                  <line x1="11" y1="37" x2="25" y2="37"/>
                  <line x1="13" y1="32" x2="23" y2="42"/>
                  <line x1="23" y1="32" x2="13" y2="42"/>
                </g>
                {/* Sparkle right */}
                <g stroke="rgb(79,70,229)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
                  <line x1="500" y1="22" x2="500" y2="32"/>
                  <line x1="495" y1="27" x2="505" y2="27"/>
                </g>

                {/* Small question mark doodle top-right */}
                <text x="490" y="55" fontSize="28" fontWeight="900" fill="rgb(79,70,229)" opacity="0.18"
                  fontFamily="Georgia, serif" transform="rotate(12, 490, 55)">?</text>

                {/* Main hand-drawn heading text */}
                <text x="260" y="72"
                  textAnchor="middle"
                  fontSize="54"
                  fontWeight="900"
                  fill="#0F172A"
                  fontFamily="Georgia, 'Times New Roman', serif"
                  letterSpacing="-1.5"
                  style={{ fontStyle: "italic" }}>
                  Got Questions?
                </text>
              </svg>
              <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.6, marginTop: "4px" }}>
                Everything you need to know about how FlowQualify works.
              </p>
            </div>

            <div className="faq-wrap">
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
                      <span className="faq-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>
                    <div className="faq-body" style={{ maxHeight: isOpen ? 600 : 0 }}>
                      <div className="faq-answer">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>


          </div>

          {/* Back link */}
          <div style={{ textAlign: "center", marginTop: "64px" }}>
            <a href="/" style={{ fontSize: "14px", color: "#94A3B8", textDecoration: "none" }}>
              ← Back to homepage
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
