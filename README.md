# CMALT Portfolio

A statically exported Next.js portfolio built to support [CMALT accreditation](https://www.alt.ac.uk/cmalt) — a peer-assessed professional credential from the Association for Learning Technology.

**Live site:** [cmalt.karlhorning.dev](https://cmalt.karlhorning.dev)

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Icons**
- Deployed to **GitHub Pages** via GitHub Actions with a custom domain

## Notable decisions

**Single source of truth for navigation** — `lib/nav.ts` drives the site nav, the footer sitemap, and the previous/next page buttons. No duplication.

**SEO** — Each page exports typed metadata via a shared `lib/siteMetadata.ts` helper (Open Graph, Twitter cards, canonical URLs). JSON-LD structured data is included on every page. The site is registered with Google Search Console.

**CI/CD** — GitHub Actions builds and deploys to GitHub Pages on every push to main.

**Accessibility testing** — Playwright with `@axe-core/playwright` for automated accessibility checks alongside manual review.

**Search** — Client-side fuzzy search with [Fuse.js](https://fusejs.io/). The index is bundled at build time from each page's metadata — no build script, no external service. Supports `Cmd+K` / `Ctrl+K` from anywhere on the site.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Scripts

| Script | Description |
| --- | --- |
| `dev` | Start the development server on port 3001 |
| `build` | Production build (static export) |
| `start` | Start the Next.js server (run `build` first) |
| `lint` | Run ESLint |
| `test` | Run Playwright tests |
| `test:ui` | Run Playwright tests with the interactive UI |
| `check-links` | Check for broken links on the live site |
| `check-links:local` | Check for broken links on the local server |

## License

Released under the [MIT License](./LICENSE) by [Karl Horning](https://github.com/Karl-Horning).
