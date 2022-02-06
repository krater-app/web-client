import {
  AddIcon,
  ArrowForwardIcon,
  HamburgerIcon,
  SettingsIcon,
  UnlockIcon,
} from '@chakra-ui/icons';
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
import { FiLogOut } from 'react-icons/fi';
import { BsFileEarmarkPost } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAuthState } from '../../hooks/use-auth-state/use-auth-state.hook';
import { AppRoute } from '../../routing/app-route.enum';
import { LinkItem } from '../link-item/link-item';
import { Logo } from '../logo/logo';
import { ThemeToggleButton } from '../theme-toggle-button/theme-toggle-button';

export const Navbar = () => {
  const {
    state: { isAuthorized },
  } = useAuthState();

  return (
    <Box
      width="full"
      as="nav"
      position="fixed"
      bg={useColorModeValue('white', 'gray.900')}
      zIndex={1}
    >
      <Flex
        maxW={{
          lg: 'container.lg',
          md: 'container.md',
          sm: 'container.sm',
        }}
        p={4}
        mx="auto"
        alignItems="center"
        justify="space-between"
      >
        <Heading as="h1" letterSpacing="tight" flex={1}>
          <Logo />
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
          {!isAuthorized && <LinkItem href={AppRoute.Login}>Login</LinkItem>}
          {!isAuthorized && (
            <LinkItem href={AppRoute.Register}>Register</LinkItem>
          )}
          {isAuthorized && (
            <LinkItem href={AppRoute.CreatePost}>Create new post</LinkItem>
          )}
          {isAuthorized && (
            <LinkItem href={AppRoute.YourPosts}>Your posts</LinkItem>
          )}
          {isAuthorized && (
            <LinkItem href={AppRoute.Profile}>Your Profile</LinkItem>
          )}
          {isAuthorized && <LinkItem href={AppRoute.Logout}>Logout</LinkItem>}
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
                {!isAuthorized && (
                  <MenuItem
                    as={Link}
                    to={AppRoute.Login}
                    icon={<ArrowForwardIcon />}
                  >
                    Login
                  </MenuItem>
                )}
                {!isAuthorized && (
                  <MenuItem
                    as={Link}
                    to={AppRoute.Register}
                    icon={<UnlockIcon />}
                  >
                    Register
                  </MenuItem>
                )}
                {isAuthorized && (
                  <MenuItem
                    as={Link}
                    to={AppRoute.CreatePost}
                    icon={<AddIcon />}
                  >
                    Create new post
                  </MenuItem>
                )}
                {isAuthorized && (
                  <MenuItem
                    as={Link}
                    to={AppRoute.YourPosts}
                    icon={<BsFileEarmarkPost />}
                  >
                    Your posts
                  </MenuItem>
                )}
                {isAuthorized && (
                  <MenuItem
                    as={Link}
                    to={AppRoute.Profile}
                    icon={<SettingsIcon />}
                  >
                    Your profile
                  </MenuItem>
                )}
                {isAuthorized && (
                  <MenuItem as={Link} to={AppRoute.Logout} icon={<FiLogOut />}>
                    Logout
                  </MenuItem>
                )}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
