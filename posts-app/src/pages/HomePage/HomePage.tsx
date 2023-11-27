import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import cl from './HomePage.module.scss';
import { FormButton } from 'shared';

const HomePage = (): ReactElement => {
  return (
    <div className={cl.home}>
      <h1 className={cl.home__title}>Posts App</h1>
      <h2 className={cl.home__subtitle}>from {`{JSON}`} Placeholder</h2>
      <div className={cl.home__buttons}>
        <Link to="/login">
          <FormButton>Login</FormButton>
        </Link>
        <Link to="/register">
          <FormButton>Register</FormButton>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
