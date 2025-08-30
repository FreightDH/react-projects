import { ComponentPropsWithRef, ReactElement } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  action?: 'add' | 'complete' | 'edit' | 'delete' | 'save';
  selected?: boolean;
}

const Button: React.FC<ButtonProps> = ({ action, children, onClick, className, selected, ...props }): ReactElement => {
  const classes = `${styles.button} ${action && styles[action] ? styles[action] : ''} ${
    selected ? styles.selected : ''
  } ${className || ''}`.trim();

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
