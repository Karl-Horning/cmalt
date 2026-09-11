/**
 * Regenerates every OpenGraph card PNG (public/og/*.png) using the current palette and site font (Lexend), sourcing each page's title from the shared nav config so there's a single source of truth.
 *
 * Run with: node scripts/generate-og-images.mjs
 */

import { chromium } from "@playwright/test";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { navStructure } from "../lib/nav.ts";
import { AUTHOR_NAME, SITE_TITLE } from "../lib/config.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "og");

const WIDTH = 1200;
const HEIGHT = 630;

// Matches the site's `--footer-bg` / `--footer-fg` / `--footer-accent` tokens in app/globals.css.
const COLORS = {
    bg: "#0d0d0d",
    fg: "#b9bfc8",
    accent: "#ed84b9",
};

const pages = navStructure
    .filter((item) => item.type === "group")
    .flatMap((group) => group.items)
    .map(({ href, label }) => ({
        slug: href.replace(/^\//, ""),
        title: label,
    }));

// The site-wide fallback card, used where no page-specific OG image applies.
pages.push({ slug: "preview-image", title: SITE_TITLE });

function buildCardHtml(title) {
    return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@500;600;800&display=swap" rel="stylesheet" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    background: ${COLORS.bg};
    font-family: "Lexend", system-ui, sans-serif;
  }
  .card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 90px;
  }
  h1 {
    color: ${COLORS.fg};
    font-size: 68px;
    font-weight: 800;
    line-height: 1.15;
    max-width: 950px;
  }
  .divider {
    width: 260px;
    height: 6px;
    border-radius: 3px;
    background: ${COLORS.accent};
    margin: 36px 0 32px;
  }
  .subtitle {
    color: ${COLORS.fg};
    font-size: 30px;
    font-weight: 500;
    line-height: 1.4;
  }
</style>
</head>
<body>
  <div class="card">
    <h1>${title}</h1>
    <div class="divider"></div>
    <p class="subtitle">${AUTHOR_NAME}'s<br />${SITE_TITLE}</p>
  </div>
</body>
</html>`;
}

async function main() {
    const tmpDir = mkdtempSync(path.join(tmpdir(), "og-gen-"));
    const browser = await chromium.launch();

    try {
        const page = await browser.newPage({
            viewport: { width: WIDTH, height: HEIGHT },
            deviceScaleFactor: 1,
        });

        for (const { slug, title } of pages) {
            const htmlPath = path.join(tmpDir, `${slug}.html`);
            writeFileSync(htmlPath, buildCardHtml(title));

            await page.goto(`file://${htmlPath}`);
            await page.evaluate(() => document.fonts.ready);

            const buffer = await page.screenshot({
                clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
            });
            writeFileSync(path.join(OUT_DIR, `${slug}.png`), buffer);
            console.log(`Generated og/${slug}.png`);
        }

        await page.close();
    } finally {
        await browser.close();
        rmSync(tmpDir, { recursive: true, force: true });
    }
}

main();
