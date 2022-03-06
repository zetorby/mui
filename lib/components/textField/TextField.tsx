import React from 'react';

import { cx } from '../../utils';

import { ITextField } from './types';

import './input.scss';

function TextField({ className, id, name, label, value, onChange, placeholder, disabled, type, error }: ITextField) {
  const classNames = cx('mui-text-field', className, {
    [`text-field--${name}`]: name,
    [`text-field--${disabled}`]: disabled,
    [`text-field--error`]: error,
  });

  return (
    <div className={classNames}>
      {label ? <span className="mui-text-field__label">{label}</span> : null}

      <input
        id={id}
        name={name}
        className="mui-text-field__input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
    </div>
  );
}

export default TextField;
