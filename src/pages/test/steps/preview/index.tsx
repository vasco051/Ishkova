import { Button, ButtonTheme } from "components/ui-kit/buttons";

import { TestStepVariant } from "../../config.tsx";
import { ITestStepProps } from "../types.ts";

import styles from "./styles.module.scss";

export const PreviewStep = ({test, setCurrentStep}: ITestStepProps) => {
  const onStartTest = () => {
    setCurrentStep(TestStepVariant.REGISTRATION)
  }

  return (
    <section className={styles.previewStep}>
      <h1 className={styles.title}>{test.title}</h1>
      <p className={styles.description}>{test.description}</p>
      <Button theme={ButtonTheme.WHITE} onClick={onStartTest}>Пройти тест</Button>
    </section>
  )
}