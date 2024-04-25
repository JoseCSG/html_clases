"use client";
import { Character } from "@/const/types";
import Image from "next/image";
import StarIcon from "./icons/StarIcon";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { Dispatch, SetStateAction } from "react";
import TextLabel from "./TextLabel";
import CharacterCardHeader from "./CharacterCardHeader";
import CharacterCardBody from "./CharacterCardBody";

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
      <CharacterCardHeader character={character} setFavorites={setFavorites} />
      <CharacterCardBody character={character} />
    </article>
  );
};

export default CharacterCard;
