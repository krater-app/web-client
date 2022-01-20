import { Action } from '../../types';
import {
  LoginPayload,
  LoginResponse,
  RegisterErrorResponse,
  RegisterPayload,
} from './auth.types';

export const loginAction = (payload: LoginPayload): Action<LoginResponse> => ({
  method: 'POST',
  endpoint: '/account/login',
  body: payload,
});

export const registerAction = (
  payload: RegisterPayload,
): Action<RegisterErrorResponse> => ({
  method: 'POST',
  endpoint: '/account-registration',
  body: payload,
});
