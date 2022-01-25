import { useCallback } from 'react';
import { useMutation } from 'react-fetching-library';
import { FieldValues } from 'react-hook-form';
import { loginAction } from '../../api/actions/auth/auth.actions';
import {
  SET_AUTHORIZED,
  SET_TOKENS,
  SET_UNAUTHORIZED,
  START_AUTHORIZING,
} from '../../context/auth/auth.reducer';
import { useAuthState } from '../../hooks/use-auth-state/use-auth-state.hook';
import { NavbarLayout } from '../../theme/navbar.layout';
import { Login } from './login';

export const LoginContainer = () => {
  const { mutate } = useMutation(loginAction);

  const { dispatch } = useAuthState();

  const onSubmit = useCallback(
    async (body: FieldValues): Promise<boolean> => {
      dispatch({
        type: START_AUTHORIZING,
      });
      const { payload, error: submitError } = await mutate(body);

      if (!submitError && payload) {
        const { accessToken, refreshToken } = payload;

        dispatch({
          type: SET_AUTHORIZED,
        });

        dispatch({
          type: SET_TOKENS,
          accessToken,
          refreshToken,
        });

        return true;
      }

      dispatch({
        type: SET_UNAUTHORIZED,
      });

      return false;
    },
    [mutate, dispatch],
  );

  return (
    <NavbarLayout>
      <Login onSubmit={onSubmit} />
    </NavbarLayout>
  );
};
