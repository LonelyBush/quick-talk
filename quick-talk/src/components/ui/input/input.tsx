import style from './input-style.module.scss';

function Input({
  type,
  placeholder,
  name,
}: {
  type: string;
  placeholder: string;
  name: string;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={style.customInput}
    />
  );
}

export default Input;
