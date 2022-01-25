import { Dispatch } from 'react';
import { QueryResponse, ResponseInterceptor } from 'react-fetching-library';
import {
  AuthAction,
  SET_TOKENS,
  SET_UNAUTHORIZED,
} from '../../context/auth/auth.reducer';
import { refreshTokenAction } from '../actions/auth/auth.actions';
import { RefreshTokenResponse } from '../actions/auth/auth.types';
import { Action } from '../types';

let refreshPromise: Promise<QueryResponse<RefreshTokenResponse>> | null = null;

export const refreshTokenInterceptor = (
  refreshToken: string,
  dispatch: Dispatch<AuthAction>,
): ResponseInterceptor => (client) => async (
  action: Action,
  response: QueryResponse<unknown>,
) => {
  if (
    action.config &&
    (action.config.skipAuthorization || action.config.skipRefreshToken)
  ) {
    return response;
  }

  if (response.status === 401) {
    if (!refreshPromise) {
      refreshPromise = client
        .query<RefreshTokenResponse>(
          refreshTokenAction({
            refreshToken,
          }),
        )
        .then((refreshResponse) => {
          if (refreshResponse.error || !refreshResponse.payload) {
            dispatch({
              type: SET_UNAUTHORIZED,
            });

            refreshPromise = null;

            return refreshResponse;
          }

          dispatch({
            refreshToken,
            type: SET_TOKENS,
            accessToken: refreshResponse.payload.accessToken,
          });

          refreshPromise = null;

          return refreshResponse;
        });
    }

    const refreshResponse = await refreshPromise;

    if (refreshResponse.error || !refreshResponse.payload) {
      return response;
    }

    return client.query({
      ...action,
      headers: {
        ...action.headers,
        'x-auth-token': refreshResponse.payload.accessToken,
      },
    });
  }

  return response;
};
