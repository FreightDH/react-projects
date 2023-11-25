import { ReactElement, useState } from 'react';
import { CustomLink } from 'shared';
import cl from './Menu.module.scss';

const Menu = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuIconClasses = [cl.menu__icon];
  const menuBodyClasses = [cl.menu__body];

  if (menuOpen) {
    menuIconClasses.push(cl.open);
    menuBodyClasses.push(cl.open);
  }

  return (
    <div className={cl.menu} onClick={() => setMenuOpen(!menuOpen)}>
      <button type="button" className={menuIconClasses.join(' ')}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={menuBodyClasses.join(' ')}>
        <ul className={cl.menu__list}>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
          <CustomLink to="/register">Register</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
