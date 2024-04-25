import { Character, Location } from "@/const/types";
import CharacterImages from "./CharactersImages";
import { getCharactersByURL } from "@/services/getCharacter";
import TextLabel from "./TextLabel";

interface LocationInformationProps {
  location: Location | null;
}

const LocationInformation = async ({ location }: LocationInformationProps) => {
  const locationCharacters =
    location && (await getCharactersByURL(location.residents));
  return (
    <article className="w-1/2 h-full flex flex-col items-center p-4">
      <div className="flex flex-col gap-6 justify-start w-full mb-4">
        <TextLabel label="Origin" text={location?.name || "Not found"} />
        <TextLabel label="Dimension" text={location?.dimension || "Not found"} />
        <TextLabel label="Type" text={location?.type || "Not found"} />
        <TextLabel label="Residents" />
      </div>
      <CharacterImages characters={locationCharacters} />
    </article>
  );
};

export default LocationInformation;
