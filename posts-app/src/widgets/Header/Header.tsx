import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ProfileIcon } from 'features';
import logo from './assets/logo.png';
import cl from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={cl.header}>
      <div className="header__container">
        <div className={cl.header__body}>
          <div className={cl.header__logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={cl.header__content}>
            <Menu />
            <ProfileIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
