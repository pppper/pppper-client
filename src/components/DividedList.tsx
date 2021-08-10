import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router';

import { ReactComponent as OpenCloseIcon } from '../assets/icon/category/category_open_close_icon.svg';

interface DividedListProps {
  list: string[];
}
export const DividedList: React.FC<DividedListProps> = (props) => {
  const { list } = props;
  const history = useHistory();
  function handleCategoryClicked(e) {
    if (e.target.id === '카테고리') {
      history.push('/store/category');
    }
  }
  return (
    <ListContainer>
      {list.map((label) => {
        return (
          <div
            className="divided-list-component"
            key={label}
            onClick={handleCategoryClicked}
          >
            <div className="divided-label" id={label}>
              {label}
              <OpenCloseIcon />
            </div>
          </div>
        );
      })}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: table;
  border-collapse: collapse;

  .divided-list-component {
    display: table-row;
    border-top: 0.5px solid;
    border-bottom: 0.5px solid;
    border-color: ${(props) => props.theme.colors.gray4};

    .divided-label {
      font-family: 'SpoqaHanSansNeo';
      font-size: 15px;
      font-weight: bold;
      font-style: normal;
      line-height: 22px;
      text-align: left;
      color: ${(props) => props.theme.colors.black};
      margin: 10px 0px 9.5px;
      padding: 0px 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
