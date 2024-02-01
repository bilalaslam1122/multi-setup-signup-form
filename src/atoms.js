import { atom } from 'recoil';

export const signUpDataState = atom({
  key: 'signUpDataState',
  default: {
    email: '',
    name: '',
    dob: '',
    password: '',
  },
});
