import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { AlertContextProvider } from './providers/AlertProvider';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
  }
`;

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
