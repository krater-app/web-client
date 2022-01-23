import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { TagsInput } from '../tags-input/tags-input';

export const TextPostForm = () => {
  return (
    <form>
      <VStack spacing={5}>
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            placeholder="Some tl;dr title for your content 😅"
          />
          <FormHelperText>Title is not required for text post</FormHelperText>
        </FormControl>
        <TagsInput />
        <FormControl>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            id="content"
            placeholder="Provide some content for your text post 📚"
          />
        </FormControl>
        <Button width="full" colorScheme="orange">
          Create
        </Button>
      </VStack>
    </form>
  );
};
