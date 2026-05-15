"use client";

import Fuse from "fuse.js";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { searchIndex } from "@/lib/searchIndex";
import styles from "./SearchPage.module.css";

const fuse = new Fuse(searchIndex, {
    keys: [
        { name: "title", weight: 3 },
        { name: "keywords", weight: 2 },
        { name: "content", weight: 1 },
        { name: "description", weight: 1 },
    ],
    threshold: 0.3,
});

export default function SearchPage() {
    const [query, setQuery] = useState("");

    const results = useMemo(
        () =>
            query.length > 1
                ? fuse.search(query).map((r) => r.item)
                : [],
        [query]
    );

    return (
        <div className={styles.searchPage}>
            <div className={styles.searchInputWrapper}>
                <FaSearch className={styles.searchIcon} aria-hidden="true" />
                <input
                    type="search"
                    className={styles.searchInput}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search pages…"
                    aria-label="Search"
                    autoFocus
                />
            </div>

            {query.length > 1 && (
                <ul className={styles.searchResults} role="list">
                    {results.length > 0 ? (
                        results.map((item) => (
                            <li key={item.slug} className={styles.searchResult}>
                                <Link
                                    href={`/${item.slug}`}
                                    className={styles.searchResultLink}
                                >
                                    <span className={styles.searchResultTitle}>
                                        {item.title}
                                    </span>
                                    <span className={styles.searchResultDescription}>
                                        {item.description}
                                    </span>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li className={styles.searchNoResults}>No results found.</li>
                    )}
                </ul>
            )}
        </div>
    );
}
