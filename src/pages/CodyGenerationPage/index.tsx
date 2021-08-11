import styled, { css } from 'styled-components';
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
  '결혼기념일이라서 와이프와 근사한 레스토랑에 가기로 했습니다. 와이프가 사줬던 갈색 구두와 검정 정장 바지를 입고 가고 싶은데, 어떤 상의와 함께 입어야 할지를 모르겠어요. 모자와 가방도 함께 알려주시면 감사하겠습니다. 코디가 만족스럽다면 테슬라 주식 한주가 무료?';

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
          {proposalTags.map((tag) => {
            return <ProposalTag>#{tag}</ProposalTag>;
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
      <ProductPicker></ProductPicker>
    </Wrapper>
  );
};

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

const ReferenceCody = styled.div`
  width: 220px;
  height: 220px;
  margin-right: 8px;
  flex-shrink: 0;

  background-color: ${() => {
    return generateRandomColor();
  }};
`;

export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

export default CodyGenerationPage;
