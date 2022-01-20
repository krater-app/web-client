import { createContext, Dispatch } from 'react';
import { AuthAction } from './auth.reducer';

export interface AuthContextState {
  isAuthorized: boolean;
  isAuthorizing: boolean;
}

export const initialAuthContext: AuthContextState = {
  isAuthorized: false,
  isAuthorizing: false,
};

export interface AuthContextStateApi {
  state: AuthContextState;
  dispatch: Dispatch<AuthAction>;
}

export const AuthContext = createContext<
  AuthContextStateApi | AuthContextState
>(initialAuthContext);
