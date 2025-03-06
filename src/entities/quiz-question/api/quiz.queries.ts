import { QuizList } from "../types/quiz-list";

const QUIZ_PATH = `${process.env.NEXT_PUBLIC_BASE_URL}/api/quiz`;

const quizQueries = {
  getList: async (): Promise<QuizList> => {
    const res = await fetch(QUIZ_PATH, { cache: "force-cache" });

    if (!res.ok) {
      throw new Error("Failed to fetch quiz data");
    }

    return res.json();
  },
};

export default quizQueries;
