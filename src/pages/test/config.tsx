import { PreviewStep } from "./steps/preview";
import { TestStep } from "./steps/test";
import { ResultStep } from "./steps/result";
import { Registration } from "./steps/registration";

import { staticLinks } from "config/routingLinks.ts";

import { TTest } from "types/entities/TTest.ts";
import { ITestStepProps } from "./steps/types.ts";

export enum TestStepVariant {
  PREVIEW = 'preview',
  REGISTRATION = 'registration',
  TEST = 'test',
  RESULT = 'result'
}

export const pageContentConfig = (props: ITestStepProps) => ({
  [TestStepVariant.PREVIEW]: <PreviewStep {...props}/>,
  [TestStepVariant.REGISTRATION]: <Registration {...props}/>,
  [TestStepVariant.TEST]: <TestStep {...props}/>,
  [TestStepVariant.RESULT]: <ResultStep {...props}/>,
})

export const getTestPageBreadcrumbs = (test: TTest) => ([
  {
    title: 'Тесты',
    link: staticLinks.tests
  },
  {
    title: test.title || 'Текущий тест',
  }
])