"use client";

import { useMemo } from "react";

import { QuizList } from "@entities/quiz-question";

const useSidebarDataSelectors = (quizData: QuizList) => {
  return useMemo(
    () =>
      quizData.order.map((id) => ({
        id,
        reward: quizData.questions[id].reward,
      })),
    [quizData],
  );
};

export default useSidebarDataSelectors;
