import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

export const App = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box as="main">
      <VStack p={5}>
        <Flex w="container.xl">
          <Heading fontWeight="semibold" color="cyan.400" as="h2">
            Krater.pl
          </Heading>
          <Spacer />
          <IconButton
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            background={useColorModeValue('violet', 'orange')}
            onClick={toggleColorMode}
            aria-label="Toggle theme"
          />
        </Flex>
      </VStack>
      <VStack>
        <Box bg="orange" w="container.md" h="container.md" />
      </VStack>
      <Spacer h={10} />
      <VStack>
        <Box bg="orange" w="container.md" h="container.md" />
      </VStack>
    </Box>
  );
};
