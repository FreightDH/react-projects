import { ChangeEvent, FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { FormButton, FormInput } from 'shared';
import cl from './LoginForm.module.scss';

interface LoginFormProps {
  email: string;
  password: string;
  handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: FC<LoginFormProps> = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
}): ReactElement => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/posts');
    reset();
  };

  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      <FormInput
        label="E-mail"
        type="email"
        name="emailLogin"
        value={email}
        onChange={handleEmailChange}
        register={register}
        errors={errors}
        validationSchema={{
          required: 'This field is required!',
        }}
        required
      />
      <FormInput
        label="Password"
        type="password"
        name="passwordLogin"
        value={password}
        onChange={handlePasswordChange}
        register={register}
        errors={errors}
        validationSchema={{
          required: 'This field is required!',
          minLength: {
            value: 8,
            message: 'Minimum length is 8 symbols!',
          },
        }}
        required
      />
      <FormButton disabled={!isValid}>Login</FormButton>
    </form>
  );
};

export default LoginForm;
