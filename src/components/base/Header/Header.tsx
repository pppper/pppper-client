import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LeftArrowIcon } from '../../../assets/icon/header/header_left_arrow_icon.svg';
import { ReactComponent as SearchButtonIcon } from '../../../assets/icon/header/header_search_button_icon.svg';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/icon/header/header_shopping_cart_icon.svg';

interface IHeaderProps {
  title: string;
  hasRightIcons: boolean;
  hasTitle: boolean;
  goBackLink?: string;
}

const Header: React.FC<IHeaderProps> = ({
  title,
  hasRightIcons = false,
  hasTitle = true,
  goBackLink = '/store/category',
}) => {
  const history = useHistory();

  return (
    <HeaderWrapper>
      <div
        className="header-left-arrow-icon-block"
        onClick={() => history.push(goBackLink)}
      >
        <LeftArrowIcon />
      </div>
      {hasTitle && <p className="header-category-title">{title}</p>}
      {hasRightIcons ? (
        <div className="header-right-icon-wrapper">
          <SearchButtonIcon />
          <ShoppingCartIcon />
        </div>
      ) : (
        <div className="header-empty-right-block"></div>
      )}
    </HeaderWrapper>
  );
};

export default React.memo(Header);

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 60px;

  padding: 0 16px 0 20px;

  .header-left-arrow-icon-block {
    width: 33%;
  }

  .header-category-title {
    width: 33%;

    display: flex;
    justify-content: center;

    font-size: 20px;
    font-weight: 600;
  }

  .header-right-icon-wrapper {
    width: 33%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg:first-child {
      margin-right: 17px;
    }
  }

  .header-empty-right-block {
    width: 33%;
  }
`;
