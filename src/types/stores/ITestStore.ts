import { TTest } from "types/entities/TTest.ts";
import { GetTestResponse, GetTestsResponse } from "types/api/TTestResponse.ts";
import { APIResponse } from "types/api/TApi.ts";

export interface ITestStore {
  currentTest: TTest | null
  tests: TTest[]

  // async
  fetchTests: (query?: string) => APIResponse<GetTestsResponse>
  fetchTest: (id: number) => APIResponse<GetTestResponse>
}