import { ReactNode, useMemo } from 'react';
import { createClient, ClientContextProvider } from 'react-fetching-library';
import { requestAuthInterceptor } from '../../api/interceptors/request-auth.interceptor';
import { requestHostInterceptor } from '../../api/interceptors/request-host.interceptor';
import { useAuthState } from '../../hooks/use-auth-state/use-auth-state.hook';

interface Props {
  children: ReactNode;
}

export const ApiClientContext = ({ children }: Props) => {
  const {
    state: { accessToken },
  } = useAuthState();

  const baseUrl = 'http://localhost:4000';

  const client = useMemo(() => {
    return createClient({
      requestInterceptors: [
        requestHostInterceptor(baseUrl),
        requestAuthInterceptor(accessToken),
      ],
      responseInterceptors: [],
    });
  }, [baseUrl, accessToken]);

  return (
    <ClientContextProvider client={client}>{children}</ClientContextProvider>
  );
};
