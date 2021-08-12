import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../../components/base/Header/Header';
import Category from '../../../components/Category';
import { getParentCategories } from '../../../lib/api/category';

interface IStoreCategoryPageProps {}

const StoreCategoryPage: React.FC<IStoreCategoryPageProps> = () => {
  const [parentCategory, setParentCategory] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getParentCategories({ type: 'parent' });
      setParentCategory(data);
    })();
  }, []);

  return (
    <Container>
      <Header
        title={'카테고리'}
        hasRightIcons={false}
        hasTitle
        goBackLink={'/store'}
      />
      <div className="category-list">
        {parentCategory &&
          parentCategory.map((category) => {
            return (
              <Category
                id={category.id}
                title={category.title}
                key={category.id}
              />
            );
          })}
      </div>
    </Container>
  );
};

export default StoreCategoryPage;

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
    width: calc(100vw - 56px);
  }

  .left-arrow-icon {
    position: absolute;
    left: 20px;
    top: 17px;
  }
`;
