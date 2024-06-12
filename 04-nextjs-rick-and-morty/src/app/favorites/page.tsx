import CharacterCard from "@/components/CharacterCard";
import { getFavorites } from "../../services/favorites";
import { auth } from "@/auth";
import Link from "next/link";

const Favorites = async () => {
  const favorites = await getFavorites();
  const session = await auth();
  return (
    <main className="flex h-full w-full flex-col overflow-y-auto px-6 pt-6">
      <p className="mb-6 text-center text-3xl font-bold text-white">
        Favorites
      </p>
      {!session && (
        <div className="flex h-4/6 w-full flex-col items-center justify-center text-white">
          <p className="w-[50ch] text-center text-xl font-medium">
            You need to be signed in to see your favorites.{" "}
            <Link
              href="login"
              className="font-bold text-green-500 hover:underline"
            >
              Sign in
            </Link>{" "}
            to see your favorite characters.
          </p>
        </div>
      )}
      {session && favorites.length === 0 && (
        <div className="flex h-4/6 w-full flex-col items-center justify-center text-white">
          <p className="w-[50ch] text-center text-xl font-medium">
            You don&apos;t have any favorites yet. Add some characters to your
            favorites by clicking the heart icon on the character card.
          </p>
        </div>
      )}
      <div className="grid grid-flow-row grid-cols-1 space-x-4 md:grid-cols-2 lg:grid-cols-4">
        {session &&
          favorites &&
          favorites.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
      </div>
    </main>
  );
};

export default Favorites;
