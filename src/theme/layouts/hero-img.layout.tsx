import { Box, Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ReactComponent as LockImg } from '../../assets/images/lock-img.svg';

interface Props {
  children: ReactNode;
}

export const HeroImgLayout = ({ children }: Props) => {
  return (
    <Container as="main" minW="full" minH="100vh" padding={0}>
      <Flex justifyContent="space-between" alignItems="center" height="100vh">
        <Box
          flex={1}
          height="100vh"
          bg="#F9F9FB"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <LockImg />
        </Box>
        <Box
          flex={1}
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          {children}
        </Box>
      </Flex>
    </Container>
  );
};
