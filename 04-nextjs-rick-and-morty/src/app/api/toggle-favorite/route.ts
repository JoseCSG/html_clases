import { auth } from "@/auth";
import { toggleFavorite } from "@/services/favorites";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const characterId = req.nextUrl.searchParams.get("characterId");
  const session = await auth();
  const userId = session?.user?.id;
  if (!characterId || !userId) {
    return Response.json({ status: 400, message: "Missing auth" });
  }

  const res = await toggleFavorite(Number(characterId), userId);
  return Response.json({ isFavorite: res, status: 200 });
}
