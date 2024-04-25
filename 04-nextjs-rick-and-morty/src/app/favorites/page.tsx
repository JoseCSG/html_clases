"use client";

import CharacterCard from "@/components/CharacterCard";
import { Character } from "@/const/types";
import { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Character[]>([]);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favorites);
  }, []);

  return (
    <main className="max-h-[90dvh] w-full overflow-y-auto px-6 pt-6">
      <p className="mb-6 text-center text-3xl font-bold text-white">
        Favorites
      </p>
      <div className="grid grid-flow-row grid-cols-1 space-x-4 md:grid-cols-2 lg:grid-cols-4">
        {favorites.map((character, index) => (
          <CharacterCard
            key={index}
            character={character}
            setFavorites={setFavorites}
          />
        ))}
      </div>
      <audio id="portalGunSound" src="/sounds/portalSound.mp3" />
    </main>
  );
};

export default Favorites;
