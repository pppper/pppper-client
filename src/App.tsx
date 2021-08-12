import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { useAlert } from './lib/hooks/useAlert';
import CodiGenerationPage from './pages/CodiGenerationPage';
import SlidingMenuBarTestingPage from './pages/component-testing/SlidingMenuBarTestingPage';
import ProductCollectionPage from './pages/store/category/ProductCollectionPage';
import StoreCategoryPage from './pages/StoreCategoryPage';
import StoreHomePage from './pages/StoreHomePage';
import { lightTheme } from './styles/theme';

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
    </ThemeProvider>
  );
}

export default App;
