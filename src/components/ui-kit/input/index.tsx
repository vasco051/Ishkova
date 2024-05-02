import { InputHTMLAttributes } from "react";
import clsx from "clsx";

import styles from './styles.module.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({label, id, className, ...props}: IInputProps) => {
  const inputId = id || crypto.randomUUID()

  const inputClasses = clsx(styles.input, {
    [className!]: !!className
  })

  return (
    <div className={styles.wrapper}>
      {!!label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
      <input id={inputId} className={inputClasses} {...props}/>
    </div>
  );
};