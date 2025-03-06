import { QuizPage } from "@views/quiz-page";
import { quizQueries } from "@entities/quiz-question";

export const dynamic = "force-dynamic";

export default async function QuizQuestionPage() {
  const quizData = await quizQueries.getList();

  return <QuizPage quizData={quizData} />;
}
