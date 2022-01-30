import { Container, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-fetching-library';
import { fetchNewsFeed } from '../../api/actions/news-feed/news-feed.actions';
import { NavbarLayout } from '../../theme/navbar.layout';
import { NewsFeed } from './news-feed/news-feed';

export const HomeContainer = () => {
  const { loading, payload } = useQuery(fetchNewsFeed({}));

  return (
    <NavbarLayout>
      <Container
        maxW="full"
        w="full"
        px={{
          sm: 0,
        }}
      >
        {loading ? <Spinner /> : <NewsFeed items={payload?.items ?? []} />}
      </Container>
    </NavbarLayout>
  );
};
