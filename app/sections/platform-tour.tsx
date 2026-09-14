"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight, Megaphone, Sparkles, TrendingUp, Users, type LucideIcon } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  AdsPanel,
  AppShell,
  InsightsPanel,
  LeadsPanel,
  PANEL_CSS,
  PipelinePanel,
  type PanelId,
} from "../components/platform-panels";

/**
 * "The Platform" — a tabbed tour of the FlowQualify app. Replaces the 3D
 * screenshot carousel (app-panels.tsx, kept for reference):
 *  - every view's headline is visible up front instead of hidden behind a swipe
 *  - the app is real HTML, so text is sharp and legible at a sensible size
 *  - it opens on Leads, then (once on screen) steps through each view every
 *    8s with a progress bar on the active tab — which is also what tells a
 *    visitor the list is clickable. One loop, then it parks back on Leads.
 *    Hover pauses it; any click, key or swipe stops it for good (they chose
 *    what to read), and the bar fills solid to mark the chosen view.
 */

const AUTO_MS = 8000;

type Tab = {
  id: PanelId; icon: LucideIcon;
  label: string;   // eyebrow on desktop, pill text on tablets
  short: string;   // pill text on phones
  screen: string;  // the app's own name for the screen, shown in the window bar
  title: string; desc: string;
};

