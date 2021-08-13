import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../../components/base/Header/Header';
import Category from '../../../components/Category';
import { ICategory } from '../../../types/category';
// import { getParentCategories } from '../../../lib/api/category';

import { categories } from '../../../utils/mocks/mockCategories';
interface IStoreCategoryPageProps {}

const StoreCategoryPage: React.FC<IStoreCategoryPageProps> = () => {
  const [parentCategory, setParentCategory] = useState<ICategory[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const data = await getParentCategories({ type: 'parent' });
  //     setParentCategory(data);
  //   })();
  // }, []);
  useEffect(() => {
    setParentCategory(
      categories.filter((category) => category.parentCategory === null)
    );
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
            return <Category key={category.id} category={category} />;
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
