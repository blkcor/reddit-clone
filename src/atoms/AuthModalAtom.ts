import { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
  views: 'login' | 'signup' | 'resetPassword';
}

const defaultAuthModalState: AuthModalState = {
  open: false,
  views: 'login',
};

export const authModalState = atom<AuthModalState>({
  key: 'authModalState',
  default: defaultAuthModalState
});

