import { ReactElement } from 'react';
import cl from './Home.module.scss';

const Home = (): ReactElement => {
  return (
    <>
      <main className={cl.page}>
        <div className="page__container">
          <div className={cl.page__body}></div>
        </div>
      </main>
    </>
  );
};

export default Home;
