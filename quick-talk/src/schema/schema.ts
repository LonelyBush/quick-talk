import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/.*\d.*/, 'Password should contain 1 number')
    .matches(/.*[A-Z].*/, 'Password should contain 1 uppercase letter [A-Z]')
    .matches(/.*[a-z].*/, 'Password should contain 1 lowercase letter [a-z]')
    .matches(
      /.*[!@#$%^&*(),.?":{}|<>].*/,
      'Password should contain 1 special character [!,@,#,$,% ..etc]',
    ),
});

export const registrationSchema = yup.object().shape({
  nickname: yup
    .string()
    .matches(/^[a-zA-Z0-9]*$/, 'Remove special characters from nickname')
    .required('Nickname is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/.*\d.*/, 'Password should contain 1 number')
    .matches(/.*[A-Z].*/, 'Password should contain 1 uppercase letter [A-Z]')
    .matches(/.*[a-z].*/, 'Password should contain 1 lowercase letter [a-z]')
    .matches(
      /.*[!@#$%^&*(),.?":{}|<>].*/,
      'Password should contain 1 special character [!,@,#,$,% ..etc]',
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match!'),
});
