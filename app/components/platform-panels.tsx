"use client";

/**
 * FlowQualify app screens rebuilt in HTML for the platform tour. Real text
 * instead of screenshots, so they stay sharp at any size and reflow on phones
 * (via the `dm` container query). All names, numbers and phone numbers are
 * demo data — no client or homeowner details.
 */

import { Fragment } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  BookOpen,
  CalendarCheck,
  CalendarDays,
  ChartColumn,
  Check,
  Clock,
  DollarSign,
  FileText,
  LayoutDashboard,
  Megaphone,
  RefreshCw,
  Search,
  Users,
} from "lucide-react";

export type PanelId = "leads" | "ads" | "insights" | "pipeline";

/* ── shared styles ────────────────────────────────────────────────────────── */

export const PANEL_CSS = `
  .dm-app {
    container-type: inline-size;
    container-name: dm;
    display: flex;
    height: 100%;
    background: #F6F7FB;
    color: #0F172A;
    font-size: 13px;
    line-height: 1.4;
    text-align: left;
  }
  .dm-rail {
    flex-shrink: 0;
    width: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 14px 0;
    background: #FFFFFF;
    border-right: 1px solid #E6E8EF;
  }
  .dm-logo {
    display: grid; place-items: center;
    width: 30px; height: 30px; margin-bottom: 10px;
    border-radius: 9px;
    background: linear-gradient(145deg, #6366F1, #4338CA);
    color: #fff; font-size: 11px; font-weight: 800; letter-spacing: -0.02em;
  }
  .dm-rail-btn {
    display: grid; place-items: center;
    width: 34px; height: 34px; border-radius: 9px;
    color: #64748B;
  }
  .dm-rail-btn.on { background: #4F46E5; color: #fff; box-shadow: 0 4px 10px -4px rgba(79,70,229,0.6); }
  .dm-main { flex: 1; min-width: 0; padding: 18px 20px; overflow: hidden; }

  .dm-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
  .dm-title { margin: 0; font-size: 17px; font-weight: 800; letter-spacing: -0.02em; display: flex; align-items: center; gap: 8px; }
  .dm-sub { margin: 2px 0 0; font-size: 12px; color: #64748B; }
  .dm-muted { color: #64748B; }
  .dm-card { background: #fff; border: 1px solid #E6E8EF; border-radius: 12px; }
  .dm-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #94A3B8; }

  .dm-pill {
    display: inline-flex; align-items: center; gap: 4px;
    height: 20px; padding: 0 7px; border-radius: 999px;
    font-size: 10.5px; font-weight: 700; white-space: nowrap;
  }
  .dm-fb { background: #1877F2; color: #fff; }
  .dm-ig { background: linear-gradient(90deg, #C13584, #E1306C); color: #fff; }
  .dm-hv { background: #ECFDF3; color: #047857; border: 1px solid #BBF7D0; }
  .dm-ready { background: #EEF2FF; color: #4338CA; }
  .dm-won { background: #ECFDF3; color: #047857; }
  .dm-qual { background: #FFFBEB; color: #B45309; }
  .dm-up { background: #ECFDF3; color: #047857; }
  .dm-down { background: #FEF2F2; color: #B91C1C; }
  .dm-new { background: #4F46E5; color: #fff; }

  .dm-seg { display: inline-flex; gap: 4px; }
  .dm-seg span {
    display: inline-flex; align-items: center; gap: 5px;
    height: 26px; padding: 0 10px; border-radius: 8px;
    border: 1px solid #E6E8EF; background: #fff;
    font-size: 11.5px; font-weight: 600; color: #475569; white-space: nowrap;
  }
  .dm-seg span.on { background: #0F172A; border-color: #0F172A; color: #fff; }

  /* leads */
  .dm-search {
    display: inline-flex; align-items: center; gap: 6px;
    height: 30px; width: 190px; padding: 0 10px; border-radius: 9px;
    border: 1px solid #E6E8EF; background: #fff; color: #94A3B8; font-size: 12px;
  }
  .dm-filters { display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap; }
  .dm-filters span b { font-weight: 800; margin-left: 2px; opacity: 0.6; }
  .dm-table { clip-path: inset(0 round 12px); }
  .dm-tr {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1.9fr) minmax(0, 1.3fr) minmax(0, 1.1fr) minmax(0, 0.95fr) minmax(0, 0.6fr);
    align-items: center; gap: 12px;
    padding: 9px 14px;
    border-top: 1px solid #EEF0F5;
  }
  .dm-tr:first-child { border-top: 0; }
  .dm-th { padding: 9px 14px; background: #FAFBFD; }
  .dm-th > span { font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #94A3B8; }
  .dm-lead { display: flex; align-items: center; gap: 10px; min-width: 0; }
  .dm-av {
    flex-shrink: 0; display: grid; place-items: center;
    width: 28px; height: 28px; border-radius: 50%;
    background: #EEF2FF; color: #4338CA; font-size: 10.5px; font-weight: 800;
  }
  .dm-name { display: flex; align-items: center; gap: 5px; font-weight: 700; font-size: 13px; white-space: nowrap; min-width: 0; }
  .dm-name > span:first-child { overflow: hidden; text-overflow: ellipsis; }
  .dm-meta { display: flex; align-items: center; gap: 6px; margin-top: 2px; }
  .dm-meta .dm-pill { height: 16px; padding: 0 5px; font-size: 9.5px; }
  .dm-phone { font-size: 11.5px; color: #64748B; font-variant-numeric: tabular-nums; white-space: nowrap; }
  .dm-cell { font-size: 12.5px; font-weight: 600; color: #1E293B; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .dm-num { font-variant-numeric: tabular-nums; }
  .dm-date { font-size: 12px; color: #64748B; white-space: nowrap; }
  .dm-flag::before { content: ""; position: absolute; left: 0; top: 8px; bottom: 8px; width: 3px; border-radius: 0 3px 3px 0; background: #22C55E; }
  .dm-tr-new::after {
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background: rgba(79,70,229,0.07);
    opacity: 0; transition: opacity 0.6s ease;
  }
  .dm-live .dm-tr-new::after { opacity: 1; }
  .dm-tr-new .dm-date { color: #4F46E5; font-weight: 700; }
  .dm-mobile-meta { display: none; }

  /* ads */
  .dm-status { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px; font-size: 11.5px; }
  .dm-conn { display: inline-flex; align-items: center; gap: 6px; height: 24px; padding: 0 10px; border-radius: 999px; background: #EEF2FF; color: #4338CA; font-weight: 700; }
  .dm-dot { width: 7px; height: 7px; border-radius: 50%; background: #22C55E; box-shadow: 0 0 0 3px rgba(34,197,94,0.18); }
  .dm-stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); clip-path: inset(0 round 12px); }
  .dm-stat { padding: 12px 14px; border-left: 1px solid #EEF0F5; }
  .dm-stat:first-child { border-left: 0; }
  .dm-stat-top { display: flex; align-items: center; justify-content: space-between; gap: 6px; font-size: 11.5px; color: #64748B; }
  .dm-stat-top > span:first-child, .dm-stat-hint { min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .dm-stat-val { margin: 4px 0 2px; font-size: 21px; font-weight: 800; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
  .dm-stat-hint { display: block; font-size: 11px; color: #94A3B8; }
  .dm-strip { display: flex; flex-wrap: wrap; gap: 4px 18px; margin: 10px 2px 12px; font-size: 11.5px; color: #64748B; }
  .dm-strip b { color: #0F172A; font-weight: 700; }
  .dm-chart { padding: 12px 14px 8px; }
  .dm-chart-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }
  .dm-legend { display: flex; gap: 12px; font-size: 11px; color: #64748B; }
  .dm-legend i { display: inline-block; width: 8px; height: 8px; border-radius: 2px; margin-right: 5px; vertical-align: middle; }
  .dm-chart svg { display: block; width: 100%; height: 190px; margin-top: 10px; }

  /* insights */
  .dm-back { display: inline-flex; align-items: center; gap: 5px; font-size: 12px; color: #64748B; margin-bottom: 8px; }
  .dm-person { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  .dm-person .dm-av { width: 34px; height: 34px; font-size: 12px; background: #4F46E5; color: #fff; }
  .dm-tabs { display: flex; gap: 18px; margin: 12px 0 14px; border-bottom: 1px solid #E6E8EF; font-size: 12.5px; font-weight: 600; color: #64748B; }
  .dm-tabs span { padding-bottom: 8px; white-space: nowrap; }
  .dm-tabs span.on { color: #4F46E5; box-shadow: inset 0 -2px 0 #4F46E5; }
  .dm-cols { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 12px; }
  .dm-stack { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
  .dm-box { padding: 12px 14px; }
  .dm-score { display: flex; align-items: baseline; gap: 6px; margin: 6px 0 8px; }
  .dm-score b { font-size: 30px; font-weight: 800; letter-spacing: -0.03em; line-height: 1; }
  .dm-bar { height: 7px; border-radius: 99px; background: #EEF0F5; overflow: hidden; }
  .dm-bar i { display: block; height: 100%; width: 85%; border-radius: 99px; background: linear-gradient(90deg, #6366F1, #10B981); }
  .dm-note { margin: 8px 0 0; font-size: 11.5px; color: #64748B; line-height: 1.5; }
  .dm-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
  .dm-fact { padding: 9px 11px; }
  .dm-fact span { display: block; font-size: 10.5px; color: #94A3B8; font-weight: 600; }
  .dm-fact b { display: block; margin-top: 2px; font-size: 12.5px; font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .dm-assess { display: flex; align-items: center; gap: 6px; margin-top: 8px; font-size: 12.5px; font-weight: 700; }
  .dm-chips { display: flex; flex-wrap: wrap; gap: 5px; margin: 5px 0 10px; }
  .dm-chip { padding: 3px 8px; border-radius: 6px; font-size: 11.5px; font-weight: 600; border: 1px solid; }
  .dm-chip-a { background: #EFF6FF; border-color: #BFDBFE; color: #1D4ED8; }
  .dm-chip-b { background: #F5F3FF; border-color: #DDD6FE; color: #6D28D9; }
  .dm-chip-c { background: #FFF7ED; border-color: #FED7AA; color: #C2410C; }
  .dm-sub-h { font-size: 12px; font-weight: 700; color: #334155; }
  .dm-brief { display: flex; align-items: center; gap: 10px; padding: 10px 12px; }
  .dm-brief-ic { display: grid; place-items: center; width: 30px; height: 30px; border-radius: 8px; background: #ECFDF3; color: #047857; flex-shrink: 0; }

  /* pipeline */
  .dm-kpis { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; margin-bottom: 12px; }
  .dm-kpi { padding: 12px; }
  .dm-kpi-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
  .dm-kpi-ic { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 8px; background: #F1F5F9; color: #4F46E5; }
  .dm-kpi-label { font-size: 11.5px; color: #64748B; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .dm-kpi-val { margin: 2px 0; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
  .dm-kpi-sub { font-size: 10.5px; color: #94A3B8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .dm-pipe { padding: 14px 16px; }
  .dm-rt { background: #EEF2FF; color: #4338CA; font-size: 9.5px; letter-spacing: 0.06em; }
  .dm-bars { display: grid; grid-template-columns: 86px 1fr; row-gap: 20px; column-gap: 10px; align-items: center; margin: 22px 0 8px; }
  .dm-bars > span { font-size: 11.5px; color: #475569; text-align: right; }
  .dm-track { position: relative; height: 20px; background: repeating-linear-gradient(90deg, transparent 0 calc(25% - 1px), #EEF0F5 calc(25% - 1px) 25%); }
  .dm-track i { position: absolute; left: 0; top: 0; bottom: 0; border-radius: 4px; }
  .dm-axis { display: flex; justify-content: space-between; margin-left: 96px; font-size: 10.5px; color: #94A3B8; }
  .dm-total { margin-top: 18px; padding: 14px 16px; }
  .dm-total-row { display: grid; grid-template-columns: auto minmax(0, 320px); justify-content: space-between; align-items: center; gap: 16px; }
  .dm-total-val { font-size: 26px; font-weight: 800; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
  .dm-stages { display: flex; flex-direction: column; gap: 7px; font-size: 12px; }
  .dm-stages div { display: flex; align-items: center; gap: 8px; white-space: nowrap; }
  .dm-stages div b { margin-left: auto; }
  .dm-stages i { width: 4px; height: 14px; border-radius: 2px; }
  .dm-count { display: grid; place-items: center; min-width: 20px; height: 18px; padding: 0 5px; border-radius: 99px; background: #0F172A; color: #fff; font-size: 10px; font-weight: 800; }

  /* ── mid-width frames (tablets): drop the date column ── */
  @container dm (max-width: 820px) {
    .dm-tr { grid-template-columns: minmax(0, 1.8fr) minmax(0, 1.2fr) minmax(0, 1.1fr) minmax(0, 1fr); }
    .dm-tr > .dm-col-date, .dm-th > span:last-child { display: none; }
    .dm-kpi-sub { display: none; }
  }

  /* ── narrow frames (phones, small tablets) ── */
  @container dm (max-width: 640px) {
    .dm-rail { display: none; }
    .dm-main { padding: 14px; }
    .dm-search { display: none; }
    .dm-th { display: none; }
    .dm-tr { grid-template-columns: minmax(0, 1fr) auto; gap: 4px 10px; padding: 10px 12px; }
    .dm-tr > .dm-col-project, .dm-tr > .dm-col-budget, .dm-tr > .dm-col-date { display: none; }
    .dm-phone { display: none; }
    .dm-mobile-meta { display: block; font-size: 11.5px; color: #64748B; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .dm-seg .dm-hide-sm { display: none; }
    .dm-head-ads .dm-seg { display: none; }
    .dm-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .dm-stat:nth-child(3) { border-left: 0; }
    .dm-stat:nth-child(n + 3) { border-top: 1px solid #EEF0F5; }
    .dm-stat-val { font-size: 19px; }
    .dm-stat-top { flex-direction: column-reverse; align-items: flex-start; gap: 5px; }
    .dm-stat-top > span:first-child { max-width: 100%; }
    .dm-stat-hint { display: none; }
    .dm-fact b { white-space: normal; line-height: 1.25; }
    .dm-bars > span { font-size: 11px; white-space: nowrap; }
    .dm-kpi-sub { display: block; }
    .dm-legend { display: none; }
    .dm-chart svg { height: 110px; }
    .dm-cols { grid-template-columns: 1fr; }
    .dm-tabs { gap: 14px; overflow: hidden; }
    .dm-kpis { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
    .dm-kpi-val { font-size: 18px; }
    .dm-bars { grid-template-columns: 74px 1fr; }
    .dm-axis { margin-left: 84px; }
    .dm-total-row { grid-template-columns: minmax(0, 1fr); gap: 10px; }
    .dm-bars { row-gap: 14px; margin-top: 16px; }
    .dm-track { height: 16px; }
    .dm-meta { display: none; }
  }
`;

