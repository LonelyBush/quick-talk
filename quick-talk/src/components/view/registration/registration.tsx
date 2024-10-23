'use client';

import Button from '@/components/ui/button/button';
import FormControl from '@/components/ui/form-control/form-control';
import { registrationSchema } from '@/schema/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './registration-style.module.scss';
import * as yup from 'yup';

function RegistrationPage() {
  type RegistrationData = yup.InferType<typeof registrationSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registrationSchema),
  });
  const onSubmit: SubmitHandler<RegistrationData> = (data) => console.log(data);
  return (
    <div className={styles.registrationMainContainer}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.registrationFormContainer}
      >
        <h2>Registration</h2>
        <FormControl
          type="text"
          label="Nickname"
          name="nickname"
          placeholder="JohnDoe"
          register={register}
          error={!errors.nickname?.message ? '' : `${errors.nickname.message}`}
        />
        <FormControl
          type="email"
          label="Email"
          name="email"
          placeholder="example@gmail.com"
          register={register}
          error={!errors.email?.message ? '' : `${errors.email.message}`}
        />
        <FormControl
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
          register={register}
          error={!errors.password?.message ? '' : `${errors.password.message}`}
        />
        <FormControl
          type="password"
          label="ConfirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
          register={register}
          error={
            !errors.confirmPassword?.message
              ? ''
              : `${errors.confirmPassword.message}`
          }
        />
        <Button btnType="submit">Submit</Button>
      </form>
    </div>
  );
}

export default RegistrationPage;
