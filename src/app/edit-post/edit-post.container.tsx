import { Spinner } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useMutation, useQuery } from 'react-fetching-library';
import { FieldValues } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
  editTextPostAction,
  publishPostAction,
} from '../../api/actions/edit-post/edit-post.actions';
import { fetchPostDetails } from '../../api/actions/news-feed/news-feed.actions';
import {
  PostStatus,
  PostType,
} from '../../api/actions/news-feed/news-feed.types';
import { NavbarLayout } from '../../theme/layouts/navbar.layout';
import { EditPost } from './edit-post';

export const EditPostContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { mutate: editTextPostMutation } = useMutation(editTextPostAction);

  const { mutate: publishPostMutation } = useMutation(publishPostAction);

  const onPublishPost = useCallback(async (): Promise<boolean> => {
    const { error } = await publishPostMutation({
      postId: id as string,
    });

    return !error;
  }, [publishPostMutation, id]);

  const onSubmitTextPost = useCallback(
    async (body: FieldValues): Promise<{ status: boolean; id: string }> => {
      const { payload, error } = await editTextPostMutation({
        ...body,
        postId: id,
      });

      if (!error && payload) {
        return {
          id: id as string,
          status: true,
        };
      }

      return {
        id: id as string,
        status: false,
      };
    },
    [editTextPostMutation, id],
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
          status={payload?.status as PostStatus}
          onSubmitTextPost={onSubmitTextPost}
          onPublish={onPublishPost}
        />
      )}
    </NavbarLayout>
  );
};
