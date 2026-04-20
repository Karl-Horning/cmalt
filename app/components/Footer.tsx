/**
 * @fileoverview Site footer component for the CMALT portfolio.
 */

import Link from "next/link";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { navStructure } from "@/lib/nav";

/** First year of the portfolio, used as the start of the copyright range. */
const START_YEAR = 2025;
const currentYear = new Date().getFullYear();
const copyrightRange =
    currentYear > START_YEAR ? `${START_YEAR}–${currentYear}` : String(START_YEAR);

/**
 * Renders the site footer with a full sitemap, external profile links, and a
 * copyright notice.
 *
 * The copyright year range starts from {@link START_YEAR} and extends to the
 * current year, collapsing to a single year when both are equal.
 *
 * @returns The rendered footer element.
 */
export default function Footer() {
    return (
        <footer className="site-footer" aria-label="Site footer">
            <nav className="footer-sitemap" aria-label="Site map">
                {navStructure.map((item) => {
                    if (item.type === "standalone") {
                        if (item.utility) return null;
                        return (
                            <div key={item.href} className="footer-group">
                                <Link href={item.href} className="footer-link">
                                    {item.label}
                                </Link>
                            </div>
                        );
                    }
                    return (
                        <div key={item.label} className="footer-group">
                            <p className="footer-group-label">{item.label}</p>
                            {item.items.map((subItem) => (
                                <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="footer-link"
                                >
                                    {subItem.label}
                                </Link>
                            ))}
                        </div>
                    );
                })}
            </nav>

            <div className="footer-bottom">
                <p className="footer-copyright">
                    &copy; {copyrightRange} Karl Horning
                </p>
                <div className="footer-social">
                    <a
                        href="https://github.com/Karl-Horning"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Karl Horning on GitHub"
                        className="footer-social-link"
                    >
                        <FaGithub aria-hidden="true" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/karl-horning"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Karl Horning on LinkedIn"
                        className="footer-social-link"
                    >
                        <FaLinkedin aria-hidden="true" />
                    </a>
                    <a
                        href="https://www.karlhorning.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Karl Horning's personal portfolio"
                        className="footer-social-link"
                    >
                        <FaGlobe aria-hidden="true" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
