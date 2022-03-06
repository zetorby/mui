import React from 'react';

import { cx } from '../../utils';

import { ButtonVariantsEnum, IButtonProps } from './types';

import './button.scss';

function Button({ children, variant, fullWidth, className, ...props }: IButtonProps) {
  const classNames = cx('mui-button', className, {
    [`mui-button--full`]: fullWidth,
    [`mui-button--${variant}`]: variant,
  });

  return (
    <button className={classNames} type="button" {...props}>
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  variant: ButtonVariantsEnum.PRIMARY,
};
