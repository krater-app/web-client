import { Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-fetching-library';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from '../../api/actions/news-feed/news-feed.actions';
import { PostType } from '../../api/actions/news-feed/news-feed.types';
import { NavbarLayout } from '../../theme/navbar.layout';
import { EditPost } from './edit-post';

export const EditPostContainer = () => {
  const { id } = useParams<{ id: string }>();

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
        />
      )}
    </NavbarLayout>
  );
};
