"use client";

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
  { name: "Jennifer Walsh", sub: "+1(416)509 2939", project: "Kitchen Renovation", budget: "$50,000–100,000", state: "Ready to Book", hv: true, date: "3/2/2026" },
  { name: "Martine Webb", sub: "martine.webb@gmail.com", project: "kitchen renovation", budget: "$40,000", state: "Ready to Book", hv: true, date: "3/2/2026" },
  { name: "David Park", sub: "+1(647)964 3925", project: "Kitchen Renovation", budget: "$100,000–200,000", state: "Ready to Book", hv: true, date: "3/2/2026" },
  { name: "Rachel Kim", sub: "+1(647)202 2494", project: "kitchen remodel", budget: "$18,000", state: "Qualifying", hv: false, date: "3/2/2026" },
  { name: "Michael Torres", sub: "+1(416)928 3923", project: "kitchen renovation", budget: "$65,000", state: "Qualifying", hv: false, date: "3/2/2026" },
  { name: "Sarah Chen", sub: "+1(416)827 2844", project: "Basement Reno", budget: "$45,000", state: "Qualifying", hv: false, date: "3/2/2026" },
  { name: "James Okonkwo", sub: "+1(647)982 4939", project: "Full kitchen reno", budget: "$75,000", state: "Qualifying", hv: false, date: "3/2/2026" },
  { name: "Daniel Foster", sub: "daniel.foster@gmail.com", project: "Cabinet Refacing", budget: "$20,000", state: "Ready to Book", hv: false, date: "2/25/2026" },
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
      <div style={{ padding: "11px 10px 10px", borderBottom: "1px solid #F1F5F9" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div style={{ width: 16, height: 16, borderRadius: 4, background: "rgb(180,83,9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="4" fill="white"/></svg>
          </div>
          <span style={{ fontSize: 10.5, fontWeight: 800, color: "rgb(180,83,9)" }}>FlowQualify</span>
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
            color: item.active ? "rgb(180,83,9)" : "#374151",
            background: item.active ? "rgba(180,83,9,0.06)" : "transparent",
            borderLeft: item.active ? "2px solid rgb(180,83,9)" : "2px solid transparent",
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
          background: #ffffff;
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
          text-transform: uppercase; color: rgb(180,83,9); margin-bottom: 10px;
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
            <span style={{ color: "rgb(180,83,9)", fontWeight: 700 }}>autopilot</span>
            {" "}while you focus on the work.
          </p>
        </div>

        <div className="apnl-stage">

          {/* ── Left: Lead Details ── */}
          <div className="apnl-panel apnl-left">
            <div className="apnl-phead">
              <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>Lead Details</span>
              <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: "#D1FAE5", color: "#065F46" }}>Ready to Book</span>
            </div>
            {/* Tabs */}
            <div style={{ display: "flex", borderBottom: "1px solid #E2E8F0", padding: "0 6px" }}>
              {["Lead Details", "Insights", "Est. Brief", "Appts", "Actions"].map((tab, i) => (
                <span key={tab} style={{
                  fontSize: 8.5, fontWeight: i === 0 ? 700 : 500, padding: "7px 7px",
                  color: i === 0 ? "rgb(180,83,9)" : "#64748B",
                  borderBottom: i === 0 ? "2px solid rgb(180,83,9)" : "2px solid transparent",
                  whiteSpace: "nowrap",
                }}>{tab}</span>
              ))}
            </div>
            <div style={{ overflowY: "auto", height: "calc(100% - 72px)" }}>
              {/* Contact Information — 2-col grid */}
              <div style={{ padding: "12px 14px", borderBottom: "1px solid #F1F5F9" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#0F172A", marginBottom: 9 }}>Contact Information</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px 10px" }}>
                  {[
                    ["First Name", "Jennifer"], ["Last Name", "Walsh"],
                    ["Phone", "+1 (416) 509-2939"], ["Email", "jennifer.walsh@gmail.com"],
                    ["City", "Toronto"], ["Postal Code", "M2M4L9"],
                    ["Assigned To", "Alex B."], ["Lead Source", "Facebook Ad"],
                  ].map(([l, v]) => (
                    <div key={l}>
                      <div style={{ fontSize: 7.5, color: "#94A3B8", fontWeight: 600, marginBottom: 2 }}>{l}</div>
                      <div style={{ fontSize: 9, fontWeight: 600, color: "#0F172A", wordBreak: "break-all" }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8, padding: "5px 8px", background: "#F0FDF4", borderRadius: 5 }}>
                  <span style={{ fontSize: 9.5 }}>📍</span>
                  <span style={{ fontSize: 8.5, color: "#10B981", fontWeight: 600 }}>4.4 km from your base</span>
                </div>
              </div>
              {/* Project Details */}
              <div style={{ padding: "12px 14px", borderBottom: "1px solid #F1F5F9" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#0F172A", marginBottom: 9 }}>Project Details</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px 10px" }}>
                  {[
                    ["Project Type", "Kitchen Renovation"], ["Budget Range", "$50,000–$100,000"],
                    ["Timeline", "Just exploring"], ["Homeowner", "Yes"],
                  ].map(([l, v]) => (
                    <div key={l}>
                      <div style={{ fontSize: 7.5, color: "#94A3B8", fontWeight: 600, marginBottom: 2 }}>{l}</div>
                      <div style={{ fontSize: 9, fontWeight: 600, color: "#0F172A" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Form Data */}
              <div style={{ padding: "12px 14px" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#0F172A", marginBottom: 9 }}>Form Data</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px 10px" }}>
                  {[
                    ["Ad Name", "Kitchen Reno – GTA"], ["Campaign", "Spring 2026"],
                    ["Form Submitted", "3/2/2026"], ["Ad Set", "Toronto Homeowners"],
                  ].map(([l, v]) => (
                    <div key={l}>
                      <div style={{ fontSize: 7.5, color: "#94A3B8", fontWeight: 600, marginBottom: 2 }}>{l}</div>
                      <div style={{ fontSize: 9, fontWeight: 600, color: "#0F172A" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Center: CRM with Sidebar ── */}
          <div className="apnl-panel apnl-center">
            <div style={{ display: "flex", height: "100%" }}>
              <Sidebar />
              {/* Main leads area */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
                {/* Header */}
                <div style={{ padding: "12px 16px", borderBottom: "1px solid #E2E8F0" }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>Leads</div>
                  <div style={{ fontSize: 10, color: "#64748B", marginTop: 2 }}>All contacts and leads for A &amp; B Renovations</div>
                </div>
                {/* Search + filters */}
                <div style={{ padding: "7px 14px", borderBottom: "1px solid #E2E8F0", display: "flex", gap: 7, alignItems: "center" }}>
                  <div style={{ flex: 1, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 6, padding: "4px 10px", fontSize: 9.5, color: "#94A3B8" }}>
                    🔍 Search by name, email, phone, project...
                  </div>
                  {["All States ▼", "Recently Updated ▼"].map(f => (
                    <div key={f} style={{ fontSize: 8.5, fontWeight: 600, padding: "4px 8px", borderRadius: 6, border: "1px solid #E2E8F0", color: "#374151", background: "#fff", whiteSpace: "nowrap" }}>{f}</div>
                  ))}
                </div>
                {/* High value banner */}
                <div style={{ padding: "6px 14px", background: "rgba(16,185,129,0.07)", borderBottom: "1px solid rgba(16,185,129,0.18)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 9.5, color: "#065F46" }}>
                    <strong>High Value Leads</strong> are highlighted in green.
                  </span>
                  <div style={{ display: "flex", gap: 5 }}>
                    {["Show All High Value", "High Value + Ready to Book"].map(btn => (
                      <span key={btn} style={{ fontSize: 7.5, fontWeight: 700, padding: "2px 6px", borderRadius: 4, border: "1px solid #10B981", color: "#065F46", background: "#fff", whiteSpace: "nowrap" }}>{btn}</span>
                    ))}
                  </div>
                </div>
                {/* Table */}
                <div style={{ flex: 1, overflow: "hidden" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1.4fr 1.4fr 1.1fr 0.8fr", padding: "5px 14px", borderBottom: "1px solid #E2E8F0" }}>
                    {["CONTACT", "PROJECT", "BUDGET", "STATE", "UPDATED"].map(h => (
                      <span key={h} style={{ fontSize: 7.5, fontWeight: 700, color: "#94A3B8", letterSpacing: "0.06em" }}>{h}</span>
                    ))}
                  </div>
                  {leads.map((lead, i) => (
                    <div key={i} style={{
                      display: "grid", gridTemplateColumns: "2fr 1.4fr 1.4fr 1.1fr 0.8fr",
                      padding: "7px 14px", borderBottom: "1px solid #F1F5F9",
                      background: lead.hv ? "rgba(16,185,129,0.04)" : "#fff", alignItems: "center",
                    }}>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#0F172A" }}>{lead.name}</div>
                        <div style={{ fontSize: 8, color: "#64748B", marginTop: 1 }}>{lead.sub}</div>
                      </div>
                      <div style={{ fontSize: 9.5, color: "#374151" }}>{lead.project}</div>
                      <div style={{ fontSize: 9.5, color: "#374151" }}>{lead.budget}</div>
                      <div><StateBadge state={lead.state} /></div>
                      <div style={{ fontSize: 8.5, color: "#94A3B8" }}>{lead.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Estimator Brief ── */}
          <div className="apnl-panel apnl-right">
            <div className="apnl-phead">
              <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A" }}>Lead Details</span>
              <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: "#D1FAE5", color: "#065F46" }}>Ready to Book</span>
            </div>
            {/* Tabs — Est. Brief active */}
            <div style={{ display: "flex", borderBottom: "1px solid #E2E8F0", padding: "0 6px" }}>
              {["Lead Details", "Insights", "Est. Brief", "Appts", "Actions"].map((tab, i) => (
                <span key={tab} style={{
                  fontSize: 8.5, fontWeight: i === 2 ? 700 : 500, padding: "7px 7px",
                  color: i === 2 ? "rgb(180,83,9)" : "#64748B",
                  borderBottom: i === 2 ? "2px solid rgb(180,83,9)" : "2px solid transparent",
                  whiteSpace: "nowrap",
                }}>{tab}</span>
              ))}
            </div>
            {/* Brief */}
            <div style={{ padding: "10px 14px 10px", overflowY: "auto", height: "calc(100% - 72px)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#0F172A", display: "flex", alignItems: "center", gap: 5 }}>
                  <span>📋</span> Estimator Brief
                </div>
                <span style={{ fontSize: 8.5, color: "rgb(180,83,9)", fontWeight: 600, cursor: "pointer" }}>Regenerate</span>
              </div>
              <div style={{ fontSize: 8.5, lineHeight: 1.55, color: "#374151" }}>
                <div style={{ fontWeight: 700, color: "#0F172A", marginBottom: 9, fontSize: 9, padding: "6px 8px", background: "#F8FAFC", borderRadius: 5 }}>
                  Estimator Brief — Kitchen Renovation for Jennifer Walsh
                </div>
                {[
                  {
                    title: "1. Location & Contact",
                    items: ["Client: Jennifer Walsh", "Phone: +1 (416) 509-2939", "Email: jennifer.walsh@gmail.com", "City: Toronto, ON  |  Postal: M2M4L9", "📍 4.4 km from your base"],
                  },
                  {
                    title: "2. Project Overview & Goals",
                    items: ["Full kitchen renovation — layout, storage & aesthetics", "Client cooks frequently and needs more functional workspace", "Looking to modernize and increase home value"],
                  },
                  {
                    title: "3. Scope of Work",
                    items: ["Demo existing cabinetry and flooring", "New custom cabinetry + island installation", "Countertop replacement (quartz preferred)", "Backsplash tile + under-cabinet lighting"],
                  },
                  {
                    title: "4. Budget, Timeline & Fit",
                    items: ["Budget: $50,000 – $100,000", "Timeline: Just exploring options (flexible)", "Homeowner: Yes  |  Decision-maker: Yes"],
                  },
                  {
                    title: "5. Key Client Pain Points",
                    items: ["Outdated layout — poor flow between fridge, sink, stove", "Insufficient storage and counter space", "Previous contractor gave inconsistent quotes"],
                  },
                  {
                    title: "6. Competitive Landscape",
                    items: ["Spoken with 1 other contractor (no quote given)", "Found FlowQualify via Facebook ad", "Open to starting within 60–90 days"],
                  },
                  {
                    title: "7. On-Site Game Plan",
                    items: ["Discuss layout frustrations — show before/after examples", "Ask about appliance preferences and storage priorities", "Measure kitchen dimensions and note structural constraints", "Walk through quartz vs. laminate countertop options"],
                  },
                  {
                    title: "8. Follow-Up Strategy",
                    items: ["Send portfolio of similar kitchen renovations within 24 hrs", "Follow up with itemized estimate within 3 business days", "Offer financing options if budget concern arises"],
                  },
                ].map((sec, si) => (
                  <div key={si} style={{ marginBottom: 9, paddingBottom: 9, borderBottom: si < 7 ? "1px solid #F1F5F9" : "none" }}>
                    <div style={{ fontWeight: 700, color: "#0F172A", marginBottom: 4, fontSize: 8.5 }}>{sec.title}</div>
                    {sec.items.map((item, ii) => (
                      <div key={ii} style={{ paddingLeft: 8, marginBottom: 2, color: "#475569", fontSize: 8 }}>— {item}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
