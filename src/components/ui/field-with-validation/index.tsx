import { PropsWithChildren } from "react";
import { ValidationProps } from "./types.ts";

import styles from './styles.module.scss'

interface IFieldWithValidationProps extends PropsWithChildren, ValidationProps {
  wrapperClassName?: string
  validationClassName?: string;
}

export const FieldWithValidation = ({children, errors}: IFieldWithValidationProps) => {
  const error = Array.isArray(errors) ? errors.join(' ') : errors

  return (
    <div className={styles.validationWrapper}>
      {children}

      {errors && <span className={styles.error}>{error}</span>}
    </div>
  )
}