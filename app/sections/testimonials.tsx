"use client";

import Image from "next/image";
import { PAGE_BACKGROUND } from "../config/constants";

/** Headline figure pulled from the quote itself, so a skimmer gets the result first. */
type Result = { value: string; label: string };
type CardBase = { id: string; result: Result };
type MetricCard = CardBase & {
  type: "metric";
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

// Quotes are verbatim; where a sentence's figure became the card headline,
// that sentence is dropped rather than repeated.
const cards: TestimonialCard[] = [
  {
    id: "metric",
    type: "metric",
    result: { value: "$31,000", label: "in new remodeling jobs in the first six weeks" },
    quote: "Every appointment came pre-loaded with budget, scope, and timeline — we just showed up and closed. FlowQualify paid for itself before the first month was even over.",
    image: "/testimonials/paiano.jpg",
    authorName: "Andrew Paiano",
    website: "https://www.paianocontracting.com/",
  },
  {
    id: "paiano",
    type: "profile",
    result: { value: "$41,000", label: "3 bathroom jobs in six weeks" },
    quote: "I used to spend hours chasing leads that went nowhere. Now every appointment comes in pre-screened with the project details already attached. I just show up and close.",
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
    result: { value: "Bigger jobs", label: "Closing kitchens they used to miss" },
    quote: "We used to lose jobs just by being slow to respond. Now every inquiry gets instant follow-up and we're closing kitchen projects we would have missed entirely. Our average job value has gone up because we're finally talking to the right clients.",
    author: {
      name: "Daniel P.",
      handle: "Sposa Millwork",
      website: "https://www.sposakitchens.com/",
    },
    image: "/testimonials/sposa.jpg",
  },
  {
    id: "team1",
    type: "team",
    result: { value: "$52,000", label: "3 kitchen and bath jobs in 8 weeks" },
    quote: "Every homeowner already had a budget and a start date in mind. I showed up, ran the quote, and closed. That's it.",
    team: "Nam D.",
    description: "Kitchen & Bath Remodeler",
    logoImage: "/images/ace-bath-logo.png",
    website: "https://acebath.ca/",
  },
  {
    id: "quote1",
    type: "quote",
    result: { value: "$500/mo", label: "Flat. No setup fees. No surprises." },
    quote: "We use FlowQualify because it gives us clear insights on every lead. $500 a month, and we get a calendar full of homeowners who already know their budget and timeline. It's the simplest decision we've made for our business.",
  },
];

const domain = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function ResultHead({ result, size = "md" }: { result: Result; size?: "lg" | "md" }) {
  return (
    <div className="tm-result">
      <div className={`tm-result-value${size === "lg" ? " tm-result-value-lg" : ""}`}>{result.value}</div>
      <div className="tm-result-label">{result.label}</div>
    </div>
  );
}

function Quote({ text }: { text: string }) {
  return <p className="tm-quote">&ldquo;{text}&rdquo;</p>;
}

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
        .tm-sub { font-size: 16px; color: #64748B; line-height: 1.6; margin: 0 auto; max-width: 520px; }

        /* 3 columns: featured card + one beside it, then three across — no holes */
        .tm-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        .tm-card-span-2 { grid-column: span 2; }
        @media (min-width: 900px) {
          .tm-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 600px) {
          .tm-grid { grid-template-columns: 1fr; gap: 14px; }
          .tm-card-span-2 { grid-column: span 1; }
        }

        .tm-card {
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 24px 26px;
          box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 12px 28px -18px rgba(49,46,129,0.18);
          position: relative;
          overflow: hidden;
        }

        .tm-result {
          margin-bottom: 14px;
          padding-bottom: 14px;
          border-bottom: 1px solid #EEF2F7;
        }
        .tm-result-value {
          font-size: 30px;
          font-weight: 800;
          color: rgb(79, 70, 229);
          letter-spacing: -0.03em;
          line-height: 1.1;
          font-variant-numeric: tabular-nums;
        }
        .tm-result-value-lg { font-size: 42px; letter-spacing: -0.04em; line-height: 1; }
        .tm-result-label { font-size: 14px; font-weight: 600; color: #64748B; margin-top: 6px; }

        .tm-quote {
          flex-grow: 1;
          font-size: 15px;
          color: #334155;
          line-height: 1.65;
          margin: 0;
        }

        .tm-metric-card-inner {
          display: flex;
          gap: 28px;
          align-items: stretch;
          height: 100%;
        }
        .tm-metric-card-left { flex: 1; min-width: 0; display: flex; flex-direction: column; }
        .tm-metric-card-right {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-left: 28px;
          border-left: 1px solid #EEF2F7;
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
        .tm-metric-card-right .tm-who { display: flex; flex-direction: column; align-items: inherit; }
        .tm-card-span-2 .tm-quote { font-size: 17px; line-height: 1.6; color: #1E293B; }

        .tm-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid #EEF2F7;
        }
        .tm-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          background: #F1F5F9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 800;
          color: #64748B;
        }
        .tm-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .tm-who { min-width: 0; }
        .tm-name { font-size: 14px; font-weight: 800; color: #0F172A; }
        .tm-handle { font-size: 12px; color: #64748B; margin-top: 1px; }
        .tm-link {
          font-size: 13px; font-weight: 600;
          color: rgb(79, 70, 229);
          text-decoration: none;
          white-space: nowrap;
          border-radius: 4px;
          transition: color 0.15s ease;
        }
        .tm-footer .tm-link { margin-left: auto; }
        .tm-link:hover { color: rgb(67, 56, 202); text-decoration: underline; }
        .tm-link:active { color: rgb(55, 48, 163); }
        .tm-link:focus-visible { outline: 2px solid rgb(79, 70, 229); outline-offset: 2px; }
        .tm-metric-card-right .tm-link { margin-top: 4px; }

        .tm-price-card { background: linear-gradient(160deg, #F5F4FF 0%, #ECEBFE 100%); border-color: rgba(79,70,229,0.18); }
        .tm-price-card .tm-result { border-bottom-color: rgba(79,70,229,0.14); }

        @media (max-width: 768px) {
          .tm-metric-card-inner { flex-direction: column; gap: 0; }
          .tm-metric-card-right {
            flex-direction: row;
            justify-content: flex-start;
            gap: 12px;
            text-align: left;
            padding: 18px 0 0;
            margin-top: 20px;
            border-left: 0;
            border-top: 1px solid #EEF2F7;
          }
          .tm-metric-photo { width: 44px; height: 44px; margin: 0; flex-shrink: 0; }
          .tm-metric-card-right .tm-who { align-items: flex-start; }
          .tm-metric-card-right .tm-link { margin-top: 2px; }
          .tm-result-value-lg { font-size: 36px; }
          .tm-card-span-2 .tm-quote { font-size: 16px; }
        }
        @media (max-width: 600px) {
          #testimonials { padding: 64px 16px 72px !important; }
          .tm-header { margin-bottom: 32px; }
          .tm-sub { font-size: 15px; }
          .tm-card { padding: 20px; }
          .tm-result-value { font-size: 28px; }
          .tm-result-value-lg { font-size: 32px; }
          .tm-quote, .tm-card-span-2 .tm-quote { font-size: 15px; }
          .tm-link { font-size: 12.5px; }
        }
        @media (max-width: 380px) {
          .tm-footer { flex-wrap: wrap; }
          .tm-footer .tm-link { margin-left: 56px; }
        }
      `}</style>

      <div className="tm-wrap">
        <div className="tm-header">
          <h2 className="tm-title">Trusted by remodelers. <span style={{ color: "rgb(79, 70, 229)" }}>Proven</span> in the field.</h2>
          <p className="tm-sub">
            Real numbers from kitchen and bath remodelers who hand their leads to FlowQualify.
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
                      <ResultHead result={card.result} size="lg" />
                      <Quote text={card.quote} />
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
                        <div className="tm-who">
                          <div className="tm-metric-author-name">{card.authorName}</div>
                          {card.website != null ? (
                            <a href={card.website} target="_blank" rel="noopener noreferrer" className="tm-link">
                              {domain(card.website)}
                            </a>
                          ) : null}
                        </div>
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
                  <ResultHead result={card.result} />
                  <Quote text={card.quote} />
                  <div className="tm-footer">
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
                    <div className="tm-who">
                      <div className="tm-name">{card.author.name}</div>
                      <div className="tm-handle">{card.author.handle}</div>
                    </div>
                    {card.author.website && (
                      <a href={card.author.website} target="_blank" rel="noopener noreferrer" className="tm-link">
                        {domain(card.author.website)} →
                      </a>
                    )}
                  </div>
                </div>
              );
            }
            if (card.type === "quote") {
              return (
                <div key={card.id} className="tm-card tm-price-card">
                  <ResultHead result={card.result} />
                  <Quote text={card.quote} />
                </div>
              );
            }
            if (card.type === "team") {
              return (
                <div key={card.id} className="tm-card">
                  <ResultHead result={card.result} />
                  <Quote text={card.quote} />
                  <div className="tm-footer">
                    <div className="tm-avatar">
                      {card.logoImage ? (
                        <Image
                          src={card.logoImage}
                          alt={card.team}
                          width={44}
                          height={44}
                          style={{ objectFit: "contain", width: "100%", height: "100%" }}
                        />
                      ) : (
                        card.team.charAt(0)
                      )}
                    </div>
                    <div className="tm-who">
                      <div className="tm-name">{card.team}</div>
                      <div className="tm-handle">{card.description}</div>
                    </div>
                    {card.website && (
                      <a href={card.website} target="_blank" rel="noopener noreferrer" className="tm-link">
                        {domain(card.website)} →
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
