import { TAnswer } from "./TAnswer.ts";

export type TUser = {
  id: number,
  name: string
  testId: number,
  answers: TAnswer[]
}