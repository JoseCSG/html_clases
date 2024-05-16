import { Character } from "@/const/types";
import Image from "next/image";
import TextLabel from "./TextLabel";

interface CharacterBannerProps {
  character: Character;
}

const CharacterBanner = ({ character }: CharacterBannerProps) => {
  const characterStatus =
    character.status === "Alive"
      ? "bg-green-500"
      : character.status === "Dead"
        ? "bg-red-500"
        : "bg-yellow-500";
  return (
    <section className="col-span-3 row-span-4 flex h-full flex-col items-center justify-center gap-2 md:col-span-1">
      <Image
        src={character.image}
        alt={`Image from ${character.name}`}
        width={350}
        height={350}
        className="mx-auto mb-6 self-center rounded-full"
      />
      <div className={`relative flex w-full flex-row items-center`}>
        <TextLabel
          label="Name"
          text={character.name}
          secondText={character.status}
          size="text-3xl"
        />
        <div
          className={`ml-5 aspect-square h-5 w-5 rounded-full ${characterStatus}`}
        />
      </div>
      <TextLabel label="Gender" text={character.gender} size="text-3xl" />
      <TextLabel label="Species" text={character.species} size="text-3xl" />
    </section>
  );
};

export default CharacterBanner;
