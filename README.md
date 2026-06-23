# Foovante Global — Angular Application

African carbon markets, built right. A production-grade Angular application with SSR/prerendering.

## Tech Stack

- **Angular 21** — Standalone components, new control flow (`@for`, `@if`), `@angular/ssr` static prerender
- **TypeScript 5.9**
- **SCSS** — Scoped component styles + global design system
- **Angular Router** — Lazy-loaded routes with `withViewTransitions()` and in-memory scroll restoration
- **Leaflet** — Interactive Africa map (browser-only, dynamically imported)

---

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── models/           # TypeScript interfaces
│   │   │   ├── hero-slide.model.ts
│   │   │   ├── project.model.ts
│   │   │   ├── map.model.ts
│   │   │   └── team.model.ts
│   │   └── data/             # Static data constants
│   │       ├── projects.data.ts
│   │       ├── map.data.ts
│   │       └── team.data.ts
│   ├── shared/
│   │   └── components/
│   │       ├── nav/           # Sticky navigation with dark mode
│   │       ├── footer/        # Site footer
│   │       ├── hero/          # Full-screen slideshow hero
│   │       ├── map-section/   # Interactive SVG Africa map
│   │       ├── donut-chart/   # SVG donut chart (household impact)
│   │       └── growth-chart/  # Bar chart (monthly GMV)
│   ├── features/
│   │   ├── home/              # / (landing page)
│   │   ├── funders/           # /funders
│   │   ├── projects/          # /projects
│   │   ├── investors/         # /investors
│   │   └── about/             # /about
│   ├── app.component.ts       # Root component (router-outlet)
│   ├── app.routes.ts          # Lazy-loaded route definitions
│   └── app.config.ts          # Application providers
├── styles/
│   └── styles.scss            # Global design system (CSS variables, layout, utilities)
└── index.html
```

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Install

```bash
npm install
```

### Development server

```bash
npm start
# App runs at http://localhost:4200
```

### Production build

```bash
npm run build
# Output in dist/foovante/
```

---

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | AboutComponent | Landing page — mission, team, credentials |
| `/home` | HomeComponent | Audience picker / overview |
| `/funders` | FundersComponent | Project listings, portfolio dashboard |
| `/projects` | ProjectsComponent | Apply to list, methodology library |
| `/investors` | InvestorsComponent | Traction, moat, business model |
| `/founder-brief` | FounderBriefComponent | Founder thesis |
| `/how-mrv-works` | HowMrvWorksComponent | MRV pipeline explainer |
| `/terms-of-service` | TermsOfServiceComponent | ToS |
| `/privacy-policy` | PrivacyPolicyComponent | Privacy policy |
| `**` | NotFoundComponent | 404 fallback |

---

## Images

All images are loaded from [Unsplash](https://unsplash.com) via CDN URLs defined in the data files and component TypeScript. No image files are bundled — they are fetched at runtime. To use local images:

1. Place files in `src/assets/images/`
2. Reference them as `assets/images/your-file.jpg` in the data files

---

## Design System

CSS custom properties (defined in `src/styles/styles.scss`):

| Variable | Value | Usage |
|----------|-------|-------|
| `--green` | `#3D926E` | Primary brand green |
| `--green-2` | `#2E7558` | Hover state |
| `--green-light` | `#A8D1BD` | On dark backgrounds |
| `--gold` | `#FF751F` | Energy/accent |
| `--ink` | `#0F1F1A` | Primary text |
| `--bg` | `#F6FAF7` | Page background |
| `--paper` | `#FFFFFF` | Card/section background |
| `--font-display` | Plus Jakarta Sans | Headings, numbers |
| `--font-body` | Inter | Body text |

---

## Component API

### `<fv-nav>`
| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `dark` | `boolean` | `false` | Dark/translucent mode for hero overlaps |
| `cta` | `NavCta` | Browse projects | Right-side CTA button |

### `<fv-hero>`
| Input | Type | Description |
|-------|------|-------------|
| `slides` | `HeroSlide[]` | Background slideshow images |
| `eyebrow` | `string` | Small label above headline |
| `lines` | `string[]` | Headline lines (split for animation) |
| `lead` | `string` | Subheading paragraph |
| `cta1` | `HeroCta` | Primary call-to-action button |
| `cta2` | `HeroCta` | Secondary link button |

---

## Standards Compliance

- Ghana SEC: MSR-2023-091
- Verra VCS · Gold Standard · Plan Vivo
- SOC 2 Type II · ISO 14064 · GDPR · NDPR
