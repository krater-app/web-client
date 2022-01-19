import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import { AppRoute } from '../../routing/app-route.enum';

export const Register = () => {
  return (
    <Box width="full">
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
              <FormHelperText>
                Nickname will be visible to other users. Also you will be able
                to log in with username.
              </FormHelperText>
            </FormControl>
            <FormControl mt={6}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                placeholder="Provider your password"
                type="password"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel htmlFor="retype-password">Retype password</FormLabel>
              <Input
                id="retype-password"
                placeholder="Retype your password"
                type="password"
              />
            </FormControl>
            <Button mt={6} width="full" type="submit" colorScheme="orange">
              Register
            </Button>
          </form>
          <Text mt={4}>
            Already registered?
            <Link ml={2} as={RouteLink} to={AppRoute.Login}>
              Log In Here
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
