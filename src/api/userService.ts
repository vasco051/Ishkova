import axios from "axios";

import { TSaveResultData } from "types/stores/IUserStore.ts";
import { TUser } from "types/entities/TUser.ts";

class UserService {
  async fetchUsers(testId: number, query: string) {
    let url = `http://localhost:3001/users?testId=${testId}`

    if (query) url += `&${query}`

    return await axios.get<TUser[]>(url)
  }

  async fetchUser(testId: number, userId: number) {
    return await axios.get<TUser[]>(`http://localhost:3001/users?testId=${testId}&id=${userId}`)
  }


  async createUserTestPassed(data: TSaveResultData) {
    return await axios.post<void>('http://localhost:3001/users', data)
  }
}

export default new UserService();