import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import KSiteIcon from "@/components/icons/KSiteIcon/KSiteIcon";
import { navStructure } from "@/lib/nav";
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
            <nav className={styles.footerSitemap} aria-label="Site map">
                {navStructure.map((item) => {
                    if (item.type === "standalone") {
                        if (item.utility) return null;
                        return (
                            <div key={item.href} className="footer-group">
                                <Link href={item.href} className={styles.footerLink}>
                                    {item.label}
                                </Link>
                            </div>
                        );
                    }
                    return (
                        <div key={item.label} className="footer-group">
                            <p className={styles.footerGroupLabel}>{item.label}</p>
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
                    );
                })}
            </nav>

            <div className={styles.footerBottom}>
                <p className={styles.footerCopyright}>
                    &copy; {copyrightRange} Karl Horning
                </p>
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
        </footer>
    );
}
