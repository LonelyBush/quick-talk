import { ReactNode } from 'react';
import styles from './button-styles.module.scss';

function Button({
  btnType,
  children,
  onClick,
}: {
  btnType: 'submit' | 'reset' | 'button';
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button type={btnType} className={`${styles.btn}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
