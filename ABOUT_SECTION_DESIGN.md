# About Us — Section Design Documentation

## Overview

The About Us page (`src/pages/About.tsx` + `src/about.css`) is a full-page editorial layout for the Aga Khan Academy Maputo website. It is built with React and plain CSS using a set of shared CSS custom properties (defined in `App.css`) for colours and typography. The page is structured as a series of distinct full-width sections stacked vertically, each with its own background, typography treatment, and interaction pattern.

---

## Typography & Colour System

| Token | Value | Usage |
|---|---|---|
| `--charcoal` | Dark near-black | Hero left panel, Values section, Footer |
| `--green-deep` | Deep forest green | Timeline section, CTA button |
| `--green` | Mid green | Ticker bar |
| `--accent` | Bright green | Section tags, programme hover, CTA background |
| `--accent-light` | Light sage | Italic headings, hero stat text |
| `--cream` | Off-white | Hero right panel, Mission background |
| `--muted` | Mid-grey | Subtitles, meta labels |

**Fonts:**
- `Playfair Display` (serif) — all display headings, large numerals
- `DM Sans` (sans-serif) — all body copy, labels, uppercase tags

---

## Sections

### 1. Hero
**File location:** [`src/pages/About.tsx` (lines 26–58)](src/pages/About.tsx), [`src/about.css` (lines 3–116)](src/about.css)

A two-column, full-viewport split layout.

**Left panel** (`--charcoal` background):
- Small all-caps eyebrow label with a short green line before it
- Large Playfair Display heading (`clamp(56px–88px)`) in white with an italic green accent word
- Three metadata stat items (Established, Programme, Network) separated by a faint horizontal rule

**Right panel** (`--cream` background):
- A CSS grid dot pattern as a decorative background
- Three concentric animated circles: the outer two rotate continuously via `@keyframes abSpin` (40s and 30s respectively, one in reverse with a dashed green border), the inner one is static
- A centred year (`2013`) in large Playfair Display and a "Founded" sub-label overlay

---

### 2. Ticker
**File location:** [`src/pages/About.tsx` (lines 61–67)](src/pages/About.tsx), [`src/about.css` (lines 118–130)](src/about.css)

A full-width green band with a looping horizontal marquee. Key information (IB programmes, nationalities, founding year, etc.) scrolls continuously using `@keyframes abTicker` at 35s duration. Items are duplicated so the loop appears seamless.

---

### 3. Our History (Story)
**File location:** [`src/pages/About.tsx` (lines 69–87)](src/pages/About.tsx), [`src/about.css` (lines 155–188)](src/about.css)

A white two-column grid (`1fr 2fr`).

**Left aside** (sticky at `top: 120px`):
- A very large `01` numeral in outline/transparent stroke style using `-webkit-text-stroke`
- A small uppercase "Our History" label

**Right content** (`.reveal` animated):
- Section tag, large Playfair heading, and four paragraphs of body text at `font-size: 14px / line-height: 1.85`

---

### 4. Timeline (Milestones)
**File location:** [`src/pages/About.tsx` (lines 89–117)](src/pages/About.tsx), [`src/about.css` (lines 190–225)](src/about.css)

Set on a `--green-deep` background. Four items in an equal-column CSS grid with `1px` hairline gaps (achieved by setting `gap: 1px` and `background` on the container).

Each milestone card:
- Shows a large Playfair Display year in `--accent-light`
- A small all-caps label and a short description
- On hover: a 2px green underline animates from left to right via CSS `width` transition

Milestone items have staggered `transitionDelay` for entrance animations.

---

### 5. Mission
**File location:** [`src/pages/About.tsx` (lines 119–148)](src/pages/About.tsx), [`src/about.css` (lines 227–283)](src/about.css)

Centred, `--cream` background, generous padding (`140px 60px`).

- A large block-quote in Playfair Display (`clamp(32px–62px)`) with italic green emphasis words
- A small uppercase sub-paragraph below

**Pillars row** — four icon tiles arranged in a flex row:
- Square bordered icon box (`56×56px`) with a geometric Unicode symbol in green
- Name in small bold caps
- Description in muted grey

---

### 6. Programmes
**File location:** [`src/pages/About.tsx` (lines 150–178)](src/pages/About.tsx), [`src/about.css` (lines 285–340)](src/about.css)

White background. Two-part layout:

**Header** — a `1fr 1fr` grid with a large heading on the left and a short descriptive paragraph aligned to the bottom-right.

**Programme cards** — a three-column grid (`repeat(3, 1fr)`) with `2px` hairline gaps. Each card:
- Programme number in Playfair Display (e.g., `01 —`)
- Full programme name and IB tag
- Description paragraph
- "IB Authorised" status badge with a pulsing green dot (CSS `@keyframes abPulse`)
- On hover: background shifts to `--cream` and a `3px` green bar animates down the left edge

---

### 7. Values
**File location:** [`src/pages/About.tsx` (lines 180–207)](src/pages/About.tsx), [`src/about.css` (lines 342–393)](src/about.css)

`--charcoal` two-column grid (`1fr 1fr`), minimum `70vh` height.

**Left column:**
- Section tag and large italic heading
- A large stat display: `40+` in `--accent-light` Playfair Display with supporting label

**Right column:**
- Three value items stacked in equal rows, each with a hairline bottom border
- Each item has a numbered label (e.g., `V.01`), a bold white name, and a muted body description
- Subtle hover background lift effect

---

### 8. CTA (Call to Action)
**File location:** [`src/pages/About.tsx` (lines 209–218)](src/pages/About.tsx), [`src/about.css` (lines 398–442)](src/about.css)

Full-width centred section on `--accent` (bright green) background.

- Heading in white Playfair Display, max-width `680px`
- Supporting paragraph in semi-transparent white
- Two buttons side by side:
  - **Apply Now** — dark green fill, on hover becomes transparent with white border
  - **Back to Home** — transparent with white border, on hover fills dark green

---

### 9. Footer
**File location:** [`src/pages/About.tsx` (lines 220–236)](src/pages/About.tsx), [`src/about.css` (lines 444–468)](src/about.css)

A `--charcoal` three-column flex bar. Contains the school emblem SVG + name on the left, a copyright notice centred, and a location label (with a small `◉` marker) on the right.

---

## Scroll Reveal Animation

All sections with the `.reveal` class start invisibly (`opacity: 0`, `transform: translateY(28px)`) and fade/slide into view when they enter the viewport. This is driven by a single `IntersectionObserver` (threshold `0.12`) set up in `useEffect` at component mount. When an element intersects, the class `.visible` is added, which transitions the element to `opacity: 1` and `transform: translateY(0)` over `0.8s`.

Staggered reveals are achieved with inline `transitionDelay` props (e.g., `0.1s`, `0.2s`, `0.3s`) on child elements within the same section.

---

## Responsive Behaviour

Breakpoint: `max-width: 900px`

| Section | Desktop | Mobile |
|---|---|---|
| Hero | Two-column split | Single column, right panel `min-height: 50vh` |
| Story | `1fr 2fr` grid | Single column, aside not sticky |
| Timeline | 4-column grid | 2-column grid |
| Programmes header | `1fr 1fr` grid | Single column |
| Programme cards | 3-column grid | Single column |
| Values | `1fr 1fr` grid | Single column |
| CTA / Footer | Centred flex | Column flex |

Horizontal padding reduces from `60px` to `30px` across all sections at the mobile breakpoint.
