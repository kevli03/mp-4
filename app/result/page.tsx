import { ArtworkProps } from "../types";

export default function ResultPage(keyword: string, props: { artworks: ArtworkProps[] }) {
    document.title = `/${keyword}`;

    return (
        <div className="flex flex-col justify-center items-center bg-red-300 p-2">
            {
                props.artworks.map((artwork: ArtworkProps) =>
                    <div className="flex flex-col justify-center items-center">
                        <h1>{artwork.title}</h1>
                        <p>{artwork.dated}</p>
                    </div>
                )
            }
        </div>
    );
}
