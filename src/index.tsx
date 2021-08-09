import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { GlobalStyle } from './styles/Globalstyle';

import { AlertContextProvider } from './providers/AlertProvider';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
