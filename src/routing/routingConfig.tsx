import { TestPage } from "pages/test";
import { TestsPage } from "pages/tests";
import { NotFoundPage } from "pages/not-found";
import { ResultsPage } from "pages/results";

import { staticLinks } from "config/routingLinks.ts";
import { ResultPage } from "../pages/result";

export const publicRoutes = [
  {
    path: staticLinks.main,
    element: <TestsPage/>
  },
  {
    path: staticLinks.tests,
    element: <TestsPage/>
  },
  {
    path: staticLinks.test,
    element: <TestPage/>
  },
  {
    path: staticLinks.notFound,
    element: <NotFoundPage/>
  },
  {
    path: staticLinks.results,
    element: <ResultsPage/>
  },
  {
    path: staticLinks.result,
    element: <ResultPage/>
  },
]