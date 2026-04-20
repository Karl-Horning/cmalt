/**
 * @fileoverview Top-level layout shell for the CMALT portfolio site.
 */

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
    const router = useRouter();
    const [openAt, setOpenAt] = useState<string | null>(null);
    const open = openAt === pathname;

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                router.push("/search");
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [router]);

    return (
        <>
            <button
                type="button"
                className="nav-toggle-btn"
                onClick={() => setOpenAt(open ? null : pathname)}
                aria-expanded={open}
                aria-controls="site-sidebar"
                aria-label={open ? "Close navigation" : "Open navigation"}
            >
                {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>

            <div className="site-layout">
                <aside
                    id="site-sidebar"
                    className={`site-sidebar${open ? " site-sidebar--open" : ""}`}
                >
                    <div className="sidebar-brand">
                        <Link href="/" className="sidebar-brand-link" aria-label="Karl Horning — CMALT Portfolio, home">
                            KH.
                        </Link>
                    </div>
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
