import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as InactiveHomeIcon } from '../../../assets/icon/gnb/gnb_inactive_home_icon.svg';
import { ReactComponent as ActiveHomeIcon } from '../../../assets/icon/gnb/gnb_active_home_icon.svg';
import { ReactComponent as InactiveCodiIcon } from '../../../assets/icon/gnb/gnb_inactive_cody_icon.svg';
import { ReactComponent as ActiveCodiicon } from '../../../assets/icon/gnb/gnb_active_cody_icon.svg';
import { ReactComponent as InactiveStoreIcon } from '../../../assets/icon/gnb/gnb_inactive_store_icon.svg';
import { ReactComponent as ActiveStoreIcon } from '../../../assets/icon/gnb/gnb_active_store_icon.svg';
import { ReactComponent as InactiveBookmarkIcon } from '../../../assets/icon/gnb/gnb_inactive_bookmark_icon.svg';
import { ReactComponent as ActiveBookmarkIcon } from '../../../assets/icon/gnb/gnb_active_bookmark_icon.svg';
import { ReactComponent as InactiveProfileIcon } from '../../../assets/icon/gnb/gnb_inactive_profile_icon.svg';
import { ReactComponent as ActiveProfileIcon } from '../../../assets/icon/gnb/gnb_active_profile_icon.svg';

interface INavigationBarProps {}

const NavigationBar: React.FC<INavigationBarProps> = () => {
  const location = useLocation();
  const { pathname } = location;

  const isHome = pathname === '/';
  const isCodi = pathname.split('?')[0] === '/codi';
  const isStore = pathname.split('?')[0] === '/store';
  const isBookmark = pathname.split('?')[0] === '/bookmark';
  const isProfile = pathname.split('?')[0] === '/mypage';

  return (
    <NavigationBarWrapper>
      <Link to="/" className="gnb-icon-label-wrapper">
        {isHome ? <ActiveHomeIcon /> : <InactiveHomeIcon />}
        <GNBLabel active={isHome}>홈</GNBLabel>
      </Link>
      <Link className="gnb-icon-label-wrapper" to="/codi">
        {isCodi ? <ActiveCodiicon /> : <InactiveCodiIcon />}
        <GNBLabel active={isCodi}>코디</GNBLabel>
      </Link>
      <Link className="gnb-icon-label-wrapper" to="/store">
        {isStore ? <ActiveStoreIcon /> : <InactiveStoreIcon />}
        <GNBLabel active={isStore}>스토어</GNBLabel>
      </Link>
      <Link className="gnb-icon-label-wrapper" to="/bookmark">
        {isBookmark ? <ActiveBookmarkIcon /> : <InactiveBookmarkIcon />}
        <GNBLabel active={isBookmark}>저장</GNBLabel>
      </Link>
      <Link className="gnb-icon-label-wrapper" to="/mypage">
        {isProfile ? <ActiveProfileIcon /> : <InactiveProfileIcon />}
        <GNBLabel active={isProfile}>프로필</GNBLabel>
      </Link>
    </NavigationBarWrapper>
  );
};

export default NavigationBar;

const NavigationBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};

  position: fixed;
  bottom: 0;
  z-index: 10;

  width: 100vw;
  height: 76px;

  padding: 0 42px;
  box-sizing: border-box;

  .gnb-icon-label-wrapper {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    user-select: none;
    text-decoration: none;
  }
`;

const GNBLabel = styled.p<{ active: boolean }>`
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.5px;
  user-select: none;
  color: ${(props) => (props.active ? `black` : props.theme.colors.gray3)};
`;
