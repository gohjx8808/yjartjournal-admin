import * as yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const loginSchema = yup.object().shape({
  username: yup.string().email('Username must be a valid email.').required('Username is required.'),
  password: yup.string().required('Password is required.'),
});
