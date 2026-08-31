"use client";

import Logo from "../components/logo";
import { BUTTON_PRIMARY, PAGE_BACKGROUND } from "../config/constants";

const NAV_ITEMS = [
  { label: "Dashboard" },
  { label: "Leads", active: true },
  { label: "Appointments" },
  { label: "Ads & Performance" },
  { label: "Form Builder" },
  { label: "Email Assistant" },
  { label: "Knowledge Base" },
  { label: "AI Playground" },
];

const leads = [
  { name: "Pete Lannisport",  sub: "+1(647)964 3925",        project: "Kitchen Renovation", budget: "$100,000–200,000", state: "Ready to Book", hv: true,  date: "3/14/2026", avatarColor: "#3B82F6" },
  { name: "Huey Lewis",       sub: "+1(416)928 3923",        project: "kitchen renovation",  budget: "$65,000",          state: "Qualifying",    hv: false, date: "3/11/2026", avatarColor: "#6366F1" },
  { name: "Margaret Thatch",  sub: "+1(416)509 2939",        project: "Kitchen Renovation", budget: "$50,000–100,000",  state: "Ready to Book", hv: true,  date: "3/8/2026",  avatarColor: "#EC4899" },
  { name: "Martine Webb",     sub: "lawmartin481@gmail.com", project: "kitchen renovation",  budget: "$40,000",          state: "Ready to Book", hv: true,  date: "3/2/2026",  avatarColor: "#8B5CF6" },
  { name: "Alia Alexander",   sub: "+1(647)202 2494",        project: "kitchen remodel",     budget: "$18,000",          state: "Qualifying",    hv: false, date: "3/2/2026",  avatarColor: "#0EA5E9" },
  { name: "Saul Goodman",     sub: "+1(416)827 2844",        project: "Basement Reno",       budget: "$45,000",          state: "Qualifying",    hv: false, date: "3/2/2026",  avatarColor: "#84CC16" },
  { name: "Hector Salamanca", sub: "+1(647)982 4939",        project: "Full kitchen reno",   budget: "$75,000",          state: "Qualifying",    hv: false, date: "3/2/2026",  avatarColor: "#64748B" },
  { name: "Dan Foster",       sub: "danspergler@gmail.com",  project: "Cabinet Refacing",    budget: "$20,000",          state: "Ready to Book", hv: true,  date: "2/25/2026", avatarColor: "#14B8A6" },
];

function StateBadge({ state }: { state: string }) {
  const ready = state === "Ready to Book";
  return (
    <span style={{
      fontSize: 8, fontWeight: 700, padding: "2px 6px", borderRadius: 20,
      background: ready ? "#DBEAFE" : "#FEF9C3",
      color: ready ? "#1D4ED8" : "#92400E",
      whiteSpace: "nowrap",
    }}>{state}</span>
  );
}

