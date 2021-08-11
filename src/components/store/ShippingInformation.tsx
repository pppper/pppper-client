import React from 'react';
import { useHistory } from 'react-router-dom';

import { Margin } from '../Margin';
import styled from 'styled-components';

interface IShippingInformation {}

const ShippingInformation: React.FC<IShippingInformation> = () => {
  return (
    <StyledContainer className="flex-col">
      <div className="shipping-section-title">배송 정보</div>
      <Margin margin={12} />
      <div className="flex-row">
        <div className="shipping-label-wrapper flex-col">
          <div className="shipping-label">배송비</div>
          <div className="shipping-label">배송방법</div>
          <div className="shipping-label">배송기간</div>
        </div>
        <div className="flex-col">
          <div className="shipping-value">전 상품 무료배송</div>
          <div className="shipping-value">국내 배송 / 업체 직접 배송 </div>
          <div className="shipping-value">
            금일 주문시 00/00일(요일) 출고 예정 / 주말, 공휴일 제외
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default ShippingInformation;

const StyledContainer = styled.div`
  padding: 16px 16px 21px;
  .shipping-section-title {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.colors.black};
  }
  .shipping-label-wrapper {
    margin-right: 45px;
  }
  .shipping-label {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 16px;
    margin-bottom: 9px;
    color: ${(props) => props.theme.colors.gray3};
  }
  .shipping-value {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 9px;
    line-height: 16px;
  }
`;
