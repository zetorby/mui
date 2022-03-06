import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export enum ButtonVariantsEnum {
  PRIMARY = 'primary',
  SECOND = 'second',
  TEXT = 'text',
}

type ButtonHTMLProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface IButtonProps extends ButtonHTMLProps {
  children?: ReactNode;
  className?: string;
  variant?: ButtonVariantsEnum;
  onClick: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
}
