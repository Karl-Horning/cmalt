import type { Metadata } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import CredentialChip from "@/components/CredentialChip/CredentialChip";
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
            <div className={styles.homeHero}>
                <p className={styles.homeEyebrow}>Full-Stack Developer</p>
                <h1>Karl Horning</h1>
                <p className={styles.homeDescription}>
                    Full-stack developer with commercial experience building
                    production systems across Node.js, GraphQL, Python, and AWS.
                    CMALT is a peer-assessed professional credential requiring
                    three or more years of demonstrated experience, awarded May
                    2026.
                </p>
                <CredentialChip
                    href={cmaltCertificate}
                    badgeSrc={cmaltBadge}
                    title="CMALT Certified"
                    subtitle="Association for Learning Technology"
                />
                <nav className={styles.homeLinks} aria-label="External profiles">
                    <a
                        href="https://github.com/Karl-Horning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.homeLink}
                    >
                        <FaGithub aria-hidden="true" />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/karl-horning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.homeLink}
                    >
                        <FaLinkedin aria-hidden="true" />
                        LinkedIn
                    </a>
                    <a
                        href="https://www.karlhorning.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.homeLink}
                    >
                        <KSiteIcon aria-hidden="true" />
                        karlhorning.dev
                    </a>
                </nav>
            </div>

            <section id="homeIntro" className={styles.homeIntro}>
                <h2>CMALT Portfolio</h2>
                <p>
                    The portfolio is structured across six areas, from
                    operational practice and teaching to legislation, policy,
                    communication, and a specialist section on JavaScript
                    development.
                </p>
                <div className={styles.homeCtaWrap}>
                    <Link href="/contextual-statement" className={styles.homeCta}>
                        Begin with the Contextual Statement
                        <FiArrowRight aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </>
    );
}
