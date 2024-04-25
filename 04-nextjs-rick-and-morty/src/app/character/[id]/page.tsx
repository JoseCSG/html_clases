import EpisodeCard from "@/components/EpisodeCard";
import {
  getCharactersByURL,
  getSingleCharacter,
} from "@/services/getCharacter";
import { getEpisodes } from "@/services/getEpisodes";
import { getSingleLocation } from "@/services/getLocations";
import Image from "next/image";

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const character = await getSingleCharacter(parseInt(params.id));
  const originLocation = await getSingleLocation(character.origin.url);
  const currLocation = await getSingleLocation(character.location.url);
  const originLocationCharacters =
    originLocation && (await getCharactersByURL(originLocation.residents));
  const currLocationCharacters =
    currLocation && (await getCharactersByURL(currLocation.residents));
  
  const episodes = await getEpisodes(character.episode)

  const characterStatus =
    character.status === "Alive"
      ? "bg-green-500"
      : character.status === "Dead"
      ? "bg-red-500"
      : "bg-yellow-500";
  return (
    <main className="w-screen h-[90dvh] p-5 flex flex-row items-center">
      <section className="w-2/6 flex flex-col h-full items-center justify-start gap-2">
        <Image
          src={character.image}
          alt={`Image from ${character.name}`}
          width={350}
          height={350}
          className="self-center rounded-full mb-6"
        />
        <div className="flex flex-row w-full items-center justify-start">
          <p className="text-3xl text-white first-letter:text-green-500">
            <strong>Name: </strong>
            {character.name} {" - "} {character.status}
          </p>
          <div className={`w-5 h-5 ml-5 rounded-full ${characterStatus}`} />
        </div>
        <p className="text-3xl first-letter:text-green-500 text-white self-start">
          <strong>Gender: </strong>
          {character.gender}
        </p>
        <p className="text-3xl first-letter:text-green-500 text-white self-start">
          <strong>Species: </strong>
          {character.species}
        </p>
      </section>
      <section className="w-4/6 flex flex-col h-full items-center">
        <div className="flex flex-row w-full items-center">
          <article className="w-1/2 h-full flex flex-col items-center p-4">
            <div className="flex flex-col gap-6 justify-start w-full mb-4">
              <p className="text-xl first-letter:text-green-500 text-white self-start text-pretty">
                <strong>Origin: </strong>
                {character.origin.name}
              </p>
              <p className="text-lg first-letter:text-green-500 text-white self-start">
                <strong>Dimension: </strong>
                {originLocation && originLocation.dimension}
              </p>
              <p className="text-lg first-letter:text-green-500 text-white self-start">
                <strong>Type: </strong>
                {originLocation && originLocation.type}
              </p>
              <p className="text-lg first-letter:text-green-500 text-white self-start">
                <strong>Residents: </strong>
              </p>
            </div>
            <div className="flex flex-row w-full items-center overflow-auto gap-4">
              {originLocationCharacters &&
                originLocationCharacters.map((character) => (
                  <Image
                    key={character.id}
                    src={character.image}
                    alt={`Image from ${character.name}`}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                ))}
            </div>
          </article>
          <article className="w-1/2 h-full flex flex-col items-center p-4">
            <div className="flex flex-col gap-6 justify-start w-full mb-4">
              <p className="text-xl first-letter:text-green-500 text-white self-start text-pretty">
                <strong>Current location: </strong>
                {character.location.name}
              </p>
              <p className="text-lg first-letter:text-green-500 text-white self-start">
                <strong>Dimension: </strong>
                {currLocation && currLocation.dimension}
              </p>
              <p className="text-lg first-letter:text-green-500 text-white self-start">
                <strong>Type: </strong>
                {currLocation && currLocation.type}
              </p>
              <p className="text-lg first-letter:text-green-500 text-white self-start">
                <strong>Residents: </strong>
              </p>
            </div>
            <div className="flex flex-row w-full items-center overflow-auto gap-4">
              {currLocationCharacters &&
                currLocationCharacters.map((character) => (
                  <Image
                    key={character.id}
                    src={character.image}
                    alt={`Image from ${character.name}`}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                ))}
            </div>
          </article>
        </div>
        <section className="w-full h-1/2 flex flex-col items-center p-4">
          <p className="text-3xl first-letter:text-green-500 mb-6 text-white self-start">
            <strong>Episodes: </strong>
          </p>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 w-full items-center overflow-auto gap-4">
            {episodes &&
              episodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))
            }
          </div>
        </section>
      </section>
    </main>
  );
};

export default CharacterPage;
