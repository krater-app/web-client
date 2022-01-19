import { useContext } from 'react';
import {
  AuthContext,
  AuthContextStateApi,
} from '../../context/auth/auth.context';

export const useAuthState = () => {
  const context = useContext(AuthContext) as AuthContextStateApi;

  if (!context) {
    throw new Error('useAuthState must be used within an AuthContext');
  }

  return context;
};
