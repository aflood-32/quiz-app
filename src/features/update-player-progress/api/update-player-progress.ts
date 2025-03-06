import { PlayerProgress } from "@entities/player-progress";
import { PROGRESS_PATH } from "../lib/progress-path";

const updatePlayerProgress = async (
  playerProgress: Partial<PlayerProgress>,
) => {
  fetch(PROGRESS_PATH, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(playerProgress),
  });
};

export { updatePlayerProgress };
