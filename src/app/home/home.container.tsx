import { Box, Container, Heading, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-fetching-library';
import { fetchNewsFeed } from '../../api/actions/news-feed/news-feed.actions';
import { NavbarLayout } from '../../theme/navbar.layout';
import { SelectPostType } from './select-post-type/select-post-type';

export const HomeContainer = () => {
  const { loading, payload } = useQuery(fetchNewsFeed({}));

  return (
    <NavbarLayout>
      <Container
        maxW="full"
        px={{
          sm: 0,
        }}
      >
        {loading ? (
          <h1>
            <Spinner />
          </h1>
        ) : (
          <ul>
            {payload?.items.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
      </Container>
    </NavbarLayout>
  );
};
