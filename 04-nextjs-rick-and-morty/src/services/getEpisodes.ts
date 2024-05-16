import { Episode } from "@/const/types";

export async function getEpisode(id: number) {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);

  const episode: Episode = await response.json();
  return episode;
}

export async function getEpisodes(urls: string[]): Promise<Episode[]> {
  const characters: Episode[] = [];
  for (const url of urls) {
    const response = await fetch(url);
    const character: Episode = await response.json();
    characters.push(character);
  }

  return characters;
}
