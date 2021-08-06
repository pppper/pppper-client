import React, { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { useAlert } from './hooks/useAlert';
import { CustomButton } from './components/Button';
import { Product } from './components/Product';
import { SearchBar } from './components/SearchBar';
import { TextInput } from './components/TextInput';
import { lightTheme } from './themes';
import { Route } from 'react-router-dom';
import StoreHomePage from './pages/StoreHomePage';

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
  const { showAlert } = useAlert();

  return (
    <ThemeProvider theme={theme}>
      <Route path="/store" exact={true}>
        <StoreHomePage />
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
    </ThemeProvider>
  );
}

export default App;
