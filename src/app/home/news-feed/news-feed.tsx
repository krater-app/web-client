import { Container, List, ListItem } from '@chakra-ui/react';
import { NewsFeedPostItem } from '../../../api/actions/news-feed/news-feed.types';
import { TextPostItem } from './text-post-item/text-post-item';

interface Props {
  items: NewsFeedPostItem[];
}

export const NewsFeed = ({ items }: Props) => {
  return (
    <Container width="full" p={0} maxW="full">
      <List
        as="ul"
        spacing={5}
        px={{ md: 4 }}
        paddingBottom={5}
        width={{ md: 'container.lg' }}
        mx={{ md: 'auto' }}
      >
        {items.map((item) => (
          <ListItem key={item.id}>
            <TextPostItem {...item} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
