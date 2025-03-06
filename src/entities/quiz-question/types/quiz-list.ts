import { QuizQuestion } from "./quiz-question";

export type QuizList = {
  order: string[];
  questions: Record<string, QuizQuestion>;
};
