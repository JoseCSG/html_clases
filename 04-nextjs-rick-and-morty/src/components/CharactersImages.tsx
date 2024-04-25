import { Character } from "@/const/types"
import Image from "next/image"

const CharacterImages = ({ characters }: { characters: Character[] | null }) => {
    return (
        <div className="flex flex-row w-full items-center overflow-auto gap-4 pb-4">
        {characters &&
          characters.map((character) => (
            <Image
            loading="lazy"
              key={character.id}
              src={character.image}
              alt={`Image from ${character.name}`}
              width={80}
              height={80}
              className="rounded-full"
            />
          ))}
      </div>
    )
}

export default CharacterImages