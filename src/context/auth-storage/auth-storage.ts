const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

class AuthStorage {
  private accessToken: string | null;

  private refreshToken: string | null;

  constructor() {
    try {
      this.accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
      this.refreshToken = sessionStorage.getItem(REFRESH_TOKEN_KEY);
    } catch {
      this.accessToken = null;
      this.refreshToken = null;
    }
  }

  public getAccessToken() {
    return this.accessToken;
  }

  public getRefreshToken() {
    return this.refreshToken;
  }

  public setAccessToken(value: string | null) {
    try {
      if (typeof value === 'string') {
        sessionStorage.setItem(ACCESS_TOKEN_KEY, value);
      } else {
        sessionStorage.removeItem(ACCESS_TOKEN_KEY);
      }
    } catch {}
  }

  public setRefreshToken(value: string | null) {
    try {
      if (typeof value === 'string') {
        sessionStorage.setItem(REFRESH_TOKEN_KEY, value);
      } else {
        sessionStorage.removeItem(REFRESH_TOKEN_KEY);
      }
    } catch {}
  }
}

export const authStorage = new AuthStorage();
