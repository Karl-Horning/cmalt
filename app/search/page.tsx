import type { Metadata } from "next";
import SearchPage from "../components/SearchPage";

export const metadata: Metadata = {
    title: "Search",
    description: "Search all pages in this portfolio.",
};

export default function page() {
    return (
        <>
            <h1>Search</h1>
            <SearchPage />
        </>
    );
}
