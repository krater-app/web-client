import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Link,
  Spacer,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

export const Login = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box width="full">
      <VStack>
        <Flex
          w="full"
          bg={useColorModeValue('whitesmoke', 'gray.700')}
          p={5}
          justify="center"
        >
          <Flex w="container.xl" align="center">
            <Heading fontSize={23} letterSpacing="tighter">
              <Link>krater</Link>
            </Heading>
            <Spacer />
            <IconButton
              size="md"
              aria-label="Toggle theme"
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
              bgColor={useColorModeValue('violet', 'orange')}
              color={useColorModeValue('whiteAlpha.900', 'black')}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </VStack>
      <VStack>
        <Flex justify="center" align="center" h="calc(100vh - 88px)">
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
              <Heading>Login</Heading>
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
      </VStack>
    </Box>
  );
};
