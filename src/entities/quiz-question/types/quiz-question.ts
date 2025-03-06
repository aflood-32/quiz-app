export type QuizQuestion = {
  id: string;
  title: string;
  answers: { id: string; text: string }[];
  reward: string;
  correctAnswerIds: string[];
};
