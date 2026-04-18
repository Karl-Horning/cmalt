import { meta } from "./meta";
import PageHeader from "../components/PageHeader";

export default function page() {
    return (
        <>
            <PageHeader title={meta.title} date={meta.date} readingTime={meta.readingTime} />
            <section id="description">
                <h2>Description</h2>

                <p>
                    Effective communication underpins my work as an ICT Learning
                    Technologist at Imperial College London. I prioritise{" "}
                    clarity, empathy, and inclusivity, translating between
                    academic, administrative, and technical groups so that
                    shared goals are understood and achievable. In hybrid and
                    remote settings, I use shared documentation, structured
                    updates, and active listening to keep projects moving and to
                    make contributions visible.
                </p>

                <p>
                    My communication strategies vary according to audience and
                    purpose — from producing accessible written guides and
                    visual technical documentation, to delivering departmental
                    presentations and preparing structured meeting summaries.
                    This adaptability is essential when collaborating across
                    cross-functional groups such as the Digital Education
                    Platform Project&apos;s (DEPP) technical and academic teams,
                    and collaboration more broadly is central to my role. I work
                    with colleagues across faculties and support teams to
                    co-design learning experiences and advise on the use of
                    Canvas LMS and related technologies.
                </p>

                <p>
                    For instance, I have been working closely with learning
                    technologists from the Business School, Interdisciplinary
                    EdTech Lab, Faculty of Natural Sciences, Faculty of
                    Medicine, and Faculty of Engineering, alongside ICT
                    developers and platform specialists, ensuring that academic
                    perspectives informed technical decision-making and vice
                    versa. A significant part of my current work is within the
                    DEPP, supporting Imperial&apos;s transition from Blackboard
                    to Canvas. Within the Platform Integration and Migration and
                    Testing and Evaluation groups, I help surface technical
                    dependencies, coordinate feedback loops, and ensure
                    actionable outcomes are captured in Asana so they can be
                    implemented by the right teams.
                </p>

                <p>
                    In October 2024, I delivered{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        a department-wide presentation on the DEPP
                    </a>
                    , outlining milestones, testing processes, and feedback
                    mechanisms. This improved shared understanding and aligned
                    timelines between technical and academic teams. In June
                    2025, I collaborated with colleagues in the Business School
                    on{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        a Proof of Concept data-cleaning exercise
                    </a>
                    , identifying and annotating discrepancies to streamline
                    downstream work and reduce the time needed for subsequent
                    data validation.
                </p>

                <p>
                    On 5 November 2024 — ahead of this Proof of Concept testing
                    — I completed the{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        Understanding Manual Testing
                    </a>{" "}
                    course on LinkedIn Learning to strengthen my approach to
                    testing and communication. Coming from a developer
                    background, I was more familiar with automated testing
                    frameworks such as unit and integration tests. This training
                    helped me appreciate how manual testing complements
                    automation by capturing the user experience and uncovering
                    usability or accessibility issues that scripted tests can
                    miss. It also improved how I communicate
                    findings—translating technical observations into practical
                    recommendations for non-technical stakeholders.
                </p>

                <p>
                    I disseminate practice through documentation, practical
                    guides, and blog posts. Examples include:
                </p>

                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Microsoft Teams FAQ
                        </a>{" "}
                        (2021)
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Using Postman with Apollo Server
                        </a>{" "}
                        (2023)
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Using Blackboard&apos;s Swagger File to Create a
                            Postman Collection and Make an API Call
                        </a>{" "}
                        (2025)
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Web Accessibility Resources and Tools: Guidelines,
                            Checklists, and Testing Solutions
                        </a>{" "}
                        (shared with the DEPP in January 2025).
                    </li>
                </ul>

                <p>
                    I maintain a public repository of{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        documentation and style guides
                    </a>{" "}
                    which consolidate the conventions I follow when writing
                    READMEs, CSS, comments, and Git commits. Creating and
                    maintaining these guides reinforces my commitment to
                    clarity, accessibility, and the open sharing of effective
                    practice, aligning with CMALT principles.
                </p>

                <p>
                    These resources, along with my professional portfolio site,
                    serve as an open record of my work and methods, helping
                    colleagues and the wider community access concrete, reusable
                    guidance. My professional development is sustained through
                    internal learning sessions, self-directed study (for
                    example, LinkedIn Learning courses on accessibility,
                    JavaScript/TypeScript, and APIs), and engagement with
                    technology blogs and YouTube channels. I regularly share
                    useful resources with colleagues, contributing to a culture
                    of collective learning.
                </p>
            </section>

            <section id="reflection">
                <h2>Reflection</h2>

                <p>
                    Working across multi-stakeholder projects has sharpened my
                    communication practice. I have learned that plain-English
                    explanations, clear documentation of decisions, and explicit
                    next steps are essential for maintaining momentum and trust.
                    In the DEPP, this has meant translating complex platform
                    evaluations and test findings into concise updates that
                    productively guide technical and academic teams.
                </p>

                <p>
                    Through my involvement in the DEPP meetings, I have learned
                    the value of structured preparation and documentation from
                    colleagues who model effective facilitation practices.
                    Project owners consistently share agendas in advance and
                    follow them closely during meetings, which helps maintain
                    focus and ensure that all voices are heard. On two
                    occasions,{" "}
                    <a href="" target="_blank" rel="noopener noreferrer">
                        I prepared the meeting notes myself
                    </a>
                    , adopting the same format — an agenda-linked structure with
                    a brief executive summary and clearly marked{" "}
                    <strong>Action:</strong> points. This approach, also
                    informed by accessibility guidance from{" "}
                    <a
                        href={
                            "https://www.gov.uk/government/publications/inclusive-communication/accessible-communication-formats"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GOV.UK&apos;s Inclusive Communication
                    </a>{" "}
                    resource, supports clarity and inclusivity by making
                    information concise, scannable, and easy to follow for all
                    participants.
                </p>

                <p>
                    The DEPP Proof of Concept testing also reinforced the
                    communicative value of <em>manual testing</em>. Through
                    collaboration with technical and academic colleagues, I
                    learned that effective testing is as much about clear
                    dialogue and documentation as it is about functionality.
                    Different users engage with systems in different ways — some
                    explore every feature, while others only use what they need
                    — so structured feedback and observation are essential for
                    understanding pain points and adoption barriers. This
                    insight continues to inform how I test and present my own
                    digital tools, ensuring that findings are framed in
                    accessible, actionable language for all audiences. It also
                    reinforced the importance of framing technical findings in
                    language that prioritises user needs and accessibility. I
                    now approach documentation and feedback summaries with
                    greater attention to tone and structure, ensuring they are
                    inclusive, actionable, and audience-appropriate.
                </p>

                <p>
                    Adapting communication formats — from technical
                    documentation to plain-language guides and visual summaries
                    — helps ensure accessibility for colleagues with differing
                    technical confidence or learning preferences. This
                    flexibility is key to inclusive and effective collaboration
                    across Imperial&apos;s diverse academic and professional
                    communities.
                </p>

                <p>
                    Producing guides and blog posts has likewise refined how I
                    structure information for different audiences — from
                    technical walkthroughs to accessibility-aware resources. In
                    both meetings and published materials, I apply the same
                    inclusive design principle: keep it simple, make it concise,
                    and emphasise what matters most. I&apos;ve also strengthened
                    interpersonal skills central to collaborative work — framing
                    feedback constructively, negotiating priorities when
                    timelines compete, and closing the loop with clear, written
                    next steps.
                </p>

                <p>
                    These experiences have also developed my interpersonal and
                    professional skills — active listening, empathy, and
                    diplomatic communication. By clarifying ambiguity,
                    synthesising perspectives, and moderating between
                    pedagogical and technical needs, I have built trust and
                    fostered a supportive environment within hybrid teams.
                </p>

                <p>
                    Looking ahead, I will continue sharing effective practice
                    through internal channels and my professional portfolio,
                    while further developing facilitation and knowledge-sharing
                    approaches that make communication consistent, scalable, and
                    inclusive. In doing so, I reinforce my commitment to the
                    CMALT principles of collaboration, reflection, and the open
                    sharing of effective practice. By documenting and
                    disseminating lessons learned, I contribute to collective
                    professional development both within and beyond my
                    institution.
                </p>
            </section>

            <section id="summary">
                <h2>Summary</h2>

                <p>This section demonstrates how I have:</p>

                <ul>
                    <li>
                        Practised clear, inclusive communication to connect
                        academic, administrative, and technical teams and ensure
                        accessibility for diverse audiences.
                    </li>
                    <li>
                        Contributed to the DEPP through Integration/Migration
                        and Testing/Evaluation groups, translating findings into
                        actionable Asana tasks.
                    </li>
                    <li>
                        Delivered a department-wide presentation (October 2024)
                        on the DEPP to align timelines, testing, and feedback
                        processes.
                    </li>
                    <li>
                        Supported the Business School during Proof of Concept
                        testing (June 2025) by annotating data discrepancies and
                        clarifying follow-up actions.
                    </li>
                    <li>
                        Used structured meeting agendas, executive summaries,
                        and accessible formatting to enhance clarity and
                        inclusivity.
                    </li>
                    <li>
                        Disseminated practice via documentation and blog posts
                        (Teams FAQ, Postman guides, Blackboard API article,
                        Accessibility resources).
                    </li>
                    <li>
                        Maintained currency through internal CPD, LinkedIn
                        Learning courses, and curated tech/media sources,
                        sharing highlights with colleagues.
                    </li>
                    <li>
                        Aligned communication practice with CMALT principles of
                        collaboration, reflection, and sharing effective
                        practice across professional communities.
                    </li>
                </ul>
            </section>

            <section id="evidence">
                <h2>Evidence</h2>

                <h3>Collaboration and Communication</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            PoC Data Cleaning Collaboration Screenshot (June
                            2025) (Image)
                        </a>{" "}
                        <em>
                            Screenshot from Microsoft Teams showing
                            collaborative communication with a Business School
                            colleague during the Proof of Concept data-cleaning
                            phase. Demonstrates how discrepancies were
                            discussed, clarified, and actioned in real time.
                            Shared with the colleague&apos;s consent;
                            anonymisation not required.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            LMS Project Group Meeting Notes (October 2025)
                            (Screenshot)
                        </a>{" "}
                        <em>
                            Example of structured, agenda-linked notes produced
                            during the DEPP meetings. Demonstrates learning from
                            colleagues&apos; communication practices and the
                            application of accessible formatting principles.
                            Shared with the consent of project leads;
                            anonymisation not required.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Digital Education Platform Project (DEPP) ICT
                            Department Presentation (2024) (PDF)
                        </a>{" "}
                        <em>
                            Presentation delivered to ICT colleagues outlining
                            milestones, testing processes, and feedback
                            mechanisms — demonstrating cross-departmental
                            communication and facilitation.
                        </em>
                    </li>
                </ul>

                <h3>Documentation and Dissemination</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Microsoft Teams FAQ (PDF)
                        </a>{" "}
                        <em>
                            Plain-English staff guide demonstrating inclusive
                            writing, accessible structure, and responsiveness to
                            user needs.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Using Postman with Apollo Server (PDF)
                        </a>{" "}
                        <em>
                            Technical guide for developers showing clear,
                            step-by-step communication of complex processes.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Using Blackboard&apos;s Swagger File to Create a
                            Postman Collection and Make an API Call (Link)
                        </a>{" "}
                        <em>
                            Blog post disseminating institutional testing
                            practice and reusable methods for evaluating APIs —
                            an example of outward-facing professional
                            communication.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Web Accessibility Resources and Tools: Guidelines,
                            Checklists, and Testing Solutions (PDF)
                        </a>{" "}
                        <em>
                            Curated resource shared with the DEPP colleagues,
                            supporting accessible design and awareness of
                            WCAG-aligned best practice.
                        </em>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Style Guides (GitHub Repository)
                        </a>{" "}
                        <em>
                            Collection of documentation and style guides
                            (READMEs, CSS, comments, and Git commits)
                            demonstrating consistent, accessible communication
                            practices and commitment to sharing effective
                            professional standards.
                        </em>
                    </li>
                </ul>

                <h3>Professional Development</h3>
                <ul>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            Understanding Manual Testing (LinkedIn Learning,
                            2024) (Certificate)
                        </a>{" "}
                        <em>
                            Completed ahead of the DEPP Proof of Concept testing
                            to strengthen communication between technical and
                            academic stakeholders. Demonstrates reflective
                            development and understanding of user behaviour
                            beyond automated testing.
                        </em>
                    </li>
                </ul>
            </section>

            <section id="further-reading">
                <h2>Further Reading</h2>

                <ul>
                    <li>
                        Forbes Coaches Council. (2024).{" "}
                        <em>
                            18 Expert Tips for Communicating with Hybrid and
                            Remote Teams
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://www.forbes.com/councils/forbescoachescouncil/2024/06/27/18-expert-tips-for-communicating-with-hybrid-and-remote-teams/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.forbes.com/councils/forbescoachescouncil/2024/06/27/18-expert-tips-for-communicating-with-hybrid-and-remote-teams/
                        </a>
                    </li>
                    <li>
                        GOV.UK. (2021).{" "}
                        <em>
                            Inclusive communication: Plain English and
                            accessibility guidelines
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://www.gov.uk/government/publications/inclusive-communication"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.gov.uk/government/publications/inclusive-communication
                        </a>
                    </li>
                    <li>
                        NHS England. (2023).{" "}
                        <em>
                            Accessible Information Standard: Principles for
                            inclusive communication
                        </em>
                        . Available at:{" "}
                        <a
                            href="https://www.england.nhs.uk/publication/accessible-information-standard/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.england.nhs.uk/publication/accessible-information-standard/
                        </a>
                    </li>
                    <li>
                        Nielsen Norman Group. (2024).{" "}
                        <em>Accessibility and Inclusivity: Study Guide</em>.
                        Available at:{" "}
                        <a
                            href="https://www.nngroup.com/articles/accessibility-inclusivity-study-guide/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.nngroup.com/articles/accessibility-inclusivity-study-guide/
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
}
