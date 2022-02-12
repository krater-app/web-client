import { Box, Container, useColorModeValue, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Navbar } from '../../ui/navbar/navbar';

interface Props {
  children: ReactNode;
}

export const NavbarLayout = ({ children }: Props) => (
  <Container
    as="main"
    bg={useColorModeValue('gray.50', 'gray.800')}
    minH="100vh"
    minW="full"
  >
    <VStack>
      <Navbar />
      <Box height="72px" />
      <Container p={0} w="full" maxW="full">
        {children}
      </Container>
    </VStack>
  </Container>
);
