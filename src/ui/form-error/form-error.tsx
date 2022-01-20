import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
} from '@chakra-ui/react';

interface Props {
  title: string;
  description: string;
}

export const FormError = ({ description, title }: Props) => (
  <Alert status="error">
    <AlertIcon />
    <Flex direction="column">
      <AlertTitle mr={2}>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Flex>
  </Alert>
);
