import { ComponentPropsWithRef, FC, ReactElement } from 'react';
import cl from './FormButton.module.scss';

interface FormButtonProps extends ComponentPropsWithRef<'button'> {}

const FormButton: FC<FormButtonProps> = ({ disabled, children }): ReactElement => {
  const buttonClasses = [cl.button];
  if (disabled) buttonClasses.push(cl.disabled);

  return (
    <button type="submit" disabled={disabled} className={buttonClasses.join(' ')}>
      <span>{children}</span>
    </button>
  );
};

export default FormButton;
