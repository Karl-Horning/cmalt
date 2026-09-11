import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Accessibility Statement",
    description:
        "How this CMALT portfolio approaches accessibility, including testing methods, known limitations, and how to report a problem.",
};

export default function page() {
    return (
        <>
            <h1>Accessibility Statement</h1>

            <section id="scope">
                <p>
                    This statement covers cmalt.karlhorning.dev, my CMALT
                    portfolio. I want it to work for everyone, including people
                    using a screen reader, keyboard-only navigation, or a
                    magnifier.
                </p>
            </section>

            <section id="standard">
                <h2>Standard</h2>
                <p>
                    This site aims to meet WCAG 2.1 Level AA. Most text meets
                    the stricter Level AAA for colour contrast, in both light
                    and dark mode.
                </p>
            </section>

            <section id="limitations">
                <h2>Known limitations</h2>
                <p>
                    A few PDF documents linked from the Evidence sections may
                    not be fully accessible. These are supporting evidence for
                    CMALT assessment, not the main content of the page.
                </p>
                <p>
                    Video evidence includes subtitles. I created and
                    synchronised them by hand.
                </p>
            </section>

            <section id="testing">
                <h2>How this site is tested</h2>
                <p>I test this site two ways:</p>
                <ul>
                    <li>
                        Automated testing with axe-core, covering every page,
                        on every change.
                    </li>
                    <li>Manual testing, including keyboard navigation.</li>
                </ul>
            </section>

            <section id="feedback">
                <h2>Reporting a problem</h2>
                <p>
                    If you find something on this site that&apos;s hard to
                    use, get in touch:
                </p>
                <ul>
                    <li>
                        <a
                            href="https://www.karlhorning.dev/contact"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contact form
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/karl-horning"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
                <p>Last reviewed: 11 September 2026.</p>
            </section>
        </>
    );
}
