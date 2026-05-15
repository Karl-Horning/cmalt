/**
 * @fileoverview Renders a JSON-LD structured data script tag for SEO and rich
 * results.
 */

/** Props for the {@link JsonLd} component. */
interface JsonLdProps {
    /** Structured data object serialised into the script tag. */
    data: Record<string, unknown>;
}

/** Injects a `<script type="application/ld+json">` block into the document. */
export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
