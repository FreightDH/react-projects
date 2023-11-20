import { ChangeEvent, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from 'widgets';
import cl from './Login.module.scss';

const Login = (): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  return (
    <main className={cl.login}>
      <div className="login__container">
        <div className={cl.login__body}>
          <h1 className={cl.login__title}>Login</h1>
          <LoginForm
            email={email}
            password={password}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
          />
          <p className={cl.login__text}>
            {`Don't have an account? `}
            <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
