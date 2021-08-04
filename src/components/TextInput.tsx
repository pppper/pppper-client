import styled from 'styled-components';

interface TextInputProps {
  errorOcurred?: boolean;
}

export const TextInput = styled.input<TextInputProps>`
  width: 100%;
  height: 44px;
  // autolayout
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 13px 10px 11px;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  border: 0.5px solid;
  border-color: ${(props) =>
    props.errorOcurred ? props.theme.colors.red1 : props.theme.colors.gray4};
  &:placeholder {
    color: ${(props) => props.theme.colors.gray3};
  }
  &:focus {
    outline: none;
  }
`;
