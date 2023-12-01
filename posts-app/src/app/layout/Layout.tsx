import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'widgets';

const Layout = (): ReactElement => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
