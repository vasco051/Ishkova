import { makeAutoObservable } from "mobx";

import TestService from "api/testService.ts";

import { TTest } from "types/entities/TTest.ts";
import { ITestStore } from "types/stores/ITestStore.ts";

export class TestStore implements ITestStore {
  currentTest: TTest | null = null
  tests: TTest[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async fetchTests(query?: string) {
    this.tests = []

    const response = await TestService.fetchTests(query)

    if ('data' in response) {
      this.tests = response.data
    }

    return response
  }

  async fetchTest(id: number) {
    this.currentTest = null

    const response = await TestService.fetchTest(id)

    if ('data' in response) {
      this.currentTest = response.data
    }

    return response
  }
}