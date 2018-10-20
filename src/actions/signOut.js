import { SIGN_USER_OUT } from './action.types';

const signOut = () => {
  localStorage.removeItem('token');
  // window.location.href = '/login';
  return {
    type: SIGN_USER_OUT,
  };
};

export default signOut;
