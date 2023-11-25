import { ReactElement } from 'react';
import { logo } from 'assets';
import { Menu, ProfileIcon } from 'features';
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
            <ProfileIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
