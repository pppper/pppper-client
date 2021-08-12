import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import {
  InactiveHomeIcon,
  ActiveHomeIcon,
  InactiveCodiIcon,
  ActiveCodiicon,
  InactiveStoreIcon,
  ActiveStoreIcon,
  InactiveBookmarkIcon,
  ActiveBookmarkIcon,
  InactiveProfileIcon,
  ActiveProfileIcon,
} from './icons';

interface INavigationBarProps {}

const NavigationBar: React.FC<INavigationBarProps> = () => {
  const location = useLocation();
  const { pathname } = location;

  const navigationMenus = [
    {
      id: '',
      text: '홈',
      activeIcon: <ActiveHomeIcon />,
      inActiveIcon: <InactiveHomeIcon />,
    },
    {
      id: 'codi',
      text: '코디',
      activeIcon: <ActiveCodiicon />,
      inActiveIcon: <InactiveCodiIcon />,
    },
    {
      id: 'store',
      text: '스토어',
      activeIcon: <ActiveStoreIcon />,
      inActiveIcon: <InactiveStoreIcon />,
    },
    {
      id: 'bookmark',
      text: '저장',
      activeIcon: <ActiveBookmarkIcon />,
      inActiveIcon: <InactiveBookmarkIcon />,
    },
    {
      id: 'profile',
      text: '프로필',
      activeIcon: <ActiveProfileIcon />,
      inActiveIcon: <InactiveProfileIcon />,
    },
  ];

  return (
    <NavigationBarWrapper>
      {navigationMenus.map((navigationMenu) => (
        <Link to={`/${navigationMenu.id}`} className="gnb-icon-label-wrapper">
          {pathname.split('/')[1] === navigationMenu.id
            ? navigationMenu.activeIcon
            : navigationMenu.inActiveIcon}
          <GlobalNavigationBarLabel
            active={pathname.split('/')[1] === navigationMenu.id}
          >
            {navigationMenu.text}
          </GlobalNavigationBarLabel>
        </Link>
      ))}
    </NavigationBarWrapper>
  );
};

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

const GlobalNavigationBarLabel = styled.p<{ active: boolean }>`
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.5px;
  user-select: none;
  color: ${(props) => (props.active ? `black` : props.theme.colors.gray3)};
`;

export default NavigationBar;
