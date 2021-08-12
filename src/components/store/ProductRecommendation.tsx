import React from 'react';
import { useHistory } from 'react-router-dom';

import { Margin } from '../Margin';
import styled from 'styled-components';

interface IProductRecommendationProps {}

const ProductRecommendation: React.FC<IProductRecommendationProps> = () => {
  return (
    <ProductRecommendationContainer className="flex-col">
      <div className="product-recommend-title">이 상품은 어때여?</div>
      <Margin margin={17} />
      <div className="recommended-product-wrapper flex-row">
        <div className="product-recommended"></div>
        <div className="product-recommended"></div>
        <div className="product-recommended"></div>
        <div className="product-recommended"></div>
        <div className="product-recommended"></div>
        <div className="product-recommended"></div>
      </div>
    </ProductRecommendationContainer>
  );
};

const ProductRecommendationContainer = styled.div`
  padding: 24px 0px 26px 16px;
  border-bottom: 6px solid;
  border-color: ${(props) => props.theme.colors.gray7};
  .product-recommend-title {
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 22px;
    color: ${(props) => props.theme.colors.black};
  }
  .recommended-product-wrapper {
    overflow: scroll;
  }
  .product-recommended {
    min-width: 140px;
    min-height: 264px;
    margin-right: 8px;
    border: 1px dotted;
  }
`;

export default ProductRecommendation;
