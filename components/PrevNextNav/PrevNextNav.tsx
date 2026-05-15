"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navStructure } from "@/lib/nav";
import styles from "./PrevNextNav.module.css";

const pages = navStructure.flatMap((item) =>
    item.type === "standalone"
        ? item.utility ? [] : [{ href: item.href, label: item.label }]
        : item.items.map((sub) => ({ href: sub.href, label: sub.label }))
);

export default function PrevNextNav() {
    const pathname = usePathname();
    const index = pages.findIndex((p) => p.href === pathname);

    if (index === -1) return null;

    const prev = pages[index - 1] ?? null;
    const next = pages[index + 1] ?? null;

    return (
        <nav className={styles.prevNextNav} aria-label="Page navigation">
            <div className={styles.prevNextPrev}>
                {prev && (
                    <Link href={prev.href} className={styles.prevNextLink}>
                        <span className={styles.prevNextDirection}>← Previous</span>
                        <span className={styles.prevNextLabel}>{prev.label}</span>
                    </Link>
                )}
            </div>
            <div className={styles.prevNextNext}>
                {next && (
                    <Link href={next.href} className={styles.prevNextLink}>
                        <span className={styles.prevNextDirection}>Next →</span>
                        <span className={styles.prevNextLabel}>{next.label}</span>
                    </Link>
                )}
            </div>
        </nav>
    );
}
