import { TTest } from "types/entities/TTest.ts";
import { TAnswer } from "types/entities/TAnswer.ts";
import { TQuestion } from "types/entities/TQuestion.ts";

export interface IPassingTestStore {
  test: TTest | null
  indexCurrentQuestion: number | null
  currentUserAnswer: TAnswer | null
  userAnswers: TAnswer[] | null
  toResults: boolean

  // gets
  get isInitialized(): boolean
  get currentQuestion(): TQuestion | null
  get numberTrueAnswers(): number | null
  get percentTrueAnswers(): number | null

  // sets
  initializationTest(test: TTest): void
  setCurrentUserAnswer(answer: TAnswer): void
  setIndexCurrentQuestion(index: number): void
  choiceAnswer(answer: TAnswer): void
  toNextQuestion(): void
}