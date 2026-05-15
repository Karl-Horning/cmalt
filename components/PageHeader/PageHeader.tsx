/**
 * @fileoverview Page-level header displaying the title, publication date, and
 * estimated reading time.
 */

import styles from "./PageHeader.module.css";

/** Props for the {@link PageHeader} component. */
interface PageHeaderProps {
    /** Page title rendered as an `<h1>`. */
    title: string;
    /** ISO 8601 date string (YYYY-MM-DD) used for the `<time>` element. */
    date: string;
    /** Estimated reading time in minutes. */
    readingTime: number;
}

/** Header block shown at the top of each content page. */
export default function PageHeader({
    title,
    date,
    readingTime,
}: PageHeaderProps) {
    const [year, month, day] = date.split("-").map(Number);
    const formatted = new Date(year, month - 1, day).toLocaleDateString(
        "en-GB",
        { day: "numeric", month: "short", year: "numeric" },
    );

    return (
        <header className={styles.pageHeader}>
            <h1>{title}</h1>
            <p className={styles.pageMeta}>
                <time dateTime={date}>{formatted}</time>
                <span aria-hidden="true">·</span>
                <span>{readingTime} min read</span>
            </p>
        </header>
    );
}
