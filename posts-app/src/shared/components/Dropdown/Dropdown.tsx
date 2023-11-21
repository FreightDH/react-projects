import { FC, ReactElement } from 'react';
import cl from './Dropdown.module.scss';
import { Link } from 'react-router-dom';

interface DropdownProps {
  isOpen: boolean;
}

const Dropdown: FC<DropdownProps> = ({ isOpen }): ReactElement => {
  const dropdownClasses = [cl.dropdown];
  if (isOpen) dropdownClasses.push(cl.open);

  return (
    <div className={dropdownClasses.join(' ')}>
      <div className={cl.dropdown__title}>Profile</div>
      <Link to="/login" className={cl.dropdown__option}>
        Login
      </Link>
      <Link to="/register" className={cl.dropdown__option}>
        Register
      </Link>
    </div>
  );
};

export default Dropdown;
