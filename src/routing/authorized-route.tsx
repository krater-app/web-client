import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from '../hooks/use-auth-state/use-auth-state.hook';
import { AppRoute } from './app-route.enum';

interface Props {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: Props) => {
  const location = useLocation();

  const {
    state: { isAuthorized },
  } = useAuthState();

  return isAuthorized ? (
    children
  ) : (
    <Navigate
      to={AppRoute.Login}
      replace
      state={{
        path: location.pathname,
      }}
    />
  );
};
