"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import BackToTop from "@/components/BackToTop/BackToTop";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import PrevNextNav from "@/components/PrevNextNav/PrevNextNav";
import styles from "./SiteShell.module.css";

export default function SiteShell({ children }: { children: React.ReactNode }) {
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
                className={styles.navToggleBtn}
                onClick={() => setOpenAt(open ? null : pathname)}
                aria-expanded={open}
                aria-controls="site-sidebar"
                aria-label={open ? "Close navigation" : "Open navigation"}
            >
                {open ? (
                    <FaTimes aria-hidden="true" />
                ) : (
                    <FaBars aria-hidden="true" />
                )}
            </button>

            <div className={styles.siteLayout}>
                <aside
                    id="site-sidebar"
                    className={`${styles.siteSidebar}${open ? ` ${styles.open}` : ""}`}
                >
                    <div className={styles.sidebarBrand}>
                        <Link
                            href="/"
                            className={styles.sidebarBrandLink}
                            aria-label="Karl Horning — CMALT Portfolio, home"
                        >
                            <svg
                                className={styles.siteLogo}
                                viewBox="0 0 1920 1080"
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
                    </div>
                    <Nav />
                </aside>
                {open && (
                    <div
                        className={styles.navBackdrop}
                        onClick={() => setOpenAt(null)}
                        aria-hidden="true"
                    />
                )}
                <BackToTop />
                <main id="main-content" className={styles.siteMain}>
                    <div className={styles.contentBody}>
                        {children}
                        <PrevNextNav />
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    );
}
