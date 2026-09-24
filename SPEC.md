# Portfolio Spec — Jhonatan Brito

Single-page bilingual (ES/EN) portfolio, built with Astro + Tailwind, deployed to GitHub Pages.
Design reference: [brittanychiang.com](https://brittanychiang.com/) — same layout & feel, restyled.

## Non-negotiables

- **Fast loading**: static output, no framework components, minimal client JS, self-hosted assets only (no external font/CDN/icon requests; GA is the single exception).
- **Spanish is the main language.**
- **Content source**: `cv/cv-spanish.md` (Spanish). English text is translated from it by hand.
- The `cv/*.pdf` files stay untouched in `cv/` and are also copied into the build for the download button.

## Routes & i18n

| Language | Route | Notes |
|---|---|---|
| Spanish (default) | `/` | `src/pages/index.astro` |
| English | `/en/` | `src/pages/en/index.astro` |

- Astro i18n config: `locales: ['es', 'en']`, `defaultLocale: 'es'`, `prefixDefaultLocale: false`.
- **Language toggle**: plain text labels `ES | EN`, part of the left column (bottom, see layout). Switching always lands on `/` or `/en/` **top** — no anchor carry-over, no browser-language auto-redirect.
- Anchor IDs are localized per language: `/` uses `#sobre-mi`, `#experiencia`, `#proyectos`, `#contacto`; `/en/` uses `#about`, `#experience`, `#projects`, `#contact`.
- `hreflang` + `canonical` tags per language. Per-language `<title>` and `<meta description>`. **No Open Graph image.**

## Layout

### Desktop (≥1024px) — two columns

Sticky **left column** (top → bottom):

1. `h1` — "Jhonatan Brito"
2. Title — CV headline: "Desarrollador de Software Full-Stack | Frontend & Mobile Specialist" (translated on `/en/`)
3. Short tagline/greeting (one line, written from the CV summary)
4. Jump links: `Sobre mí` / `Experiencia` / `Proyectos` / `Contacto` (EN equivalents on `/en/`) with Brittany-style indicator lines
5. Social icons: GitHub → `https://github.com/Limoctan`, LinkedIn → `https://www.linkedin.com/in/jhonatan-brito-c/`
6. `ES | EN` toggle at the very bottom

**Right column** (scrolls): intro paragraph + **Download CV** button → About → Experience → Projects → Contact → footer.

> **Location is intentionally omitted everywhere.**

### Mobile (<1024px)

1. `ES | EN` toggle top-left, above the name, with bottom margin spacing
2. Name / title / tagline
3. Social icons as a horizontal row
4. **Jump links hidden** (matches reference site)
5. Content sections

### Section order (both languages)

Hero (intro + button) → About → Experience → Projects → Contact → Footer.

## Sections

### Hero
- Intro paragraph in the right column (first-person, derived from CV professional summary).
- Exactly **one button**: "Descargar CV" / "Download CV" → opens language-specific PDF in a **new tab**:
  - `/` → `cv/Jhonatan Brito CV FullStack.pdf`
  - `/en/` → `cv/Jhonatan Brito CV (English).pdf`
  - PDFs copied into build (e.g. `public/cv/`), links URL-encoded (filenames keep spaces).

### About (`#sobre-mi` / `#about`)
- "Resumen profesional" text from the CV.
- Skills grouped as in CV: **Frontend**, **Móvil**, **Backend & APIs**, **Bases de Datos & DevOps**.
- **No image / photo anywhere.**
- Each skill tech gets an icon (see Icons below).

### Experience (`#experiencia` / `#experience`)
- Brittany-style layout: company name in a left sub-column, role/dates/bullets on the right; **newest-to-oldest is NOT used** — order is fixed as below.
- **Order (CV order, intentional):**
  1. Circle Studio Labs — Desarrollador Frontend & Mobile — Enero 2021 – Marzo 2025
  2. SOMOS SISTEMAS, C.A. — Desarrollador Junior / Mid — Marzo 2019 – Enero 2021
  3. Oclinicals — Agente de Operaciones y Entrada de Datos — Noviembre 2025 – Junio 2026 (**dates are correct; listed last because it was a temporary job unrelated to the primary career**)
- **Bullets only** — no tech tag rows/chips.
- Tech names inside bullets get inline icons before the bolded name (e.g. `<icon> **Flutter**`).
- **No education section** (Universidad de Oriente deliberately excluded).
- Dates: Spanish months on `/`, translated months on `/en/` ("Jan 2021 – Mar 2025").

### Projects (`#proyectos` / `#projects`)
- **Exactly 3 stub projects** for the user to replace later manually.
- Content style: **realistic dummy data** (plausible titles/descriptions in both languages, real-looking tech tags) — clearly findable but presentable.
- Each card: **locally generated placeholder image** (SVG/gradient, no external requests), title, short description, tech tags, placeholder links (`#` / TODO).
- Data lives in **one file with both languages side by side** so translation can't drift:
  ```ts
  { title_es, title_en, desc_es, desc_en, tags, links, image }
  ```

### Contact (`#contacto` / `#contact`)
- Real contact data:
  - Email: `jhonatanjesusbrito@gmail.com` (mailto)
  - Phone: `+(58) 424 8578294` (tel link)
  - LinkedIn: `https://www.linkedin.com/in/jhonatan-brito-c/`
  - GitHub: `https://github.com/Limoctan`

### Footer
- `© 2026 Jhonatan Brito · Hecho con Astro` (translated on `/en/`).
- External links: GitHub + LinkedIn only.

## Visual style

- **Dark red background** (very dark maroon, Brittany's navy equivalent) + **grey accent** (replacing her teal) for headings, hover states, indicators.
- Exact hex shades: chosen at implementation to pass **WCAG AA contrast** on the dark red.
- Dark-only (no light mode).
- Brittany-style details: hover states on cards/links, indicator lines in jump links, monospace touches for dates/tags, skip-to-content link, visible focus states, `prefers-reduced-motion` respected.
- **Favicon**: "JB" monogram (dark red background, grey letters), replaces Astro defaults (svg + ico).

## Icons (tech)

- **Simple Icons**, inlined as **local SVG components** — no network requests, no icon-font.
- Applied in two places:
  1. Tech names inside Experience bullets (before the bolded name).
  2. Skills list items in About.
- Only for techs that have a Simple Icons brand entry (Flutter, Angular, Vue, React, NestJS, Docker, PHP, PostgreSQL, etc. — e.g. plain "REST API" or "CI/CD" get no icon).
- Icons inherit text/accent color (single-color, currentColor).

## Content data structure

- All page content in **TS data files** under `src/data/`, bilingual side-by-side (`_es` / `_en` fields) — single place to edit per item.
- `cv/cv-spanish.md` remains the human-readable source of truth; the TS files mirror it.
- Projects follow the same pattern (see above) so adding a real project later = editing one object.

## Performance / tech stack

- **Astro** (static output) + **Tailwind CSS v4** via `@tailwindcss/vite`.
- No React/Vue/etc. components.
- **Font**: one self-hosted webfont — Inter variable, woff2 (~30–50KB, preloaded), plus system monospace stack. No Google Fonts requests.
- **Client JS budget**: one ~1KB vanilla script — `IntersectionObserver` scroll-spy to highlight the active jump link (the only JS behavior beyond GA).
- No other third-party scripts.

## Analytics

- Standard async `gtag.js` snippet in `<head>` for **both languages**:
  - Measurement ID: `G-VKYNZGXTXQ`

## 404 page

- Custom `src/pages/404.astro`, styled like the site (dark red/grey).
- Text auto-selects via `navigator.language`: Spanish default, English if browser prefers English.
- Home link points to the matching language root (`/` or `/en/`).

## SEO

- Per-language `<title>` + `<meta description>`.
- `hreflang` (`es`, `en`, `x-default`) + `canonical`.
- No OG image (skipped by choice).

## Deployment

- **GitHub Pages user site**: repo must be named **`Limoctan.github.io`** (exists) → site at `https://limoctan.github.io`, **no `base` path** in Astro config.
- GitHub Actions workflow (official Astro/static-pages deploy actions): builds and deploys **automatically on push to `main`**.
- Repo → Settings → Pages → Source must be **"GitHub Actions"** (user verifies).
- At the end of implementation: **commit and push** to trigger the first deploy.

## Explicitly excluded

- Location display (Porlamar, Venezuela) — omitted everywhere.
- Education section.
- Profile/hero images, illustrations, OG image.
- Light mode.
- Anchor-preserving language switch.
- "Contact Me" hero button (only Download CV).
- Tech tag chips in Experience.
- Browser-based language auto-redirect on `/`.
