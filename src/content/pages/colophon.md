---
title: Colophon
eyebrow: About this site
lede: How this site is built, and how to edit it.
description: The tools, type, and structure behind milesalanmoore.github.io.
---

## Build

Static site built with [Astro](https://astro.build) and deployed to GitHub
Pages on every push to `main`. No client-side JavaScript ships with the pages.

## Type & color

Headings are set in [Newsreader](https://fonts.google.com/specimen/Newsreader);
body text in [Work Sans](https://fonts.google.com/specimen/Work+Sans). The
palette is a warm off-white with a single terracotta accent — every color in
the site comes from the custom properties at the top of
`src/styles/global.css`. Changing `--accent` there changes the whole site.

## Where the content lives

- **Prose pages** (this one, About, AI Use Policy, License) — markdown files in
  `src/content/pages/`. Add a file, get a page.
- **News** — one markdown file per item in `src/content/news/`.
- **Publications & datasets** — `src/data/publications.ts`.
- **CV entries** — `src/data/cv.ts`.
- **Home page copy** — `src/data/home.ts`.
- **Links & email** — `src/data/socials.ts`.

Layout, nav, and footer are all in `src/components/Layout.astro`.
