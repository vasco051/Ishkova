import { makeAutoObservable } from "mobx";

import { IPassingTestStore } from "types/stores/IPassingTestStore.ts";
import { TTest } from "types/entities/TTest.ts";
import { TAnswer } from "types/entities/TAnswer.ts";
import { TQuestion } from "../types/entities/TQuestion.ts";
import { IRootStore } from "../types/stores/IRootStore.ts";

export class PassingTestStore implements IPassingTestStore {
  rootStore: IRootStore

  test: TTest | null = null
  indexCurrentQuestion: number | null = null
  currentUserAnswer: TAnswer | null = null
  userAnswers: TAnswer[] | null = null
  toResults: boolean = false

  constructor(root: IRootStore) {
    this.rootStore = root
    makeAutoObservable(this)
  }

  // gets
  get isInitialized() {
    return this.test !== null
      && this.indexCurrentQuestion !== null
      && this.userAnswers !== null
  }

  get currentQuestion() {
    return this.isInitialized ? this.test?.questions[this.indexCurrentQuestion!] as TQuestion : null
  }

  get numberTrueAnswers() {
    return this.isInitialized
      ? this.userAnswers!.filter(answer => answer.isTrue).length
      : null
  }

  get percentTrueAnswers() {
    return this.isInitialized
      ? this.userAnswers!.length
        ? +(this.numberTrueAnswers! / this.test!?.questions.length * 100).toFixed(0)
        : 0
      : null
  }

  // sets
  initializationTest(test: TTest) {
    this.test = test
    this.indexCurrentQuestion = 0
    this.currentUserAnswer = null
    this.userAnswers = []
    this.toResults = false
  }

  setCurrentUserAnswer(answer: TAnswer | null) {
    this.currentUserAnswer = answer
  }

  setIndexCurrentQuestion() {
    if (this.isInitialized) {
      if ((this.indexCurrentQuestion! + 1) >= this.test!.questions.length) {
        this.rootStore.user.saveResult({testId: this.test!.id, answers: this.userAnswers!})
        this.toResults = true
      } else {
        this.indexCurrentQuestion! += 1
      }
    }
  }

  choiceAnswer(answer: TAnswer) {
    if (this.isInitialized) {
      if (!this.currentUserAnswer) {
        this.setCurrentUserAnswer(answer)
        this.userAnswers?.push(answer!)
      }
    }
  }

  toNextQuestion() {
    if (this.isInitialized) {
      if (this.currentUserAnswer) this.setCurrentUserAnswer(null)

      this.setIndexCurrentQuestion()
    }
  }
}