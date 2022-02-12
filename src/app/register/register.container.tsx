import { useCallback, useState } from 'react';
import { useMutation } from 'react-fetching-library';
import { FieldValues } from 'react-hook-form';
import { registerAction } from '../../api/actions/auth/auth.actions';
import { NavbarLayout } from '../../theme/layouts/navbar.layout';
import { Register } from './register';

export const RegisterContainer = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { mutate } = useMutation(registerAction);

  const onSubmit = useCallback(
    async (body: FieldValues): Promise<boolean> => {
      const { error: submitError, payload } = await mutate(body);

      if (payload) {
        setErrorMessage(payload.error);
      }

      return !submitError;
    },
    [mutate],
  );

  return (
    <NavbarLayout>
      <Register onSubmit={onSubmit} errorMessage={errorMessage} />
    </NavbarLayout>
  );
};
