import { useCallback } from 'react';
import { useMutation } from 'react-fetching-library';
import { FieldValues } from 'react-hook-form';
import { loginAction } from '../../api/actions/auth/auth.actions';
import { Login } from './login';

export const LoginContainer = () => {
  const { mutate } = useMutation(loginAction);

  const onSubmit = useCallback(
    async (body: FieldValues): Promise<boolean> => {
      const { payload, error: submitError } = await mutate(body);

      if (!submitError && payload) {
        const { accessToken } = payload;

        return true;
      }

      return false;
    },
    [mutate],
  );

  return <Login onSubmit={onSubmit} />;
};
