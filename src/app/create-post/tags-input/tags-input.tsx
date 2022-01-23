import {
  FormControl,
  FormControlProps,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';
import { CreatableSelect } from 'chakra-react-select';

export const TagsInput = (props: FormControlProps) => {
  return (
    <FormControl {...props}>
      <FormLabel>Tags</FormLabel>
      <CreatableSelect
        placeholder="Start writing tag names"
        isMulti
        hasStickyGroupHeaders
        tagVariant="solid"
        backspaceRemovesValue
        isSearchable
        size="md"
        options={[
          {
            label: 'programming',
            value: 'programming',
          },
          {
            label: 'ddd',
            value: 'ddd',
          },
        ]}
      />
      <FormHelperText>Provide at least one tag</FormHelperText>
    </FormControl>
  );
};
