import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  getDatabase, ref, child, get,
} from 'firebase/database';

export const login = (payload:auth.SubmitLoginPayload) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, payload.username, payload.password);
};

export const getUserInfo = (userId:string) => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `users/${userId}`));
};
