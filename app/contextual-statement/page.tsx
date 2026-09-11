import JsonLd from "@/components/JsonLd/JsonLd";
import { generatePageMetadata, generatePageJsonLd } from "@/lib/siteMetadata";
import { meta } from "./meta";
import PageHeader from "@/components/PageHeader/PageHeader";

export const metadata = generatePageMetadata(meta);

export default function page() {
    return (
        <>
            <JsonLd data={generatePageJsonLd(meta)} />
            <PageHeader
                title={meta.title}
                date={meta.date}
                lastUpdated={meta.lastUpdated}
                readingTime={meta.readingTime}
                image={meta.headerImage}
            />
            <section id="description">
                <h2>My Journey in Learning Technology</h2>

                <p>
                    I have over a decade of experience in blended and digital
                    learning. My background combines classroom teaching with
                    technical development.
                </p>

                <p>
                    As a CELTA-qualified English teacher, I&apos;ve delivered
                    over 10,000 lessons with consistently high ratings. I also
                    used my{" "}
                    <cite>
                        Level 4 Preparing to Teach in the Lifelong Learning
                        Sector
                    </cite>{" "}
                    (PTLLS) to design and deliver training in academic English
                    and study skills, in further and higher education.
                </p>

                <p>
                    My move from teaching into learning technology started with
                    programming. As a university administrator, I automated
                    tasks in Visual Basic for Applications (VBA), and while
                    teaching in Portugal I deepened this through self-study on
                    platforms such as Khan Academy and freeCodeCamp.
                </p>

                <p>
                    I applied what I learned to improve workflows and build
                    better digital resources. As my responsibilities grew to
                    include APIs and automation, this led to a full-time
                    development role and confirmed my path into educational
                    technology.
                </p>

                <p>
                    I&apos;ve led the development of scalable backend systems
                    and optimised GraphQL APIs for a custom Learning Management
                    System (LMS) supporting over 700,000 registered learners.
                    Having worked on both sides — the classroom and the codebase
                    — lets me design solutions grounded in pedagogical
                    principles and real learner needs.
                </p>

                <p>
                    Throughout my career, digital tools have shaped how I teach
                    and support learning. As a Virtual Onboarder, I trained new
                    teachers on a custom LMS over Microsoft Teams, using
                    tailored sessions and video training. I also created bespoke
                    business English courses for professionals, adapting content
                    to their needs and industry.
                </p>

                <p>
                    My experience using Moodle and SharePoint as a university
                    administrator shaped the design of an LMS built for
                    international use. Drawing on my teaching background, I
                    refined features such as automated flashcards and
                    pronunciation feedback to support personalisation and
                    engagement.
                </p>

                <p>
                    Accessibility is a key focus of my work. I&apos;ve created
                    visual documentation, explainer videos, and GIFs to support
                    non-native speakers and neurodiverse learners, designed for
                    clarity and retention.
                </p>

                <p>
                    In a prior role as a Transformation Project Manager, I
                    automated financial workflows using Python and Pandas, and
                    led Excel training to build data literacy.
                </p>

                <p>
                    My professional development includes training in user story
                    writing, manual testing, Confluence, Jira, and several
                    programming languages.
                </p>

                <p>
                    Until May 2026, I worked as a Learning Technologist within
                    Imperial College London&apos;s ICT division. I was recruited
                    for this combination of technical expertise and teaching
                    experience, and my work bridged pedagogy and technology to
                    support Imperial&apos;s strategic aim of inclusive digital
                    education.
                </p>

                <p>
                    I collaborated with faculty-based learning technologists
                    across:
                </p>

                <ul>
                    <li>The Faculty of Natural Sciences</li>
                    <li>The Faculty of Engineering</li>
                    <li>The Business School</li>
                    <li>The Faculty of Medicine</li>
                    <li>The Interdisciplinary EdTech Lab</li>
                </ul>

                <p>
                    This kept our solutions coherent and responsive to the needs
                    of staff and students across faculties.
                </p>

                <p>In practice, this involved:</p>

                <ul>
                    <li>
                        Co-designing learning experiences with academics,
                        administrators, and developers
                    </li>
                    <li>Applying technical skills to LMS migration projects</li>
                    <li>Writing user stories and conducting manual testing</li>
                    <li>Gathering user feedback to improve digital learning</li>
                    <li>
                        Advising on effective technology-enhanced learning
                        practices
                    </li>
                    <li>
                        Translating project requirements into technical
                        specifications
                    </li>
                    <li>
                        Recommending integrated solutions, with accessibility
                        built in from the start
                    </li>
                </ul>

                <p>
                    Grounded in classroom teaching and strengthened by technical
                    development, I can act as both a pedagogical partner and a
                    technical specialist. At Imperial, I contributed to
                    communities of practice, shared what I learned with
                    colleagues, and helped keep standards consistent across the
                    institution&apos;s digital education work.
                </p>

                <p>
                    In May 2026, I moved to King&apos;s College London as a Web
                    Developer (Digital Education). I now lead development of
                    King&apos;s Moodle theme, with a particular focus on
                    accessibility and a number of broader architectural
                    decisions.
                </p>

                <p>
                    I am submitting this portfolio for CMALT accreditation to
                    formally recognise my contribution to learning technology.
                    It marks a key step in my professional development, and
                    reflects my commitment to innovation and inclusion in
                    education.
                </p>
            </section>
        </>
    );
}
