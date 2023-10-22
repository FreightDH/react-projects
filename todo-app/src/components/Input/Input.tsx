import { ComponentPropsWithRef, ReactElement } from 'react';
import styles from './Input.module.scss';

type InputProps = ComponentPropsWithRef<'input'>;

const Input: React.FC<InputProps> = ({ id, name, placeholder, value, onChange }): ReactElement => {
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
      value={value}
      className={styles.input}
      onChange={onChange}
    />
  );
};

export default Input;
