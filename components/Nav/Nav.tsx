/** @fileoverview Full site menu rendered from the shared `navStructure` config. */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navColumns } from "@/lib/nav";
import styles from "./Nav.module.css";

/** Props for the {@link Nav} component. */
interface NavProps {
    /** Called when a link is followed, so the menu panel can close. */
    onNavigate?: () => void;
}

/** Full-site menu grid shown inside the header's "Sections" panel. */
export default function Nav({ onNavigate }: NavProps) {
    const pathname = usePathname();

    return (
        <div className={styles.navColumns}>
            {navColumns.map((column, columnIndex) => (
                <div key={columnIndex} className={styles.navColumn}>
                    {column.map((item) => (
                        <div key={item.label} className={styles.navGroup}>
                            <p className={styles.navGroupLabel}>
                                {item.label}
                            </p>
                            {item.items.map((subItem) => (
                                <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className={styles.navItem}
                                    onClick={onNavigate}
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
                    ))}
                </div>
            ))}
        </div>
    );
}
