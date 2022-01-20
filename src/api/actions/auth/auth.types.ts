export interface LoginPayload {
  nickname?: string;
  password?: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface RegisterPayload {
  email?: string;
  nickname?: string;
  password?: string;
}

export interface RegisterErrorResponse {
  error: string;
}
