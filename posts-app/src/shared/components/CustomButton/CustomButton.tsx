import { ComponentPropsWithRef, FC, ReactElement } from 'react';
import cl from './CustomButton.module.scss';

interface CustomButtonProps extends ComponentPropsWithRef<'button'> {}

const CustomButton: FC<CustomButtonProps> = ({ disabled, children }): ReactElement => {
  const buttonClasses = [cl.button];
  if (disabled) buttonClasses.push(cl.disabled);

  return (
    <button type="submit" disabled={disabled} className={buttonClasses.join(' ')}>
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
