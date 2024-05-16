"use client";
import { Character } from "@/const/types";
import StarIcon from "./icons/StarIcon";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface FavoriteProps {
  character: Character;
  color: string;
  size: string;
  className: string;
  setFavorites?: Dispatch<SetStateAction<Character[]>>;
}

const FavoriteButton = ({
  character,
  color,
  size,
  className,
  setFavorites,
}: FavoriteProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const toggleFavorite = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");








    

    

    const index = favorites.findIndex(
      (fav: Character) => fav.id ===      character.id,
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

  return (
                          <button className="h-fit self-end" onClick={(e) => toggleFavorite(e)}>










      <StarIcon
        color={color}
        size={size}
        className={className}
        fill={isFavorite}
      />
    </button>
  );
};

export default FavoriteButton;