/* ── chrome ───────────────────────────────────────────────────────────────── */

const RAIL = [
  { icon: LayoutDashboard, key: "dashboard" },
  { icon: Users, key: "leads" },
  { icon: CalendarDays, key: "appointments" },
  { icon: ChartColumn, key: "ads" },
  { icon: Megaphone, key: "campaigns" },
  { icon: BookOpen, key: "kb" },
] as const;

const RAIL_ACTIVE: Record<PanelId, string> = {
  leads: "leads",
  insights: "leads",
  ads: "ads",
  pipeline: "dashboard",
};

export function AppShell({ panel, children }: { panel: PanelId; children: React.ReactNode }) {
  return (
    <div className="dm-app">
      <nav className="dm-rail" aria-hidden="true">
        <span className="dm-logo">FQ</span>
        {RAIL.map(({ icon: Icon, key }) => (
          <span key={key} className={`dm-rail-btn${RAIL_ACTIVE[panel] === key ? " on" : ""}`}>
            <Icon size={17} strokeWidth={2} />
          </span>
        ))}
      </nav>
      <div className="dm-main">{children}</div>
    </div>
  );
}

/* ── Leads ────────────────────────────────────────────────────────────────── */

type Status = "ready" | "won" | "qual";
const STATUS: Record<Status, { label: string; cls: string }> = {
  ready: { label: "Ready to Book", cls: "dm-ready" },
  won: { label: "Booked/Won", cls: "dm-won" },
  qual: { label: "Qualifying", cls: "dm-qual" },
};

