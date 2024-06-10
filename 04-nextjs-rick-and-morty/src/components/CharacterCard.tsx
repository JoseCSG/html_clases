import { Character } from "@/const/types";
import CharacterCardHeader from "./CharacterCardHeader";
import CharacterCardBody from "./CharacterCardBody";

interface CharacterProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <article
      data-testid="character-card"
      className="group mb-6 box-content flex h-auto flex-col items-center justify-center rounded-2xl border-green-400 p-4 transition-all duration-100 hover:scale-105 hover:border-2"
    >
      <CharacterCardHeader character={character} />
      <CharacterCardBody character={character} />
    </article>
  );
};

export default CharacterCard;
