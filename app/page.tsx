import Link from "next/link";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <div className="home-hero">
                <h1>Karl Horning</h1>
                <p className="home-subtitle">Full-Stack Developer</p>
                <p>
                    Full-stack developer with commercial experience building
                    production systems across Node.js, GraphQL, Python, and
                    AWS. CMALT is a peer-assessed professional credential
                    requiring three or more years of demonstrated experience.
                    This portfolio was completed alongside continued development
                    work.
                </p>
                <nav
                    className="home-links"
                    aria-label="External profiles"
                >
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
                        <FaGlobe aria-hidden="true" />
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
