import { ComponentPropsWithRef, ReactElement } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  action: 'add' | 'complete' | 'edit' | 'delete' | 'save';
}

const Button: React.FC<ButtonProps> = ({ action, children, onClick, ...props }): ReactElement => {
  const classes = `${styles.button} ${styles[action]}`;

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
