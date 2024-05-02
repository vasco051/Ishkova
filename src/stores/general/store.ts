import { makeAutoObservable } from "mobx";

import { TestStore } from "../testStore.ts";
import { PassingTestStore } from "../passingTestStore.ts";
import { UserStore } from "../userStore.ts";

import { IRootStore } from "types/stores/IRootStore.ts";
import { ITestStore } from "types/stores/ITestStore.ts";
import { IPassingTestStore } from "types/stores/IPassingTestStore.ts";
import { IUserStore } from "types/stores/IUserStore.ts";

export class Store implements IRootStore {
  test: ITestStore
  passingTest: IPassingTestStore
  user: IUserStore

  constructor() {
    this.test = new TestStore()
    this.passingTest = new PassingTestStore(this)
    this.user = new UserStore()
    makeAutoObservable(this);
  }
}

export const store = new Store();