"use client";
import { Character } from "@/const/types";
import StarIcon from "./icons/StarIcon";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const toggleFavoriteAction = async () => {
    const res = await fetch(
      `/api/toggle-favorite?characterId=${character.id}`,
      {
        method: "POST",
      },
    );
    const { isFavorite, message } = await res.json();
    if (message) {
      toast.error("You need to be logged in to add favorites");
      return;
    }

    setIsFav(isFavorite);
    toast.success(isFavorite ? "Added to favorites" : "Removed from favorites");
    router.refresh();
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
