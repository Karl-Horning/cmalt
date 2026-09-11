import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return (
        <div className={styles.notFoundBody}>
            <p className={styles.notFoundCode}>404</p>
            <h1 className={styles.notFoundHeading}>Page not found</h1>
            <p className={styles.notFoundDescription}>
                The page you&apos;re looking for doesn&apos;t exist or may have
                moved.
            </p>
            <Link href="/" className={styles.notFoundCta}>
                Take me home
                <FiArrowRight aria-hidden="true" />
            </Link>
        </div>
    );
}
