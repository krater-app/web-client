import { DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  IconButton,
  Image,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { FiFile } from 'react-icons/fi';
import { FileUpload } from '../../../ui/file-upload/file-upload';
import { TagsInput } from '../tags-input/tags-input';

export const ImagePostForm = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<null | string>(null);

  const { register, handleSubmit, watch } = useForm();

  const watchForFile = watch('file');

  useEffect(() => {
    if (!watchForFile || !watchForFile.length) {
      setImagePreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(watchForFile[0]);

    setImagePreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [watchForFile]);

  const handleSubmitCallback = useCallback(async (body: FieldValues) => {}, []);

  const handleRemoveImage = () => {
    setImagePreviewUrl(null);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitCallback)}>
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
          <Flex align="center" justify="space-between" my={1}>
            <FormLabel htmlFor="file">File</FormLabel>
            {imagePreviewUrl && (
              <IconButton
                aria-label="Delete file"
                icon={<DeleteIcon />}
                onClick={handleRemoveImage}
              />
            )}
          </Flex>
          <FileUpload register={register('file')} accept="image/*">
            {imagePreviewUrl ? (
              <Image src={imagePreviewUrl} />
            ) : (
              <Button leftIcon={<Icon as={FiFile} />}>Upload</Button>
            )}
          </FileUpload>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            placeholder="You can also provide additional description 🧐"
          />
        </FormControl>
        <Button width="full" colorScheme="orange" type="submit">
          Create
        </Button>
      </VStack>
    </form>
  );
};
