import { TQuestion } from "./TQuestion.ts";

export type TTest = {
  id: number
  title: string
  description: string | null
  questions: TQuestion[]
}