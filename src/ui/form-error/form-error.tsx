import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';

interface Props {
  title: string;
  description: string;
}

export const FormError = ({ description, title }: Props) => (
  <Alert status="error">
    <AlertIcon />
    <AlertTitle mr={2}>{title}</AlertTitle>
    <AlertDescription>{description}</AlertDescription>
  </Alert>
);
