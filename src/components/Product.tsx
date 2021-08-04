import styled, { css } from 'styled-components';
import { useState } from 'react';
import { CustomButton } from './Button';

interface ProductProps {}

export const Product: React.FC<ProductProps> = (props) => {
  return (
    <Row>
      <CheckContainer>
        <input type="checkbox" />
      </CheckContainer>
      <ImageColumn>
        <ProductImage />
        <ButtonRow>
          <Button>
            <ButtonImage src={process.env.PUBLIC_URL + '/decrement.svg'} />
          </Button>
          <Count>
            <CountText>1</CountText>
          </Count>
          <Button>
            <ButtonImage src={process.env.PUBLIC_URL + '/increment.svg'} />
          </Button>
        </ButtonRow>
      </ImageColumn>
      <ProdcutInformationContainer>
        <Row>
          <ProuductTitle>
            productnamethisisneverthatdfasdfasdfascasdfascsd
          </ProuductTitle>
          <DeleteButton outlined={true} active={false}>
            삭제
          </DeleteButton>
        </Row>
        <MaxRow>
          <ProductOptionStatus>
            <div>color</div>
            <div>status</div>
          </ProductOptionStatus>
          <Price>price</Price>
        </MaxRow>
      </ProdcutInformationContainer>
    </Row>
  );
};

const ProductImage = styled.img`
  flex: 1;
  width: 90px;
  height: 106px;
`;
const CheckContainer = styled.div``;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MaxRow = styled(Row)`
  height: 100%;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProdcutInformationContainer = styled(Column)`
  width: 100%;
  margin-top: 5px;
`;
const ProuductTitle = styled.div`
  margin-right: 10px;
  word-break: break-all;
`;
const Price = styled.div`
  display: flex;
  align-items: flex-end;
`;
const ProductOptionStatus = styled(Column)`
  width: 100%;
  justify-content: space-around; // space-between
`;

const DeleteButton = styled(CustomButton)`
  border-radius: 2px;
  width: 33px;
  height: 20px;
  font-size: 9px;
  line-height: 15px;
  white-space: pre;
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;
const ButtonImage = styled.img``;
const Count = styled.div`
  background: ${(props) => props.theme.defaultColors.white};
  border: 1px solid ${(props) => props.theme.defaultColors.gray6};
  width: 32px;
  height: 23px;
  border-radius: 2px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const CountText = styled.div``;
const ButtonRow = styled(Row)`
  margin-top: 4px;
  justify-content: space-evenly;
`;
const ImageColumn = styled(Column)`
  margin-right: 7px;
`;
