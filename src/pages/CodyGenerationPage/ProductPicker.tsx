import { IonSearchbar } from '@ionic/react';
import { useState } from 'react';
import styled from 'styled-components';
import { SizedBox } from '../../components/SizedBox';
import ProductItem, { IItem } from './ProductItem';

interface IMenu {}

const menus: IMenu[] = [
  '코디 요청',
  '아우터',
  '상의',
  '바지',
  '엄마',
  '아빠',
  '코딩',
  '음악',
  '바지',
];

const items: IItem[] = [
  { brand: 'COVERNAT', price: 25000, discount: 50 },
  { brand: 'COVERNAT', price: 25000, discount: 50 },
  { brand: 'COVERNAT', price: 25000, discount: 50 },
  { brand: 'COVERNAT', price: 25000, discount: 50 },
  { brand: 'COVERNAT', price: 25000, discount: 50 },
  { brand: 'COVERNAT', price: 25000, discount: 50 },
];

interface IProductPickerProps {}
const ProductPicker: React.FC<IProductPickerProps> = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0);
  return (
    <Wrapper>
      <SlidingMenu>
        {menus.map((menu, index) => {
          return (
            <SlidingMenuItem
              key={index}
              active={activeMenuIndex === index}
              onClick={() => {
                setActiveMenuIndex(index);
              }}
            >
              {menu}
            </SlidingMenuItem>
          );
        })}
      </SlidingMenu>
      <SizedBox height={18}></SizedBox>
      <SearchRow>
        <StyledSearchBar></StyledSearchBar>
        <SizedBox width={26}></SizedBox>
        <SearchCategoryDropdown>
          <option>반팔 티셔츠</option>
          <option>가디건</option>
        </SearchCategoryDropdown>
      </SearchRow>
      <ProductItemGrid>
        {items.map((item, index) => {
          return <ProductItem item={item} key={index} />;
        })}
      </ProductItemGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const SlidingMenu = styled.div`
  cursor: pointer;
  user-select: none;
  height: 45px;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray4};
  padding: 0 28px;
`;

interface ISlidingMenuItemProps {
  active?: boolean;
}

const SlidingMenuItem = styled.div<ISlidingMenuItemProps>`
  height: 100%;
  flex-shrink: 0;
  color: ${(props) =>
    props.active ? props.theme.colors.black : props.theme.colors.gray3};
  font-weight: 600;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;

  border-bottom: 2px solid
    ${(props) => (props.active ? props.theme.colors.gray2 : 'transparent')};

  position: relative;
  top: 1px;

  transition: border-color 0.4s ease, color 0.4s ease;
`;

const SearchRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledSearchBar = styled(IonSearchbar)`
  height: 30px;
  flex: 1;
  padding: 0;
  margin-left: 16px;
  border-radius: 10px;
`;

const SearchCategoryDropdown = styled.select`
  width: 95px;
  height: 30px;
  outline: none;
  border: none;
  margin-right: 16px;
  font-size: 13px;
`;

const ProductItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 18px 16px;
  grid-gap: 5px;
`;

export default ProductPicker;
