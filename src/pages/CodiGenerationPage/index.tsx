import styled, { css } from 'styled-components';

import { CustomButton } from '../../components/Button';
import ImagePlaceholder from '../../components/ImagePlaceholder';
import { SizedBox } from '../../components/SizedBox';
import { IApiCodiProposal } from '../../types/api/codiProposal.api';
import CodiProposal from './CodiProposal';
import ProductPicker from './ProductPicker';

interface ICodiGenerationPageProps {}

// const sampleCodiProposal: IApiCodiProposal = [
//   {
//     id: 1,
//     user_id: 2,
//     is_confirm: true,
//     bottom_size: null,
//     top_size: null,
//     comment: 'zzzzzzzzzz',
//     user_style: ['미니멀'],
//     created_at: '2021-08-09T17:57:36.161+09:00',
//     updated_at: '2021-08-10T15:58:52.831+09:00',
//     item_id: 65,
//     place: ['소개팅'],
//     occasion: ['카페', '레스토랑'],
//     user_fit: '오버사이',
//     height: '999',
//     weight: '999',
//     styles_count: 1,
//     gender: 'male',
//   },
// ];

const CodiGenerationPage: React.FC<ICodiGenerationPageProps> = () => {
  return (
    <Wrapper>
      {/* <CodiProposal codiProposal={sampleCodiProposal}></CodiProposal> */}
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

export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

export default CodiGenerationPage;
