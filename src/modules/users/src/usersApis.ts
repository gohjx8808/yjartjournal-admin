import {
  child, get, getDatabase, ref,
} from 'firebase/database';

// eslint-disable-next-line import/prefer-default-export
export const getUserList = () => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, 'users'));
};
