import React, { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';

import { CustomButton } from './components/Button';
import { Product } from './components/Product';
import { SearchBar } from './components/SearchBar';
import { TextInput } from './components/TextInput';

import StoreHomePage from './pages/StoreHomePage';
import StoreCategoryPage from './pages/StoreCategoryPage';

import { useAlert } from './lib/hooks/useAlert';

import { lightTheme } from './styles/theme';
import NavigationBar from './components/base/gnb/GlobalNavigationBar';

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
  const { showAlert } = useAlert();

  return (
    <ThemeProvider theme={theme}>
      <Route path="/store" exact>
        <StoreHomePage />
      </Route>
      <Route path="/store/category" exact>
        <StoreCategoryPage />
      </Route>
      {/* <CustomButton
        active={true}
        outlined={true}
        onClick={() => {
          showAlert({
            header: 'hi',
            subtitle: 'subtitle',
            message: 'message',
            buttons: ['hi', 'bye'],
          });
        }}
      >
        fffff
      </CustomButton>
      <TextInput placeholder="dfdf"></TextInput>
      <SearchBar length="long" />
      <Product /> */}
      <Route path="/test">
        <Product />
        <SearchBar />
      </Route>
      <NavigationBar />
    </ThemeProvider>
  );
}

export default App;
