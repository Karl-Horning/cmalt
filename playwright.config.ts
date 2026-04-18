import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    webServer: {
        command: "npm run dev -- --port 3001",
        url: "http://localhost:3001",
        reuseExistingServer: false,
        timeout: 60_000,
    },
    use: {
        baseURL: "http://localhost:3001",
    },
    projects: [
        { name: "desktop", use: { ...devices["Desktop Chrome"] } },
        { name: "mobile", use: { ...devices["Pixel 5"] } },
    ],
});
