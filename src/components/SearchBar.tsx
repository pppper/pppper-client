import styled from 'styled-components';
import { useState } from 'react';

type SearchBarLength = 'long' | 'short';

interface SearchBarProps {
  length?: SearchBarLength;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { length } = props;
  const [searchValue, setSearchValue] = useState('');
  function handleClearButtonClick() {
    setSearchValue('');
  }
  return (
    <Container length={length}>
      <SearchIcon src={process.env.PUBLIC_URL + '/search.svg'} />
      <SearchInput
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <ClearButton onClick={handleClearButtonClick}>
        <ClearButtonIcon src={process.env.PUBLIC_URL + '/clear.svg'} />
      </ClearButton>
    </Container>
  );
};

const Container = styled.div<{ length: SearchBarLength }>`
  width: ${(props) => (props.length === 'long' ? '343px' : '303px')};
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.gray7};
  border: 0;

  transition: width 0.4s ease;
`;
const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 14px 0px 10px;
`;

const SearchInput = styled.input`
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  color: ${(props) => props.theme.colors.black};
  font-size: 15px;
  line-height: 22px;
  margin: 5px 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  &:placeholder {
    color: ${(props) => props.theme.colors.gray3};
  }
  &:focus {
    outline: none;
  }
  flex: 1;
`;
const ClearButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;
const ClearButtonIcon = styled.img`
  margin-right: 10px;
`;
