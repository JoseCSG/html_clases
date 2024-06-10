import { toggleFavorite } from "@/services/favorites";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");
  const characterId = req.nextUrl.searchParams.get("characterId");
  if (!userId || !characterId) {
    return new Response("Missing userId or characterId", { status: 400 });
  }

  const res = await toggleFavorite(Number(characterId), userId);
  return Response.json({ isFavorite: res, status: 200 });
}
