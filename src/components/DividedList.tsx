import React from 'react';
import styled from 'styled-components';

interface DividedListProps {
  list: string[];
}
export const DividedList: React.FC<DividedListProps> = (props) => {
  const { list } = props;
  return (
    <ListContainer>
      {list.map((label) => {
        return (
          <div className="list-component" key={label}>
            <div className="label">{label}</div>
          </div>
        );
      })}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: table;
  border-collapse: collapse;

  .list-component {
    display: table-row;
    border-top: 0.5px solid;
    border-bottom: 0.5px solid;
    border-color: ${(props) => props.theme.colors.gray4};
  }
  .label {
    font-family: 'SpoqaHanSansNeo';
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    line-height: 22px;
    text-align: left;
    color: ${(props) => props.theme.colors.black};
    margin: 10px 0px 9.5px;
  }
`;
