import React, { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';

import StoreHomePage from './pages/StoreHomePage';
import StoreCategoryPage from './pages/StoreCategoryPage';
import ProductCollectionPage from './pages/store/category/ProductCollectionPage';

import { useAlert } from './lib/hooks/useAlert';

import { lightTheme } from './styles/theme';
import NavigationBar from './components/base/gnb/GlobalNavigationBar';
import { Margin } from './components/Margin';

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
  const { showAlert } = useAlert();

  return (
    <ThemeProvider theme={theme}>
      <Margin margin={60} />
      <Route path="/store" exact>
        <StoreHomePage />
      </Route>
      <Route path="/store/category" exact>
        <StoreCategoryPage />
      </Route>
      <Route
        path="/store/category/:id"
        exact
        component={ProductCollectionPage}
      />
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
      {/* <Route path="/test">
        <Product />
        <SearchBar />
      </Route> */}
      <NavigationBar />
    </ThemeProvider>
  );
}

export default App;