const LEADS: Array<{
  name: string; initials: string; src: "fb" | "ig"; hv?: boolean; phone: string;
  project: string; budget: string; status: Status; date: string; isNew?: boolean;
}> = [
  { name: "Jessica Moreno", initials: "JM", src: "fb", hv: true, phone: "(512) 555-0143", project: "High-End Kitchen", budget: "$100,000–200,000", status: "ready", date: "Just now", isNew: true },
  { name: "Mark Delaney", initials: "MD", src: "ig", phone: "(614) 555-0178", project: "Primary Bath Remodel", budget: "$20,000–28,000", status: "won", date: "9/13/2026" },
  { name: "Priya Shah", initials: "PS", src: "fb", hv: true, phone: "(469) 555-0112", project: "Cabinets & Counters", budget: "$35,000–45,000", status: "qual", date: "9/12/2026" },
  { name: "Tom Becker", initials: "TB", src: "fb", phone: "(303) 555-0161", project: "Tub-to-Shower", budget: "$15,000–20,000", status: "won", date: "9/12/2026" },
  { name: "Alicia Grant", initials: "AG", src: "ig", phone: "(704) 555-0190", project: "Full Kitchen Remodel", budget: "$45,000–55,000", status: "ready", date: "9/11/2026" },
  { name: "Ryan Cole", initials: "RC", src: "fb", phone: "(480) 555-0127", project: "Guest Bath Refresh", budget: "Needs guidance", status: "qual", date: "9/10/2026" },
  { name: "Dana Whitfield", initials: "DW", src: "fb", hv: true, phone: "(615) 555-0134", project: "Kitchen + Primary Bath", budget: "$75,000–100,000", status: "won", date: "9/9/2026" },
  { name: "Luis Ortega", initials: "LO", src: "ig", phone: "(407) 555-0155", project: "Full Bath Remodel", budget: "$18,000–25,000", status: "won", date: "9/8/2026" },
  { name: "Karen Holt", initials: "KH", src: "fb", phone: "(919) 555-0108", project: "Full Kitchen Remodel", budget: "$40,000–50,000", status: "qual", date: "9/8/2026" },
];

