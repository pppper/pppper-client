import React from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ReactComponent as BookMarkIcon } from '../../assets/icon/store/store_bookmark_icon.svg';
import IProduct from '../../types/product';

type StoreItemSizeType = 'small' | 'large';
interface ItemProps {
  product: IProduct;
  type: StoreItemSizeType;
}

const getWrapperStyle = (type: StoreItemSizeType) => {
  switch (type) {
    case 'small':
      return css`
        width: 140px;
        margin-bottom: 26px;
      `;
    case 'large':
      return css`
        width: 187.5px;
        margin-bottom: 31px;
      `;
    default:
      return null;
  }
};

export const StoreItem: React.FC<ItemProps> = ({ product, type }) => {
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
    <StoreItemWrapper type={type} onClick={storeItemClicked}>
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
        <div className="storeitem-bookmark-count-block">
          <BookMarkIcon />

          <div className="storeitem-bookmark-count">{product.books_count}</div>
        </div>
      </div>
    </StoreItemWrapper>
  );
};

export default StoreItem;

const StoreItemWrapper = styled.div<{ type: StoreItemSizeType }>`
  display: flex;
  flex-direction: column;

  ${({ type }) => getWrapperStyle(type)}

  .storeitem-flex-column {
    display: flex;
    flex-direction: column;
  }

  .storeitem-product-image {
    width: 100%;
    height: ${({ type }) => (type === 'small' ? '140px' : '220px')};

    object-fit: cover;
  }

  .storeitem-info-container {
    padding: ${({ type }) => (type === 'small' ? '0px' : '0 16px')};

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

    .storeitem-bookmark-count-block {
      display: flex;
      align-items: center;

      .storeitem-bookmark-count {
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
