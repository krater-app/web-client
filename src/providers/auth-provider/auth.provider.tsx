import { ReactNode, useReducer } from 'react';
import {
  AuthContext,
  initialAuthContext,
} from '../../context/auth/auth.context';
import { authReducer } from '../../context/auth/auth.reducer';

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthContext);

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
