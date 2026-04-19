import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page Not Found — Karl Horning CMALT Portfolio",
};

export default function NotFound() {
    return (
        <div className="not-found-body">
            <h1>Page not found</h1>
            <p>
                The page you&apos;re looking for doesn&apos;t exist or may have
                moved.
            </p>
            <p>
                <Link href="/">Return to the portfolio home</Link>, or use the
                navigation to find a section.
            </p>
        </div>
    );
}
