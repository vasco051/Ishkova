import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { Button, ButtonTheme, LinkBtn } from "components/ui-kit/buttons";
import { UserAnswers } from "./user-answers";
import { ProgressBar } from "./progress-bar";

import { dynamicLinks, staticLinks } from "config/routingLinks.ts";
import { TestStepVariant } from "../../config.tsx";

import { ITestStepProps } from "../types.ts";

import styles from './styles.module.scss'

export const ResultStep = observer(({test, setCurrentStep}: ITestStepProps) => {
  const store = useStore();
  const userStore = store.user
  const passingTestStore = store.passingTest

  const {id} = useParams()

  if (!passingTestStore.isInitialized) return null

  const onTryAgain = () => {
    passingTestStore.initializationTest(test)
    setCurrentStep(TestStepVariant.TEST)
  }

  return (
    <section className={styles.result}>
      <section className={styles.content}>
        <div className={styles.top}>
          <h1 className={styles.title}>Тест завершен!</h1>

          {userStore.name && <p className={styles.description}>Имя пользователя: {userStore.name}</p>}

          <p className={styles.description}>
            Количество правильных ответов
            - {passingTestStore.numberTrueAnswers} / {passingTestStore.test?.questions.length}
          </p>
        </div>

        <ProgressBar percent={passingTestStore.percentTrueAnswers!}/>

        <div className={styles.buttons}>
          <Button theme={ButtonTheme.DANGER} onClick={onTryAgain}>Пройти тест заново</Button>
          <LinkBtn theme={ButtonTheme.WHITE} to={staticLinks.tests}>Пройти другие тесты</LinkBtn>
        </div>

        <LinkBtn to={dynamicLinks.results(+id!)} target='_blank'>Результаты пользователей</LinkBtn>
      </section>

      <UserAnswers title='Ваши ответы' questions={passingTestStore.test?.questions!} userAnswers={passingTestStore.userAnswers!}/>
    </section>
  )
})