import { meta } from "./meta";
import PageHeader from "../components/PageHeader";

export default function page() {
    return (
        <>
            <PageHeader title={meta.title} date={meta.date} readingTime={meta.readingTime} />
            <section id="description">
                <h2>Description</h2>

                <p>
                    Over the past several years, I&apos;ve been involved in a
                    range of activities that have supported the deployment of
                    learning technologies, from technical documentation and
                    training to change management and evaluation.
                </p>

                <p>
                    In June 2021 — just before Microsoft retired Skype for
                    Business — I authored a{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Microsoft Teams FAQ
                    </a>{" "}
                    to support trainers through the institutional transition to
                    Teams. I also created a video walkthrough,{" "}
                    <em>Microsoft Teams Guide</em>, which was used to deliver
                    asynchronous training.
                </p>

                <p>
                    In 2023, while working in a development-focused team, I
                    created a guide called{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Using Postman with Apollo Server
                    </a>{" "}
                    to help new developers interact with a GraphQL development
                    environment. This included instructions for authentication,
                    storing JWT tokens, and running queries and mutations via
                    Postman. While it was technical in nature, the resource also
                    functioned as a learning technology support tool, easing
                    onboarding and promoting consistency across the team.
                </p>

                <figure className="text-center">
                    <video
                        className="mb-6 h-auto w-full rounded-xl shadow-md"
                        controls
                        preload="metadata"
                        aria-label="Excerpt from Microsoft Teams Guide"
                        poster=""
                    >
                        <source src="" type="video/mp4" />
                        <track
                            src=""
                            kind="captions"
                            srcLang="en"
                            label="English"
                            default
                        />
                        Your browser does not support the video tag.
                    </video>
                    <figcaption className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                        An excerpt from <em>Microsoft Teams Guide</em>
                    </figcaption>
                </figure>

                <p>
                    Most recently, in July 2025, I published a blog post titled{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Using Blackboard&apos;s Swagger File to Create a Postman
                        Collection and Make an API Call
                    </a>
                    . This guide was informed by testing work I contributed to
                    as part of the{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Digital Education Platform Project (DEPP)
                    </a>
                    , which explored the adoption of new LMS platforms. In the
                    blog&apos;s &ldquo;Step 4: Request an Access Token&ldquo;, I
                    reference a script adapted from one I originally developed
                    to authenticate with Learnlight&apos;s bespoke language
                    learning platform — demonstrating how techniques from
                    previous roles fed into current work.
                </p>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <p>
                    Looking across these resources, I can trace a development in
                    both approach and design — moving from instructional
                    documents focused on immediate technical tasks to more
                    accessible, learner-centred materials that anticipate
                    different levels of user confidence.
                </p>

                <p>
                    For example, the{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Microsoft Teams FAQ
                    </a>{" "}
                    included lengthy text blocks and oversized arrows that
                    partially obscured key content. By contrast, my more recent
                    API and Postman guides are more concise, streamlined, and
                    visually clearer — reflecting lessons learned about
                    information overload, visual accessibility, and cognitive
                    load. Similarly, my{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Using Postman with Apollo Server
                    </a>{" "}
                    guide — created in Confluence — omitted annotated visuals
                    entirely, a gap I now actively address through better use of
                    screenshots, highlights, and contextual labelling.
                </p>

                <p>
                    These reflections have shaped my understanding that
                    effective deployment goes beyond technical rollouts. It
                    involves building user confidence, collecting feedback, and
                    iterating support based on real experiences. At Imperial,
                    this has meant creating resources that cater to a diverse
                    tester group across academic departments — with varying
                    levels of technical fluency. I&apos;ve provided asynchronous
                    walkthroughs and clear reference materials that reduce the
                    need for live support and empower users to explore new
                    systems independently.
                </p>

                <p>
                    Much of this work was inherently collaborative. In the DEPP
                    project, I worked closely with other learning technologists,
                    developers, and colleagues during platform evaluation.
                    Internal team testing sessions highlighted both technical
                    issues and usability challenges, leading us to adapt
                    instructions and examples for different contexts. For
                    instance, colleagues reviewing the LMS test scripts reported
                    that one case — requiring users to set up and submit
                    assignments just to generate log entries — was too
                    time-consuming in a sandbox environment. Based on this
                    feedback, I revised the script so that testers could instead
                    demonstrate that a detailed audit log for an individual user
                    was shown. This adjustment made the test more flexible and
                    scalable, while still achieving the goal of verifying
                    assignment submissions. Feedback from administrative staff
                    also influenced revisions — for example, simplifying
                    language or prioritising practical marking workflows over
                    advanced features. These contributions frequently drew my
                    attention to areas I might not have identified alone,
                    reinforcing the importance of team-based evaluation.
                </p>

                <p>
                    Supporting deployment now feels like an empathetic,
                    iterative process — one that blends technical clarity with a
                    deep understanding of staff needs. Collaboration has been
                    key to this: co-developing resources, running pilot
                    sessions, and integrating structured team feedback has
                    consistently improved the quality and uptake of the
                    materials I produce. I now approach training and resource
                    development with this mindset, aiming not just to instruct
                    but to support learning in the broader sense.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <p>This section demonstrates how I have:</p>

                <ul>
                    <li>
                        Supported the evaluation and deployment of LMS platforms
                        through a mix of technical documentation, testing, and
                        tailored guidance
                    </li>
                    <li>
                        Created training materials that evolve with user needs —
                        from early platform migrations to current API and
                        GraphQL workflows
                    </li>
                    <li>
                        Contributed to change management efforts by anticipating
                        user challenges and aligning support with institutional
                        processes
                    </li>
                    <li>
                        Developed resources that balance technical detail with
                        accessibility and clarity, reflecting user feedback and
                        evolving practice
                    </li>
                    <li>
                        Helped bridge development and pedagogy by aligning
                        features and workflows with actual teaching needs
                    </li>
                    <li>
                        Advocated for usability, clarity, and sustainability in
                        every stage of the deployment process
                    </li>
                    <li>
                        Worked collaboratively with colleagues through team
                        testing and pilot sessions, adapting resources in
                        response to feedback and improving adoption outcomes
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>

                <h3>Documentation & Technical Workflows</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Using Blackboard&apos;s Swagger File to Create a
                            Postman Collection and Make an API Call (2025) (Blog
                            post)
                        </a>{" "}
                        <em>
                            Public, step-by-step guide informed by DEPP testing;
                            demonstrates clear dissemination of API evaluation
                            methods and supports reproducible endpoint testing.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Using Postman with Apollo Server (2023) (PDF)
                        </a>{" "}
                        <em>
                            Internal developer documentation for GraphQL
                            workflows (auth, JWT storage, queries/mutations);
                            underpins consistent onboarding and team-wide
                            technical practice.
                        </em>
                    </li>
                </ul>

                <h3>Training & Rollout Support</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Microsoft Teams FAQ (2021) (PDF)
                        </a>{" "}
                        <em>
                            Trainer-focused guide produced during the Skype for
                            Business → Teams transition; plain-English support
                            that reduced friction and queries during
                            institutional change.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Microsoft Teams Guide (Video)
                        </a>{" "}
                        <em>
                            Short asynchronous walkthrough used alongside the
                            FAQ; provides accessible, on-demand training to
                            support deployment at scale.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>

                <ul>
                    <li>
                        Apollo GraphQL. <em>Introduction to Apollo Server</em>.
                        Available at:{" "}
                        <a
                            href="https://www.apollographql.com/docs/apollo-server"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.apollographql.com/docs/apollo-server
                        </a>
                    </li>
                    <li>
                        GeeksforGeeks. <em>JSON Web Token (JWT)</em>. Available
                        at:{" "}
                        <a
                            href="https://www.geeksforgeeks.org/web-tech/json-web-token-jwt/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.geeksforgeeks.org/web-tech/json-web-token-jwt/
                        </a>
                    </li>
                    <li>
                        Imperial College London.{" "}
                        <em>Digital Education Platform Project (DEPP)</em>.
                        Available at:{" "}
                        <a href="" target="_blank" rel="noopener noreferrer">
                            TODO
                        </a>
                    </li>

                    <li>
                        Postman. <em>Collections</em>. Available at:{" "}
                        <a
                            href="https://www.postman.com/product/collections/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.postman.com/product/collections/
                        </a>
                    </li>
                    <li>
                        Postman. <em>GraphQL in Postman</em>. Available at:{" "}
                        <a
                            href="https://learning.postman.com/docs/sending-requests/graphql/graphql-overview/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://learning.postman.com/docs/sending-requests/graphql/graphql-overview/
                        </a>
                    </li>
                    <li>
                        Postman. <em>What is Postman?</em>. Available at:{" "}
                        <a
                            href="https://www.postman.com/product/what-is-postman/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.postman.com/product/what-is-postman/
                        </a>
                    </li>
                    <li>
                        SmartBear Software. <em>Swagger</em>. Available at:{" "}
                        <a
                            href="https://swagger.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://swagger.io/
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
}
