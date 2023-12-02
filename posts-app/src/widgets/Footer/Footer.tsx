import { ReactElement } from 'react';
import cl from './Footer.module.scss';

const Footer = (): ReactElement => {
  const copyrightText = ' © 2023 All Rights Reserved';

  return (
    <footer className={cl.footer}>
      <div className="footer__container">
        <p className={cl.footer__copyright}>
          <a href="https://github.com/FreightDH" target="blank" rel="noreferrer">
            FreightDH
          </a>
          {copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
