import { useCallback } from 'react';
import { useMutation } from 'react-fetching-library';
import { FieldValues } from 'react-hook-form';
import { createTextPostAction } from '../../api/actions/create-post/create-post.actions';
import { NavbarLayout } from '../../theme/navbar.layout';
import { CreatePost } from './create-post';

export const CreatePostContainer = () => {
  const { mutate } = useMutation(createTextPostAction);

  const onSubmitTextPost = useCallback(
    async (body: FieldValues): Promise<boolean> => {
      const { payload, error } = await mutate(body);

      if (!error && payload) {
        return true;
      }

      return false;
    },
    [mutate],
  );

  return (
    <NavbarLayout>
      <CreatePost onSubmitTextPost={onSubmitTextPost} />
    </NavbarLayout>
  );
};
