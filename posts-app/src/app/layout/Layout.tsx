import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'shared';
import { Footer, Header } from 'widgets';

const Layout = (): ReactElement => {
  return (
    <ErrorBoundary>
      <Header />
      <Outlet />
      <Footer />
    </ErrorBoundary>
  );
};

export default Layout;
