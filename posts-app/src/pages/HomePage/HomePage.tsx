import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from 'shared';
import cl from './HomePage.module.scss';

const HomePage = (): ReactElement => {
  return (
    <main className={cl.home}>
      <div className="home__container">
        <div className={cl.home__body}>
          <h1 className={cl.home__title}>Posts App</h1>
          <h2 className={cl.home__subtitle}>from {`{JSON}`} Placeholder</h2>
          <div className={cl.home__buttons}>
            <Link to="/login">
              <CustomButton>Login</CustomButton>
            </Link>
            <Link to="/register">
              <CustomButton>Register</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
