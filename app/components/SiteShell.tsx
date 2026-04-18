"use client";

import Link from "next/link";
import { useState } from "react";
import Nav from "./Nav";

export default function SiteShell({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

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
                    className="nav-toggle-btn"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls="nav-list"
                    aria-label={open ? "Close navigation" : "Open navigation"}
                >
                    <span aria-hidden="true">{open ? "✕" : "☰"}</span>
                </button>
            </header>

            <div className="site-layout">
                <aside className="site-sidebar">
                    <Nav open={open} />
                </aside>
                <main id="main-content" className="site-main">
                    <div className="content-body">{children}</div>
                </main>
            </div>
        </>
    );
}
