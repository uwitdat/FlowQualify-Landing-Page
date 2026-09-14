"use client";
import { useEffect, useRef } from "react";

const SLIDES = [
  {
    src: "/aceui1.png",
    alt: "FlowQualify Leads CRM",
    ratio: 1873 / 942,   // landscape dashboard — needs a wide card to fit uncropped
    wide: 2.35,
    label: "Leads",
    h2: "Every lead, pre-qualified",
    desc: "Budget, scope, and timeline attached before you pick up the phone.",
    meta: [
      { label: "Pipeline Value", value: "$468K", hi: true },
      { label: "Active Leads",   value: "8" },
      { label: "Ready to Book",  value: "4" },
    ],
  },
  {
    src: "/panel-ads.png",
    alt: "Ads & Performance",
    label: "Ads & Performance",
    h2: "Your ad spend, decoded",
    desc: "Form submissions, cost-per-lead, and impressions — synced daily from Meta.",
    meta: [
      { label: "Ad Spend",          value: "$3,667" },
      { label: "Form Submissions",  value: "67",    hi: true },
      { label: "Cost Per Lead",     value: "$38" },
    ],
  },
  {
    src: "/panel-insights.png",
    alt: "Lead Insights",
    label: "Lead Insights",
    h2: "Scored and briefed in seconds",
    desc: "Every inquiry arrives with a lead score, budget range, and project brief.",
    meta: [
      { label: "Lead Score",    value: "85/100",     hi: true },
      { label: "Budget",        value: "$100K–$200K" },
      { label: "Project Type",  value: "High-End Kitchen" },
    ],
  },
  {
    src: "/pipeline1.png",
    alt: "FlowQualify Pipeline",
    ratio: 1550 / 1014,  // landscape dashboard — needs a wide card to fit uncropped
    wide: 1.8,
    label: "Pipeline",
    h2: "Your revenue, in real time",
    desc: "Booked, qualifying, and ready — every stage of your pipeline at a glance.",
    meta: [
      { label: "Pipeline Value",  value: "$290K",   hi: true },
      { label: "Bookings (90d)", value: "13" },
      { label: "Avg. Job Value",  value: "$26,000" },
    ],
  },
];

