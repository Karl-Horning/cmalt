/**
 * @fileoverview Previous/next page navigation component for the CMALT portfolio.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navStructure } from "@/lib/nav";

/**
 * Flat ordered list of all portfolio pages derived from the navigation
 * structure. The home page is excluded because it sits outside the sequential
 * reading order of the portfolio.
 */
const pages = navStructure.flatMap((item) =>
    item.type === "standalone"
        ? [{ href: item.href, label: item.label }]
        : item.items.map((sub) => ({ href: sub.href, label: sub.label }))
);

/**
 * Renders previous and next page links based on the current pathname.
 *
 * Renders nothing when the current path is not part of the sequential
 * portfolio navigation (for example, the home page).
 *
 * @returns The rendered navigation element, or null if not applicable.
 */
export default function PrevNextNav() {
    const pathname = usePathname();
    const index = pages.findIndex((p) => p.href === pathname);

    if (index === -1) return null;

    const prev = pages[index - 1] ?? null;
    const next = pages[index + 1] ?? null;

    return (
        <nav className="prev-next-nav" aria-label="Page navigation">
            <div className="prev-next-prev">
                {prev && (
                    <Link href={prev.href} className="prev-next-link">
                        <span className="prev-next-direction">← Previous</span>
                        <span className="prev-next-label">{prev.label}</span>
                    </Link>
                )}
            </div>
            <div className="prev-next-next">
                {next && (
                    <Link href={next.href} className="prev-next-link">
                        <span className="prev-next-direction">Next →</span>
                        <span className="prev-next-label">{next.label}</span>
                    </Link>
                )}
            </div>
        </nav>
    );
}
