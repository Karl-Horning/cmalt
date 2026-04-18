import { meta } from "./meta";
import PageHeader from "../components/PageHeader";

export default function page() {
    return (
        <main>
            <PageHeader title={meta.title} date={meta.date} readingTime={meta.readingTime} />
            <section id="description">
                <h2>Description</h2>
                <p>
                    My specialist area is full-stack JavaScript development,
                    with a focus on building and optimising GraphQL APIs and
                    working with relational databases like PostgreSQL — skills
                    that go beyond basic web development. What makes this work
                    distinct isn&apos;t just the technical complexity, but how
                    I&apos;ve applied it within an educational context to
                    improve learner access, system performance, and platform
                    reliability.
                </p>

                <p>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        I transitioned into development after more than a decade
                        in education
                    </a>
                    , and that background has shaped how I build software. From
                    2021 to 2024, I worked as a full-stack JavaScript developer
                    at Learnlight, a global EdTech company{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        serving over 700,000 registered learners
                    </a>
                    . I built and maintained its learning platform, the same one
                    I previously used as an English language trainer. In that
                    role, I:
                </p>
                <ul>
                    <li>
                        Reduced redundant GraphQL API calls tenfold using{" "}
                        <a
                            href="https://github.com/graphql/dataloader"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            dataloader
                        </a>
                        , which significantly improved speed and efficiency for
                        users across multiple services
                    </li>
                    <li>
                        Implemented API rate limiting using{" "}
                        <a href="" target="_blank" rel="noopener noreferrer">
                            GraphQL Rate Limit Directive
                        </a>{" "}
                        to ensure platform stability at scale
                    </li>
                    <li>
                        Fully replaced manual backend testing with automated
                        tests using Postman and Mocha
                    </li>
                    <li>
                        Authored more than 40 pages of technical documentation
                        to ensure continuity and improve team onboarding
                    </li>
                </ul>

                <p>
                    This work combined programming, systems thinking, and user
                    empathy to make sure that performance improvements aligned
                    with the real needs of our learners and staff. For example,
                    optimising backend calls wasn&apos;t just about efficiency:
                    it helped improve access in low-bandwidth regions and
                    reduced operational costs. Aligning technical systems with
                    educational outcomes is what drives my approach to
                    development.
                </p>

                <p>
                    Beyond coding, I focus on testing, documentation, and
                    developer workflows. I&apos;ve introduced quality assurance
                    processes that directly impacted how quickly and safely new
                    features could be deployed, which is especially critical in
                    always-on learning environments. I&apos;m comfortable
                    working across the stack, utilising React and Next.js on the
                    front end, Node.js and PostgreSQL on the back end, and
                    collaborating with Agile teams using tools such as Jira,
                    Confluence, and Git.
                </p>

                <p>
                    More recently, I have applied this specialist knowledge
                    within my role as a Learning Technologist at Imperial
                    College London, particularly through the{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Digital Education Platform Project (DEPP)
                    </a>
                    , a major institutional review of LMS platforms (Blackboard
                    Ultra, Brightspace, and Canvas). My contribution focused on
                    technical evaluation: assessing APIs, integration models,
                    and accessibility compliance (for example, WCAG 2.1), and
                    aligning these with the pedagogical and administrative
                    requirements of different faculties.
                </p>

                <p>
                    To support this process, I created a reusable{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Postman collection for testing Blackboard Ultra&apos;s
                        APIs
                    </a>{" "}
                    and developed structured manual test scripts to explore
                    functionality, identify limitations, and prepare for future
                    automation. I ensured that the testing process remained
                    grounded in authentic workflows and informed both technical
                    decision-making and staff training by gathering user stories
                    from ICT analysts and administrators.
                </p>

                <p>
                    This project became an important part of my broader
                    knowledge-sharing activities with colleagues and the wider
                    community. In July 2025, I published a blog post titled{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Using Blackboard&apos;s Swagger File to Create a Postman
                        Collection and Make an API Call
                    </a>
                    , drawing directly on DEPP testing. The post demonstrates
                    how I adapted techniques from my previous developer role to
                    support current institutional projects, reinforcing the link
                    between my development expertise and my impact as a learning
                    technologist.
                </p>

                <p>
                    I&apos;m a self-taught developer, and my learning has been
                    shaped by practical application and a strong belief in
                    knowledge-sharing. I&apos;ve completed a range of
                    development-focused training, including:
                </p>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Apple Teacher (Swift Playgrounds)
                        </a>{" "}
                        (Awarded 6 June 2025 by Apple, self-paced)
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            The Web Developer Bootcamp
                        </a>{" "}
                        (Awarded 2 July 2019 by Udemy, 47 hours)
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Master Electron
                        </a>{" "}
                        (Awarded 2 February 2024 by Udemy, 8 hours)
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Modern GraphQL with Node
                        </a>{" "}
                        (Awarded 2 January 2023 by Udemy, 10.5 hours)
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Next JS: The Complete Developer&apos;s Guide
                        </a>{" "}
                        (Awarded 22 March 2024 by Udemy, 15.5 hours)
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Jira Fundamentals
                        </a>{" "}
                        (Awarded 15 August 2024 by Atlassian, self-paced)
                    </li>
                </ul>

                <p>
                    I also maintain an active GitHub profile at{" "}
                    <a
                        href="https://github.com/Karl-Horning"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/Karl-Horning
                    </a>
                    , where I share code for side projects and personal tooling,
                    and a portfolio site at{" "}
                    <a
                        href="https://karlhorning.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        karlhorning.dev
                    </a>
                    , which showcases my work.
                </p>

                <p>
                    Ultimately, my specialist skill set lies at the intersection
                    of education and engineering. I develop systems that are
                    technically sound, but always with the learner in mind. That
                    might mean better accessibility, faster load times, clearer
                    documentation for future contributors, or more stable APIs
                    to support global delivery. My background allows me to
                    navigate both pedagogical and technical challenges, and
                    that&apos;s where I can add the most value.
                </p>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>
                <p>
                    Transitioning from educator to developer has shaped not just
                    what I build, but how and why I build it. My background in
                    education taught me to think about systems in terms of
                    clarity, access, and inclusion — principles I now apply in
                    my development work. For instance, implementing performance
                    optimisations like reducing GraphQL query duplication with{" "}
                    <code>dataloader</code> wasn&apos;t only about technical
                    efficiency. It also improved access for users in
                    low-bandwidth regions and improved the trainer experience —
                    an often-overlooked group who benefit just as much from
                    responsive tools and reliable interfaces.
                </p>

                <p>
                    One challenge I&apos;ve consistently faced is the
                    inaccessibility of developer documentation. Concepts like
                    batching and caching in GraphQL are often explained in
                    overly abstract, text-heavy ways that don&apos;t cater to
                    diverse learning styles. As a visual learner, I often turned
                    to alternative resources such as video tutorials, MOOCs, and
                    community forums to fill the gaps. These experiences shaped
                    my approach to documentation:{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        I now write detailed READMEs
                    </a>
                    , use JSDoc consistently, and document GraphQL schemas so
                    they&apos;re easily understood and usable in tools like
                    GraphQL Sandbox. I&apos;ve come to see documentation not
                    just as a technical requirement, but as a way to support
                    more inclusive learning and development.
                </p>

                <p>
                    Being self-taught has also meant navigating imposter
                    syndrome, especially in teams made up of traditionally
                    trained developers. Finding mentors with similar backgrounds
                    has been difficult, and at times I&apos;ve felt isolated.
                    Community learning platforms like{" "}
                    <a
                        href="https://www.freecodecamp.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        freeCodeCamp
                    </a>
                    ,{" "}
                    <a
                        href="https://www.youtube.com/@freecodecamp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        YouTube
                    </a>
                    , and forums have helped bridge that gap and remain
                    essential to my ongoing development. These experiences have
                    deepened my belief in the value of knowledge-sharing. I
                    maintain{" "}
                    <a
                        href="https://github.com/Karl-Horning"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        an active GitHub profile
                    </a>{" "}
                    where I try to make my repositories accessible and easy to
                    follow, and I&apos;ve recently launched a blog inspired by
                    posts such as{" "}
                    <em>
                        <a
                            href="https://netflixtechblog.com/our-learnings-from-adopting-graphql-f099de39ae5f"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Our learnings from adopting GraphQL
                        </a>
                    </em>{" "}
                    and{" "}
                    <em>
                        <a
                            href="https://netflixtechblog.com/migrating-netflix-to-graphql-safely-8e1e4d4f1e72"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Migrating Netflix to GraphQL safely
                        </a>
                    </em>
                    . My goal is to reflect on development challenges and
                    explain concepts in a way that&apos;s approachable and
                    useful to others.
                </p>

                <p>
                    For me, development is not just a technical pursuit, but a
                    continuation of my commitment to lifelong learning and
                    learner empowerment — values I carry with me throughout my
                    time in education.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <p>This section demonstrates how I have:</p>

                <ul>
                    <li>
                        Applied full-stack JavaScript development skills —
                        including GraphQL, PostgreSQL, and Node.js — in an
                        educational context to improve learner access, system
                        performance, and reliability
                    </li>
                    <li>
                        Delivered specialist backend optimisations (for example,
                        using <code>dataloader</code> and API rate limiting) to
                        enhance platform efficiency and support learners in
                        low-bandwidth regions
                    </li>
                    <li>
                        Introduced quality assurance practices such as automated
                        testing and technical documentation to support safe,
                        scalable, and maintainable feature delivery
                    </li>
                    <li>
                        Demonstrated cross-stack proficiency (React, Next.js,
                        Node.js) while collaborating in Agile teams using
                        industry tools such as Jira, Git, and Confluence
                    </li>
                    <li>
                        Maintained a reflective development practice through
                        ongoing self-directed training and community engagement
                        (for example, GitHub, online courses, developer blog)
                    </li>
                    <li>
                        Made technical systems more accessible through clear,
                        inclusive documentation and schema design, drawing on my
                        experience as both educator and learner
                    </li>
                    <li>
                        Bridged pedagogical and engineering mindsets to ensure
                        that development decisions align with user needs,
                        educational outcomes, and inclusive design principles
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>

                <h3>Core Engineering Impact</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
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
                        <a href="" target="_blank" rel="noopener noreferrer">
                            GraphQL Rate Limit Demo (Repository)
                        </a>{" "}
                        <em>
                            Demonstrates performance/stability safeguards at
                            scale; evidence of proactive risk management and
                            measurable backend optimisation.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Postman collection developed from Blackboard
                            Ultra&apos;s Swagger spec (Repository)
                        </a>{" "}
                        <em>
                            Adapts developer tooling for institutional
                            evaluation; bridges API analysis with authentic HE
                            workflows used in DEPP.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Karl Horning&apos;s GitHub: github.com/Karl-Horning
                            (Repository)
                        </a>{" "}
                        <em>
                            Ongoing code artefacts and utilities; showcases
                            breadth across the stack and commitment to
                            transparent, reusable engineering practice.
                        </em>
                    </li>
                </ul>

                <h3>Institutional Evaluation & Knowledge Sharing</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Using Blackboard&apos;s Swagger File to Create a
                            Postman Collection and Make an API Call (Blog Post,
                            2025)
                        </a>{" "}
                        <em>
                            Public write-up translating internal DEPP testing
                            into reusable guidance; evidence of dissemination
                            and sector contribution.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Style Guides (GitHub Repository)
                        </a>{" "}
                        <em>
                            Collection of documentation and code style guides
                            (READMEs, CSS, comments, and Git commits)
                            demonstrating consistent, accessible developer
                            communication and commitment to maintainable,
                            inclusive engineering practice.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Karl Horning&apos;s personal portfolio:
                            karlhorning.dev
                        </a>{" "}
                        <em>
                            Curated showcase of projects and documentation;
                            supports reflective practice and communicates impact
                            to non-technical audiences.
                        </em>
                    </li>
                </ul>

                <h3>Professional Profile</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Karl Horning&apos;s LinkedIn profile:
                            linkedin.com/in/karl-horning
                        </a>{" "}
                        <em>
                            Verifies career trajectory, skills, and
                            endorsements; complements technical evidence with
                            professional context.
                        </em>
                    </li>
                </ul>

                <h3>Training & Certifications</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Modern GraphQL with Node (Udemy, 2023) (Certificate)
                        </a>{" "}
                        <em>
                            Directly underpins GraphQL optimisation, batching,
                            and schema design used in production.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Next JS: The Complete Developer&apos;s Guide (Udemy,
                            2024) (Certificate)
                        </a>{" "}
                        <em>
                            Front-end performance and DX improvements; supports
                            full-stack delivery and rapid prototyping.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Master Electron (Udemy, 2024) (Certificate)
                        </a>{" "}
                        <em>
                            Desktop tooling expertise enabling cross-platform
                            internal apps for staff workflows.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            The Web Developer Bootcamp (Udemy, 2019)
                            (Certificate)
                        </a>{" "}
                        <em>
                            Foundational web engineering skills underpinning
                            full-stack practice.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Jira Fundamentals (Atlassian, 2024) (Screenshot)
                        </a>{" "}
                        <em>
                            Agile project operations and collaboration
                            essentials; supports delivery at team and programme
                            scale.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Apple Teacher (Swift Playgrounds) (Apple, 2025)
                            (Certificate)
                        </a>{" "}
                        <em>
                            Signals the pedagogy-engineering link: ability to
                            teach technical concepts and design learner-centred
                            resources.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>

                <ul>
                    <li>
                        Apollo Odyssey.{" "}
                        <em>
                            Data loaders with TypeScript &amp; Apollo Server
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://www.apollographql.com/tutorials/dataloaders-typescript"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.apollographql.com/tutorials/dataloaders-typescript
                        </a>
                    </li>
                    <li>
                        Fadhil, A. (2019).{" "}
                        <em>How to use GraphQL DataLoader</em>. Available at:{" "}
                        <a
                            href="https://rahmanfadhil.com/graphql-dataloader/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://rahmanfadhil.com/graphql-dataloader/
                        </a>
                    </li>
                    <li>
                        LetsLearnGraphQL (2023).{" "}
                        <em>Rate limiting and throttling in GraphQL</em>.
                        Available at:{" "}
                        <a
                            href="https://letslearngraphql.com/rate-limiting-and-throttling-in-graphql"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://letslearngraphql.com/rate-limiting-and-throttling-in-graphql
                        </a>
                    </li>
                    <li>
                        MDN Web Docs. <em>JavaScript guide</em>. Available at:{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
                        </a>
                    </li>
                    <li>
                        Messinger, J. (2017).{" "}
                        <em>API testing tips from a Postman professional</em>.
                        Available at:{" "}
                        <a
                            href="https://blog.postman.com/api-testing-tips-from-a-postman-professional/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://blog.postman.com/api-testing-tips-from-a-postman-professional/
                        </a>
                    </li>
                    <li>
                        Salesforce, Inc. <em>The Twelve-Factor App</em>.
                        Available at:{" "}
                        <a
                            href="https://12factor.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://12factor.net/
                        </a>
                    </li>
                    <li>
                        Shtatnov, A. &amp; Ranganathan, R.S. (2018).{" "}
                        <em>Our learnings from adopting GraphQL</em>. Netflix
                        Technology Blog. Available at:{" "}
                        <a
                            href="https://netflixtechblog.com/our-learnings-from-adopting-graphql-f099de39ae5f"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://netflixtechblog.com/our-learnings-from-adopting-graphql-f099de39ae5f
                        </a>
                    </li>
                    <li>
                        Shin, J., Shikhare, T., &amp; Emmanuel, W. (2023).{" "}
                        <em>Migrating Netflix to GraphQL safely</em>. Netflix
                        Technology Blog. Available at:{" "}
                        <a
                            href="https://netflixtechblog.com/migrating-netflix-to-graphql-safely-8e1e4d4f1e72"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://netflixtechblog.com/migrating-netflix-to-graphql-safely-8e1e4d4f1e72
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    );
}
