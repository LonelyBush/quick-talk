'use client';

import * as yup from 'yup';

import styles from './login-style.module.scss';
import { loginSchema } from '@/utils/validation-schema/schema';
import { AuthContext } from '@/context/authContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { logInWithEmailAndPassword } from '@/firebase/auth';
import { toast } from 'react-toastify';
import FormField from '@/view/ui/formField/formField';
import Button from '@/view/ui/button/button';

function LoginPage() {
  type LoginData = yup.InferType<typeof loginSchema>;
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(loginSchema) });
  const onSubmit: SubmitHandler<LoginData> = (data) => {
    toast.promise(logInWithEmailAndPassword(data.email, data.password), {
      pending: 'Loading...',
      success: 'Access granted !',
      error: {
        render({ data }: { data: Error }) {
          return `${data.message}`;
        },
      },
    });
  };

  useEffect(() => {
    if (user) {
      router.replace('/');
    }
  }, [user, router]);

  return (
    <div className={styles.loginMainContainer}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.loginFormContainer}
      >
        <h2>Login</h2>
        <FormField
          type="text"
          label="Email"
          name="email"
          placeholder="example@gmail.com"
          register={register}
          error={!errors.email?.message ? '' : errors.email.message.toString()}
        />
        <FormField
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
