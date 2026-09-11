/** @fileoverview Page header: section eyebrow, title, dates, reading time. */

"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiCalendar, FiClock, FiRefreshCw } from "react-icons/fi";
import { navStructure } from "@/lib/nav";
import styles from "./PageHeader.module.css";

/** Props for the {@link PageHeader} component. */
interface PageHeaderProps {
    /** Page title rendered as an `<h1>`. */
    title: string;
    /** ISO 8601 date string (YYYY-MM-DD) used for the `<time>` element. */
    date: string;
    /** ISO 8601 date string (YYYY-MM-DD) the page content was last revised. */
    lastUpdated?: string;
    /** Estimated reading time in minutes. */
    readingTime: number;
    /** Optional photo shown as the header's full-bleed background. */
    image?: { src: string; alt: string };
}

/** Formats an ISO date string (YYYY-MM-DD) as "1 Jan 2026". */
function formatDate(iso: string): string {
    const [year, month, day] = iso.split("-").map(Number);
    return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

/** Header block shown at the top of each content page. */
export default function PageHeader({
    title,
    date,
    lastUpdated,
    readingTime,
    image,
}: PageHeaderProps) {
    const pathname = usePathname();

    const group = navStructure.find(
        (item) =>
            item.type === "group" &&
            item.items.some((subItem) => subItem.href === pathname),
    );

    const showUpdated = lastUpdated && lastUpdated !== date;

    const text = (
        <>
            {group && <p className={styles.eyebrow}>{group.label}</p>}
            <h1>{title}</h1>
            <div className={styles.pageMeta}>
                <span className={styles.pageMetaItem}>
                    <FiCalendar aria-hidden="true" />
                    Published <time dateTime={date}>{formatDate(date)}</time>
                </span>
                {showUpdated && (
                    <span className={styles.pageMetaItem}>
                        <FiRefreshCw aria-hidden="true" />
                        Updated{" "}
                        <time dateTime={lastUpdated}>
                            {formatDate(lastUpdated)}
                        </time>
                    </span>
                )}
                <span className={styles.pageMetaItem}>
                    <FiClock aria-hidden="true" />
                    {readingTime} min read
                </span>
            </div>
        </>
    );

    if (!image) {
        return <header className={styles.pageHeader}>{text}</header>;
    }

    return (
        <header className={styles.pageHeaderFull}>
            <div className={styles.pageHeaderBg}>
                <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className={styles.pageHeaderOverlay} />
            </div>
            <div className={styles.pageHeaderFullInner}>{text}</div>
        </header>
    );
}