// Written for owner-operators, not marketers: jobsite words, outcome first,
// no SaaS terms (pipeline, lead score, impressions). Titles stay under ~31
// characters so they hold one line in the desktop list; descriptions ~75.
const TABS: Tab[] = [
  {
    id: "leads",
    icon: Users,
    label: "New leads",
    short: "Leads",
    screen: "Leads",
    title: "No more tire-kickers",
    desc: "Budget, project, and timeline on every lead, before you pick up the phone.",
  },
  {
    id: "insights",
    icon: Sparkles,
    label: "Job briefs",
    short: "Briefs",
    screen: "Lead insights",
    title: "Show up ready to quote",
    desc: "Their budget, what they want, and any deal-breakers. Sent to your phone.",
  },
  {
    id: "pipeline",
    icon: TrendingUp,
    label: "Revenue",
    short: "Revenue",
    screen: "Pipeline",
    title: "See how much work is lined up",
    desc: "Booked, ready to book, or still deciding, with the dollars next to each.",
  },
  {
    id: "ads",
    icon: Megaphone,
    label: "Your ads",
    short: "Ads",
    screen: "Ad performance",
    title: "Know what your ads bring in",
    desc: "What you spent, how many homeowners reached out, and what each lead cost.",
  },
];

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function PlatformTour() {
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState<"hidden" | "shown" | "done">("hidden");
  const [auto, setAuto] = useState(true);       // false once the visitor takes over
  const [hovered, setHovered] = useState(false);
  const [docHidden, setDocHidden] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const swipe = useRef<{ x: number; y: number } | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.25 });
  const { ref: stageRef, isIntersecting: onScreen } = useIntersectionObserver({ threshold: 0.35, triggerOnce: false });

  const running = auto && onScreen && !hovered && !docHidden;

  useEffect(() => {
    // no rotation for people who've asked for less motion
    const t = setTimeout(() => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
    }, 0);
    const onVis = () => setDocHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => { clearTimeout(t); document.removeEventListener("visibilitychange", onVis); };
  }, []);

  // One "new lead just came in" moment the first time the Leads view is seen.
  useEffect(() => {
    if (!isIntersecting || toast !== "hidden" || active !== 0) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setToast("done"), 0);
      return () => clearTimeout(t);
    }
    const show = setTimeout(() => setToast("shown"), 900);
    const hide = setTimeout(() => setToast("done"), 6200);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, [isIntersecting, active, toast]);

  /** A visitor choosing a view — rotation stops for good. */
  function select(i: number, focus = false) {
    const next = (i + TABS.length) % TABS.length;
    setAuto(false);
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  }

  /** The progress bar finished — step on; after the last view, park on Leads. */
  function advance() {
    if (!auto) return;
    const next = (active + 1) % TABS.length;
    setActive(next);
    if (next === 0) setAuto(false);
  }

  function onTabKey(e: React.KeyboardEvent, i: number) {
    const map: Record<string, number> = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: TABS.length - 1 };
    if (e.key in map) { e.preventDefault(); select(map[e.key], true); }
  }

  const tab = TABS[active];

  return (
    <>
      <style>{`
        .pt-section {
          position: relative;
          overflow: hidden;
          padding: 104px 24px 112px;
          background:
            radial-gradient(55% 45% at 72% 58%, rgba(99, 102, 241, 0.16), transparent 70%),
            radial-gradient(35% 35% at 12% 30%, rgba(129, 140, 248, 0.07), transparent 70%),
            #0B0F1A;
          color: #F8FAFC;
        }
        .pt-reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.7s ${EASE}, transform 0.7s ${EASE}; }
        .pt-on .pt-reveal { opacity: 1; transform: none; }

        .pt-header { max-width: 760px; margin: 0 auto 56px; text-align: center; }
        .pt-eyebrow { display: inline-block; margin-bottom: 14px; font-size: 11px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #818CF8; }
        .pt-title { margin: 0 0 14px; font-size: clamp(30px, 3.9vw, 46px); font-weight: 900; line-height: 1.12; letter-spacing: -0.03em; color: #F8FAFC; }
        .pt-sub { margin: 0 auto; max-width: 560px; font-size: 17px; line-height: 1.6; color: #94A3B8; }

        .pt-grid {
          display: grid;
          grid-template-columns: minmax(270px, 340px) minmax(0, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          align-items: start;
        }
        .pt-left { display: flex; flex-direction: column; gap: 28px; padding-top: 4px; }

        /* tabs — a vertical feature list on desktop */
        .pt-tabs { display: flex; flex-direction: column; gap: 6px; }
        .pt-tab {
          position: relative;
          display: grid; gap: 5px;
          width: 100%; padding: 16px 44px 16px 18px;
          text-align: left; font: inherit; color: inherit;
          background: transparent;
          border: 1px solid transparent; border-radius: 14px;
          cursor: pointer;
          transition: background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .pt-tab:hover { background: rgba(255, 255, 255, 0.035); }
        .pt-tab:active { background: rgba(255, 255, 255, 0.06); }
        .pt-tab:focus-visible { outline: 2px solid #818CF8; outline-offset: 2px; }
        .pt-tab[aria-selected="true"] {
          background: linear-gradient(90deg, rgba(99, 102, 241, 0.16), rgba(99, 102, 241, 0.04));
          border-color: rgba(129, 140, 248, 0.28);
          box-shadow: inset 3px 0 0 #818CF8;
        }
        .pt-tab-label { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #64748B; transition: color 0.25s ease; }
        .pt-tab[aria-selected="true"] .pt-tab-label { color: #A5B4FC; }
        .pt-short { display: none; }
        .pt-tab-title { font-size: 17px; font-weight: 800; letter-spacing: -0.015em; color: #CBD5E1; transition: color 0.25s ease; }
        .pt-tab[aria-selected="true"] .pt-tab-title { color: #F8FAFC; }
        .pt-tab-desc { font-size: 14px; line-height: 1.55; color: #64748B; transition: color 0.25s ease; }
        .pt-tab[aria-selected="true"] .pt-tab-desc { color: #A1ACC0; }
        .pt-caption { display: none; }

        /* "this is a button" cue on the views you're not looking at */
        .pt-chev {
          position: absolute; right: 16px; top: 50%;
          display: grid; place-items: center;
          width: 24px; height: 24px; margin-top: -12px; border-radius: 999px;
          background: rgba(255, 255, 255, 0.05); color: #64748B;
          transition: transform 0.25s ${EASE}, background-color 0.25s ease, color 0.25s ease;
        }
        .pt-tab:hover .pt-chev { transform: translateX(3px); background: rgba(129, 140, 248, 0.16); color: #C7D2FE; }
        .pt-tab[aria-selected="true"] .pt-chev { opacity: 0; }

        /* auto-advance timer on the active view */
        .pt-progress {
          position: absolute; left: 18px; right: 18px; bottom: 0;
          height: 2px; border-radius: 2px;
          background: rgba(129, 140, 248, 0.16);
          overflow: hidden;
        }
        .pt-progress i {
          display: block; height: 100%;
          background: linear-gradient(90deg, #6366F1, #A5B4FC);
          transform: scaleX(0); transform-origin: left center;
          animation: pt-fill ${AUTO_MS}ms linear forwards;
        }
        @keyframes pt-fill { to { transform: scaleX(1); } }
        .pt-progress i.set { animation: pt-fill 0.45s ${EASE} forwards; }

        .pt-cta { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; padding-left: 18px; }
        .pt-btn {
          display: inline-flex; align-items: center; gap: 8px;
          min-height: 48px; padding: 0 22px; border-radius: 12px;
          background: #4F46E5; color: #fff; text-decoration: none;
          font-size: 15px; font-weight: 700; letter-spacing: -0.01em;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.15) inset, 0 12px 28px -12px rgba(79, 70, 229, 0.8);
          transition: background-color 0.2s ease, transform 0.2s ${EASE};
        }
        .pt-btn svg { transition: transform 0.25s ${EASE}; }
        .pt-btn:hover { background: #4338CA; transform: translateY(-1px); }
        .pt-btn:hover svg { transform: translateX(3px); }
        .pt-btn:active { transform: scale(0.98); }
        .pt-btn:focus-visible { outline: 2px solid #A5B4FC; outline-offset: 3px; }
        .pt-cta-note { font-size: 13px; color: #64748B; }

        /* app window */
        .pt-window {
          border-radius: 16px;
          box-shadow:
            0 30px 70px -30px rgba(0, 0, 0, 0.85),
            0 40px 120px -40px rgba(99, 102, 241, 0.45);
        }
        /* clip-path rather than overflow:hidden for the rounded corners —
           the overflow clip left a 1px grey seam down the right edge */
        .pt-frame {
          position: relative;
          border-radius: 16px;
          clip-path: inset(0 round 16px);
          background: #F6F7FB;
          border: 1px solid rgba(255, 255, 255, 0.14);
        }
        .pt-bar {
          display: flex; align-items: center; gap: 12px;
          height: 38px; padding: 0 14px;
          background: #E9EBF1; border-bottom: 1px solid #DCDFE7;
        }
        .pt-dots { display: flex; gap: 6px; }
        .pt-dots i { width: 10px; height: 10px; border-radius: 50%; background: #C9CED8; }
        .pt-url {
          flex: 1; max-width: 280px; margin: 0 auto;
          height: 24px; display: grid; place-items: center;
          border-radius: 7px; background: #F6F7FB;
          font-size: 11.5px; font-weight: 600; color: #64748B; white-space: nowrap;
        }
        .pt-live { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; color: #047857; }
        .pt-live i { width: 7px; height: 7px; border-radius: 50%; background: #22C55E; animation: pt-pulse 2s ease-out infinite; }
        @keyframes pt-pulse { 0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); } 80%, 100% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); } }

        .pt-body {
          position: relative;
          display: grid;
          max-height: 560px;
          overflow: hidden;
          touch-action: pan-y;
        }
        .pt-body::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 56px;
          background: linear-gradient(to bottom, rgba(246, 247, 251, 0), #F6F7FB 85%);
          pointer-events: none;
        }
        .pt-panel {
          grid-area: 1 / 1;
          opacity: 0;
          transform: translateY(8px);
          visibility: hidden;
          transition: opacity 0.3s ease, transform 0.45s ${EASE}, visibility 0s linear 0.3s;
        }
        .pt-panel.on { opacity: 1; transform: none; visibility: visible; transition-delay: 0s; }

        .pt-toast {
          position: absolute; top: 14px; right: 14px; z-index: 3;
          display: flex; align-items: center; gap: 10px;
          max-width: calc(100% - 28px);
          padding: 10px 12px;
          background: #fff; color: #0F172A;
          border: 1px solid #E6E8EF; border-radius: 12px;
          box-shadow: 0 2px 4px rgba(15, 23, 42, 0.06), 0 18px 40px -16px rgba(49, 46, 129, 0.45);
          opacity: 0; transform: translateY(-10px) scale(0.98);
          transition: opacity 0.45s ease, transform 0.6s ${EASE};
          pointer-events: none;
        }
        .pt-toast.on { opacity: 1; transform: none; }
        .pt-toast-ic { display: grid; place-items: center; flex-shrink: 0; width: 30px; height: 30px; border-radius: 9px; background: #4F46E5; color: #fff; }
        .pt-toast b { display: block; font-size: 12.5px; font-weight: 800; }
        .pt-toast small { display: block; font-size: 11.5px; color: #64748B; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        ${PANEL_CSS}

        /* ── tablet & phone: chips on top, app, then CTA ── */
        @media (max-width: 1023px) {
          .pt-section { padding: 80px 20px 88px; }
          .pt-header { margin-bottom: 36px; }
          .pt-grid { grid-template-columns: minmax(0, 1fr); gap: 16px; max-width: 820px; }
          .pt-left { display: contents; }
          .pt-tabs { order: 1; flex-direction: row; justify-content: center; gap: 6px; }
          .pt-tab { width: auto; padding: 0 16px; min-height: 44px; border-radius: 999px; border-color: rgba(255, 255, 255, 0.1); align-content: center; }
          .pt-chev { display: none; }
          .pt-progress { left: 14px; right: 14px; bottom: 6px; background: rgba(255, 255, 255, 0.25); }
          .pt-progress i { background: #fff; }
          .pt-tab[aria-selected="true"] { background: #4F46E5; border-color: #4F46E5; box-shadow: 0 10px 24px -12px rgba(79, 70, 229, 0.9); }
          .pt-tab-label { font-size: 13.5px; letter-spacing: 0; text-transform: none; color: #CBD5E1; }
          .pt-tab[aria-selected="true"] .pt-tab-label { color: #fff; }
          .pt-tab-title, .pt-tab-desc { display: none; }
          .pt-caption { order: 2; display: block; text-align: center; margin: 8px auto 6px; max-width: 520px; min-height: 76px; }
          .pt-caption h3 { margin: 0 0 6px; font-size: 21px; font-weight: 800; letter-spacing: -0.02em; color: #F8FAFC; }
          .pt-caption p { margin: 0; font-size: 15px; line-height: 1.55; color: #94A3B8; text-wrap: balance; }
          .pt-window { order: 3; }
          .pt-cta { order: 4; align-items: center; padding: 20px 0 0; text-align: center; }
        }
        @media (max-width: 640px) {
          .pt-section { padding: 64px 16px 72px; }
          .pt-title { font-size: 28px; }
          .pt-sub { font-size: 15px; }
          .pt-tabs { gap: 4px; }
          .pt-tab { padding: 0 12px; }
          .pt-tab-label svg { display: none; }
          .pt-long { display: none; }
          .pt-short { display: inline; }
          .pt-body { max-height: 600px; }
          .pt-url { max-width: 170px; }
          .pt-toast { left: 10px; right: 10px; top: 10px; max-width: none; }
          .pt-toast .dm-pill { display: none; }
          .pt-btn { width: 100%; max-width: 360px; justify-content: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pt-reveal, .pt-panel, .pt-toast, .pt-tab, .pt-btn, .pt-btn svg, .pt-chev { transition-duration: 0.01ms !important; }
          .pt-live i { animation: none; }
          .pt-progress i.set { animation: none; transform: scaleX(1); }
        }
      `}</style>

      <section id="platform" ref={ref} className={`pt-section${isIntersecting ? " pt-on" : ""}`}>
        <div className="pt-header pt-reveal">
          <span className="pt-eyebrow">Your dashboard</span>
          <h2 className="pt-title">We do the work. You see every lead and every dollar.</h2>
          <p className="pt-sub">Nothing to set up or run. Check it between jobs to see who&apos;s booked and what it&apos;s worth.</p>
        </div>

        <div
          ref={stageRef}
          className="pt-grid pt-reveal"
          style={{ transitionDelay: isIntersecting ? "120ms" : "0ms" }}
          onPointerEnter={(e) => { if (e.pointerType === "mouse") setHovered(true); }}
          onPointerLeave={(e) => { if (e.pointerType === "mouse") setHovered(false); }}
        >
          <div className="pt-left">
            <div className="pt-tabs" role="tablist" aria-label="Platform views">
              {TABS.map((t, i) => {
                const Icon = t.icon;
                const selected = i === active;
                return (
                  <button
                    key={t.id}
                    ref={(el) => { tabRefs.current[i] = el; }}
                    type="button"
                    role="tab"
                    id={`pt-tab-${t.id}`}
                    aria-selected={selected}
                    aria-controls={`pt-panel-${t.id}`}
                    tabIndex={selected ? 0 : -1}
                    className="pt-tab"
                    onClick={() => select(i)}
                    onKeyDown={(e) => onTabKey(e, i)}
                  >
                    <span className="pt-tab-label">
                      <Icon size={14} strokeWidth={2.25} aria-hidden="true" />
                      <span className="pt-long">{t.label}</span>
                      <span className="pt-short">{t.short}</span>
                    </span>
                    <span className="pt-tab-title">{t.title}</span>
                    <span className="pt-tab-desc">{t.desc}</span>
                    <span className="pt-chev" aria-hidden="true"><ChevronRight size={14} strokeWidth={2.5} /></span>
                    {selected && (
                      <span className="pt-progress" aria-hidden="true">
                        {auto ? (
                          <i
                            key={`run-${active}`}
                            style={{ animationPlayState: running ? "running" : "paused" }}
                            onAnimationEnd={advance}
                          />
                        ) : (
                          // stopped: the bar fills solid and stays as the "you're here" marker
                          <i key={`set-${active}`} className="set" />
                        )}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-caption" aria-live={auto ? "off" : "polite"}>
              <h3>{tab.title}</h3>
              <p>{tab.desc}</p>
            </div>

            <div className="pt-cta">
              <a href="/opt-in" className="pt-btn">
                Check if my area&apos;s open <ArrowRight size={17} strokeWidth={2.25} aria-hidden="true" />
              </a>
              <span className="pt-cta-note">20-minute call. We&apos;ll show you the dashboard live.</span>
            </div>
          </div>

          <div className="pt-window">
          <div className="pt-frame">
            <div className="pt-bar" aria-hidden="true">
              <span className="pt-dots"><i /><i /><i /></span>
              <span className="pt-url">FlowQualify · {tab.screen}</span>
              <span className="pt-live"><i />Live</span>
            </div>

            <div
              className="pt-body"
              onPointerDown={(e) => { if (e.pointerType !== "mouse") swipe.current = { x: e.clientX, y: e.clientY }; }}
              onPointerUp={(e) => {
                const s = swipe.current; swipe.current = null;
                if (!s) return;
                const dx = e.clientX - s.x, dy = e.clientY - s.y;
                if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) select(active + (dx < 0 ? 1 : -1));
              }}
              onPointerCancel={() => { swipe.current = null; }}
            >
              {TABS.map((t, i) => (
                <div
                  key={t.id}
                  role="tabpanel"
                  id={`pt-panel-${t.id}`}
                  aria-labelledby={`pt-tab-${t.id}`}
                  aria-hidden={i !== active}
                  className={`pt-panel${i === active ? " on" : ""}`}
                >
                  <AppShell panel={t.id}>
                    {t.id === "leads" && <LeadsPanel live={toast !== "hidden"} />}
                    {t.id === "insights" && <InsightsPanel />}
                    {t.id === "pipeline" && <PipelinePanel />}
                    {t.id === "ads" && <AdsPanel />}
                  </AppShell>
                </div>
              ))}

              <div className={`pt-toast${toast === "shown" && active === 0 ? " on" : ""}`} aria-hidden="true">
                <span className="pt-toast-ic"><Sparkles size={15} /></span>
                <div style={{ minWidth: 0 }}>
                  <b>New qualified lead</b>
                  <small>Jessica Moreno · High-End Kitchen · $100K–$200K</small>
                </div>
                <span className="dm-pill dm-ready">Ready to Book</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
