import { AuthContextState } from './auth.context';

export type AuthAction = {
  type: string;
};

export const SET_AUTHORIZED = 'auth/set-authorized';
export const START_AUTHORIZING = 'auth/start-authorizing';
export const SET_UNAUTHORIZED = 'auth/set-unauthorized';

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
      };

    default:
      return state;
  }
};
