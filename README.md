# Limoctan.github.io

Personal portfolio of **Jhonatan Brito** — single-page bilingual (ES/EN) site
built with Astro + Tailwind CSS v4, deployed to GitHub Pages.

- Spanish (default): https://limoctan.github.io/
- English: https://limoctan.github.io/en/

## Development

```sh
npm install
npx astro dev --background   # dev server at http://localhost:4321
npm run build                # static build to ./dist
npm run preview              # preview the build
```

Manage the background dev server with `astro dev stop`, `astro dev status`
and `astro dev logs`.

## Content

- `cv/cv-spanish.md` — source of truth for the Spanish text; English is
  translated by hand.
- `src/data/*.ts` — all page content, bilingual side by side (`_es` / `_en`
  fields), one object per item.
- `cv/*.pdf` — the CVs; copies live in `public/cv/` so the download button
  works in the build.

## Deploy

Pushing to `main` builds and deploys automatically through
`.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages).
