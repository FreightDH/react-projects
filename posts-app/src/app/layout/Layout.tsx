import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'widgets';

import cl from './Layout.module.scss';

const Layout = (): ReactElement => {
  return (
    <>
      <Header />
      <main className={cl.page}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
