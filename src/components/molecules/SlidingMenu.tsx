import styled from 'styled-components/macro';

interface ISlidingMenuBarProps {}

const SlidingMenu: React.FC<ISlidingMenuBarProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  width: 100vw;
  height: 50px;
  padding: 0 20px;

  user-select: none;
  overflow-x: scroll;

  display: flex;
  flex-direction: row;
  border-bottom: 1.5px solid #ccc;

  overflow-y: visible;
`;

export default SlidingMenu;
