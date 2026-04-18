"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Nav from "./Nav";

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
                <main id="main-content" className="site-main">
                    <div className="content-body">{children}</div>
                </main>
            </div>
        </>
    );
}
