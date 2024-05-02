import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import Breadcrumbs from "components/ui/breadcrumbs";

import { breadcrumbsConfig } from "./config.ts";

import { UserAnswers } from "../test/steps/result/user-answers";

import styles from "./styles.module.scss";

export const ResultPage = observer(() => {
  const store = useStore()
  const testStore = store.test
  const userStore = store.user

  const {testId, userId} = useParams()

  useEffect(() => {
    testStore.fetchTest(+testId!)
    userStore.fetchTestUser(+testId!, +userId!)
  }, [testId, userId]);

  if (!testStore.currentTest && !userStore.currentUser) return null

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Breadcrumbs items={breadcrumbsConfig(testStore.currentTest!, userStore.currentUser!)}/>

          <h1 className={styles.title}>Результаты пользователя: {userStore.currentUser?.name}</h1>

          <UserAnswers title='' questions={testStore.currentTest?.questions!} userAnswers={userStore.currentUser?.answers!}/>
        </div>
      </div>
    </main>
  )
})