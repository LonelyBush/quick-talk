import { ChangeEvent } from 'react';
import style from './input-style.module.scss';

function Input({
  type,
  placeholder,
  name,
  onChange,
}: {
  type: string;
  placeholder: string;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={style.customInput}
      onChange={onChange}
    />
  );
}

export default Input;
