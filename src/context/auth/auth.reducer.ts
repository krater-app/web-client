import { AuthContextState } from './auth.context';

export type AuthAction = {
  type: string;
};

export const SET_AUTHORIZED = 'auth/set-authorized';

export const authReducer = (
  state: AuthContextState,
  action: AuthAction,
): AuthContextState => {
  switch (action.type) {
    case SET_AUTHORIZED:
      return {
        ...state,
        isAuthorized: true,
      };

    default:
      return state;
  }
};
