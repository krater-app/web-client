import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { CreatableSelect, MultiValue } from 'chakra-react-select';
import { useCallback } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useTags } from '../../../hooks/use-tags/use-tags.hook';

interface TagValue {
  label: string;
  value: string;
}

interface Props {
  onSubmit: (payload: FieldValues) => Promise<boolean>;
  title?: string | null;
  tags?: string[];
  content?: string;
  isNsfw?: boolean;
  mode?: 'create' | 'update';
}

export const TextPostForm = ({
  onSubmit,
  title = '',
  content = '',
  tags: defaultTags = [],
  isNsfw = false,
  mode = 'create',
}: Props) => {
  const { register, handleSubmit, formState, setValue, reset, watch } = useForm(
    {
      defaultValues: {
        title,
        content,
        isNsfw,
        tags: defaultTags,
      },
    },
  );

  const tagValues = watch('tags');

  const { tags, setSearchString } = useTags();

  const handleSubmitCallback = useCallback(
    async (body: FieldValues) => {
      const isValid = await onSubmit(body);

      if (isValid) {
        reset({
          title: '',
          content: '',
          tags: [],
          isNsfw: false,
        });
      }
    },
    [onSubmit, reset],
  );

  const handleTagsChange = (values: MultiValue<TagValue>) => {
    setValue(
      'tags',
      values.map((value) => `#${value.value.replaceAll('#', '')}`),
    );
  };

  const handleTagSearch = (value: string) => {
    setSearchString(value);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitCallback)}>
      <VStack spacing={5}>
        <FormControl isInvalid={Boolean(formState.errors.title)}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            placeholder="Some tl;dr title for your content 😅"
            {...register('title', {
              required: false,
              minLength: 3,
            })}
          />
          <FormHelperText>Title is not required for text post</FormHelperText>
        </FormControl>
        <FormControl isInvalid={Boolean(formState.errors.tags)}>
          <FormLabel>Tags</FormLabel>
          <CreatableSelect
            {...register('tags', {
              required: true,
              min: 1,
              max: 10,
            })}
            isMulti
            onChange={handleTagsChange}
            value={(tagValues ?? []).map((value: string) => ({
              value,
              label: value,
            }))}
            options={tags.map((tag) => ({
              label: tag,
              value: tag,
            }))}
            isSearchable
            onInputChange={handleTagSearch}
          />
          <FormHelperText>Provide at least one tag</FormHelperText>
        </FormControl>
        <FormControl isInvalid={Boolean(formState.errors.content)}>
          <FormLabel htmlFor="content">Content</FormLabel>
          <Textarea
            id="content"
            placeholder="Provide some content for your text post 📚"
            {...register('content', {
              required: true,
              minLength: 10,
            })}
          />
        </FormControl>
        <FormControl>
          <Checkbox {...register('isNsfw')} colorScheme="orange">
            Is NSFW?
          </Checkbox>
        </FormControl>
        <Button width="full" colorScheme="orange" type="submit">
          {mode === 'create' ? 'Create' : 'Update'}
        </Button>
      </VStack>
    </form>
  );
};
