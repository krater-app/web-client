import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../routing/app-route.enum';
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
          <LinkItem href={AppRoute.Login}>Login</LinkItem>
          <LinkItem href={AppRoute.Register}>Register</LinkItem>
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
                <MenuItem as={Link} to={AppRoute.Login}>
                  Login
                </MenuItem>
                <MenuItem as={Link} to={AppRoute.Register}>
                  Register
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
