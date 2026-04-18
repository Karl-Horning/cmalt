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
    title: "CMALT Portfolio — Karl Horning",
    description:
        "CMALT portfolio for Karl Horning, Learning Technologist and JavaScript Developer.",
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
