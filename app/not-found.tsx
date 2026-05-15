import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return (
        <div className={styles.notFoundBody}>
            <h1>Page not found</h1>
            <p>
                The page you&apos;re looking for doesn&apos;t exist or may have
                moved.
            </p>
            <p>
                <Link href="/">Return to the portfolio home</Link>, or use the
                navigation to find a section.
            </p>
        </div>
    );
}