function Sidebar() {
  return (
    <div style={{
      width: 128, flexShrink: 0,
      borderRight: "1px solid #E2E8F0",
      background: "#fff",
      display: "flex", flexDirection: "column",
      padding: "0",
      overflow: "hidden",
    }}>
      {/* Logo */}
      <div style={{ padding: "10px 10px 9px", borderBottom: "1px solid #F1F5F9" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div style={{ color: "#4F46E5", flexShrink: 0, display: "flex" }}>
            <Logo className="h-4 w-4" />
          </div>
          <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: "-0.01em" }}>
            <span style={{ color: "#0F172A" }}>Flow</span><span style={{ color: BUTTON_PRIMARY }}>Qualify</span>
          </span>
        </div>
      </div>
      {/* Back arrow */}
      <div style={{ padding: "6px 10px 2px", fontSize: 12, color: "#94A3B8", cursor: "pointer" }}>‹</div>
      {/* Nav items */}
      <div style={{ flex: 1 }}>
        {NAV_ITEMS.map(item => (
          <div key={item.label} style={{
            padding: "6px 10px",
            fontSize: 9.5,
            fontWeight: item.active ? 700 : 400,
            color: item.active ? BUTTON_PRIMARY : "#374151",
            background: item.active ? "rgba(79, 70, 229, 0.06)" : "transparent",
            borderLeft: item.active ? `2px solid ${BUTTON_PRIMARY}` : "2px solid transparent",
            cursor: "pointer",
          }}>
            {item.label}
          </div>
        ))}
      </div>
      {/* Personal */}
      <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 6 }}>
        <div style={{ padding: "2px 10px 4px", fontSize: 7.5, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.07em", textTransform: "uppercase" }}>Personal</div>
        {["Mode: Light", "Settings", "Integrations"].map(item => (
          <div key={item} style={{ padding: "5px 10px", fontSize: 9, color: "#64748B" }}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default function AppPanels() {
  return (
    <>
      <style>{`
        .apnl-section {
          background: ${PAGE_BACKGROUND};
          padding: 80px 24px 40px;
          overflow: hidden;
        }
        .apnl-header {
          text-align: center;
          margin-bottom: 52px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .apnl-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; color: ${BUTTON_PRIMARY}; margin-bottom: 10px;
        }
        .apnl-title {
          font-size: clamp(28px, 3.5vw, 40px); font-weight: 900;
          color: #0F172A; letter-spacing: -0.025em; line-height: 1.15;
          margin: 0 0 12px;
        }
        .apnl-sub { font-size: 16px; color: #64748B; margin: 0; line-height: 1.5; }

        /* Stage — wide enough to show all 3 panels with clear gaps */
        .apnl-stage {
          position: relative;
          width: 1440px;
          height: 630px;
          margin: 0 auto;
        }

        /* Shared panel */
        .apnl-panel {
          position: absolute;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05);
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        /* Left: Lead Details — flat, no angle */
        .apnl-left {
          width: 340px;
          height: 500px;
          left: 0;
          top: 65px;
          z-index: 1;
        }

        /* Center: CRM + Sidebar */
        .apnl-center {
          width: 720px;
          height: 570px;
          left: 360px;
          top: 30px;
          z-index: 3;
        }

        /* Right: Estimator Brief — flat, no angle */
        .apnl-right {
          width: 340px;
          height: 500px;
          right: 0;
          top: 65px;
          z-index: 2;
        }

        .apnl-phead {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 14px; border-bottom: 1px solid #E2E8F0;
          background: #F8FAFC; flex-shrink: 0;
        }

        @media (max-width: 1200px) {
          .apnl-left, .apnl-right { display: none; }
          .apnl-stage { width: 100%; height: 510px; }
          .apnl-center { left: 50%; transform: translateX(-50%); width: min(720px, 96vw); height: 490px; }
        }
        @media (max-width: 740px) {
          .apnl-section { padding: 56px 0 28px; }
          .apnl-stage { height: 420px; }
          .apnl-center { height: 400px; width: 96vw; }
        }
        @media (max-width: 645px) {
          .apnl-stage { display: none; }
          .apnl-section { padding: 56px 24px 48px; }
          .apnl-header { margin-bottom: 0; }
        }
      `}</style>

      <section className="apnl-section">
        <div className="apnl-header">
          <div className="apnl-eyebrow">The Platform</div>
          <h2 className="apnl-title">Every lead, every brief, every booked call —<br />one place.</h2>
          <p className="apnl-sub">
            Running on{" "}
            <span style={{ color: BUTTON_PRIMARY, fontWeight: 700 }}>autopilot</span>
            {" "}while you focus on the work.
          </p>
        </div>

        <div className="apnl-stage">

          {/* ── Left: Ads & Performance ── */}
          <div className="apnl-panel apnl-left" style={{ display: "flex", flexDirection: "column" }}>

            {/* Header */}
            <div style={{ padding: "9px 12px 7px", borderBottom: "1px solid #E2E8F0", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
                <div style={{ fontSize: 11.5, fontWeight: 800, color: "#0F172A", display: "flex", alignItems: "center", gap: 5 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.5"><path d="M3 11v2"/><path d="M18 4s-5 2-10 2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3c5 0 10 2 10 2V4z"/><path d="M18 12.5V16a2 2 0 0 1-2 2h-1l-1-4"/></svg>
                  Ads &amp; Performance
                </div>
                <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                  {["Last 7 Days","Last 30 Days","Last 90 Days"].map((t, i) => (
                    <span key={t} style={{ fontSize: 5.5, fontWeight: i===2?700:500, padding: "2px 4px", borderRadius: 4, background: i===2?"#0F172A":"transparent", color: i===2?"#fff":"#64748B", border: i!==2?"1px solid #E2E8F0":"none", cursor: "pointer", whiteSpace: "nowrap" }}>{t}</span>
                  ))}
                  <span style={{ fontSize: 5.5, fontWeight: 500, padding: "2px 5px", borderRadius: 4, border: "1px solid #E2E8F0", color: "#64748B", cursor: "pointer", whiteSpace: "nowrap" }}>↻ Sync Data</span>
                </div>
              </div>
              <div style={{ fontSize: 7.5, color: "#64748B" }}>What your Meta ads are doing, in plain numbers.</div>
            </div>

            {/* Meta connected row */}
            <div style={{ padding: "5px 12px", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
              <span style={{ fontSize: 7, fontWeight: 700, padding: "2px 6px", borderRadius: 20, background: "#EEF2FF", color: "#4338CA", display: "flex", alignItems: "center", gap: 3 }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4F46E5", display: "inline-block" }} />
                Meta Connected
              </span>
              <span style={{ fontSize: 6, color: "#64748B" }}>Account</span>
              <span style={{ fontSize: 6, fontWeight: 500, color: "#0F172A" }}>239036321720268</span>
              <span style={{ marginLeft: "auto", fontSize: 6, color: "#94A3B8", whiteSpace: "nowrap" }}>Last synced <strong style={{ color: "#0F172A" }}>Just now</strong></span>
            </div>

            {/* Stats 2×2 grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", flexShrink: 0 }}>
              {[
                { label: "Ad Spend",         value: "$3,667.22", delta: "+197%",  sub: "What you spent on Meta ads",          bg: "#FEE2E2", fg: "#DC2626" },
                { label: "Form Submissions",  value: "67",        delta: "+1240%", sub: "Instant-form leads from your ads",     bg: "#DCFCE7", fg: "#16A34A" },
                { label: "Cost Per Form",     value: "$38.19",    delta: "+78%",   sub: "Spend ÷ form submissions",             bg: "#FEE2E2", fg: "#DC2626" },
                { label: "Impressions",       value: "44,065",    delta: "+49%",   sub: "Times your ads were seen",             bg: "#FEE2E2", fg: "#DC2626" },
              ].map((s, i) => (
                <div key={s.label} style={{ padding: "7px 10px", borderRight: i%2===0?"1px solid #F1F5F9":"none", borderBottom: "1px solid #F1F5F9", position: "relative" }}>
                  <span style={{ position: "absolute", top: 5, right: 5, fontSize: 6, fontWeight: 700, padding: "1px 4px", borderRadius: 3, background: s.bg, color: s.fg }}>{s.delta}</span>
                  <div style={{ fontSize: 7, color: "#64748B", marginBottom: 1 }}>{s.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{s.value}</div>
                  <div style={{ fontSize: 6, color: "#94A3B8", marginTop: 1 }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Secondary stats row */}
            <div style={{ padding: "5px 12px", borderBottom: "1px solid #F1F5F9", display: "flex", gap: 6, flexWrap: "wrap", flexShrink: 0 }}>
              {[
                { label: "People reached",    value: "16,876" },
                { label: "Link clicks",       value: "924"    },
                { label: "Click-through rate",value: "2.10%"  },
                { label: "Messaging chats",   value: "61"     },
              ].map(s => (
                <span key={s.label} style={{ fontSize: 6, color: "#64748B", whiteSpace: "nowrap" }}>
                  {s.label} <strong style={{ color: "#0F172A" }}>{s.value}</strong>
                </span>
              ))}
            </div>

            {/* Summary paragraph */}
            <div style={{ padding: "5px 12px", borderBottom: "1px solid #F1F5F9", flexShrink: 0 }}>
              <div style={{ fontSize: 6.5, color: "#374151", lineHeight: 1.55 }}>
                You spent <strong>$3,667.22</strong> on Meta ads this period. Your ads were seen <strong>44,065</strong> times and brought in <strong>67</strong> form submissions at <strong>$38.19</strong> each.
              </div>
            </div>

            {/* Bar chart — Spend & form submissions over time */}
            <div style={{ padding: "7px 12px 6px", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: "#0F172A", marginBottom: 1 }}>Spend &amp; form submissions over time</div>
              <div style={{ fontSize: 6, color: "#64748B", marginBottom: 4 }}>What you spent each day and the form submissions it brought in.</div>
              <svg viewBox="0 0 316 100" style={{ width: "100%", display: "block", flex: 1 }}>
                {/* Y-axis grid + labels (left: $) */}
                {[0,25,50,75,100].map(v => {
                  const y = 88 - (v/100)*78;
                  return <g key={v}>
                    <line x1={28} y1={y} x2={314} y2={y} stroke="#F1F5F9" strokeWidth="0.8"/>
                    <text x={24} y={y+2.5} textAnchor="end" fontSize="5" fill="#94A3B8">${v}</text>
                  </g>;
                })}
                {/* Y-axis right labels (form submissions: 0–4) */}
                {[0,1,2,3,4].map(v => {
                  const y = 88 - (v/4)*78;
                  return <text key={v} x={316} y={y+2.5} textAnchor="start" fontSize="5" fill="#94A3B8">{v}</text>;
                })}
                {/* Bars — 30 daily values roughly matching adsp.png */}
                {[62,48,62,34,28,58,78,42,52,38,50,48,44,52,50,48,54,62,52,65,54,48,51,56,28,65,62,65,62,62].map((h, i) => {
                  const barW = 7.5;
                  const gap = 1.5;
                  const x = 29 + i * (barW + gap);
                  const barH = (h/100)*78;
                  const y = 88 - barH;
                  return <rect key={i} x={x} y={y} width={barW} height={barH} fill="#6366F1" rx="1" opacity="0.85"/>;
                })}
                {/* Form submissions line (right axis, 0–4) */}
                {(() => {
                  const convData = [1,1,1,0,1,2,1,1,2,1,2,1,1,2,1,2,2,1,2,2,2,1,1,2,1,2,2,2,2,2];
                  const pts = convData.map((v, i) => {
                    const barW = 7.5; const gap = 1.5;
                    const cx = 29 + i*(barW+gap) + barW/2;
                    const cy = 88 - (v/4)*78;
                    return `${cx},${cy}`;
                  }).join(" ");
                  const circles = convData.map((v, i) => {
                    const barW = 7.5; const gap = 1.5;
                    return [29 + i*(barW+gap) + barW/2, 88 - (v/4)*78] as [number,number];
                  });
                  return <>
                    <polyline points={pts} fill="none" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    {circles.map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r="1.5" fill="#10B981"/>)}
                  </>;
                })()}
                {/* X-axis labels */}
                <text x={29}  y={97} fontSize="5" fill="#94A3B8">May 29</text>
                <text x={270} y={97} fontSize="5" fill="#94A3B8">Jun 30</text>
              </svg>
              {/* Legend */}
              <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                {[{ c:"#10B981", l:"Form submissions" },{ c:"#6366F1", l:"Spend" }].map(x => (
                  <span key={x.l} style={{ fontSize: 6, color: "#64748B", display: "flex", alignItems: "center", gap: 3 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: x.c, display: "inline-block" }}/>{x.l}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* ── Center: CRM with Sidebar ── */}
          <div className="apnl-panel apnl-center">
            <div style={{ display: "flex", height: "100%" }}>
              <Sidebar />
              {/* Main leads area */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

                {/* Header row */}
                <div style={{ padding: "10px 14px 8px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>Leads</div>
                    <div style={{ fontSize: 8.5, color: "#64748B", marginTop: 1 }}>All contacts and leads for <strong style={{ color: "#0F172A" }}>A &amp; B Renovations</strong></div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ fontSize: 7.5, fontWeight: 600, padding: "3px 7px", borderRadius: 5, border: "1px solid #E2E8F0", color: "#374151", background: "#fff", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 3 }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                      Show Stats
                    </span>
                    <span style={{ fontSize: 7.5, fontWeight: 600, padding: "3px 7px", borderRadius: 5, border: "1px solid #E2E8F0", color: "#374151", background: "#fff", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 3 }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                      Hide Search
                    </span>
                    <span style={{ fontSize: 8, fontWeight: 700, padding: "4px 9px", borderRadius: 5, background: BUTTON_PRIMARY, color: "#fff", whiteSpace: "nowrap", cursor: "pointer" }}>
                      + Create Lead
                    </span>
                  </div>
                </div>

                {/* Search + sort row */}
                <div style={{ padding: "6px 14px", borderBottom: "1px solid #E2E8F0", display: "flex", gap: 6, alignItems: "center" }}>
                  <div style={{ fontSize: 7.5, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>SEARCH</div>
                  <div style={{ flex: 1, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 5, padding: "3px 8px", fontSize: 8.5, color: "#94A3B8", display: "flex", alignItems: "center", gap: 4 }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    Search by name, email, phone, or project...
                  </div>
                  <div style={{ fontSize: 7.5, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>SORT BY</div>
                  <div style={{ fontSize: 8, fontWeight: 600, padding: "3px 7px", borderRadius: 5, border: "1px solid #E2E8F0", color: "#374151", background: "#fff", whiteSpace: "nowrap" }}>Recently Updated ▼</div>
                </div>

                {/* Filter pills row */}
                <div style={{ padding: "5px 14px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ fontSize: 7.5, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.06em", whiteSpace: "nowrap", marginRight: 2 }}>FILTER BY</div>
                  {[
                    { label: "All", bg: "#0F172A", color: "#fff", border: "#0F172A" },
                    { label: "High Value", bg: "#D1FAE5", color: "#065F46", border: "#6EE7B7" },
                    { label: "Ready to Book", bg: "#DBEAFE", color: "#1D4ED8", border: "#93C5FD" },
                    { label: "Qualifying", bg: "#FEF3C7", color: "#92400E", border: "#FCD34D" },
                    { label: "Booked", bg: "#F0FDF4", color: "#166534", border: "#86EFAC" },
                  ].map(f => (
                    <span key={f.label} style={{ fontSize: 7.5, fontWeight: 700, padding: "2px 7px", borderRadius: 20, background: f.bg, color: f.color, border: `1px solid ${f.border}`, whiteSpace: "nowrap", cursor: "pointer" }}>{f.label}</span>
                  ))}
                </div>

                {/* Table header */}
                <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1.4fr 1.3fr 1.2fr 0.8fr 0.4fr", padding: "5px 14px", borderBottom: "1px solid #E2E8F0", background: "#FAFAFA" }}>
                  {["CONTACT", "PROJECT", "BUDGET", "STATE", "UPDATED", ""].map(h => (
                    <span key={h} style={{ fontSize: 7, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.06em" }}>{h}</span>
                  ))}
                </div>

                {/* Table rows */}
                <div style={{ flex: 1, overflow: "hidden" }}>
                  {leads.map((lead, i) => {
                    const initials = lead.name.split(" ").slice(0, 2).map((w: string) => w[0]).join("");
                    return (
                      <div key={i} style={{
                        display: "grid", gridTemplateColumns: "2.2fr 1.4fr 1.3fr 1.2fr 0.8fr 0.4fr",
                        padding: "5px 14px", borderBottom: "1px solid #F1F5F9",
                        background: "#fff", alignItems: "center",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <div style={{ width: 20, height: 20, borderRadius: "50%", background: lead.avatarColor, color: "#fff", fontSize: 7, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, letterSpacing: "0.02em" }}>{initials}</div>
                          <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                              <span style={{ fontSize: 9.5, fontWeight: 700, color: "#0F172A" }}>{lead.name}</span>
                              {lead.hv && <span style={{ fontSize: 6.5, fontWeight: 700, padding: "1px 4px", borderRadius: 3, background: "#D1FAE5", color: "#065F46" }}>High Value</span>}
                            </div>
                            <div style={{ fontSize: 7.5, color: "#64748B", marginTop: 1 }}>{lead.sub}</div>
                          </div>
                        </div>
                        <div style={{ fontSize: 9, color: "#374151" }}>{lead.project}</div>
                        <div style={{ fontSize: 9, color: "#374151" }}>{lead.budget}</div>
                        <div><StateBadge state={lead.state} /></div>
                        <div style={{ fontSize: 8, color: "#94A3B8" }}>{lead.date}</div>
                        <div style={{ display: "flex", gap: 2 }}>
                          {["‹","›"].map(a => (
                            <span key={a} style={{ width: 14, height: 14, borderRadius: 3, border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, color: "#94A3B8", cursor: "pointer" }}>{a}</span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pagination */}
                <div style={{ padding: "6px 14px", borderTop: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FAFAFA" }}>
                  <span style={{ fontSize: 8, color: "#64748B" }}>Showing 1 to {leads.length} of {leads.length} leads</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 8, color: "#64748B" }}>Page 1 of 1</span>
                    <div style={{ display: "flex", gap: 3 }}>
                      {["‹","›"].map(a => (
                        <span key={a} style={{ width: 16, height: 16, borderRadius: 4, border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#94A3B8", cursor: "pointer", background: "#fff" }}>{a}</span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Right: Lead Insights ── */}
          <div className="apnl-panel apnl-right">
            {/* Back + name header */}
            <div style={{ padding: "8px 12px 6px", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ fontSize: 8.5, color: "#94A3B8", cursor: "pointer" }}>← Back to leads</span>
            </div>
            <div style={{ padding: "6px 12px 6px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#3B82F6", color: "#fff", fontSize: 7, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>PL</div>
              <span style={{ fontSize: 11, fontWeight: 800, color: "#0F172A" }}>Pete Lannisport</span>
              <span style={{ fontSize: 7.5, fontWeight: 700, padding: "1px 5px", borderRadius: 4, background: "#F1F5F9", color: "#64748B" }}>Test</span>
            </div>
            {/* Tabs — Insights active */}
            <div style={{ display: "flex", borderBottom: "1px solid #E2E8F0", padding: "0 6px" }}>
              {["Lead Details", "Insights", "Est. Brief", "Appts", "Actions"].map((tab, i) => (
                <span key={tab} style={{
                  fontSize: 8, fontWeight: i === 1 ? 700 : 500, padding: "6px 6px",
                  color: i === 1 ? BUTTON_PRIMARY : "#64748B",
                  borderBottom: i === 1 ? `2px solid ${BUTTON_PRIMARY}` : "2px solid transparent",
                  whiteSpace: "nowrap", cursor: "pointer",
                }}>{tab}</span>
              ))}
            </div>

            {/* Insights body */}
            <div style={{ overflowY: "auto", height: "calc(100% - 90px)", padding: "10px 12px" }}>

              {/* Lead Score */}
              <div style={{ marginBottom: 10, padding: "8px 10px", border: "1px solid #E2E8F0", borderRadius: 8 }}>
                <div style={{ fontSize: 8, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.06em", marginBottom: 6 }}>LEAD SCORE</div>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                  <span style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em" }}>85</span>
                  <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>/100</span>
                  <span style={{ fontSize: 8, fontWeight: 700, padding: "2px 7px", borderRadius: 4, background: "#D1FAE5", color: "#065F46", marginLeft: 2 }}>High</span>
                  <span style={{ fontSize: 7.5, fontWeight: 600, padding: "2px 6px", borderRadius: 4, border: "1px solid #E2E8F0", color: "#374151", marginLeft: "auto", cursor: "pointer" }}>Unmark High Value</span>
                </div>
                {/* Score bar */}
                <div style={{ height: 5, background: "#F1F5F9", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ width: "85%", height: "100%", background: "linear-gradient(90deg, #6366F1, #10B981)", borderRadius: 3 }} />
                </div>
                <p style={{ fontSize: 7.5, color: "#64748B", lineHeight: 1.5, marginTop: 6, marginBottom: 0 }}>
                  This lead scored well — they&apos;re ready to book a kitchen renovation and are located very close to your base, making it easier to service them.
                </p>
              </div>

              {/* Lead Assessment */}
              <div style={{ marginBottom: 10, padding: "8px 10px", border: "1px solid #E2E8F0", borderRadius: 8 }}>
                <div style={{ fontSize: 8, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.06em", marginBottom: 7 }}>LEAD ASSESSMENT</div>
                <div style={{ marginBottom: 7 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
                    <span style={{ fontSize: 8.5, fontWeight: 700, color: "#0F172A" }}>Budget Alignment</span>
                    <span style={{ fontSize: 7.5, fontWeight: 700, padding: "1px 5px", borderRadius: 3, background: "#D1FAE5", color: "#065F46" }}>High</span>
                  </div>
                  <p style={{ fontSize: 7.5, color: "#64748B", margin: 0, lineHeight: 1.5 }}>Budget range $100,000–$200,000 is above the typical renovation range of $35,000–$100,000+.</p>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
                    <span style={{ fontSize: 8.5, fontWeight: 700, color: "#0F172A" }}>Scope Complexity</span>
                    <span style={{ fontSize: 7.5, fontWeight: 700, padding: "1px 5px", borderRadius: 3, background: "#FEF9C3", color: "#92400E" }}>Medium</span>
                  </div>
                  <p style={{ fontSize: 7.5, color: "#64748B", margin: 0, lineHeight: 1.5 }}>Kitchen renovation with layout changes, storage improvements, and functional enhancements.</p>
                </div>
              </div>

              {/* Conversation Insights */}
              <div style={{ padding: "8px 10px", border: "1px solid #E2E8F0", borderRadius: 8 }}>
                <div style={{ fontSize: 8, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.06em", marginBottom: 8 }}>CONVERSATION INSIGHTS</div>

                {[
                  {
                    label: "Project Ideas",
                    tags: ["update cabinets", "add an island", "kitchen renovation"],
                    bg: "#EFF6FF", color: "#1D4ED8", border: "#BFDBFE",
                  },
                  {
                    label: "Preferences",
                    tags: ["modern look", "light shaker cabinets", "low-maintenance materials", "vintage style", "wooden features"],
                    bg: "#F5F3FF", color: "#6D28D9", border: "#DDD6FE",
                  },
                  {
                    label: "Constraints",
                    tags: ["Budget $100k–$200k", "Timeline 1–3 months"],
                    bg: "#FFF7ED", color: "#C2410C", border: "#FED7AA",
                  },
                  {
                    label: "Goals",
                    tags: ["open-up space", "improve flow", "more open kitchen", "modernize kitchen", "improve functionality"],
                    bg: "#F0FDF4", color: "#166534", border: "#BBF7D0",
                  },
                ].map(group => (
                  <div key={group.label} style={{ marginBottom: 8 }}>
                    <div style={{ fontSize: 7.5, fontWeight: 700, color: "#64748B", marginBottom: 4 }}>{group.label}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                      {group.tags.map(tag => (
                        <span key={tag} style={{ fontSize: 7, fontWeight: 600, padding: "2px 6px", borderRadius: 4, background: group.bg, color: group.color, border: `1px solid ${group.border}` }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px solid #F1F5F9" }}>
                  <div style={{ fontSize: 7.5, fontWeight: 700, color: "#64748B", marginBottom: 4 }}>Our Notes</div>
                  <p style={{ fontSize: 7.5, color: "#475569", lineHeight: 1.55, margin: 0 }}>
                    Existing features include cabinets, sink, stove, refrigerator, wooden door, and shelves. Multiple images indicate a consistent vintage aesthetic across different kitchen layouts.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
