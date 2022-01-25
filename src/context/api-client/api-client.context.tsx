import { ReactNode, useMemo } from 'react';
import { createClient, ClientContextProvider } from 'react-fetching-library';
import { refreshTokenInterceptor } from '../../api/interceptors/refresh-token.interceptor';
import { requestAuthInterceptor } from '../../api/interceptors/request-auth.interceptor';
import { requestHostInterceptor } from '../../api/interceptors/request-host.interceptor';
import { useAuthState } from '../../hooks/use-auth-state/use-auth-state.hook';

interface Props {
  children: ReactNode;
}

export const ApiClientContext = ({ children }: Props) => {
  const {
    state: { accessToken, refreshToken },
    dispatch,
  } = useAuthState();

  const baseUrl = 'http://localhost:4000';

  const client = useMemo(() => {
    return createClient({
      requestInterceptors: [
        requestHostInterceptor(baseUrl),
        requestAuthInterceptor(accessToken),
      ],
      responseInterceptors: [
        refreshTokenInterceptor(refreshToken ?? '', dispatch),
      ],
    });
  }, [baseUrl, accessToken, refreshToken, dispatch]);

  return (
    <ClientContextProvider client={client}>{children}</ClientContextProvider>
  );
};
