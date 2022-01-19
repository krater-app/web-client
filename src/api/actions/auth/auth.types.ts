export interface LoginPayload {
  nickname?: string;
  password?: string;
}

export interface LoginResponse {
  accessToken: string;
}
