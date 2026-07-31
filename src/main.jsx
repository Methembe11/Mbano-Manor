import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';
import { GlobalStyle } from './globalStyles';
import { LightboxProvider } from './context/Lightbox';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LightboxProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </LightboxProvider>
    </ThemeProvider>
  </React.StrictMode>
);
