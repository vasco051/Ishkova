export const staticLinks = {
  main: '/',
  tests: '/tests',
  test: '/tests/:id',
  results: '/results/:testId',
  result: '/results/:testId/:userId',

  notFound: '/*',
}

export const dynamicLinks = {
  test: (id: number) => `/tests/${id}`,
  results: (id: number) => `/results/${id}`,
  result: (testId: number, userId: number) => `/results/${testId}/${userId}`,
}