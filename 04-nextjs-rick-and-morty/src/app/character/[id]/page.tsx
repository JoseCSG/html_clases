import CharacterCard from "@/components/CharacterCard"
import { getSingleCharacter } from "@/services/getCharacter"
import Image from "next/image"

const CharacterPage = async ( {params}: { params: {id: string}} ) => {
    const character = await getSingleCharacter(parseInt(params.id))
    return (
        <main className="w-screen h-[90dvh] p-5 flex flex-row items-center">
            <section className="w-2/5 flex flex-col h-full items-center justify-start gap-4">
                <Image src={character.image} alt={`Image from ${character.name}`} width={350} height={350} className="self-center rounded-full" />
                <p className="text-3xl text-white"><strong>Nombre: </strong>{character.name}</p>
            </section>
        </main>
    )
}

export default CharacterPage