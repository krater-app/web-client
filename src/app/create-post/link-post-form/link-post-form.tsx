import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';

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
          <FormHelperText>Title is not required for link post</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="link">Link</FormLabel>
          <Input id="link" placeholder="Provide link you want to share 🔗" />
          <FormHelperText>Link is required field</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            placeholder="You can also provide additional description 🧐"
          />
          <FormHelperText>
            Description is not required for link post
          </FormHelperText>
        </FormControl>
        <Button width="full" colorScheme="orange">
          Create
        </Button>
      </VStack>
    </form>
  );
};
