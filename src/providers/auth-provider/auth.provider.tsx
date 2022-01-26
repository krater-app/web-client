import { ReactNode, useEffect, useReducer } from 'react';
import { authStorage } from '../../context/auth-storage/auth-storage';
import {
  AuthContext,
  initialAuthContext,
} from '../../context/auth/auth.context';
import { authReducer } from '../../context/auth/auth.reducer';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, {
    ...initialAuthContext,
    accessToken: authStorage.getAccessToken(),
    refreshToken: authStorage.getRefreshToken(),
    isAuthorized: authStorage.getAccessToken() !== null,
  });

  useEffect(() => {
    authStorage.setAccessToken(state.accessToken);
    authStorage.setRefreshToken(state.refreshToken);
  }, [state.accessToken, state.refreshToken]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
