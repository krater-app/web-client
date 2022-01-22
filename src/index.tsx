import { Buffer } from 'buffer';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme/theme';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import { ApiClientContext } from './context/api-client/api-client.context';
import { AppRoutes } from './routing/app-routes';
import { AuthProvider } from './providers/auth-provider/auth.provider';

window.Buffer = window.Buffer || Buffer;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="system" />
      <ApiClientContext>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </ApiClientContext>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
