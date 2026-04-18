import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Nav from "./components/Nav";

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

                <header className="site-header">
                    <Link href="/" className="site-brand">
                        <span>Karl Horning</span>
                        <span className="brand-separator" aria-hidden="true">
                            —
                        </span>
                        <span className="brand-subtitle">CMALT Portfolio</span>
                    </Link>
                </header>

                <div className="site-layout">
                    <aside className="site-sidebar">
                        <Nav />
                    </aside>
                    <main id="main-content" className="site-main">
                        <div className="content-body">{children}</div>
                    </main>
                </div>
            </body>
        </html>
    );
}
