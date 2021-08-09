import React from 'react';
import styled from 'styled-components';

interface ItemProps {}
export const StoreItem: React.FC<ItemProps> = () => {
  return (
    <Container>
      <img />
      <div className="storeitem-flex-column storeitem-info-container">
        <div className="storeitem-brand"></div>
        <div className="storeitem-product-title"></div>
        <div className="storeitem-competitor-price"></div>
        <div className="storeitem-price"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .storeitem-flex-column {
    display: flex;
    flex-direction: column;
  }
  .storeitem-info-container {
    padding-left: 16px;

    .storeitem-brand {
      font-size: 12px;
      font-weight: bold;
      font-style: normal;
      line-height: 16px;
      letter-spacing: 0.6px;
      color: ${(props) => props.theme.colors.black};
    }
    .storeitem-product-title {
    }
    .storeitem-competitor-price {
    }
    .storeitem-price {
    }
  }
`;
