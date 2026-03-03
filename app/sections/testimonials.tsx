const testimonials = [
  {
    quote:
      "Before FlowQualify, I was spending 10 hours a week chasing leads that went nowhere. Now I show up to calls with homeowners who already know their budget and are ready to move forward. It's completely changed how I run my business.",
    name: "Mike R.",
    title: "Kitchen Remodeler",
    location: "Chicago, IL",
    initials: "MR",
  },
  {
    quote:
      "The AI handles all the back-and-forth in Messenger. By the time a lead hits my calendar, they've already confirmed scope, budget, and timeline. It's like having a full-time salesperson working 24/7 — without the overhead.",
    name: "Sarah T.",
    title: "Bathroom Contractor",
    location: "Phoenix, AZ",
    initials: "ST",
  },
  {
    quote:
      "We went from 3–4 random leads a week to 18 qualified appointments last month alone. The pay-per-appointment model means I only pay when it actually works. I wish I had found this two years ago.",
    name: "James L.",
    title: "Remodeling Co.",
    location: "Dallas, TX",
    initials: "JL",
  },
];

export default function Testimonials() {
  return (
    <>
      <style>{`
        .oh-tm-section {
          background: #f9f0d9;
          padding: 96px 24px;
          border-top: 1px solid rgba(34,21,13,0.10);
        }
        .oh-tm-inner { max-width: 1120px; margin: 0 auto; }
        .oh-tm-header { text-align: center; margin-bottom: 56px; }
        .oh-tm-eyebrow {
          display: inline-block;
          font-size: 12px; font-weight: 700; color: rgba(34,21,13,0.5);
          letter-spacing: 0.08em; text-transform: uppercase;
          margin-bottom: 14px;
        }
        .oh-tm-title {
          font-size: clamp(28px, 4vw, 40px); font-weight: 900;
          color: #22150d; line-height: 1.15; letter-spacing: -0.02em; margin: 0;
        }
        .oh-tm-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        .oh-tm-card {
          background: #ede4cc;
          border: 1px solid rgba(34,21,13,0.12);
          border-radius: 14px; padding: 32px 28px;
          display: flex; flex-direction: column;
          transition: border-color 0.2s, transform 0.2s;
        }
        .oh-tm-card:hover {
          border-color: rgba(34,21,13,0.28);
          transform: translateY(-2px);
        }
        .oh-tm-stars {
          font-size: 14px; color: #22150d;
          letter-spacing: 2px; margin-bottom: 20px;
        }
        .oh-tm-quote {
          font-size: 15px; color: rgba(34,21,13,0.75);
          line-height: 1.7; flex: 1; margin: 0 0 28px;
          font-style: italic;
        }
        .oh-tm-footer {
          display: flex; align-items: center; gap: 12px;
          padding-top: 20px;
          border-top: 1px solid rgba(34,21,13,0.10);
        }
        .oh-tm-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: #22150d; color: #f9f0d9;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 800; flex-shrink: 0;
        }
        .oh-tm-name {
          font-size: 14px; font-weight: 800; color: #22150d; margin: 0;
        }
        .oh-tm-meta {
          font-size: 12px; color: rgba(34,21,13,0.5); margin: 2px 0 0;
        }
        @media (max-width: 900px) {
          .oh-tm-grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }
        }
      `}</style>

      <section className="oh-tm-section" id="testimonials">
        <div className="oh-tm-inner">
          <div className="oh-tm-header">
            <span className="oh-tm-eyebrow">What remodelers say</span>
            <h2 className="oh-tm-title">Real results from real contractors</h2>
          </div>

          <div className="oh-tm-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="oh-tm-card">
                <div className="oh-tm-stars">★★★★★</div>
                <p className="oh-tm-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="oh-tm-footer">
                  <div className="oh-tm-avatar">{t.initials}</div>
                  <div>
                    <p className="oh-tm-name">{t.name}</p>
                    <p className="oh-tm-meta">{t.title} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
