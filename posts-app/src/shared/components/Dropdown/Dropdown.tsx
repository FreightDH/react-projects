import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'features';
import cl from './Dropdown.module.scss';

interface DropdownProps {
  isOpen: boolean;
}

const Dropdown: FC<DropdownProps> = ({ isOpen }): ReactElement => {
  const { logout } = useAuth();
  const dropdownClasses = [cl.dropdown];
  if (isOpen) dropdownClasses.push(cl.open);

  if (localStorage.getItem('isAuth')) {
    return (
      <div className={dropdownClasses.join(' ')}>
        <div className={cl.dropdown__title}>Profile</div>
        <Link to="/profile" className={cl.dropdown__option}>
          Profile
        </Link>
        <Link to="/" replace className={cl.dropdown__option} onClick={logout}>
          Logout
        </Link>
      </div>
    );
  }

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
