import { Container, Heading, VStack } from '@chakra-ui/react';
import { PostType } from '../../api/actions/news-feed/news-feed.types';
import { TextPostForm } from '../create-post/text-post-form/text-post-form';

interface Props {
  title?: string | null;
  content?: string;
  tags: string[];
  type: PostType;
  isNsfw: boolean;
}

export const EditPost = ({
  tags,
  type,
  isNsfw,
  title = '',
  content = '',
}: Props) => {
  return (
    <Container>
      <VStack spacing={5} align="stretch">
        <Heading>Edit post ✨</Heading>
        {type === 'Text' && (
          <TextPostForm
            onSubmit={async () => true}
            title={title}
            content={content}
            isNsfw={isNsfw}
            tags={tags}
            mode="update"
          />
        )}
      </VStack>
    </Container>
  );
};
