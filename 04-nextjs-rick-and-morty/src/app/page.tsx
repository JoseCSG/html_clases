import CharacterCard from "@/components/CharacterCard";
import CharactersGrid from "@/components/CharactersGrid";
import { getCharacters } from "@/services/getCharacter";

export default async function Home() {
  const characters = await getCharacters(1);
  return (
    <main className="w-full px-6 max-h-[90dvh] pt-6 overflow-y-auto">
      <CharactersGrid initialData={characters} />
{/*       <audio id="portalGunSound" src="/sounds/portalSound.mp3" /> */}
    </main>
  );
}
