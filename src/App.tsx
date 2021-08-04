import React from 'react';
import { CustomButton } from './components/Button';
import { Product } from './components/Product';
import { SearchBar } from './components/SearchBar';
import { TextInput } from './components/TextInput';

function App() {
  return (
    <div>
      <CustomButton active={true} outlined={true}>
        fffff
      </CustomButton>
      <TextInput placeholder="dfdf"></TextInput>
      <SearchBar length="long" />
      <Product />
    </div>
  );
}

export default App;
