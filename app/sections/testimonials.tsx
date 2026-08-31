"use client";

import Image from "next/image";
import { PAGE_BACKGROUND } from "../config/constants";

type CardBase = { id: string };
type MetricCard = CardBase & {
  type: "metric";
  value: string;
  label: string;
  quote: string;
  image?: string;
  authorName?: string;
  website?: string;
};
type ProfileCard = CardBase & {
  type: "profile";
  quote: string;
  author: { name: string; handle: string; website?: string };
  image?: string;
};
type QuoteCard = CardBase & {
  type: "quote";
  quote: string;
  title?: string;
  label?: string;
};
type TeamCard = CardBase & {
  type: "team";
  quote: string;
  team: string;
  description: string;
  logoImage?: string;
  website?: string;
};

export type TestimonialCard = MetricCard | ProfileCard | QuoteCard | TeamCard;

const cards: TestimonialCard[] = [
  {
    id: "metric",
    type: "metric",
    value: "3x",
    label: "more qualified leads",
    quote: "We closed $31,000 in new remodeling jobs in our first six weeks. Every appointment came pre-loaded with budget, scope, and timeline — we just showed up and closed. FlowQualify paid for itself before the first month was even over.",
    image: "/testimonials/paiano.jpg",
    authorName: "Andrew Paiano",
    website: "https://www.paianocontracting.com/",
  },
  {
    id: "paiano",
    type: "profile",
    quote: "Three bathroom jobs in six weeks — $41,000 total. I used to spend hours chasing leads that went nowhere. Now every appointment comes in pre-screened with the project details already attached. I just show up and close.",
    author: {
      name: "Tuan K.",
      handle: "Konn Reno",
      website: "https://www.konnreno.com/",
    },
    image: "/images/konnrenos.jpg",
  },
  {
    id: "sposa",
    type: "profile",
    quote: "We used to lose jobs just by being slow to respond. Now every inquiry gets instant follow-up and we're closing kitchen projects we would have missed entirely. Our average job value has gone up because we're finally talking to the right clients.",
    author: {
      name: "Daniel P.",
      handle: "Sposa Millwork",
      website: "https://www.sposakitchens.com/",
    },
    image: "/testimonials/sposa.jpg",
  },
  {
    id: "quote1",
    type: "quote",
    title: "Clear insights",
    label: "Flat $500/month. No setup fees. No surprises.",
    quote: "We use FlowQualify because it gives us clear insights on every lead. $500 a month, and we get a calendar full of homeowners who already know their budget and timeline. It's the simplest decision we've made for our business.",
  },
  {
    id: "team1",
    type: "team",
    quote: "I closed 3 kitchen and bath jobs — $52,000 in my first 8 weeks. Every homeowner already had a budget and a start date in mind. I showed up, ran the quote, and closed. That's it.",
    team: "Nam D.",
    description: "Kitchen & Bath Remodeler",
    logoImage: "/images/ace-bath-logo.png",
    website: "https://acebath.ca/",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: PAGE_BACKGROUND,
        padding: "80px 24px 100px",
        borderTop: "1px solid #F1F5F9",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .tm-wrap { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
        .tm-header { text-align: center; margin-bottom: 48px; }
        .tm-title {
          font-size: clamp(28px, 4vw, 38px);
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin: 0 0 12px;
        }
        .tm-sub { font-size: 16px; color: #64748B; line-height: 1.6; margin: 0; }

        .tm-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (min-width: 900px) {
          .tm-grid { grid-template-columns: repeat(3, 1fr); }
          .tm-card-span-2 { grid-column: span 2; }
          .tm-card-span-2-under { grid-column: 2 / span 2; }
        }
        @media (max-width: 600px) {
          .tm-grid { grid-template-columns: 1fr; }
          .tm-card-span-2 { grid-column: span 1; }
          .tm-card-span-2-under { grid-column: span 1; }
        }

        .tm-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px 26px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .tm-card:hover {
          border-color: #CBD5E1;
          box-shadow: 0 8px 28px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }

        .tm-metric-value {
          font-size: 42px;
          font-weight: 900;
          color: rgb(79, 70, 229);
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 4px;
        }
        .tm-metric-label { font-size: 14px; font-weight: 600; color: #64748B; margin-bottom: 14px; padding-bottom: 14px; border-bottom: 1px solid #E2E8F0; }
        .tm-metric-card-inner {
          display: flex;
          gap: 28px;
          align-items: stretch;
        }
        .tm-metric-card-left { flex: 1; min-width: 0; }
        .tm-metric-card-right {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .tm-metric-photo {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          background: #F1F5F9;
          margin-bottom: 10px;
        }
        .tm-metric-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .tm-metric-author-name { font-size: 14px; font-weight: 800; color: #0F172A; margin: 0; }
        .tm-metric-author-link { font-size: 13px; font-weight: 600; color: rgb(79, 70, 229); text-decoration: none; margin-top: 4px; }
        .tm-metric-author-link:hover { text-decoration: underline; }
        @media (max-width: 768px) {
          .tm-metric-card-inner { flex-direction: column; gap: 20px; }
          .tm-metric-card-right { align-items: flex-start; text-align: left; }
          .tm-metric-value { font-size: 36px; }
          .tm-metric-photo { width: 80px; height: 80px; }
          .tm-card.tm-card-span-2 { padding: 20px 22px; }
        }
        @media (max-width: 640px) {
          .tm-metric-card-inner { gap: 18px; }
          .tm-metric-value { font-size: 32px; }
          .tm-metric-photo { width: 72px; height: 72px; }
        }
        .tm-quote-card-title { font-size: 24px; font-weight: 800; color: rgb(79, 70, 229); letter-spacing: -0.02em; margin: 0 0 4px; }
        .tm-quote-card-label { font-size: 14px; font-weight: 600; color: #64748B; margin-bottom: 14px; padding-bottom: 14px; border-bottom: 1px solid #E2E8F0; }
        .tm-quote-card-title.tm-quote-card-title-alone { margin-bottom: 14px; padding-bottom: 14px; border-bottom: 1px solid #E2E8F0; }
        .tm-quote {
          font-size: 15px;
          color: #334155;
          line-height: 1.65;
          margin: 0;
        }
        .tm-quote-mark { color: #E2E8F0; }

        .tm-profile-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid #F1F5F9;
        }
        .tm-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          background: #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 800;
          color: #64748B;
        }
        .tm-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .tm-name { font-size: 14px; font-weight: 800; color: #0F172A; }
        .tm-handle { font-size: 12px; color: #64748B; margin-top: 1px; }
        .tm-link {
          font-size: 13px; font-weight: 600;
          color: rgb(79, 70, 229);
          text-decoration: none;
          margin-left: auto;
        }
        .tm-link:hover { text-decoration: underline; }

        .tm-team-row {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid #F1F5F9;
        }
        .tm-team-logo {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #F1F5F9;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 800;
          color: rgb(79, 70, 229);
          overflow: hidden;
        }
        .tm-team-logo img { display: block; }
        .tm-team-text {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 40px;
        }
        .tm-team-name { font-size: 14px; font-weight: 800; color: #0F172A; }
        .tm-team-desc { font-size: 12px; color: #64748B; margin-top: 1px; }
      `}</style>

      <div className="tm-wrap">
        <div className="tm-header">
          <h2 className="tm-title">Trusted by remodelers. <span style={{ color: "rgb(79, 70, 229)" }}>Proven</span> in the field.</h2>
          <p className="tm-sub">
            Contractors are booking more qualified calls with less back-and-forth. Here&apos;s what they&apos;re saying.
          </p>
        </div>

        <div className="tm-grid">
          {cards.map((card) => {
            if (card.type === "metric") {
              const hasRight = card.image != null && card.authorName != null;
              return (
                <div key={card.id} className="tm-card tm-card-span-2">
                  <div className="tm-metric-card-inner">
                    <div className="tm-metric-card-left">
                      <div className="tm-metric-value">{card.value}</div>
                      <div className="tm-metric-label">{card.label}</div>
                      <p className="tm-quote">
                        <span className="tm-quote-mark">&ldquo;</span>
                        {card.quote}
                        <span className="tm-quote-mark">&rdquo;</span>
                      </p>
                    </div>
                    {hasRight && (
                      <div className="tm-metric-card-right">
                        <div className="tm-metric-photo">
                          <Image
                            src={card.image!}
                            alt={card.authorName!}
                            width={100}
                            height={100}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className="tm-metric-author-name">{card.authorName}</div>
                        {card.website != null ? (
                          <a href={card.website} target="_blank" rel="noopener noreferrer" className="tm-metric-author-link">
                            {card.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                          </a>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              );
            }
            if (card.type === "profile") {
              const initials = card.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();
              return (
                <div key={card.id} className="tm-card">
                  <p className="tm-quote">
                    <span className="tm-quote-mark">&ldquo;</span>
                    {card.quote}
                    <span className="tm-quote-mark">&rdquo;</span>
                  </p>
                  <div className="tm-profile-footer">
                    <div className="tm-avatar">
                      {card.image ? (
                        <Image
                          src={card.image}
                          alt={card.author.name}
                          width={44}
                          height={44}
                          style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                      ) : (
                        initials
                      )}
                    </div>
                    <div>
                      <div className="tm-name">{card.author.name}</div>
                      <div className="tm-handle">{card.author.handle}</div>
                    </div>
                    {card.author.website && (
                      <a
                        href={card.author.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tm-link"
                      >
                        {card.author.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} →
                      </a>
                    )}
                  </div>
                </div>
              );
            }
            if (card.type === "quote") {
              return (
                <div key={card.id} className={`tm-card${card.id === "quote1" ? " tm-card-span-2" : ""}`}>
                  {card.title != null && (
                    <>
                      <div className={`tm-quote-card-title${card.label == null ? " tm-quote-card-title-alone" : ""}`}>{card.title}</div>
                      {card.label != null && <div className="tm-quote-card-label">{card.label}</div>}
                    </>
                  )}
                  <p className="tm-quote">
                    <span className="tm-quote-mark">&ldquo;</span>
                    {card.quote}
                    <span className="tm-quote-mark">&rdquo;</span>
                  </p>
                </div>
              );
            }
            if (card.type === "team") {
              const initial = card.team.charAt(0);
              return (
                <div key={card.id} className={`tm-card${card.id === "team1" ? " tm-card-span-2 tm-card-span-2-under" : ""}`}>
                  <p className="tm-quote">
                    <span className="tm-quote-mark">&ldquo;</span>
                    {card.quote}
                    <span className="tm-quote-mark">&rdquo;</span>
                  </p>
                  <div className="tm-team-row">
                    <div className="tm-team-logo">
                      {card.logoImage ? (
                        <Image
                          src={card.logoImage}
                          alt={card.team}
                          width={40}
                          height={40}
                          style={{ objectFit: "contain", width: "100%", height: "100%" }}
                        />
                      ) : (
                        initial
                      )}
                    </div>
                    <div className="tm-team-text">
                      <div className="tm-team-name">{card.team}</div>
                      <div className="tm-team-desc">{card.description}</div>
                    </div>
                    {card.website && (
                      <a href={card.website} target="_blank" rel="noopener noreferrer" className="tm-link" style={{ marginLeft: "auto" }}>
                        {card.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} →
                      </a>
                    )}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
