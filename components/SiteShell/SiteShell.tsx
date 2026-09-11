/** @fileoverview Top-level layout shell: header, section menu, page content. */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import BackToTop from "@/components/BackToTop/BackToTop";
import Footer from "@/components/Footer/Footer";
import KSiteIcon from "@/components/icons/KSiteIcon/KSiteIcon";
import Nav from "@/components/Nav/Nav";
import PrevNextNav from "@/components/PrevNextNav/PrevNextNav";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import SearchPage from "@/components/SearchPage/SearchPage";
import styles from "./SiteShell.module.css";

/** Root layout shell; wraps page content with header, menu, and footer. */
export default function SiteShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [lastPathname, setLastPathname] = useState(pathname);
    const searchButtonRef = useRef<HTMLButtonElement>(null);

    if (pathname !== lastPathname) {
        setLastPathname(pathname);
        setMenuOpen(false);
        setSearchOpen(false);
    }

    useEffect(() => {
        document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen, searchOpen]);

    const closeSearch = () => {
        setSearchOpen(false);
        searchButtonRef.current?.focus();
    };

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setMenuOpen(false);
                setSearchOpen((v) => !v);
            } else if (e.key === "Escape" && searchOpen) {
                closeSearch();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [searchOpen]);

    return (
        <>
            <ScrollProgress />
            <header className={styles.siteHeader}>
                <div className={styles.siteHeaderInner}>
                    <Link
                        href="/"
                        className={styles.brandLink}
                        aria-label="Karl Horning: CMALT Portfolio, home"
                    >
                        <svg
                            className={styles.siteLogo}
                            viewBox="325 248 1265 580"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ fillRule: "evenodd" }}
                            aria-hidden="true"
                        >
                            <g transform="matrix(1,0,0,1,-5910,0)">
                                <g
                                    id="logo-main"
                                    transform="matrix(1,0,0,1,5931.8,150.6)"
                                >
                                    <path
                                        fill="var(--fg)"
                                        d="M1056.4,603L821.2,603L682,395.598L682,603L562,603L562,175.8L682,175.8L682,365.724L814,175.8L1056.4,175.8L1056.4,335.4L1194.4,335.4L1194.4,175.8L1314.4,175.8L1314.4,603L1194.4,603L1194.4,435L1056.4,435L1056.4,603ZM936.4,205.778L808.038,379.113L936.4,561.973L936.4,205.778Z"
                                    />
                                </g>
                                <g
                                    id="logo-accents"
                                    transform="matrix(1,0,0,1,5931.8,127.8)"
                                >
                                    <path
                                        fill="var(--accent)"
                                        d="M508,660.6L347.2,660.6L347.2,163.8L508,163.8L508,246L439.6,246L439.6,578.4L508,578.4L508,660.6ZM1436.8,246L1368.4,246L1368.4,163.8L1529.2,163.8L1529.2,660.6L1368.4,660.6L1368.4,578.4L1436.8,578.4L1436.8,246ZM936.4,458.2L936.4,584.773L808.038,401.913L936.4,228.578L936.4,358.2L1056.4,358.2L1056.4,458.2L936.4,458.2Z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </Link>

                    <div className={styles.headerActions}>
                        <button
                            type="button"
                            ref={searchButtonRef}
                            className={styles.headerIconLink}
                            onClick={() => {
                                setMenuOpen(false);
                                setSearchOpen((v) => !v);
                            }}
                            aria-expanded={searchOpen}
                            aria-controls="search-overlay-panel"
                            aria-label="Search this portfolio"
                        >
                            <FiSearch aria-hidden="true" />
                        </button>
                        <a
                            href="https://www.karlhorning.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.headerIconLink}
                            aria-label="Karl Horning's main site"
                        >
                            <KSiteIcon aria-hidden="true" />
                        </a>
                        <button
                            type="button"
                            className={styles.menuToggleBtn}
                            onClick={() => {
                                setSearchOpen(false);
                                setMenuOpen((v) => !v);
                            }}
                            aria-expanded={menuOpen}
                            aria-controls="site-menu-panel"
                            aria-label="Sections"
                        >
                            <span className={styles.menuIconStack}>
                                <FiMenu
                                    aria-hidden="true"
                                    className={`${styles.menuIcon}${
                                        menuOpen ? "" : ` ${styles.menuIconVisible}`
                                    }`}
                                />
                                <FiX
                                    aria-hidden="true"
                                    className={`${styles.menuIcon}${
                                        menuOpen ? ` ${styles.menuIconVisible}` : ""
                                    }`}
                                />
                            </span>
                            <span className={styles.menuToggleLabel}>
                                Sections
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {(menuOpen || searchOpen) && (
                <div
                    className={styles.overlayBackdrop}
                    onClick={() => {
                        setMenuOpen(false);
                        if (searchOpen) closeSearch();
                    }}
                    aria-hidden="true"
                />
            )}

            <div
                id="site-menu-panel"
                className={styles.menuPanel}
                hidden={!menuOpen}
            >
                <div className={styles.menuPanelInner}>
                    <Nav onNavigate={() => setMenuOpen(false)} />
                </div>
            </div>

            {searchOpen && (
                <div
                    id="search-overlay-panel"
                    className={styles.searchOverlayPanel}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Search this portfolio"
                >
                    <SearchPage onNavigate={() => setSearchOpen(false)} />
                </div>
            )}

            <BackToTop />
            <main id="main-content" className={styles.siteMain}>
                <div className={styles.contentBody}>
                    {children}
                    <PrevNextNav />
                </div>
            </main>
            <Footer />
        </>
    );
}
