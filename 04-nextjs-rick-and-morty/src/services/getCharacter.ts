import { Character, MultipleCharacterResponse } from "@/const/types";

export async function getCharacters(): Promise<Character[]> {
  const numberOfPages = 5;
  const characters: Character[] = [];
  for (let page = 1; page <= numberOfPages; page++) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    );
    const data: MultipleCharacterResponse = await response.json();
    characters.push(...data.results);
  }

  return characters;
}

export async function getCharactersByIds(ids: number[]): Promise<Character[]> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${ids.join(",")}`,
  );

  let characters: Character[];
  const responseBody = await response.json();
  if (Array.isArray(responseBody)) characters = responseBody;
  else characters = [responseBody];

  return characters;
}

export async function getCharactersByURL(urls: string[]): Promise<Character[]> {
  const characters: Character[] = [];
  for (const url of urls) {
    const response = await fetch(url);
    const character: Character = await response.json();
    characters.push(character);
  }

  return characters;
}

export async function getCharacterByURL(url: string): Promise<Character> {
  const response = await fetch(url);

  const character: Character = await response.json();
  return character;
}

export async function getSingleCharacter(id: number): Promise<Character> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );

  const character: Character = await response.json();
  return character;
}
