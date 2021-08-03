import { defaultColors } from '../constants/color';
import styled, { css } from 'styled-components';

interface ButtonProps {
  active?: boolean;
  outlined?: boolean;
}
export const CustomButton = styled.button<ButtonProps>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  border: 0px;
  ${(props) => (props.outlined ? outlinedButtonStyle : filledButtonStyle)}
`;

interface FilledButtonProps {
  active?: boolean;
}

const filledButtonStyle = css<FilledButtonProps>`
  background-color: ${(props) =>
    props.active ? defaultColors.primary1 : defaultColors.gray3};
  color: ${defaultColors.white};

  transition: color, background-color 0.4s ease;
`;

interface OutlinedButtonProps {
  active?: boolean;
}
const outlinedButtonStyle = css<OutlinedButtonProps>`
  background-color: ${defaultColors.white};
  color: ${(props) =>
    props.active ? defaultColors.primary1 : defaultColors.gray2};
  border: 1px solid;
  border-color: ${(props) =>
    props.active ? defaultColors.primary1 : defaultColors.gray3};
`;
