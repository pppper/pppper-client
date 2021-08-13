import React from 'react';
import { useHistory } from 'react-router-dom';
import IProduct from '../../types/product';

import { ReactComponent as ShareIcon } from '../../assets/icon/detail/detail_share_icon.svg';
import { ReactComponent as Star } from '../../assets/icon/detail/detail_star_icon.svg';
import { Margin } from '../Margin';
import styled from 'styled-components';

interface IDetailProductionInformationProps {
  product: IProduct;
}

const DetailProductInformation: React.FC<IDetailProductionInformationProps> = ({
  product,
}) => {
  return (
    <StyledProductInformation className="flex-col">
      <div className="detail-product-title-wrapper flex-row">
        <div className="detail-product-title ">{product.title}</div>
        <ShareIcon />
      </div>
      <Margin margin={11} />
      <div className="detail-starred-wrapper flex-row">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <div className="detail-review-count">3,999개 리뷰보기</div>
      </div>
      <Margin margin={28} />
      <div className="flex-col">
        <div className="detail-product-competitor-price">123,000원</div>
        <div className="flex-row">
          <div className="detail-product-discount-rate">45%</div>
          <div className="detail-product-price">
            25,300<span className="detail-product-price-unit">원</span>
          </div>
        </div>
      </div>
    </StyledProductInformation>
  );
};

export default DetailProductInformation;

const StyledProductInformation = styled.div`
  padding: 18px 16px 30px;
  border-bottom: 4px solid;
  border-color: ${(props) => props.theme.colors.gray7};
  .detail-product-title-wrapper {
    justify-content: space-between;
  }
  .detail-product-title {
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    line-height: 21px;
    color: ${(props) => props.theme.colors.black};
  }
  .detail-starred-wrapper {
    align-items: flex-start;
  }
  .detail-review-count {
    font-family: SpoqaHanSansNeo;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 14px;
    letter-spacing: normal;
    text-align: left;
    color: ${(props) => props.theme.colors.gray2};
    text-decoration: underline;
    margin-left: 7px;
  }
  .detail-product-competitor-price {
    min-height: 19px;
    font-family: SpoqaHanSansNeo;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 19px;
    letter-spacing: normal;
    text-align: left;
    color: ${(props) => props.theme.colors.gray3};
    text-decoration: line-through;
    margin-bottom: 3px;
  }
  .detail-product-price {
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: ${(props) => props.theme.colors.black};
  }
  .detail-product-price-unit {
    font-weight: normal;
    font-size: 18px;
    margin-left: 3px;
  }
  .detail-product-discount-rate {
    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    color: ${(props) => props.theme.colors.primary1};
    margin-right: 11px;
  }
`;
