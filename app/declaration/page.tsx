import Image from "next/image";
import JsonLd from "../components/JsonLd";
import { generatePageMetadata, generatePageJsonLd } from "@/lib/siteMetadata";
import { meta } from "./meta";
import PageHeader from "../components/PageHeader";
import {
    cmaltAssessmentTranscript,
    cmaltBadge,
    cmaltCertificate,
} from "@/lib/constants";

export const metadata = generatePageMetadata(meta);

export default function page() {
    return (
        <>
            <JsonLd data={generatePageJsonLd(meta)} />
            <PageHeader title={meta.title} date={meta.date} readingTime={meta.readingTime} />
            <section id="declaration">
                <h2>Declaration</h2>

                <p>I confirm that:</p>

                <ul>
                    <li>
                        I am the author of this portfolio and that it represents
                        my own work.
                    </li>
                    <li>
                        Where collaboration with others is discussed, their
                        contributions have been appropriately acknowledged.
                    </li>
                    <li>
                        Evidence included is appropriately anonymised or
                        included with permission.
                    </li>
                    <li>
                        I understand that by submitting this portfolio, I am
                        applying for CMALT accreditation and that the
                        information provided will be reviewed by assessors
                        appointed by ALT.
                    </li>
                </ul>

                <p>
                    Signed: <strong>Karl Horning</strong>
                </p>
                <p>
                    Date: <strong>11 November 2025</strong>
                </p>
            </section>

            <section id="nominated-assessor">
                <h2>Nominated Assessor (optional)</h2>

                <p>
                    I am nominating Kiran K Gawali as an assessor for this
                    submission.
                </p>
            </section>

            <section id="outcome">
                <h2>Outcome</h2>

                <p>
                    This portfolio was assessed and CMALT was awarded in May
                    2026.
                </p>

                <a
                    href={cmaltCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={cmaltBadge}
                        alt="CMALT — Certified Member of the Association for Learning Technology badge"
                        width={120}
                        height={120}
                    />
                </a>

                <ul>
                    <li>
                        <a
                            href={cmaltCertificate}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CMALT Certificate (May 2026)
                        </a>
                    </li>
                    <li>
                        <a
                            href={cmaltAssessmentTranscript}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CMALT Assessment Transcript (May 2026)
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
}
