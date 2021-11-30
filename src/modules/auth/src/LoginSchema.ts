import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const LoginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});
