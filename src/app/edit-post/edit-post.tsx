import { Container, Heading, VStack } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { PostType } from '../../api/actions/news-feed/news-feed.types';
import { TextPostForm } from '../create-post/text-post-form/text-post-form';

interface Props {
  title?: string | null;
  content?: string;
  tags: string[];
  type: PostType;
  isNsfw: boolean;
  onSubmitTextPost: (payload: FieldValues) => Promise<boolean>;
}

export const EditPost = ({
  tags,
  type,
  isNsfw,
  title = '',
  content = '',
  onSubmitTextPost,
}: Props) => {
  return (
    <Container>
      <VStack spacing={5} align="stretch">
        <Heading>Edit post ✨</Heading>
        {type === 'Text' && (
          <TextPostForm
            onSubmit={onSubmitTextPost}
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
