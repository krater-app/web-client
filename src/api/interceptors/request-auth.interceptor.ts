import { RequestInterceptor } from 'react-fetching-library';
import { Action } from '../types';

export const requestAuthInterceptor: (
  accessToken: string | null,
  // @ts-ignore
) => RequestInterceptor = (accessToken) => () => async (
  action: Action<unknown>,
) => {
  if (action.config && action.config.skipAuthorization) {
    return action;
  }

  return {
    ...action,
    headers: {
      'x-auth-token': accessToken,
      ...action.headers,
    },
  };
};
