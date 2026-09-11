# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

Add new entries here as they're merged, then rename this section when the release is ready.

## [1.0.0] - 2026-09-11

Initial release.

### Added

- The CMALT portfolio itself — a contextual statement plus Sections 1 to 6, each page carrying typed metadata, Open Graph and Twitter card data, canonical URLs, and JSON-LD structured data
- Site navigation and a footer sitemap, both generated from a single nav config, plus previous/next buttons for moving between pages in order
- Full-text search (Fuse.js) as an in-place overlay, opened from the header icon or `Cmd+K` / `Ctrl+K`
- Light and dark themes, with most text meeting WCAG AAA contrast in both
- An accessibility statement page covering scope, testing methods, and how to report a problem
- A skip link, visible focus styles, and support for reduced motion
- Automated accessibility testing with `@axe-core/playwright`, run on every push and pull request, alongside manual testing
- A custom 404 page
- Favicons and OpenGraph card images generated from source design files by scripts, with a CI check that fails the build if either goes out of date
- Automated deployment to GitHub Pages via GitHub Actions
