import { Container, List, ListItem } from '@chakra-ui/react';
import { NewsFeedPostItem } from '../../../api/actions/news-feed/news-feed.types';
import { TextPostItem } from './text-post-item/text-post-item';

interface Props {
  items: NewsFeedPostItem[];
}

export const NewsFeed = ({ items }: Props) => {
  return (
    <Container width="full">
      <List as="ul" spacing={10}>
        {items.map((item) => (
          <ListItem key={item.id} borderBottom="1px solid gray">
            <TextPostItem {...item} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
