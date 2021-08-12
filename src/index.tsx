import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { AlertContextProvider } from './lib/providers/AlertProvider';
import store from './modules/store';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <AlertContextProvider>
          <App />
        </AlertContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
