'use client';

import Button from '@/components/ui/button/button';
import * as yup from 'yup';
import FormControl from '@/components/ui/form-control/form-control';
import { loginSchema } from '@/schema/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './login-style.module.scss';

function LoginPage() {
  type LoginData = yup.InferType<typeof loginSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(loginSchema) });
  const onSubmit: SubmitHandler<LoginData> = (data) => console.log(data);
  return (
    <div className={styles.loginMainContainer}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.loginFormContainer}
      >
        <FormControl
          type="text"
          label="Email"
          name="email"
          placeholder="example@gmail.com"
          register={register}
          error={!errors.email?.message ? '' : errors.email.message.toString()}
        />
        <FormControl
          type="password"
          label={'Password'}
          name="password"
          placeholder=""
          register={register}
          error={
            !errors.password?.message ? '' : errors.password.message.toString()
          }
        />
        <Button btnType="submit">Submit</Button>
      </form>
    </div>
  );
}

export default LoginPage;
