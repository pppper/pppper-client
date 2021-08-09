import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    font-family: 'Pretendard';
  }
  body{
    margin:0;
  }
  input::-ms-clear,
  input::-ms-reveal{
	display:none;width:0;height:0;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration{
	display:none;
  }
`;
