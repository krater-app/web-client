import { Action } from '../../types';
import { LoginPayload, LoginResponse } from './auth.types';

export const loginAction = (payload: LoginPayload): Action<LoginResponse> => ({
  method: 'POST',
  endpoint: '/account/login',
  body: payload,
});
