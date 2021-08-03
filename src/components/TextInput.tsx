import { defaultColors } from '../constants/color';
import styled, { css } from 'styled-components';

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
  color: ${defaultColors.black}

  background-color: ${defaultColors.white};
  border: 0.5px solid;
  border-color: ${(props) =>
    props.errorOcurred ? defaultColors.red1 : defaultColors.gray4};
  &:placeholder {
    color: ${defaultColors.gray3};
  }
  &:focus{
    outline:none;
  }
`;
