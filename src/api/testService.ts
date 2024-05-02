import axios from "axios";

import { GetTestResponse, GetTestsResponse } from "types/api/TTestResponse.ts";

class TestService {
  async fetchTests(query?: string) {
    let url = 'http://localhost:3001/tests'

    if (query) url += `?${query}`

    return await axios.get<GetTestsResponse>(url)
  }

  async fetchTest(id: number) {
    return await axios.get<GetTestResponse>(`http://localhost:3001/tests/${id}`)
  }
}

export default new TestService()