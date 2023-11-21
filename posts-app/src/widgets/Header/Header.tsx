import { ReactElement } from 'react';
import { logo } from 'assets';
import { Menu, Profile } from '..';
import cl from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={cl.header}>
      <div className="header__container">
        <div className={cl.header__body}>
          <div className={cl.header__logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={cl.header__content}>
            <Menu />
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
