import React from 'react';
import styled from 'styled-components';

import { DividedList } from '../components/DividedList';
import { BrandIntroduction } from '../components/BrandIntroduction';
import { Margin } from '../components/Margin';

import { IonSearchbar } from '@ionic/react';

interface IStoreHomeProps {}

export default function StoreHomePage(props: IStoreHomeProps) {
  return (
    <Container>
      <div className="store-flex-column store-header">
        <div className="store-section-title">스토어</div>
        <DividedList list={['카테고리', '브랜드']} />
        <Margin margin={24} />
        <IonSearchbar
          className="store-search-bar"
          show-clear-button="always"
          placeholder=""
        />
        <Margin margin={35} />
        <div className="store-subsection-title">BRAND</div>
      </div>
      <BrandIntroduction />
      <BrandIntroduction />
      <BrandIntroduction />
      <BrandIntroduction />
    </Container>
  );
}

const Container = styled.div`
  .store-flex-column {
    display: flex;
    flex-direction: column;
  }
  .store-header {
    padding: 9px 27px 6px 28px;
    border-bottom: 2px solid;
    border-color: ${(props) => props.theme.colors.gray4};
  }
  .store-section-title {
    font-size: 23px;
    line-height: 31px;
    letter-spacing: 1.15px;
    font-family: 'Pretendard';
    font-weight: 900;
    font-style: normal;
    text-align: left;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 19.5px;
  }
  .store-search-bar {
    .searchbar-input-container.sc-ion-searchbar-ios {
      max-height: 30px;
    }
    max-height: 30px;
    .searchbar-input.sc-ion-searchbar-ios {
      background-color: ${(props) => props.theme.colors.gray7};
      border-radius: 15px;
    }
  }
  .store-subsection-title {
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    line-height: 26px;
    text-align: center;
    color: ${(props) => props.theme.colors.black};
  }
`;
