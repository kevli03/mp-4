import { ResultPage } from "../result/page";
import { ArtworkProps } from "../types";
import { useEffect, useState } from "react";

export default function GetArtworks(keyword: string) {
    const MUSEUM_API_KEY = process.env.MUSEUM_API_KEY;
    const [artworks, setArtworks] = useState<ArtworkProps[] | null>(null);

    useEffect(() => {
        async function getArtworks(): Promise<void> {
            const res = await fetch(`https://api.harvardartmuseums.org/object?apikey=${MUSEUM_API_KEY}&keyword=${keyword}`);
            const {records} = await res.json();
            console.log(records);
            setArtworks(records);
        }
        try {
            getArtworks();
        } catch (e) {
            console.error(e);
        }
    });

    if (!artworks) return <p>No results found</p>;

    return (
        <div>
            <ResultPage keyword={keyword} props={artworks}/>
        </div>
    );
}
