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
  transition: color, background-color 0.4s ease;
`;

interface FilledButtonProps {
  active?: boolean;
}

const filledButtonStyle = css<FilledButtonProps>`
  background-color: ${(props) =>
    props.active
      ? props.theme.defaultColors.primary1
      : props.theme.defaultColors.gray3};
  color: ${(props) => props.theme.defaultColors.white};
`;

interface OutlinedButtonProps {
  active?: boolean;
}
const outlinedButtonStyle = css<OutlinedButtonProps>`
  background-color: ${(props) => props.theme.defaultColors.white};
  color: ${(props) =>
    props.active
      ? props.theme.defaultColors.primary1
      : props.theme.defaultColors.gray2};
  border: 1px solid;
  border-color: ${(props) =>
    props.active
      ? props.theme.defaultColors.primary1
      : props.theme.defaultColors.gray3};

  &:hover {
    ${(props) =>
      props.active
        ? css`
            background-color: ${props.active
              ? props.theme.efaultColors.primary1
              : props.theme.defaultColors.gray3};
            color: ${(props) => props.theme.defaultColors.white};
          `
        : null}
  }
`;
