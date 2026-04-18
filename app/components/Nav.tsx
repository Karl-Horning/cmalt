/**
 * @fileoverview Sidebar navigation component for the CMALT portfolio.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navStructure } from "@/lib/nav";

/**
 * Renders the portfolio sidebar navigation with grouped section links.
 *
 * Highlights the active link using aria-current="page", derived from the
 * current pathname rather than route params, to avoid stale state on
 * client-side navigation.
 *
 * @returns The rendered nav element.
 */
export default function Nav() {
    const pathname = usePathname();

    return (
        <nav aria-label="Portfolio sections">
            <div id="nav-list" className="nav-list">
                {navStructure.map((item) => {
                    if (item.type === "standalone") {
                        return (
                            <div key={item.href} className="nav-standalone">
                                <Link
                                    href={item.href}
                                    className="nav-item"
                                    aria-current={
                                        pathname === item.href
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {item.label}
                                </Link>
                            </div>
                        );
                    }

                    return (
                        <div key={item.label} className="nav-group">
                            <p className="nav-group-label">{item.label}</p>
                            {item.items.map((subItem) => (
                                <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="nav-item"
                                    aria-current={
                                        pathname === subItem.href
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {subItem.label}
                                </Link>
                            ))}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}
