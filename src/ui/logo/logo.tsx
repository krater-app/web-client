import { Link, Text, useColorModeValue } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import { AppRoute } from '../../routing/app-route.enum';

export const Logo = () => (
  <Link as={RouteLink} to={AppRoute.Home}>
    <Text
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      fontWeight="semibold"
      letterSpacing="tight"
      fontSize="2xl"
    >
      krater
    </Text>
  </Link>
);
