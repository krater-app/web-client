import { ComponentStyleConfig } from '@chakra-ui/react';

export const Input: ComponentStyleConfig = {
  sizes: {
    sm: {
      field: {
        height: '40px',
      },
    },
    md: {
      field: {
        height: '52px',
      },
    },
    lg: {
      field: {
        height: '62px',
      },
    },
  },
  baseStyle: (props) => ({
    field: {
      bg: props.colorMode === 'light' ? 'white' : 'gray',
      color: '#717171',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'font.primary',
      borderRadius: '5px',
      _placeholder: {
        color: '#717171',
      },
      _invalid: {
        bg: 'rgba(220, 86, 107, 0.05)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'red',
        color: 'red',
        _placeholder: {
          color: 'red',
        },
      },
    },
  }),
};
