import styled from 'styled-components';

export interface ISizedBoxProps {
  width?: number | string;
  height?: number | string;
}

export const SizedBox: React.FC<ISizedBoxProps> = ({ width, height }) => (
  <div style={{ width, height }}></div>
);
