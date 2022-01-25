export interface LoginPayload {
  nickname?: string;
  password?: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface RegisterPayload {
  email?: string;
  nickname?: string;
  password?: string;
}

export interface RegisterErrorResponse {
  error: string;
}

export interface RefreshTokenPayload {
  refreshToken?: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
}
