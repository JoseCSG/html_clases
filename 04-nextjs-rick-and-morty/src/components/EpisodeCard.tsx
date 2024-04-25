import { Episode } from "@/const/types";
import { getCharactersByURL } from "@/services/getCharacter";
import Image from "next/image";

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard = async ({ episode }: EpisodeCardProps) => {
  const charactersOnEpisode = await getCharactersByURL(episode.characters);
  return (
    <article className="box-content flex h-32 w-full flex-row rounded-lg border-2 border-green-500 p-4 text-white md:w-11/12">
      <div className="flex w-1/2 flex-col">
        <p>{episode.name}</p>
        <p>{episode.episode}</p>
        <p>{episode.air_date}</p>
      </div>
      <div className="grid h-full w-1/2 grid-flow-row grid-cols-3 place-items-center gap-x-2 gap-y-4 overflow-auto pt-2 md:pt-0">
        {charactersOnEpisode.map((character) => (
          <Image
            key={character.id}
            src={character.image}
            alt={`Image from ${character.name}`}
            width={50}
            height={50}
            className="rounded-full"
          />
        ))}
      </div>
    </article>
  );
};

export default EpisodeCard;
