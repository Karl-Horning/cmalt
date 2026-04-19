/**
 * @fileoverview Top-level layout shell for the CMALT portfolio site.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Nav from "./Nav";
import PrevNextNav from "./PrevNextNav";

/**
 * Renders the site header, sidebar navigation, and main content area.
 *
 * Mobile navigation state is stored as the pathname at which the menu was
 * opened rather than a plain boolean. This means navigating to a new page
 * automatically closes the menu without needing a synchronous setState call
 * inside an effect, which would cause an extra render cycle on every navigation.
 *
 * @param props - Component props.
 * @param props.children - Page content rendered inside the main element.
 * @returns The rendered site shell fragment.
 */
export default function SiteShell({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [openAt, setOpenAt] = useState<string | null>(null);
    const open = openAt === pathname;

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <header className="site-header">
                <Link href="/" className="site-brand">
                    <span>Karl Horning</span>
                    <span className="brand-separator" aria-hidden="true">
                        —
                    </span>
                    <span className="brand-subtitle">CMALT Portfolio</span>
                </Link>
                <button
                    type="button"
                    className="nav-toggle-btn"
                    onClick={() => setOpenAt(open ? null : pathname)}
                    aria-expanded={open ? "true" : "false"}
                    aria-controls="nav-list"
                    aria-label={open ? "Close navigation" : "Open navigation"}
                >
                    <span aria-hidden="true">{open ? "✕" : "☰"}</span>
                </button>
            </header>

            <div className="site-layout">
                <aside className={`site-sidebar${open ? " site-sidebar--open" : ""}`}>
                    <Nav />
                </aside>
                {open && (
                    <div
                        className="nav-backdrop"
                        onClick={() => setOpenAt(null)}
                        aria-hidden="true"
                    />
                )}
                <BackToTop />
                <main id="main-content" className="site-main">
                    <div className="content-body">
                        {children}
                        <PrevNextNav />
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    );
}
