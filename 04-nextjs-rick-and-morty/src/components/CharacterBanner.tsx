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
    <section className="w-2/6 flex flex-col h-full items-center justify-start gap-2">
      <Image
        src={character.image}
        alt={`Image from ${character.name}`}
        width={350}
        height={350}
        className="self-center rounded-full mb-6"
      />
      <div className="flex flex-row w-full items-center">
        <TextLabel
          label="Name"
          text={character.name}
          secondText={character.status}
          size="text-3xl"
        />
        <div className={`w-5 h-5 ml-5 rounded-full ${characterStatus}`} />
      </div>
      <TextLabel label="Gender" text={character.gender} size="text-3xl" />
      <TextLabel label="Species" text={character.species} size="text-3xl" />
    </section>
  );
};

export default CharacterBanner;
