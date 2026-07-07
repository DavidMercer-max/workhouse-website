# Workhouse — Astro site (wireframe stage)

A full port of the wireframe into [Astro](https://astro.build). Low-fidelity: real copy in, images are labelled placeholders. Fonts are Google-font stand-ins for Denton Bold / Gotham Book.

## Run it
```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
```

## Where the content lives (markdown-only, no CMS yet)
- `src/content/blog/*.md` — 24 real Perspectives posts (frontmatter: title, pillar, type, author, subtitle, excerpt, order). Add a post = add a file.
- `src/content/services/*.md` — Strategy / Creative / Digital.
- `src/content/sectors/*.md` — the three sectors.
- Schema/validation: `src/content.config.ts`.

## Structure
- `src/layouts/Base.astro` — header nav + footer + global styles.
- `src/components/` — `Placeholder.astro` (swap for `astro:assets` `<Image>` when real assets land), `PostCard.astro`.
- `src/styles/global.css` — brand tokens (colours, fonts, pill buttons). Swap the font `@import` + `--font-*` vars for the licensed webfonts.
- `src/pages/` — routes. Dynamic: `what-we-do/[slug]`, `sectors/[slug]`, `latest/[slug]`.

## Before launch (known gaps)
1. Licensed webfonts (Denton Bold, Gotham Book).
2. Contact form needs a backend (add an adapter + API route, or Formspree/Netlify Forms).
3. Real images + a proper Work / case-study collection.
4. Publish dates aren't in the source blog markup — add to frontmatter if wanted.
5. Optional: add Keystatic for a visual editor.
