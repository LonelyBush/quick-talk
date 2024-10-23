'use client';

import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import style from './form-control-style.module.scss';

function FormControl<T extends FieldValues>({
  type,
  label,
  register,
  name,
  placeholder,
  error,
}: {
  type: string;
  label: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder: string | undefined;
  error: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  let passwordToggle;
  if (showPassword) {
    passwordToggle = 'text';
  } else {
    passwordToggle = 'password';
  }
  return (
    <label htmlFor={name} className={style.formControlWrapper}>
      {label}
      <input
        type={type === 'password' ? passwordToggle : type}
        {...register(name)}
        name={name}
        placeholder={!placeholder ? '' : placeholder}
        className={style.formInput}
      />
      {type === 'password' && (
        <button
          className={style.faEyePosition}
          type="button"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}

      <span className={style.errorMessage}>{error}</span>
    </label>
  );
}

export default FormControl;
