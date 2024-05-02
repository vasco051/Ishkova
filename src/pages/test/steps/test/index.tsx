import { useEffect } from "react";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { Button, ButtonTheme } from "components/ui-kit/buttons";

import { TestStepVariant } from "../../config.tsx";

import { TAnswer } from "types/entities/TAnswer.ts";
import { ITestStepProps } from "../types.ts";

import styles from './styles.module.scss'

export const TestStep = observer(({test, setCurrentStep}: ITestStepProps) => {
  const passingTestStore = useStore().passingTest

  useEffect(() => {
    if (passingTestStore.toResults) setCurrentStep(TestStepVariant.RESULT)
  }, [passingTestStore.toResults]);

  if (!passingTestStore.isInitialized) return null

  const onClickAnswer = (answer: TAnswer) => passingTestStore.choiceAnswer(answer)

  const onClickNextQuestion = () => passingTestStore.toNextQuestion()

  const getAnswerButtonTheme = (answer: TAnswer) => {
    if (!passingTestStore.currentUserAnswer) return ButtonTheme.WHITE
    else if (answer.isTrue) return ButtonTheme.GREEN
    else if (passingTestStore.currentUserAnswer.id === answer.id && !answer.isTrue) return ButtonTheme.DANGER
    else return ButtonTheme.WHITE
  }

  const nextButtonTest = passingTestStore.indexCurrentQuestion! + 1 >= passingTestStore.test!?.questions.length
    ? 'К результату теста'
    : 'Следующий вопрос'

  return (
    <section className={styles.test} key={passingTestStore.currentQuestion!.id}>
      <div className={styles.top}>
        <span className={styles.numberQuestion}>
          Вопрос: {passingTestStore.indexCurrentQuestion! + 1} / {test.questions.length}
        </span>

        <h4 className={styles.title}>
          {passingTestStore.currentQuestion!.text}
        </h4>
      </div>

      <ul className={styles.list}>
        {passingTestStore.currentQuestion!.answers.map(answer => (
          <li className={styles.item} key={answer.id}>
            <Button
              className={styles.button}
              theme={getAnswerButtonTheme(answer)}
              onClick={() => onClickAnswer(answer)}
            >
              {answer.text}
            </Button>
          </li>
        ))}
      </ul>

      <Button className={styles.button} disabled={!passingTestStore.currentUserAnswer} onClick={onClickNextQuestion}>
        {nextButtonTest}
      </Button>
    </section>
  )
})