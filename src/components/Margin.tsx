import styled from 'styled-components';

interface MarginProps {
  margin: number;
}
export const Margin = styled.div<MarginProps>`
  background-color: rgb(0, 0, 0, 0);
  height: ${(props) => props.margin}px;
`;
