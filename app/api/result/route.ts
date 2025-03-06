import { NextResponse } from "next/server";
import { PlayerProgress } from "@entities/player-progress";
import { playerProgressCookieKey } from "@shared/lib/player-progress-cookie-key";
import { cookies } from "next/headers";

export async function GET() {
  const nextCookies = await cookies();
  const playerProgressCookie = nextCookies.get(playerProgressCookieKey);
  const playerProgress = playerProgressCookie?.value
    ? (JSON.parse(playerProgressCookie?.value) as PlayerProgress)
    : null;

  return NextResponse.json({ reward: playerProgress });
}
