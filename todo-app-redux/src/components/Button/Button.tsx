import { ComponentPropsWithRef, ReactElement } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  action?: 'add' | 'complete' | 'edit' | 'delete' | 'save';
}

const Button: React.FC<ButtonProps> = ({ action, children, onClick, className, ...props }): ReactElement => {
  const classes = `${styles.button} ${action && styles[action] ? styles[action] : ''} ${className || ''}`.trim();

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
