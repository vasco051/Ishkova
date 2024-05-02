import { IPassingTestStore } from "./IPassingTestStore.ts";
import { ITestStore } from "./ITestStore.ts";
import { IUserStore } from "./IUserStore.ts";

export interface IRootStore {
  test: ITestStore
  passingTest: IPassingTestStore
  user: IUserStore
}