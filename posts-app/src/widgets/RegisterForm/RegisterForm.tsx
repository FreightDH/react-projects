import { ChangeEvent, FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { CustomButton, CustomInput, isEmpty } from 'shared';
import cl from './RegisterForm.module.scss';

interface RegisterFormProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  handleFirstNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleLastNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RegisterForm: FC<RegisterFormProps> = ({
  firstName,
  lastName,
  email,
  password,
  handleFirstNameChange,
  handleLastNameChange,
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
      <CustomInput
        label="First name"
        name="firstName"
        value={firstName}
        onChange={handleFirstNameChange}
        register={register}
        errors={errors}
        validationSchema={{
          required: 'This field is required!',
          maxLength: {
            value: 15,
            message: 'Maximum length is 15 symbols!',
          },
          validate: isEmpty,
        }}
        required
      />
      <CustomInput
        label="Last name"
        name="lastName"
        value={lastName}
        onChange={handleLastNameChange}
        register={register}
        errors={errors}
        validationSchema={{
          required: 'This field is required!',
          maxLength: {
            value: 15,
            message: 'Maximum length is 15 symbols!',
          },
          validate: isEmpty,
        }}
        required
      />
      <CustomInput
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
      <CustomInput
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
      <CustomButton disabled={!isValid}>Sign up</CustomButton>
    </form>
  );
};

export default RegisterForm;
