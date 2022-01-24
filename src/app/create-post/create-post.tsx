import { Container, Divider, Heading, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { LinkPostForm } from './link-post-form/link-post-form';
import { PostType, SelectPostType } from './select-post-type/select-post-type';
import { TextPostForm } from './text-post-form/text-post-form';

export const CreatePost = () => {
  const [selectedPostType, setSelectedPostType] = useState<PostType>(
    'text-post',
  );

  return (
    <Container px={0}>
      <VStack spacing={5} align="stretch">
        <Heading
          as="h3"
          fontSize="2xl"
          fontWeight="semibold"
          letterSpacing="tight"
        >
          Create new post 🚀
        </Heading>
        <SelectPostType
          defaultValue={selectedPostType}
          onChange={setSelectedPostType}
        />
        <Divider />
        {selectedPostType === 'text-post' && <TextPostForm />}
        {selectedPostType === 'link-post' && <LinkPostForm />}
      </VStack>
    </Container>
  );
};
