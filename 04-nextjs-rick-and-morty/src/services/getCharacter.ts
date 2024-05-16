import { Character, MultipleCharacterResponse } from "@/const/types";

export async function getCharacters(page: number): Promise<Character[]> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`,
  );

  const allData: MultipleCharacterResponse = await response.json();
  const characters: Character[] = allData.results;
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
