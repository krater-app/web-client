import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { authStorage } from '../../context/auth-storage/auth-storage';
import { LOGOUT } from '../../context/auth/auth.reducer';
import { useAuthState } from '../../hooks/use-auth-state/use-auth-state.hook';
import { AppRoute } from '../../routing/app-route.enum';

export const LogoutContainer = () => {
  const { dispatch } = useAuthState();

  useEffect(() => {
    authStorage.setAccessToken(null);

    dispatch({
      type: LOGOUT,
    });
  }, [dispatch]);

  return <Navigate to={AppRoute.Home} />;
};
