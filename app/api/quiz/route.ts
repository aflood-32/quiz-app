import quizConfig from "../../../quiz-config.json";

export async function GET() {
  return Response.json(quizConfig);
}
