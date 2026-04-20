/**
 * @fileoverview Single source of truth for portfolio navigation structure and routes.
 */

/** A standalone nav entry rendered above the grouped sections. */
export interface StandaloneItem {
    type: "standalone";
    href: string;
    label: string;
}

/** A grouped nav section containing one or more child links. */
export interface GroupItem {
    type: "group";
    label: string;
    items: { href: string; label: string }[];
}

/** All portfolio sections in display order, grouped to reflect CMALT structure. */
export const navStructure: (StandaloneItem | GroupItem)[] = [
    {
        type: "group",
        label: "CMALT Portfolio",
        items: [{ href: "/contextual-statement", label: "Contextual Statement" }],
    },
    {
        type: "group",
        label: "Section 1: Operational Issues",
        items: [
            { href: "/technology-constraints", label: "Technology Constraints" },
            { href: "/technical-knowledge", label: "Technical Knowledge" },
            { href: "/technology-deployment", label: "Technology Deployment" },
        ],
    },
    {
        type: "group",
        label: "Section 2: Teaching & Learning",
        items: [
            { href: "/teaching-and-learning", label: "Teaching & Learning" },
            { href: "/target-learners", label: "Target Learners" },
        ],
    },
    {
        type: "group",
        label: "Section 3: Wider Context",
        items: [
            { href: "/legislation", label: "Legislation" },
            { href: "/policies-and-standards", label: "Policies & Standards" },
        ],
    },
    {
        type: "group",
        label: "Section 4: Communication",
        items: [{ href: "/communication", label: "Communication" }],
    },
    {
        type: "group",
        label: "Section 5: Specialist Area",
        items: [
            {
                href: "/javascript-development",
                label: "JavaScript Development",
            },
        ],
    },
    {
        type: "group",
        label: "Section 6: Professional Development",
        items: [
            { href: "/future-plans", label: "Future Plans" },
            { href: "/declaration", label: "Declaration" },
        ],
    },
];

/** Flat list of all routes, including the home page. Used by tests. */
export const routes = [
    "/",
    ...navStructure.flatMap((item) =>
        item.type === "standalone"
            ? [item.href]
            : item.items.map((i) => i.href)
    ),
];
