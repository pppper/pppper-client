import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Margin } from '../components/Margin';
import Category from '../components/Category';

import { CategoryFetchers } from '../fetchers/categories';

interface StoreCategoryProps {}
export default function StoreCategoryPage(props: StoreCategoryProps) {
  const [parentCategory, setParentCategory] = useState([]);
  useEffect(() => {
    (async () => {
      setParentCategory(await CategoryFetchers.getParents({ type: 'parent' }));
    })();
  }, []);

  return (
    <Container>
      <Margin margin={12} />
      <div className="category-section-title">카테고리</div>
      <Margin margin={21.5} />
      <div className="category-list">
        {parentCategory &&
          parentCategory.map((category) => {
            return <Category id={category.id} title={category.title} />;
          })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .category-section-title {
    font-size: 20px;
    font-weight: 600;
    font-style: normal;
    line-height: 26px;
    text-align: center;
    color: ${(props) => props.theme.colors.black};
  }
  .category-list {
    display: table;
    border-collapse: collapse;
    width: 320px;
  }
`;
