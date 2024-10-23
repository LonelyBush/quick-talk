'use client';

import Button from '@/components/ui/button/button';
import * as yup from 'yup';
import FormControl from '@/components/ui/form-control/form-control';
import { loginSchema } from '@/utils/validation-schema/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './login-style.module.scss';
import { toast } from 'react-toastify';
import { auth, logInWithEmailAndPassword } from '@/auth/firebase';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';

function LoginPage() {
  type LoginData = yup.InferType<typeof loginSchema>;
  const [user] = useAuthState(auth);
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
      router.push('/');
    }
  }, [user, router]);

  return (
    <div className={styles.loginMainContainer}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.loginFormContainer}
      >
        <h2>Login</h2>
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
