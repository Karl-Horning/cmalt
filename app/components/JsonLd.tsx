/**
 * @fileoverview JSON-LD structured data component for the CMALT portfolio.
 */

/** Props for the {@link JsonLd} component. */
interface JsonLdProps {
    /** A Schema.org JSON-LD data object to serialise into the page. */
    data: Record<string, unknown>;
}

/**
 * Renders a `<script type="application/ld+json">` tag containing serialised
 * structured data for search engine consumption.
 *
 * @param props - Component props.
 * @param props.data - The JSON-LD data object to embed.
 * @returns The rendered script element.
 */
export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
