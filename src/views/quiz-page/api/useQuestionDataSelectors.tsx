"use client";

import { useMemo } from "react";

import { QuizList } from "@entities/quiz-question";

const useQuestionDataSelectors = (
  activeQuestionId: string,
  quizData: QuizList,
) => {
  const nextQuestionId = useMemo<string | null>(
    () => quizData.order[quizData.order.indexOf(activeQuestionId) + 1] ?? null,
    [activeQuestionId, quizData.order],
  );

  const activeQuestion = useMemo(
    () => quizData.questions[activeQuestionId],
    [activeQuestionId, quizData.questions],
  );

  return { nextQuestionId, activeQuestion };
};

export default useQuestionDataSelectors;
