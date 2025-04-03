"use client";
import getArtworks from "../lib/getArtworks";
import { Textarea } from "@mui/joy";
import { Button, FormHelperText } from "@mui/material";
import { useState } from "react";

export default function NewPostForm({search}: { search: (post: PostProps) => void }) {
    const [keyword, setKeyword] = useState("");

    return (
        <form
            className="w-96 rounded-x1 p-4 bg-sky-400"
            onSubmit={async (event) => {
                event.preventDefault();
                getArtworks(keyword)
                    .then((newPost) => append(newPost))
                    .catch((err) => console.error(err));
            }}
        >
            <Textarea
                sx={{ padding: "0.5rem", height: "30px", width: "100%", borderRadius: 0 }}
                variant="soft"
                placeholder="Enter keyword here"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <FormHelperText>What&apos;s on your mind?</FormHelperText>
            <div className="w-full flex justify-center">
                <Button
                    sx={{ width: "80px" }}
                    variant="contained"
                    type="submit"
                    disabled={keyword === ""}
                >
                    Search
                </Button>
            </div>
        </form>
    );
}
