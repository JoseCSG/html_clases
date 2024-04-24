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
    <main className="w-full px-6 max-h-[90dvh] pt-6 overflow-y-auto">
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 space-x-4 lg:grid-cols-4">
        {favorites.map((character, index) => (
          <CharacterCard key={index} character={character} setFavorites={setFavorites}/>
        ))}
      </div>
      <audio id="portalGunSound" src="/sounds/portalSound.mp3" />
    </main>
  );
};

export default Favorites;
