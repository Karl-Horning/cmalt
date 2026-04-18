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
                    <Link href="/technology-constraints">
                        Section 1a: An Understanding of the Constraints and
                        Benefits of Different Technology
                    </Link>
                </li>
                <li>
                    <Link href="/technical-knowledge">
                        Section 1b: Technical Knowledge and Ability in the Use
                        of Learning Technology
                    </Link>
                </li>
                <li>
                    <Link href="/technology-deployment">
                        Section 1c: Supporting the Deployment of Learning
                        Technologies
                    </Link>
                </li>
            </ul>

            <h2>Section 2</h2>
            <ul>
                <li>
                    <Link href="/teaching-and-learning">
                        Section 2a: An Understanding of Teaching, Learning
                        and/or Assessment Processes
                    </Link>
                </li>
                <li>
                    <Link href="/target-learners">
                        Section 2b: An Understanding of Your Target Learners
                    </Link>
                </li>
            </ul>

            <h2>Section 3</h2>
            <ul>
                <li>
                    <Link href="/legislation">
                        Section 3a: Understanding and Engaging With Legislation
                    </Link>
                </li>
                <li>
                    <Link href="/policies-and-standards">
                        Section 3b: Understanding and Engaging With Policies and
                        Standards
                    </Link>
                </li>
            </ul>

            <h2>Section 4</h2>
            <ul>
                <li>
                    <Link href="/communication">
                        Section 4a: Communication and Working With Others
                    </Link>
                </li>
            </ul>

            <h2>Section 5</h2>
            <ul>
                <li>
                    <Link href="/javascript-development">
                        Section 5a: Specialist Area: JavaScript Development
                    </Link>
                </li>
            </ul>

            <h2>Section 6</h2>
            <ul>
                <li>
                    <Link href="/future-plans">
                        Section 6a: Future Plans
                    </Link>
                </li>
                <li>
                    <Link href="/declaration">
                        Section 6b: Declaration and Optional Nominated Assessor
                    </Link>
                </li>
            </ul>
        </main>
    );
}
