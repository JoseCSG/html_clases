import { getSingleLocation } from "@/services/getLocations";
import LocationInformation from "./LocationInformation";
import { Character } from "@/const/types";
import { getEpisodes } from "@/services/getEpisodes";
import EpisodeCard from "./EpisodeCard";
import TextLabel from "./TextLabel";

const AditionalCharacterInfo = async ({
  character,
}: {
  character: Character;
}) => {
  const originLocation = await getSingleLocation(character.origin.url);
  const currLocation = await getSingleLocation(character.location.url);
  const episodes = await getEpisodes(character.episode);

  return (
    <section className="w-4/6 flex flex-col h-full items-center">
      <div className="flex flex-row w-full items-center">
        <LocationInformation location={originLocation} />
        <LocationInformation location={currLocation} />
      </div>
      <section className="w-full h-1/2 flex flex-col items-center p-4">
        <TextLabel label="Episodes" size="text-3xl mb-4" />
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 w-full items-center overflow-auto gap-4">
          {episodes &&
            episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
        </div>
      </section>
    </section>
  );
};

export default AditionalCharacterInfo;
