import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { TagsInput } from '../tags-input/tags-input';

export const LinkPostForm = () => {
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
          <FormLabel htmlFor="link">Link</FormLabel>
          <Input id="link" placeholder="Provide link you want to share 🔗" />
        </FormControl>
        <Button width="full" colorScheme="orange">
          Create
        </Button>
      </VStack>
    </form>
  );
};
