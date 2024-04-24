import CharacterCard from "@/components/CharacterCard";
import { getCharacters } from "@/services/getCharacter";

export default async function Home() {
  const characters = await getCharacters(1);
  return (
    <main className="w-full px-6 max-h-[90dvh] pt-6 overflow-y-auto grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </main>
  );
}
