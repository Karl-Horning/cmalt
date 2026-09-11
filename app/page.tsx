import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import JsonLd from "@/components/JsonLd/JsonLd";
import { AUTHOR_NAME, AUTHOR_URL, SITE_URL } from "@/lib/config";
import { cmaltCertificate, cmaltBadge } from "@/lib/constants";
import KSiteIcon from "@/components/icons/KSiteIcon/KSiteIcon";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "CMALT Portfolio — Karl Horning",
    description:
        "Full-stack developer with commercial experience building production systems. CMALT awarded May 2026 — a peer-assessed professional credential requiring three or more years of demonstrated experience.",
    alternates: { canonical: SITE_URL },
    openGraph: {
        title: "CMALT Portfolio — Karl Horning",
        description:
            "Full-stack developer with commercial experience building production systems. CMALT awarded May 2026 — a peer-assessed professional credential requiring three or more years of demonstrated experience.",
        url: SITE_URL,
        images: [
            {
                url: "/og/preview-image.png",
                alt: "Karl Horning CMALT Portfolio",
            },
        ],
        type: "website",
    },
    twitter: {
        title: "CMALT Portfolio — Karl Horning",
        description:
            "Full-stack developer with commercial experience building production systems. CMALT awarded May 2026 — a peer-assessed professional credential requiring three or more years of demonstrated experience.",
        images: ["/og/preview-image.png"],
    },
};

const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Karl Horning: CMALT Portfolio",
    description:
        "Full-stack developer with commercial experience building production systems. CMALT is a peer-assessed professional credential completed alongside continued development work.",
    url: SITE_URL,
    mainEntity: {
        "@type": "Person",
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
        sameAs: [
            AUTHOR_URL,
            "https://www.linkedin.com/in/karl-horning",
            "https://www.karlhorning.dev/",
        ],
    },
};

export default function Home() {
    return (
        <>
            <JsonLd data={homeJsonLd} />
            <div className={styles.homePage}>
                <div className={styles.homePhotoBg} aria-hidden="true">
                    <Image
                        src="/headers/home.avif"
                        alt=""
                        fill
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
                <div className={styles.homeHero}>
                    <p className={styles.homeEyebrow}>Full-Stack Developer</p>
                    <h1 className={styles.homeName}>Karl Horning</h1>
                    <p className={styles.homeDescription}>
                        CMALT-accredited learning technologist and full-stack
                        developer.
                    </p>
                    <div className={styles.homeCtaRow}>
                        <Link
                            href="/contextual-statement"
                            className={styles.homeCta}
                        >
                            View the Portfolio
                            <FiArrowRight aria-hidden="true" />
                        </Link>
                        <a
                            href={cmaltCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.homeGhost}
                        >
                            <Image
                                src={cmaltBadge}
                                alt=""
                                width={20}
                                height={20}
                                className={styles.homeGhostBadge}
                            />
                            CMALT Certified
                        </a>
                    </div>
                    <nav
                        className={styles.homeIconLinks}
                        aria-label="External profiles"
                    >
                        <a
                            href="https://github.com/Karl-Horning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.homeIconLink}
                            aria-label="GitHub"
                        >
                            <FaGithub aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/karl-horning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.homeIconLink}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.karlhorning.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.homeIconLink}
                            aria-label="karlhorning.dev"
                        >
                            <KSiteIcon aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </>
    );
}
