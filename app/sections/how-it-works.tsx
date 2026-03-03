export default function HowItWorks() {
  return (
    <>
      <style>{`
        .hiw2-section {
          background: #ffffff;
          padding: 120px 48px;
          position: relative;
          overflow: hidden;
        }
        .hiw2-wrap {
          max-width: 1480px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 56px;
        }
        .hiw2-left-side {
          flex: 0 0 220px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          min-width: 0;
        }
        .hiw2-right-side {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          min-width: 0;
        }
        .hiw2-art-svg {
          width: 210px;
          flex-shrink: 0;
        }
        .hiw2-body {
          flex: 0 0 680px;
          max-width: 680px;
        }
        .hiw2-p1 {
          font-size: clamp(24px, 3vw, 42px);
          font-weight: 900;
          color: #0F172A;
          line-height: 1.25;
          letter-spacing: -0.028em;
          margin: 0 0 56px;
        }
        .hiw2-tagline-inline {
          color: #0F172A;
          font-style: normal;
          font-weight: 900;
          text-decoration: underline;
          text-decoration-color: rgb(200,40,40);
          text-decoration-thickness: 3px;
          text-underline-offset: 4px;
        }
        .hiw2-main {
          font-size: clamp(24px, 3vw, 42px);
          font-weight: 900;
          color: #0F172A;
          line-height: 1.25;
          letter-spacing: -0.028em;
          margin: 0;
        }

        /* ── Steam animation ── */
        @keyframes hiw-steam1 {
          0%   { transform: translateY(0) scaleX(1);   opacity: 0; }
          15%  { opacity: 0.55; }
          80%  { opacity: 0.2; }
          100% { transform: translateY(-38px) scaleX(1.4); opacity: 0; }
        }
        @keyframes hiw-steam2 {
          0%   { transform: translateY(0) scaleX(1);   opacity: 0; }
          20%  { opacity: 0.45; }
          100% { transform: translateY(-42px) scaleX(0.8); opacity: 0; }
        }
        @keyframes hiw-steam3 {
          0%   { transform: translateY(0) scaleX(1);   opacity: 0; }
          25%  { opacity: 0.5; }
          100% { transform: translateY(-36px) scaleX(1.2); opacity: 0; }
        }
        .hiw-steam1 { animation: hiw-steam1 2.4s ease-in-out infinite; transform-origin: center bottom; }
        .hiw-steam2 { animation: hiw-steam2 2.8s ease-in-out 0.6s infinite; transform-origin: center bottom; }
        .hiw-steam3 { animation: hiw-steam3 2.2s ease-in-out 1.1s infinite; transform-origin: center bottom; }

        /* ── Lamp flicker animation ── */
        @keyframes hiw-flicker {
          0%,100% { opacity: 0.22; }
          10%     { opacity: 0.18; }
          20%     { opacity: 0.25; }
          30%     { opacity: 0.16; }
          40%     { opacity: 0.24; }
          50%     { opacity: 0.12; }
          55%     { opacity: 0.26; }
          65%     { opacity: 0.20; }
          75%     { opacity: 0.28; }
          85%     { opacity: 0.15; }
          92%     { opacity: 0.23; }
        }
        .hiw-lamp-glow { animation: hiw-flicker 3.5s ease-in-out infinite; }

        @media (max-width: 1100px) {
          .hiw2-left-side, .hiw2-right-side { display: none; }
          .hiw2-body { flex: 1; max-width: none; }
          .hiw2-section { padding: 80px 28px; }
          .hiw2-wrap { gap: 0; }
        }
        @media (max-width: 540px) {
          .hiw2-section { padding: 60px 18px; }
          .hiw2-p1, .hiw2-main { font-size: 22px; }
          .hiw2-p1 { margin-bottom: 40px; }
        }
      `}</style>

      <section className="hiw2-section">
        <div className="hiw2-wrap">

          {/* ─── Left: Tea cup on stacked books ─── */}
          <div className="hiw2-left-side">
            <svg className="hiw2-art-svg" viewBox="0 0 210 300" fill="none" xmlns="http://www.w3.org/2000/svg">

              {/* ── Steam wisps ── */}
              <g className="hiw-steam1">
                <path d="M 100 66 C 97 60 103 54 99 48" stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
              </g>
              <g className="hiw-steam2">
                <path d="M 112 64 C 116 57 110 50 114 43" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </g>
              <g className="hiw-steam3">
                <path d="M 124 66 C 120 59 126 52 122 46" stroke="#0F172A" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
              </g>

              {/* ── Mug body ── */}
              <path d="M 78 75 C 77 72 79 70 82 70 C 96 70 128 70 140 70 C 143 70 145 72 145 75 C 145 88 143 108 141 116 C 140 120 136 122 130 122 C 116 122 96 122 84 122 C 79 122 77 119 77 116 C 75 108 77 88 78 75 Z"
                stroke="#0F172A" strokeWidth="2.2" fill="white" strokeLinejoin="round"/>
              <path d="M 79 76 C 78 73 80 71 83 71 C 97 71 129 71 141 71 C 144 71 146 73 146 76 C 146 89 144 109 142 117"
                stroke="#0F172A" strokeWidth="0.85" fill="none" opacity="0.32"/>

              {/* Mug rim */}
              <path d="M 77 80 C 96 78 128 78 145 80"
                stroke="#0F172A" strokeWidth="1.2" fill="none" opacity="0.4"/>

              {/* Handle */}
              <path d="M 145 82 C 158 80 165 88 164 98 C 163 108 156 116 145 114"
                stroke="#0F172A" strokeWidth="2.1" fill="none" strokeLinecap="round"/>
              <path d="M 146 83 C 159 81 166 89 165 99 C 164 109 157 117 146 115"
                stroke="#0F172A" strokeWidth="0.8" fill="none" opacity="0.3"/>

              {/* Tea liquid surface */}
              <path d="M 82 84 C 98 82 126 83 142 84"
                stroke="#0F172A" strokeWidth="1.1" fill="none" opacity="0.35" strokeDasharray="3 4"/>

              {/* ── Bottom of mug / saucer ── */}
              <path d="M 74 124 C 76 128 86 130 111 130 C 136 130 146 128 148 124"
                stroke="#0F172A" strokeWidth="1.8" fill="white" strokeLinecap="round"/>

              {/* ── Book 1 (top, thin) ── */}
              <path d="M 66 148 C 65 144 67 142 70 142 C 90 141 140 141 152 142 C 156 142 158 144 157 148 C 157 152 155 154 152 154 C 130 155 80 155 70 154 C 67 154 66 152 66 148 Z"
                stroke="#0F172A" strokeWidth="2" fill="#FAFAFA" strokeLinejoin="round"/>
              <path d="M 67 149 C 66 145 68 143 71 143 C 91 142 141 142 153 143"
                stroke="#0F172A" strokeWidth="0.75" fill="none" opacity="0.28"/>
              {/* Spine line */}
              <path d="M 70 142 C 70 148 70 154 70 154" stroke="#0F172A" strokeWidth="1.3" fill="none" opacity="0.5"/>

              {/* ── Book 2 (middle, thicker) ── */}
              <path d="M 58 168 C 57 163 59 160 63 160 C 86 159 136 159 151 160 C 156 160 158 163 157 168 C 157 174 155 177 151 177 C 128 178 80 178 63 177 C 59 177 58 174 58 168 Z"
                stroke="#0F172A" strokeWidth="2.1" fill="white" strokeLinejoin="round"/>
              <path d="M 59 169 C 58 164 60 161 64 161 C 87 160 137 160 152 161"
                stroke="#0F172A" strokeWidth="0.8" fill="none" opacity="0.28"/>
              {/* Pages texture */}
              <path d="M 152 160 C 153 168 153 177 151 177" stroke="#0F172A" strokeWidth="1.2" fill="none" opacity="0.45"/>
              <path d="M 155 162 C 156 168 156 175 154 177" stroke="#0F172A" strokeWidth="0.7" fill="none" opacity="0.22"/>

              {/* ── Book 3 (bottom, widest) ── */}
              <path d="M 50 194 C 49 188 51 184 56 183 C 82 182 138 182 158 183 C 163 183 165 187 164 194 C 164 201 161 205 157 205 C 132 206 76 206 56 205 C 51 205 50 201 50 194 Z"
                stroke="#0F172A" strokeWidth="2.2" fill="#FAFAFA" strokeLinejoin="round"/>
              <path d="M 51 195 C 50 189 52 185 57 184 C 83 183 139 183 159 184"
                stroke="#0F172A" strokeWidth="0.85" fill="none" opacity="0.28"/>
              {/* Spine */}
              <path d="M 57 183 C 57 194 57 205 57 205" stroke="#0F172A" strokeWidth="1.4" fill="none" opacity="0.48"/>
              {/* Decorative lines on cover */}
              <path d="M 70 190 C 100 189 130 190 150 190" stroke="#0F172A" strokeWidth="0.7" fill="none" opacity="0.22"/>
              <path d="M 70 197 C 95 196 125 197 148 197" stroke="#0F172A" strokeWidth="0.7" fill="none" opacity="0.18"/>

              {/* Ground line */}
              <path d="M 34 210 C 80 208 148 209 180 210"
                stroke="#0F172A" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.28"/>

              {/* Sparkle top-left */}
              <g stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round" opacity="0.5">
                <line x1="30" y1="50" x2="30" y2="62"/>
                <line x1="24" y1="56" x2="36" y2="56"/>
                <line x1="26" y1="52" x2="34" y2="60"/>
                <line x1="34" y1="52" x2="26" y2="60"/>
              </g>
              {/* Mini sparkle */}
              <g stroke="#0F172A" strokeWidth="1.1" strokeLinecap="round" opacity="0.35">
                <line x1="172" y1="80" x2="172" y2="88"/>
                <line x1="168" y1="84" x2="176" y2="84"/>
              </g>
            </svg>
          </div>

          {/* ─── Text body ─── */}
          <div className="hiw2-body">
            <p className="hiw2-p1">
              Plenty of marketing agencies run ads, send traffic to a form, and walk away.{" "}
              <span className="hiw2-tagline-inline">That&apos;s not us.</span>
            </p>

            <p className="hiw2-main">
              We qualify every homeowner through conversation, send you a{" "}
              <span style={{ position: "relative", display: "inline" }}>
                full project brief
                <svg
                  viewBox="0 0 210 14"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-9px",
                    width: "100%",
                    height: "14px",
                    overflow: "visible",
                    pointerEvents: "none",
                  }}
                >
                  <path d="M 2 10 C 45 3 110 12 165 7 C 192 4 206 9 208 8"
                    stroke="rgb(124,58,237)" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
                  <path d="M 3 11 C 46 4 111 13 166 8 C 193 5 207 10 209 9"
                    stroke="rgb(124,58,237)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.38"/>
                </svg>
              </span>
              , and{" "}
              <span style={{ position: "relative", display: "inline" }}>
                book real appointments
                <svg
                  viewBox="0 0 280 14"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-9px",
                    width: "100%",
                    height: "14px",
                    overflow: "visible",
                    pointerEvents: "none",
                  }}
                >
                  <path d="M 2 10 C 55 3 130 12 195 7 C 235 3 265 9 278 8"
                    stroke="rgb(180,83,9)" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
                  <path d="M 3 11 C 56 4 131 13 196 8 C 236 4 266 10 279 9"
                    stroke="rgb(180,83,9)" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.38"/>
                </svg>
              </span>
              {" "}directly on{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                your calendar
                <svg
                  viewBox="0 0 160 44"
                  fill="none"
                  style={{
                    position: "absolute",
                    left: "-22px",
                    top: "-6px",
                    width: "calc(100% + 44px)",
                    height: "calc(100% + 18px)",
                    overflow: "visible",
                    pointerEvents: "none",
                  }}
                >
                  <path d="M 80 4 C 116 2 156 8 164 22 C 168 31 156 40 122 43 C 88 46 32 44 12 37 C -4 31 -4 20 14 11 C 32 4 58 4 80 4 Z"
                    stroke="rgb(22,163,74)" strokeWidth="2.3" fill="none" opacity="0.78"/>
                  <path d="M 79 5 C 109 4 149 9 157 23 C 161 31 149 39 119 42"
                    stroke="rgb(22,163,74)" strokeWidth="0.9" fill="none" opacity="0.38"/>
                </svg>
              </span>.
            </p>
          </div>

          {/* ─── Right: Desk lamp with heart-leaf plant ─── */}
          <div className="hiw2-right-side">
            <svg className="hiw2-art-svg" viewBox="0 0 210 300" fill="none" xmlns="http://www.w3.org/2000/svg">

              {/* ── Lamp glow / light cone ── */}
              <path d="M 108 118 C 88 145 72 168 68 200 C 80 200 140 200 152 200 C 148 168 132 145 108 118 Z"
                fill="#0F172A" className="hiw-lamp-glow"/>

              {/* ── Lamp shade ── */}
              {/* Outer shade shape */}
              <path d="M 82 120 C 83 114 88 110 96 108 C 104 106 116 106 122 108 C 130 110 134 115 134 121 C 130 124 120 128 108 129 C 96 130 84 126 82 120 Z"
                stroke="#0F172A" strokeWidth="2.3" fill="white" strokeLinejoin="round"/>
              <path d="M 83 121 C 84 115 89 111 97 109 C 105 107 117 107 123 109 C 131 111 135 116 135 122"
                stroke="#0F172A" strokeWidth="0.85" fill="none" opacity="0.3"/>
              {/* Shade rim bottom */}
              <path d="M 84 121 C 96 131 120 131 132 121"
                stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              {/* Shade inner line */}
              <path d="M 92 113 C 104 116 116 116 126 113"
                stroke="#0F172A" strokeWidth="1" fill="none" opacity="0.3"/>

              {/* ── Lamp arm segment 1 (upper, angled right-down) ── */}
              <path d="M 108 129 C 112 140 118 155 126 168"
                stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
              <path d="M 109 130 C 113 141 119 156 127 169"
                stroke="#0F172A" strokeWidth="0.85" strokeLinecap="round" fill="none" opacity="0.3"/>

              {/* Elbow joint */}
              <circle cx="127" cy="170" r="5.5" stroke="#0F172A" strokeWidth="2" fill="white"/>
              <circle cx="128" cy="171" r="5.5" stroke="#0F172A" strokeWidth="0.7" fill="none" opacity="0.3"/>

              {/* ── Lamp arm segment 2 (lower, angled left-down) ── */}
              <path d="M 127 174 C 122 190 116 210 112 230"
                stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
              <path d="M 128 175 C 123 191 117 211 113 231"
                stroke="#0F172A" strokeWidth="0.85" strokeLinecap="round" fill="none" opacity="0.3"/>

              {/* Second joint */}
              <circle cx="112" cy="232" r="5" stroke="#0F172A" strokeWidth="2" fill="white"/>

              {/* ── Base ── */}
              <path d="M 90 248 C 91 242 96 238 112 236 C 128 234 136 238 138 244 C 140 248 136 252 128 254 C 116 256 96 256 90 252 C 88 250 89 249 90 248 Z"
                stroke="#0F172A" strokeWidth="2.1" fill="white" strokeLinejoin="round"/>
              <path d="M 91 249 C 92 243 97 239 113 237 C 129 235 137 239 139 245"
                stroke="#0F172A" strokeWidth="0.8" fill="none" opacity="0.28"/>
              {/* Base foot line */}
              <path d="M 80 258 C 100 256 134 256 148 258"
                stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35"/>

              {/* Ground line */}
              <path d="M 30 262 C 80 260 150 261 185 262"
                stroke="#0F172A" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.25"/>

              {/* ── Plant pot ── */}
              <path d="M 38 246 C 37 241 39 238 43 238 C 50 238 62 238 66 238 C 70 238 72 241 71 246 C 70 252 68 256 64 258 C 57 260 45 260 41 258 C 38 256 38 252 38 246 Z"
                stroke="#0F172A" strokeWidth="2" fill="white" strokeLinejoin="round"/>
              <path d="M 39 247 C 38 242 40 239 44 239 C 51 239 63 239 67 239"
                stroke="#0F172A" strokeWidth="0.75" fill="none" opacity="0.28"/>
              {/* Pot rim */}
              <path d="M 36 241 C 44 239 60 239 73 241"
                stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round" fill="none"/>

              {/* ── Plant stem ── */}
              <path d="M 54 238 C 53 228 52 218 54 210"
                stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" fill="none"/>

              {/* ── Heart leaves ── */}
              {/* Leaf 1 — left */}
              <path d="M 53 218 C 50 213 42 212 39 216 C 36 220 39 225 44 224 C 49 223 53 218 53 218 Z"
                stroke="#0F172A" strokeWidth="1.9" fill="white" strokeLinejoin="round"/>
              <path d="M 53 218 C 50 213 42 212 39 216"
                stroke="#0F172A" strokeWidth="0.7" fill="none" opacity="0.3"/>
              {/* Heart dip top of leaf 1 */}
              <path d="M 45 213 C 46 211 48 211 49 213"
                stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>

              {/* Leaf 2 — right */}
              <path d="M 54 222 C 58 216 66 215 69 219 C 72 223 69 228 64 227 C 59 226 54 222 54 222 Z"
                stroke="#0F172A" strokeWidth="1.9" fill="white" strokeLinejoin="round"/>
              <path d="M 54 222 C 58 216 66 215 69 219"
                stroke="#0F172A" strokeWidth="0.7" fill="none" opacity="0.3"/>
              {/* Heart dip */}
              <path d="M 60 216 C 61 214 63 214 64 216"
                stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>

              {/* Leaf 3 — top */}
              <path d="M 54 210 C 51 204 43 202 40 206 C 37 210 41 215 46 214 C 51 213 54 210 54 210 Z"
                stroke="#0F172A" strokeWidth="1.8" fill="white" strokeLinejoin="round"/>
              {/* Heart dip */}
              <path d="M 45 203 C 46 201 48 201 49 203"
                stroke="#0F172A" strokeWidth="1.1" strokeLinecap="round" fill="none"/>

              {/* Leaf 4 — top right */}
              <path d="M 55 208 C 59 202 67 200 70 204 C 73 208 70 213 65 212 C 60 211 55 208 55 208 Z"
                stroke="#0F172A" strokeWidth="1.8" fill="white" strokeLinejoin="round"/>
              {/* Heart dip */}
              <path d="M 61 201 C 62 199 64 199 65 201"
                stroke="#0F172A" strokeWidth="1.1" strokeLinecap="round" fill="none"/>

              {/* ★ Sparkle top-right */}
              <g stroke="#0F172A" strokeWidth="1.7" strokeLinecap="round" opacity="0.5">
                <line x1="172" y1="42" x2="172" y2="56"/>
                <line x1="165" y1="49" x2="179" y2="49"/>
                <line x1="167" y1="44" x2="177" y2="54"/>
                <line x1="177" y1="44" x2="167" y2="54"/>
              </g>
              {/* Mini sparkle near plant */}
              <g stroke="#0F172A" strokeWidth="1.1" strokeLinecap="round" opacity="0.35">
                <line x1="26" y1="220" x2="26" y2="228"/>
                <line x1="22" y1="224" x2="30" y2="224"/>
              </g>
            </svg>
          </div>

        </div>
      </section>
    </>
  );
}
