import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import SiteShell from "./components/SiteShell";

const fraunces = Fraunces({
    variable: "--font-fraunces",
    subsets: ["latin"],
    display: "swap",
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://cmalt.karlhorning.dev"),
    title: {
        template: "%s | CMALT Portfolio | Karl Horning",
        default: "CMALT Portfolio | Karl Horning",
    },
    description:
        "CMALT portfolio for Karl Horning, full-stack developer. Peer-assessed professional accreditation completed alongside continued development work.",
    authors: [{ name: "Karl Horning", url: "https://github.com/Karl-Horning" }],
    openGraph: {
        siteName: "Karl Horning CMALT Portfolio",
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
        <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
            <body>
                <a href="#main-content" className="skip-link">
                    Skip to main content
                </a>
                <SiteShell>{children}</SiteShell>
            </body>
        </html>
    );
}
