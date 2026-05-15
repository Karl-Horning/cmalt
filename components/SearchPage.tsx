/**
 * @fileoverview Client-side search component powered by Fuse.js.
 */

"use client";

import Fuse from "fuse.js";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { searchIndex } from "@/lib/searchIndex";

/**
 * Fuse instance initialised once at module level to avoid re-creation on every
 * render. Searches across page titles (higher weight) and descriptions.
 */
const fuse = new Fuse(searchIndex, {
    keys: [
        { name: "title", weight: 3 },
        { name: "keywords", weight: 2 },
        { name: "content", weight: 1 },
        { name: "description", weight: 1 },
    ],
    threshold: 0.3,
});

/**
 * Renders a search input and live results list.
 *
 * Results are derived from a fuzzy search of the site's page index using
 * Fuse.js. No network requests are made — the index is bundled at build time.
 *
 * @returns The rendered search page content.
 */
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
        <div className="search-page">
            <div className="search-input-wrapper">
                <FaSearch className="search-icon" aria-hidden="true" />
                <input
                    type="search"
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search pages…"
                    aria-label="Search"
                    autoFocus
                />
            </div>

            {query.length > 1 && (
                <ul className="search-results" role="list">
                    {results.length > 0 ? (
                        results.map((item) => (
                            <li key={item.slug} className="search-result">
                                <Link
                                    href={`/${item.slug}`}
                                    className="search-result-link"
                                >
                                    <span className="search-result-title">
                                        {item.title}
                                    </span>
                                    <span className="search-result-description">
                                        {item.description}
                                    </span>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li className="search-no-results">No results found.</li>
                    )}
                </ul>
            )}
        </div>
    );
}
