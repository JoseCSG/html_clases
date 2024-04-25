import { Episode } from "@/const/types";
import { getCharactersByURL } from "@/services/getCharacter";
import Image from "next/image";

interface EpisodeCardProps {
    episode: Episode;
}

const EpisodeCard = async ({ episode } : EpisodeCardProps) => {
    const charactersOnEpisode = await getCharactersByURL(episode.characters);
    return (
        <article className="w-96 flex flex-row shrink-0 h-32 rounded-lg p-4 text-white border-2 border-green-500 box-content">
            <div className="flex flex-col w-1/2">
                <p>{episode.name}</p>
                <p>{episode.episode}</p>
                <p>{episode.air_date}</p>
            </div>
            <div className="grid grid-flow-row grid-cols-3 w-1/2 overflow-auto h-full space-x-2">
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
