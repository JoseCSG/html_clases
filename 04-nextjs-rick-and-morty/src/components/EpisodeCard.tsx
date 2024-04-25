import { Episode } from "@/const/types";
import { getCharactersByURL } from "@/services/getCharacter";
import Image from "next/image";

interface EpisodeCardProps {
    episode: Episode;
}

const EpisodeCard = async ({ episode } : EpisodeCardProps) => {
    const charactersOnEpisode = await getCharactersByURL(episode.characters);
    return (
        <article className="md:w-96 w-fit flex flex-col md:flex-row shrink-0 md:h-32 h-40 rounded-lg p-4 text-white border-2 border-green-500 box-content">
            <div className="flex flex-col md:w-1/2">
                <p>{episode.name}</p>
                <p>{episode.episode}</p>
                <p>{episode.air_date}</p>
            </div>
            <div className="grid grid-flow-row grid-cols-3 md:w-1/2 pt-2 md:pt-0 overflow-auto h-full space-x-2">
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
    )
}

export default EpisodeCard;
