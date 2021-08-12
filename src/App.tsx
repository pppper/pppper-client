import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import NavigationBar from './components/base/gnb/GlobalNavigationBar';
import { Margin } from './components/Margin';

import StoreHomePage from './pages/store/StoreHomePage';
import StoreCategoryPage from './pages/store/category/StoreCategoryPage';
import ProductCollectionPage from './pages/store/category/ProductCollectionPage';
import ProductDetailPage from './pages/store/ProductDetailPage';
import CodiGenerationPage from './pages/CodiGenerationPage';
import SlidingMenuBarTestingPage from './pages/component-testing/SlidingMenuBarTestingPage';

import { useAlert } from './lib/hooks/useAlert';

import { lightTheme } from './styles/theme';

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

      <Route path="/codi/new">
        <CodiGenerationPage />
      </Route>
      <Route path="/component-testing/sliding-menu-bar-testing">
        <SlidingMenuBarTestingPage />
      </Route>
      <Route
        path="/store/category/:id"
        exact
        component={ProductCollectionPage}
      />
      <Route path="/store/product/:id" exact component={ProductDetailPage} />
      <Margin margin={76} />
      <NavigationBar />
    </ThemeProvider>
  );
}

export default App;
