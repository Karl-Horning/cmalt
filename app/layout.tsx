import type { Metadata } from "next";
// To change fonts: swap the import below and update the variable name in the
// html className and the --font-* custom property in globals.css.
import { Lexend } from "next/font/google";
import "./globals.css";
import {
    AUTHOR_NAME,
    AUTHOR_URL,
    SITE_DESCRIPTION,
    SITE_NAME,
    SITE_TITLE,
    SITE_URL,
} from "@/lib/config";
import SiteShell from "@/components/SiteShell/SiteShell";
import layoutStyles from "./layout.module.css";

const lexend = Lexend({
    variable: "--font-lexend",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        template: `%s | ${SITE_TITLE} | ${AUTHOR_NAME}`,
        default: `${SITE_TITLE} | ${AUTHOR_NAME}`,
    },
    description: SITE_DESCRIPTION,
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    icons: {
        icon: [
            {
                url: "/favicons/light/favicon-32x32.png",
                sizes: "32x32",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/favicons/dark/favicon-32x32.png",
                sizes: "32x32",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/favicons/light/favicon-16x16.png",
                sizes: "16x16",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/favicons/dark/favicon-16x16.png",
                sizes: "16x16",
                media: "(prefers-color-scheme: dark)",
            },
        ],
        shortcut: [
            {
                url: "/favicons/light/favicon.ico",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/favicons/dark/favicon.ico",
                media: "(prefers-color-scheme: dark)",
            },
        ],
        apple: [
            {
                url: "/favicons/light/apple-icon.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/favicons/dark/apple-icon.png",
                media: "(prefers-color-scheme: dark)",
            },
        ],
    },
    openGraph: {
        siteName: SITE_NAME,
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={lexend.variable}>
            <body>
                <a href="#main-content" className={layoutStyles.skipLink}>
                    Skip to main content
                </a>
                <SiteShell>{children}</SiteShell>
            </body>
        </html>
    );
}
