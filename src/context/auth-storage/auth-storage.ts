const ACCESS_TOKEN_KEY = 'accessToken';

class AuthStorage {
  private accessToken: string | null;

  constructor() {
    try {
      this.accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
    } catch {
      this.accessToken = null;
    }
  }

  public getAccessToken() {
    return this.accessToken;
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
}

export const authStorage = new AuthStorage();
