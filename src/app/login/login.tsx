import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Link as RouteLink } from 'react-router-dom';
import { FormError } from '../../ui/form-error/form-error';
import { AppRoute } from '../../routing/app-route.enum';
import { useAuthState } from '../../hooks/use-auth-state/use-auth-state.hook';
import { LoginProps } from './login.types';

export const Login = ({ onSubmit }: LoginProps) => {
  const {
    state: { isAuthorizing },
  } = useAuthState();
  const { register, handleSubmit } = useForm();

  const [isError, setIsError] = useState(false);

  const handleSubmitCallback = useCallback(
    async (body: FieldValues) => {
      const valid = await onSubmit(body);

      if (!valid) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    },
    [onSubmit],
  );

  return (
    <Box width="full">
      <Flex
        justify="center"
        align={{
          md: 'center',
          sm: 'flex-start',
        }}
      >
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

          <form onSubmit={handleSubmit(handleSubmitCallback)}>
            {isError && (
              <FormError
                title="Unauthorized!"
                description="Provided nickname or password is invalid."
              />
            )}
            <FormControl mt={6}>
              <FormLabel htmlFor="nickname">Nickname</FormLabel>
              <Input
                id="nickname"
                placeholder="Provide your nickname"
                {...register('nickname', {
                  required: true,
                })}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="Provide your password"
                {...register('password', {
                  required: true,
                })}
              />
            </FormControl>
            <Button
              width="full"
              mt={6}
              type="submit"
              isLoading={isAuthorizing}
              loadingText="Logging in..."
            >
              Sign In
            </Button>
          </form>
          <Text mt={4}>
            Don't have an account?{' '}
            <Link ml={2} as={RouteLink} to={AppRoute.Register}>
              Register Here
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
