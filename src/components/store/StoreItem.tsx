import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ReactComponent as BookMarkIcon } from '../../assets/icon/store/store_bookmark_icon.svg';

import ProductType from '../../types/product';

interface ItemProps {
  product: ProductType;
}

export const StoreItem: React.FC<ItemProps> = ({ product }) => {
  const history = useHistory();
  function storeItemClicked() {
    history.push({
      pathname: `/store/product/${product.id}`,
      state: {
        productId: product.id,
      },
    });
  }
  return (
    <Container onClick={storeItemClicked}>
      <img
        className="storeitem-product-image"
        alt="제품 이미지"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfo5ggO-mCx7vbS7DrncVRy6G1BXGMbgzi0g&usqp=CAU"
      />
      <div className="storeitem-flex-column storeitem-info-container">
        <div className="storeitem-brand">{product.brand_title}</div>
        <div className="storeitem-product-title">{product.title}</div>
        <div className="storeitem-original-price">
          {product.competitor_price}
        </div>
        <div className="storeitem-saled-price">
          {Math.round(
            ((product.competitor_price - product.price) /
              product.competitor_price) *
              100
          )}
          % {product.price}
        </div>
        <div className="storeitem-saved-count-block">
          <BookMarkIcon />

          <div className="storeitem-saved-count">{product.books_count}</div>
        </div>
      </div>
    </Container>
  );
};

export default StoreItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 187px;
  margin-bottom: 31px;

  .storeitem-flex-column {
    display: flex;
    flex-direction: column;
  }

  .storeitem-product-image {
    width: 100%;
    height: 220px;

    object-fit: cover;
  }

  .storeitem-info-container {
    padding: 0 16px;

    .storeitem-brand {
      font-size: 12px;
      font-weight: bold;
      font-style: normal;
      line-height: 16px;
      letter-spacing: 0.6px;
      color: ${(props) => props.theme.colors.black};

      margin-top: 10px;
    }

    .storeitem-product-title {
      font-size: 10px;
      font-style: normal;
      line-height: 12px;
      letter-spacing: 0.5px;

      margin-top: 5px;
      word-break: keep-all;
    }

    .storeitem-original-price {
      font-size: 11px;
      font-style: normal;
      line-height: 14px;
      letter-spacing: 0;

      color: ${(props) => props.theme.colors.gray3};
      margin-top: 7px;
    }

    .storeitem-saled-price {
      font-size: 15px;
      font-weight: bold;
      font-style: normal;
      line-height: 22px;
      letter-spacing: 0;

      color: ${(props) => props.theme.colors.primary1};
      margin-top: 3px;
    }

    .storeitem-saved-count-block {
      display: flex;
      align-items: center;

      .storeitem-saved-count {
        font-style: normal;
        line-height: 19px;
        letter-spacing: 0.55px;
        font-size: 11px;

        color: ${(props) => props.theme.colors.gray2};
        margin: 4px 0 0 7px;
      }
    }
  }
`;
