import { TAnswer } from "./TAnswer.ts";

export type TQuestion = {
  id: number;
  text: string;
  answers: TAnswer[]
}