import { Container, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Navbar } from '../ui/navbar/navbar';

interface Props {
  children: ReactNode;
}

export const NavbarLayout = ({ children }: Props) => (
  <Container as="main" width="max">
    <VStack width="full">
      <Navbar />
      {children}
    </VStack>
  </Container>
);
