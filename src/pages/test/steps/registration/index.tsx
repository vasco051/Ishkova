import { observer } from "mobx-react";
import { useFormik } from "formik";

import { useStore } from "hooks/useStore.ts";
import { Input } from "components/ui-kit/input";
import { Button, ButtonTheme } from "components/ui-kit/buttons";
import { FieldWithValidation } from "components/ui/field-with-validation";

import { TestStepVariant } from "../../config.tsx";

import { ITestStepProps } from "../types.ts";

import styles from './styles.module.scss'

export const Registration = observer(({setCurrentStep}: ITestStepProps) => {
  const userStore = useStore().user

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    onSubmit: values => {
      if (!values.name.trim().length) {
        formik.setErrors({name: 'Поле "Ваше имя" не может быть пустым.'})
        return
      }

      userStore.initializeSession(values.name.trim())

      setCurrentStep(TestStepVariant.TEST)
    }
  })

  const onSkipRegistration = () => {
    setCurrentStep(TestStepVariant.TEST)
  }

  return (
    <form onSubmit={formik.handleSubmit} className={styles.registration}>
      <FieldWithValidation errors={formik.errors.name}>
        <Input label='Ваше имя' value={formik.values.name} onChange={formik.handleChange} id='name'/>
      </FieldWithValidation>

      <div className={styles.buttons}>
        <Button theme={ButtonTheme.WHITE} type='submit'>Пройти тест</Button>
        <Button onClick={onSkipRegistration} type='button'>Пропустить регистрацию</Button>
      </div>
    </form>
  )
})
