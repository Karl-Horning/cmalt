/**
 * @fileoverview Page header component displaying title, date, and reading time.
 */

/**
 * Props for the PageHeader component.
 */
interface PageHeaderProps {
    /** The page title, rendered as an h1 element. */
    title: string;
    /** ISO 8601 date string (YYYY-MM-DD) of the last content update. */
    date: string;
    /** Estimated reading time in minutes. */
    readingTime: number;
}

/**
 * Renders a page header containing the title, last-updated date, and
 * estimated reading time.
 *
 * The date is parsed by splitting its components rather than passing it
 * directly to the Date constructor, which interprets YYYY-MM-DD strings as
 * UTC and can display the previous day in negative-offset timezones.
 *
 * @param props - Component props.
 * @param props.title - The page title.
 * @param props.date - ISO 8601 date string of the last content update.
 * @param props.readingTime - Estimated reading time in minutes.
 * @returns The rendered page header element.
 */
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
        <header className="page-header">
            <h1>{title}</h1>
            <p className="page-meta">
                <time dateTime={date}>{formatted}</time>
                <span aria-hidden="true">·</span>
                <span>{readingTime} min read</span>
            </p>
        </header>
    );
}
