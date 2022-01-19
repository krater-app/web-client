import { useCallback } from 'react';
import { useMutation } from 'react-fetching-library';
import { FieldValues } from 'react-hook-form';
import { loginAction } from '../../api/actions/auth/auth.actions';
import { SET_AUTHORIZED } from '../../context/auth/auth.reducer';
import { useAuthState } from '../../hooks/use-auth-state/use-auth-state.hook';
import { Login } from './login';

export const LoginContainer = () => {
  const { mutate } = useMutation(loginAction);

  const { dispatch } = useAuthState();

  const onSubmit = useCallback(
    async (body: FieldValues): Promise<boolean> => {
      const { payload, error: submitError } = await mutate(body);

      if (!submitError && payload) {
        const { accessToken } = payload;

        dispatch({
          type: SET_AUTHORIZED,
        });

        return true;
      }

      return false;
    },
    [mutate, dispatch],
  );

  return <Login onSubmit={onSubmit} />;
};
