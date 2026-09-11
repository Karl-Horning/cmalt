/**
 * Regenerates every favicon/touch-icon PNG (plus favicon.ico) for both theme variants from the site's monogram mark, using the current `--bg` / `--fg` (or `--muted`) / `--accent` values from globals.css.
 *
 * Run with: node scripts/generate-favicons.mjs
 */

import { chromium } from "@playwright/test";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = path.join(__dirname, "..", "public", "favicons");
const LOGO_SVG_PATH = path.join(__dirname, "..", "design", "favicon-logo.svg");

/**
 * Reads the letters and brackets/arrow path data from `design/favicon-logo.svg`.
 * Its two groups ("logo-main" and "logo-accents") carry different y-translate offsets; that relative offset is what aligns the arrowhead cut out of the letters with the solid arrow drawn in the accent path.
 */
function readMonogramFromLogoSvg() {
    const svg = readFileSync(LOGO_SVG_PATH, "utf8");

    const extractGroup = (id) => {
        const groupMatch = svg.match(
            new RegExp(
                `<g id="${id}" transform="matrix\\(1,0,0,1,[-\\d.]+,([-\\d.]+)\\)">\\s*<path d="([^"]+)"`,
            ),
        );
        if (!groupMatch) {
            throw new Error(`Could not find group "${id}" in ${LOGO_SVG_PATH}`);
        }
        return { yTranslate: parseFloat(groupMatch[1]), d: groupMatch[2] };
    };

    const letters = extractGroup("logo-main");
    const accents = extractGroup("logo-accents");

    return {
        lettersPath: letters.d,
        bracketsPath: accents.d,
        lettersYOffset: letters.yTranslate - accents.yTranslate,
    };
}

/** Tight bounding box of a set of (x, y) points. */
function boundingBox(points) {
    const xs = points.map((p) => p[0]);
    const ys = points.map((p) => p[1]);
    return {
        x: Math.min(...xs),
        y: Math.min(...ys),
        w: Math.max(...xs) - Math.min(...xs),
        h: Math.max(...ys) - Math.min(...ys),
    };
}

function pathCoords(d, yOffset = 0) {
    return [...d.matchAll(/(-?\d+\.?\d*),(-?\d+\.?\d*)/g)].map((m) => [
        parseFloat(m[1]),
        parseFloat(m[2]) + yOffset,
    ]);
}

const {
    lettersPath: LETTERS_PATH,
    bracketsPath: BRACKETS_PATH,
    lettersYOffset: LETTERS_Y_OFFSET,
} = readMonogramFromLogoSvg();

// Tight bounding box of the combined artwork (brackets + arrow + letters, with LETTERS_Y_OFFSET applied), used to centre it in the icon canvas.
const MONOGRAM_BBOX = boundingBox([
    ...pathCoords(BRACKETS_PATH),
    ...pathCoords(LETTERS_PATH, LETTERS_Y_OFFSET),
]);

// Matches the `--bg` / `--fg` or `--muted` (`--logo-fg`) / `--accent` tokens in app/globals.css for each theme.
const THEMES = {
    light: { bg: "#f7f3ee", letters: "#14181d", brackets: "#8e1451" },
    dark: { bg: "#111015", letters: "#ab9fba", brackets: "#ed84b9" },
};

// [filename, pixel size] pairs for every icon the site references.
const TARGETS = [
    ["android-icon-36x36.png", 36],
    ["android-icon-48x48.png", 48],
    ["android-icon-72x72.png", 72],
    ["android-icon-96x96.png", 96],
    ["android-icon-144x144.png", 144],
    ["android-icon-192x192.png", 192],
    ["apple-icon-57x57.png", 57],
    ["apple-icon-60x60.png", 60],
    ["apple-icon-72x72.png", 72],
    ["apple-icon-76x76.png", 76],
    ["apple-icon-114x114.png", 114],
    ["apple-icon-120x120.png", 120],
    ["apple-icon-144x144.png", 144],
    ["apple-icon-152x152.png", 152],
    ["apple-icon-180x180.png", 180],
    ["apple-icon.png", 192],
    ["apple-icon-precomposed.png", 192],
    ["favicon-16x16.png", 16],
    ["favicon-32x32.png", 32],
    ["favicon-96x96.png", 96],
    ["ms-icon-70x70.png", 70],
    ["ms-icon-144x144.png", 144],
    ["ms-icon-150x150.png", 150],
    ["ms-icon-310x310.png", 310],
];

function buildIconSvg(size, colors) {
    const markWidthFraction = 0.82;
    const scale = (size * markWidthFraction) / MONOGRAM_BBOX.w;
    const translateX =
        (size - MONOGRAM_BBOX.w * scale) / 2 - MONOGRAM_BBOX.x * scale;
    const translateY =
        (size - MONOGRAM_BBOX.h * scale) / 2 - MONOGRAM_BBOX.y * scale;
    const cornerRadius = size * 0.18;

    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${cornerRadius}" fill="${colors.bg}" />
  <g transform="translate(${translateX} ${translateY}) scale(${scale})" fill-rule="evenodd">
    <path d="${LETTERS_PATH}" fill="${colors.letters}" transform="translate(0 ${LETTERS_Y_OFFSET})" />
    <path d="${BRACKETS_PATH}" fill="${colors.brackets}" />
  </g>
</svg>`;
}

/** Wraps a PNG buffer in a minimal single-image ICO container. */
function pngToIco(pngBuffer, size) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type: icon
    header.writeUInt16LE(1, 4); // image count

    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bit depth
    entry.writeUInt32LE(pngBuffer.length, 8); // image data size
    entry.writeUInt32LE(header.length + entry.length, 12); // offset

    return Buffer.concat([header, entry, pngBuffer]);
}

async function main() {
    const tmpDir = mkdtempSync(path.join(tmpdir(), "favicon-gen-"));
    const browser = await chromium.launch();

    try {
        for (const [themeName, colors] of Object.entries(THEMES)) {
            const outDir = path.join(OUT_ROOT, themeName);
            const page = await browser.newPage({ deviceScaleFactor: 1 });

            for (const [filename, size] of TARGETS) {
                const svgPath = path.join(tmpDir, `${themeName}-${size}.svg`);
                writeFileSync(svgPath, buildIconSvg(size, colors));

                await page.setViewportSize({ width: size, height: size });
                await page.goto(`file://${svgPath}`);
                const buffer = await page.screenshot({
                    clip: { x: 0, y: 0, width: size, height: size },
                    omitBackground: true,
                });
                writeFileSync(path.join(outDir, filename), buffer);

                if (filename === "favicon-16x16.png") {
                    writeFileSync(
                        path.join(outDir, "favicon.ico"),
                        pngToIco(buffer, size),
                    );
                }
            }

            await page.close();
            console.log(`Generated ${themeName} favicons`);
        }
    } finally {
        await browser.close();
        rmSync(tmpDir, { recursive: true, force: true });
    }
}

main();
