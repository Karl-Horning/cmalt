/**
 * Verifies the committed favicons and OG images still match what the generator scripts would produce.
 * Chromium renders text with slightly different anti-aliasing on different operating systems, so this compares pixel-for-pixel instead of diffing raw files.
 *
 * Run with: node scripts/check-generated-assets.mjs
 */

import { execFileSync } from "node:child_process";
import {
    mkdtempSync,
    readdirSync,
    readFileSync,
    rmSync,
    statSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// Cross-platform (macOS versus Linux) rendering noise measured up to 0 pixels for favicons and 32 pixels for OG images; the smallest tested content change (a divider colour swap) moves 1560 pixels.
const MAX_DIFF_PIXELS = { favicons: 10, ogImages: 150 };

/** Every PNG a directory tree contains, recursively, as paths relative to `dir`. */
function listPngsRecursive(dir, base = dir) {
    return readdirSync(dir).flatMap((entry) => {
        const fullPath = path.join(dir, entry);
        if (statSync(fullPath).isDirectory()) {
            return listPngsRecursive(fullPath, base);
        }
        return entry.endsWith(".png") || entry.endsWith(".ico")
            ? [path.relative(base, fullPath)]
            : [];
    });
}

/** Reads a file as a PNG, extracting the single embedded image if it's an ICO. */
function readAsPng(filePath) {
    const buffer = readFileSync(filePath);
    const isIco = filePath.endsWith(".ico");
    return PNG.sync.read(isIco ? buffer.subarray(22) : buffer);
}

function compareFile(committedPath, generatedPath, maxDiffPixels) {
    const committed = readAsPng(committedPath);
    const generated = readAsPng(generatedPath);

    if (committed.width !== generated.width || committed.height !== generated.height) {
        return `dimensions differ (${committed.width}x${committed.height} vs ${generated.width}x${generated.height})`;
    }

    const { width, height } = committed;
    const diffPixels = pixelmatch(
        committed.data,
        generated.data,
        null,
        width,
        height,
        { threshold: 0.1 },
    );

    return diffPixels > maxDiffPixels
        ? `${diffPixels} pixels differ (limit ${maxDiffPixels})`
        : null;
}

function checkAssetGroup(label, committedDir, generatedDir, maxDiffPixels) {
    const committedFiles = new Set(listPngsRecursive(committedDir));
    const generatedFiles = new Set(listPngsRecursive(generatedDir));
    const problems = [];

    for (const file of committedFiles) {
        if (!generatedFiles.has(file)) {
            problems.push(`${file}: missing from freshly generated output`);
        }
    }
    for (const file of generatedFiles) {
        if (!committedFiles.has(file)) {
            problems.push(`${file}: generated but not committed`);
        }
    }
    for (const file of committedFiles) {
        if (!generatedFiles.has(file)) continue;
        const reason = compareFile(
            path.join(committedDir, file),
            path.join(generatedDir, file),
            maxDiffPixels,
        );
        if (reason) problems.push(`${file}: ${reason}`);
    }

    if (problems.length === 0) {
        console.log(`${label}: up to date (${committedFiles.size} files checked)`);
        return true;
    }

    console.error(`${label}: out of date`);
    for (const problem of problems) {
        console.error(`  - ${problem}`);
    }
    return false;
}

function main() {
    const tmpDir = mkdtempSync(path.join(tmpdir(), "check-generated-assets-"));
    const faviconOutDir = path.join(tmpDir, "favicons");
    const ogOutDir = path.join(tmpDir, "og");

    try {
        execFileSync("node", ["scripts/generate-favicons.mjs"], {
            cwd: ROOT,
            env: { ...process.env, FAVICON_OUT_DIR: faviconOutDir },
            stdio: "inherit",
        });
        execFileSync("node", ["scripts/generate-og-images.mjs"], {
            cwd: ROOT,
            env: { ...process.env, OG_OUT_DIR: ogOutDir },
            stdio: "inherit",
        });

        const faviconsOk = checkAssetGroup(
            "Favicons",
            path.join(ROOT, "public", "favicons"),
            faviconOutDir,
            MAX_DIFF_PIXELS.favicons,
        );
        const ogImagesOk = checkAssetGroup(
            "OG images",
            path.join(ROOT, "public", "og"),
            ogOutDir,
            MAX_DIFF_PIXELS.ogImages,
        );

        if (!faviconsOk || !ogImagesOk) {
            console.error(
                "\nRun 'npm run generate:favicons' and 'npm run generate:og-images' locally and commit the result.",
            );
            process.exit(1);
        }
    } finally {
        rmSync(tmpDir, { recursive: true, force: true });
    }
}

main();
