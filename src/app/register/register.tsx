import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
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
import { RegisterPayload } from '../../api/actions/auth/auth.types';
import { AppRoute } from '../../routing/app-route.enum';
import { FormError } from '../../ui/form-error/form-error';

interface Props {
  onSubmit(payload: RegisterPayload): Promise<boolean>;
  errorMessage: string;
}

export const Register = ({ onSubmit, errorMessage }: Props) => {
  const { handleSubmit, register, formState, watch } = useForm();
  const [isError, setIsError] = useState(false);

  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmitCallback = useCallback(
    async ({ retypePassword, ...body }: FieldValues) => {
      setIsRegistering(true);

      const isValid = await onSubmit(body);

      setIsRegistering(false);

      setIsError(isValid);
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
          minW={{
            sm: 'container.sm',
          }}
        >
          <VStack>
            <Heading as="h2" size="lg" mb={4}>
              Register
            </Heading>
          </VStack>
          <form onSubmit={handleSubmit(handleSubmitCallback)}>
            {isError && (
              <FormError
                title="Registration error"
                description={errorMessage}
              />
            )}
            <FormControl isInvalid={formState.errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                // type="email"
                id="email"
                placeholder="Provide your email"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address.',
                  },
                  minLength: 3,
                })}
              />
              {formState.errors.email ? (
                <FormErrorMessage>Invalid email address.</FormErrorMessage>
              ) : (
                <FormHelperText>We'll never share your email.</FormHelperText>
              )}
            </FormControl>
            <FormControl mt={6} isInvalid={formState.errors.nickname}>
              <FormLabel htmlFor="nickname">Nickname</FormLabel>
              <Input
                id="nickname"
                placeholder="Provider your nickname"
                {...register('nickname', {
                  required: true,
                  minLength: 3,
                })}
              />
              {formState.errors.nickname ? (
                <FormErrorMessage>
                  Nickname is invalid, provide at least three characters.
                </FormErrorMessage>
              ) : (
                <FormHelperText>
                  Nickname will be visible to other users. Also you will be able
                  to log in with username.
                </FormHelperText>
              )}
            </FormControl>
            <FormControl mt={6} isInvalid={formState.errors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                placeholder="Provider your password"
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                })}
              />
              {formState.errors.password && (
                <FormErrorMessage>
                  Invalid password, provide at least six characters.
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={6} isInvalid={formState.errors.retypePassword}>
              <FormLabel htmlFor="retype-password">Retype password</FormLabel>
              <Input
                id="retype-password"
                placeholder="Retype your password"
                type="password"
                {...register('retypePassword', {
                  required: true,
                  minLength: 6,
                  validate: (value) => value === watch('password'),
                })}
              />
              {formState.errors.retypePassword && (
                <FormErrorMessage>The passwords do not match.</FormErrorMessage>
              )}
            </FormControl>
            <Button
              mt={6}
              width="full"
              type="submit"
              colorScheme="orange"
              isLoading={isRegistering}
              loadingText="Registration in progress..."
            >
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
