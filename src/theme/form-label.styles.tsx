import { ComponentStyleConfig } from '@chakra-ui/react';

export const FormLabel: ComponentStyleConfig = {
  variants: {
    default: {
      color: 'red',
    },
  },
  baseStyle: {
    fontSize: '18px',
    fontWeight: 'semibold',
    _invalid: {
      color: 'red',
    },
  },
};
