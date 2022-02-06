import { Action } from '../../types';
import {
  LoginPayload,
  LoginResponse,
  RefreshTokenPayload,
  RefreshTokenResponse,
  RegisterErrorResponse,
  RegisterPayload,
} from './auth.types';

export const loginAction = (payload: LoginPayload): Action<LoginResponse> => ({
  method: 'POST',
  endpoint: '/account/login',
  body: payload,
  config: {
    skipAuthorization: true,
  },
});

export const registerAction = (
  payload: RegisterPayload,
): Action<RegisterErrorResponse> => ({
  method: 'POST',
  endpoint: '/account-registration',
  body: payload,
  config: {
    skipAuthorization: true,
  },
});

export const refreshTokenAction = (
  payload: RefreshTokenPayload,
): Action<RefreshTokenResponse> => ({
  method: 'POST',
  endpoint: '/account/refresh-token',
  body: payload,
});
