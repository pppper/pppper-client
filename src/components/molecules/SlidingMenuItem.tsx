import styled from 'styled-components/macro';

interface ISlidingMenuItemProps {
  selected?: boolean;
}

const SlidingMenuItem: React.FC<ISlidingMenuItemProps> = ({
  children,
  selected,
}) => {
  return <Wrapper selected={selected}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ selected: boolean }>`
  flex-shrink: 0;
  margin-right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 14px;

  &:last-of-type {
    margin-right: 0;
  }

  border-bottom: 2px solid
    ${(props) => (props.selected ? props.theme.colors.gray2 : 'transparent')};
  color: ${(props) =>
    props.selected ? props.theme.colors.black : props.theme.colors.gray3};

  position: relative;
  top: 1.5px;
  transition: border-color 0.4s ease, color 0.4s ease;
`;
export default SlidingMenuItem;
