import styled, { css } from 'styled-components';

import { CustomButton } from '../../components/Button';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { SizedBox } from '../../components/SizedBox';
import ProductPicker from './ProductPicker';

interface ICodyGenerationPageProps {}

const proposalTags = [
  '화성',
  '가즈아',
  '테슬라',
  '사이버트럭',
  '세미',
  '모델X',
  '전기차',
  '다잃었소',
  '비트코인',
  '떡상',
  '친환경',
];

const proposalDescription =
  'Aliquip id eu aliqua nostrud. Proident minim sunt elit occaecat ut. Incididunt cillum sunt cillum tempor mollit commodo. Duis aliqua velit Lorem ea cillum ea.';

const CodyGenerationPage: React.FC<ICodyGenerationPageProps> = () => {
  return (
    <Wrapper>
      <ProposalRow>
        <ProposalProfile>
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"
            alt=""
            className="profile-picture"
          />
          <SizedBox height={5}></SizedBox>
          <span className="profile-name">X Æ A-12 아빠</span>
        </ProposalProfile>
        <SizedBox width={20}></SizedBox>
        <ProposalTags>
          {proposalTags.map((tag, index) => {
            return <ProposalTag key={index}>#{tag}</ProposalTag>;
          })}
        </ProposalTags>
      </ProposalRow>
      <SizedBox height={16}></SizedBox>
      <ProposalDescription>“ {proposalDescription} ”</ProposalDescription>
      <SizedBox height={16}></SizedBox>
      <ReferenceCodySlider>
        <ReferenceCody></ReferenceCody>
        <ReferenceCody></ReferenceCody>
        <ReferenceCody></ReferenceCody>
      </ReferenceCodySlider>
      <SizedBox height={100}></SizedBox>
      <div>Editor</div>
      <ProductPicker></ProductPicker>
      <BottomActionContainer>
        <ActionButton>등록하기</ActionButton>
      </BottomActionContainer>
    </Wrapper>
  );
};

const BOTTOM_ACTION_CONTAINER_HEIGHT = 64;
const Wrapper = styled.div`
  /* padding: 0 28px; */
  /* Hide scrollbar for Chrome, Safari and Opera */
  *::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  * {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  & > * {
    flex-shrink: 0;
  }

  padding-bottom: ${BOTTOM_ACTION_CONTAINER_HEIGHT}px;
`;

const BottomActionContainer = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: ${BOTTOM_ACTION_CONTAINER_HEIGHT}px;
  background-color: ${(props) => props.theme.colors.white};

  box-shadow: 0 -4px 4px 0 rgba(126, 130, 137, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  padding: 0 16px;
`;

const ActionButton = styled.button`
  all: unset;
  width: 100%;
  height: 48px;

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  background-color: ${(props) => props.theme.colors.primary1};
  color: ${(props) => props.theme.colors.white};
`;

const ProposalRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0 28px;
`;

const ProposalDescription = styled.div`
  line-height: 1.43;
  letter-spacing: 0.07px;
  font-size: 14px;
  padding: 0 28px;
`;

const ProposalProfile = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 80px;
  flex-shrink: 0;

  img.profile-picture {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 18px;
  }

  span.profile-name {
    font-size: 11px;
    color: #555561;
  }
`;

const ProposalTags = styled.div`
  text-align: left;
`;

const ProposalTag = styled.div`
  display: inline-flex;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.gray7};

  justify-content: center;
  align-items: center;

  font-size: 11px;

  margin-right: 4px;
  margin-bottom: 7.5px;
`;

const ReferenceCodySlider = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  padding: 0 28px;
`;

const ReferenceCody = styled(ImagePlaceholder)`
  width: 220px;
  height: 220px;
  margin-right: 8px;
  flex-shrink: 0;
`;

export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

export default CodyGenerationPage;
