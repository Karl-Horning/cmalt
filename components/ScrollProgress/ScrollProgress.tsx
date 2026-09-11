/** @fileoverview Slim bar tracking scroll position through the page. */

"use client";

import { useEffect, useRef } from "react";
import styles from "./ScrollProgress.module.css";

/** Fixed progress bar reflecting scroll position through the page. */
export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function updateProgress() {
            const scrollable =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress =
                scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

            if (barRef.current) {
                barRef.current.style.width = `${Math.min(100, Math.max(0, progress))}%`;
            }
        }

        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div className={styles.track} aria-hidden="true">
            <div ref={barRef} className={styles.bar} />
        </div>
    );
}
