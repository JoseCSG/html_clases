import { Character } from "@/const/types";
import FavoriteButton from "./FavoriteButton";
import Image from "next/image";
import { isCharacterFavorite } from "../services/favorites";

interface CharacterCardHeaderProps {
  character: Character;
}

const CharacterCardHeader = async ({ character }: CharacterCardHeaderProps) => {
  const isFavorite = await isCharacterFavorite(character.id);

  return (
    <div className="relative flex w-full flex-col pb-6">
      <FavoriteButton
        character={character}
        color="text-white"
        size="h-8 w-8"
        className="self-end align-top"
        isFavorite={isFavorite}
      />

      <Image
        src={"/Portal.png"}
        alt="Portal"
        width={250}
        height={300}
        priority
        className="mx-auto h-auto w-auto"
      />

      <Image
        src={character?.image || ""}
        alt={`Image from ${character?.name}`}
        className="absolute top-[32%] scale-0 self-center rounded-full transition-all duration-1000 group-hover:scale-125"
        width={120}
        height={120}
      />
    </div>
  );
};

export default CharacterCardHeader;
