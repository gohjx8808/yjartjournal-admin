import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// eslint-disable-next-line import/prefer-default-export
export const login = (payload:login.submitLoginPayload) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, payload.username, payload.password);
};
