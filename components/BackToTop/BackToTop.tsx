/** @fileoverview Floating scroll-to-top button, shown past a scroll threshold. */

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
            setVisible(window.scrollY > SCROLL_THRESHOLD);
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
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
        >
            <FaArrowUp aria-hidden="true" />
        </button>
    );
}
