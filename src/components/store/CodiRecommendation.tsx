import React from 'react';
import { useHistory } from 'react-router-dom';

import { Margin } from '../Margin';
import styled from 'styled-components';

interface ICodiRecommendation {}

const CodiRecommendation: React.FC<ICodiRecommendation> = () => {
  return (
    <RecommendationContainer className="flex-col">
      <div className="recommend-title">패퍼의 코디 추천</div>
      <Margin margin={11} />
      <div className="recommend-codi-image-wrapper flex-row">
        <img className="recommend-codi-image " />
        <img className="recommend-codi-image " />
        <img className="recommend-codi-image " />
        <img className="recommend-codi-image " />
      </div>
    </RecommendationContainer>
  );
};

const RecommendationContainer = styled.div`
  padding: 24px 0px 24px 16px;
  border-bottom: 4px solid;
  border-color: ${(props) => props.theme.colors.gray7};
  .recommend-title {
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 21px;
    text-align: left;
    color: ${(props) => props.theme.colors.black};
  }
  .recommend-codi-image-wrapper {
    overflow: scroll;
    /* margin-right: 10.6px; */
  }
  .recommend-codi-image {
    min-width: 135px;
    height: 135px;
    margin-right: 5.4px;
  }
`;

export default CodiRecommendation;
