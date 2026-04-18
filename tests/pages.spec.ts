/**
 * @fileoverview Smoke tests: every page loads successfully and has an h1.
 */

import { expect, test } from "@playwright/test";
import { routes } from "../lib/nav";

for (const route of routes) {
    test(`${route} — loads with a 200 and renders an h1`, async ({ page }) => {
        const response = await page.goto(route);
        expect(response?.status()).toBe(200);
        await expect(page.locator("h1").first()).toBeVisible();
    });
}
