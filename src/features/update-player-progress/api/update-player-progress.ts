import { PlayerProgress } from "@entities/player-progress";

const PROGRESS_PATH = `${process.env.NEXT_PUBLIC_BASE_URL}/api/progress`;

const updatePlayerProgress = async (
  playerProgress: Partial<PlayerProgress>,
) => {
  await fetch(PROGRESS_PATH, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(playerProgress),
  });
};

export { updatePlayerProgress };
