import { makeAutoObservable } from "mobx";

import UserService from "api/userService.ts";

import { IUserStore, TSaveResultData } from "types/stores/IUserStore.ts";
import { TUser } from "types/entities/TUser.ts";

export class UserStore implements IUserStore {
  name: string | null = null
  currentUser: TUser | null = null
  users: TUser[] = []

  constructor() {
    makeAutoObservable(this)
  }

  initializeSession(name: string | null) {
    this.name = name
  }

  async fetchTestUsers(testId: number, query: string) {
    const response = await UserService.fetchUsers(testId, query)

    if ('data' in response) {
      this.users = response.data
    }

    return response
  }

  async fetchTestUser(testId: number, userId: number) {
    const response = await UserService.fetchUser(testId, userId)

    if ('data' in response) {
      if (response.data.length) this.currentUser = response.data[0]!
    }

    return response
  }

  async saveResult(data: Omit<TSaveResultData, 'name'>) {
    return await UserService.createUserTestPassed({name: this.name || 'Анонимный пользователь', ...data})
  }
}