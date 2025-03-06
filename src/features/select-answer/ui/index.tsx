import React, { memo, useState } from "react";

import sleep from "@shared/lib/sleep";
import AnswerButton from "@ui/AnswerButton";

import { ACTIONS_DELAY } from "../lib/actions-delay";

type SelectAnswerProps = {
  answers: { id: string; text: string }[];
  correctAnswerIds: string[];
  onCorrectAnswer: () => Promise<void>;
  onWrongAnswer: () => Promise<void>;
};

const SelectAnswer = ({
  answers,
  correctAnswerIds,
  onCorrectAnswer,
  onWrongAnswer,
}: SelectAnswerProps) => {
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const [status, setStatus] = useState<"idle" | "checking" | "result">("idle");

  const onSelectComplete = async (answerId: string) => {
    if (correctAnswerIds.includes(answerId)) {
      void onCorrectAnswer();
      return;
    }

    void onWrongAnswer();
  };

  const onAnswerSelect = async (answerId: string) => {
    if (status !== "idle") {
      return;
    }

    setSelectedId(answerId);
    setStatus("checking");

    await sleep(ACTIONS_DELAY);

    setStatus("result");

    await sleep(ACTIONS_DELAY);
    void onSelectComplete(answerId);

    setStatus("idle");
    setSelectedId(null);
  };

  return (
    <>
      {answers.map(({ id, text }) => (
        <AnswerButton
          key={id}
          isActive={id === selectedId}
          onClick={() => onAnswerSelect(id)}
          isValid={status === "result" && correctAnswerIds.includes(id)}
          isInvalid={status === "result" && !correctAnswerIds.includes(id)}
        >
          {text}
        </AnswerButton>
      ))}
    </>
  );
};

export default memo(SelectAnswer);
