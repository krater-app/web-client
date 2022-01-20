import { createContext, Dispatch } from 'react';
import { AuthAction } from './auth.reducer';

export interface AuthContextState {
  isAuthorized: boolean;
  isAuthorizing: boolean;
  accessToken: string | null;
}

export const initialAuthContext: AuthContextState = {
  isAuthorized: false,
  isAuthorizing: false,
  accessToken: null,
};

export interface AuthContextStateApi {
  state: AuthContextState;
  dispatch: Dispatch<AuthAction>;
}

export const AuthContext = createContext<
  AuthContextStateApi | AuthContextState
>(initialAuthContext);
