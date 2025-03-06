"use client";

import React, { useState } from "react";

import Header from "@/views/quiz-page/ui/Header";
import { QuizDisplay } from "@widgets/quiz-display";
import { QuizAside } from "@widgets/quiz-aside";
import { QuizList } from "@entities/quiz-question";
import SelectAnswer from "@features/select-answer";
import { updatePlayerProgress } from "@features/update-player-progress";
import BurgerButton from "@ui/BurgerButton";

import useSidebarDataSelectors from "../api/useSidebarDataSelectors";
import useQuestionDataSelectors from "../api/useQuestionDataSelectors";
import useQuizHandlers from "../lib/useQuizHandlers";

import styles from "./styles.module.css";

type QuizPageProps = {
  quizData: QuizList;
};

const QuizPage = ({ quizData }: QuizPageProps) => {
  const sidebarData = useSidebarDataSelectors(quizData);
  const [activeQuestionId, setActiveQuestionId] = useState<string>("q1");

  const { nextQuestionId, activeQuestion } = useQuestionDataSelectors(
    activeQuestionId,
    quizData,
  );

  const { onCorrectAnswer, onWrongAnswer } = useQuizHandlers({
    updatePlayerProgress,
    setActiveQuestionId,
  });

  const [isAsideActive, setIsAsideActive] = useState(false);

  return (
    <div className={styles.page_container}>
      <Header>
        <BurgerButton
          onClick={() => setIsAsideActive(!isAsideActive)}
          isActive={isAsideActive}
        />
      </Header>
      <QuizDisplay title={activeQuestion.title}>
        <SelectAnswer
          answers={activeQuestion.answers}
          correctAnswerIds={activeQuestion.correctAnswerIds}
          onCorrectAnswer={() =>
            onCorrectAnswer({
              lastQuestionId: activeQuestion.id,
              nextQuestionId,
              reward: activeQuestion.reward,
            })
          }
          onWrongAnswer={onWrongAnswer}
        />
      </QuizDisplay>
      <QuizAside
        isOpen={isAsideActive}
        questions={sidebarData}
        activeQuestionId={activeQuestionId}
      />
    </div>
  );
};

export default QuizPage;
