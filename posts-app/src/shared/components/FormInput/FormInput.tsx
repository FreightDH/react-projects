import { ComponentPropsWithRef, FC, ReactElement } from 'react';
import { UseFormRegister, FieldValues, FieldErrors, RegisterOptions } from 'react-hook-form';
import cl from './FormInput.module.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validationSchema: RegisterOptions<FieldValues, string> | undefined;
}

const Input: FC<InputProps> = ({
  label,
  type,
  name,
  required,
  value,
  onChange,
  register,
  errors,
  validationSchema,
}): ReactElement => {
  const inputClasses = [cl.input__input];
  if (errors[name]) inputClasses.push(cl.err);

  return (
    <div className={cl.input}>
      <label htmlFor={name} className={cl.input__label}>
        {label}
        {required && '*'}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        className={inputClasses.join(' ')}
        {...register(name, validationSchema)}
        onChange={onChange}
      />
      {errors && errors[name] && <span className={cl.input__error}>{`${errors[name]?.message || 'Error!'}`}</span>}
    </div>
  );
};

export default Input;
