"use client";

import Image from "next/image";

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
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "#fff", padding: "100px 24px", borderTop: "1px solid #F1F5F9", position: "relative", overflow: "hidden" }}>
      <style>{`
        /* Subtle background orbs */
        .tm-orb-left {
          position: absolute; top: -80px; left: -80px;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .tm-orb-right {
          position: absolute; bottom: -80px; right: -80px;
          width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .tm-wrap { max-width: 960px; margin: 0 auto; position: relative; z-index: 1; }
        .tm-eyebrow {
          display: inline-block; font-size: 12px; font-weight: 800;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #8B5CF6; margin-bottom: 16px;
        }
        .tm-title {
          font-size: 40px; font-weight: 900; color: #0F172A;
          letter-spacing: -0.025em; line-height: 1.15; margin: 0 0 14px;
        }
        .tm-sub { font-size: 16px; color: #64748B; line-height: 1.6; margin: 0; }
        .tm-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 24px; margin-top: 56px;
        }
        .tm-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.03);
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .tm-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #8B5CF6, #7C3AED);
          border-radius: 20px 20px 0 0;
        }
        .tm-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(139,92,246,0.12), 0 4px 12px rgba(0,0,0,0.06);
          border-color: #C4B5FD;
        }
        .tm-quote-mark {
          font-size: 64px; line-height: 1; color: #EDE9FE;
          font-family: Georgia, serif; position: absolute;
          top: 24px; right: 28px; user-select: none; pointer-events: none;
        }
        .tm-stars { display: flex; gap: 3px; margin-bottom: 16px; }
        .tm-star { color: #F59E0B; font-size: 16px; }
        .tm-body {
          font-size: 15px; color: #334155; line-height: 1.75;
          margin: 0 0 28px; font-style: italic;
        }
        .tm-footer {
          display: flex; align-items: center; gap: 12px;
          padding-top: 20px; border-top: 1px solid #F1F5F9;
        }
        .tm-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          border: 2px solid #DDD6FE; overflow: hidden; flex-shrink: 0;
        }
        .tm-name { font-size: 14px; font-weight: 800; color: #0F172A; }
        .tm-handle { font-size: 12px; color: #94A3B8; margin-top: 1px; }
        .tm-link {
          margin-left: auto; font-size: 12px; font-weight: 700;
          color: #7C3AED; text-decoration: none;
          background: #F5F3FF; border: 1px solid #DDD6FE;
          padding: 6px 14px; border-radius: 999px;
          transition: background 0.15s, border-color 0.15s;
          white-space: nowrap; flex-shrink: 0;
        }
        .tm-link:hover { background: #EDE9FE; border-color: #C4B5FD; }
        @media (max-width: 700px) {
          .tm-grid { grid-template-columns: 1fr; }
          .tm-title { font-size: 30px; }
        }
      `}</style>

      <div className="tm-orb-left" />
      <div className="tm-orb-right" />

      <div className="tm-wrap">
        <div style={{ textAlign: "center" }}>
          <span className="tm-eyebrow">Testimonials</span>
          <h2 className="tm-title">What contractors are saying</h2>
          <p className="tm-sub">Real results from remodelers using FlowQualify.</p>
        </div>

        <div className="tm-grid">
          {testimonials.map((t, i) => (
            <figure key={i} className="tm-card" style={{ margin: 0 }}>
              <span className="tm-quote-mark">&ldquo;</span>
              <div className="tm-stars">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="tm-star">★</span>
                ))}
              </div>
              <blockquote className="tm-body">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <figcaption className="tm-footer">
                <div className="tm-avatar">
                  <Image
                    src={t.image}
                    alt={t.author.name}
                    width={44}
                    height={44}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <div className="tm-name">{t.author.name}</div>
                  <div className="tm-handle">{t.author.handle}</div>
                </div>
                <a
                  href={t.author.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tm-link"
                >
                  Visit website →
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
