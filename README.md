# Aga Khan Academy Maputo Frontend

This project is a React + TypeScript single-page website for Aga Khan Academy Maputo. It is designed as a modern, content-rich institutional frontend that combines:

- Storytelling and brand presentation
- Admissions and information architecture
- Interactive sections and forms
- A built-in virtual assistant chatbot

The interface uses a green-forward brand palette, editorial typography, and structured section-based layouts with motion and reveal effects.

## 1) Tech Stack

- Framework: React 19
- Language: TypeScript
- Build Tool: Vite
- Routing: React Router (`BrowserRouter`)
- Styling: Plain CSS (modular by feature/page, imported directly in components)

## 2) Frontend Architecture

### App Shell and Entry

- `src/main.tsx`
  - Mounts the app in `StrictMode`
  - Loads global base styles from `src/index.css`
- `src/App.tsx`
  - Defines route-level composition
  - Keeps `ChatBot` mounted globally so it is available across all routes

### Route Map

- `/` -> Home
- `/about` -> About
- `/academics` -> Academics
- `/achievements` -> Achievements
- `/campus` -> Campus
- `/student-life` -> Student Life
- `/news` -> News
- `/apply` -> Apply
- `/contact` -> Contact

### Shared Components

- `src/components/Navbar.tsx`
  - Fixed top navigation
  - Scroll-reactive style state (`scrolled` class)
  - Dropdown menus for grouped links
- `src/components/Footer.tsx`
  - Multi-column footer with quick links, contact blocks, social links, and legal line
- `src/components/ChatBot.tsx`
  - Floating assistant panel with open/close state
  - Keyword-based intent engine
  - Suggestion chips and simulated typing feedback

## 3) Design System

### Color Tokens

Core design tokens are defined in `src/App.css` using CSS custom properties:

- Primary brand: `--green`, `--green-deep`, `--green-light`
- Accent set: `--accent`, `--accent-light`
- Neutral grayscale: `--g900` through `--g50`
- Utility aliases: `--text`, `--muted`, `--border`, etc.

This enables consistent theming across pages while still allowing each page to establish distinct mood blocks.

### Typography

The visual language mixes serif display typography with clean sans-serif UI text:

- Headline/display styles: `Fraunces`, `Playfair Display`
- Interface/body styles: `Inter`, `DM Sans`

This pairing creates an institutional/editorial character while preserving readability in long sections and forms.

### Spacing and Layout

- Large section paddings (typically 80-120px on desktop) create strong visual rhythm
- Grid-first composition is used heavily:
  - Two-column narrative splits
  - Multi-card feature grids
  - Alternating content-image blocks
- Hero sections rely on layered composition:
  - Background gradients/grids
  - Overlay elements
  - Stat blocks and action buttons

### Motion and Interaction

The frontend uses meaningful motion rather than excessive micro-animation:

- Scroll reveal animations via `IntersectionObserver`
  - `fade-up` and `pg-reveal` patterns
- Hover-state transitions for cards, links, and buttons
- Ticker/marquee strips for informational movement
- Subtle decorative animation in About (rotating circular motifs)

## 4) Styling File Responsibilities

- `src/index.css`
  - Minimal reset and root sizing
- `src/App.css`
  - Global tokens and core reusable blocks
  - Navbar, hero, shared section styles, footer, chatbot base styles
  - Responsive breakpoints for major layout shifts
- `src/pages.css`
  - Shared page-level system for Academics, Campus, Student Life, News, Apply, Contact, and Achievements-oriented blocks
  - Utility classes like `pg-hero`, `pg-tag`, `pg-h1`, `pg-reveal`
- `src/about.css`
  - Dedicated visual identity for About page
  - Distinct typography and animation treatment
- `src/dashboard.css`
  - Reserved for additional dashboard-specific styling (if activated)

## 5) Page-by-Page Frontend Design

### Home (`src/pages/Home.tsx`)

Design intent: flagship brand narrative landing page.

Major sections:

- Hero with media placeholder and CTA pair
- IB programme stripe
- Admissions announcement bar
- Academy intro split section
- Programme cards (PYP/MYP/DP)
- Campus preview block
- Student life visual grid
- News previews
- Admissions CTA section
- Testimonials
- Footer

Notable behavior:

- Click-to-replace hero media placeholder
- Scroll-triggered reveals for key cards
- Mixed placeholder and real image assets

### About (`src/pages/About.tsx`)

