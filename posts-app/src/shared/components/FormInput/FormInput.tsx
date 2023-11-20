import { ComponentPropsWithRef, FC, ReactElement } from 'react';
import cl from './FormInput.module.scss';

type InputProps = ComponentPropsWithRef<'input'>;

const Input: FC<InputProps> = ({ type, id, value, onChange }): ReactElement => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      className={cl.input}
      onChange={onChange}
    />
  );
};

export default Input;
