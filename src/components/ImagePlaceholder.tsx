import styled from 'styled-components';

import { generateRandomColor } from '../pages/CodyGenerationPage';

const ImagePlaceholder = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${(props) => generateRandomColor()};
`;

export default ImagePlaceholder;