Design intent: institutional history and values storytelling.

Major sections:

- Dual-panel immersive hero
- Animated ticker
- Historical narrative
- Milestone timeline
- Mission quote and pillars
- Programme overview cards
- Values and impact
- Conversion CTA

This page has its own visual dialect through `about.css` while still honoring global palette variables.

### Academics (`src/pages/Academics.tsx`)

Design intent: structured academic credibility and programme detail.

Major sections:

- Academic hero with stats
- Philosophy strip
- Deep-dive programme modules
- Performance/stat band
- Subject cards
- University destinations
- CTA

### Achievements (`src/pages/Achievements.tsx`)

Design intent: metrics, outcomes, and public proof of excellence.

Major sections:

- High-impact stats hero
- Year-tabbed IB result comparisons
- Score distribution visual bars
- Trend table
- Sports and arts highlights
- University outcomes
- Service impact numbers

### Campus (`src/pages/Campus.tsx`)

Design intent: facilities and location as premium value proposition.

Major sections:

- Hero scaffold + ticker
- Campus quick facts
- Alternating facility feature blocks
- Sports complex highlights
- Sustainability narrative
- Embedded map and contact/location details

### Student Life (`src/pages/StudentLife.tsx`)

Design intent: whole-child development and co-curricular richness.

Major sections:

- Hero and engagement stats
- Intro narrative
- Clubs and societies grid
- Sports showcase
- Arts section
- CAS framework cards
- Leadership and MUN panels

### News (`src/pages/News.tsx`)

Design intent: editorial newsroom and content discoverability.

Major sections:

- Masthead with category pills
- Featured story panel
- Filtered article grid
- Archive list
- Newsletter subscription form

Interaction:

- Client-side category filtering via component state

### Apply (`src/pages/Apply.tsx`)

Design intent: admissions conversion and practical onboarding.

Tabbed structure:

- `How to Apply`
- `Enroll Now`
- `School Fees`

Enrollment form supports extensive parent/student details and local success state handling.

### Contact (`src/pages/Contact.tsx`)

Design intent: clear, low-friction communication.

Major sections:

- Contact form with subject dropdown
- Contact information cards
- Department quick links
- Full-width embedded map block

## 6) Interaction Patterns

### Scroll Reveal Pattern

Many pages use this shared approach:

1. Register `IntersectionObserver` in `useEffect`
2. Target elements by class (`.pg-reveal`, `.fade-up`, `.reveal`)
3. Add `visible` class when entering viewport

This keeps motion consistent and lightweight.

### Form Pattern

Forms in Apply/Contact use controlled React state with:

- typed form objects
- reusable setter closures
- local submit success feedback

### ChatBot Pattern

`ChatBot.tsx` includes:

- intent dictionary (`intents`) with keyword arrays
- scoring based on keyword matches
- fallback response when confidence is low
- UX elements: typing indicator, quick suggestions, sticky bottom scrolling

## 7) Responsive Strategy

Responsive behavior is implemented through CSS media queries in the style files.

Common adjustments include:

- collapsing multi-column desktop grids into single-column mobile layouts
- reducing paddings/margins for narrow screens
- scaling headline typography with `clamp(...)`
- simplifying navbar behavior (desktop link group hidden at smaller widths)

## 8) Asset Strategy

- Primary page visuals are sourced from `src/assets/`
- Placeholder media blocks (`Photo`, `PhotoPlaceholder`) are used where production media is pending
- Additional static image folder exists (`school-images/`) for extended content pipeline

## 9) Known Frontend Limitations (Current Build)

- Many CTA links are currently placeholders (`href="#"`)
- ChatBot knowledge is static and fully client-side (no backend/NLP service)
- Contact/Apply submissions are local UI-only (no API persistence)
- Map embeds use a static URL and may need production key/location hardening
- Typography families are referenced in CSS but should be explicitly loaded for guaranteed rendering consistency

## 10) How to Run

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint project:

```bash
npm run lint
```

## 11) Suggested Next Frontend Improvements

1. Connect Apply and Contact forms to a backend endpoint (with validation and error states).
2. Replace placeholder links and media with production content.
3. Move repeated data arrays (news/programmes/stats) to typed content modules.
4. Add route-level SEO metadata and social sharing tags.
5. Add a mobile navigation drawer for improved small-screen discoverability.

---

If you want, this README can be extended with a component inventory table (props, state, dependencies) and a simple visual sitemap diagram for onboarding new frontend developers.
