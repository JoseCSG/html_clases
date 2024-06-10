import { Character } from "@/const/types";
import CharacterCard from "./CharacterCard";

interface CharactersGridProps {
  initialData: Character[];
}

const CharactersGrid = ({ initialData }: CharactersGridProps) => {
  const data = initialData;
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="grid grid-flow-row grid-cols-1 space-x-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>

      {/*       <span ref={ref} data-testid="loader">
        <Loader />
      </span> */}
    </section>
  );
};

export default CharactersGrid;
