import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { CustomButton } from './Button';
import { Margin } from './Margin';

import { userActions } from '../modules/slices/user';
import { useAppSelector } from '../modules/hooks/useAppSelector';

interface BrandIntroProps {
  title?: string;
  subtitle?: string;
  content?: string;
  mainImage?: URL;
}
export const BrandIntroduction: React.FC<BrandIntroProps> = (props) => {
  const dispatch = useDispatch();
  const userState = useAppSelector((state) => state.user);

  console.log('userState', userState);

  const handleReduxTest = () => {
    dispatch(
      userActions.setUserInfo({
        id: 1,
        name: 'eun',
        email: 'koeun0712@ewhain.net',
        profileImage: '',
      })
    );
  };

  return (
    <Container>
      <Title>DEEPCOLLECTIVE</Title>
      <Margin margin={24} />
      <img />
      <Margin margin={17} />
      <SubTitle>모두에게 깊게 빠져들다</SubTitle>
      <Margin margin={11} />
      <Content>
        스토리가 있는 의류패션과 라이프 스타일로 또 다른 문화를 만들다. Street
        Culture의 다채로움을 깊이 있게 담아내어 재탄생시킨다.
      </Content>
      <Margin margin={17} />
      <ButtonContainer>
        <MoreButton active={false} outlined onClick={handleReduxTest}>
          상품 더보기
        </MoreButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 36px 0 32px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: 'SpoqaHanSansNeo';
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  line-height: 39px;
  letter-spacing: -0.3px;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
`;
const SubTitle = styled.div`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
  line-height: 30px;
  letter-spacing: 0.72px;
  padding-left: 16px;
  color: ${(props) => props.theme.colors.black};
`;
const Content = styled.div`
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0.07px;
  padding-left: 16px;
  padding-right: 48px;
  color: ${(props) => props.theme.colors.black};
`;
const MoreButton = styled(CustomButton)`
  border-radius: 18px;
  height: 34px;
  width: 125px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
