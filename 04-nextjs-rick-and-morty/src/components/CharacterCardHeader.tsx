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
    <div className="flex flex-col w-full pb-6 relative">
      <FavoriteButton
        character={character!}
        color="text-white"
        size="h-8 w-8"
        setFavorites={setFavorites}
        className="align-top self-end"
      />

      <Image
        src={"/Portal.png"}
        alt="Portal"
        width={250}
        height={300}
        className="mx-auto w-auto h-auto"
      />

      <Image
        src={character?.image!}
        alt={`Image from ${character?.name}`}
        className="rounded-full group-hover:scale-125 transition-all duration-1000 scale-0 self-center top-[32%] absolute"
        width={120}
        height={120}
      />
    </div>
  );
};

export default CharacterCardHeader;
