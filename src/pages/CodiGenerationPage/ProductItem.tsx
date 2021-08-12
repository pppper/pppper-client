import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components/macro';

import ImagePlaceholder from '../../components/ImagePlaceholder';
import { SizedBox } from '../../components/SizedBox';
import IProduct from '../../types/product';
import { resolveImageUrl } from '../../utils/resolveUrl';

interface IProductItemProps {
  product: IProduct;
  selected?: boolean;
  starred?: boolean;
  onStarClick?: React.MouseEventHandler;
  onToggle?: React.MouseEventHandler;
}

const ProductItem: React.FC<IProductItemProps> = (props) => {
  const { product, selected, starred, onStarClick, onToggle } = props;
  const discountPercentage = Math.floor(
    ((product.price - product.originalPrice) / product.price) * 100
  );
  return (
    <Wrapper onClick={onToggle}>
      <ProductImage
        selected={selected}
        src={resolveImageUrl(product.mainImage)}
      ></ProductImage>
      <SizedBox height={6} />
      <Metadata>
        <Brand>{product.brandName}</Brand>
        <SizedBox height={2}></SizedBox>
        <PriceRow>
          <span className="price">{product.price}원 </span>
          <SizedBox width="0.2rem"></SizedBox>
          <span className="discount-percentage">{discountPercentage}%</span>
        </PriceRow>
        {starred ? (
          <FilledStar onClick={onStarClick} />
        ) : (
          <OutlinedStar onClick={onStarClick} />
        )}
      </Metadata>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 111px;
`;

interface IProductImageProps {
  selected?: boolean;
  src?;
}

const ProductImage = styled(ImagePlaceholder)<IProductImageProps>`
  width: 100%;
  max-width: 111px;
  height: 111px;
  max-height: 111px;
  border: solid 2px ${(props) => props.theme.colors.primary1};
  border-radius: 4px;
  ${(props) => (props.selected ? '' : 'border: none')};
  background-color: black;
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  position: relative;

  width: 100%;
`;

const Brand = styled.span`
  width: 100%;
  text-align: left;
  align-self: left;

  font-size: 10px;
  color: ${(props) => props.theme.colors.gray2};
`;

const PriceRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  span.price {
    font-size: 10px;
    line-height: 13px;
    color: ${(props) => props.theme.colors.black};
  }

  span.discount-percentage {
    font-size: 10px;
    line-height: 13px;
    color: ${(props) => props.theme.colors.primary1};
  }
`;

const FilledStar = styled(AiFillStar)`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${(props) => props.theme.colors.gray2};
`;

const OutlinedStar = styled(AiOutlineStar)`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${(props) => props.theme.colors.gray2};
`;

export default ProductItem;
