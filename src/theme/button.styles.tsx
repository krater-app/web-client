import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  sizes: {
    sm: {
      height: '40px',
    },
    md: {
      height: '52px',
    },
    lg: {
      height: '62px',
    },
  },
  baseStyle: {
    color: 'white',
    backgroundColor: 'primary',
  },
  variants: {
    solid: {
      bg: 'primary',
      color: 'white',
      _hover: {
        bg: 'secondary',
        color: 'font.primary',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, .1)',
        _disabled: {
          bg: '#F9F9FB',
          color: '#B3B3B3',
          border: '1px solid #B3B3B3',
          boxShadow: 'none',
        },
      },
      _disabled: {
        bg: '#F9F9FB',
        color: '#B3B3B3',
        border: '1px solid #B3B3B3',
      },
    },
  },
};
