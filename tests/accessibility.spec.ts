/**
 * @fileoverview Automated accessibility tests using axe-core.
 *
 * Scans every page for WCAG violations detectable by axe. Note that axe
 * catches roughly 30–40% of accessibility issues; these tests complement
 * but do not replace manual accessibility review.
 */

import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { routes } from "../lib/nav";

for (const route of routes) {
    test(`${route} — no automatically detectable accessibility violations`, async ({
        page,
    }) => {
        await page.goto(route);
        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
    });
}
