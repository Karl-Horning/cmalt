import JsonLd from "../components/JsonLd";
import { generatePageMetadata, generatePageJsonLd } from "@/lib/siteMetadata";
import { meta } from "./meta";
import PageHeader from "../components/PageHeader";

export const metadata = generatePageMetadata(meta);
import Link from "next/link";

export default function page() {
    return (
        <>
            <JsonLd data={generatePageJsonLd(meta)} />
            <PageHeader title={meta.title} date={meta.date} readingTime={meta.readingTime} />
            <section>
                <h2>Future Directions in Learning Technology</h2>

                <p>
                    Looking ahead, I intend to further integrate the learning
                    technology and development aspects of my practice, with a
                    particular focus on accessibility, open standards, and
                    learner agency. My experience supporting the selection and
                    deployment of learning technologies at the institutional
                    level has reaffirmed my commitment to designing tools and
                    systems that are inclusive, evidence-informed, and sensitive
                    to diverse learning contexts.
                </p>

                <p>
                    Over the next few years, I plan to deepen my engagement with
                    accessibility standards such as WCAG 2.2 and EN 301 549, and
                    to work more actively with user-centred design and
                    co-creation practices, ensuring that learners and educators
                    are directly involved in shaping the tools they use.
                </p>

                <p>
                    I&apos;m increasingly drawn to the intersection of pedagogy
                    and code, especially in projects involving LMS platforms,
                    open educational resources, and interactive front ends built
                    with technologies like React, GraphQL, and PostgreSQL. I
                    hope to contribute to open-source tools or standards in this
                    space, whether through code contributions or by developing
                    guidance to support collaboration between educators and
                    developers.
                </p>

                <p>
                    <Link
                        href="https://www.karlhorning.dev/blog"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        I also plan to continue writing about what I learn in
                        coding and accessibility through my blog
                    </Link>
                    , using it as a space to share practical examples,
                    reflective insights, and reusable solutions for the wider
                    learning technology community. As my technical work evolves,
                    I will keep refining my use of TypeScript — a language I
                    increasingly value for its ability to catch errors early and
                    promote clarity through strong typing. I also intend to
                    expand my use of automated accessibility testing frameworks
                    such as <code>@axe-core/playwright</code>, which I currently
                    use on{" "}
                    <Link
                        href="https://karlhorning.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        karlhorning.dev
                    </Link>{" "}
                    to identify and resolve accessibility issues during
                    development. This experience has shown how valuable
                    automated testing can be in catching issues early and
                    embedding accessibility as a core part of the development
                    process rather than an afterthought, and I plan to continue
                    applying it in future projects alongside manual testing.
                </p>

                <p>
                    In future projects, I aim to deepen my data-informed
                    approach to accessibility evaluation, combining automated
                    testing with analytics on issue trends and resolution rates
                    to establish evidence-based accessibility benchmarks. I also
                    plan to deepen my commitment to consistent documentation
                    standards — covering READMEs, CSS, comments, and Git
                    commits — by aligning more closely with established guides
                    such as those published by Google. Building on this, I
                    intend to create accessible, maintainable coding examples
                    and guidance that support inclusive engineering practices.
                    This will allow me to unite my background as an educator
                    with my technical expertise, helping others apply clarity,
                    accessibility, and sustainability principles in their own
                    development work.
                </p>

                <p>
                    Alongside accessibility, I am increasingly interested in
                    ethical and sustainable design in educational technology —
                    exploring how performance optimisation, energy efficiency,
                    and inclusive development intersect in building equitable,
                    responsible systems for learning.
                </p>

                <p>
                    Continuing professional development will remain a priority.
                    I plan to undertake further formal training in digital
                    accessibility and ethics in AI, and to stay actively engaged
                    with ALT and other professional networks that foster the
                    sharing of inclusive, evidence-based practice. I am also
                    considering CMALT Lead or Senior CMALT in the future,
                    particularly if I move into a role with strategic oversight
                    of learning technologies or staff development.
                </p>

                <p>
                    Finally, I aim to mentor others entering the learning
                    technology and development professions, particularly those
                    from underrepresented or non-traditional backgrounds. Having
                    benefited from strong peer networks myself, I believe it is
                    important to give back by encouraging reflective,
                    learner-centred practice and by supporting others in
                    developing their own inclusive, sustainable approaches to
                    technology.
                </p>
            </section>
        </>
    );
}
