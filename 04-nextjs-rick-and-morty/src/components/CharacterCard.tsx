"use client";
import { Character } from "@/const/types";
import Image from "next/image";
import StarIcon from "./icons/StarIcon";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { Dispatch, SetStateAction } from "react";

interface CharacterProps {
  character: Character;
  setFavorites?: Dispatch<SetStateAction<Character[]>>;
}

const CharacterCard = ({ character, setFavorites }: CharacterProps) => {
  const playSound = () => {
    const portalSound = document.getElementById(
      "portalGunSound"
    ) as HTMLAudioElement;
    portalSound.play();
  };

  const stopSound = () => {
    const portalSound = document.getElementById(
      "portalGunSound"
    ) as HTMLAudioElement;
    portalSound.pause();
    portalSound.currentTime = 0;
  };

  return (
    <article
/*       onMouseEnter={playSound}
      onMouseLeave={stopSound} */
      className="flex flex-col group p-4 items-center h-auto justify-center mb-6 hover:border-2 border-green-400 transition-all duration-100 rounded-2xl box-content hover:scale-105"
    >
      <div className="flex flex-col w-full pb-6 relative">
        <FavoriteButton
          character={character!}
          color="text-white"
          size="h-8 w-8"
          setFavorites={setFavorites}
          className="align-top self-end"
        />

        <Image src={"/Portal.png"} alt="Portal" width={250} height={300} className="mx-auto w-auto h-auto" />

        <Image
          src={character?.image!}
          alt={`Image from ${character?.name}`}
          className="rounded-full group-hover:scale-125 transition-all duration-1000 scale-0 self-center top-[32%] absolute"
          width={120}
          height={120}
        />
      </div>
      <div className="p-2 text-base text-thin grid grid-flow-row gap-x-6 grid-cols-2 text-white">
        <p className="col-span-2 first-letter:text-green-500 truncate group-hover:text-pretty">
          <strong>Name: </strong> {character?.name} {" - "} {character?.status}
        </p>
        <p className="first-letter:text-green-500 truncate group-hover:text-pretty">
          <strong>Gender: </strong>
          {character?.gender}
        </p>
        <p className="first-letter:text-green-500 truncate group-hover:text-pretty">
          <strong>Species: </strong>
          {character?.species}
        </p>
        <p className="col-span-2 first-letter:text-green-500 truncate group-hover:text-pretty">
          <strong>Location: </strong> {character?.location.name}
        </p>
      </div>
      <Link href={`/character/${character?.id}`}>
        <button className="bg-green-600 text-white p-2 rounded-md hover:ring-2 hover:ring-green-700 hover:bg-green-700 transition-all duration-100">
          Ver más
        </button>
      </Link>
    </article>
  );
};

export default CharacterCard;
