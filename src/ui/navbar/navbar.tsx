import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { LinkItem } from '../link-item/link-item';
import { ThemeToggleButton } from '../theme-toggle-button/theme-toggle-button';

export const Navbar = () => {
  return (
    <Box
      width="full"
      as="nav"
      position="fixed"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      zIndex={1}
    >
      <Flex
        maxW="container.xl"
        p={4}
        mx="auto"
        alignItems="center"
        justify="space-between"
      >
        <Heading
          as="h1"
          fontSize={26}
          letterSpacing="tight"
          flex={1}
          fontWeight="medium"
        >
          krater
        </Heading>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          display={{
            base: 'none',
            md: 'flex',
          }}
          width={{
            base: 'full',
            md: 'auto',
          }}
        >
          <LinkItem href="#">About</LinkItem>
          <LinkItem href="#">Portfolio</LinkItem>
          <ThemeToggleButton />
        </Stack>
        <Box align="right">
          <Box
            display={{
              base: 'inline-block',
              md: 'none',
            }}
          >
            <ThemeToggleButton />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                aria-label="Menu Button"
                ml={3}
              />
              <MenuList>
                <MenuItem as={Link} href="#">
                  About
                </MenuItem>
                <MenuItem as={Link}>Portfolio</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
