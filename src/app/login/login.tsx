import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
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
    <Box
      width={{
        base: 'container.sm',
      }}
    >
      <Heading as="h2" fontSize="37px" fontWeight="semibold" mb={1}>
        Login
      </Heading>
      <Text fontWeight="medium" color="font.black" fontSize="19px" maxW="70%">
        An efficient way to be up to date with news from world of your interest.
      </Text>

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
          <Text fontSize="14px" color="font.gray" mb={4}>
            Your password should contain two uppercase letters and one special
            character.
          </Text>
          <Input
            id="password"
            type="password"
            placeholder="Provide your password"
            {...register('password', {
              required: true,
            })}
          />
        </FormControl>
        <FormControl
          mt={6}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Checkbox size="lg">Remember me</Checkbox>
          <Link>Forgot password?</Link>
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
  );
};
