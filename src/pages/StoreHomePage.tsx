import React from 'react';
import styled from 'styled-components';

import { DividedList } from '../components/DividedList';
import { BrandIntroduction } from '../components/BrandIntroduction';
import { Margin } from '../components/Margin';

import { IonSearchbar } from '@ionic/react';

interface IStoreHomeProps {}

export default function StoreHomePage(props: IStoreHomeProps) {
  return (
    <>
      <StoreHeader>
        <StoreTitle>스토어</StoreTitle>
        <DividedList list={['카테고리', '브랜드']} />
        <Margin margin={24} />
        <SearchBar show-clear-button="always" type="tel" placeholder="" />
        <Margin margin={35} />
        <SubTitle>BRAND</SubTitle>
      </StoreHeader>
      <BrandIntroduction />
      <BrandIntroduction />
      <BrandIntroduction />
      <BrandIntroduction />
    </>
  );
}

const StoreHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px 27px 6px 28px;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.colors.gray4};
`;

const StoreTitle = styled.div`
  font-size: 23px;
  line-height: 31px;
  letter-spacing: 1.15px;
  font-family: 'Pretendard';
  font-weight: 900;
  font-style: normal;
  text-align: left;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 19.5px;
`;

const SearchBar = styled(IonSearchbar)`
  .searchbar-input-container.sc-ion-searchbar-ios {
    max-height: 30px;
  }
  max-height: 30px;
  .searchbar-input.sc-ion-searchbar-ios {
    background-color: ${(props) => props.theme.colors.gray7};
    border-radius: 15px;
  }
`;
const SubTitle = styled.div`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  line-height: 26px;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
`;
