import { Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import {
  PostStatus,
  PostType,
} from '../../api/actions/news-feed/news-feed.types';
import { TextPostForm } from '../create-post/text-post-form/text-post-form';

interface Props {
  title?: string | null;
  content?: string;
  tags: string[];
  type: PostType;
  isNsfw: boolean;
  status: PostStatus;
  onSubmitTextPost: (
    payload: FieldValues,
  ) => Promise<{ status: boolean; id: string }>;
  onPublish: () => Promise<boolean>;
}

export const EditPost = ({
  tags,
  type,
  isNsfw,
  title = '',
  content = '',
  onSubmitTextPost,
  onPublish,
  status,
}: Props) => {
  return (
    <Container>
      <VStack spacing={5} align="stretch">
        <Flex width="full" justifyContent="space-between" alignItems="center">
          <Heading>Edit post ✨</Heading>
          <Text fontWeight="semibold" fontSize="md">
            Status:{' '}
            <Text
              display="inline-block"
              color={status === 'Active' ? 'green.300' : 'orange.400'}
            >
              {status}
            </Text>
          </Text>
        </Flex>
        {type === 'Text' && (
          <TextPostForm
            onSubmit={onSubmitTextPost}
            title={title}
            content={content}
            isNsfw={isNsfw}
            tags={tags}
            mode="update"
            onPublish={onPublish}
            status={status}
          />
        )}
      </VStack>
    </Container>
  );
};
