import { ComponentPropsWithRef, FC, ReactElement } from 'react';
import cl from './FormButton.module.scss';

interface FormButtonProps extends ComponentPropsWithRef<'button'> {}

const FormButton: FC<FormButtonProps> = ({ children }): ReactElement => {
  return (
    <button type="submit" className={cl.button}>
      <span>{children}</span>
    </button>
  );
};

export default FormButton;
