import CharacterImages from "./CharactersImages";
import { getCharactersByURL } from "../services/getCharacter";
import TextLabel from "./TextLabel";
import { getSingleLocation } from "../services/getLocations";

interface LocationInformationProps {
  title: string;
  url: string;
}

const LocationInformation = async ({
  title,
  url,
}: LocationInformationProps) => {
  const location = await getSingleLocation(url);

  const locationCharacters =
    location && (await getCharactersByURL(location.residents));
  return (
    <article className="col-span-3 row-span-2 flex h-full flex-col items-center pt-4 md:col-span-1 md:p-4 md:pt-0">
      <div className="mb-4 flex w-full flex-col justify-start gap-6">
        <TextLabel label={title} text={location?.name || "Not found"} />
        <TextLabel
          label="Dimension"
          text={location?.dimension || "Not found"}
        />
        <TextLabel label="Type" text={location?.type || "Not found"} />
        <TextLabel label="Residents" />
      </div>
      <CharacterImages characters={locationCharacters} />
    </article>
  );
};

export default LocationInformation;
