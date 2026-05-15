import styles from "./PageHeader.module.css";

interface PageHeaderProps {
    title: string;
    date: string;
    readingTime: number;
}

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
