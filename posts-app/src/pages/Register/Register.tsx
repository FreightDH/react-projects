import { ChangeEvent, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { RegisterForm } from 'widgets';
import cl from './Register.module.scss';

const Register = (): ReactElement => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>, setValue: (value: string) => void) => {
    const { value } = event.target;
    setValue(value);
  };

  return (
    <main className={cl.register}>
      <div className="register__container">
        <div className={cl.register__body}>
          <h1 className={cl.register__title}>Register</h1>
          <RegisterForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            password={password}
            handleFirstNameChange={(event) => handleChange(event, setFirstName)}
            handleLastNameChange={(event) => handleChange(event, setLastName)}
            handleEmailChange={(event) => handleChange(event, setEmail)}
            handlePasswordChange={(event) => handleChange(event, setPassword)}
          />
          <p className={cl.register__text}>
            {`Already have an account? `}
            <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
