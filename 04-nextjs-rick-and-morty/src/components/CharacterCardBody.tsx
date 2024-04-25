import { Character } from "@/const/types";
import TextLabel from "./TextLabel";
import Link from "next/link";

interface CharacterCardBodyProps {
  character: Character;
}

const CharacterCardBody = ({ character }: CharacterCardBodyProps) => {
  return (
    <>
      <div className="text-thin grid grid-flow-row grid-cols-2 gap-x-6 p-2 text-base text-white">
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
        <button className="rounded-md bg-green-600 p-2 text-white transition-all duration-100 hover:bg-green-700 hover:ring-2 hover:ring-green-700">
          Ver más
        </button>
      </Link>
    </>
  );
};

export default CharacterCardBody;
