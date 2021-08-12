import styled from 'styled-components/macro';

import SlidingMenu from '../../components/molecules/SlidingMenu';
import SlidingMenuItem from '../../components/molecules/SlidingMenuItem';

interface ISlidingMenuBarTestingPageProps {}

const SlidingMenuBarTestingPage: React.FC<ISlidingMenuBarTestingPageProps> =
  () => {
    return (
      <Wrapper>
        <SlidingMenu>
          <SlidingMenuItem selected>상의</SlidingMenuItem>
          <SlidingMenuItem>하의</SlidingMenuItem>
          <SlidingMenuItem>중의</SlidingMenuItem>
          <SlidingMenuItem selected>멍멍이</SlidingMenuItem>
          <SlidingMenuItem>돔물믜뫔국</SlidingMenuItem>
          <SlidingMenuItem>까치</SlidingMenuItem>
          <SlidingMenuItem>알파카</SlidingMenuItem>
          <SlidingMenuItem>노새</SlidingMenuItem>
          <SlidingMenuItem>자동차</SlidingMenuItem>
          <SlidingMenuItem>강아지</SlidingMenuItem>
          <SlidingMenuItem>고양이</SlidingMenuItem>
        </SlidingMenu>
      </Wrapper>
    );
  };

const Wrapper = styled.div``;
export default SlidingMenuBarTestingPage;
