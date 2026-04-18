/**
 * @fileoverview Sidebar navigation component for the CMALT portfolio.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * A standalone nav entry rendered above the grouped sections.
 */
interface StandaloneItem {
    type: "standalone";
    href: string;
    label: string;
}

/**
 * A grouped nav section containing one or more child links.
 */
interface GroupItem {
    type: "group";
    label: string;
    items: { href: string; label: string }[];
}

/** All portfolio sections in display order, grouped to reflect CMALT structure. */
const navStructure: (StandaloneItem | GroupItem)[] = [
    {
        type: "standalone",
        href: "/contextual-statement",
        label: "Contextual Statement",
    },
    {
        type: "group",
        label: "Section 1: Operational Issues",
        items: [
            { href: "/technology-constraints", label: "Technology Constraints" },
            { href: "/technical-knowledge", label: "Technical Knowledge" },
            { href: "/technology-deployment", label: "Technology Deployment" },
        ],
    },
    {
        type: "group",
        label: "Section 2: Teaching & Learning",
        items: [
            { href: "/teaching-and-learning", label: "Teaching & Learning" },
            { href: "/target-learners", label: "Target Learners" },
        ],
    },
    {
        type: "group",
        label: "Section 3: Wider Context",
        items: [
            { href: "/legislation", label: "Legislation" },
            { href: "/policies-and-standards", label: "Policies & Standards" },
        ],
    },
    {
        type: "group",
        label: "Section 4: Communication",
        items: [{ href: "/communication", label: "Communication" }],
    },
    {
        type: "group",
        label: "Section 5: Specialist Area",
        items: [
            {
                href: "/javascript-development",
                label: "JavaScript Development",
            },
        ],
    },
    {
        type: "group",
        label: "Section 6: Professional Development",
        items: [
            { href: "/future-plans", label: "Future Plans" },
            { href: "/declaration", label: "Declaration" },
        ],
    },
];

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
