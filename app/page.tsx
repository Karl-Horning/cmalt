import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>CMALT Portfolio</h1>
            <p>
                <Link href="/contextual-statement">Contextual Statement</Link>
            </p>

            <h2>Section 1</h2>

            <ul>
                <li>
                    <Link href="/section-1a-an-understanding-of-the-constraints-and-benefits-of-different-technology">
                        Section 1a: An Understanding of the Constraints and
                        Benefits of Different Technology
                    </Link>
                </li>
                <li>
                    <Link href="/section-1b-technical-knowledge-and-ability-in-the-use-of-learning-technology">
                        Section 1b: Technical Knowledge and Ability in the Use
                        of Learning Technology
                    </Link>
                </li>
                <li>
                    <Link href="/section-1c-supporting-the-deployment-of-learning-technologies">
                        Section 1c: Supporting the Deployment of Learning
                        Technologies
                    </Link>
                </li>
            </ul>

            <h2>Section 2</h2>
            <ul>
                <li>
                    <Link href="/section-2a-an-understanding-of-teaching-learning-and-or-assessment-processes">
                        Section 2a: An Understanding of Teaching, Learning
                        and/or Assessment Processes
                    </Link>
                </li>
                <li>
                    <Link href="/section-2b-an-understanding-of-your-target-learners">
                        Section 2b: An Understanding of Your Target Learners
                    </Link>
                </li>
            </ul>

            <h2>Section 3</h2>
            <ul>
                <li>
                    <Link href="/section-3a-understanding-and-engaging-with-legislation">
                        Section 3a: Understanding and Engaging With Legislation
                    </Link>
                </li>
                <li>
                    <Link href="/section-3b-understanding-and-engaging-with-policies-and-standards">
                        Section 3b: Understanding and Engaging With Policies and
                        Standards
                    </Link>
                </li>
            </ul>

            <h2>Section 4</h2>
            <ul>
                <li>
                    <Link href="/section-4a-communication-and-working-with-others">
                        Section 4a: Communication and Working With Others
                    </Link>
                </li>
            </ul>

            <h2>Section 5</h2>
            <ul>
                <li>
                    <Link href="/section-5a-specialist-area-javascript-development">
                        Section 5a: Specialist Area: JavaScript Development
                    </Link>
                </li>
            </ul>

            <h2>Section 6</h2>
            <ul>
                <li>
                    <Link href="/section-6a-future-plans">
                        Section 6a: Future Plans
                    </Link>
                </li>
                <li>
                    <Link href="/section-6b-confirmation-and-optional-nominated-assessor">
                        Section 6b: Declaration and Optional Nominated Assessor
                    </Link>
                </li>
            </ul>
        </main>
    );
}
