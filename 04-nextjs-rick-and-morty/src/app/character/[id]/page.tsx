import AditionalCharacterInfo from "@/components/AditionalCharacterInfo";
import CharacterBanner from "@/components/CharacterBanner";

import {
  getSingleCharacter,
} from "@/services/getCharacter";
const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const character = await getSingleCharacter(parseInt(params.id));
  
  return (
    <main className="w-screen h-[90dvh] p-5 flex flex-row items-center">
      <CharacterBanner character={character} />
      <AditionalCharacterInfo character={character}/>
    </main>
  );
};

export default CharacterPage;
