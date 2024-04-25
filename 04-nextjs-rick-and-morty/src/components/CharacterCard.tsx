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
      "portalGunSound",
    ) as HTMLAudioElement;
    portalSound.play();
  };

  const stopSound = () => {
    const portalSound = document.getElementById(
      "portalGunSound",
    ) as HTMLAudioElement;
    portalSound.pause();
    portalSound.currentTime = 0;
  };

  return (
    <article
      /*       onMouseEnter={playSound}
      onMouseLeave={stopSound} */
      className="group mb-6 box-content flex h-auto flex-col items-center justify-center rounded-2xl border-green-400 p-4 transition-all duration-100 hover:scale-105 hover:border-2"
    >
      <CharacterCardHeader character={character} setFavorites={setFavorites} />
      <CharacterCardBody character={character} />
    </article>
  );
};

export default CharacterCard;
