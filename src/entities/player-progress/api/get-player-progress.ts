"use server";

import { cookies } from "next/headers";

import { PlayerProgress } from "@entities/player-progress";
import { playerProgressCookieKey } from "@shared/lib/player-progress-cookie-key";

const getPlayerProgress = async () => {
  const nextCookies = await cookies();
  const playerProgressCookie = nextCookies.get(playerProgressCookieKey);

  return playerProgressCookie?.value
    ? (JSON.parse(playerProgressCookie?.value) as PlayerProgress)
    : null;
};

export { getPlayerProgress };
