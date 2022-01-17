import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Navbar } from '../../ui/navbar/navbar';

export const Register = () => {
  return (
    <Box width="full">
      <Navbar />
      <Flex justify="center" align="center" h="100vh">
        <Box
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          p={10}
          w={{
            md: 'container.md',
            sm: 'container.lg.sm',
          }}
        >
          <VStack>
            <Heading as="h2" size="lg" mb={4}>
              Register
            </Heading>
          </VStack>
          <form>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input type="email" id="email" placeholder="Provide your email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl mt={6}>
              <FormLabel htmlFor="nickname">Nickname</FormLabel>
              <Input id="nickname" placeholder="Provider your nickname" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="nickname"
                placeholder="Provider your password"
                type="password"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel htmlFor="password">Retype password</FormLabel>
              <Input
                id="nickname"
                placeholder="Retype your password"
                type="password"
              />
            </FormControl>
            <Button mt={6} width="full" type="submit" colorScheme="orange">
              Register
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
