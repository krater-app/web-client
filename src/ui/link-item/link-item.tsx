import { Link, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link as RouteLink } from 'react-router-dom';

interface Props {
  children: ReactNode;
  href: string;
}

export const LinkItem = ({ children, href }: Props) => {
  return (
    <Link
      as={RouteLink}
      to={href}
      p={2}
      color={useColorModeValue('gray200', 'whiteAlpha.900')}
    >
      {children}
    </Link>
  );
};
