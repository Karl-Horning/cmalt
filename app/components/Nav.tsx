"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navStructure = [
    {
        type: "standalone" as const,
        href: "/contextual-statement",
        label: "Contextual Statement",
    },
    {
        type: "group" as const,
        label: "Section 1: Operational Issues",
        items: [
            { href: "/technology-constraints", label: "Technology Constraints" },
            { href: "/technical-knowledge", label: "Technical Knowledge" },
            { href: "/technology-deployment", label: "Technology Deployment" },
        ],
    },
    {
        type: "group" as const,
        label: "Section 2: Teaching & Learning",
        items: [
            { href: "/teaching-and-learning", label: "Teaching & Learning" },
            { href: "/target-learners", label: "Target Learners" },
        ],
    },
    {
        type: "group" as const,
        label: "Section 3: Wider Context",
        items: [
            { href: "/legislation", label: "Legislation" },
            { href: "/policies-and-standards", label: "Policies & Standards" },
        ],
    },
    {
        type: "group" as const,
        label: "Section 4: Communication",
        items: [{ href: "/communication", label: "Communication" }],
    },
    {
        type: "group" as const,
        label: "Section 5: Specialist Area",
        items: [
            {
                href: "/javascript-development",
                label: "JavaScript Development",
            },
        ],
    },
    {
        type: "group" as const,
        label: "Section 6: Professional Development",
        items: [
            { href: "/future-plans", label: "Future Plans" },
            { href: "/declaration", label: "Declaration" },
        ],
    },
];

export default function Nav() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav aria-label="Portfolio sections">
            <button
                className="nav-toggle-btn"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="nav-list"
            >
                <span aria-hidden="true">{open ? "✕" : "☰"}</span>
                <span>Navigation</span>
            </button>

            <div id="nav-list" className={`nav-list${open ? " open" : ""}`}>
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
