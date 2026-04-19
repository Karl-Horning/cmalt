import { meta } from "./meta";
import PageHeader from "../components/PageHeader";
import {
    blackboardPostmanCollectionRepo,
    graphQlCertificate,
    ictAnalystTestScriptScreenshot,
    ictSeniorAnalystTestScriptScreenshot,
    learnlightPlatformCaseStudyLink,
    oxfordLearnersDictionariesApiRepo,
    traineeListScreenshot,
} from "@/lib/constants";
import Image from "next/image";

export default function page() {
    return (
        <>
            <PageHeader
                title={meta.title}
                date={meta.date}
                readingTime={meta.readingTime}
            />
            <section id="description">
                <h2>Description</h2>

                <p>
                    In my career as both a developer and a learning
                    technologist, I have worked with a wide range of learning
                    technologies, including VLE platforms, accessibility tools,
                    and assessment environments. I have contributed to the
                    evaluation and optimisation of Learning Management Systems
                    (LMS) such as Blackboard Ultra, Canvas, Brightspace, and
                    Moodle by customising workflows, testing features, and
                    supporting academic staff in their use.
                </p>

                <figure>
                    <Image
                        src={traineeListScreenshot}
                        alt="Screenshot of the Trainee List Electron desktop app on macOS. The interface has a blue background with a white panel containing a yellow 'Generate Trainee List' header, a blue 'Generate Report' button, and a result message reading 'Fetched 20 trainees in 20 seconds!'."
                        width={1080}
                        height={608}
                        priority
                    />
                    <figcaption>
                        The Trainee List Electron app after generating a report,
                        confirming that 20 trainee records were fetched in 20
                        seconds.
                    </figcaption>
                </figure>

                <p>
                    I&apos;ve also developed bespoke tools using JavaScript,
                    Python, and Excel — from building GraphQL APIs within a
                    commercial LMS to creating desktop applications with
                    Electron for staff onboarding and training. These tools have
                    improved platform efficiency, enhanced staff engagement, and
                    often reduced technical barriers to adoption.
                </p>

                <p>
                    Key tools and technologies I&apos;ve used in learning
                    contexts include:
                </p>

                <ul>
                    <li>
                        <strong>VLEs</strong>: Blackboard Ultra, Brightspace,
                        Canvas, Moodle
                    </li>
                    <li>
                        <strong>Assessment & automation</strong>: Excel VBA,
                        Python (Pandas), Postman (API testing), Mocha (backend
                        test automation)
                    </li>
                    <li>
                        <strong>User-focused development</strong>: Electron
                        apps, API integrations, Postman-based testing workflows
                    </li>
                    <li>
                        <strong>Accessibility</strong>: PDF/Word remediation,
                        subtitle workflows, WCAG 2.1 and EN 301 549 audits
                    </li>
                    <li>
                        <strong>Collaboration platforms</strong>: Confluence,
                        Jira, GitHub, Agile boards for LMS implementation and
                        evaluation
                    </li>
                </ul>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <p>
                    Much of my work has bridged technical development and
                    practical pedagogical application. At Learnlight, for
                    example,{" "}
                    <a
                        href={learnlightPlatformCaseStudyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        I optimised GraphQL API responses
                    </a>{" "}
                    and implemented automated backend testing to support{" "}
                    <a
                        href={learnlightPlatformCaseStudyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        a commercial LMS serving over 700,000 registered
                        learners
                    </a>
                    . While highly technical, this work had a direct educational
                    impact: improved system performance translated to better
                    student experiences.
                </p>

                <p>
                    One project that exemplifies this balance was my integration
                    of the{" "}
                    <a
                        href={oxfordLearnersDictionariesApiRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Oxford Learner&apos;s Dictionaries API Entry Fetcher
                    </a>{" "}
                    into the Learnlight platform. I developed a Node.js proof of
                    concept that fetched and reformatted dictionary entries into
                    accessible, semantically structured HTML. Using Cheerio for
                    parsing, I removed superfluous elements and applied
                    lightweight styling to match our platform&apos;s design.
                    This gave students reliable, accessible definitions without
                    interrupting the flow of lessons.
                </p>

                <p>
                    All features I developed were designed to work within the
                    Learnlight App, which was the primary interface used by
                    students to access their online lessons. The platform was
                    built for blended delivery, combining self-paced digital
                    content with synchronous teaching, so mobile performance,
                    accessibility, and seamless user experience were critical.
                </p>

                <p>
                    At Imperial College London, I brought this technical
                    foundation into a more learner-facing role. I wrote API
                    scripts based on LMS documentation (including Swagger
                    specifications) and{" "}
                    <a
                        href={blackboardPostmanCollectionRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        used Postman to evaluate endpoints related to identity
                        and access management (IAM), data analytics, and system
                        configuration
                    </a>
                    . These scripts supported LMS evaluation by revealing system
                    behaviours and limitations across platforms.
                </p>

                <figure>
                    <Image
                        src={ictAnalystTestScriptScreenshot}
                        alt="An Excel spreadsheet titled 'PoC LMS Test Scenarios Analysts (ICT Training)' showing a structured test script. Columns include Scenario TID, Subtask, Test Case, Test Case Description, Steps to Execute, Expected Results (Acceptance Criteria), Resources, and Status. Test cases cover navigation configuration, system tools, and notification settings. The status bar at the bottom shows 'Accessibility: Good to go'."
                        width={2940}
                        height={1912}
                    />
                    <figcaption>
                        The ICT Analyst test script in Excel, listing structured
                        test cases for LMS evaluation across navigation, tools,
                        and notification workflows.
                    </figcaption>
                </figure>

                <p>
                    Alongside this, I developed manual test scripts aligned with
                    real-world teaching needs, including navigation structures,
                    module aesthetics, bulk uploads, and user activity logs.
                    These enabled broader staff participation in the evaluation
                    process and informed my training delivery. For example, the
                    ICT Senior Analyst test script exemplifies how I worked
                    closely with academic and technical colleagues to understand
                    their specific needs. By collecting user stories from IAM
                    administrators and ICT Senior Analysts, I identified key API
                    functionalities for their workflows, such as documentation
                    accessibility, data request formats, and response
                    limitations. This collaborative approach ensured that the
                    testing scripts were directly relevant to real-world tasks.
                    This dual approach allowed me to explain platform
                    capabilities and constraints from both user and developer
                    perspectives.
                </p>

                <p>
                    Through these roles, I&apos;ve gained a deep appreciation
                    for scalable solutions, accessible design, and the practical
                    constraints institutions face when adopting or changing
                    systems. My work consistently aims to reduce technical
                    friction, build user confidence, and support learning
                    outcomes through thoughtful, hands-on use of technology.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <p>This section demonstrates how I have:</p>

                <ul>
                    <li>
                        Used a wide range of learning technologies, including
                        VLE platforms (Blackboard Ultra, Brightspace, Canvas,
                        Moodle), assessment tools, and accessibility software
                    </li>
                    <li>
                        Designed and developed bespoke tools using JavaScript,
                        Python, GraphQL, and Electron to enhance learning
                        delivery and staff training
                    </li>
                    <li>
                        Created and tested APIs, including GraphQL and RESTful
                        services, to integrate third-party resources such as the
                        Oxford Learner&apos;s Dictionaries API into learning
                        platforms
                    </li>
                    <li>
                        Supported system evaluation processes through API
                        scripting, automated testing (Mocha, Postman), and
                        manual test plans aligned with teaching priorities
                    </li>
                    <li>
                        Applied accessibility and inclusive design principles
                        (for example, WCAG 2.1, EN 301 549) to ensure learning
                        tools and resources were usable by all
                    </li>
                    <li>
                        Developed features for a mobile-first blended learning
                        platform (Learnlight App), where learners accessed
                        self-paced and live lessons on the go
                    </li>
                    <li>
                        Collaborated with academic and technical colleagues
                        using Agile workflows, Jira boards, Confluence, and
                        GitHub to evaluate and implement LMS solutions
                    </li>
                    <li>
                        Demonstrated how technical developments directly
                        supported learning and teaching by improving usability,
                        access, and staff engagement
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>

                <h3>Platform Evaluation & API Testing</h3>
                <ul>
                    <li>
                        <a
                            href={blackboardPostmanCollectionRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Postman collection developed from Blackboard
                            Ultra&apos;s Swagger spec (Repository)
                        </a>{" "}
                        <em>
                            Demonstrates hands-on evaluation of LMS API
                            functionality and interoperability; translates
                            Swagger documentation into practical testing
                            workflows for IAM, analytics, and configuration.
                        </em>
                    </li>
                    <li>
                        <a
                            href={ictAnalystTestScriptScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ICT Analyst test script (Screenshot)
                        </a>{" "}
                        <em>
                            Structured manual test plan reflecting academic
                            workflows; evidences reproducible checks of
                            navigation, bulk actions, and activity logs.
                        </em>
                    </li>
                    <li>
                        <a
                            href={ictSeniorAnalystTestScriptScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ICT Senior Analyst test script (Screenshot)
                        </a>{" "}
                        <em>
                            Further evidence of applied testing aligned to
                            administrative requirements; supports dual
                            technical-pedagogic perspective in LMS evaluation
                            and training readiness.
                        </em>
                    </li>
                </ul>

                <h3>Custom Integrations & Tools</h3>
                <ul>
                    <li>
                        <a
                            href={learnlightPlatformCaseStudyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learnlight Platform Case Study (Website)
                        </a>{" "}
                        <em>
                            Case study of large-scale LMS development for over
                            700,000 registered learners, demonstrating API
                            optimisation, automated testing, and user-focused
                            improvements to accessibility and mobile
                            performance.
                        </em>
                    </li>
                    <li>
                        <a
                            href={oxfordLearnersDictionariesApiRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Oxford Learner&apos;s Dictionaries API Entry Fetcher
                            (Repository)
                        </a>{" "}
                        <em>
                            Node.js prototype integrating third-party content;
                            uses Cheerio and semantic HTML to deliver
                            accessible, in-context definitions for blended
                            learning.
                        </em>
                    </li>
                    <li>
                        <a
                            href={traineeListScreenshot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Trainee List Electron app (Screenshot)
                        </a>{" "}
                        <em>
                            Bespoke cross-platform desktop tool for staff
                            onboarding; shows pragmatic trade-offs for speed,
                            deployment, and maintainability under institutional
                            constraints.
                        </em>
                    </li>
                </ul>

                <h3>Professional Development</h3>
                <ul>
                    <li>
                        <a
                            href={graphQlCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Modern GraphQL with Node (Udemy, 2023) (Certificate)
                        </a>{" "}
                        <em>
                            Formal training underpinning API design and
                            optimisation work; evidences continued professional
                            development directly supporting learning-technology
                            projects.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>

                <ul>
                    <li>
                        Cheerio{" "}
                        <em>
                            Cheerio: Fast, Flexible, and Lean Implementation of
                            Core jQuery
                        </em>
                        . npm. Available at:{" "}
                        <a
                            href="https://www.npmjs.com/package/cheerio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.npmjs.com/package/cheerio
                        </a>
                    </li>
                    <li>
                        Electron{" "}
                        <em>
                            Build Cross-Platform Desktop Apps with JavaScript,
                            HTML, and CSS
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://www.electronjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.electronjs.org/
                        </a>
                    </li>
                    <li>
                        GraphQL Foundation{" "}
                        <em>GraphQL: A Query Language for Your API</em>.
                        Available at:{" "}
                        <a
                            href="https://graphql.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://graphql.org/
                        </a>
                    </li>
                    <li>
                        Mocha{" "}
                        <em>
                            Mocha: Simple, Flexible, Fun JavaScript Test
                            Framework for Node.js &amp; the Browser
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://mochajs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://mochajs.org/
                        </a>
                    </li>
                    <li>
                        Oxford University Press{" "}
                        <em>Oxford Learner&apos;s Dictionaries API</em>.
                        Available at:{" "}
                        <a
                            href="https://languages.oup.com/oxford-learners-dictionaries-api/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://languages.oup.com/oxford-learners-dictionaries-api/
                        </a>
                    </li>
                    <li>
                        Postman <em>Postman API Platform</em>. Available at:{" "}
                        <a
                            href="https://www.postman.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.postman.com/
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
}
