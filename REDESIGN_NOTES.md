# "Field Notes" redesign — customization guide

This branch (`cherry-blossom-redesign`) ports **Variant B — "Field Notes"** from
the design prototype into the live Astro site. Everything below is built to be
hot-swappable from obvious, single locations.

## 🎨 Colors

All colors live in **`src/styles/theme.css`**. Change a value there and the whole
site re-skins — paper backgrounds, ink/text, the sage + clay accents, petal
colors, the blossom-tree stroke, and the monogram gradient. The `theme.css`
"semantic aliases" map the palette onto the variables components actually read,
so you rarely need to touch anything but the top block.

## 🌳 The blossom tree (wireframe → high-fidelity)

The inline tree is an isolated component: **`src/components/graphics/BlossomTree.astro`**.
Replace the paths between the `<!-- TREE:START -->` and `<!-- TREE:END -->`
markers with your own SVG (keep or update the `viewBox`). Stroke color comes from
`--tree-stroke`; size and opacity are props on the component. It is used on the
home hero in `src/pages/index.astro`.

## 🌸 Falling petals

**`src/components/graphics/PetalField.astro`** renders the drifting petals as a
fixed, full-viewport overlay (disabled under `prefers-reduced-motion`). Tune
density with the `count` prop, colors with `--petal-*` in `theme.css`, and the
drift keyframes (`petal-drift-*`) live in `src/styles/global.css`. Toggle the
whole effect per-page with the `petals` prop on `BaseLayout`.

## 🔗 Social / professional links

Single source of truth: **`src/data/socials.ts`** (GitHub, Google Scholar, ORCID,
LinkedIn, Bluesky). Rendered as tabular rows on the home hero, an icon list on the
About page, and favicon buttons in the footer. `email` and `cvPath` live here too.

## 🖼 Images & favicon

- Favicon: `public/assets/miles/favicon2.svg` (wired up in `BaseLayout.astro`).
- About photo: `public/assets/images/bio-photo-1.jpg`.
- CV PDF: drop your file at **`public/assets/cv/miles-moore-cv.pdf`** (the path is
  set in `src/data/socials.ts` → `cvPath`). The Download buttons point there.

## 📝 Page content

- Home hero / research blurbs / skills: `src/data/home.ts`
- Publications & datasets: `src/data/publications.ts`
- CV (education, experience, teaching, presentations): `src/pages/cv.astro`
- News posts: `src/content/news/*.mdx`

## Pages

`/` (home) · `/about/` · `/cv/` · `/research/` (+ `/research/[slug]/`) ·
`/news/` (+ `/news/[slug]/`) · `/license/` · `/ai/`. The film page was
intentionally left out of this redesign.

## ⚠️ Deployment note

`.github/workflows/publish.yml` currently publishes the repo root (`publish_dir: .`)
on push to `main`. For this Astro site it should instead `npm run build` and publish
the generated **`dist/`** directory. Update that before merging to `main`.
