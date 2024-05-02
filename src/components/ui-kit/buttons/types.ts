import { ButtonHTMLAttributes, LegacyRef, PropsWithRef, ReactNode } from 'react';
import { LinkProps } from "react-router-dom";

export enum ButtonTheme {
  FILLED = 'filled',
  WHITE = 'white',
  DANGER = 'danger',
  GREEN = 'green',
  // OUTLINED = 'outlined',
  // BLUR = 'blur',
  // GREY = 'grey',
  // GREY_OUTLINE = 'greyOutline',
  // DANGER_OUTLINE = 'dangerOutline',
}

export enum ButtonVariant {
  SQUARE = 'square',
  ROUNDED = 'rounded'
}

export interface IButtonStylesProps {
  theme?: ButtonTheme;
  variant?: ButtonVariant;
  icon?: ReactNode;
  isShort?: boolean;
  withAnimation?: boolean;
}

export type TButtonProps = PropsWithRef<ButtonHTMLAttributes<HTMLButtonElement> & IButtonStylesProps> & {
  reference?: LegacyRef<HTMLButtonElement>;
}

export type TLinkButtonProps = LinkProps & IButtonStylesProps & {
  isExternal?: boolean;
  className?: string;
  children: ReactNode;
};
