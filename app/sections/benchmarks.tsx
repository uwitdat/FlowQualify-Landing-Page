"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import FlowBackground from "../components/FlowBackground";

/* ─── Shared app-frame shell ────────────────────────────────────── */
function AppFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="pf-app-frame">
      <div className="pf-titlebar">
        <div className="pf-tl pf-tl-r" />
        <div className="pf-tl pf-tl-y" />
        <div className="pf-tl pf-tl-g" />
        <span className="pf-titlebar-label">{label}</span>
      </div>
      {children}
    </div>
  );
}

/* ─── Dashboard Mockup ───────────────────────────────────────────── */
function DashboardMockup() {
  const timePeriods = ["Last 30 Days", "Last 90 Days", "Last 6 Months", "Last Year", "All Time"];
  const statCards = [
    { lbl: "Ready to Book Pipeline Value", val: "$25,000", change: "+100%", sub: "1 lead · Avg: $25,000 · vs Last 31 Days", c: "#A855F7" },
    { lbl: "Bookings This Month",          val: "2",        change: "+100%", sub: "2 total ready to book · vs Last 31 Days",  c: "#EC4899" },
    { lbl: "Qualified Leads",              val: "3",        change: "+100%", sub: "2 in this period · 2 high intent",          c: "#8B5CF6" },
    { lbl: "Avg Response Time",            val: "0.2m",     change: "",      sub: "AI response time",                          c: "#0EA5E9" },
  ];
  return (
    <AppFrame label="Dashboard">
      <div style={{ background: "#fff" }}>

        {/* Page header */}
        <div style={{ padding: "12px 16px 10px", borderBottom: "1px solid #F1F5F9" }}>
          <div style={{ fontSize: "15px", fontWeight: 800, color: "#A855F7", marginBottom: "2px" }}>Dashboard</div>
          <div style={{ fontSize: "9px", color: "#94A3B8" }}>Qualified leads and pipeline overview</div>
        </div>

        {/* Time period chips */}
        <div style={{ padding: "8px 16px", display: "flex", gap: "5px", borderBottom: "1px solid #F1F5F9", overflowX: "auto" as const }}>
          <span style={{ fontSize: "8px", fontWeight: 600, color: "#94A3B8", alignSelf: "center", whiteSpace: "nowrap" as const, marginRight: "2px" }}>Time Period:</span>
          {timePeriods.map((t, i) => (
            <div key={t} style={{ padding: "3px 8px", borderRadius: "999px", fontSize: "9px", fontWeight: 700, whiteSpace: "nowrap" as const, flexShrink: 0, background: i === 0 ? "#A855F7" : "transparent", color: i === 0 ? "#fff" : "#64748B", border: i === 0 ? "none" : "1px solid #E2E8F0" }}>{t}</div>
          ))}
        </div>

        {/* High Value Leads banner */}
        <div style={{ margin: "10px 12px", padding: "10px 12px", border: "1px solid #E2E8F0", borderRadius: "8px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "4px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span style={{ fontSize: "11px" }}>☆</span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#0F172A" }}>High Value Leads</span>
            </div>
            <span style={{ fontSize: "10px", color: "#CBD5E1", cursor: "pointer" }}>✕</span>
          </div>
          <div style={{ fontSize: "9px", color: "#64748B", lineHeight: 1.45, marginBottom: "7px" }}>
            Your best opportunities — leads showing strong buying signals and high conversion potential
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#A855F7" }}>2 high-value leads</span>
            <div style={{ fontSize: "9px", fontWeight: 700, color: "#A855F7", border: "1px solid #DDD6FE", borderRadius: "6px", padding: "2px 8px", cursor: "pointer" }}>View all →</div>
          </div>
        </div>

        {/* Summary banner */}
        <div style={{ margin: "0 12px 10px", padding: "10px 12px", border: "1px solid #E2E8F0", borderRadius: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "3px" }}>
            <span style={{ fontSize: "11px" }}>📊</span>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#0F172A" }}>Summary</span>
          </div>
          <div style={{ fontSize: "9px", color: "#94A3B8", marginBottom: "6px" }}>Overview of your pipeline and performance</div>
          <div style={{ fontSize: "9px", color: "#334155", lineHeight: 1.5 }}>
            You currently have <span style={{ color: "#A855F7", fontWeight: 700 }}>2 leads ready to book</span> worth <span style={{ color: "#A855F7", fontWeight: 700 }}>$25,000</span> in your pipeline. 3 leads moved to qualified this week.
          </div>
        </div>

        {/* 4 stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px", padding: "0 12px 10px" }}>
          {statCards.map(s => (
            <div key={s.lbl} style={{ background: "#F8FAFC", borderRadius: "8px", padding: "9px 8px", border: "1px solid #F1F5F9" }}>
              <div style={{ fontSize: "8px", color: "#64748B", fontWeight: 600, marginBottom: "5px", lineHeight: 1.3 }}>{s.lbl}</div>
              <div style={{ fontSize: "15px", fontWeight: 900, color: s.c, lineHeight: 1 }}>{s.val}</div>
              {s.change && <div style={{ fontSize: "8px", color: "#16A34A", fontWeight: 700, marginTop: "2px" }}>{s.change}</div>}
              <div style={{ fontSize: "7.5px", color: "#94A3B8", marginTop: "2px", lineHeight: 1.3 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Lead Source Report */}
        <div style={{ margin: "0 12px 12px", border: "1px solid #F1F5F9", borderRadius: "8px", overflow: "hidden" }}>
          <div style={{ padding: "8px 12px", borderBottom: "1px solid #F1F5F9" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#0F172A", marginBottom: "2px" }}>Lead Source Report</div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "15px", fontWeight: 900, color: "#0F172A" }}>5</span>
              <span style={{ fontSize: "8px", color: "#16A34A", fontWeight: 700 }}>+100% vs Last 31 Days</span>
            </div>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr", padding: "5px 12px", gap: "4px", borderBottom: "1px solid #F8FAFC" }}>
              {["Total Leads", "Total Values", "Open", "Won", "Win%"].map(h => (
                <div key={h} style={{ fontSize: "7.5px", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase" as const }}>{h}</div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr", padding: "6px 12px", gap: "4px" }}>
              {["5", "$25,000", "5", "0", "0.00%"].map((v, i) => (
                <div key={i} style={{ fontSize: "10px", fontWeight: 600, color: "#334155" }}>{v}</div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </AppFrame>
  );
}

/* ─── Leads Mockup ───────────────────────────────────────────────── */
function LeadsMockup() {
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const leads = [
    { name: "Dan",            sub: "danspergler@gmail.com",  proj: "Cabinet Refacing",   loc: "Maple, Ontario", budget: "$20,000",         budgetNum: 20000,  state: "Ready to Book", highVal: true,  phone: "(416) 382-7741",  email: "danspergler@gmail.com",  address: "12 Birchwood Crt, Maple, ON L6A 2R4",         source: "Facebook Messenger Ad",   created: "Feb 18, 2026", detail: "Dan is looking to reface existing cabinets in his kitchen. Budget confirmed at $20k. Homeowner for 6 years, recently upgraded appliances. Motivated to start within 60 days." },
    { name: "Martine",        sub: "lawmartin481@gmail.com", proj: "Kitchen Renovation", loc: "",               budget: "$130,000",        budgetNum: 130000, state: "Ready to Book", highVal: true,  phone: "(905) 621-4480",  email: "lawmartin481@gmail.com", address: "88 Willow Ridge Rd, Oakville, ON L6J 5T3",    source: "Facebook Messenger Ad",   created: "Feb 20, 2026", detail: "Full kitchen gut renovation. Open to expanding scope if value is clear. Primary decision-maker — husband defers to her. Timeline flexible but prefers Q2 start." },
    { name: "Clavicular",     sub: "—",                      proj: "Kitchen Renovation", loc: "",               budget: "$65,000",         budgetNum: 65000,  state: "Qualifying",    highVal: false, phone: "—",               email: "—",                      address: "—",                                           source: "Facebook Messenger Ad",   created: "Feb 21, 2026", detail: "Still gathering quotes. Interested in open-concept layout. Budget range $60–70k confirmed. Has not yet made a final decision on contractor." },
    { name: "Alia Alexander", sub: "—",                      proj: "Kitchen Remodel",    loc: "",               budget: "$18,000",         budgetNum: 18000,  state: "Qualifying",    highVal: false, phone: "—",               email: "—",                      address: "—",                                           source: "Instagram Messenger Ad",  created: "Feb 22, 2026", detail: "Smaller scope remodel — countertops and backsplash primarily. Budget is firm at $18k. Looking for a fast turnaround, ideally 3–4 weeks." },
    { name: "Duncan",         sub: "—",                      proj: "Basement Reno",      loc: "",               budget: "$45,000",         budgetNum: 45000,  state: "Qualifying",    highVal: false, phone: "—",               email: "—",                      address: "—",                                           source: "Facebook Messenger Ad",   created: "Feb 23, 2026", detail: "Basement finishing project. Wants home office + rec room. Budget $40–50k. Owns the home, no structural concerns flagged. Comparing 2 other contractors." },
    { name: "Pete Lannisport",sub: "+1 (647) 964 3925",      proj: "Kitchen Remodel",    loc: "",               budget: "$45,000 – $55,000",budgetNum: 45000,  state: "Ready to Book", highVal: true,  phone: "(555) 214-8823",  email: "pete@lannisport.com",    address: "1421 Elm Drive, Tampa FL 33602",               source: "Facebook Messenger Ad",   created: "Feb 14, 2026", detail: "High-value full kitchen remodel. Wall removal, quartz countertops, custom cabinetry. Pre-approved financing. Wife is co-decision-maker — both attending consultation." },
  ];

  const handleSort = (col: string) => {
    if (sortCol === col) { setSortDir(d => d === "asc" ? "desc" : "asc"); }
    else { setSortCol(col); setSortDir("asc"); }
  };

  const sortedLeads = [...leads].sort((a, b) => {
    if (!sortCol) return 0;
    const dir = sortDir === "asc" ? 1 : -1;
    if (sortCol === "BUDGET") return (a.budgetNum - b.budgetNum) * dir;
    const map: Record<string, string> = { CONTACT: "name", PROJECT: "proj", STATE: "state" };
    const key = map[sortCol] as keyof typeof a;
    return String(a[key]).localeCompare(String(b[key])) * dir;
  });

  const stateStyle = (s: string) =>
    s === "Ready to Book" ? { bg: "#DBEAFE", color: "#1D4ED8" } : { bg: "#FEF3C7", color: "#92400E" };

  const sortIcon = (col: string) => {
    if (sortCol !== col) return <span style={{ opacity: 0.3, marginLeft: "2px" }}>↕</span>;
    return <span style={{ color: "#8B5CF6", marginLeft: "2px" }}>{sortDir === "asc" ? "↑" : "↓"}</span>;
  };

  const sel = selectedIdx !== null ? sortedLeads[selectedIdx] : null;
  const detailTabs = ["Lead Details", "Insights", "Estimator Brief", "Appointments", "Actions", "Photos", "Conversation"];

  return (
    <AppFrame label="Leads">
      <div style={{ height: "440px", display: "flex", flexDirection: "column" as const, background: "#fff" }}>

        {sel ? (
          /* ── Lead Detail View ── */
          <>
            {/* Back bar */}
            <div style={{ padding: "7px 12px", borderBottom: "1px solid #F1F5F9", background: "#F8FAFC", display: "flex", alignItems: "center", gap: "8px" }}>
              <button onClick={() => setSelectedIdx(null)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", fontSize: "9px", fontWeight: 700, color: "#8B5CF6", padding: 0 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                Back to Leads
              </button>
              <span style={{ fontSize: "9px", color: "#CBD5E1" }}>·</span>
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#0F172A" }}>{sel.name}</span>
              <span style={{ marginLeft: "auto", display: "inline-block", background: stateStyle(sel.state).bg, color: stateStyle(sel.state).color, fontSize: "7.5px", fontWeight: 700, padding: "2px 7px", borderRadius: "999px", whiteSpace: "nowrap" as const }}>{sel.state}</span>
            </div>

            {/* Tab bar — Lead Details active, others decorative */}
            <div style={{ display: "flex", borderBottom: "1px solid #E2E8F0", background: "#F8FAFC", overflowX: "auto" as const, scrollbarWidth: "none" as const }}>
              {detailTabs.map(t => (
                <div key={t} style={{ padding: "7px 9px", fontSize: "8.5px", fontWeight: t === "Lead Details" ? 800 : 500, color: t === "Lead Details" ? "#8B5CF6" : "#CBD5E1", borderBottom: t === "Lead Details" ? "2px solid #8B5CF6" : "2px solid transparent", flexShrink: 0, whiteSpace: "nowrap" as const, cursor: "default", userSelect: "none" as const }}>{t}</div>
              ))}
            </div>

            {/* Lead Details content */}
            <div style={{ padding: "12px 14px", overflowY: "auto" as const, flex: 1 }}>
              {/* Header card */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", background: "#F5F3FF", borderRadius: "10px", border: "1px solid #EDE9FE", marginBottom: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #A855F7, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 900, color: "#fff", flexShrink: 0 }}>
                    {sel.name.split(" ").map((w: string) => w[0]).slice(0,2).join("")}
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 800, color: "#0F172A" }}>{sel.name}</div>
                    <div style={{ fontSize: "9px", color: "#64748B", marginTop: "1px" }}>{sel.proj}</div>
                  </div>
                </div>
                <div style={{ background: stateStyle(sel.state).bg, color: stateStyle(sel.state).color, fontSize: "8px", fontWeight: 700, padding: "3px 9px", borderRadius: "999px", whiteSpace: "nowrap" as const }}>{sel.state}</div>
              </div>

              {/* Info rows */}
              <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "8px", overflow: "hidden", marginBottom: "10px" }}>
                {([
                  ["PHONE",   (sel as {phone: string}).phone],
                  ["EMAIL",   (sel as {email: string}).email],
                  ["ADDRESS", (sel as {address: string}).address],
                  ["BUDGET",  sel.budget],
                  ["PROJECT", sel.proj],
                  ["SOURCE",  (sel as {source: string}).source],
                  ["CREATED", (sel as {created: string}).created],
                ] as [string, string][]).map(([label, val], i, arr) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 12px", borderBottom: i < arr.length - 1 ? "1px solid #F1F5F9" : "none" }}>
                    <span style={{ fontSize: "7.5px", fontWeight: 700, color: "#94A3B8", letterSpacing: "0.06em", flexShrink: 0, marginRight: "8px" }}>{label}</span>
                    <span style={{ fontSize: "9.5px", color: "#334155", textAlign: "right" as const }}>{val || "—"}</span>
                  </div>
                ))}
              </div>

              {/* Qualifying Notes */}
              <div style={{ borderRadius: "7px", border: "1px solid #EDE9FE", overflow: "hidden" }}>
                <div style={{ background: "#F5F3FF", padding: "4px 10px" }}>
                  <span style={{ fontSize: "8.5px", fontWeight: 800, color: "#8B5CF6" }}>Qualifying Notes</span>
                </div>
                <div style={{ padding: "6px 10px", background: "#fff", fontSize: "9.5px", color: "#334155", lineHeight: 1.6 }}>
                  {sel.detail}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* ── List View ── */
          <>
            {/* Page header */}
            <div style={{ padding: "11px 14px 8px", borderBottom: "1px solid #F1F5F9", flexShrink: 0 }}>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "#0F172A", marginBottom: "1px" }}>Leads</div>
              <div style={{ fontSize: "9px", color: "#94A3B8" }}>All contacts and leads for A &amp; B Renovations</div>
            </div>

            {/* Search bar */}
            <div style={{ padding: "8px 12px", borderBottom: "1px solid #F1F5F9", flexShrink: 0 }}>
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "6px", padding: "5px 10px", fontSize: "9.5px", color: "#94A3B8", display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                Search by name, email, phone, project...
              </div>
            </div>

            {/* Filter dropdowns */}
            <div style={{ padding: "6px 12px", borderBottom: "1px solid #F1F5F9", display: "flex", gap: "6px", flexShrink: 0 }}>
              {["All States ▾", "Recently Updated ▾"].map(f => (
                <div key={f} style={{ fontSize: "9px", fontWeight: 600, color: "#334155", border: "1px solid #E2E8F0", borderRadius: "6px", padding: "4px 9px", cursor: "pointer" }}>{f}</div>
              ))}
            </div>

            {/* High Value banner */}
            <div style={{ margin: "6px 12px", padding: "6px 10px", background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", flexShrink: 0 }}>
              <div style={{ fontSize: "9px", color: "#334155" }}>
                <span style={{ color: "#16A34A", fontWeight: 700 }}>High Value Leads</span> are highlighted in green.
              </div>
              <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
                <div style={{ fontSize: "8px", fontWeight: 700, color: "#16A34A", border: "1px solid #16A34A", borderRadius: "5px", padding: "2px 6px", whiteSpace: "nowrap" as const }}>Show All High Value</div>
                <div style={{ fontSize: "8px", fontWeight: 700, color: "#fff", background: "#A855F7", borderRadius: "5px", padding: "2px 6px", whiteSpace: "nowrap" as const }}>High Value + Ready to Book</div>
              </div>
            </div>

            {/* Column headers — sortable */}
            <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1.6fr 1.4fr 1.4fr 1.1fr", padding: "5px 12px", gap: "4px", borderBottom: "1px solid #F1F5F9", flexShrink: 0 }}>
              {["CONTACT", "PROJECT", "BUDGET", "STATE", "UPDATED"].map(h => (
                <div
                  key={h}
                  onClick={["CONTACT","PROJECT","BUDGET","STATE"].includes(h) ? () => handleSort(h) : undefined}
                  style={{ fontSize: "7.5px", fontWeight: 700, color: sortCol === h ? "#8B5CF6" : "#94A3B8", letterSpacing: "0.06em", cursor: ["CONTACT","PROJECT","BUDGET","STATE"].includes(h) ? "pointer" : "default", userSelect: "none" as const, display: "flex", alignItems: "center" }}
                >
                  {h}{["CONTACT","PROJECT","BUDGET","STATE"].includes(h) && sortIcon(h)}
                </div>
              ))}
            </div>

            {/* Lead rows — clickable contact name */}
            <div style={{ overflowY: "auto" as const, flex: 1 }}>
              {sortedLeads.map((l, i) => {
                const st = stateStyle(l.state);
                return (
                  <div
                    key={i}
                    onClick={() => { setHasInteracted(true); setSelectedIdx(i); }}
                    style={{
                      display: "grid", gridTemplateColumns: "2.2fr 1.6fr 1.4fr 1.4fr 1.1fr",
                      padding: "7px 12px", gap: "4px", alignItems: "center",
                      borderBottom: i < sortedLeads.length - 1 ? "1px solid #F8FAFC" : "none",
                      borderLeft: l.highVal ? "2.5px solid #22C55E" : "2.5px solid transparent",
                      background: l.highVal ? "#F0FDF4" : "#fff",
                      cursor: "pointer",
                      transition: "background 0.1s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = l.highVal ? "#DCFCE7" : "#F8FAFC")}
                    onMouseLeave={e => (e.currentTarget.style.background = l.highVal ? "#F0FDF4" : "#fff")}
                  >
                    <div>
                      <div style={{ fontSize: "10.5px", fontWeight: 700, color: "#8B5CF6", display: "flex", alignItems: "center" }}>
                        {l.name}
                        {i === 0 && !hasInteracted && <span className="pf-pulse"><span className="pf-pulse-ring"/><span className="pf-pulse-core"/></span>}
                      </div>
                      <div style={{ fontSize: "8.5px", color: "#94A3B8", marginTop: "1px" }}>{l.sub}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", color: "#334155" }}>{l.proj}</div>
                      {l.loc && <div style={{ fontSize: "8.5px", color: "#94A3B8", marginTop: "1px" }}>{l.loc}</div>}
                    </div>
                    <div style={{ fontSize: "10px", fontWeight: 600, color: "#0F172A" }}>{l.budget}</div>
                    <div>
                      <div style={{ display: "inline-block", background: st.bg, color: st.color, fontSize: "8px", fontWeight: 700, padding: "2px 7px", borderRadius: "999px", whiteSpace: "nowrap" as const }}>{l.state}</div>
                    </div>
                    <div style={{ fontSize: "8.5px", color: "#94A3B8" }}>2/25/2026</div>
                  </div>
                );
              })}
            </div>
          </>
        )}

      </div>
    </AppFrame>
  );
}

/* ─── Estimator Brief Mockup (interactive tabs) ──────────────────── */
function EstimatorBriefMockup() {
  const [activeTab, setActiveTab] = useState("Estimator Brief");
  const [hasInteracted, setHasInteracted] = useState(false);
  const tabs = ["Lead Details", "Insights", "Estimator Brief", "Appointments", "Actions", "Photos", "Conversation"];

  const sections = [
    {
      num: 1, title: "Location & Contact",
      content: "Pete Lannisport · (555) 214-8823 · pete@lannisport.com\n1421 Elm Drive, Tampa FL 33602 · Owner-occupied single-family home. Lived there 11 years. Wife is primary decision-maker on design — both will be at the consultation.",
    },
    {
      num: 2, title: "Project Overview & Goals",
      content: "Full kitchen remodel. Wants wall between kitchen and living room removed for open-concept layout. Priorities: quartz countertops, soft-close cabinetry, new island with seating for 4. Appliances not included — has new ones already. Inspired by modern farmhouse aesthetic.",
    },
    {
      num: 3, title: "Budget / Timeline / Fit",
      content: "Confirmed budget: $45,000–$55,000. Would stretch to $60k for the right scope. Financing pre-approved through their bank. Wants to start April 2025 and complete before summer. Strong fit — motivated, clear vision, realistic budget.",
    },
    {
      num: 4, title: "Risks / Unknowns / Red Flags",
      content: "Collecting 3 competing bids — one already received from local GC at $38k (likely low-ball). Wall removal may require structural engineer sign-off before final scope is locked. Verify cabinet lead times (12–14 wks) against April start target.",
    },
    {
      num: 5, title: "On-Site Game Plan",
      content: "Measure existing island footprint and wall opening. Bring quartz slab samples (white/cream tones preferred). Confirm permit requirements for wall removal before leaving. Address the $38k competitor bid directly — highlight timeline risk and material quality gap.",
    },
  ];

  const insightGroups = [
    {
      label: "Project Ideas", color: "#EC4899", bg: "#FDF2F8", border: "#FBCFE8",
      pills: ["update cabinets", "add an island", "kitchen renovation"],
    },
    {
      label: "Preferences", color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE",
      pills: ["modern look", "light shaker cabinets", "flat-panel cabinets", "low-maintenance materials", "vintage style"],
    },
    {
      label: "Pain Points", color: "#EF4444", bg: "#FEF2F2", border: "#FECACA",
      pills: ["layout feels cramped", "not very functional", "kitchen is tight", "storage isn't great", "outdated cabinets and appliances"],
    },
    {
      label: "Constraints", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A",
      pills: ["budget of $45,000–$55,000", "timeline of 1–3 months"],
    },
    {
      label: "Goals", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0",
      pills: ["open up space", "improve flow", "more open kitchen", "modernize kitchen", "easier to work in"],
    },
  ];

  const photos = [
    {
      label: "1/3", src: "/basic3.png",
      notes: "Open layout with good bones — peninsula functional but dated. Raised-panel cream cabinets and laminate counters prime for full replacement. Tile floor in fair condition.\nCandidate for: cabinet replacement, quartz countertops, LVP flooring, pendant lighting update",
    },
    {
      label: "2/3", src: "/basic4.png",
      notes: "6-burner gas range — keep or upgrade hood. Laminate counters showing wear, backsplash is basic tile. Cabinets structurally sound but dated.\nCandidate for: quartz countertop, subway tile backsplash, cabinet refacing",
    },
    {
      label: "3/3", src: "/basic5.png",
      notes: "Sink area with good natural light. Double basin + dated faucet. Dishwasher functional. Strong candidate for undermount sink + faucet upgrade with countertop replacement.\nApprox area: ~180 sq ft total",
    },
  ];

  const messages = [
    { from: "lead", name: "Pete Lannisport",  text: "Hello I saw your ad and was looking for a kitchen quote.", time: "11:05 PM" },
    { from: "bot",  name: "A&B Renovations",  text: "Hi Pete! Thanks for reaching out. I'm here to help you figure out what's possible for your space. What's the main thing that's been bothering you about your kitchen?", time: "11:05 PM" },
    { from: "lead", name: "Pete Lannisport",  text: "The layout just feels cramped and not functional. Storage is a mess and it's hard to move around when I'm cooking.", time: "11:07 PM" },
    { from: "bot",  name: "A&B Renovations",  text: "That's one of the most common things we hear — and totally fixable. Are you thinking a full remodel (new cabinets, counters, layout changes) or more of a refresh?", time: "11:07 PM" },
    { from: "lead", name: "Pete Lannisport",  text: "Probably a full remodel. The cabinets are old and the countertops are worn. I'd love a more open feel if possible.", time: "11:08 PM" },
    { from: "bot",  name: "A&B Renovations",  text: "Got it. Opening up the layout usually means looking at whether any walls can come down — do you know if there's a wall between your kitchen and dining/living area?", time: "11:08 PM" },
    { from: "lead", name: "Pete Lannisport",  text: "Yeah there's a half wall. I've always wanted to remove it but wasn't sure if it was possible.", time: "11:09 PM" },
    { from: "bot",  name: "A&B Renovations",  text: "That's exactly what an on-site visit is for — we'd check if it's load-bearing and walk you through options. Do you have a rough timeline in mind? Are you looking to start this spring or more flexible?", time: "11:09 PM" },
    { from: "lead", name: "Pete Lannisport",  text: "Ideally spring. We have family coming in July so it would be great to have it done by then.", time: "11:10 PM" },
    { from: "bot",  name: "A&B Renovations",  text: "July is doable if we get started on scope and permits by April. Do you have a budget range in mind? Even a rough ballpark helps us tailor the right options.", time: "11:10 PM" },
    { from: "lead", name: "Pete Lannisport",  text: "Somewhere around $45k–$55k. Maybe a bit more if the wall removal and open concept is worth it.", time: "11:11 PM" },
    { from: "bot",  name: "A&B Renovations",  text: "That's a solid range for what you're describing — full cabinet replacement, new countertops, and an open-concept layout can absolutely be done in that budget. One more thing: do you own the home?", time: "11:11 PM" },
    { from: "lead", name: "Pete Lannisport",  text: "Yes, been here 11 years. My wife and I are both on the deed.", time: "11:12 PM" },
    { from: "bot",  name: "A&B Renovations",  text: "Perfect — and will she be involved in the design decisions? We like to make sure everyone who'll be signing off is at the consultation.", time: "11:12 PM" },
    { from: "lead", name: "Pete Lannisport",  text: "Definitely, she's actually more excited about this than I am haha. She has a whole Pinterest board ready.", time: "11:13 PM" },
    { from: "bot",  name: "A&B Renovations",  text: "Love it — bring the Pinterest board! That actually helps us a lot. I have everything I need to put together a pre-visit brief for our estimator. You'll get a call to schedule the consultation shortly. Looking forward to it!", time: "11:13 PM" },
  ];

  return (
    <AppFrame label="Lead Details">
      <div style={{ height: "420px", display: "flex", flexDirection: "column" as const }}>
      {/* Tab bar */}
      <div style={{ display: "flex", borderBottom: "1px solid #E2E8F0", background: "#F8FAFC", overflowX: "auto" as const, scrollbarWidth: "none" as const }}>
        {tabs.map((t) => {
          const active = t === activeTab;
          return (
            <div
              key={t}
              onClick={() => { setHasInteracted(true); setActiveTab(t); }}
              style={{
                padding: "8px 10px", fontSize: "9px", fontWeight: active ? 800 : 600,
                color: active ? "#7C3AED" : "#94A3B8", whiteSpace: "nowrap" as const,
                borderBottom: active ? "2px solid #7C3AED" : "2px solid transparent",
                flexShrink: 0, cursor: "pointer", userSelect: "none" as const,
                transition: "color 0.15s",
              }}
            >{t}{t === "Conversation" && <span style={{ marginLeft: "4px", background: "#7C3AED", color: "#fff", fontSize: "7px", fontWeight: 800, borderRadius: "999px", padding: "0px 4px" }}>16</span>}{t === "Insights" && !hasInteracted && <span className="pf-pulse" style={{ verticalAlign: "middle" }}><span className="pf-pulse-ring"/><span className="pf-pulse-core"/></span>}</div>
          );
        })}
      </div>

      {/* ── ESTIMATOR BRIEF tab ── */}
      {activeTab === "Estimator Brief" && (
        <div style={{ padding: "12px 14px", background: "#fff", overflowY: "auto" as const, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
              </svg>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#0F172A" }}>Estimator Brief</span>
            </div>
            <span style={{ fontSize: "9px", fontWeight: 700, color: "#7C3AED", cursor: "pointer" }}>↺ Regenerate</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", background: "#F5F3FF", borderRadius: "8px", border: "1px solid #DDD6FE", marginBottom: "10px" }}>
            <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "linear-gradient(135deg, #A855F7, #EC4899)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 900, color: "#fff", flexShrink: 0 }}>PL</div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#0F172A" }}>Pete Lannisport</div>
              <div style={{ fontSize: "9px", color: "#64748B" }}>Kitchen Remodel · <span style={{ color: "#16A34A", fontWeight: 700 }}>Ready to Book</span></div>
            </div>
          </div>
          {sections.map((s) => (
            <div key={s.num} style={{ marginBottom: "8px", borderRadius: "8px", border: "1px solid #EDE9FE", overflow: "hidden" }}>
              <div style={{ background: "#F5F3FF", padding: "5px 10px" }}>
                <span style={{ fontSize: "9px", fontWeight: 800, color: "#7C3AED", letterSpacing: "0.01em" }}>
                  Section {s.num}: {s.title}
                </span>
              </div>
              <div style={{ padding: "7px 10px", background: "#fff" }}>
                <p style={{ fontSize: "10px", color: "#334155", margin: 0, lineHeight: 1.6, whiteSpace: "pre-line" as const }}>{s.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── INSIGHTS tab ── */}
      {activeTab === "Insights" && (
        <div style={{ padding: "12px 14px", background: "#fff", overflowY: "auto" as const, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#0F172A" }}>Conversation Insights</span>
            <span style={{ fontSize: "9px", color: "#94A3B8" }}>Updated 2/25/2026</span>
          </div>
          {insightGroups.map((g) => (
            <div key={g.label} style={{ marginBottom: "10px" }}>
              <div style={{ fontSize: "9px", fontWeight: 800, color: g.color, letterSpacing: "0.05em", marginBottom: "5px" }}>{g.label}</div>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "4px" }}>
                {g.pills.map((p) => (
                  <span key={p} style={{ fontSize: "9px", fontWeight: 600, color: g.color, background: g.bg, border: `1px solid ${g.border}`, borderRadius: "999px", padding: "2px 8px", whiteSpace: "nowrap" as const }}>{p}</span>
                ))}
              </div>
            </div>
          ))}
          <div style={{ marginTop: "4px", paddingTop: "10px", borderTop: "1px solid #F1F5F9" }}>
            <div style={{ fontSize: "9px", fontWeight: 800, color: "#64748B", letterSpacing: "0.05em", marginBottom: "5px" }}>AI Notes</div>
            {[
              "Existing features: cabinets, sink, stove, refrigerator, wooden door, and shelves.",
              "Multiple photos suggest a consistent vintage aesthetic preference across kitchen layouts.",
            ].map((note, i) => (
              <div key={i} style={{ fontSize: "9.5px", color: "#334155", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "6px", padding: "5px 8px", marginBottom: "4px", lineHeight: 1.5 }}>{note}</div>
            ))}
          </div>
          <div style={{ marginTop: "6px", paddingTop: "10px", borderTop: "1px solid #F1F5F9" }}>
            <div style={{ fontSize: "9px", fontWeight: 800, color: "#64748B", letterSpacing: "0.05em", marginBottom: "8px" }}>Contractor Notes</div>
            <div style={{ textAlign: "center" as const, padding: "12px 0" }}>
              <div style={{ fontSize: "10px", color: "#94A3B8" }}>No contractor notes yet</div>
              <div style={{ fontSize: "9px", color: "#CBD5E1", marginTop: "2px" }}>Add notes in the Actions tab</div>
            </div>
          </div>
        </div>
      )}

      {/* ── LEAD DETAILS tab ── */}
      {activeTab === "Lead Details" && (
        <div style={{ padding: "12px 14px", background: "#fff", overflowY: "auto" as const, flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", background: "#F5F3FF", borderRadius: "10px", border: "1px solid #DDD6FE", marginBottom: "12px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #A855F7, #EC4899)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 900, color: "#fff", flexShrink: 0 }}>PL</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "12px", fontWeight: 800, color: "#0F172A" }}>Pete Lannisport</div>
              <div style={{ fontSize: "9px", color: "#64748B", marginTop: "1px" }}>Kitchen Remodel</div>
            </div>
            <div style={{ background: "#DCFCE7", color: "#15803D", fontSize: "9px", fontWeight: 800, padding: "3px 9px", borderRadius: "999px" }}>Ready to Book</div>
          </div>
          {[
            { label: "Phone", val: "(555) 214-8823" },
            { label: "Email", val: "pete@lannisport.com" },
            { label: "Address", val: "1421 Elm Drive, Tampa FL 33602" },
            { label: "Budget", val: "$45,000 – $55,000" },
            { label: "Project", val: "Full Kitchen Remodel" },
            { label: "Source", val: "Facebook Messenger Ad" },
            { label: "Created", val: "Feb 14, 2026" },
          ].map(({ label, val }) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "6px 0", borderBottom: "1px solid #F8FAFC" }}>
              <span style={{ fontSize: "9px", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase" as const, letterSpacing: "0.06em", flexShrink: 0, paddingRight: "8px" }}>{label}</span>
              <span style={{ fontSize: "10px", fontWeight: 600, color: "#334155", textAlign: "right" as const }}>{val}</span>
            </div>
          ))}
        </div>
      )}

      {/* ── ACTIONS tab ── */}
      {activeTab === "Actions" && (
        <div style={{ padding: "12px 14px", background: "#fff", overflowY: "auto" as const, flex: 1 }}>
          <div style={{ fontSize: "11px", fontWeight: 800, color: "#0F172A", marginBottom: "10px" }}>AI Controls</div>
          {/* AI Status */}
          <div style={{ border: "1px solid #E2E8F0", borderRadius: "8px", padding: "10px 12px", marginBottom: "8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#0F172A", marginBottom: "3px" }}>AI Status</div>
              <div style={{ fontSize: "9px", color: "#16A34A", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ fontSize: "8px" }}>✦</span> AI is responding
              </div>
            </div>
            <div style={{ fontSize: "9px", fontWeight: 700, color: "#D97706", border: "1px solid #D97706", padding: "4px 10px", borderRadius: "6px", cursor: "pointer" }}>⊘ Take Over</div>
          </div>
          {/* Change Lead State */}
          <div style={{ border: "1px solid #E2E8F0", borderRadius: "8px", padding: "10px 12px", marginBottom: "8px" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, color: "#0F172A", marginBottom: "2px" }}>Change Lead State</div>
            <div style={{ fontSize: "8px", color: "#94A3B8", marginBottom: "8px" }}>Manually move this lead to a different stage. This will pause AI responses.</div>
            <div style={{ display: "flex", gap: "6px" }}>
              <div style={{ fontSize: "9px", fontWeight: 700, color: "#D97706", border: "1px solid #D97706", padding: "4px 10px", borderRadius: "6px", cursor: "pointer" }}>← Qualifying</div>
              <div style={{ fontSize: "9px", fontWeight: 700, color: "#16A34A", border: "1px solid #16A34A", padding: "4px 10px", borderRadius: "6px", cursor: "pointer" }}>→ Booked/Won</div>
            </div>
          </div>
          {/* Contractor note */}
          <div style={{ border: "1px solid #E2E8F0", borderRadius: "8px", padding: "10px 12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "2px" }}>
              <span style={{ fontSize: "10px" }}>💬</span>
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#0F172A" }}>Have you talked to Pete Lannisport?</span>
            </div>
            <div style={{ fontSize: "8px", color: "#94A3B8", marginBottom: "8px" }}>Fill us in on what you discussed outside of FlowQualify</div>
            <div style={{ fontSize: "8.5px", color: "#64748B", marginBottom: "3px", fontWeight: 600 }}>What did you discuss?</div>
            <div style={{ border: "1px solid #E2E8F0", borderRadius: "6px", padding: "8px", height: "38px", marginBottom: "8px", fontSize: "8.5px", color: "#CBD5E1" }}>e.g., Discussed pricing, timeline, concerns, next steps...</div>
            <div style={{ fontSize: "8.5px", color: "#64748B", marginBottom: "3px", fontWeight: 600 }}>Date of conversation</div>
            <div style={{ border: "1px solid #E2E8F0", borderRadius: "6px", padding: "5px 8px", marginBottom: "8px", fontSize: "9px", color: "#334155" }}>2026-02-26</div>
            <div style={{ fontSize: "9px", fontWeight: 700, color: "#fff", background: "#A855F7", padding: "5px 12px", borderRadius: "6px", display: "inline-block", cursor: "pointer" }}>Save Note</div>
          </div>
        </div>
      )}

      {/* ── PHOTOS tab ── */}
      {activeTab === "Photos" && (
        <div style={{ padding: "10px 12px", background: "#fff", overflowY: "auto" as const, flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "#0F172A" }}>Photos &amp; AI Analysis</span>
            <span style={{ fontSize: "9px", color: "#94A3B8" }}>3 photos</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
            {photos.map((p, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: "8px", alignItems: "flex-start" }}>
                <div style={{ position: "relative" as const, borderRadius: "6px", overflow: "hidden", flexShrink: 0 }}>
                  <img src={p.src} alt={`Kitchen photo ${p.label}`} style={{ width: "110px", height: "78px", objectFit: "cover" as const, display: "block" }} />
                  <div style={{ position: "absolute" as const, top: "4px", right: "4px", background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: "7px", fontWeight: 700, padding: "1px 5px", borderRadius: "999px" }}>{p.label}</div>
                </div>
                <div style={{ fontSize: "7.5px", color: "#334155", lineHeight: 1.5, background: "#F8FAFC", padding: "7px 8px", borderRadius: "6px", border: "1px solid #F1F5F9" }}>
                  <span style={{ fontWeight: 700, color: "#0F172A", display: "block", marginBottom: "3px" }}>Estimator notes:</span>
                  <span style={{ whiteSpace: "pre-line" as const }}>{p.notes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── CONVERSATION tab ── */}
      {activeTab === "Conversation" && (
        <div style={{ padding: "12px 14px", background: "#fff", overflowY: "auto" as const, flex: 1 }}>
          <div style={{ fontSize: "11px", fontWeight: 800, color: "#0F172A", marginBottom: "10px" }}>Conversation History</div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "6px" }}>
            {messages.map((m, i) => {
              const isBot = m.from === "bot";
              return (
                <div key={i} style={{ display: "flex", flexDirection: "column" as const, alignItems: isBot ? "flex-start" : "flex-end" }}>
                  <div style={{ fontSize: "7.5px", color: "#94A3B8", marginBottom: "2px", paddingLeft: isBot ? "2px" : 0, paddingRight: isBot ? 0 : "2px" }}>
                    {m.name} · {m.time}
                  </div>
                  <div style={{
                    maxWidth: "82%", padding: "7px 9px", borderRadius: isBot ? "4px 10px 10px 10px" : "10px 4px 10px 10px",
                    background: isBot ? "#F5F3FF" : "#EFF6FF",
                    border: isBot ? "1px solid #EDE9FE" : "1px solid #BFDBFE",
                    fontSize: "9px", color: "#334155", lineHeight: 1.5,
                  }}>{m.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── APPOINTMENTS tab ── */}
      {activeTab === "Appointments" && (
        <div style={{ padding: "40px 14px", background: "#fff", textAlign: "center" as const }}>
          <div style={{ fontSize: "18px", marginBottom: "6px" }}>📅</div>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#0F172A", marginBottom: "3px" }}>Appointments</div>
          <div style={{ fontSize: "9px", color: "#94A3B8" }}>No appointments scheduled yet for this lead.</div>
        </div>
      )}

      </div>
    </AppFrame>
  );
}

/* ─── Knowledge Base Mockup ──────────────────────────────────────── */
function KnowledgeBaseMockup() {
  const [openDoc, setOpenDoc] = useState<number | null>(null);
  const [showFileExplorer, setShowFileExplorer] = useState(false);

  const docs = [
    {
      name: "FAQ",
      desc: "Prospect ↔ Contractor Q&A",
      tag: "FAQ",
      tagColor: "#7C3AED", tagBg: "#F5F3FF",
      icon: "💬",
      content: (
        <div>
          <div style={{ fontSize: "11px", fontWeight: 800, color: "#7C3AED", letterSpacing: "0.05em", marginBottom: "12px" }}>📘 FlowQualify — Prospect ↔ Contractor FAQ</div>
          {[
            { q: "Do you offer free estimates?", a: "We usually start with a quick review of your project details first. That lets us confirm whether we're a good fit and give you a realistic sense of what's involved before scheduling a site visit." },
            { q: "Can you give me a ballpark price before coming out?", a: "Yes — once we understand the scope, photos of the space, and your general budget expectations, we can usually share a rough range so you know what to expect before anyone visits." },
            { q: "Why do you need photos before an estimate?", a: "Photos help us understand access, layout, existing conditions, and complexity. That saves time for both of us and helps avoid surprises once we're on site." },
            { q: "I'm just exploring ideas right now. Is that okay?", a: "Absolutely. We work with homeowners at different stages. Knowing whether this is early planning or something you're hoping to move on soon helps us guide you properly." },
            { q: "Why do you ask about budget so early?", a: "Budget helps us confirm alignment and recommend realistic options. It doesn't lock you into a number — it just prevents wasted time on ideas that may not be feasible." },
            { q: "What affects the cost of a remodel the most?", a: "Scope complexity, layout changes, plumbing or electrical work, material selections, access, and existing conditions all play a role. We review these factors before giving guidance." },
            { q: "Do you handle permits?", a: "That depends on the project and location. We'll review what's required once we understand the scope and local regulations." },
            { q: "What happens after I submit my project details?", a: "We review everything internally, confirm alignment, and then follow up with next steps. If anything important is missing, we may ask one or two clarifying questions." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "10px", borderRadius: "8px", border: "1px solid #EDE9FE", overflow: "hidden" }}>
              <div style={{ background: "#F5F3FF", padding: "6px 10px", fontSize: "9px", fontWeight: 700, color: "#7C3AED" }}>Q: {item.q}</div>
              <div style={{ background: "#fff", padding: "6px 10px", fontSize: "9px", color: "#334155", lineHeight: 1.6 }}>A: {item.a}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      name: "Material Preferences & Standards",
      desc: "Flooring, countertops, cabinets",
      tag: "Standards",
      tagColor: "#0284C7", tagBg: "#E0F2FE",
      icon: "🪵",
      content: (
        <div>
          {[
            {
              title: "1. Flooring", color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE",
              items: [
                { label: "LVP", detail: "Kitchens, basements, rentals · 8mm min, 20mil wear layer · floating click-lock · Durable, waterproof, cost-effective" },
                { label: "Tile", detail: "Bathrooms, laundry · 12×24 porcelain min · epoxy grout preferred · Long-lasting, great for wet areas" },
                { label: "Hardwood", detail: "Main floor living areas · engineered ½\"+ · white oak preferred · Highest-end look, not for moisture-heavy areas" },
              ],
            },
            {
              title: "2. Countertops", color: "#0284C7", bg: "#EFF6FF", border: "#BFDBFE",
              items: [
                { label: "Quartz (Primary)", detail: "Whites/creams, light veining · 3cm, eased or beveled edge · Durable, low maintenance, modern look" },
                { label: "Granite (Alternate)", detail: "Lighter tones only · polished finish · Great natural stone option, requires annual sealing" },
              ],
            },
            {
              title: "3. Cabinets", color: "#C026D3", bg: "#FDF4FF", border: "#F0ABFC",
              items: [
                { label: "Shaker (Primary)", detail: "5-piece solid-wood · clean & modern · works for 90% of remodels" },
                { label: "Slab (Modern)", detail: "MDF core with veneer or laminate · minimalist aesthetic" },
              ],
            },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: "12px", border: `1px solid ${section.border}`, borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ background: section.bg, padding: "6px 10px", fontSize: "9.5px", fontWeight: 800, color: section.color }}>{section.title}</div>
              {section.items.map((item, i) => (
                <div key={i} style={{ padding: "6px 10px", borderTop: `1px solid ${section.border}`, background: "#fff" }}>
                  <div style={{ fontSize: "9px", fontWeight: 700, color: "#0F172A", marginBottom: "2px" }}>{item.label}</div>
                  <div style={{ fontSize: "8.5px", color: "#64748B", lineHeight: 1.5 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ),
    },
    {
      name: "Pricing Guidelines",
      desc: "Ballpark ranges by project type",
      tag: "Pricing",
      tagColor: "#16A34A", tagBg: "#F0FDF4",
      icon: "💰",
      content: (
        <div>
          {[
            {
              title: "Kitchen Remodels", color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0",
              ranges: [
                { label: "Light cosmetic updates", val: "$20k – $40k" },
                { label: "Full renovation (no layout change)", val: "$40k – $70k" },
                { label: "Full renovation with structural changes", val: "$70k – $120k+" },
              ],
            },
            {
              title: "Bathroom Remodels", color: "#0284C7", bg: "#EFF6FF", border: "#BFDBFE",
              ranges: [
                { label: "Small bath refresh", val: "$12k – $25k" },
                { label: "Full remodel", val: "$25k – $45k" },
                { label: "Layout move / plumbing relocation", val: "$35k – $60k+" },
              ],
            },
            {
              title: "Basement Renovations", color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE",
              ranges: [
                { label: "Basic finish", val: "$30k – $50k" },
                { label: "Full finish with bathroom", val: "$50k – $90k" },
                { label: "Complex layouts", val: "$90k – $150k+" },
              ],
            },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: "10px", border: `1px solid ${section.border}`, borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ background: section.bg, padding: "6px 10px", fontSize: "9.5px", fontWeight: 800, color: section.color }}>{section.title}</div>
              {section.ranges.map((r, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 10px", borderTop: `1px solid ${section.border}`, background: "#fff" }}>
                  <span style={{ fontSize: "9px", color: "#334155" }}>{r.label}</span>
                  <span style={{ fontSize: "9px", fontWeight: 800, color: section.color, whiteSpace: "nowrap" as const }}>{r.val}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ),
    },
    {
      name: "Qualification Rules",
      desc: "Budget, timeline & scope scoring",
      tag: "Rules",
      tagColor: "#D97706", tagBg: "#FFFBEB",
      icon: "✅",
      content: (
        <div>
          <div style={{ marginBottom: "10px", borderRadius: "8px", border: "1px solid #FDE68A", overflow: "hidden" }}>
            <div style={{ background: "#FFFBEB", padding: "6px 10px", fontSize: "9.5px", fontWeight: 800, color: "#D97706" }}>1. Budget Alignment</div>
            {[
              { project: "Kitchen", rows: [["$30k+", "High Fit ✓", "#16A34A"], ["$20k–$30k", "Acceptable", "#D97706"], ["Under $20k", "Low Fit ✗", "#DC2626"]] },
              { project: "Bathroom", rows: [["$15k+", "High Fit ✓", "#16A34A"], ["$10k–$15k", "Acceptable", "#D97706"], ["Under $10k", "Low Fit ✗", "#DC2626"]] },
            ].map((p) => (
              <div key={p.project} style={{ borderTop: "1px solid #FDE68A", padding: "6px 10px", background: "#fff" }}>
                <div style={{ fontSize: "8.5px", fontWeight: 700, color: "#0F172A", marginBottom: "4px" }}>{p.project} Projects</div>
                {p.rows.map(([range, label, color], i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: "8.5px", marginBottom: "2px" }}>
                    <span style={{ color: "#475569" }}>{range}</span>
                    <span style={{ fontWeight: 700, color: color as string }}>{label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ marginBottom: "10px", borderRadius: "8px", border: "1px solid #BBF7D0", overflow: "hidden" }}>
            <div style={{ background: "#F0FDF4", padding: "6px 10px", fontSize: "9.5px", fontWeight: 800, color: "#16A34A" }}>2. Timeline Fit</div>
            {[
              { priority: "High Priority", color: "#16A34A", examples: ["ASAP", "Within 2–6 weeks", "Ready to choose a contractor"] },
              { priority: "Medium Priority", color: "#D97706", examples: ["In the next 2–3 months", "Finalizing ideas, want to talk now"] },
            ].map((t) => (
              <div key={t.priority} style={{ borderTop: "1px solid #BBF7D0", padding: "6px 10px", background: "#fff" }}>
                <div style={{ fontSize: "8.5px", fontWeight: 700, color: t.color, marginBottom: "3px" }}>{t.priority}</div>
                {t.examples.map((e, i) => <div key={i} style={{ fontSize: "8px", color: "#475569", marginBottom: "1px" }}>· {e}</div>)}
              </div>
            ))}
          </div>
          <div style={{ borderRadius: "8px", border: "1px solid #FECACA", overflow: "hidden" }}>
            <div style={{ background: "#FEF2F2", padding: "6px 10px", fontSize: "9.5px", fontWeight: 800, color: "#DC2626" }}>3. Scope Red Flags — Do Not Book</div>
            <div style={{ padding: "6px 10px", background: "#fff" }}>
              {["Just wants a quote over text", "Won't send photos or details", "No clear idea of the project", "Just price shopping"].map((f, i) => (
                <div key={i} style={{ fontSize: "8.5px", color: "#DC2626", marginBottom: "2px" }}>✗ {f}</div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Company Workflow Overview",
      desc: "5-step process from discovery to build",
      tag: "Workflow",
      tagColor: "#475569", tagBg: "#F1F5F9",
      icon: "🗂️",
      content: (
        <div>
          {[
            { step: 1, title: "Discovery Call", duration: "5–10 min", desc: "Quick review of scope, goals, budget, and timing. Confirm this is a good fit before investing more time." },
            { step: 2, title: "Site Visit", duration: "60–90 min", desc: "In-home walkthrough, measurements, and confirmation of all project details on-site." },
            { step: 3, title: "Estimate / Proposal", duration: "3–7 days", desc: "Detailed proposal delivered. Timeline depends on project complexity and scope." },
            { step: 4, title: "Contract & Deposit", duration: "", desc: "10–30% deposit required depending on project scope. Contract signed before any work begins." },
            { step: 5, title: "Construction", duration: "Varies", desc: "Timeline depends on materials, trades, and permitting. Updates provided throughout the build." },
          ].map((s, i, arr) => (
            <div key={s.step} style={{ display: "flex", gap: "10px", marginBottom: i < arr.length - 1 ? "8px" : "0" }}>
              <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#7C3AED", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 900, color: "#fff", flexShrink: 0 }}>{s.step}</div>
                {i < arr.length - 1 && <div style={{ width: "1px", flex: 1, background: "#DDD6FE", marginTop: "3px" }} />}
              </div>
              <div style={{ paddingBottom: i < arr.length - 1 ? "8px" : "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 800, color: "#0F172A" }}>{s.title}</span>
                  {s.duration && <span style={{ fontSize: "8px", color: "#7C3AED", fontWeight: 600, background: "#F5F3FF", padding: "1px 6px", borderRadius: "999px" }}>{s.duration}</span>}
                </div>
                <div style={{ fontSize: "8.5px", color: "#64748B", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      <AppFrame label="Knowledge Base">
        <div style={{ padding: "12px 14px", background: "#fff" }}>
          {/* Upload zone */}
          <div
            onClick={() => setShowFileExplorer(true)}
            style={{ border: "2px dashed #DDD6FE", borderRadius: "10px", padding: "14px 16px", textAlign: "center" as const, marginBottom: "10px", background: "#FAF8FF", cursor: "pointer", transition: "border-color 0.15s, background 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#A78BFA"; (e.currentTarget as HTMLDivElement).style.background = "#F0EBFF"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#DDD6FE"; (e.currentTarget as HTMLDivElement).style.background = "#FAF8FF"; }}
          >
            <div style={{ fontSize: "18px", marginBottom: "4px" }}>☁️</div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#7C3AED" }}>Drop files to train assistant</div>
            <div style={{ fontSize: "9px", color: "#94A3B8", marginTop: "2px" }}>PDF, DOCX, TXT — changes apply instantly</div>
          </div>

          {/* Document list */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "5px" }}>
            {docs.map((d, i) => (
              <div
                key={i}
                onClick={() => setOpenDoc(i)}
                style={{
                  display: "flex", alignItems: "center", padding: "8px 10px", borderRadius: "8px",
                  background: "#F8FAFC", gap: "10px", border: "1px solid #EDE9FE",
                  cursor: "pointer", transition: "background 0.12s ease, border-color 0.12s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#F5F3FF"; (e.currentTarget as HTMLDivElement).style.borderColor = "#C4B5FD"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#F8FAFC"; (e.currentTarget as HTMLDivElement).style.borderColor = "#EDE9FE"; }}
              >
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: d.tagBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>{d.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "10.5px", fontWeight: 700, color: "#0F172A", whiteSpace: "nowrap" as const, overflow: "hidden", textOverflow: "ellipsis" }}>{d.name}</div>
                  <div style={{ fontSize: "8.5px", color: "#94A3B8", marginTop: "1px" }}>{d.desc}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                  <div style={{ background: "#DCFCE7", color: "#15803D", fontSize: "8px", fontWeight: 800, padding: "2px 7px", borderRadius: "999px" }}>✓ Active</div>
                  <div style={{ fontSize: "9px", color: "#C4B5FD" }}>›</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppFrame>

      {/* File Explorer Modal */}
      {showFileExplorer && (
        <div
          onClick={() => setShowFileExplorer(false)}
          style={{ position: "fixed" as const, inset: 0, zIndex: 1000, background: "rgba(15,23,42,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "480px", boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)", overflow: "hidden" }}
          >
            {/* Titlebar */}
            <div style={{ background: "#F1F5F9", padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #E2E8F0" }}>
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFBD2E" }} />
              <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28CA41" }} />
              <span style={{ fontSize: "11px", fontWeight: 600, color: "#64748B", marginLeft: "8px" }}>Open</span>
            </div>
            {/* Toolbar */}
            <div style={{ padding: "8px 14px", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex", gap: "4px" }}>
                {["←", "→"].map(a => <div key={a} style={{ width: "22px", height: "22px", borderRadius: "5px", background: "#F8FAFC", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "#94A3B8" }}>{a}</div>)}
              </div>
              <div style={{ flex: 1, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "6px", padding: "4px 10px", fontSize: "9.5px", color: "#64748B" }}>📁 Documents / FlowQualify</div>
            </div>
            {/* Sidebar + files */}
            <div style={{ display: "flex", height: "280px" }}>
              {/* Sidebar */}
              <div style={{ width: "120px", borderRight: "1px solid #F1F5F9", background: "#FAFAFA", padding: "10px 8px", flexShrink: 0 }}>
                {[{ icon: "🖥", label: "Desktop" }, { icon: "📁", label: "Documents" }, { icon: "⬇️", label: "Downloads" }, { icon: "🔖", label: "FlowQualify" }].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "5px 6px", borderRadius: "5px", marginBottom: "2px", background: item.label === "FlowQualify" ? "#EDE9FE" : "transparent", cursor: "pointer" }}>
                    <span style={{ fontSize: "11px" }}>{item.icon}</span>
                    <span style={{ fontSize: "9px", fontWeight: item.label === "FlowQualify" ? 700 : 500, color: item.label === "FlowQualify" ? "#7C3AED" : "#475569" }}>{item.label}</span>
                  </div>
                ))}
              </div>
              {/* File grid */}
              <div style={{ flex: 1, padding: "12px", overflowY: "auto" as const }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                  {[
                    { icon: "📄", name: "FAQ.pdf", size: "38 KB" },
                    { icon: "📄", name: "Material_Standards.docx", size: "22 KB" },
                    { icon: "📄", name: "Pricing_Guide.pdf", size: "15 KB" },
                    { icon: "📄", name: "Qualification_Rules.pdf", size: "8 KB" },
                    { icon: "📄", name: "Workflow_Overview.docx", size: "12 KB" },
                    { icon: "📄", name: "Brand_Voice.pdf", size: "19 KB" },
                  ].map((f, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", padding: "8px 4px", borderRadius: "8px", border: "1px solid transparent", cursor: "pointer", transition: "background 0.1s, border-color 0.1s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#F5F3FF"; (e.currentTarget as HTMLDivElement).style.borderColor = "#DDD6FE"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; (e.currentTarget as HTMLDivElement).style.borderColor = "transparent"; }}
                    >
                      <span style={{ fontSize: "28px", marginBottom: "4px" }}>{f.icon}</span>
                      <span style={{ fontSize: "7.5px", fontWeight: 600, color: "#0F172A", textAlign: "center" as const, lineHeight: 1.3, wordBreak: "break-word" as const }}>{f.name}</span>
                      <span style={{ fontSize: "7px", color: "#94A3B8", marginTop: "2px" }}>{f.size}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Bottom bar */}
            <div style={{ padding: "10px 14px", borderTop: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FAFAFA" }}>
              <div style={{ fontSize: "9px", color: "#94A3B8" }}>6 items · PDF, DOCX supported</div>
              <div style={{ display: "flex", gap: "6px" }}>
                <button onClick={() => setShowFileExplorer(false)} style={{ fontSize: "10px", fontWeight: 600, color: "#64748B", background: "#F1F5F9", border: "1px solid #E2E8F0", borderRadius: "6px", padding: "5px 12px", cursor: "pointer" }}>Cancel</button>
                <button onClick={() => setShowFileExplorer(false)} style={{ fontSize: "10px", fontWeight: 700, color: "#fff", background: "#7C3AED", border: "none", borderRadius: "6px", padding: "5px 14px", cursor: "pointer" }}>Upload</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Doc content Modal */}
      {openDoc !== null && (
        <div
          onClick={() => setOpenDoc(null)}
          style={{
            position: "fixed" as const, inset: 0, zIndex: 1000,
            background: "rgba(15,23,42,0.45)", display: "flex",
            alignItems: "center", justifyContent: "center", padding: "24px",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "520px",
              maxHeight: "75vh", display: "flex", flexDirection: "column" as const,
              boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
            }}
          >
            {/* Modal header */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 18px", borderBottom: "1px solid #F1F5F9", flexShrink: 0 }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: docs[openDoc].tagBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>{docs[openDoc].icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "13px", fontWeight: 800, color: "#0F172A" }}>{docs[openDoc].name}</div>
                <div style={{ fontSize: "10px", color: "#94A3B8", marginTop: "1px" }}>{docs[openDoc].desc}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ background: docs[openDoc].tagBg, color: docs[openDoc].tagColor, fontSize: "9px", fontWeight: 700, padding: "2px 8px", borderRadius: "999px" }}>{docs[openDoc].tag}</span>
                <button
                  onClick={() => setOpenDoc(null)}
                  style={{ background: "#F1F5F9", border: "none", borderRadius: "6px", width: "26px", height: "26px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "#64748B", flexShrink: 0 }}
                >✕</button>
              </div>
            </div>
            {/* Modal body */}
            <div style={{ overflowY: "auto" as const, padding: "16px 18px", flex: 1 }}>
              {docs[openDoc].content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─── Ad Management Mockup ───────────────────────────────────────── */
function AdManagementMockup() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const campaigns = [
    {
      name: "Kitchen Messenger – Broad", status: "Active", spend: "$1,380", msgs: 118, leads: 31, cpl: "$44.52",
      reach: "44.2k", impressions: "93.8k", convRate: "26.3%", costPerMsg: "$11.69",
      audience: "Homeowners 35–54 · ♀ 62%", budget: "$46/day",
      topAd: "Dream Your Kitchen — Our Team Makes It Real",
      topAdBody: "Get matched with top-rated kitchen remodelers near you. Free estimates, no pressure.",
      spendBars: [70, 85, 100, 79, 92, 88, 95],
    },
    {
      name: "Bath Reno – Lookalike", status: "Active", spend: "$1,040", msgs: 89, leads: 23, cpl: "$45.22",
      reach: "39.6k", impressions: "76.1k", convRate: "25.8%", costPerMsg: "$11.69",
      audience: "Bath Interest Lookalike · ♀ 58%", budget: "$35/day",
      topAd: "Local Bath Remodelers — Free Estimate This Week",
      topAdBody: "Trusted local contractors, transparent pricing. Book your free consultation today.",
      spendBars: [60, 72, 68, 75, 85, 80, 78],
    },
    {
      name: "High Intent Retarget", status: "Active", spend: "$540", msgs: 62, leads: 15, cpl: "$36.00",
      reach: "9.1k", impressions: "23.4k", convRate: "24.2%", costPerMsg: "$8.71",
      audience: "Site Visitors 45–54 · Mixed", budget: "$18/day",
      topAd: "Dream Kitchen. No Upfront Cost.",
      topAdBody: "Finally get the kitchen you've been waiting for. See prices & availability from top local remodelers.",
      spendBars: [55, 60, 70, 58, 72, 68, 65],
    },
    {
      name: "New Homeowners 35–55", status: "Active", spend: "$240", msgs: 38, leads: 6, cpl: "$40.00",
      reach: "20.8k", impressions: "33.5k", convRate: "15.8%", costPerMsg: "$6.32",
      audience: "New Homeowners 35–55 · ♀ 55%", budget: "$8/day",
      topAd: "Welcome to the Neighborhood — Kitchen Upgrade?",
      topAdBody: "Settle in with a kitchen you love. See what top local remodelers can do for your new home.",
      spendBars: [30, 38, 42, 35, 40, 36, 44],
    },
  ];

  const topStats = [
    { label: "Total Spend",    val: "$3,200" },
    { label: "Conversations",  val: "307",    blue: true },
    { label: "Qualified Leads",val: "75"      },
    { label: "Avg CPL",        val: "$42.67"  },
  ];

  const sel = selectedIdx !== null ? campaigns[selectedIdx] : null;

  return (
    <AppFrame label="Ad Manager">
      <div style={{ background: "#fff", height: "380px", overflowY: "auto" as const }}>

        {/* Page header */}
        <div style={{ padding: "12px 16px 10px", borderBottom: "1px solid #F1F5F9" }}>
          <div style={{ fontSize: "15px", fontWeight: 800, color: "#8B5CF6", marginBottom: "2px" }}>Ad Manager</div>
          <div style={{ fontSize: "9px", color: "#94A3B8" }}>Facebook &amp; Instagram · Messenger Campaigns · Last 30 Days</div>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px", padding: "10px 12px", borderBottom: "1px solid #F1F5F9" }}>
          {topStats.map(s => (
            <div key={s.label} style={{ background: "#F5F3FF", borderRadius: "8px", padding: "8px 7px", border: "1px solid #DDD6FE" }}>
              <div style={{ fontSize: "7.5px", color: "#64748B", fontWeight: 600, marginBottom: "3px", lineHeight: 1.3 }}>{s.label}</div>
              <div style={{ fontSize: "14px", fontWeight: 900, color: (s as {label:string;val:string;blue?:boolean}).blue ? "#7C3AED" : "#8B5CF6" }}>{s.val}</div>
            </div>
          ))}
        </div>

        {/* Campaign table header */}
        <div style={{ display: "grid", gridTemplateColumns: "2.8fr 1.2fr 1fr 0.8fr 0.8fr 1fr", padding: "5px 12px", gap: "4px", borderBottom: "1px solid #F1F5F9" }}>
          {["CAMPAIGN", "STATUS", "SPEND", "MSGS", "LEADS", "CPL"].map(h => (
            <div key={h} style={{ fontSize: "7px", fontWeight: 700, color: h === "MSGS" ? "#7C3AED" : "#94A3B8", letterSpacing: "0.06em" }}>{h}</div>
          ))}
        </div>

        {/* Campaign rows — clickable */}
        {campaigns.map((c, i) => {
          const isSelected = selectedIdx === i;
          return (
            <div
              key={i}
              onClick={() => { setHasInteracted(true); setSelectedIdx(isSelected ? null : i); }}
              style={{
                display: "grid", gridTemplateColumns: "2.8fr 1.2fr 1fr 0.8fr 0.8fr 1fr",
                padding: "7px 12px", gap: "4px", alignItems: "center",
                borderBottom: i < campaigns.length - 1 ? "1px solid #F8FAFC" : "none",
                borderLeft: isSelected ? "2.5px solid #8B5CF6" : "2.5px solid transparent",
                background: isSelected ? "#F5F3FF" : "transparent",
                cursor: "pointer",
                transition: "background 0.15s ease, border-color 0.15s ease",
              }}
            >
              <div style={{ fontSize: "9.5px", fontWeight: 700, color: isSelected ? "#8B5CF6" : "#0F172A", lineHeight: 1.3, display: "flex", alignItems: "center" }}>
                {c.name}
                {i === 0 && !hasInteracted && <span className="pf-pulse"><span className="pf-pulse-ring"/><span className="pf-pulse-core"/></span>}
              </div>
              <div>
                <span style={{ fontSize: "8px", fontWeight: 700, padding: "2px 6px", borderRadius: "999px", whiteSpace: "nowrap" as const, background: "#DCFCE7", color: "#15803D" }}>
                  ● Active
                </span>
              </div>
              <div style={{ fontSize: "9.5px", fontWeight: 600, color: "#334155" }}>{c.spend}</div>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#7C3AED" }}>{c.msgs}</div>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#8B5CF6" }}>{c.leads}</div>
              <div style={{ fontSize: "9.5px", fontWeight: 600, color: "#334155" }}>{c.cpl}</div>
            </div>
          );
        })}

        {/* Bottom panel — campaign detail or default top ad */}
        <div style={{ margin: "8px 12px 12px", padding: "10px 12px", border: "1px solid #DDD6FE", borderRadius: "8px", background: sel ? "#FAF8FF" : "#F5F3FF", transition: "background 0.2s ease" }}>
          {sel ? (
            <>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "8.5px", fontWeight: 800, color: "#8B5CF6", letterSpacing: "0.04em" }}>
                  CAMPAIGN DETAIL · {sel.name.toUpperCase()}
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedIdx(null); }}
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: "10px", color: "#94A3B8", padding: "0 2px", lineHeight: 1 }}
                >✕</button>
              </div>

              {/* 4 mini metrics */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px", marginBottom: "8px" }}>
                {([["Reach", sel.reach], ["Impressions", sel.impressions], ["Conv Rate", sel.convRate], ["Cost/Msg", sel.costPerMsg]] as [string,string][]).map(([label, val]) => (
                  <div key={label} style={{ background: "#fff", borderRadius: "5px", padding: "5px 6px", border: "1px solid #DDD6FE" }}>
                    <div style={{ fontSize: "6.5px", color: "#64748B", fontWeight: 600, marginBottom: "2px" }}>{label}</div>
                    <div style={{ fontSize: "10px", fontWeight: 800, color: label === "Conv Rate" ? "#16A34A" : "#8B5CF6" }}>{val}</div>
                  </div>
                ))}
              </div>

              {/* Audience + budget */}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", padding: "5px 7px", background: "#fff", borderRadius: "5px", border: "1px solid #E2E8F0" }}>
                <span style={{ fontSize: "8px", color: "#64748B" }}>👥 {sel.audience}</span>
                <span style={{ fontSize: "8px", color: "#64748B", fontWeight: 600 }}>💰 {sel.budget}</span>
              </div>

              {/* 7-day spend chart */}
              <div style={{ marginBottom: "8px" }}>
                <div style={{ fontSize: "6.5px", color: "#94A3B8", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "4px" }}>7-DAY SPEND</div>
                <div style={{ display: "flex", gap: "3px", alignItems: "flex-end", height: "22px" }}>
                  {sel.spendBars.map((pct, j) => (
                    <div key={j} style={{ flex: 1, background: `rgba(139,92,246,${0.45 + j * 0.07})`, borderRadius: "2px 2px 0 0", height: `${pct}%` }} />
                  ))}
                </div>
                <div style={{ display: "flex", marginTop: "2px" }}>
                  {["M","T","W","T","F","S","S"].map((d, j) => (
                    <div key={j} style={{ flex: 1, fontSize: "6px", color: "#CBD5E1", textAlign: "center" as const }}>{d}</div>
                  ))}
                </div>
              </div>

              {/* Top creative */}
              <div style={{ padding: "6px 8px", background: "#fff", borderRadius: "5px", border: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: "6.5px", color: "#94A3B8", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "3px" }}>TOP CREATIVE</div>
                <div style={{ fontSize: "9.5px", fontWeight: 700, color: "#0F172A", marginBottom: "2px" }}>{sel.topAd}</div>
                <div style={{ fontSize: "8px", color: "#64748B", lineHeight: 1.4 }}>{sel.topAdBody}</div>
              </div>
            </>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "7px" }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#8B5CF6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <span style={{ fontSize: "9px", fontWeight: 800, color: "#8B5CF6" }}>Top Ad · High Intent Retarget</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "6px", background: "linear-gradient(135deg, #A855F7, #7C3AED)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#0F172A", lineHeight: 1.3, marginBottom: "3px" }}>Dream Kitchen. No Upfront Cost.</div>
                  <div style={{ fontSize: "8.5px", color: "#64748B", lineHeight: 1.4 }}>Finally get the kitchen you&apos;ve been waiting for. See prices &amp; availability from top local remodelers — fast &amp; free.</div>
                  <div style={{ marginTop: "5px" }}>
                    <span style={{ fontSize: "8px", color: "#8B5CF6", fontWeight: 700 }}>CPL $36 · CTR 7.8% · 15 leads</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "8px", fontSize: "8px", color: "#94A3B8", textAlign: "center" as const }}>
                ↑ Click any campaign row to see full details
              </div>
            </>
          )}
        </div>

      </div>
    </AppFrame>
  );
}

/* ─── Feature rows data ──────────────────────────────────────────── */
const rows = [
  {
    tag: "Ad Management",
    tagColor: "#1a6b8a",
    tagBg: "#E0F4FA",
    tagBorder: "#7EBFD0",
    tagGlow: "26,107,138",
    checkBg: "#CCEAF3",
    checkStroke: "#1a6b8a",
    ctaColor: "#1a6b8a",
    headline: <>Ads That Bring In<br />Booked Jobs, Not Just Clicks</>,
    desc: <>Fully managed Facebook &amp; Instagram <strong>Messenger campaigns</strong> — every ad click opens a conversation, not a form.<span style={{ display: "block", marginTop: "8px" }}><strong>Leads are pre-qualified &amp; engaged in chat</strong> before they ever reach your calendar.</span></>,
    bullets: [
      "Hyper-targeted audiences built around in-market homeowners in your service area",
      "Ad creative and copy optimized for cost-per-lead, not vanity metrics",
      "Continuous A/B testing so your top-performing ads scale automatically",
    ],
    Mockup: AdManagementMockup,
    imgLeft: true,
  },
  {
    tag: "Lead Management",
    tagColor: "#1a6b8a",
    tagBg: "#E0F4FA",
    tagBorder: "#7EBFD0",
    tagGlow: "26,107,138",
    checkBg: "#CCEAF3",
    checkStroke: "#1a6b8a",
    ctaColor: "#1a6b8a",
    headline: <>Every Lead Organized<br />and Prioritized for You</>,
    desc: <>High-value leads are automatically surfaced so you never miss a hot prospect. <strong>Filter by project type, budget, and status</strong> — then take action in one click.</>,
    bullets: [
      "High-value leads highlighted and ready to act on",
      "Project type, budget range, and booking status at a glance",
      "All contacts exclusive to your market — never shared",
    ],
    Mockup: LeadsMockup,
    imgLeft: false,
  },
  {
    tag: "Estimator Brief",
    tagColor: "#1a6b8a",
    tagBg: "#E0F4FA",
    tagBorder: "#7EBFD0",
    tagGlow: "26,107,138",
    checkBg: "#CCEAF3",
    checkStroke: "#1a6b8a",
    ctaColor: "#1a6b8a",
    headline: <>Walk In Already<br />Knowing the Deal</>,
    desc: <>Every qualified lead arrives with a <strong>detailed project brief</strong> — budget, scope, risks, and a game plan — all pulled from the conversation.<span style={{ display: "block", marginTop: "8px" }}><strong>Sent to you by email or text</strong> the moment a lead finishes qualifying.</span></>,
    bullets: [
      "Sent to you by email or text the moment a lead finishes qualifying",
      "Budget, timeline, and scope confirmed — no surprises at the door",
      "Competing bids and red flags surfaced so you walk in ready to close",
    ],
    Mockup: EstimatorBriefMockup,
    imgLeft: true,
  },
  {
    tag: "Knowledge Base",
    tagColor: "#1a6b8a",
    tagBg: "#E0F4FA",
    tagBorder: "#7EBFD0",
    tagGlow: "26,107,138",
    checkBg: "#CCEAF3",
    checkStroke: "#1a6b8a",
    ctaColor: "#1a6b8a",
    headline: <>Your Standards,<br />Applied Every Time</>,
    desc: <>Train the assistant on your pricing tiers, qualifying criteria, and service areas. Every lead conversation follows your exact process — <strong>consistently, at scale, without extra effort on your end.</strong></>,
    bullets: [
      "Upload your pricing, preferences, and service areas",
      "Your assistant qualifies using your exact rules — no training required",
      "Update anytime — changes take effect immediately",
    ],
    Mockup: KnowledgeBaseMockup,
    imgLeft: false,
  },
  {
    tag: "Dashboard",
    tagColor: "#1a6b8a",
    tagBg: "#E0F4FA",
    tagBorder: "#7EBFD0",
    tagGlow: "26,107,138",
    checkBg: "#CCEAF3",
    checkStroke: "#1a6b8a",
    ctaColor: "#1a6b8a",
    headline: <>Your Entire Pipeline,<br />At a Glance</>,
    desc: <>See ready-to-book leads, pipeline value, qualified lead count, and average response time — all in one view. <strong>Know the health of your business at any moment</strong>, without digging through spreadsheets.</>,
    bullets: [
      "Ready-to-book pipeline value tracked in real time",
      "Monthly bookings and qualified lead count at a glance",
      "Lead source reporting so you know what's working",
    ],
    Mockup: DashboardMockup,
    imgLeft: true,
  },
];

const tagIcons: Record<string, ReactNode> = {
  "Dashboard": (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  ),
  "Lead Management": (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "Estimator Brief": (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M4 6h2v14h12V6h2" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  "Knowledge Base": (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  "Ad Management": (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  ),
};

/* ─── Main section ───────────────────────────────────────────────── */
export default function Benchmarks() {
  return (
    <>
      <style>{`
        .pf-section {
          background: #ffffff;
          padding: 68px 24px 96px;
          position: relative;
          overflow: hidden;
        }
        .pf-container {
          max-width: 1120px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .pf-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 80px;
        }
        .pf-section-title {
          font-size: 46px; font-weight: 900; color: #0F172A;
          letter-spacing: -0.03em; line-height: 1.1; margin: 0 0 16px;
        }
        .pf-grad {
          color: #8B9DC3;
        }
        .pf-section-sub {
          font-size: 17px; color: #64748B; line-height: 1.7; margin: 0;
        }

        /* Feature rows */
        .pf-feature-rows { display: flex; flex-direction: column; gap: 80px; }
        .pf-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 96px;
          align-items: center;
        }
        .pf-row-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #E2E8F0, transparent);
        }

        /* Panel float animation */
        @keyframes pf-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .pf-float-wrap {
          animation: pf-float 4s ease-in-out infinite;
        }
        .pf-float-wrap:hover {
          animation-play-state: paused;
        }

        /* App frame */
        .pf-app-frame {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow:
            0 24px 64px rgba(0,0,0,0.10),
            0 6px 20px rgba(0,0,0,0.07),
            0 0 0 1px rgba(0,0,0,0.04);
          transition: box-shadow 0.3s ease;
        }
        .pf-app-frame:hover {
          box-shadow:
            0 32px 72px rgba(26,107,138,0.14),
            0 10px 28px rgba(26,107,138,0.09),
            0 0 0 1.5px rgba(26,107,138,0.20);
          cursor: pointer;
        }

        /* Titlebar */
        .pf-titlebar {
          height: 36px;
          background: #F1F5F9;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 7px;
        }
        .pf-tl { width: 11px; height: 11px; border-radius: 50%; flex-shrink: 0; }
        .pf-tl-r { background: #FF5F57; }
        .pf-tl-y { background: #FFBD2E; }
        .pf-tl-g { background: #28CA41; }
        .pf-titlebar-label {
          margin-left: 8px;
          font-size: 11px; font-weight: 600; color: #94A3B8;
          letter-spacing: 0.04em;
        }

        /* Feature tag — eyebrow pill style */
        .pf-tag {
          display: inline-flex; align-items: center; gap: 10px;
          background: #ffffff;
          border-radius: 999px; padding: 6px 18px 6px 6px;
          font-size: 12px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 20px;
        }
        .pf-tag-icon {
          width: 26px; height: 26px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }

        /* Feature headline */
        .pf-feature-headline {
          font-size: 32px; font-weight: 900;
          color: #0F172A; letter-spacing: -0.025em; line-height: 1.18;
          margin: 0 0 16px;
        }

        /* Feature desc */
        .pf-feature-desc {
          font-size: 16px; color: #475569; line-height: 1.75;
          margin: 0 0 28px; max-width: 420px;
        }
        .pf-feature-desc strong { color: #0F172A; font-weight: 700; }

        /* Bullets */
        .pf-bullets { display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
        .pf-bullet { display: flex; align-items: center; gap: 10px; font-size: 14px; color: #334155; font-weight: 500; }
        .pf-bullet-check {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }

        /* CTA link */
        .pf-cta-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 700; text-decoration: none;
          transition: gap 0.2s ease;
        }
        .pf-cta-link:hover { gap: 10px; }

        @media (max-width: 900px) {
          .pf-row { grid-template-columns: 1fr; gap: 40px; }
          .pf-section-title { font-size: 34px; }
          .pf-feature-headline { font-size: 26px; }
          .pf-feature-rows { gap: 56px; }
        }

        /* Pulse dot for interactive panel hints */
        @keyframes pf-ping {
          75%, 100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes pf-hint-glow {
          0%, 100% { border-color: #93CAD9; box-shadow: none; }
          50% { border-color: #1a6b8a; box-shadow: 0 0 0 4px rgba(26,107,138,0.12); }
        }
        .pf-pulse {
          position: relative; display: inline-flex;
          width: 6px; height: 6px; flex-shrink: 0; margin-left: 5px;
        }
        .pf-pulse-core { position: absolute; inset: 0; border-radius: 50%; background: #1a6b8a; }
        .pf-pulse-ring { position: absolute; inset: 0; border-radius: 50%; background: #1a6b8a; animation: pf-ping 1.4s cubic-bezier(0,0,0.2,1) infinite; }
        .pf-hint-pill { animation: pf-hint-glow 2.2s ease-in-out infinite; }
      `}</style>

      <section className="pf-section">
        <FlowBackground />
        <div className="pf-container">

          {/* ── Header ── */}
          <div className="pf-header">
            {/* Eyebrow pill — teal, matches Competitive Edge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#ffffff", border: "1.5px solid #1a6b8a", borderRadius: "999px", padding: "10px 26px 10px 10px", marginBottom: "24px", boxShadow: "0 0 22px rgba(26,107,138,0.50), 0 0 48px rgba(26,107,138,0.20), 0 2px 8px rgba(26,107,138,0.18)" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#1a6b8a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 14px rgba(26,107,138,0.85), 0 0 28px rgba(26,107,138,0.45)" }}>
                {/* Grid / platform icon */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#1a6b8a" }}>
                The FlowQualify System
              </span>
            </div>

            <h2 className="pf-section-title">
              We Run the Ads. We Qualify the Leads.<br />
              <span style={{ color: "#0F172A" }}>You Close the Jobs.</span>
            </h2>
            <p className="pf-section-sub">
              <strong>Targeted ads, intelligent lead qualification, and a simple CRM</strong> built for remodelers — all working together to <strong>book your calls automatically</strong>.
            </p>
          </div>

          {/* ── Feature rows ── */}
          <div className="pf-feature-rows">
            {rows.map((row, idx) => {
              const MockupComp = row.Mockup;
              const floatDelays = ["0s", "0.6s", "1.2s", "1.8s", "2.4s"];
              const imgCol = (
                <div className="pf-float-wrap" style={{ animationDelay: floatDelays[idx] }}>
                  <MockupComp />
                  {row.tag === "Estimator Brief" && (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                      <div className="pf-hint-pill" style={{ display: "flex", alignItems: "center", gap: "8px", background: "#EEF8FB", border: "1px solid #7EBFD0", borderRadius: "999px", padding: "8px 18px" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1a6b8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 15l-2 5L9 9l11 4-5 2z"/>
                        </svg>
                        <span style={{ fontSize: "13px", color: "#1a6b8a", fontWeight: 600, letterSpacing: "0.01em" }}>Click the tabs to explore the full lead details panel</span>
                      </div>
                    </div>
                  )}
                  {row.tag === "Ad Management" && (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                      <div className="pf-hint-pill" style={{ display: "flex", alignItems: "center", gap: "8px", background: "#EEF8FB", border: "1px solid #93CAD9", borderRadius: "999px", padding: "8px 18px" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1a6b8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 15l-2 5L9 9l11 4-5 2z"/>
                        </svg>
                        <span style={{ fontSize: "13px", color: "#1a6b8a", fontWeight: 600, letterSpacing: "0.01em" }}>Click a campaign to explore full performance details</span>
                      </div>
                    </div>
                  )}
                  {row.tag === "Lead Management" && (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                      <div className="pf-hint-pill" style={{ display: "flex", alignItems: "center", gap: "8px", background: "#EEF8FB", border: "1px solid #93CAD9", borderRadius: "999px", padding: "8px 18px" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1a6b8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                        </svg>
                        <span style={{ fontSize: "13px", color: "#1a6b8a", fontWeight: 600, letterSpacing: "0.01em" }}>Click any contact to view their full lead profile</span>
                      </div>
                    </div>
                  )}
                  {row.tag === "Knowledge Base" && (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
                      <div className="pf-hint-pill" style={{ display: "flex", alignItems: "center", gap: "8px", background: "#EEF8FB", border: "1px solid #93CAD9", borderRadius: "999px", padding: "8px 18px" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1a6b8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                        <span style={{ fontSize: "13px", color: "#1a6b8a", fontWeight: 600, letterSpacing: "0.01em" }}>Click any document to preview its content</span>
                      </div>
                    </div>
                  )}
                </div>
              );
              const tallPanel = ["Estimator Brief", "Dashboard"].includes(row.tag);
              const textCol = (
                <div style={tallPanel ? { paddingTop: "28px" } : undefined}>
                  {/* Tag */}
                  <div className="pf-tag" style={{ color: row.tagColor }}>
                    <div className="pf-tag-icon" style={{ background: row.tagColor, boxShadow: `0 0 10px rgba(${row.tagGlow},0.7)` }}>
                      {tagIcons[row.tag]}
                    </div>
                    {row.tag}
                  </div>

                  {/* Headline */}
                  <h3 className="pf-feature-headline">{row.headline}</h3>

                  {/* Desc */}
                  <p className="pf-feature-desc">{row.desc}</p>

                  {/* CTA */}
                  <Link href="/opt-in" className="pf-cta-link" style={{ color: row.ctaColor }}>
                    Get started <span style={{ fontSize: "16px" }}>→</span>
                  </Link>
                </div>
              );

              return (
                <div key={idx}>
                  <div className="pf-row" style={
                    ["Estimator Brief", "Ad Management", "Dashboard"].includes(row.tag)
                      ? { gap: "160px", alignItems: "flex-start" }
                      : row.tag === "Lead Management"
                      ? { gap: "120px", alignItems: "flex-start" }
                      : undefined
                  }>
                    {row.imgLeft ? imgCol : textCol}
                    {row.imgLeft ? textCol : imgCol}
                  </div>
                  {idx < rows.length - 1 && <div className="pf-row-divider" style={{ marginTop: "80px" }} />}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
