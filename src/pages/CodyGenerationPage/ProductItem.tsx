import styled from 'styled-components/macro';

import ImagePlaceholder from '../../components/ImagePlaceholder';
import { SizedBox } from '../../components/SizedBox';
import { generateRandomColor } from './';

export interface IItem {
  brand: string;
  price: number;
  discount?: number; // in percent
  image?: string; // image
}

interface IProductItemProps {
  item: IItem;
  selected?: boolean;
}

const ProductItem: React.FC<IProductItemProps> = (props) => {
  const { item, selected } = props;
  return (
    <Wrapper>
      <ProductImage selected={selected}></ProductImage>
      <SizedBox height={6} />
      <Metadata>
        <Brand>{item.brand}</Brand>
      </Metadata>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface IProductImageProps {
  selected?: boolean;
}

const ProductImage = styled(ImagePlaceholder)<IProductImageProps>`
  width: 100%;
  max-width: 111px;
  height: 111px;
  max-height: 111px;
  border: solid 2px ${(props) => props.theme.colors.primary1};
  border-radius: 4px;
  ${(props) => (props.selected ? '' : 'border: none')};
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  width: 100%;
`;

const Brand = styled.span`
  width: 100%;
  text-align: left;
  align-self: left;

  font-size: 10px;
  color: ${(props) => props.theme.colors.gray2};
`;
export default ProductItem;
