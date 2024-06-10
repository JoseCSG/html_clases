"use client";
import { Character } from "@/const/types";
import StarIcon from "./icons/StarIcon";
import { useState } from "react";
import { auth } from "@/auth";

interface FavoriteProps {
  character: Character;
  color: string;
  size: string;
  className?: string;
  isFavorite: boolean;
}

const FavoriteButton = ({
  character,
  color,
  size,
  className,
  isFavorite,
}: FavoriteProps) => {
  const [isFav, setIsFav] = useState<boolean>(isFavorite);

  const toggleFavoriteAction = async () => {
    const session = await auth();
    if (!session) return;
    const userId = session.user?.id;
    const res = await fetch(
      `/api/toggle-favorite?userId=${userId}&characterId=${character.id}`,
      {
        method: "POST",
      },
    );
    const { isFavorite } = await res.json();
    setIsFav(isFavorite);
    //    if (res !== "NO SESSION" && res !== "NO USER") setIsFav(res);
  };

  /*   const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const toggleFavorite = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    const index = favorites.findIndex(
      (fav: Character) => fav.id === character.id,
    );
    if (index === -1) {
      setIsFavorite(true);
      favorites.push(character);
    } else {
      setIsFavorite(false);
      favorites.splice(index, 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavorites && setFavorites(favorites);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    const index = favorites.findIndex(
      (fav: Character) => fav.id === character.id,
    );
    if (index !== -1) {
      setIsFavorite(true);
    }
  }, [character]);
 */

  return (
    <button
      data-testid={`id-${character.id}`}
      className="h-fit self-end"
      onClick={toggleFavoriteAction}
    >
      <StarIcon color={color} size={size} className={className} fill={isFav} />
    </button>
  );
};

export default FavoriteButton;
