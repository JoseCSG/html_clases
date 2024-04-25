import CharactersGrid from "@/components/CharactersGrid";
import { getCharacters } from "@/services/getCharacter";

export default async function Home() {
  const characters = await getCharacters(1);
  return (
    <main className="max-h-[90dvh] w-full overflow-y-auto px-6 pt-6">
      <CharactersGrid initialData={characters} />
      {/*       <audio id="portalGunSound" src="/sounds/portalSound.mp3" /> */}
    </main>
  );
}
