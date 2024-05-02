import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import Breadcrumbs from "components/ui/breadcrumbs";

import { getTestPageBreadcrumbs, pageContentConfig, TestStepVariant } from "./config.tsx";

import { TBreadcrumbsItem } from "components/ui/breadcrumbs/types.ts";
import { ITestStepProps } from "./steps/types.ts";

import styles from './styles.module.scss'

export const TestPage = observer(() => {
  const store = useStore()
  const testStore = store.test
  const passingTestStore = store.passingTest
  const userStore = store.user

  const [currentStep, setCurrentStep] = useState<TestStepVariant>(TestStepVariant.PREVIEW)
  const {id} = useParams()

  useEffect(() => {
    (async function () {
      const response = await testStore.fetchTest(+id!)
      if ('data' in response) passingTestStore.initializationTest(response.data)
      userStore.initializeSession(null)
    })()
  }, [id]);

  if (!testStore.currentTest) return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          Загрузка...
        </div>
      </div>
    </main>
  )

  const breadcrumbsConfig: TBreadcrumbsItem[] = getTestPageBreadcrumbs(testStore.currentTest)

  const stepProps: ITestStepProps = {
    test: testStore.currentTest,
    currentStep,
    setCurrentStep
  }

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Breadcrumbs items={breadcrumbsConfig}/>

          {pageContentConfig(stepProps)[currentStep]}
        </div>
      </div>
    </main>
  )
})