import styled, { css } from 'styled-components';
import { CustomButton } from './Button';

interface ProductProps {}

export const Product: React.FC<ProductProps> = (props) => {
  return (
    <ProductContainer>
      <div>
        <input type="checkbox" />
      </div>
      <div className="flex-column product-image-container">
        <img className="product-image" />
        <div className="flex-row image-button-container">
          <button className="image-button">
            <img src={process.env.PUBLIC_URL + '/decrement.svg'} />
          </button>
          <div className="product-count">
            <div>1</div>
          </div>
          <button className="image-button">
            <img src={process.env.PUBLIC_URL + '/increment.svg'} />
          </button>
        </div>
      </div>
      <div className="flex-column product-information">
        <div className="flex-row">
          <div className="product-title">
            productnamethisisneverthatdfasdfasdfascasdfascsd
          </div>
          <CustomButton className="delete-button" outlined active={false}>
            삭제
          </CustomButton>
        </div>
        <div className="flex-row max-height">
          <div className="flex-column product-option-status">
            <div>color</div>
            <div>status</div>
          </div>
          <div className="price">price</div>
        </div>
      </div>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .max-height {
    height: 100%;
  }
  .product-image {
    flex: 1;
    width: 90px;
    min-height: 106px;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .product-information {
    margin-top: 5px;
  }
  .product-title {
    margin-right: 10px;
    word-break: break-all;
  }
  .price {
    display: flex;
    align-items: flex-end;
  }
  .product-option-status {
    justify-content: space-around;
    width: 100%;
  }
  .delete-button {
    border-radius: 2px;
    width: 33px;
    height: 20px;
    font-size: 9px;
    line-height: 15px;
    white-space: pre;
  }
  .product-image-container {
    margin-right: 7px;
  }
  .product-count {
    background: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.gray6};
    width: 32px;
    height: 23px;
    border-radius: 2px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .image-button {
    background-color: rgba(255, 255, 255, 0);
    border: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
  .image-button-container {
    margin-top: 4px;
    justify-content: space-evenly;
  }
`;
