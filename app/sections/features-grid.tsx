export default function FeaturesGrid() {
  const features = [
    {
      icon: "🎯",
      title: "Targeted Ads",
      desc: "We run highly creative Facebook & Instagram ads targeting high-intent homeowners in your area — people actively ready to spend on a remodel.",
    },
    {
      icon: "💬",
      title: "Intelligent System Qualification",
      desc: "Our system qualifies every lead in Messenger — confirming scope, budget, and timeline through a natural back-and-forth that builds trust and engagement. No forms, no friction.",
    },
    {
      icon: "📋",
      title: "CRM Built for Remodelers",
      desc: "Your own pipeline dashboard with lead cards, estimator briefs, and a full database of every lead — all on auto-pilot, built specifically for remodeling businesses.",
    },
    {
      icon: "📅",
      title: "Automatic Booking",
      desc: "Qualified homeowners book directly on your calendar. No back-and-forth, no manual scheduling.",
    },
    {
      icon: "💰",
      title: "Pay Per Qualified Appointment",
      desc: "No monthly retainer. No risk. You only pay for real, qualified appointments that actually show up.",
    },
    {
      icon: "✅",
      title: "Done For You",
      desc: "We handle the ads, system setup, and integration. You just show up to your calls and close deals.",
    },
  ];

  return (
    <>
      <style>{`
        .oh-fg-section {
          background: #f9f0d9;
          padding: 96px 24px;
          border-top: 1px solid rgba(34,21,13,0.10);
        }
        .oh-fg-inner { max-width: 1120px; margin: 0 auto; }
        .oh-fg-header { text-align: center; max-width: 680px; margin: 0 auto 56px; }
        .oh-fg-eyebrow {
          display: inline-block;
          font-size: 12px; font-weight: 700; color: rgba(34,21,13,0.5);
          letter-spacing: 0.08em; text-transform: uppercase;
          margin-bottom: 14px;
        }
        .oh-fg-title {
          font-size: clamp(28px, 4vw, 40px); font-weight: 900;
          color: #22150d; line-height: 1.15; letter-spacing: -0.02em;
          margin: 0;
        }
        .oh-fg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .oh-fg-card {
          background: #ede4cc;
          border: 1px solid rgba(34,21,13,0.10);
          border-radius: 12px; padding: 28px;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .oh-fg-card:hover {
          border-color: rgba(34,21,13,0.28);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(34,21,13,0.08);
        }
        .oh-fg-icon {
          font-size: 28px; margin-bottom: 16px; display: block;
        }
        .oh-fg-card-title {
          font-size: 16px; font-weight: 800; color: #22150d;
          margin: 0 0 8px; letter-spacing: -0.01em;
        }
        .oh-fg-card-desc {
          font-size: 14px; color: rgba(34,21,13,0.6);
          line-height: 1.65; margin: 0;
        }
        @media (max-width: 900px) {
          .oh-fg-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .oh-fg-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="oh-fg-section" id="features">
        <div className="oh-fg-inner">
          <div className="oh-fg-header">
            <span className="oh-fg-eyebrow">What&apos;s included</span>
            <h2 className="oh-fg-title">
              We Run the Ads. We{" "}
              <span style={{ color: "#22150d" }}>Qualify</span>
              {" "}the Leads.<br />You Close the Jobs.
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(34,21,13,0.55)", lineHeight: 1.6, margin: "16px 0 0", fontWeight: 400 }}>
              Targeted ads, smart lead qualification, and a CRM built for remodelers — all working together to book calls for you automatically.
            </p>
          </div>

          <div className="oh-fg-grid">
            {features.map((f) => (
              <div key={f.title} className="oh-fg-card">
                <span className="oh-fg-icon">{f.icon}</span>
                <h3 className="oh-fg-card-title">{f.title}</h3>
                <p className="oh-fg-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
