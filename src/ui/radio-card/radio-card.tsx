import { Box, RadioProps, useRadio } from '@chakra-ui/react';

export const RadioCard = (props: RadioProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box
      as="label"
      flex={{
        md: 1,
      }}
    >
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        textAlign="center"
        borderWidth="1px"
        borderRadius={{
          md: '3xl',
          base: 'lg',
        }}
        boxShadow="md"
        fontSize="sm"
        _checked={{
          bg: 'orange.400',
          color: 'white',
          borderColor: 'orange.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};
