import { Character } from "@/const/types";
import Image from "next/image";
import StarIcon from "./icons/StarIcon";

interface CharacterProps {
  character?: Character;
}

const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <article className="flex flex-col p-4 items-center h-auto justify-center mb-6 hover:border-2 border-green-400 transition-all duration-100 rounded-2xl box-content hover:scale-105">
      <div className="flex flex-col w-full bg-portal pb-6">
        <StarIcon
          color="text-white"
          size="h-7 w-7"
          className="align-top self-end"
        />
        <Image
          src={character?.image!}
          alt={`Image from ${character?.name}`}
          className="rounded-full mx-auto"
          width={100}
          height={100}
        />
      </div>
      <div className="p-2 text-base text-thin grid grid-flow-row gap-x-6 grid-cols-2 text-white">
        <p>
          <strong>Name: </strong> {character?.name}
        </p>
        <p>
          <strong>Status: </strong> {character?.status}
        </p>
        <p>
          <strong>Gender: </strong>
          {character?.gender}
        </p>
        <p>
          <strong>Species: </strong>
          {character?.species}
        </p>
      </div>
    </article>
  );
};

export default CharacterCard;
