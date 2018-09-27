import { SIGN_USER_OUT } from './action.types';

const signOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: SIGN_USER_OUT,
  };
};

export default signOut;
