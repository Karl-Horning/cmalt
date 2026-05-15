/**
 * @fileoverview Floating scroll-to-top button that appears after scrolling past
 * a threshold and hides when the site footer enters the viewport.
 */

"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTop.module.css";

const SCROLL_THRESHOLD = 400;

/** Floating button that scrolls the page back to `#main-content`. */
export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const footer = document.getElementById("site-footer");
            const footerVisible =
                footer !== null &&
                footer.getBoundingClientRect().top < window.innerHeight;
            setVisible(window.scrollY > SCROLL_THRESHOLD && !footerVisible);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        document.getElementById("main-content")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`${styles.button}${visible ? ` ${styles.visible}` : ""}`}
            aria-label="Back to top"
        >
            <FaArrowUp aria-hidden="true" />
        </button>
    );
}
