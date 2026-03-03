export default function UseCases() {
  return (
    <>
      <style>{`
        .uc2-section {
          background: #f9f0d9;
          padding: 88px 24px 108px;
          position: relative;
          border-top: 1px solid rgba(34,21,13,0.08);
        }
        .uc2-inner { max-width: 1120px; margin: 0 auto; }
        .uc2-headline {
          font-size: clamp(26px, 3.8vw, 50px);
          font-weight: 900;
          color: #22150d;
          line-height: 1.1;
          letter-spacing: -0.03em;
          max-width: 680px;
          margin: 0 0 72px;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .uc2-body {
          display: grid;
          grid-template-columns: 56% 44%;
          gap: 0;
          align-items: center;
        }
        .uc2-sketch { width: 100%; display: block; }
        .uc2-right { padding-left: 40px; }
        .uc2-excalidraw { width: 100%; display: block; max-width: 460px; }
        @media (max-width: 760px) {
          .uc2-body { grid-template-columns: 1fr; }
          .uc2-right { padding-left: 0; padding-top: 40px; }
        }
      `}</style>

      <section className="uc2-section" id="results">
        <div className="uc2-inner">
          <h2 className="uc2-headline">
            A smarter system—built for remodelers, by people who understand the grind.
          </h2>

          <div className="uc2-body">

            {/* ── Hand-drawn contractor sketch ── */}
            <svg className="uc2-sketch" viewBox="0 0 580 500" fill="none" xmlns="http://www.w3.org/2000/svg">

              {/* Floor */}
              <path d="M8,450 C120,447 330,451 572,448" stroke="#22150d" strokeWidth="1.6" strokeLinecap="round"/>

              {/* Subtle wall line */}
              <path d="M272,58 C274,210 273,390 274,450" stroke="#22150d" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.15"/>

              {/* ── UPPER CABINETS ── */}
              <path d="M284,88 C358,86 484,87 554,85 L556,87 C557,143 557,195 555,224 L553,226 C484,227 358,226 283,225 L282,223 C281,195 281,143 284,88" stroke="#22150d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M419,88 C420,143 420,190 419,224" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.42"/>
              <path d="M292,97 C350,95 409,96 411,94 L412,96 L411,216 L291,217 Z" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4"/>
              <path d="M427,94 C469,92 544,93 547,91 L548,93 L547,215 L426,216 Z" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4"/>
              <path d="M345,158 C348,156 360,156 363,158" stroke="#22150d" strokeWidth="1.7" strokeLinecap="round"/>
              <path d="M479,158 C482,156 493,156 496,158" stroke="#22150d" strokeWidth="1.7" strokeLinecap="round"/>

              {/* Backsplash tiles */}
              <path d="M282,232 C380,230 480,231 554,229" stroke="#22150d" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.22"/>
              <path d="M282,250 C380,248 480,249 554,247" stroke="#22150d" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.22"/>
              <path d="M282,268 C380,266 480,267 554,265" stroke="#22150d" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.22"/>
              <path d="M370,232 C371,250 371,268 370,280" stroke="#22150d" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.22"/>
              <path d="M456,232 C457,250 457,268 456,280" stroke="#22150d" strokeWidth="0.7" strokeLinecap="round" strokeOpacity="0.22"/>

              {/* ── COUNTER TOP ── */}
              <path d="M266,282 C338,280 468,281 562,279 L564,281 L563,296 L264,298 Z" stroke="#22150d" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>

              {/* ── BASE CABINETS ── */}
              <path d="M278,297 C326,295 378,296 418,294 L420,296 C421,348 422,406 420,443 L418,445 C378,446 326,445 277,444 L276,442 C275,406 275,348 278,297" stroke="#22150d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M286,305 C322,303 376,304 410,302 L411,304 L410,435 L285,436 Z" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.48"/>
              <path d="M340,368 C346,366 362,366 368,368" stroke="#22150d" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M420,294 C462,292 510,293 556,291 L558,293 C559,348 560,406 558,443 L556,445 C510,446 462,445 419,444 L419,442 C418,406 418,348 420,294" stroke="#22150d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M428,302 C464,300 510,301 548,299 L549,301 L548,434 L427,435 Z" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.48"/>
              <path d="M481,368 C487,366 500,366 506,368" stroke="#22150d" strokeWidth="1.8" strokeLinecap="round"/>

              {/* Tools on counter */}
              <path d="M298,279 C320,277 346,276 366,275 L368,277 C366,280 364,280 362,279 L298,281 Z" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6"/>
              <path d="M366,275 C369,274 372,276 371,279" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6"/>
              <path d="M380,278 C412,276 452,275 480,274 L480,282 L380,283 Z" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55"/>
              <path d="M428,275 C430,273 434,273 435,276 C436,279 432,281 430,279" stroke="#22150d" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.42"/>

              {/* ── CONTRACTOR FIGURE ── */}

              {/* HEAD (draw first so hat overlaps top) */}
              <path d="M133,165 C131,148 137,136 155,133 C173,130 182,142 182,160 C182,178 172,188 155,187 C139,186 133,180 133,165" stroke="#22150d" strokeWidth="2" strokeLinecap="round"/>
              {/* Ear */}
              <path d="M133,163 C129,160 127,166 129,172 C131,178 133,175 133,171" stroke="#22150d" strokeWidth="1.4" strokeLinecap="round"/>
              {/* NEAR EYE — smiling ∩ arch (upside-down C) */}
              <path d="M141,162 C142,153 153,153 155,162" stroke="#22150d" strokeWidth="1.9" fill="none" strokeLinecap="round"/>
              {/* FAR EYE — smiling ∩ arch */}
              <path d="M161,162 C162,153 170,153 172,162" stroke="#22150d" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeOpacity="0.72"/>
              {/* Nose */}
              <path d="M156,166 C158,171 161,173 163,171" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round"/>
              {/* Mouth hint */}
              <path d="M148,177 C153,180 162,179 166,177" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.4"/>

              {/* HARD HAT — brim sits on forehead (y≈145), dome goes up */}
              <path d="M118,147 C132,142 178,142 194,147" stroke="#22150d" strokeWidth="2.4" strokeLinecap="round"/>
              <path d="M120,148 C118,122 128,100 155,96 C182,93 196,115 196,148" stroke="#22150d" strokeWidth="2.2" strokeLinecap="round"/>
              {/* Hat ridge */}
              <path d="M134,116 C146,111 166,111 176,116" stroke="#22150d" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.32"/>
              {/* Hat brim shadow/thickness */}
              <path d="M119,149 C133,145 177,145 193,149" stroke="#22150d" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3"/>

              {/* Neck */}
              <path d="M147,187 L144,200 M164,187 L167,200" stroke="#22150d" strokeWidth="1.9" strokeLinecap="round"/>

              {/* Shoulders */}
              <path d="M116,203 C130,198 146,196 155,198 C165,196 180,198 196,203" stroke="#22150d" strokeWidth="2.1" strokeLinecap="round"/>

              {/* Torso / Work shirt */}
              <path d="M116,203 C114,238 113,260 114,302 L197,304 C198,260 198,238 196,203" stroke="#22150d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* shirt center seam */}
              <path d="M155,198 C154,234 154,265 154,302" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.35"/>
              {/* chest pocket */}
              <path d="M121,222 C124,220 138,220 140,222 L140,236 L120,236 Z" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45"/>
              {/* shirt wrinkle */}
              <path d="M160,240 C168,237 180,238 185,242" stroke="#22150d" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.28"/>

              {/* LEFT ARM — reaching to cabinet work area */}
              <path d="M116,207 C104,222 99,242 104,259 C111,276 137,286 166,294 C204,304 240,303 268,307" stroke="#22150d" strokeWidth="2.3" strokeLinecap="round"/>
              {/* Left hand / tool at cabinet */}
              <path d="M268,305 C275,301 284,299 289,302 C291,305 290,309 287,311 C281,313 272,311 268,309" stroke="#22150d" strokeWidth="1.8" strokeLinecap="round"/>

              {/* RIGHT ARM — down, holding hammer */}
              <path d="M196,207 C207,226 214,250 212,272 C210,284 205,292 202,302" stroke="#22150d" strokeWidth="2.2" strokeLinecap="round"/>

              {/* HAMMER — head at top, handle going down through grip */}
              {/* Hammer head (claw hammer) */}
              <path d="M188,256 C192,252 214,252 219,255 L219,272 C215,274 192,274 188,272 Z" stroke="#22150d" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Hammer claw/back end */}
              <path d="M188,256 C183,252 180,246 182,241 M188,257 C184,254 182,249 184,244" stroke="#22150d" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.55"/>
              {/* Hammer face (striking face) */}
              <path d="M219,255 C222,258 222,268 219,272" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.45"/>
              {/* Hammer handle through grip */}
              <path d="M203,272 C202,295 201,325 200,355" stroke="#22150d" strokeWidth="2.1" strokeLinecap="round"/>
              {/* Handle grip wrap lines */}
              <path d="M198,310 C202,309 206,309 208,310" stroke="#22150d" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.38"/>
              <path d="M197,318 C201,317 206,317 208,318" stroke="#22150d" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.38"/>
              <path d="M197,326 C201,325 206,325 207,326" stroke="#22150d" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.38"/>

              {/* Tool belt */}
              <path d="M114,302 C138,305 168,306 197,304" stroke="#22150d" strokeWidth="2.1" strokeLinecap="round"/>
              <path d="M124,304 L125,316 M142,305 L142,318 M167,305 L167,317 M184,304 L184,315" stroke="#22150d" strokeWidth="1.4" strokeLinecap="round"/>
              <path d="M126,310 C129,309 141,309 142,311 L142,320 L125,320 Z" stroke="#22150d" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45"/>
              <path d="M167,310 C170,309 182,309 183,311 L183,319 L166,319 Z" stroke="#22150d" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45"/>

              {/* ── PANTS ── */}
              {/* Crotch curve */}
              <path d="M114,304 C124,310 142,314 155,314 C168,314 186,310 197,304" stroke="#22150d" strokeWidth="1.9" strokeLinecap="round"/>
              {/* Left leg outer */}
              <path d="M114,306 C112,348 110,390 111,426 C111,436 113,444 116,450" stroke="#22150d" strokeWidth="2.1" strokeLinecap="round"/>
              {/* Right leg outer */}
              <path d="M197,306 C199,348 201,390 200,426 C200,436 198,444 195,450" stroke="#22150d" strokeWidth="2.1" strokeLinecap="round"/>
              {/* Inner leg seam */}
              <path d="M155,314 C154,358 153,402 153,434" stroke="#22150d" strokeWidth="1.8" strokeLinecap="round"/>
              {/* Knee crease left */}
              <path d="M111,366 C123,363 150,363 155,366" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.36"/>
              {/* Knee crease right */}
              <path d="M155,366 C162,363 188,363 200,366" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.36"/>
              {/* Pants wrinkles near crotch */}
              <path d="M132,322 C138,319 152,319 156,322" stroke="#22150d" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.28"/>
              <path d="M156,322 C162,319 174,319 178,322" stroke="#22150d" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.28"/>
              {/* Pocket line */}
              <path d="M116,330 C120,328 132,328 134,330 L134,348 L115,349" stroke="#22150d" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.38"/>

              {/* ── BOOTS ── */}
              {/* Left boot */}
              <path d="M103,448 C108,443 128,439 147,440 C156,441 159,447 157,453 C154,459 140,461 112,461 C104,461 101,455 103,449" stroke="#22150d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M103,457 C116,461 140,461 155,457" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.45"/>
              {/* Boot laces suggestion */}
              <path d="M120,443 C122,441 128,441 130,443 M118,447 C120,445 130,445 132,447" stroke="#22150d" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.38"/>
              {/* Right boot */}
              <path d="M186,448 C191,443 211,439 228,440 C237,441 240,447 238,453 C235,459 220,461 193,461 C185,461 183,455 186,449" stroke="#22150d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M186,457 C198,461 223,461 236,457" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.45"/>
              <path d="M200,443 C202,441 210,441 212,443 M198,447 C200,445 212,445 214,447" stroke="#22150d" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.38"/>

              {/* ── SCATTERED ELEMENTS ── */}

              {/* Tape measure */}
              <path d="M26,392 C26,378 37,367 52,367 C67,367 78,378 78,392 C78,406 67,417 52,417 C37,417 26,406 26,392" stroke="#22150d" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M52,367 C58,360 70,356 80,359 C88,362 92,369 89,375" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M42,387 C45,384 58,384 60,388 L60,392 L42,393 Z" stroke="#22150d" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.36"/>

              {/* Blueprint roll */}
              <path d="M28,432 C29,428 63,426 88,427 C92,428 93,432 92,436 C91,441 29,442 28,437 C27,434 27,433 28,432" stroke="#22150d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28,432 C27,426 27,420 28,417 C29,415 63,413 88,414 C92,415 93,419 92,423" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.46"/>
              <path d="M43,417 L43,440 M57,414 L57,441" stroke="#22150d" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.33"/>

              {/* Motion/energy lines near work hand */}
              <path d="M246,262 L256,248 L250,256 L260,242" stroke="#22150d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4"/>
              <path d="M238,278 L248,264 L242,272 L252,257" stroke="#22150d" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.26"/>

              {/* Wood chips / sawdust */}
              <path d="M50,356 C53,352 58,352 59,356" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M64,366 C68,362 73,362 74,366" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M42,376 C44,372 49,372 49,376" stroke="#22150d" strokeWidth="1" strokeLinecap="round"/>
              <path d="M221,322 C224,318 229,318 230,322" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M212,338 C214,334 218,334 218,338" stroke="#22150d" strokeWidth="1" strokeLinecap="round"/>
              <path d="M233,308 C236,304 241,304 241,308" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round"/>

              {/* Nails on floor */}
              <path d="M83,362 L83,374 M80,366 L86,366" stroke="#22150d" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.52"/>
              <path d="M94,377 L94,387 M91,381 L97,381" stroke="#22150d" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.44"/>
            </svg>

            {/* ── Right: paragraph with coloured underlines only ── */}
            <div className="uc2-right">
              <svg className="uc2-excalidraw" viewBox="0 0 440 148" fill="none" xmlns="http://www.w3.org/2000/svg">

                {/* Line 1 */}
                <text fontFamily="Georgia, 'Times New Roman', serif" fontSize="18" fill="#22150d">
                  <tspan x="8" y="32">We believe remodelers should be free to</tspan>
                </text>

                {/* Line 2: all dark text */}
                <text fontFamily="Georgia, 'Times New Roman', serif" fontSize="18" fill="#22150d">
                  <tspan x="8" y="62">focus on building great work—</tspan>
                </text>
                {/* Green natural underline under "building great work" (~x=90 to x=272) */}
                <path d="M90,67 C118,64 152,69 192,66 C222,64 248,68 272,66"
                  stroke="#3a7a50" strokeWidth="2" strokeLinecap="round" fill="none"/>

                {/* Line 3: all dark text */}
                <text fontFamily="Georgia, 'Times New Roman', serif" fontSize="18" fill="#22150d">
                  <tspan x="8" y="92">without chasing leads or getting buried in</tspan>
                </text>
                {/* Natural red underline under "without chasing leads" (~x=8 to x=208) */}
                <path d="M8,97 C35,94 72,99 112,96 C148,94 178,98 208,96"
                  stroke="#c94040" strokeWidth="2" strokeLinecap="round" fill="none"/>

                {/* Line 4: all dark text */}
                <text fontFamily="Georgia, 'Times New Roman', serif" fontSize="18" fill="#22150d">
                  <tspan x="8" y="122">unqualified inquiries.</tspan>
                </text>
                {/* Natural red underline under "unqualified inquiries" (~x=8 to x=172) */}
                <path d="M8,127 C32,124 68,129 108,126 C138,124 158,128 172,126"
                  stroke="#c94040" strokeWidth="2" strokeLinecap="round" fill="none"/>

              </svg>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
