import React, { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { CustomButton } from './components/Button';
import { Product } from './components/Product';
import { SearchBar } from './components/SearchBar';
import { TextInput } from './components/TextInput';
import { lightTheme } from './themes';

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <CustomButton active={true} outlined={true}>
        fffff
      </CustomButton>
      <TextInput placeholder="dfdf"></TextInput>
      <SearchBar length="long" />
      <Product />
    </ThemeProvider>
  );
}

export default App;
