import {
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { CreatableSelect } from 'chakra-react-select';
import { SelectPostType } from './select-post-type/select-post-type';

export const CreatePost = () => {
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
        <SelectPostType />
        <Divider />
        <form>
          <FormControl>
            <FormLabel>Tags</FormLabel>
            <CreatableSelect
              id="tags"
              isMulti
              hasStickyGroupHeaders
              tagVariant="solid"
              backspaceRemovesValue
              isSearchable
              size="md"
              options={[
                {
                  label: 'test',
                  value: 'test',
                },
                {
                  label: 'test1',
                  value: 'test1',
                },
              ]}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              placeholder="Some tl;dr title of your content 😅"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel htmlFor="content">Content</FormLabel>
            <Textarea
              id="content"
              placeholder="Provide some content for your text post..."
            />
          </FormControl>
          <Button width="full" mt={8} colorScheme="orange">
            Create
          </Button>
        </form>
      </VStack>
    </Container>
  );
};
