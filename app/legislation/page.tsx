import { meta } from "./meta";
import PageHeader from "../components/PageHeader";

export default function page() {
    return (
        <main>
            <PageHeader title={meta.title} date={meta.date} readingTime={meta.readingTime} />
            <section id="description">
                <h2>Description</h2>

                <h3>International Context</h3>

                <p>
                    Between 2014 and 2024, I worked as a freelance English
                    teacher while living in Portugal. During this period, I
                    offered private lessons to adult learners, primarily across
                    Portugal, Spain, Italy, France, and Germany. Because I was
                    based outside the UK and most of my students were located
                    within the EU, I focused more closely on European
                    legislation and guidelines.
                </p>

                <p>
                    This experience significantly shaped my awareness of data
                    protection requirements under the{" "}
                    <a
                        href="https://gdpr.eu/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        General Data Protection Regulation (GDPR)
                    </a>
                    , which applies across the EU and was directly relevant to
                    the handling of learner data. It also made me more attuned
                    to digital accessibility requirements at the European level,
                    especially EN 301 549. I ensured that materials provided to
                    learners complied with accessibility expectations across
                    borders, particularly regarding video captions, document
                    design, and platform usability.
                </p>

                <p>
                    These early experiences informed my later work in the UK
                    context, where I now combine an understanding of European
                    standards with UK-specific guidance such as the{" "}
                    <a
                        href="https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Public Sector Bodies (Websites and Mobile Applications)
                        Accessibility Regulations 2018
                    </a>
                    . My international teaching practice laid the foundation for
                    my ongoing commitment to accessibility and inclusion.
                </p>

                <p>
                    Accessibility and inclusivity are central to my practice as
                    a learning technologist. I work in line with EN 301 549:{" "}
                    <a
                        href="https://accessibility-manual.dwp.gov.uk/accessibility-law/en301549-accessibility-requirements-for-ict-products-and-services"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Accessibility requirements for ICT products and services
                    </a>
                    , which incorporates the{" "}
                    <a
                        href="https://www.w3.org/TR/WCAG21/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Web Content Accessibility Guidelines (WCAG) 2.1
                    </a>{" "}
                    in Clause 9 and covers non-web documents in Clause 10.
                </p>

                <p>
                    In support of these requirements, I have created a document
                    titled{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Web Accessibility Resources and Tools: Guidelines,
                        Checklists, and Testing Solutions
                    </a>
                    , which compiles resources for evaluating and creating
                    accessible web content. I also regularly use the
                    Accessibility Assistant when authoring Microsoft Word
                    documents, ensuring appropriate heading structures,
                    alternative text, and contrast levels.
                </p>

                <p>
                    To improve my understanding of learner needs, I completed{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Dyslexia Awareness: In partnership with Made By Dyslexia
                    </a>{" "}
                    when it launched in 2020 and{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        again in its extended 7-hour format in 2025
                    </a>
                    .
                </p>

                <h3>Subtitles and Video Accessibility</h3>

                <p>
                    When producing video content, I comply with WCAG 2.1{" "}
                    <a
                        href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Success Criterion 1.2.2 Captions (Prerecorded)
                    </a>
                    . I create{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        SRT subtitle files
                    </a>
                    , which are compatible with platforms such as{" "}
                    <a
                        href="https://support.google.com/youtube/answer/2734698#zippy=%2Cbasic-file-formats%2Csubrip-srt-example"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        YouTube
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://help.vimeo.com/hc/en-us/articles/21956884955537-How-do-I-add-captions-or-subtitles-to-my-video"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vimeo
                    </a>
                    . I time these manually using the{" "}
                    <a
                        href="https://marketplace.visualstudio.com/items?itemName=pepri.subtitles-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Subtitles Editor extension
                    </a>{" "}
                    in Visual Studio Code, basing them on the script and audio.
                </p>

                <p>
                    I follow the{" "}
                    <a
                        href="https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/#Subtitles-should-contain-single-sentences"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BBC&apos;s accessibility guidelines
                    </a>
                    , ensuring that each subtitle contains a single, complete
                    sentence. For offline use, I embed subtitle tracks into MP4
                    files using{" "}
                    <a
                        href="https://subler.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Subler
                    </a>
                    .
                </p>

                <h3>Accessible Document Design</h3>

                <p>
                    I also apply accessibility standards to document creation.
                    In preparing learner-facing materials such as the{" "}
                    <em>Microsoft Teams FAQ</em> (2020), I:
                </p>
                <ul>
                    <li>Use a clear heading hierarchy</li>
                    <li>Apply sans serif fonts for readability</li>
                    <li>
                        Create tables of contents in longer documents for easier
                        navigation
                    </li>
                    <li>Ensure compatibility with screen readers</li>
                </ul>

                <p>
                    These practices align with WCAG criteria such as{" "}
                    <a
                        href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Info and Relationships
                    </a>
                    ,{" "}
                    <a
                        href="https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Meaningful Sequence
                    </a>
                    , and{" "}
                    <a
                        href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Use of Colour
                    </a>
                    .
                </p>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <p>
                    Manually creating accurate subtitle files was a rewarding
                    yet time-consuming process. I learnt that subtitle timing
                    must align closely with the speaker&apos;s voice and
                    on-screen events to avoid distraction. Early attempts
                    involved considerable trial and error, but the final
                    products met WCAG 2.1 standards and offered an inclusive
                    experience for all users.
                </p>

                <p>
                    The impact on learners, particularly non-native English
                    speakers, was notable. For example, in the absence of
                    visible speakers (no lip-reading cues), subtitles enabled
                    learners to better follow digital learning platform
                    demonstrations.
                </p>

                <p>
                    Over time, I came to understand that providing both
                    subtitles and a full transcript offers a more inclusive
                    experience, catering to diverse learner preferences and
                    needs. Transcripts enable learners to skim or search content
                    quickly and are particularly helpful for those who prefer or
                    require a text-based alternative.
                </p>

                <p>
                    In terms of document accessibility, I saw improvements in
                    learner engagement and fewer questions about where to find
                    key information. Structuring documents properly made them
                    more navigable, especially for screen reader users. My
                    evolving understanding of EN 301 549 and WCAG 2.1 helped me
                    go beyond compliance and take a proactive role in inclusive
                    content design.
                </p>

                <p>
                    Looking back, I recognise that these practices are not only
                    about meeting regulatory standards but also about ethical
                    commitments. Respecting learner privacy under GDPR reflects
                    a wider duty of care in handling sensitive information.
                    Similarly, prioritising accessibility goes beyond compliance
                    with WCAG or EN 301 549: it is about ensuring learners&apos;
                    rights to participate fully and equitably. By providing
                    subtitles, transcripts, and accessible documents, I aim to
                    reduce barriers and support learner autonomy, acknowledging
                    the moral responsibility I have as an educator and
                    technologist, both in international and UK contexts, to
                    create inclusive and respectful learning environments.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <p>This section demonstrates how I have:</p>

                <ul>
                    <li>
                        Aligned my practice with EN 301 549 and WCAG 2.1 to
                        improve accessibility in digital learning content
                    </li>
                    <li>
                        Created and manually timed subtitle files in SRT format
                        using Visual Studio Code and followed BBC subtitle
                        standards
                    </li>
                    <li>
                        Embedded subtitles into MP4 files for offline use and
                        ensured they followed single-sentence guidance
                    </li>
                    <li>
                        Designed Word and PDF documents with screen reader
                        compatibility, clear heading structures, and
                        navigational aids
                    </li>
                    <li>
                        Completed dyslexia awareness training to inform more
                        inclusive practices
                    </li>
                    <li>
                        Reflected on the value of transcripts and implemented
                        continuous improvements based on learner needs
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>

                <h3>Subtitles & Video Accessibility</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            SRT subtitle file (Joining a Microsoft Teams meeting
                            from the Session Details Page, 2020) (Subtitle File)
                        </a>{" "}
                        <em>
                            Manually authored captions meeting WCAG 2.1 SC
                            1.2.2; demonstrates accurate timing and readable
                            phrasing for inclusive video delivery.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Embedded subtitles using Subler (Screenshot)
                        </a>{" "}
                        <em>
                            Shows subtitles multiplexed into MP4 for offline
                            access; aligns with BBC guidance on single-sentence
                            captions.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            SRT subtitle file in Visual Studio Code (Screenshot)
                        </a>{" "}
                        <em>
                            Workflow view of precise caption timing with VS Code
                            + Subtitles Editor extension.
                        </em>
                    </li>
                </ul>

                <h3>Accessible Document Design</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Document with accessible layout and navigation
                            (Microsoft Teams FAQ, 2020) (Screenshot)
                        </a>{" "}
                        <em>
                            Learner-facing example using clear heading
                            hierarchy, meaningful sequence, and
                            screen-reader-friendly structure.
                        </em>
                    </li>
                </ul>

                <h3>Accessibility Frameworks & CPD</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Web Accessibility Resources and Tools: Guidelines,
                            Checklists, and Testing Solutions (PDF)
                        </a>{" "}
                        <em>
                            Curated framework used in audits and improvements;
                            operationalises WCAG 2.1 and EN 301 549 within
                            day-to-day practice.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Dyslexia Awareness: In partnership with Made By
                            Dyslexia — proof of completed modules (2025) (Badge)
                        </a>{" "}
                        <em>
                            Recent CPD focused on neurodivergent learner needs;
                            informs captioning choices, document design, and
                            inclusive communication.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Dyslexia Awareness: In partnership with Made By
                            Dyslexia (2020) (Certificate)
                        </a>{" "}
                        <em>
                            Foundational certification evidencing long-term
                            commitment to accessible practice.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>

                <ul>
                    <li>
                        BBC. <em>Subtitle Guidelines</em> (Version 1.2.3, June
                        2024). Available at:{" "}
                        <a
                            href="https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/
                        </a>
                    </li>
                    <li>
                        BBC Academy. <em>How do I create subtitles?</em>{" "}
                        Available at:{" "}
                        <a
                            href="https://www.bbc.co.uk/academy-guides/how-do-i-create-subtitles"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.bbc.co.uk/academy-guides/how-do-i-create-subtitles
                        </a>
                    </li>
                    <li>
                        European Union.{" "}
                        <em>
                            EN 301 549: Accessibility requirements for ICT
                            products and services
                        </em>{" "}
                        (29 June 2021). Available at:{" "}
                        <a
                            href="https://accessible-eu-centre.ec.europa.eu/content-corner/digital-library/en-3015492021-accessibility-requirements-ict-products-and-services_en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://accessible-eu-centre.ec.europa.eu/content-corner/digital-library/en-3015492021-accessibility-requirements-ict-products-and-services_en
                        </a>
                    </li>
                    <li>
                        Vimeo.{" "}
                        <em>How do I add captions or subtitles to my video?</em>{" "}
                        Available at:{" "}
                        <a
                            href="https://help.vimeo.com/hc/en-us/articles/21956884955537-How-do-I-add-captions-or-subtitles-to-my-video"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://help.vimeo.com/hc/en-us/articles/21956884955537-How-do-I-add-captions-or-subtitles-to-my-video
                        </a>
                    </li>
                    <li>
                        W3C. <em>Captions (Prerecorded)</em> - WCAG 2.1
                        Understanding Success Criterion 1.2.2. Available at:{" "}
                        <a
                            href="https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html
                        </a>
                    </li>
                    <li>
                        W3C. <em>Info and Relationships</em> - WCAG 2.1.
                        Available at:{" "}
                        <a
                            href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html
                        </a>
                    </li>
                    <li>
                        W3C. <em>Meaningful Sequence</em> - WCAG 2.1. Available
                        at:{" "}
                        <a
                            href="https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html
                        </a>
                    </li>
                    <li>
                        W3C. <em>Non-text Content</em> - WCAG 2.1. Available at:{" "}
                        <a
                            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
                        </a>
                    </li>
                    <li>
                        W3C.{" "}
                        <em>Success Criterion 1.2.2 Captions (Prerecorded)</em>{" "}
                        - WCAG 2.1 Reference. Available at:{" "}
                        <a
                            href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded
                        </a>
                    </li>
                    <li>
                        W3C. <em>Use of Colour</em> - WCAG 2.1. Available at:{" "}
                        <a
                            href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html
                        </a>
                    </li>
                    <li>
                        W3C.{" "}
                        <em>
                            Web Content Accessibility Guidelines (WCAG) 2.1.
                        </em>{" "}
                        Available at:{" "}
                        <a
                            href="https://www.w3.org/TR/WCAG21/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.w3.org/TR/WCAG21/
                        </a>
                    </li>
                    <li>
                        YouTube.{" "}
                        <em>Supported subtitle and closed caption files</em>.
                        Available at:{" "}
                        <a
                            href="https://support.google.com/youtube/answer/2734698#zippy=%2Cbasic-file-formats%2Csubrip-srt-example"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://support.google.com/youtube/answer/2734698#zippy=%2Cbasic-file-formats%2Csubrip-srt-example
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    );
}