export default function AppPanels() {
  const cfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cf = cfRef.current;
    if (!cf) return;

    const frame   = cf.querySelector<HTMLDivElement>(".cf-frame")!;
    const ring    = cf.querySelector<HTMLDivElement>(".cf-ring")!;
    const cap     = cf.querySelector<HTMLDivElement>(".cf-caption")!;
    const amb     = cf.querySelector<HTMLDivElement>(".cf-amb")!;
    const dotsEl  = cf.querySelector<HTMLDivElement>(".cf-dots")!;
    const prevBtn = cf.querySelector<HTMLButtonElement>(".cf-arrow.prev")!;
    const nextBtn = cf.querySelector<HTMLButtonElement>(".cf-arrow.next")!;
    if (!frame || !ring) return;

    const count = SLIDES.length;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const AUTOPLAY = true, AUTO_MS = 4500;

    function esc(s: string) {
      return String(s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    const ambImgs: HTMLImageElement[] = [];
    const dotBtns: HTMLButtonElement[] = [];

    const cards = SLIDES.map((s, i) => {
      const d = document.createElement("div");
      d.className = "cf-card" + (s.wide ? " cf-card--wide" : "");
      if (s.wide) {
        d.style.setProperty("--card-scale", String(s.wide));
        d.style.setProperty("--img-ratio", String(s.ratio));
      }
      d.dataset.index = String(i);
      d.setAttribute("role", "group");
      d.setAttribute("aria-roledescription", "slide");
      d.setAttribute("aria-label", `${i + 1} of ${count}: ${s.label}`);
      d.innerHTML =
        `<img src="${esc(s.src)}" alt="${esc(s.alt)}" draggable="false" decoding="async">` +
        `<div class="cf-body"><div class="cf-copy">` +
        `<span class="cf-tag">${esc(s.label)}</span>` +
        `<h3 class="cf-h">${esc(s.h2)}</h3>` +
        `<div class="cf-rule"></div>` +
        `<p class="cf-desc">${esc(s.desc)}</p>` +
        `</div></div>`;
      ring.appendChild(d);

      if (amb) {
        const a = document.createElement("img");
        a.src = s.src; a.alt = ""; a.decoding = "async";
        amb.appendChild(a); ambImgs.push(a);
      }
      if (dotsEl) {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("role", "tab");
        b.setAttribute("aria-label", `Go to slide ${i + 1}`);
        b.addEventListener("click", () => { goTo(i); userNav(); });
        dotsEl.appendChild(b); dotBtns.push(b);
      }
      return d;
    });

    let pos = 0, target = 0, width = 0, wideMax = 3;
    // px width each card reaches when it is the active slide (set in measure)
    const activeW: number[] = SLIDES.map(() => 0);
    let raf: number | null = null;
    type Drag = { id: number; x: number; y: number; pos: number; v: number; t: number; moved: boolean; scrolled: boolean; card: number };
    let drag: Drag | null = null;
    // Autoplay stays off until the visitor moves the carousel themselves, so the
    // page parks on the Leads dashboard (slide 0) — the main selling point.
    let selected = -1, held = false, seen = false, interacted = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    function indexAt(p: number) { return ((Math.round(p) % count) + count) % count; }
    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

    const K = [
      { x: 0,   sc: 1,    ry: 0,  op: 1,    br: 1,    bl: 0 },
      { x: 285, sc: 0.84, ry: 24, op: 0.65,  br: 0.72, bl: 0 },
      { x: 510, sc: 0.68, ry: 38, op: 0.38,  br: 0.52, bl: 1 },
      { x: 640, sc: 0.5,  ry: 44, op: 0,     br: 0.4,  bl: 2 },
    ];
    const KM = [
      { x: 0,   sc: 1,    ry: 0,  op: 1,    br: 1,    bl: 0 },
      { x: 285, sc: 0.84, ry: 24, op: 0.86,  br: 0.94, bl: 0 },
      { x: 510, sc: 0.68, ry: 38, op: 0.55,  br: 0.72, bl: 0.6 },
      { x: 640, sc: 0.5,  ry: 44, op: 0,     br: 0.4,  bl: 2 },
    ];

    function paint() {
      if (!width) return;
      const u = width / 330;
      const KK = window.innerWidth <= 720 ? KM : K;
      // px the flanking cards step outward so an expanded card doesn't swallow them.
      // At most two cards are within one step of centre, and their weights sum to 1,
      // so this cross-fades cleanly when the widths differ between slides.
      let spread = 0;
      for (let i = 0; i < count; i++) {
        if (!SLIDES[i].wide) continue;
        let o = ((i - pos) % count + count) % count;
        if (o > count / 2) o -= count;
        const presence = Math.max(0, 1 - Math.abs(o));
        if (presence) spread += Math.max(0, activeW[i] - width) * 0.42 * presence;
      }
      for (let i = 0; i < count; i++) {
        const card = cards[i];
        let off = i - pos;
        off = ((off % count) + count) % count;
        if (off > count / 2) off -= count;
        const dist = Math.abs(off), sign = off < 0 ? -1 : 1;
        const k = Math.min(Math.floor(dist), 2), t = Math.min(dist - k, 1);
        const A = KK[k], B = KK[k + 1];
        const x  = lerp(A.x,  B.x,  t) * u + spread * Math.min(dist, 1);
        const sc = lerp(A.sc, B.sc, t);
        const ry = lerp(A.ry, B.ry, t);
        const op = lerp(A.op, B.op, t);
        const br = lerp(A.br, B.br, t);
        const bl = lerp(A.bl, B.bl, t);
        card.style.transform  = `translateX(${(sign * x).toFixed(2)}px) scale(${sc.toFixed(4)}) rotateY(${(-sign * ry).toFixed(2)}deg)`;
        card.style.opacity    = op.toFixed(3);
        card.style.filter     = `brightness(${br.toFixed(3)})${bl > 0.05 ? ` blur(${bl.toFixed(2)}px)` : ""}`;
        card.style.zIndex     = String(30 - Math.round(dist * 10));
        card.style.visibility = op <= 0.001 ? "hidden" : "visible";
        card.classList.toggle("is-active", i === selected);
      }
    }

    function renderCaption(i: number) {
      const s = SLIDES[i];
      const rows = s.meta
        .map(r => `<div><dt>${esc(r.label)}</dt><dd${r.hi ? ' class="hi"' : ""}>${esc(r.value)}</dd></div>`)
        .join("");
      cap.innerHTML =
        `<dl class="cf-meta" aria-label="${esc(s.label)} figures">${rows}</dl>` +
        `<p class="cf-hint">${i + 1} / ${count} · drag or use arrow keys</p>`;
      cap.classList.remove("cf-anim"); void cap.offsetWidth; cap.classList.add("cf-anim");
      ambImgs.forEach((a, k) => a.classList.toggle("is-on", k === i));
      dotBtns.forEach((b, k) => b.setAttribute("aria-current", k === i ? "true" : "false"));
    }

    function select(i: number) { if (i === selected) return; selected = i; renderCaption(i); }

    function settle(t: number) {
      if (raf !== null) cancelAnimationFrame(raf);
      target = t; select(indexAt(t));
      if (reduce) { pos = target; paint(); return; }
      function step() {
        const rem = target - pos;
        if (Math.abs(rem) < 0.0004) { pos = target; paint(); raf = null; return; }
        pos += rem * 0.12; paint(); raf = requestAnimationFrame(step);
      }
      raf = requestAnimationFrame(step);
    }

    function goTo(i: number) { settle(i + Math.round((target - i) / count) * count); }
    function nudge(by: number) { settle(Math.round(target) + by); }

    function onPointerDown(e: PointerEvent) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if ((e.target as Element).closest?.(".cf-cta")) return;
      if (raf !== null) { cancelAnimationFrame(raf); raf = null; }
      try { frame.setPointerCapture(e.pointerId); } catch (_) {}
      target = pos;
      const cardEl = (e.target as Element).closest?.(".cf-card");
      drag = {
        id: e.pointerId, x: e.clientX, y: e.clientY, pos,
        v: 0, t: performance.now(), moved: false, scrolled: false,
        card: cardEl ? +(cardEl as HTMLElement).dataset.index! : -1,
      };
    }
    function onPointerMove(e: PointerEvent) {
      if (!drag || drag.id !== e.pointerId) return;
      const pitch = width * 285 / 330; if (!pitch) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (e.pointerType !== "mouse" && Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) drag.scrolled = true;
      if (Math.abs(dx) > 4) drag.moved = true;
      if (drag.scrolled || !drag.moved) return;
      const now = performance.now(), prev = pos;
      pos = drag.pos - dx / pitch;
      drag.v = ((pos - prev) / Math.max(now - drag.t, 1)) * 1000;
      drag.t = now; select(indexAt(pos)); paint();
    }
    function onPointerEnd(e: PointerEvent) {
      if (!drag || drag.id !== e.pointerId) return;
      const d = drag; drag = null;
      if (!d.scrolled && (d.moved || (d.card >= 0 && d.card !== selected))) userNav(); else restart();
      if (d.scrolled || e.type === "pointercancel") { settle(Math.round(pos)); return; }
      if (!d.moved) {
        if (d.card >= 0 && d.card !== selected) { goTo(d.card); return; }
        settle(Math.round(pos)); return;
      }
      const carried = Math.max(-2, Math.min(2, d.v * 0.18));
      settle(Math.round(pos + carried));
    }

    frame.addEventListener("pointerdown",   onPointerDown as EventListener);
    frame.addEventListener("pointermove",   onPointerMove as EventListener);
    frame.addEventListener("pointerup",     onPointerEnd  as EventListener);
    frame.addEventListener("pointercancel", onPointerEnd  as EventListener);
    frame.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  { e.preventDefault(); nudge(-1); userNav(); }
      if (e.key === "ArrowRight") { e.preventDefault(); nudge(1);  userNav(); }
    });
    if (prevBtn) prevBtn.addEventListener("click", () => { nudge(-1); userNav(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { nudge(1);  userNav(); });

    function restart() {
      clearTimeout(timer!);
      if (!AUTOPLAY || !interacted || reduce || held || !seen || count < 2) return;
      timer = setTimeout(() => { nudge(1); restart(); }, AUTO_MS);
    }
    function userNav() { interacted = true; restart(); }
    function hold(on: boolean) { held = on; if (on) clearTimeout(timer!); else restart(); }

    cf.addEventListener("mouseenter", () => hold(true));
    cf.addEventListener("mouseleave", () => hold(false));
    cf.addEventListener("focusin",    () => hold(true));
    cf.addEventListener("focusout",   () => hold(false));

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(
        (es) => { seen = es[0].isIntersecting; if (seen) restart(); else clearTimeout(timer!); },
        { threshold: 0.3 }
      ).observe(frame);
    } else { seen = true; restart(); }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) clearTimeout(timer!); else restart();
    });

    function measure() {
      width = (cards[1] ?? cards[0]).offsetWidth;
      const cs = getComputedStyle(cf!);
      const wm = parseFloat(cs.getPropertyValue("--wide-max"));
      if (!Number.isNaN(wm)) wideMax = wm;

      if (window.innerWidth > 720) {
        // Desktop: the landscape dashboards open at a size where their text is
        // legible. The widest screenshot takes the stage width (minus room for
        // the arrows, capped), the others match its image height, and every
        // wide card gets the same caption plate underneath.
        const gutter = parseFloat(cs.getPropertyValue("--stage-gutter")) || 76;
        const maxW   = parseFloat(cs.getPropertyValue("--stage-max"))    || 1440;
        const capH   = parseFloat(cs.getPropertyValue("--cap-h"))        || 136;
        const topRatio = Math.max(...SLIDES.map(s => s.ratio ?? 0));
        const imgH = Math.max(0, Math.min(frame.clientWidth - gutter * 2, maxW)) / topRatio;
        const portraitH = width * 500 / 330;
        let tallest = portraitH;
        SLIDES.forEach((s, i) => {
          if (!s.ratio) { activeW[i] = width; return; }
          const w = Math.max(width, imgH * s.ratio);
          const h = Math.max(portraitH, imgH + capH);
          cards[i].style.setProperty("--aw", `${w.toFixed(1)}px`);
          cards[i].style.setProperty("--ah", `${h.toFixed(1)}px`);
          cards[i].style.setProperty("--img-h", `${(w / s.ratio).toFixed(1)}px`);
          activeW[i] = w;
          tallest = Math.max(tallest, h);
        });
        frame.style.height = `${Math.ceil(tallest + 24)}px`;
      } else {
        SLIDES.forEach((s, i) => {
          ["--aw", "--ah", "--img-h"].forEach(p => cards[i].style.removeProperty(p));
          activeW[i] = s.wide ? width * Math.min(s.wide, wideMax) : width;
        });
        frame.style.height = "";
      }
      paint();
    }
    select(0); measure();
    if (typeof ResizeObserver !== "undefined") new ResizeObserver(measure).observe(frame);
    else window.addEventListener("resize", measure);

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      clearTimeout(timer!);
      ring.innerHTML = "";
      if (amb)    amb.innerHTML    = "";
      if (dotsEl) dotsEl.innerHTML = "";
    };
  }, []);

  return (
    <>
      <style>{`
        .apnl-section {
          background: #0B0F1A;
          padding: 96px 24px 80px;
        }
        .apnl-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .apnl-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #818CF8;
          margin-bottom: 14px;
        }
        .apnl-title {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 900;
          color: #F8FAFC;
          letter-spacing: -0.03em;
          line-height: 1.15;
          margin: 0 0 14px;
        }
        .apnl-sub { font-size: 17px; color: #64748B; margin: 0; line-height: 1.6; }
        .apnl-sub strong { color: #818CF8; font-weight: 700; }

        /* ── tokens ── */
        .cf-section-wrap {
          --font:      -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          --font-mono: 'Roboto Mono', ui-monospace, monospace;
          --cloud:     #f5f5f7;
          --ash:       #9f9fa0;
          --r-pill:    9999px;
        }

        /* ── coverflow container ── */
        .cf {
          --cw:   clamp(228px, 28vw, 430px);
          --u:    calc(var(--cw) / 330);
          --gold: #818CF8;
          --wide-max: 3;   /* per-card scale ceiling; phones lower it */
          --stage-gutter: 76px;  /* room left for the arrows beside an open dashboard */
          --stage-max: 1440px;   /* widest an open dashboard gets */
          --cap-h: 136px;        /* caption plate under an open dashboard */
          position:  relative;
          width:     100%;
          padding:   28px 0 8px;
          isolation: isolate;
          overflow:  hidden;
        }

        /* edge fade — far cards dissolve instead of hard-cutting at the section edge */
        .cf::before, .cf::after {
          content:  '';
          position: absolute;
          top: 0; bottom: 0;
          width:    clamp(28px, 4.5%, 110px);
          z-index:  31;
          pointer-events: none;
        }
        .cf::before { left:  0; background: linear-gradient(90deg,  #0B0F1A 10%, rgba(11,15,26,0) 100%); }
        .cf::after  { right: 0; background: linear-gradient(270deg, #0B0F1A 10%, rgba(11,15,26,0) 100%); }

        /* ambient glow behind active card */
        .cf-amb { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .cf-amb img {
          position:   absolute;
          inset:      0;
          width:      100%;
          height:     100%;
          object-fit: cover;
          filter:     brightness(.16) blur(38px);
          transform:  scale(1.18);
          opacity:    0;
          transition: opacity 1s ease;
        }
        .cf-amb img.is-on { opacity: 1; }
        .cf-amb::after {
          content:    '';
          position:   absolute;
          inset:      0;
          background: radial-gradient(circle at center, rgba(11,15,26,.2) 0%, rgba(11,15,26,.9) 100%);
        }

        /* inner eyebrow */
        .cf-eyebrow { position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; gap: 12px; margin: 0 0 22px; }
        .cf-eyebrow span { width: 36px; height: 1px; background: linear-gradient(90deg, transparent, var(--gold)); }
        .cf-eyebrow span + h3 + span { background: linear-gradient(90deg, var(--gold), transparent); }
        .cf-eyebrow h3 { margin: 0; font-size: .75rem; font-weight: 700; letter-spacing: .3em; text-transform: uppercase; color: var(--gold); }

        /* stage */
        .cf-frame {
          position:     relative;
          z-index:      1;
          height:       calc(var(--cw) * 500 / 330 + 24px);
          cursor:       grab;
          outline:      none;
          perspective:  1400px;
          touch-action: pan-y;
        }
        .cf-frame:active { cursor: grabbing; }
        .cf-frame:focus-visible { box-shadow: inset 0 0 0 2px rgba(129,140,248,.45); border-radius: 16px; }
        .cf-ring { position: relative; height: 100%; transform-style: preserve-3d; user-select: none; -webkit-user-select: none; }

        /* cards */
        .cf-card {
          --ch:            calc(var(--cw) * 500 / 330);
          position:        absolute;
          left:            50%;
          top:             50%;
          width:           var(--cw);
          height:          var(--ch);
          margin-left:     calc(var(--cw) / -2);
          margin-top:      calc(var(--ch) / -2);
          border-radius:   18px;
          overflow:        hidden;
          background:      #111827;
          border:          1px solid rgba(255,255,255,.1);
          box-shadow:      0 15px 35px rgba(0,0,0,.5);
          transform-origin: center center;
          will-change:     transform, opacity, filter;
        }
        .cf-card.is-active {
          box-shadow: 0 25px 60px rgba(0,0,0,.9), 0 0 40px rgba(129,140,248,.18);
          cursor: default;
        }
        .cf-card:not(.is-active) { cursor: pointer; }
        .cf-card img {
          position:          absolute;
          inset:             0;
          width:             100%;
          height:            100%;
          object-fit:        cover;
          object-position:   top left;
          -webkit-user-drag: none;
          pointer-events:    none;
        }
        .cf-card::after {
          content:    '';
          position:   absolute;
          inset:      0;
          z-index:    1;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(0,0,0,.06) 0%, rgba(0,0,0,0) 28%, rgba(5,8,22,.68) 62%, rgba(5,8,22,.97) 100%);
        }

        /* active card text overlay */
        .cf-body {
          position:   absolute;
          inset:      0;
          z-index:    2;
          display:    flex;
          flex-direction: column;
          justify-content: flex-end;
          text-align: center;
          padding:    calc(var(--u) * 16) calc(var(--u) * 18) calc(var(--u) * 22);
          opacity:    0;
          transform:  translateY(14px);
          transition: opacity .5s ease, transform .5s ease;
          pointer-events: none;
        }
        .cf-card.is-active .cf-body { opacity: 1; transform: none; pointer-events: auto; }
        .cf-tag {
          display:     inline-block;
          font-size:   calc(var(--u) * 9.9);
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          color:       #818CF8;
          margin-bottom: 5px;
        }
        .cf-copy { display: flex; flex-direction: column; align-items: center; gap: 3px; }
        .cf-h {
          margin:      0;
          font-size:   calc(var(--u) * 20);
          font-weight: 900;
          letter-spacing: -.02em;
          line-height: 1.2;
          color:       #fff;
          text-shadow: 0 3px 12px rgba(0,0,0,.95);
        }
        .cf-rule {
          width:        26px;
          height:       2px;
          border-radius: 2px;
          background:   var(--gold);
          margin:       8px auto 5px;
          box-shadow:   0 0 10px rgba(129,140,248,.8);
        }
        .cf-desc {
          margin:      0;
          max-width:   calc(var(--u) * 250);
          font-size:   calc(var(--u) * 12.2);
          line-height: 1.45;
          color:       rgba(255,255,255,.82);
          text-shadow: 0 2px 8px rgba(0,0,0,.9);
        }

        /* wide cards — the two landscape dashboard screenshots. Cover-cropping
           them into the portrait card sliced ~37% off aceui1 and ~57% off
           pipeline1, so when active they widen to fit the whole screenshot and
           hand the strip underneath to the caption.
           --card-scale and --img-ratio are set per card from the slide data;
           on desktop measure() also sets --aw / --ah / --img-h. */
        .cf-card--wide {
          transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      height 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      margin-left 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      margin-top 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      background-color 0.5s ease;
        }
        .cf-card--wide.is-active {
          width:       calc(var(--cw) * min(var(--card-scale), var(--wide-max)));
          margin-left: calc(var(--cw) * min(var(--card-scale), var(--wide-max)) / -2);
          background:  #060A14;
        }
        @media (min-width: 721px) {
          /* open at legible size: the whole screenshot at --img-h tall, with a
             fixed caption plate below it */
          .cf-card--wide.is-active {
            --ch:        var(--ah, calc(var(--cw) * 500 / 330));
            width:       var(--aw, calc(var(--cw) * min(var(--card-scale), var(--wide-max))));
            margin-left: calc(var(--aw, calc(var(--cw) * min(var(--card-scale), var(--wide-max)))) / -2);
            border-radius: 20px;
          }
          .cf-card--wide.is-active img {
            object-fit:      contain;
            object-position: top center;
          }
          /* Leave the screenshot untouched and mark the seam with a hairline. */
          .cf-card--wide.is-active::after {
            --seam: var(--img-h, 66%);
            background: linear-gradient(180deg,
              rgba(0,0,0,0)   0%,
              rgba(0,0,0,0)   var(--seam),
              rgba(129,140,248,.34) calc(var(--seam) + 1.5px),
              rgba(5,8,22,0)  calc(var(--seam) + 3px));
          }
          .cf-card--wide.is-active .cf-body { padding: 0 32px 24px; }
          .cf-card--wide.is-active .cf-tag  { font-size: 12px; }
          .cf-card--wide.is-active .cf-h    { font-size: 28px; }
          .cf-card--wide.is-active .cf-desc { font-size: 16px; max-width: 640px; }
          .cf-card--wide.is-active .cf-rule { width: 34px; margin: 7px auto 6px; }
          .cf-card--wide.is-active .cf-copy { gap: 0; }
        }

        /* arrow buttons */
        .cf-arrow {
          position:   absolute;
          top:        50%;
          z-index:    40;
          width:      46px;
          height:     46px;
          margin-top: -23px;
          border-radius: 50%;
          background: rgba(0,0,0,.55);
          border:     1px solid rgba(255,255,255,.18);
          color:      #fff;
          display:    flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          cursor:     pointer;
          box-shadow: 0 8px 24px rgba(0,0,0,.4);
          transition: background .2s ease, border-color .2s ease, transform .2s ease;
          padding:    0;
        }
        .cf-arrow:hover  { background: rgba(129,140,248,.22); border-color: rgba(129,140,248,.5); }
        .cf-arrow:active { transform: scale(.95); }
        .cf-arrow:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
        .cf-arrow svg { width: 20px; height: 20px; }
        .cf-arrow.prev { left:  max(20px, calc(50% - var(--cw) * 2.55)); }
        .cf-arrow.next { right: max(20px, calc(50% - var(--cw) * 2.55)); }

        /* dots */
        .cf-dots { position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; gap: 8px; margin: 14px 0 0; }
        .cf-dots button { height: 8px; width: 8px; border-radius: var(--r-pill); background: rgba(255,255,255,.2); border: 0; padding: 0; cursor: pointer; transition: width .3s ease, background .3s ease, box-shadow .3s ease; }
        .cf-dots button[aria-current="true"] { width: 28px; background: var(--gold); box-shadow: 0 0 10px rgba(129,140,248,.7); }
        .cf-dots button:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }

        /* caption / metrics */
        .cf-caption { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 28px 24px 0; }
        .cf-caption.cf-anim { animation: cf-in .32s ease both; }
        @keyframes cf-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

        .cf-meta { display: flex; justify-content: center; margin: 0; width: min(100%, 540px); }
        .cf-meta > div { flex: 1 1 0; display: flex; flex-direction: column; align-items: center; gap: 5px; padding: 4px 14px; border-left: 1px solid rgba(255,255,255,.08); }
        .cf-meta > div:first-child { border-left: 0; }
        .cf-meta dt { font-size: 9.5px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; color: var(--ash); white-space: nowrap; }
        .cf-meta dd { margin: 0; font-size: 18px; font-weight: 500; color: var(--cloud); letter-spacing: -.01em; white-space: nowrap; font-variant-numeric: tabular-nums; }
        .cf-meta dd.hi { color: var(--gold); }
        .cf-hint { margin-top: 16px; font-size: 9px; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.2); }

        @media (max-width: 560px) {
          .cf-meta dd { font-size: 15px; white-space: normal; text-wrap: balance; line-height: 1.25; }
          .cf-meta dt { font-size: 8.5px; white-space: normal; }
          .cf-meta > div { min-width: 0; padding: 4px 8px; }
        }
        @media (max-width: 720px) {
          .cf-arrow { display: none; }
          .cf { --cw: clamp(206px, 56vw, 272px); --wide-max: 1.55; }
          .apnl-section { padding: 64px 16px 56px; }
          .apnl-header { margin-bottom: 28px; }
          .apnl-sub { font-size: 15px; }
          .cf-hint { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cf-amb img, .cf-body, .cf-dots button { transition-duration: .01ms; }
        }
      `}</style>

      <section className="apnl-section">
        <div className="apnl-header">
          <div className="apnl-eyebrow">The Platform</div>
          <h2 className="apnl-title">
            Every lead, every brief, every booked call —<br />one place.
          </h2>
          <p className="apnl-sub">
            Running on <strong>autopilot</strong> while you focus on the work.
          </p>
        </div>

        <div
          className="cf cf-section-wrap"
          ref={cfRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="FlowQualify platform features"
        >
          <div className="cf-amb" aria-hidden="true" />

          <div className="cf-eyebrow" aria-hidden="true">
            <span /><h3>FlowQualify Platform</h3><span />
          </div>

          <div
            className="cf-frame"
            tabIndex={0}
            aria-label="Drag, use arrow keys, or click a card to explore the platform"
          >
            <div className="cf-ring" />
          </div>

          <button className="cf-arrow prev" type="button" aria-label="Previous feature">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="cf-arrow next" type="button" aria-label="Next feature">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="cf-dots" role="tablist" aria-label="Choose a platform feature" />
          <div className="cf-caption" aria-live="polite" />
        </div>
      </section>
    </>
  );
}
