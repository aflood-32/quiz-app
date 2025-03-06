import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { PlayerProgress } from "@entities/player-progress";

type OnCorrectAnswerParams = {
  nextQuestionId: string | null;
  lastQuestionId: string;
  reward: string;
};

type UseQuizHandlersProps = {
  updatePlayerProgress: (
    playerProgress: Partial<PlayerProgress>,
  ) => Promise<void>;
  setActiveQuestionId: (setActiveQuestionId: string) => void;
};

const useQuizHandlers = ({
  updatePlayerProgress,
  setActiveQuestionId,
}: UseQuizHandlersProps) => {
  const { push, refresh, replace } = useRouter();

  const onWrongAnswer = useCallback(async () => {
    await updatePlayerProgress({ completed: true });

    push("/result");
  }, [push, updatePlayerProgress]);

  const onCorrectAnswer = useCallback(
    async ({
      lastQuestionId,
      nextQuestionId,
      reward,
    }: OnCorrectAnswerParams) => {
      if (!nextQuestionId) {
        await updatePlayerProgress({ lastQuestionId, reward, completed: true });

        replace("/result");
        // to sync cookies value
        refresh();
        return;
      }

      await updatePlayerProgress({ lastQuestionId, reward });
      setActiveQuestionId(nextQuestionId);
    },
    [setActiveQuestionId, push, updatePlayerProgress],
  );

  return { onCorrectAnswer, onWrongAnswer };
};

export default useQuizHandlers;
