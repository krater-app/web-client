import { Spinner } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useMutation, useQuery } from 'react-fetching-library';
import { FieldValues } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { editTextPostAction } from '../../api/actions/edit-post/edit-post.actions';
import { fetchPostDetails } from '../../api/actions/news-feed/news-feed.actions';
import { PostType } from '../../api/actions/news-feed/news-feed.types';
import { NavbarLayout } from '../../theme/navbar.layout';
import { EditPost } from './edit-post';

export const EditPostContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { mutate } = useMutation(editTextPostAction);

  const onSubmitTextPost = useCallback(
    async (body: FieldValues): Promise<boolean> => {
      const { payload, error } = await mutate({
        ...body,
        postId: id,
      });

      if (!error && payload) {
        return true;
      }

      return false;
    },
    [mutate, id],
  );

  const { payload, loading } = useQuery(
    fetchPostDetails({
      postId: id,
    }),
  );

  return (
    <NavbarLayout>
      {loading || !payload ? (
        <Spinner />
      ) : (
        <EditPost
          title={payload?.title as string}
          content={payload?.content as string}
          tags={payload?.tags as string[]}
          isNsfw={payload?.isNsfw as boolean}
          type={payload?.type as PostType}
          onSubmitTextPost={onSubmitTextPost}
        />
      )}
    </NavbarLayout>
  );
};
