import { Character } from "@/const/types";
import { Dispatch, SetStateAction } from "react";
import FavoriteButton from "./FavoriteButton";
import Image from "next/image";

interface CharacterCardHeaderProps {
  character: Character;
  setFavorites?: Dispatch<SetStateAction<Character[]>>;
}

const CharacterCardHeader = ({
  character,
  setFavorites,
}: CharacterCardHeaderProps) => {
  return (
    <div className="relative flex w-full flex-col pb-6">
      <FavoriteButton
        character={character!}
        color="text-white"
        size="h-8 w-8"
        setFavorites={setFavorites}
        className="self-end align-top"
      />

      <Image
        src={"/Portal.png"}
        alt="Portal"
        width={250}
        height={300}
        className="mx-auto h-auto w-auto"
      />

      <Image
        src={character?.image!}
        alt={`Image from ${character?.name}`}
        className="absolute top-[32%] scale-0 self-center rounded-full transition-all duration-1000 group-hover:scale-125"
        width={120}
        height={120}
      />
    </div>
  );
};

export default CharacterCardHeader;
