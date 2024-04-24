import { Episode } from "@/const/types";

export async function getEpisode(id: number) {
    const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${id}`
    )

    const episode : Episode = await response.json();
    return episode
}

export async function getEpisodes(ids: number[]) {
    const url = `https://rickandmortyapi.com/api/episode/${ids
        .map((id) => id)
        .join(",")}`;
    const response = await fetch(url);

    const episodes: Episode[] = await response.json();
    return episodes;
}