/** @fileoverview Site footer: sitemap nav, copyright notice, social links. */

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import KSiteIcon from "@/components/icons/KSiteIcon/KSiteIcon";
import { cmaltCertificate } from "@/lib/constants";
import { navColumns } from "@/lib/nav";
import styles from "./Footer.module.css";

const START_YEAR = 2025;
const currentYear = new Date().getFullYear();
const copyrightRange =
    currentYear > START_YEAR
        ? `${START_YEAR}–${currentYear}`
        : String(START_YEAR);

export default function Footer() {
    return (
        <footer id="site-footer" className={styles.siteFooter} aria-label="Site footer">
            <div className={styles.footerInner}>
                <nav className={styles.footerSitemap} aria-label="Site map">
                    {navColumns.map((column, columnIndex) => (
                        <div key={columnIndex} className={styles.footerColumn}>
                            {column.map((item) => (
                                <div
                                    key={item.label}
                                    className={styles.footerGroup}
                                >
                                    <p className={styles.footerGroupLabel}>
                                        {item.label}
                                    </p>
                                    {item.items.map((subItem) => (
                                        <Link
                                            key={subItem.href}
                                            href={subItem.href}
                                            className={styles.footerLink}
                                        >
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </nav>

                <div className={styles.footerBottom}>
                    <div className={styles.footerLegal}>
                        <p className={styles.footerCopyright}>
                            &copy; {copyrightRange} Karl Horning
                        </p>
                        <nav
                            className={styles.footerLegalLinks}
                            aria-label="Legal and credentials"
                        >
                            <Link
                                href="/accessibility-statement"
                                className={styles.footerLegalLink}
                            >
                                Accessibility Statement
                            </Link>
                            <a
                                href={cmaltCertificate}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.footerLegalLink}
                            >
                                CMALT Certification
                            </a>
                        </nav>
                    </div>
                    <div className={styles.footerSocial}>
                        <a
                            href="https://github.com/Karl-Horning"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Karl Horning on GitHub"
                            className={styles.footerSocialLink}
                        >
                            <FaGithub aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/karl-horning"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Karl Horning on LinkedIn"
                            className={styles.footerSocialLink}
                        >
                            <FaLinkedin aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.karlhorning.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Karl Horning's personal portfolio"
                            className={styles.footerSocialLink}
                        >
                            <KSiteIcon aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
