import { getEpisodes } from "@/services/getEpisodes";
import TextLabel from "./TextLabel";
import { Character } from "@/const/types";
import EpisodeCard from "./EpisodeCard";

const CharacterEpisodes = async ({ character }: { character: Character }) => {
  const episodes = await getEpisodes(character.episode);

  return (
    <section className=" col-span-3 row-span-2 flex h-full flex-col items-center pt-4 md:col-span-2 md:overflow-auto md:p-4 md:pt-0">
      <TextLabel label="Episodes" size="text-3xl mb-4" />
      <div className="grid w-full grid-flow-row grid-cols-1 place-items-center gap-y-8 overflow-auto pe-8 ps-5 md:grid-cols-2">
        {episodes &&
          episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
      </div>
    </section>
  );
};

export default CharacterEpisodes;
