import { TUser } from "types/entities/TUser.ts";
import { APIResponse } from "types/api/TApi.ts";

export interface IUserStore {
  name: string | null
  currentUser: TUser | null
  users: TUser[]

  initializeSession(name: string | null): void

  fetchTestUsers: (testId: number, query: string) => APIResponse<TUser[]>
  fetchTestUser: (testId: number, userId: number) => APIResponse<TUser[]>
  saveResult: (data: Omit<TSaveResultData, 'name'>) => APIResponse<void>
}

export type TSaveResultData = Omit<TUser, 'id'>