function Source({ src }: { src: "fb" | "ig" }) {
  return src === "fb"
    ? <span className="dm-pill dm-fb">Facebook</span>
    : <span className="dm-pill dm-ig">Instagram</span>;
}

export function LeadsPanel({ live }: { live: boolean }) {
  return (
    <div className={live ? "dm-live" : undefined}>
      <div className="dm-head">
        <div>
          <h4 className="dm-title">Leads</h4>
          <p className="dm-sub">74 total · 25 ready to book</p>
        </div>
        <span className="dm-search"><Search size={13} /> Search leads</span>
      </div>
      <div className="dm-filters dm-seg">
        <span className="on">All <b>74</b></span>
        <span>Ready to Book <b>25</b></span>
        <span className="dm-hide-sm">Qualifying <b>33</b></span>
        <span className="dm-hide-sm">Booked/Won <b>16</b></span>
      </div>
      <div className="dm-card dm-table">
        <div className="dm-tr dm-th">
          <span>Lead</span><span>Project</span><span>Budget</span><span>Status</span><span>Date</span>
        </div>
        {LEADS.map((l) => (
          <div key={l.name} className={`dm-tr${l.hv ? " dm-flag" : ""}${l.isNew ? " dm-tr-new" : ""}`}>
            <div className="dm-lead">
              <span className="dm-av">{l.initials}</span>
              <div style={{ minWidth: 0 }}>
                <div className="dm-name">
                  <span>{l.name}</span>
                  {l.hv && <span className="dm-pill dm-hv">High Value</span>}
                </div>
                <div className="dm-meta"><Source src={l.src} /><span className="dm-phone">{l.phone}</span></div>
                <div className="dm-mobile-meta">{l.project} · {l.budget.replace(/,000/g, "K")}</div>
              </div>
            </div>
            <span className="dm-cell dm-col-project">{l.project}</span>
            <span className="dm-cell dm-num dm-col-budget">{l.budget}</span>
            <span><span className={`dm-pill ${STATUS[l.status].cls}`}>{STATUS[l.status].label}{l.status === "ready" && <Check size={11} strokeWidth={3} />}</span></span>
            <span className="dm-date dm-col-date">{l.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Ads & Performance ────────────────────────────────────────────────────── */

// daily spend ($) and form submissions — 30 days of demo data
const SPEND = [38, 52, 45, 60, 34, 41, 70, 48, 55, 39, 62, 58, 44, 51, 66, 47, 40, 57, 63, 49, 53, 72, 45, 59, 61, 37, 68, 64, 56, 60];
const FORMS = [1, 2, 2, 3, 1, 1, 3, 2, 2, 1, 3, 2, 2, 2, 3, 2, 1, 2, 3, 2, 2, 4, 2, 3, 3, 1, 3, 3, 2, 3];

function SpendChart() {
  const W = 600, H = 150, pad = 4, max = 80;
  const bw = (W - pad * 2) / SPEND.length;
  const pts = FORMS.map((f, i) => `${(pad + bw * i + bw / 2).toFixed(1)},${(H - 8 - (f / 4) * (H - 40)).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="#EEF0F5" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      ))}
      {SPEND.map((s, i) => {
        const h = (s / max) * (H - 12);
        return <rect key={i} x={pad + bw * i + bw * 0.16} y={H - h} width={bw * 0.68} height={h} rx="2" fill="#6366F1" opacity="0.85" />;
      })}
      <polyline points={pts} fill="none" stroke="#10B981" strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

const AD_STATS = [
  { label: "Ad Spend", value: "$3,667.22", delta: "+197%", up: false, hint: "What you spent on Meta ads" },
  { label: "Form Submissions", value: "67", delta: "+1240%", up: true, hint: "Instant-form leads from your ads" },
  { label: "Cost Per Form", value: "$38.19", delta: "+78%", up: false, hint: "Spend ÷ form submissions" },
  { label: "Impressions", value: "44,065", delta: "+49%", up: true, hint: "Times your ads were seen" },
];

export function AdsPanel() {
  return (
    <div>
      <div className="dm-head dm-head-ads">
        <div>
          <h4 className="dm-title"><Megaphone size={16} color="#4F46E5" /> Ads &amp; Performance</h4>
          <p className="dm-sub">What your Meta ads are doing, in plain numbers.</p>
        </div>
        <div className="dm-seg">
          <span>Last 7 Days</span>
          <span>Last 30 Days</span>
          <span className="on">Last 90 Days</span>
          <span><RefreshCw size={11} /> Sync</span>
        </div>
      </div>
      <div className="dm-status">
        <span className="dm-conn"><span className="dm-dot" /> Meta Connected</span>
        <span className="dm-muted">Last synced <b style={{ color: "#0F172A" }}>Just now</b></span>
      </div>
      <div className="dm-card dm-stats">
        {AD_STATS.map((s) => (
          <div key={s.label} className="dm-stat">
            <div className="dm-stat-top">
              <span>{s.label}</span>
              <span className={`dm-pill ${s.up ? "dm-up" : "dm-down"}`}>{s.delta}</span>
            </div>
            <div className="dm-stat-val">{s.value}</div>
            <div className="dm-stat-hint">{s.hint}</div>
          </div>
        ))}
      </div>
      <div className="dm-strip">
        <span>People reached <b>16,876</b></span>
        <span>Link clicks <b>924</b></span>
        <span>Click-through rate <b>2.10%</b></span>
        <span>Messaging chats <b>61</b></span>
      </div>
      <div className="dm-card dm-chart">
        <div className="dm-chart-head">
          <div>
            <div style={{ fontWeight: 800, fontSize: 13 }}>Spend &amp; form submissions over time</div>
            <div className="dm-sub">What you spent each day and the forms it brought in.</div>
          </div>
          <div className="dm-legend">
            <span><i style={{ background: "#6366F1" }} />Spend</span>
            <span><i style={{ background: "#10B981" }} />Form submissions</span>
          </div>
        </div>
        <SpendChart />
      </div>
    </div>
  );
}

/* ── Lead insights ────────────────────────────────────────────────────────── */

export function InsightsPanel() {
  return (
    <div>
      <span className="dm-back"><ArrowLeft size={13} /> Back to leads</span>
      <div className="dm-person">
        <span className="dm-av">JM</span>
        <h4 className="dm-title" style={{ fontSize: 16 }}>Jessica Moreno</h4>
        <span className="dm-pill dm-hv">High Value</span>
        <span className="dm-pill dm-fb">Facebook</span>
      </div>
      <div className="dm-tabs">
        <span>Lead Details</span>
        <span className="on">Insights</span>
        <span>Est. Brief</span>
        <span>Appts</span>
        <span>Actions</span>
      </div>
      <div className="dm-cols">
        <div className="dm-stack">
          <div className="dm-facts">
            <div className="dm-card dm-fact"><span>Project</span><b>High-End Kitchen</b></div>
            <div className="dm-card dm-fact"><span>Budget</span><b>$100K–$200K</b></div>
            <div className="dm-card dm-fact"><span>Timeline</span><b>2–3 months</b></div>
          </div>
          <div className="dm-card dm-box">
            <div className="dm-label">Lead score</div>
            <div className="dm-score"><b>85</b><span className="dm-muted">/100</span><span className="dm-pill dm-won">High</span></div>
            <div className="dm-bar"><i /></div>
            <p className="dm-note">Ready to book a kitchen renovation and located close to your base, so it&apos;s easy to service.</p>
          </div>
          <div className="dm-card dm-box">
            <div className="dm-label">Lead assessment</div>
            <div className="dm-assess">Budget alignment <span className="dm-pill dm-won">High</span></div>
            <p className="dm-note" style={{ marginTop: 3 }}>$100,000–$200,000 is above the typical renovation range of $35,000–$100,000.</p>
            <div className="dm-assess">Scope complexity <span className="dm-pill dm-qual">Medium</span></div>
            <p className="dm-note" style={{ marginTop: 3 }}>Layout changes, more storage, and functional upgrades.</p>
          </div>
        </div>
        <div className="dm-stack">
          <div className="dm-card dm-box">
            <div className="dm-label" style={{ marginBottom: 8 }}>Conversation insights</div>
            <div className="dm-sub-h">Project ideas</div>
            <div className="dm-chips">
              <span className="dm-chip dm-chip-a">update cabinets</span>
              <span className="dm-chip dm-chip-a">add an island</span>
              <span className="dm-chip dm-chip-a">new countertops</span>
            </div>
            <div className="dm-sub-h">Preferences</div>
            <div className="dm-chips">
              <span className="dm-chip dm-chip-b">modern look</span>
              <span className="dm-chip dm-chip-b">light shaker cabinets</span>
              <span className="dm-chip dm-chip-b">low-maintenance materials</span>
              <span className="dm-chip dm-chip-b">wood accents</span>
            </div>
            <div className="dm-sub-h">Constraints</div>
            <div className="dm-chips" style={{ marginBottom: 0 }}>
              <span className="dm-chip dm-chip-c">keep existing plumbing</span>
              <span className="dm-chip dm-chip-c">done before the holidays</span>
            </div>
          </div>
          <div className="dm-card dm-brief">
            <span className="dm-brief-ic"><FileText size={15} /></span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 800, fontSize: 12.5 }}>Estimator brief sent</div>
              <div className="dm-sub" style={{ marginTop: 0 }}>To your phone, inbox, and CRM · 2m ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Pipeline ─────────────────────────────────────────────────────────────── */

const KPIS = [
  { icon: DollarSign, label: "Ready to Book Pipeline", value: "$290,000", sub: "25 leads · vs previous period", delta: "480%", up: true },
  { icon: CalendarCheck, label: "Bookings (Last 90 Days)", value: "13", sub: "vs previous period", delta: "13%", up: true },
  { icon: ChartColumn, label: "Avg. Job Value", value: "$26,000", sub: "Across booked jobs" },
  { icon: Clock, label: "Avg. Response Time", value: "<1m", sub: "24/7, nights and weekends" },
];

const STAGES = [
  { label: "Booked/Won", value: 118005, count: 16, color: "#059669" },
  { label: "Ready to Book", value: 290000, count: 25, color: "#3B82F6" },
  { label: "Qualifying", value: 60000, count: 33, color: "#FBBF24" },
];

export function PipelinePanel() {
  const axisMax = 320000;
  return (
    <div>
      <div className="dm-kpis">
        {KPIS.map(({ icon: Icon, ...k }) => (
          <div key={k.label} className="dm-card dm-kpi">
            <div className="dm-kpi-top">
              <span className="dm-kpi-ic"><Icon size={14} /></span>
              {k.delta && (
                <span className={`dm-pill ${k.up ? "dm-up" : "dm-down"}`}>
                  {k.up ? <ArrowUp size={10} strokeWidth={3} /> : <ArrowDown size={10} strokeWidth={3} />}{k.delta}
                </span>
              )}
            </div>
            <div className="dm-kpi-label">{k.label}</div>
            <div className="dm-kpi-val">{k.value}</div>
            <div className="dm-kpi-sub">{k.sub}</div>
          </div>
        ))}
      </div>
      <div className="dm-card dm-pipe">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: 800, fontSize: 14 }}>Pipeline Value</span>
          <span className="dm-pill dm-rt">REAL-TIME</span>
        </div>
        <div className="dm-sub">Dollar value across each stage of your pipeline.</div>
        <div className="dm-bars">
          {STAGES.map((s) => (
            <Fragment key={s.label}>
              <span>{s.label}</span>
              <div className="dm-track">
                <i style={{ width: `${(s.value / axisMax) * 100}%`, background: s.color }} />
              </div>
            </Fragment>
          ))}
        </div>
        <div className="dm-axis"><span>$0</span><span>$80k</span><span>$160k</span><span>$240k</span><span>$320k</span></div>
        <div className="dm-card dm-total" style={{ background: "#FAFBFD" }}>
          <div className="dm-total-row">
            <div>
              <div className="dm-sub" style={{ marginTop: 0 }}>Total pipeline value</div>
              <div className="dm-total-val">$468,005</div>
            </div>
            <div className="dm-stages">
              {STAGES.map((s) => (
                <div key={s.label}>
                  <i style={{ background: s.color }} />
                  {s.label} <b className="dm-num">${s.value.toLocaleString("en-US")}</b>
                  <span className="dm-count">{s.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
