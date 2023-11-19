import { ReactElement } from 'react';
import cl from './App.module.scss';

const App = (): ReactElement => {
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

export default App;
