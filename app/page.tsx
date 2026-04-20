import type { Metadata } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import JsonLd from "./components/JsonLd";
import { AUTHOR_NAME, AUTHOR_URL, SITE_URL } from "@/lib/config";
import KSiteIcon from "./components/icons/KSiteIcon";

export const metadata: Metadata = {
    title: "CMALT Portfolio — Karl Horning",
    description:
        "Full-stack developer with commercial experience building production systems. CMALT is a peer-assessed professional credential completed alongside continued development work.",
    alternates: { canonical: SITE_URL },
    openGraph: {
        title: "CMALT Portfolio — Karl Horning",
        description:
            "Full-stack developer with commercial experience building production systems. CMALT is a peer-assessed professional credential completed alongside continued development work.",
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
            "Full-stack developer with commercial experience building production systems. CMALT is a peer-assessed professional credential completed alongside continued development work.",
        images: ["/og/preview-image.png"],
    },
};

const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Karl Horning — CMALT Portfolio",
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
            <div className="home-hero">
                <h1>Karl Horning</h1>
                <p className="home-subtitle">Full-Stack Developer</p>
                <p>
                    Full-stack developer with commercial experience building
                    production systems across Node.js, GraphQL, Python, and AWS.
                    CMALT is a peer-assessed professional credential requiring
                    three or more years of demonstrated experience. This
                    portfolio was completed alongside continued development
                    work.
                </p>
                <nav className="home-links" aria-label="External profiles">
                    <a
                        href="https://github.com/Karl-Horning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-link"
                    >
                        <FaGithub aria-hidden="true" />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/karl-horning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-link"
                    >
                        <FaLinkedin aria-hidden="true" />
                        LinkedIn
                    </a>
                    <a
                        href="https://www.karlhorning.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-link"
                    >
                        <KSiteIcon aria-hidden="true" />
                        karlhorning.dev
                    </a>
                </nav>
            </div>

            <section>
                <h2>CMALT Portfolio</h2>
                <p>
                    The portfolio is structured across six areas, from
                    operational practice and teaching to legislation, policy,
                    communication, and a specialist section on JavaScript
                    development.
                </p>
                <Link href="/contextual-statement" className="home-cta">
                    Begin with the Contextual Statement →
                </Link>
            </section>
        </>
    );
}
