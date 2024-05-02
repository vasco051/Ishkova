import { observer } from "mobx-react";

import { Button, ButtonTheme } from "components/ui-kit/buttons";

import { TAnswer } from "types/entities/TAnswer.ts";
import { TQuestion } from "types/entities/TQuestion.ts";

import styles from './styles.module.scss'

interface IUserAnswersProps {
  title: string
  questions: TQuestion[]
  userAnswers: TAnswer[]
}

export const UserAnswers = observer(({title, questions, userAnswers}: IUserAnswersProps) => {
  const getAnswerButtonTheme = (answer: TAnswer, userAnswer: TAnswer) => {
    if (answer?.isTrue) return ButtonTheme.GREEN
    else if (answer?.id === userAnswer?.id && !answer?.isTrue) return ButtonTheme.DANGER
    else return ButtonTheme.WHITE
  }

  return (
    <section className={styles.answers}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.questionList}>
        {questions?.map((question, questionIndex) => (
          <li className={styles.questionItem} key={question.id}>
            <h4 className={styles.title}>{questionIndex + 1}. {question.text}</h4>

            <ul className={styles.answersList}>
              {question?.answers.map(answer => (
                <li className={styles.answerItem} key={answer.id}>
                  <Button theme={getAnswerButtonTheme(answer, userAnswers?.[questionIndex])}>{answer.text}</Button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
})