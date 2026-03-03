const stats = [
  { value: "50+", label: "Remodelers trust FlowQualify" },
  { value: "12–25", label: "Qualified appointments per month" },
  { value: "<90s", label: "Average response time" },
  { value: "0", label: "Monthly retainer — pay per appointment" },
];

export default function StatsBanner() {
  return (
    <>
      <style>{`
        .oh-sb-section {
          background: #22150d;
          padding: 72px 24px;
        }
        .oh-sb-inner {
          max-width: 1120px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .oh-sb-item {
          text-align: center; padding: 0 24px;
          border-right: 1px solid rgba(249,240,217,0.10);
        }
        .oh-sb-item:last-child { border-right: none; }
        .oh-sb-value {
          font-size: clamp(40px, 5vw, 60px); font-weight: 900;
          color: #FFFF8B; letter-spacing: -0.03em;
          line-height: 1; margin-bottom: 10px; display: block;
        }
        .oh-sb-label {
          font-size: 14px; color: rgba(249,240,217,0.5);
          line-height: 1.5; margin: 0;
        }
        @media (max-width: 768px) {
          .oh-sb-inner { grid-template-columns: repeat(2, 1fr); gap: 40px 0; }
          .oh-sb-item { border-right: none; border-bottom: 1px solid rgba(249,240,217,0.08); padding: 0 0 32px; }
          .oh-sb-item:nth-child(odd) { border-right: 1px solid rgba(249,240,217,0.08); }
          .oh-sb-item:last-child, .oh-sb-item:nth-last-child(2):nth-child(odd) { border-bottom: none; }
        }
        @media (max-width: 480px) {
          .oh-sb-inner { grid-template-columns: 1fr; }
          .oh-sb-item { border-right: none; }
          .oh-sb-item:nth-child(odd) { border-right: none; }
        }
      `}</style>

      <section className="oh-sb-section" id="benchmarks">
        <div className="oh-sb-inner">
          {stats.map((s) => (
            <div key={s.label} className="oh-sb-item">
              <span className="oh-sb-value">{s.value}</span>
              <p className="oh-sb-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
