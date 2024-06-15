"use server";
import db from "../db/index";
import { favorites } from "../db/schema";
import { and, eq } from "drizzle-orm";
import { getCharactersByIds } from "./getCharacter";
import { auth } from "@/auth";

export async function getFavorites() {
  const session = await auth();
  const userId = session?.user?.id as string;
  const favoritesArray = await db
    .select()
    .from(favorites)
    .where(eq(favorites.user_id, userId));
  if (favoritesArray.length === 0) {
    return [];
  }
  return await getCharactersByIds(
    favoritesArray.map((fav) => fav.character_id),
  );
}
export async function toggleFavorite(characterId: number, userId: string) {
  const isAlreadyFavorite = await db
    .select()
    .from(favorites)
    .where(
      and(
        eq(favorites.character_id, characterId),
        eq(favorites.user_id, userId),
      ),
    );

  if (isAlreadyFavorite.length > 0) {
    await db
      .delete(favorites)
      .where(
        and(
          eq(favorites.character_id, characterId),
          eq(favorites.user_id, userId),
        ),
      );
    return false;
  }

  await db
    .insert(favorites)
    .values({ character_id: characterId, user_id: userId });
  return true;
}

export async function isCharacterFavorite(characterId: number) {
  const session = await auth();
  const userId = session?.user?.id as string;
  const isAlreadyFavorite = await db
    .select()
    .from(favorites)
    .where(
      and(
        eq(favorites.character_id, characterId),
        eq(favorites.user_id, userId),
      ),
    );

  return isAlreadyFavorite.length > 0;
}
