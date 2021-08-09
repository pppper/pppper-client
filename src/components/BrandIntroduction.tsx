import React from 'react';
import styled from 'styled-components';
import { CustomButton } from './Button';
import { Margin } from './Margin';

interface BrandIntroProps {
  title?: string;
  subtitle?: string;
  content?: string;
  mainImage?: URL;
}
export const BrandIntroduction: React.FC<BrandIntroProps> = (props) => {
  return (
    <Container>
      <div className="title">DEEPCOLLECTIVE</div>
      <Margin margin={24} />
      <img />
      <Margin margin={17} />
      <div className="sub-title">모두에게 깊게 빠져들다</div>
      <Margin margin={11} />
      <div className="content">
        스토리가 있는 의류패션과 라이프 스타일로 또 다른 문화를 만들다. Street
        Culture의 다채로움을 깊이 있게 담아내어 재탄생시킨다.
      </div>
      <Margin margin={17} />
      <div className="button-container">
        <CustomButton className="more-button" active={false} outlined>
          상품 더보기
        </CustomButton>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 36px 0 32px;
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colors.black};
  .title {
    font-family: 'SpoqaHanSansNeo';
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    line-height: 39px;
    letter-spacing: -0.3px;
    text-align: center;
  }
  .sub-title {
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    line-height: 30px;
    letter-spacing: 0.72px;
    padding-left: 16px;
    text-align: left;
  }
  .content {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.07px;
    padding-left: 16px;
    padding-right: 48px;
  }
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .more-button {
    border-radius: 18px;
    height: 34px;
    width: 125px;
  }
`;
