import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

import { PlayerProgress } from "@entities/player-progress";
import { playerProgressCookieKey } from "@shared/lib/player-progress-cookie-key";

export async function POST(req: NextRequest) {
  const { lastQuestionId, reward, completed } = await req.json();
  const nextCookies = await cookies();
  const playerProgressCookie = nextCookies.get(playerProgressCookieKey);
  const playerProgress = playerProgressCookie?.value
    ? (JSON.parse(playerProgressCookie?.value) as PlayerProgress)
    : null;

  const res = NextResponse.json({ success: true });

  const updatedData = {
    lastQuestionId: lastQuestionId ?? playerProgress?.lastQuestionId,
    reward: reward ?? playerProgress?.reward,
    completed: completed ?? playerProgress?.completed,
  };

  res.cookies.set(playerProgressCookieKey, JSON.stringify(updatedData), {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
  });

  return res;
}
