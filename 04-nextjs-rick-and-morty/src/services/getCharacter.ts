import { Character, MultipleCharacterResponse } from "@/const/types";

export async function getCharacters(page : number) : Promise<Character[]> {
    const response = await fetch(
         `https://rickandmortyapi.com/api/character/?page=${page}`
    )

    const allData : MultipleCharacterResponse = await response.json();
    const characters : Character[] = allData.results;
    return characters
}