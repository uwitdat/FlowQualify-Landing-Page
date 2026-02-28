"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import FlowBackground from "../components/FlowBackground";
import { BUTTON_PRIMARY, BUTTON_PRIMARY_HOVER, DEMO_ACCENT, DEMO_ACCENT_HOVER } from "../config/constants";

/* ─── Shared app-frame shell ────────────────────────────────────── */
function AppFrame({
  label,
  children,
  dark,
}: {
  label: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`pf-app-frame${dark ? " pf-app-frame--dark" : ""}`}>
      <div className="pf-titlebar">
        <div className="pf-tl pf-tl-r" />
        <div className="pf-tl pf-tl-y" />
        <div className="pf-tl pf-tl-g" />
        {label ? <span className="pf-titlebar-label">{label}</span> : null}
      </div>
      {children}
    </div>
  );
}

/* ─── Dashboard Mockup ───────────────────────────────────────────── */
function DashboardMockup() {
  const accent = DEMO_ACCENT;
  const bgMain = "#0a0a0a";
  const bgCard = "#1a1a1a";
  const border = "#2a2a2a";
  const text = "rgba(255,255,255,0.95)";
  const textMuted = "rgba(255,255,255,0.6)";

  const timePeriods = [
    "Last 30 Days",
    "Last 90 Days",
    "Last 6 Months",
    "Last Year",
    "All Time",
  ];
  const statCards = [
    {
      lbl: "Ready to Book Pipeline Value",
      val: "$25,000",
      change: "+100%",
      sub: "1 lead · Avg: $25,000 · vs Last 31 Days",
      c: "#A855F7",
    },
    {
      lbl: "Bookings This Month",
      val: "2",
      change: "+100%",
      sub: "2 total ready to book · vs Last 31 Days",
      c: "#EC4899",
    },
    {
      lbl: "Qualified Leads",
      val: "3",
      change: "+100%",
      sub: "2 in this period · 2 high intent",
      c: "#8B5CF6",
    },
    {
      lbl: "Avg Response Time",
      val: "0.2m",
      change: "",
      sub: "AI response time",
      c: "#0EA5E9",
    },
  ];
  return (
    <AppFrame label="Dashboard">
      <div style={{ background: bgMain }}>
        {/* Page header */}
        <div
          style={{
            padding: "12px 16px 10px",
            borderBottom: `1px solid ${border}`,
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 800,
              color: text,
              marginBottom: "2px",
            }}
          >
            Dashboard
          </div>
          <div style={{ fontSize: "9px", color: textMuted }}>
            Qualified leads and pipeline overview
          </div>
        </div>

        {/* Time period chips */}
        <div
          style={{
            padding: "8px 16px",
            display: "flex",
            gap: "5px",
            borderBottom: `1px solid ${border}`,
            overflowX: "auto" as const,
          }}
        >
          <span
            style={{
              fontSize: "8px",
              fontWeight: 600,
              color: textMuted,
              alignSelf: "center",
              whiteSpace: "nowrap" as const,
              marginRight: "2px",
            }}
          >
            Time Period:
          </span>
          {timePeriods.map((t, i) => (
            <div
              key={t}
              style={{
                padding: "3px 8px",
                borderRadius: "999px",
                fontSize: "9px",
                fontWeight: 700,
                whiteSpace: "nowrap" as const,
                flexShrink: 0,
                background: i === 0 ? accent : "transparent",
                color: i === 0 ? "#fff" : textMuted,
                border: i === 0 ? "none" : `1px solid ${border}`,
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* High Value Leads banner */}
        <div
          style={{
            margin: "10px 12px",
            padding: "10px 12px",
            border: `1px solid ${border}`,
            borderRadius: "8px",
            background: bgCard,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "4px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span style={{ fontSize: "11px" }}>☆</span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: text }}>
                High Value Leads
              </span>
            </div>
            <span style={{ fontSize: "10px", color: textMuted, cursor: "pointer" }}>
              ✕
            </span>
          </div>
          <div
            style={{
              fontSize: "9px",
              color: textMuted,
              lineHeight: 1.45,
              marginBottom: "7px",
            }}
          >
            Your best opportunities — leads showing strong buying signals and
            high conversion potential
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: "10px", fontWeight: 700, color: accent }}>
              2 high-value leads
            </span>
            <div
              style={{
                fontSize: "9px",
                fontWeight: 700,
                color: accent,
                border: `1px solid rgba(194, 89, 194, 0.4)`,
                borderRadius: "6px",
                padding: "2px 8px",
                cursor: "pointer",
              }}
            >
              View all →
            </div>
          </div>
        </div>

        {/* Summary banner */}
        <div
          style={{
            margin: "0 12px 10px",
            padding: "10px 12px",
            border: `1px solid ${border}`,
            borderRadius: "8px",
            background: bgCard,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              marginBottom: "3px",
            }}
          >
            <span style={{ fontSize: "11px", fontWeight: 700, color: text }}>
              Summary
            </span>
          </div>
          <div
            style={{ fontSize: "9px", color: textMuted, marginBottom: "6px" }}
          >
            Overview of your pipeline and performance
          </div>
          <div style={{ fontSize: "9px", color: textMuted, lineHeight: 1.5 }}>
            You currently have{" "}
            <span style={{ color: accent, fontWeight: 700 }}>
              2 leads ready to book
            </span>{" "}
            worth{" "}
            <span style={{ color: accent, fontWeight: 700 }}>$25,000</span> in
            your pipeline. 3 leads moved to qualified this week.
          </div>
        </div>

        {/* 4 stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "6px",
            padding: "0 12px 10px",
          }}
        >
          {statCards.map((s) => (
            <div
              key={s.lbl}
              style={{
                background: bgCard,
                borderRadius: "8px",
                padding: "9px 8px",
                border: `1px solid ${border}`,
              }}
            >
              <div
                style={{
                  fontSize: "8px",
                  color: textMuted,
                  fontWeight: 600,
                  marginBottom: "5px",
                  lineHeight: 1.3,
                }}
              >
                {s.lbl}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 900,
                  color: text,
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              {s.change && (
                <div
                  style={{
                    fontSize: "8px",
                    color: text,
                    fontWeight: 700,
                    marginTop: "2px",
                  }}
                >
                  {s.change}
                </div>
              )}
              <div
                style={{
                  fontSize: "7.5px",
                  color: text,
                  marginTop: "2px",
                  lineHeight: 1.3,
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Lead Source Report */}
        <div
          style={{
            margin: "0 12px 0",
            border: `1px solid ${border}`,
            borderRadius: "8px",
            overflow: "hidden",
            background: bgCard,
          }}
        >
          <div
            style={{
              padding: "8px 12px",
              borderBottom: `1px solid ${border}`,
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: text,
                marginBottom: "2px",
              }}
            >
              Lead Source Report
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{ fontSize: "15px", fontWeight: 900, color: text }}
              >
                5
              </span>
              <span
                style={{ fontSize: "8px", color: "#22C55E", fontWeight: 700 }}
              >
                +100% vs Last 31 Days
              </span>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr",
                padding: "5px 12px",
                gap: "4px",
                borderBottom: `1px solid ${border}`,
              }}
            >
              {["Total Leads", "Total Values", "Open", "Won", "Win%"].map(
                (h) => (
                  <div
                    key={h}
                    style={{
                      fontSize: "7.5px",
                      fontWeight: 700,
                      color: textMuted,
                      textTransform: "uppercase" as const,
                    }}
                  >
                    {h}
                  </div>
                ),
              )}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr",
                padding: "6px 12px",
                gap: "4px",
                background: bgCard,
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              {["5", "$25,000", "5", "0", "0.00%"].map((v, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    color: text,
                  }}
                >
                  {v}
                </div>
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
    {
      name: "Dan",
      sub: "danspergler@gmail.com",
      proj: "Cabinet Refacing",
      loc: "",
      budget: "$20,000",
      budgetNum: 20000,
      state: "Ready to Book",
      highVal: true,
      phone: "(416) 382-7741",
      email: "danspergler@gmail.com",
      address: "12 Birchwood Crt, Maple, ON L6A 2R4",
      source: "Facebook Messenger Ad",
      created: "Feb 18, 2026",
      detail:
        "Dan is looking to reface existing cabinets in his kitchen. Budget confirmed at $20k. Homeowner for 6 years, recently upgraded appliances. Motivated to start within 60 days.",
    },
    {
      name: "Martine",
      sub: "lawmartin481@gmail.com",
      proj: "Kitchen Renovation",
      loc: "",
      budget: "$130,000",
      budgetNum: 130000,
      state: "Ready to Book",
      highVal: true,
      phone: "(905) 621-4480",
      email: "lawmartin481@gmail.com",
      address: "88 Willow Ridge Rd, Oakville, ON L6J 5T3",
      source: "Facebook Messenger Ad",
      created: "Feb 20, 2026",
      detail:
        "Full kitchen gut renovation. Open to expanding scope if value is clear. Primary decision-maker — husband defers to her. Timeline flexible but prefers Q2 start.",
    },
    {
      name: "Marcus",
      sub: "—",
      proj: "Kitchen Renovation",
      loc: "",
      budget: "$65,000",
      budgetNum: 65000,
      state: "Qualifying",
      highVal: false,
      phone: "—",
      email: "—",
      address: "—",
      source: "Facebook Messenger Ad",
      created: "Feb 21, 2026",
      detail:
        "Still gathering quotes. Interested in open-concept layout. Budget range $60–70k confirmed. Has not yet made a final decision on contractor.",
    },
    {
      name: "Alia Alexander",
      sub: "—",
      proj: "Kitchen Remodel",
      loc: "",
      budget: "$18,000",
      budgetNum: 18000,
      state: "Qualifying",
      highVal: false,
      phone: "—",
      email: "—",
      address: "—",
      source: "Instagram Messenger Ad",
      created: "Feb 22, 2026",
      detail:
        "Smaller scope remodel — countertops and backsplash primarily. Budget is firm at $18k. Looking for a fast turnaround, ideally 3–4 weeks.",
    },
    {
      name: "Duncan",
      sub: "—",
      proj: "Basement Reno",
      loc: "",
      budget: "$45,000",
      budgetNum: 45000,
      state: "Qualifying",
      highVal: false,
      phone: "—",
      email: "—",
      address: "—",
      source: "Facebook Messenger Ad",
      created: "Feb 23, 2026",
      detail:
        "Basement finishing project. Wants home office + rec room. Budget $40–50k. Owns the home, no structural concerns flagged. Comparing 2 other contractors.",
    },
    {
      name: "Pete Lannis",
      sub: "+1 (647) 964 3925",
      proj: "Kitchen Remodel",
      loc: "",
      budget: "$45,000 – $55,000",
      budgetNum: 45000,
      state: "Ready to Book",
      highVal: true,
      phone: "(555) 214-8823",
      email: "pete@lannisport.com",
      address: "1421 Elm Drive, Tampa FL 33602",
      source: "Facebook Messenger Ad",
      created: "Feb 14, 2026",
      detail:
        "High-value full kitchen remodel. Wall removal, quartz countertops, custom cabinetry. Pre-approved financing. Wife is co-decision-maker — both attending consultation.",
    },
  ];

  const handleSort = (col: string) => {
    if (sortCol === col) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortCol(col);
      setSortDir("asc");
    }
  };

  const sortedLeads = [...leads].sort((a, b) => {
    if (!sortCol) return 0;
    const dir = sortDir === "asc" ? 1 : -1;
    if (sortCol === "BUDGET") return (a.budgetNum - b.budgetNum) * dir;
    const map: Record<string, string> = {
      CONTACT: "name",
      PROJECT: "proj",
      STATE: "state",
    };
    const key = map[sortCol] as keyof typeof a;
    return String(a[key]).localeCompare(String(b[key])) * dir;
  });

  const accent = DEMO_ACCENT;
  const bgMain = "#0a0a0a";
  const bgCard = "#1a1a1a";
  const border = "#2a2a2a";
  const text = "rgba(255,255,255,0.95)";
  const textMuted = "rgba(255,255,255,0.6)";

  const stateStyle = (s: string) =>
    s === "Ready to Book"
      ? { bg: "rgba(34,197,94,0.2)", color: "#22C55E" }
      : { bg: "rgba(234,179,8,0.25)", color: "#EAB308" };

  const sortIcon = (col: string) => {
    if (sortCol !== col)
      return <span style={{ opacity: 0.3, marginLeft: "2px", color: textMuted }}>↕</span>;
    return (
      <span style={{ color: accent, marginLeft: "2px" }}>
        {sortDir === "asc" ? "↑" : "↓"}
      </span>
    );
  };

  const sel = selectedIdx !== null ? sortedLeads[selectedIdx] : null;
  const detailTabs = [
    "Lead Details",
    "Insights",
    "Estimator Brief",
    "Appointments",
    "Actions",
    "Photos",
    "Conversation",
  ];

  return (
    <AppFrame label="Leads">
      <div
        style={{
          height: "440px",
          display: "flex",
          flexDirection: "column" as const,
          background: bgMain,
        }}
      >
        {sel ? (
          /* ── Lead Detail View (dark) ── */
          <>
            {/* Back bar */}
            <div
              style={{
                padding: "7px 12px",
                borderBottom: `1px solid ${border}`,
                background: bgCard,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <button
                onClick={() => setSelectedIdx(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "9px",
                  fontWeight: 700,
                  color: text,
                  padding: 0,
                }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={text}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Back to Leads
              </button>
              <span style={{ fontSize: "9px", color: textMuted }}>·</span>
              <span style={{ fontSize: "10px", fontWeight: 700, color: text }}>
                {sel.name}
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  display: "inline-block",
                  background: stateStyle(sel.state).bg,
                  color: stateStyle(sel.state).color,
                  fontSize: "7.5px",
                  fontWeight: 700,
                  padding: "2px 7px",
                  borderRadius: "999px",
                  whiteSpace: "nowrap" as const,
                }}
              >
                {sel.state}
              </span>
            </div>

            {/* Tab bar — Lead Details active */}
            <div
              style={{
                display: "flex",
                borderBottom: `1px solid ${border}`,
                background: bgCard,
                overflowX: "auto" as const,
                scrollbarWidth: "none" as const,
              }}
            >
              {detailTabs.map((t) => (
                <div
                  key={t}
                  style={{
                    padding: "7px 9px",
                    fontSize: "8.5px",
                    fontWeight: t === "Lead Details" ? 800 : 500,
                    color: t === "Lead Details" ? accent : textMuted,
                    borderBottom:
                      t === "Lead Details"
                        ? `2px solid ${accent}`
                        : "2px solid transparent",
                    flexShrink: 0,
                    whiteSpace: "nowrap" as const,
                    cursor: "default",
                    userSelect: "none" as const,
                  }}
                >
                  {t}
                </div>
              ))}
            </div>

            {/* Lead Details content */}
            <div
              style={{
                padding: "12px 14px",
                overflowY: "auto" as const,
                flex: 1,
              }}
            >
              {/* Header card */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 14px",
                  background: bgCard,
                  borderRadius: "10px",
                  border: `1px solid ${border}`,
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${DEMO_ACCENT_HOVER}, ${accent})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                      fontWeight: 900,
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {sel.name
                      .split(" ")
                      .map((w: string) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 800, color: text }}>
                      {sel.name}
                    </div>
                    <div style={{ fontSize: "9px", color: textMuted, marginTop: "1px" }}>
                      {sel.proj}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    background: stateStyle(sel.state).bg,
                    color: stateStyle(sel.state).color,
                    fontSize: "8px",
                    fontWeight: 700,
                    padding: "3px 9px",
                    borderRadius: "999px",
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  {sel.state}
                </div>
              </div>

              {/* Info rows */}
              <div
                style={{
                  background: bgCard,
                  border: `1px solid ${border}`,
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginBottom: "10px",
                }}
              >
                {(
                  [
                    ["PHONE", (sel as { phone: string }).phone],
                    ["EMAIL", (sel as { email: string }).email],
                    ["ADDRESS", (sel as { address: string }).address],
                    ["BUDGET", sel.budget],
                    ["PROJECT", sel.proj],
                    ["SOURCE", (sel as { source: string }).source],
                    ["CREATED", (sel as { created: string }).created],
                  ] as [string, string][]
                ).map(([label, val], i, arr) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "7px 12px",
                      borderBottom:
                        i < arr.length - 1 ? `1px solid ${border}` : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "7.5px",
                        fontWeight: 700,
                        color: textMuted,
                        letterSpacing: "0.06em",
                        flexShrink: 0,
                        marginRight: "8px",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontSize: "9.5px",
                        color: text,
                        textAlign: "right" as const,
                      }}
                    >
                      {val || "—"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Qualifying Notes */}
              <div
                style={{
                  borderRadius: "7px",
                  border: `1px solid ${border}`,
                  overflow: "hidden",
                }}
              >
                <div style={{ background: bgCard, padding: "4px 10px" }}>
                  <span style={{ fontSize: "8.5px", fontWeight: 800, color: accent }}>
                    Qualifying Notes
                  </span>
                </div>
                <div
                  style={{
                    padding: "6px 10px",
                    background: bgCard,
                    fontSize: "9.5px",
                    color: textMuted,
                    lineHeight: 1.6,
                  }}
                >
                  {sel.detail}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* ── List View (dark) ── */
          <>
            {/* Page header */}
            <div
              style={{
                padding: "11px 14px 8px",
                borderBottom: `1px solid ${border}`,
                flexShrink: 0,
              }}
            >
              <div style={{ fontSize: "14px", fontWeight: 800, color: text, marginBottom: "1px" }}>
                Leads
              </div>
              <div style={{ fontSize: "9px", color: textMuted }}>
                All contacts and leads for A &amp; B Renovations
              </div>
            </div>

            {/* Search bar */}
            <div
              style={{
                padding: "8px 12px",
                borderBottom: `1px solid ${border}`,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  background: bgCard,
                  border: `1px solid ${border}`,
                  borderRadius: "6px",
                  padding: "5px 10px",
                  fontSize: "9.5px",
                  color: textMuted,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={textMuted}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search by name, email, phone, project...
              </div>
            </div>

            {/* Filter dropdowns */}
            <div
              style={{
                padding: "6px 12px",
                borderBottom: `1px solid ${border}`,
                display: "flex",
                gap: "6px",
                flexShrink: 0,
              }}
            >
              {["All States ▾", "Recently Updated ▾"].map((f) => (
                <div
                  key={f}
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    color: textMuted,
                    border: `1px solid ${border}`,
                    borderRadius: "6px",
                    padding: "4px 9px",
                    cursor: "pointer",
                  }}
                >
                  {f}
                </div>
              ))}
            </div>

            {/* High Value banner */}
            <div
              style={{
                margin: "6px 12px",
                padding: "6px 10px",
                background: "rgba(34,197,94,0.15)",
                border: "1px solid rgba(34,197,94,0.4)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
                flexShrink: 0,
              }}
            >
              <div style={{ fontSize: "9px", color: textMuted }}>
                <span style={{ color: "#22C55E", fontWeight: 700 }}>
                  High Value Leads
                </span>{" "}
                are highlighted in green.
              </div>
              <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
                <div
                  style={{
                    fontSize: "8px",
                    fontWeight: 700,
                    color: "#22C55E",
                    border: "1px solid #22C55E",
                    borderRadius: "5px",
                    padding: "2px 6px",
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  Show All High Value
                </div>
                <div
                  style={{
                    fontSize: "8px",
                    fontWeight: 700,
                    color: "#fff",
                    background: "#2563EB",
                    borderRadius: "5px",
                    padding: "2px 6px",
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  High Value + Ready to Book
                </div>
              </div>
            </div>

            {/* Column headers — sortable */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2.2fr 1.6fr 1.4fr 1.4fr 1.1fr",
                padding: "5px 12px",
                gap: "4px",
                borderBottom: `1px solid ${border}`,
                flexShrink: 0,
              }}
            >
              {["CONTACT", "PROJECT", "BUDGET", "STATE", "UPDATED"].map((h) => (
                <div
                  key={h}
                  onClick={
                    ["CONTACT", "PROJECT", "BUDGET", "STATE"].includes(h)
                      ? () => handleSort(h)
                      : undefined
                  }
                  style={{
                    fontSize: "7.5px",
                    fontWeight: 700,
                    color: sortCol === h ? accent : textMuted,
                    letterSpacing: "0.06em",
                    cursor: ["CONTACT", "PROJECT", "BUDGET", "STATE"].includes(h)
                      ? "pointer"
                      : "default",
                    userSelect: "none" as const,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {h}
                  {["CONTACT", "PROJECT", "BUDGET", "STATE"].includes(h) &&
                    sortIcon(h)}
                </div>
              ))}
            </div>

            {/* Lead rows — clickable */}
            <div style={{ overflowY: "auto" as const, flex: 1 }}>
              {sortedLeads.map((l, i) => {
                const st = stateStyle(l.state);
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setHasInteracted(true);
                      setSelectedIdx(i);
                    }}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2.2fr 1.6fr 1.4fr 1.4fr 1.1fr",
                      padding: "7px 12px",
                      gap: "4px",
                      alignItems: "center",
                      borderBottom:
                        i < sortedLeads.length - 1 ? `1px solid ${border}` : "none",
                      borderLeft: l.highVal
                        ? "2.5px solid #22C55E"
                        : "2.5px solid transparent",
                      background: l.highVal ? "rgba(34,197,94,0.12)" : "transparent",
                      cursor: "pointer",
                      transition: "background 0.1s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = l.highVal
                        ? "rgba(34,197,94,0.2)"
                        : bgCard)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = l.highVal
                        ? "rgba(34,197,94,0.12)"
                        : "transparent")
                    }
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "10.5px",
                          fontWeight: 700,
                          color: text,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {l.name}
                      </div>
                      <div style={{ fontSize: "8.5px", color: textMuted, marginTop: "1px" }}>
                        {l.sub}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", color: textMuted }}>
                        {l.proj}
                      </div>
                      {l.loc && (
                        <div style={{ fontSize: "8.5px", color: textMuted, marginTop: "1px" }}>
                          {l.loc}
                        </div>
                      )}
                    </div>
                    <div style={{ fontSize: "10px", fontWeight: 600, color: text }}>
                      {l.budget}
                    </div>
                    <div>
                      <div
                        style={{
                          display: "inline-block",
                          background: st.bg,
                          color: st.color,
                          fontSize: "8px",
                          fontWeight: 700,
                          padding: "2px 7px",
                          borderRadius: "999px",
                          whiteSpace: "nowrap" as const,
                        }}
                      >
                        {l.state}
                      </div>
                    </div>
                    <div style={{ fontSize: "8.5px", color: textMuted }}>
                      2/25/2026
                    </div>
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
  const tabs = [
    "Lead Details",
    "Insights",
    "Estimator Brief",
    "Actions",
    "Photos",
    "Conversation",
  ];

  const sections = [
    {
      num: 1,
      title: "Location & Contact",
      content:
        "Pete Lannis · (555) 214-8823 · pete@lannis.com\n1421 Elm Drive, Tampa FL 33602 · Owner-occupied single-family home. Lived there 11 years. Wife is primary decision-maker on design — both will be at the consultation.",
    },
    {
      num: 2,
      title: "Project Overview & Goals",
      content:
        "Full kitchen remodel. Wants wall between kitchen and living room removed for open-concept layout. Priorities: quartz countertops, soft-close cabinetry, new island with seating for 4. Appliances not included — has new ones already. Inspired by modern farmhouse aesthetic.",
    },
    {
      num: 3,
      title: "Budget / Timeline / Fit",
      content:
        "Confirmed budget: $45,000–$55,000. Would stretch to $60k for the right scope. Financing pre-approved through their bank. Wants to start April 2025 and complete before summer. Strong fit — motivated, clear vision, realistic budget.",
    },
    {
      num: 4,
      title: "Risks / Unknowns / Red Flags",
      content:
        "Collecting 3 competing bids — one already received from local GC at $38k (likely low-ball). Wall removal may require structural engineer sign-off before final scope is locked. Verify cabinet lead times (12–14 wks) against April start target.",
    },
    {
      num: 5,
      title: "On-Site Game Plan",
      content:
        "Measure existing island footprint and wall opening. Bring quartz slab samples (white/cream tones preferred). Confirm permit requirements for wall removal before leaving. Address the $38k competitor bid directly — highlight timeline risk and material quality gap.",
    },
  ];

  const insightGroups = [
    {
      label: "Project Ideas",
      color: "#EC4899",
      bg: "#FDF2F8",
      border: "#FBCFE8",
      pills: ["update cabinets", "add an island", "kitchen renovation"],
    },
    {
      label: "Preferences",
      color: "#3B82F6",
      bg: "#EFF6FF",
      border: "#BFDBFE",
      pills: [
        "modern look",
        "light shaker cabinets",
        "flat-panel cabinets",
        "low-maintenance materials",
        "vintage style",
      ],
    },
    {
      label: "Pain Points",
      color: "#EF4444",
      bg: "#FEF2F2",
      border: "#FECACA",
      pills: [
        "layout feels cramped",
        "not very functional",
        "kitchen is tight",
        "storage isn't great",
        "outdated cabinets and appliances",
      ],
    },
    {
      label: "Constraints",
      color: "#D97706",
      bg: "#FFFBEB",
      border: "#FDE68A",
      pills: ["budget of $45,000–$55,000", "timeline of 1–3 months"],
    },
    {
      label: "Goals",
      color: "#16A34A",
      bg: "#F0FDF4",
      border: "#BBF7D0",
      pills: [
        "open up space",
        "improve flow",
        "more open kitchen",
        "modernize kitchen",
        "easier to work in",
      ],
    },
  ];

  const photos = [
    {
      label: "1/3",
      src: "/basic3.png",
      notes:
        "Open layout with good bones — peninsula functional but dated. Raised-panel cream cabinets and laminate counters prime for full replacement. Tile floor in fair condition.\nCandidate for: cabinet replacement, quartz countertops, LVP flooring, pendant lighting update",
    },
    {
      label: "2/3",
      src: "/basic4.png",
      notes:
        "6-burner gas range — keep or upgrade hood. Laminate counters showing wear, backsplash is basic tile. Cabinets structurally sound but dated.\nCandidate for: quartz countertop, subway tile backsplash, cabinet refacing",
    },
    {
      label: "3/3",
      src: "/basic5.png",
      notes:
        "Sink area with good natural light. Double basin + dated faucet. Dishwasher functional. Strong candidate for undermount sink + faucet upgrade with countertop replacement.\nApprox area: ~180 sq ft total",
    },
  ];

  const messages = [
    {
      from: "lead",
      name: "Pete Lannis",
      text: "Hello I saw your ad and was looking for a kitchen quote.",
      time: "11:05 PM",
    },
    {
      from: "bot",
      name: "A&B Renovations",
      text: "Hi Pete! Thanks for reaching out. I'm here to help you figure out what's possible for your space. What's the main thing that's been bothering you about your kitchen?",
      time: "11:05 PM",
    },
    {
      from: "lead",
      name: "Pete Lannis",
      text: "The layout just feels cramped and not functional. Storage is a mess and it's hard to move around when I'm cooking.",
      time: "11:07 PM",
    },
    {
      from: "bot",
      name: "A&B Renovations",
      text: "That's one of the most common things we hear — and totally fixable. Are you thinking a full remodel (new cabinets, counters, layout changes) or more of a refresh?",
      time: "11:07 PM",
    },
    {
      from: "lead",
      name: "Pete Lannis",
      text: "Probably a full remodel. The cabinets are old and the countertops are worn. I'd love a more open feel if possible.",
      time: "11:08 PM",
    },
    {
      from: "bot",
      name: "A&B Renovations",
      text: "Got it. Opening up the layout usually means looking at whether any walls can come down — do you know if there's a wall between your kitchen and dining/living area?",
      time: "11:08 PM",
    },
    {
      from: "lead",
      name: "Pete Lannis",
      text: "Yeah there's a half wall. I've always wanted to remove it but wasn't sure if it was possible.",
      time: "11:09 PM",
    },
    {
      from: "bot",
      name: "A&B Renovations",
      text: "That's exactly what an on-site visit is for — we'd check if it's load-bearing and walk you through options. Do you have a rough timeline in mind? Are you looking to start this spring or more flexible?",
      time: "11:09 PM",
    },
    {
      from: "lead",
      name: "Pete Lannis",
      text: "Ideally spring. We have family coming in July so it would be great to have it done by then.",
      time: "11:10 PM",
    },
    {
      from: "bot",
      name: "A&B Renovations",
      text: "July is doable if we get started on scope and permits by April. Do you have a budget range in mind? Even a rough ballpark helps us tailor the right options.",
      time: "11:10 PM",
    },
    {
      from: "lead",
      name: "Pete Lannis",
      text: "Somewhere around $45k–$55k. Maybe a bit more if the wall removal and open concept is worth it.",
      time: "11:11 PM",
    },
    {
      from: "bot",
      name: "A&B Renovations",
      text: "That's a solid range for what you're describing — full cabinet replacement, new countertops, and an open-concept layout can absolutely be done in that budget. One more thing: do you own the home?",
      time: "11:11 PM",
    },
    {
      from: "lead",
      name: "Pete Lannis",
      text: "Yes, been here 11 years. My wife and I are both on the deed.",
      time: "11:12 PM",
    },
    {
      from: "bot",
      name: "A&B Renovations",
      text: "Perfect — and will she be involved in the design decisions? We like to make sure everyone who'll be signing off is at the consultation.",
      time: "11:12 PM",
    },
    {
      from: "lead",
      name: "Pete Lannis",
      text: "Definitely, she's actually more excited about this than I am haha. She has a whole Pinterest board ready.",
      time: "11:13 PM",
    },
    {
      from: "bot",
      name: "A&B Renovations",
      text: "Love it — bring the Pinterest board! That actually helps us a lot. I have everything I need to put together a pre-visit brief for our estimator. You'll get a call to schedule the consultation shortly. Looking forward to it!",
      time: "11:13 PM",
    },
  ];

  const accent = DEMO_ACCENT;
  const bgMain = "#0a0a0a";
  const bgCard = "#1a1a1a";
  const border = "#2a2a2a";
  const text = "rgba(255,255,255,0.95)";
  const textMuted = "rgba(255,255,255,0.6)";

  return (
    <AppFrame label="Lead Details">
      <div
        style={{
          height: "420px",
          display: "flex",
          flexDirection: "column" as const,
          background: bgMain,
        }}
      >
        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            borderBottom: `1px solid ${border}`,
            background: bgCard,
            overflowX: "auto" as const,
            scrollbarWidth: "none" as const,
          }}
        >
          {tabs.map((t) => {
            const active = t === activeTab;
            return (
              <div
                key={t}
                onClick={() => {
                  setHasInteracted(true);
                  setActiveTab(t);
                }}
                style={{
                  padding: "8px 10px",
                  fontSize: "9px",
                  fontWeight: active ? 800 : 600,
                  color: active ? accent : textMuted,
                  whiteSpace: "nowrap" as const,
                  borderBottom: active
                    ? `2px solid ${accent}`
                    : "2px solid transparent",
                  flexShrink: 0,
                  cursor: "pointer",
                  userSelect: "none" as const,
                  transition: "color 0.15s",
                }}
              >
                {t}
                {t === "Conversation" && (
                  <span
                    style={{
                      marginLeft: "4px",
                      background: accent,
                      color: "#fff",
                      fontSize: "7px",
                      fontWeight: 800,
                      borderRadius: "999px",
                      padding: "0px 4px",
                    }}
                  >
                    16
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* ── ESTIMATOR BRIEF tab ── */}
        {activeTab === "Estimator Brief" && (
          <div
            style={{
              padding: "12px 14px",
              background: bgMain,
              overflowY: "auto" as const,
              flex: 1,
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={accent}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: text,
                  }}
                >
                  Estimator Brief
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 10px",
                background: bgCard,
                borderRadius: "8px",
                border: `1px solid ${border}`,
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${DEMO_ACCENT_HOVER}, ${accent})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  fontWeight: 900,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                PL
              </div>
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: text,
                  }}
                >
                  Pete Lannis
                </div>
                <div style={{ fontSize: "9px", color: textMuted }}>
                  Kitchen Remodel ·{" "}
                  <span style={{ color: "#22C55E", fontWeight: 700 }}>
                    Ready to Book
                  </span>
                </div>
              </div>
            </div>
            {sections.map((s) => (
              <div
                key={s.num}
                style={{
                  marginBottom: "8px",
                  borderRadius: "8px",
                  border: `1px solid ${border}`,
                  overflow: "hidden",
                }}
              >
                <div style={{ background: bgCard, padding: "5px 10px" }}>
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: 800,
                      color: accent,
                      letterSpacing: "0.01em",
                    }}
                  >
                    Section {s.num}: {s.title}
                  </span>
                </div>
                <div
                  style={{
                    padding: "7px 10px",
                    background: "rgba(194, 89, 194, 0.18)",
                    borderTop: `1px solid rgba(194, 89, 194, 0.35)`,
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      color: text,
                      margin: 0,
                      lineHeight: 1.6,
                      whiteSpace: "pre-line" as const,
                    }}
                  >
                    {s.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── INSIGHTS tab ── */}
        {activeTab === "Insights" && (
          <div
            style={{
              padding: "12px 14px",
              background: bgMain,
              overflowY: "auto" as const,
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span
                style={{ fontSize: "11px", fontWeight: 800, color: text }}
              >
                Conversation Insights
              </span>
              <span style={{ fontSize: "9px", color: textMuted }}>
                Updated 2/25/2026
              </span>
            </div>
            {insightGroups.map((g) => (
              <div key={g.label} style={{ marginBottom: "10px" }}>
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 800,
                    color: text,
                    letterSpacing: "0.05em",
                    marginBottom: "5px",
                  }}
                >
                  {g.label}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap" as const,
                    gap: "4px",
                  }}
                >
                  {g.pills.map((p) => (
                    <span
                      key={p}
                      style={{
                        fontSize: "9px",
                        fontWeight: 600,
                        color: "#fff",
                        background: g.color,
                        border: `1px solid ${g.color}`,
                        borderRadius: "999px",
                        padding: "2px 8px",
                        whiteSpace: "nowrap" as const,
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div
              style={{
                marginTop: "4px",
                paddingTop: "10px",
                borderTop: `1px solid ${border}`,
              }}
            >
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 800,
                  color: text,
                  letterSpacing: "0.05em",
                  marginBottom: "5px",
                }}
              >
                AI Notes
              </div>
              {[
                "Existing features: cabinets, sink, stove, refrigerator, wooden door, and shelves.",
                "Multiple photos suggest a consistent vintage aesthetic preference across kitchen layouts.",
              ].map((note, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "9.5px",
                    color: "#fff",
                    background: accent,
                    border: `1px solid ${accent}`,
                    borderRadius: "6px",
                    padding: "5px 8px",
                    marginBottom: "4px",
                    lineHeight: 1.5,
                  }}
                >
                  {note}
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "6px",
                paddingTop: "10px",
                borderTop: `1px solid ${border}`,
              }}
            >
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 800,
                  color: text,
                  letterSpacing: "0.05em",
                  marginBottom: "8px",
                }}
              >
                Contractor Notes
              </div>
              <div style={{ textAlign: "center" as const, padding: "12px 0" }}>
                <div style={{ fontSize: "10px", color: textMuted }}>
                  No contractor notes yet
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    color: textMuted,
                    marginTop: "2px",
                  }}
                >
                  Add notes in the Actions tab
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── LEAD DETAILS tab ── */}
        {activeTab === "Lead Details" && (
          <div
            style={{
              padding: "12px 14px",
              background: bgMain,
              overflowY: "auto" as const,
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 12px",
                background: bgCard,
                borderRadius: "10px",
                border: `1px solid ${border}`,
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${DEMO_ACCENT_HOVER}, ${accent})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 900,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                PL
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: text,
                  }}
                >
                  Pete Lannis
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    color: textMuted,
                    marginTop: "1px",
                  }}
                >
                  Kitchen Remodel
                </div>
              </div>
              <div
                style={{
                  background: "rgba(34,197,94,0.2)",
                  color: "#22C55E",
                  fontSize: "9px",
                  fontWeight: 800,
                  padding: "3px 9px",
                  borderRadius: "999px",
                }}
              >
                Ready to Book
              </div>
            </div>
            {[
              { label: "Phone", val: "(555) 214-8823" },
              { label: "Email", val: "pete@lannis.com" },
              { label: "Address", val: "1421 Elm Drive, Tampa FL 33602" },
              { label: "Budget", val: "$45,000 – $55,000" },
              { label: "Project", val: "Full Kitchen Remodel" },
              { label: "Source", val: "Facebook Messenger Ad" },
              { label: "Created", val: "Feb 14, 2026" },
            ].map(({ label, val }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "6px 0",
                  borderBottom: `1px solid ${border}`,
                }}
              >
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    color: textMuted,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.06em",
                    flexShrink: 0,
                    paddingRight: "8px",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    color: text,
                    textAlign: "right" as const,
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ── ACTIONS tab ── */}
        {activeTab === "Actions" && (
          <div
            style={{
              padding: "12px 14px",
              background: bgMain,
              overflowY: "auto" as const,
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: text,
                marginBottom: "10px",
              }}
            >
              AI Controls
            </div>
            {/* AI Status */}
            <div
              style={{
                border: `1px solid ${border}`,
                borderRadius: "8px",
                padding: "10px 12px",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: bgCard,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: text,
                    marginBottom: "3px",
                  }}
                >
                  AI Status
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#22C55E",
                    fontWeight: 600,
                  }}
                >
                  AI is responding
                </div>
              </div>
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  color: "#fff",
                  background: "#D97706",
                  border: "1px solid #D97706",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Take Over
              </div>
            </div>
            {/* Change Lead State */}
            <div
              style={{
                border: `1px solid ${border}`,
                borderRadius: "8px",
                padding: "10px 12px",
                marginBottom: "8px",
                background: bgCard,
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: text,
                  marginBottom: "2px",
                }}
              >
                Change Lead State
              </div>
              <div
                style={{
                  fontSize: "8px",
                  color: textMuted,
                  marginBottom: "8px",
                }}
              >
                Manually move this lead to a different stage. This will pause AI
                responses.
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    color: "#fff",
                    background: "#D97706",
                    border: "1px solid #D97706",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  ← Qualifying
                </div>
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    color: "#fff",
                    background: "#22C55E",
                    border: "1px solid #22C55E",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  → Booked/Won
                </div>
              </div>
            </div>
            {/* Contractor note */}
            <div
              style={{
                border: `1px solid ${border}`,
                borderRadius: "8px",
                padding: "10px 12px",
                background: bgCard,
              }}
            >
              <div style={{ marginBottom: "2px" }}>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: text,
                  }}
                >
                  Have you talked to Pete Lannis?
                </span>
              </div>
              <div
                style={{
                  fontSize: "8px",
                  color: textMuted,
                  marginBottom: "8px",
                }}
              >
                Fill us in on what you discussed outside of FlowQualify
              </div>
              <div
                style={{
                  fontSize: "8.5px",
                  color: text,
                  marginBottom: "3px",
                  fontWeight: 600,
                }}
              >
                What did you discuss?
              </div>
              <div
                style={{
                  border: `1px solid ${border}`,
                  borderRadius: "6px",
                  padding: "8px",
                  height: "38px",
                  marginBottom: "8px",
                  fontSize: "8.5px",
                  color: textMuted,
                  background: "rgba(194, 89, 194, 0.18)",
                }}
              >
                e.g., Discussed pricing, timeline, concerns, next steps...
              </div>
              <div
                style={{
                  fontSize: "8.5px",
                  color: text,
                  marginBottom: "3px",
                  fontWeight: 600,
                }}
              >
                Date of conversation
              </div>
              <div
                style={{
                  border: `1px solid ${border}`,
                  borderRadius: "6px",
                  padding: "5px 8px",
                  marginBottom: "8px",
                  fontSize: "9px",
                  color: text,
                  background: "rgba(194, 89, 194, 0.18)",
                }}
              >
                2026-02-26
              </div>
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  color: "#fff",
                  background: accent,
                  padding: "5px 12px",
                  borderRadius: "6px",
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                Save Note
              </div>
            </div>
          </div>
        )}

        {/* ── PHOTOS tab ── */}
        {activeTab === "Photos" && (
          <div
            style={{
              padding: "10px 12px",
              background: bgMain,
              overflowY: "auto" as const,
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span
                style={{ fontSize: "11px", fontWeight: 800, color: text }}
              >
                Photos &amp; AI Analysis
              </span>
              <span style={{ fontSize: "9px", color: textMuted }}>
                3 photos
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: "8px",
              }}
            >
              {photos.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "110px 1fr",
                    gap: "8px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      position: "relative" as const,
                      borderRadius: "6px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={p.src}
                      alt={`Kitchen photo ${p.label}`}
                      style={{
                        width: "110px",
                        height: "78px",
                        objectFit: "cover" as const,
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute" as const,
                        top: "4px",
                        right: "4px",
                        background: "rgba(0,0,0,0.6)",
                        color: "#fff",
                        fontSize: "7px",
                        fontWeight: 700,
                        padding: "1px 5px",
                        borderRadius: "999px",
                      }}
                    >
                      {p.label}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "7.5px",
                      color: text,
                      lineHeight: 1.5,
                      background: "rgba(194, 89, 194, 0.18)",
                      padding: "7px 8px",
                      borderRadius: "6px",
                      border: `1px solid rgba(194, 89, 194, 0.35)`,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: text,
                        display: "block",
                        marginBottom: "3px",
                      }}
                    >
                      Estimator notes:
                    </span>
                    <span
                      style={{
                        whiteSpace: "pre-line" as const,
                        color: textMuted,
                      }}
                    >
                      {p.notes}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CONVERSATION tab ── */}
        {activeTab === "Conversation" && (
          <div
            style={{
              padding: "12px 14px",
              background: bgMain,
              overflowY: "auto" as const,
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: text,
                marginBottom: "10px",
              }}
            >
              Conversation History
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column" as const,
                gap: "6px",
              }}
            >
              {messages.map((m, i) => {
                const isBot = m.from === "bot";
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column" as const,
                      alignItems: isBot ? "flex-start" : "flex-end",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "7.5px",
                        marginBottom: "2px",
                        paddingLeft: isBot ? "2px" : 0,
                        paddingRight: isBot ? 0 : "2px",
                      }}
                    >
                      <span style={{ color: accent, fontWeight: 700 }}>
                        {m.name}
                      </span>
                      <span style={{ color: textMuted }}>
                        {" "}
                        · {m.time}
                      </span>
                    </div>
                    <div
                      style={{
                        maxWidth: "82%",
                        padding: "7px 9px",
                        borderRadius: isBot
                          ? "4px 10px 10px 10px"
                          : "10px 4px 10px 10px",
                        background: isBot
                          ? "rgba(194, 89, 194, 0.22)"
                          : "rgba(30, 58, 95, 0.9)",
                        border: isBot
                          ? "1px solid rgba(194, 89, 194, 0.45)"
                          : "1px solid rgba(59, 130, 246, 0.5)",
                        fontSize: "9px",
                        color: text,
                        lineHeight: 1.5,
                      }}
                    >
                      {m.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── APPOINTMENTS tab ── */}
        {activeTab === "Appointments" && (
          <div
            style={{
              padding: "40px 14px",
              background: bgMain,
              textAlign: "center" as const,
            }}
          >
            <div style={{ fontSize: "18px", marginBottom: "6px" }}>📅</div>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 700,
                color: "#0F172A",
                marginBottom: "3px",
              }}
            >
              Appointments
            </div>
            <div style={{ fontSize: "9px", color: "#94A3B8" }}>
              No appointments scheduled yet for this lead.
            </div>
          </div>
        )}
      </div>
    </AppFrame>
  );
}

/* ─── Ad Management Mockup ───────────────────────────────────────── */
function AdManagementMockup() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const campaigns = [
    {
      name: "Kitchen Messenger – Broad",
      status: "Active",
      spend: "$1,380",
      msgs: 118,
      leads: 31,
      cpl: "$44.52",
      reach: "44.2k",
      impressions: "93.8k",
      convRate: "26.3%",
      costPerMsg: "$11.69",
      audience: "Homeowners 35–54 · ♀ 62%",
      budget: "$46/day",
      topAd: "Dream Your Kitchen — Our Team Makes It Real",
      topAdBody:
        "Get matched with top-rated kitchen remodelers near you. Free estimates, no pressure.",
      spendBars: [70, 85, 100, 79, 92, 88, 95],
    },
    {
      name: "Bath Reno – Lookalike",
      status: "Active",
      spend: "$1,040",
      msgs: 89,
      leads: 23,
      cpl: "$45.22",
      reach: "39.6k",
      impressions: "76.1k",
      convRate: "25.8%",
      costPerMsg: "$11.69",
      audience: "Bath Interest Lookalike · ♀ 58%",
      budget: "$35/day",
      topAd: "Local Bath Remodelers — Free Estimate This Week",
      topAdBody:
        "Trusted local contractors, transparent pricing. Book your free consultation today.",
      spendBars: [60, 72, 68, 75, 85, 80, 78],
    },
    {
      name: "High Intent Retarget",
      status: "Active",
      spend: "$540",
      msgs: 62,
      leads: 15,
      cpl: "$36.00",
      reach: "9.1k",
      impressions: "23.4k",
      convRate: "24.2%",
      costPerMsg: "$8.71",
      audience: "Site Visitors 45–54 · Mixed",
      budget: "$18/day",
      topAd: "Dream Kitchen. No Upfront Cost.",
      topAdBody:
        "Finally get the kitchen you've been waiting for. See prices & availability from top local remodelers.",
      spendBars: [55, 60, 70, 58, 72, 68, 65],
    },
    {
      name: "New Homeowners 35–55",
      status: "Active",
      spend: "$240",
      msgs: 38,
      leads: 6,
      cpl: "$40.00",
      reach: "20.8k",
      impressions: "33.5k",
      convRate: "15.8%",
      costPerMsg: "$6.32",
      audience: "New Homeowners 35–55 · ♀ 55%",
      budget: "$8/day",
      topAd: "Welcome to the Neighborhood — Kitchen Upgrade?",
      topAdBody:
        "Settle in with a kitchen you love. See what top local remodelers can do for your new home.",
      spendBars: [30, 38, 42, 35, 40, 36, 44],
    },
  ];

  const topStats = [
    { label: "Total Spend", val: "$3,200" },
    { label: "Conversations", val: "307", blue: true },
    { label: "Qualified Leads", val: "75" },
    { label: "Avg CPL", val: "$42.67" },
  ];

  const sel = selectedIdx !== null ? campaigns[selectedIdx] : null;
  const accent = DEMO_ACCENT;
  const accentMuted = "rgba(194, 89, 194, 0.25)";
  const bgMain = "#0a0a0a";
  const bgCard = "#1a1a1a";
  const border = "#2a2a2a";
  const text = "rgba(255,255,255,0.95)";
  const textMuted = "rgba(255,255,255,0.6)";

  return (
    <AppFrame label="Ad Manager">
      <div
        style={{
          background: bgMain,
          height: "380px",
          overflowY: "auto" as const,
        }}
      >
        {/* Page header */}
        <div
          style={{
            padding: "12px 16px 10px",
            borderBottom: `1px solid ${border}`,
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 800,
              color: text,
              marginBottom: "2px",
            }}
          >
            Ad Manager
          </div>
          <div style={{ fontSize: "9px", color: textMuted }}>
            Facebook &amp; Instagram · Messenger Campaigns · Last 30 Days
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "6px",
            padding: "10px 12px",
            borderBottom: `1px solid ${border}`,
          }}
        >
          {topStats.map((s) => (
            <div
              key={s.label}
              style={{
                background: bgCard,
                borderRadius: "8px",
                padding: "8px 7px",
                border: `1px solid ${border}`,
              }}
            >
              <div
                style={{
                  fontSize: "7.5px",
                  color: textMuted,
                  fontWeight: 600,
                  marginBottom: "3px",
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 900,
                  color: (s as { label: string; val: string; blue?: boolean })
                    .blue
                    ? accent
                    : text,
                }}
              >
                {s.val}
              </div>
            </div>
          ))}
        </div>

        {/* Campaign table header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.8fr 1.2fr 1fr 0.8fr 0.8fr 1fr",
            padding: "5px 12px",
            gap: "4px",
            borderBottom: `1px solid ${border}`,
          }}
        >
          {["CAMPAIGN", "STATUS", "SPEND", "MSGS", "LEADS", "CPL"].map((h) => (
            <div
              key={h}
              style={{
                fontSize: "7px",
                fontWeight: 700,
                color: h === "MSGS" ? accent : textMuted,
                letterSpacing: "0.06em",
              }}
            >
              {h}
            </div>
          ))}
        </div>

        {/* Campaign rows — clickable */}
        {campaigns.map((c, i) => {
          const isSelected = selectedIdx === i;
          return (
            <div
              key={i}
              onClick={() => {
                setHasInteracted(true);
                setSelectedIdx(isSelected ? null : i);
              }}
              style={{
                display: "grid",
                gridTemplateColumns: "2.8fr 1.2fr 1fr 0.8fr 0.8fr 1fr",
                padding: "7px 12px",
                gap: "4px",
                alignItems: "center",
                borderBottom:
                  i < campaigns.length - 1 ? `1px solid ${border}` : "none",
                borderLeft: isSelected
                  ? `2.5px solid ${accent}`
                  : "2.5px solid transparent",
                background: isSelected ? accentMuted : "transparent",
                cursor: "pointer",
                transition: "background 0.15s ease, border-color 0.15s ease",
              }}
            >
              <div
                style={{
                  fontSize: "9.5px",
                  fontWeight: 700,
                  color: isSelected ? accent : text,
                  lineHeight: 1.3,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {c.name}
              </div>
              <div>
                <span
                  style={{
                    fontSize: "8px",
                    fontWeight: 700,
                    padding: "2px 6px",
                    borderRadius: "999px",
                    whiteSpace: "nowrap" as const,
                    background: "rgba(34,197,94,0.2)",
                    color: "#22C55E",
                  }}
                >
                  ● Active
                </span>
              </div>
              <div
                style={{ fontSize: "9.5px", fontWeight: 600, color: textMuted }}
              >
                {c.spend}
              </div>
              <div style={{ fontSize: "10px", fontWeight: 800, color: accent }}>
                {c.msgs}
              </div>
              <div style={{ fontSize: "10px", fontWeight: 800, color: accent }}>
                {c.leads}
              </div>
              <div
                style={{ fontSize: "9.5px", fontWeight: 600, color: textMuted }}
              >
                {c.cpl}
              </div>
            </div>
          );
        })}

        {/* Bottom panel — campaign detail or default top ad */}
        <div
          style={{
            margin: "8px 12px 12px",
            padding: "10px 12px",
            border: `1px solid ${border}`,
            borderRadius: "8px",
            background: sel ? bgCard : bgCard,
            transition: "background 0.2s ease",
          }}
        >
          {sel ? (
            <>
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "8.5px",
                    fontWeight: 800,
                    color: accent,
                    letterSpacing: "0.04em",
                  }}
                >
                  CAMPAIGN DETAIL · {sel.name.toUpperCase()}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIdx(null);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "10px",
                    color: textMuted,
                    padding: "0 2px",
                    lineHeight: 1,
                  }}
                >
                  ✕
                </button>
              </div>

              {/* 4 mini metrics */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "5px",
                  marginBottom: "8px",
                }}
              >
                {(
                  [
                    ["Reach", sel.reach],
                    ["Impressions", sel.impressions],
                    ["Conv Rate", sel.convRate],
                    ["Cost/Msg", sel.costPerMsg],
                  ] as [string, string][]
                ).map(([label, val]) => (
                  <div
                    key={label}
                    style={{
                      background: bgMain,
                      borderRadius: "5px",
                      padding: "5px 6px",
                      border: `1px solid ${border}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "6.5px",
                        color: textMuted,
                        fontWeight: 600,
                        marginBottom: "2px",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: 800,
                        color: label === "Conv Rate" ? "#22C55E" : accent,
                      }}
                    >
                      {val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Audience + budget */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                  padding: "5px 7px",
                  background: bgMain,
                  borderRadius: "5px",
                  border: `1px solid ${border}`,
                }}
              >
                <span style={{ fontSize: "8px", color: textMuted }}>
                  👥 {sel.audience}
                </span>
                <span
                  style={{ fontSize: "8px", color: textMuted, fontWeight: 600 }}
                >
                  💰 {sel.budget}
                </span>
              </div>

              {/* 7-day spend chart */}
              <div style={{ marginBottom: "8px" }}>
                <div
                  style={{
                    fontSize: "6.5px",
                    color: textMuted,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    marginBottom: "4px",
                  }}
                >
                  7-DAY SPEND
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "3px",
                    alignItems: "flex-end",
                    height: "22px",
                  }}
                >
                  {sel.spendBars.map((pct, j) => (
                    <div
                      key={j}
                      style={{
                        flex: 1,
                        background: `rgba(194,89,194,${0.4 + j * 0.1})`,
                        borderRadius: "2px 2px 0 0",
                        height: `${pct}%`,
                      }}
                    />
                  ))}
                </div>
                <div style={{ display: "flex", marginTop: "2px" }}>
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, j) => (
                    <div
                      key={j}
                      style={{
                        flex: 1,
                        fontSize: "6px",
                        color: textMuted,
                        textAlign: "center" as const,
                      }}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* Top creative */}
              <div
                style={{
                  padding: "6px 8px",
                  background: bgMain,
                  borderRadius: "5px",
                  border: `1px solid ${border}`,
                }}
              >
                <div
                  style={{
                    fontSize: "6.5px",
                    color: textMuted,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    marginBottom: "3px",
                  }}
                >
                  TOP CREATIVE
                </div>
                <div
                  style={{
                    fontSize: "9.5px",
                    fontWeight: 700,
                    color: text,
                    marginBottom: "2px",
                  }}
                >
                  {sel.topAd}
                </div>
                <div
                  style={{ fontSize: "8px", color: textMuted, lineHeight: 1.4 }}
                >
                  {sel.topAdBody}
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginBottom: "7px",
                }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill={accent}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span
                  style={{ fontSize: "9px", fontWeight: 800, color: accent }}
                >
                  Top Ad · High Intent Retarget
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "6px",
                    background: `linear-gradient(135deg, ${DEMO_ACCENT_HOVER}, ${accent})`,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: text,
                      lineHeight: 1.3,
                      marginBottom: "3px",
                    }}
                  >
                    Dream Kitchen. No Upfront Cost.
                  </div>
                  <div
                    style={{
                      fontSize: "8.5px",
                      color: textMuted,
                      lineHeight: 1.4,
                    }}
                  >
                    Finally get the kitchen you&apos;ve been waiting for. See
                    prices &amp; availability from top local remodelers — fast
                    &amp; free.
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    <span
                      style={{
                        fontSize: "8px",
                        color: accent,
                        fontWeight: 700,
                      }}
                    >
                      CPL $36 · CTR 7.8% · 15 leads
                    </span>
                  </div>
                </div>
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
    tagColor: "rgb(180, 83, 9)",
    tagBg: "rgba(180, 83, 9, 0.12)",
    tagBorder: "rgba(180, 83, 9, 0.4)",
    tagGlow: "37,99,235",
    checkBg: "rgba(180, 83, 9, 0.2)",
    checkStroke: "rgb(180, 83, 9)",
    ctaColor: "rgb(180, 83, 9)",
    headline: (
      <>
        Ads That Bring In
        <br />
        Booked Jobs, Not Just Clicks
      </>
    ),
    desc: (
      <>
        Fully managed Facebook &amp; Instagram{" "}
        <strong>Messenger campaigns</strong> — every ad click opens a
        conversation, not a form.
        <span style={{ display: "block", marginTop: "8px" }}>
          <strong>Leads are pre-qualified &amp; engaged in chat</strong> before
          they ever reach your calendar.
        </span>
      </>
    ),
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
    tagColor: "rgb(180, 83, 9)",
    tagBg: "rgba(180, 83, 9, 0.12)",
    tagBorder: "rgba(180, 83, 9, 0.4)",
    tagGlow: "37,99,235",
    checkBg: "rgba(180, 83, 9, 0.2)",
    checkStroke: "rgb(180, 83, 9)",
    ctaColor: "rgb(180, 83, 9)",
    headline: (
      <>
        Every Lead Organized
        <br />
        and Prioritized for You
      </>
    ),
    desc: (
      <>
        High-value leads are automatically surfaced so you never miss a hot
        prospect. <strong>Filter by project type, budget, and status</strong> —
        then take action in one click.
      </>
    ),
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
    tagColor: "rgb(180, 83, 9)",
    tagBg: "rgba(180, 83, 9, 0.12)",
    tagBorder: "rgba(180, 83, 9, 0.4)",
    tagGlow: "37,99,235",
    checkBg: "rgba(180, 83, 9, 0.2)",
    checkStroke: "rgb(180, 83, 9)",
    ctaColor: "rgb(180, 83, 9)",
    headline: (
      <>
        Walk In Already
        <br />
        Knowing the Deal
      </>
    ),
    desc: (
      <>
        Every qualified lead arrives with a{" "}
        <strong>detailed project brief</strong> — budget, scope, risks, and a
        game plan — all pulled from the conversation.
        <span style={{ display: "block", marginTop: "8px" }}>
          <strong>Sent to you by email or text</strong> the moment a lead
          finishes qualifying.
        </span>
      </>
    ),
    bullets: [
      "Sent to you by email or text the moment a lead finishes qualifying",
      "Budget, timeline, and scope confirmed — no surprises at the door",
      "Competing bids and red flags surfaced so you walk in ready to close",
    ],
    Mockup: EstimatorBriefMockup,
    imgLeft: true,
  },
  {
    tag: "Dashboard",
    tagColor: "rgb(180, 83, 9)",
    tagBg: "rgba(180, 83, 9, 0.12)",
    tagBorder: "rgba(180, 83, 9, 0.4)",
    tagGlow: "37,99,235",
    checkBg: "rgba(180, 83, 9, 0.2)",
    checkStroke: "rgb(180, 83, 9)",
    ctaColor: "rgb(180, 83, 9)",
    headline: (
      <>
        Your Entire Pipeline,
        <br />
        At a Glance
      </>
    ),
    desc: (
      <>
        See ready-to-book leads, pipeline value, qualified lead count, and
        average response time — all in one view.{" "}
        <strong>Know the health of your business at any moment</strong>, without
        digging through spreadsheets.
      </>
    ),
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
  Dashboard: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  ),
  "Lead Management": (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  "Estimator Brief": (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M4 6h2v14h12V6h2" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  "Ad Management": (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
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

        /* Feature rows — 2 columns, border between */
        .pf-feature-rows {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px 0;
          align-items: start;
        }
        .pf-feature-cell {
          padding: 0 40px;
        }
        .pf-feature-cell-left {
          border-right: 1px solid #E2E8F0;
          padding-right: 48px;
        }
        .pf-feature-cell-right {
          padding-left: 48px;
        }
        .pf-row {
          display: block;
        }
        @media (max-width: 900px) {
          .pf-feature-rows { grid-template-columns: 1fr; gap: 56px 0; }
          .pf-feature-cell-left { border-right: none; padding-right: 40px; padding-bottom: 56px; border-bottom: 1px solid #E2E8F0; }
          .pf-feature-cell-right { padding-left: 40px; }
        }
        @media (max-width: 480px) {
          .pf-feature-cell { padding: 0 16px; }
          .pf-feature-cell-left { padding-right: 16px; padding-bottom: 40px; }
          .pf-feature-cell-right { padding-left: 16px; }
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

        /* App frame — default uses the former hover border/shadow */
        .pf-app-frame {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow:
            0 32px 72px rgba(26,107,138,0.14),
            0 10px 28px rgba(26,107,138,0.09),
            0 0 0 1.5px rgba(26,107,138,0.20);
          transition: box-shadow 0.3s ease;
        }
        .pf-app-frame:hover {
          cursor: pointer;
        }
        .pf-app-frame--dark .pf-titlebar {
          background: #1a1a1a;
          border-bottom-color: #2a2a2a;
        }
        .pf-app-frame--dark .pf-titlebar-label {
          color: rgba(255,255,255,0.85);
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
          margin: 0 0 28px;
        }
        .pf-feature-desc strong { color: #0F172A; font-weight: 700; }

        /* Bullets */
        .pf-bullets { display: flex; flex-direction: column; gap: 8px; margin-bottom: 28px; }
        .pf-bullet { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #334155; font-weight: 500; }
        .pf-bullet-check {
          width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0;
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
            <h2 className="pf-section-title">
              We Run the Ads. We <span style={{ color: "rgb(180, 83, 9)" }}>Qualify</span> the Leads.
              <br />
              <span style={{ color: "#0F172A" }}>You Close the Jobs.</span>
            </h2>
            <p className="pf-section-sub">
              <strong>
                Targeted ads, intelligent lead qualification, and a simple CRM
              </strong>{" "}
              built for remodelers — all working together to{" "}
              <strong>book your calls automatically</strong>.
            </p>
          </div>

          {/* ── Feature rows ── */}
          <div className="pf-feature-rows">
            {rows.map((row, idx) => {
              const textCol = (
                <div>
                  {/* Tag */}
                  <div className="pf-tag" style={{ color: row.tagColor }}>
                    <div
                      className="pf-tag-icon"
                      style={{
                        background: row.tagColor,
                      }}
                    >
                      {tagIcons[row.tag]}
                    </div>
                    {row.tag}
                  </div>

                  {/* Headline */}
                  <h3 className="pf-feature-headline">{row.headline}</h3>

                  {/* Desc */}
                  <p className="pf-feature-desc">{row.desc}</p>

                  {/* Bullets — varied icon colors per bullet */}
                  {row.bullets && row.bullets.length > 0 && (
                    <div className="pf-bullets">
                      {row.bullets.map((b, i) => {
                        const bulletColors = [
                          { bg: "rgba(180, 83, 9, 0.2)", stroke: "rgb(180, 83, 9)" },
                          { bg: "rgba(13, 148, 136, 0.2)", stroke: "rgb(13, 148, 136)" },
                          { bg: "rgba(139, 92, 246, 0.2)", stroke: "rgb(139, 92, 246)" },
                        ];
                        const c = bulletColors[i % bulletColors.length];
                        return (
                          <div key={i} className="pf-bullet">
                            <div
                              className="pf-bullet-check"
                              style={{
                                background: c.bg,
                                border: `1px solid ${c.stroke}`,
                                color: c.stroke,
                              }}
                            >
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            {b}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* CTA — every other panel (Ad Management, Dashboard) */}
                  {(idx === 0 || idx === 3) && (
                    <Link
                      href="/opt-in"
                      className="pf-cta-link"
                      style={{ color: row.ctaColor }}
                    >
                      {idx === 3 ? "View dashboard" : "Get started"} <span style={{ fontSize: "16px" }}>→</span>
                    </Link>
                  )}
                </div>
              );

              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`pf-feature-cell ${isLeft ? "pf-feature-cell-left" : "pf-feature-cell-right"}`}
                >
                  <div className="pf-row">
                    {textCol}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
