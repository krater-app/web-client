import { ReactNode, useMemo } from 'react';
import { createClient, ClientContextProvider } from 'react-fetching-library';
import { requestHostInterceptor } from '../../api/interceptors/request-host.interceptor';

interface Props {
  children: ReactNode;
}

export const ApiClientContext = ({ children }: Props) => {
  const baseUrl = 'http://localhost:4000';

  const client = useMemo(() => {
    return createClient({
      requestInterceptors: [requestHostInterceptor(baseUrl)],
      responseInterceptors: [],
    });
  }, [baseUrl]);

  return (
    <ClientContextProvider client={client}>{children}</ClientContextProvider>
  );
};
