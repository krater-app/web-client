import { extendTheme } from '@chakra-ui/react';
import { Button } from './button.styles';
import { FormLabel } from './form-label.styles';
import { Input } from './input.styles';

export const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Raleway',
  },
  colors: {
    primary: '#5F81F4',
    secondary: '#FDCE30',
    teal: '#47C3D0',
    green: '#55D09C',
    red: '#DC566B',
    gray: {
      200: '#F9F9FB',
      900: '#717171',
    },
    font: {
      black: '#000000',
      gray: '#717171',
      primary: '#30417A',
    },
  },
  components: {
    Button,
    Input,
    FormLabel,
    Link: {
      baseStyle: {
        color: 'primary',
        fontWeight: 'semibold',
        fontSize: '16px',
      },
    },
    FormError: {
      baseStyle: {
        text: {
          color: 'red',
        },
      },
    },
  },
});
