# FlowQualify brand & theme

Reference for colors, type, and light/dark mode so the product stays consistent.

---

## Fonts

| Role   | Font              | Weights | Usage                          |
|--------|-------------------|---------|--------------------------------|
| **Sans** | Plus Jakarta Sans | 200–800 | Body, UI, headings (primary)   |

- **Variable:** `--font-plus-jakarta`
- **Fallback:** `"Plus Jakarta Sans", sans-serif`
- **Source:** [Google Fonts](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

Use **semibold (600)** for section labels and small caps; **bold (700)** for main headlines.

---

## Colors

### Primary (brand)

| Token           | Dark mode        | Light mode        | Hex (dark) | Usage                    |
|-----------------|------------------|-------------------|------------|--------------------------|
| **Primary**     | `rgb(232,138,232)` | same              | `#E88AE8`  | Accent, CTAs, links      |
| **Primary hover** | `rgb(215,118,215)` | same            | `#D776D7`  | Buttons, links on hover  |
| **Button fill** | `rgb(125,48,125)`  | same            | `#7D307D`  | Solid primary button bg  |
| **Button hover**| `rgb(105,38,105)`  | same            | `#692669`  | Solid button hover       |

### Accent palette (supporting)

Use for icons, badges, and secondary emphasis. Main = solid; muted = low-opacity bg/border.

| Name    | Main              | Muted                  |
|---------|-------------------|------------------------|
| Pink    | `rgb(232,138,232)`| `rgba(232,138,232,0.2)`|
| Cyan    | `rgb(34,211,238)` | `rgba(34,211,238,0.2)` |
| Amber   | `rgb(251,191,36)` | `rgba(251,191,36,0.2)` |
| Emerald | `rgb(52,211,153)` | `rgba(52,211,153,0.2)` |
| Blue    | `rgb(96,165,250)` | `rgba(96,165,250,0.2)` |
| Violet  | `rgb(167,139,250)`| `rgba(167,139,250,0.2)` |

---

## Dark mode (default)

| Token        | Value              | Hex / note           | Usage                |
|-------------|--------------------|----------------------|----------------------|
| Background  | `rgb(10,9,9)`      | `#0a0909`            | Page, sections       |
| Foreground  | `#ffffff`          | White                | Headings, primary text |
| Secondary   | `rgb(156,163,175)` | Gray-400             | Body secondary, meta |
| Muted body  | `rgb(209,213,219)` | Gray-300             | Long copy, captions  |
| Surface     | `rgb(20,19,19)`    | Slightly lighter bg | Cards, inputs        |
| Surface alt | `rgb(15,14,18)`    | Results section      | Alternate sections   |
| Border      | `white/5` – `white/40` | Opacity scale    | Dividers, cards      |

Gradients (dark):

- Hero: `from-[primary]/10 via-[background] to-[#000201]`
- Sections: `from-[primary]/5` to transparent

---

## Light mode

| Token        | Value              | Hex / note           | Usage                |
|-------------|--------------------|----------------------|----------------------|
| Background  | `rgb(250,250,250)` | `#fafafa`            | Page, sections       |
| Foreground  | `rgb(10,9,9)`      | `#0a0909`            | Headings, primary text |
| Secondary   | `rgb(107,114,128)` | Gray-500             | Body secondary, meta |
| Muted body  | `rgb(75,85,99)`    | Gray-600             | Long copy, captions  |
| Surface     | `#ffffff`          | White                | Cards, inputs        |
| Surface alt  | `rgb(243,244,246)` | Gray-100            | Alternate sections   |
| Border      | `black/8` – `black/20` | Opacity scale     | Dividers, cards      |

Primary and accent colors stay the same; they meet contrast on both backgrounds.

Gradients (light):

- Hero: `from-[primary]/10 via-[background] to-white`
- Sections: `from-[primary]/5` to transparent

---

## CSS variables (for implementation)

You can mirror this in `globals.css` and switch with a `.dark` / `.light` or `prefers-color-scheme` wrapper.

**Dark (current):**

```css
:root {
  --background: rgb(10, 9, 9);
  --foreground: #ffffff;
  --primary: rgb(232, 138, 232);
  --primary-hover: rgb(215, 118, 215);
  --secondary: rgb(156, 163, 175);
  --muted: rgb(209, 213, 219);
  --surface: rgb(20, 19, 19);
  --surface-alt: rgb(15, 14, 18);
  --border: rgba(255, 255, 255, 0.1);
  --font-sans: var(--font-plus-jakarta);
}
```

**Light:**

```css
[data-theme="light"],
@media (prefers-color-scheme: light) {
  :root {
    --background: rgb(250, 250, 250);
    --foreground: rgb(10, 9, 9);
    --primary: rgb(232, 138, 232);
    --primary-hover: rgb(215, 118, 215);
    --secondary: rgb(107, 114, 128);
    --muted: rgb(75, 85, 99);
    --surface: #ffffff;
    --surface-alt: rgb(243, 244, 246);
    --border: rgba(0, 0, 0, 0.1);
  }
}
```

---

## UI patterns

- **Section label:** Uppercase, tracking-wider, `text-primary`, font-semibold.
- **Headline:** `text-4xl`–`text-5xl`, font-semibold, tracking-tight, foreground.
- **Body:** `text-lg` where needed, secondary/muted for long copy.
- **Primary button:** Primary bg (or button-fill), white text, primary hover.
- **Secondary button:** Transparent, primary border, primary text; hover: primary/15 bg.
- **Links:** Primary color, underline on hover.
- **Borders:** Prefer `border-white/5` (dark) or `border-black/10` (light) for section dividers.

---

## Theme color (meta)

- **PWA / browser chrome:** `#0a0909` (matches dark background)
