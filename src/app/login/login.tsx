import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Navbar } from '../../ui/navbar/navbar';

export const Login = () => {
  return (
    <Box width="full">
      <Navbar />
      <Flex justify="center" align="center" h="calc(100vh - 72px)">
        <Box
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          p={10}
          w={{
            md: 'container.md',
            sm: 'container.sm',
          }}
        >
          <VStack>
            <Heading as="h2" size="lg" mb={4}>
              Login
            </Heading>
          </VStack>
          <form>
            <FormControl>
              <FormLabel htmlFor="nickname">Nickname</FormLabel>
              <Input id="nickname" placeholder="Provide your nickname" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="Provide your password"
              />
            </FormControl>
            <Button width="full" mt={6} type="submit" colorScheme="orange">
              Sign In
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
