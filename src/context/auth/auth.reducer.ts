import { AuthContextState } from './auth.context';

export type AuthAction = {
  type: string;
  accessToken?: string;
  refreshToken?: string;
};

export const SET_AUTHORIZED = 'auth/set-authorized';
export const START_AUTHORIZING = 'auth/start-authorizing';
export const SET_UNAUTHORIZED = 'auth/set-unauthorized';
export const SET_TOKENS = 'auth/set-tokens';
export const LOGOUT = 'auth/logout';

export const authReducer = (
  state: AuthContextState,
  action: AuthAction,
): AuthContextState => {
  switch (action.type) {
    case SET_AUTHORIZED:
      return {
        ...state,
        isAuthorized: true,
        isAuthorizing: false,
      };

    case START_AUTHORIZING:
      return {
        ...state,
        isAuthorizing: true,
      };

    case SET_UNAUTHORIZED:
      return {
        ...state,
        isAuthorizing: false,
        isAuthorized: false,
        accessToken: null,
      };

    case SET_TOKENS:
      return {
        ...state,
        accessToken: action.accessToken ?? null,
        refreshToken: action.refreshToken ?? null,
      };

    case LOGOUT: {
      return {
        ...state,
        accessToken: null,
        isAuthorized: false,
        isAuthorizing: false,
        refreshToken: null,
      };
    }

    default:
      return state;
  }
};
