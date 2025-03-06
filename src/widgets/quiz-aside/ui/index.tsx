import { memo } from "react";

import { QuizQuestion } from "@entities/quiz-question";
import { formatCurrency } from "@shared/lib/format-currency";
import NavItem from "@ui/NavItem";

import styles from "./styles.module.css";

type QuizAsideProps = {
  isOpen: boolean;
  questions: Pick<QuizQuestion, "id" | "reward">[];
  activeQuestionId: string;
};

const QuizAside = ({ isOpen, questions, activeQuestionId }: QuizAsideProps) => {
  return (
    <div className={styles.quiz_aside} data-open={isOpen}>
      <div className={styles.quiz_aside__scroll_block}>
        {questions.map((question) => (
          <NavItem
            key={question.id}
            isActive={activeQuestionId === question.id}
          >
            {formatCurrency(question.reward, "USD")}
          </NavItem>
        ))}
      </div>
    </div>
  );
};

export default memo(QuizAside);
