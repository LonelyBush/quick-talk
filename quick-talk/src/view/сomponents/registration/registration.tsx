'use client';

import { useContext, useEffect } from 'react';
import styles from './registration-style.module.scss';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/authContext';
import { registrationSchema } from '@/utils/validation-schema/schema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerWithEmailAndPassword } from '@/firebase/auth';
import { toast } from 'react-toastify';
import FormField from '@/view/ui/formField/formField';
import Button from '@/view/ui/button/button';

function RegistrationPage() {
  type RegistrationData = yup.InferType<typeof registrationSchema>;
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(registrationSchema),
  });
  const onSubmit: SubmitHandler<RegistrationData> = (data) => {
    toast.promise(
      registerWithEmailAndPassword(data.nickname, data.email, data.password),
      {
        pending: 'Loading...',
        success: {
          render() {
            router.replace('/');
            return 'Access granted !';
          },
        },
        error: {
          render({ data }: { data: Error }) {
            return `${data.message}`;
          },
        },
      },
    );
  };

  useEffect(() => {
    if (user?.displayName) {
      router.replace('/');
    }
  }, [user, router]);
  return (
    <div className={styles.registrationMainContainer}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.registrationFormContainer}
      >
        <h2>Registration</h2>
        <FormField
          type="text"
          label="Nickname"
          name="nickname"
          placeholder="JohnDoe"
          register={register}
          error={!errors.nickname?.message ? '' : `${errors.nickname.message}`}
        />
        <FormField
          type="email"
          label="Email"
          name="email"
          placeholder="example@gmail.com"
          register={register}
          error={!errors.email?.message ? '' : `${errors.email.message}`}
        />
        <FormField
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
          register={register}
          error={!errors.password?.message ? '' : `${errors.password.message}`}
        />
        <FormField
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
