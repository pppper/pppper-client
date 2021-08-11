import styled from 'styled-components';

export interface ISizedBoxProps {
  width?: number;
  height?: number;
}

export const SizedBox = styled.div<ISizedBoxProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
