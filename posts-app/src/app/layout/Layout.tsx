import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from 'widgets';

import cl from './Layout.module.scss';

const Layout = (): ReactElement => {
  return (
    <>
      <main className={cl.page}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
