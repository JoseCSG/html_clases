import CharacterBanner from "@/components/CharacterBanner";
import CharacterEpisodes from "@/components/CharacterEpisodes";
import LocationInformation from "@/components/LocationInformation";

import { getSingleCharacter } from "@/services/getCharacter";
const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const character = await getSingleCharacter(parseInt(params.id));

  return (
    <main className="grid h-[90dvh] w-screen grid-cols-3 items-center overflow-auto p-5 md:overflow-hidden">
      <CharacterBanner character={character} />
      <LocationInformation title="Origin" url={character.origin.url} />
      <LocationInformation title="Location" url={character.location.url} />

      <CharacterEpisodes character={character} />
    </main>
  );
};

export default CharacterPage;
