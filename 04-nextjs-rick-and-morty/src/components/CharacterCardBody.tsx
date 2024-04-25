import { Character } from "@/const/types";
import TextLabel from "./TextLabel";
import Link from "next/link";

interface CharacterCardBodyProps {
  character: Character;
}

const CharacterCardBody = ({ character }: CharacterCardBodyProps) => {
  return (
    <>
      <div className="p-2 text-base text-thin grid grid-flow-row gap-x-6 grid-cols-2 text-white">
        <TextLabel
          label="Name"
          text={character?.name}
          secondText={character?.status}
          size="truncate group-hover:text-pretty col-span-2"
        />
        <TextLabel
          label="Gender"
          text={character?.gender}
          size="truncate group-hover:text-pretty"
        />
        <TextLabel
          label="Species"
          text={character?.species}
          size="truncate group-hover:text-pretty"
        />

        <TextLabel
          label="Location"
          text={character?.location.name}
          size="truncate group-hover:text-pretty col-span-2"
        />
      </div>
      <Link href={`/character/${character?.id}`}>
        <button className="bg-green-600 text-white p-2 rounded-md hover:ring-2 hover:ring-green-700 hover:bg-green-700 transition-all duration-100">
          Ver más
        </button>
      </Link>
    </>
  );
};

export default CharacterCardBody;
