import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Margin } from '../components/Margin';

import { CategoryFetchers } from '../fetchers/categories';

interface StoreCategoryProps {}
export default function StoreCategoryPage(props: StoreCategoryProps) {
  const [selected, setSelected] = useState(null);
  const [parentCategory, setParentCategory] = useState([]);
  const [childCategories, setChildCategories] = useState([]);
  useEffect(() => {
    (async () => {
      setParentCategory(await CategoryFetchers.getParents({ type: 'parent' }));
    })();
  }, []);
  useEffect(() => {
    (async () => {
      setChildCategories(
        await CategoryFetchers.getChilds({ parent_id: selected, type: 'child' })
      );
    })();
  }, [selected]);
  async function handleLabelClicked(e) {
    if (selected === e.target.id) setSelected(null);
    else setSelected(e.target.id);
  }
  return (
    <Container>
      <Margin margin={12} />
      <div className="title">카테고리</div>
      <Margin margin={21.5} />
      {parentCategory &&
        parentCategory.map((category) => {
          return (
            <div
              className="label"
              onClick={handleLabelClicked}
              id={category.id}
              key={category.id}
            >
              {category.title}
            </div>
          );
        })}
      {childCategories &&
        childCategories.map((category) => {
          return (
            <div className="label" key={category.id}>
              {category.title}
            </div>
          );
        })}
    </Container>
  );
}

const Container = styled.div`
  .title {
    font-size: 20px;
    font-weight: 600;
    font-style: normal;
    line-height: 26px;
    text-align: center;
    color: ${(props) => props.theme.colors.black};
  }
  .label {
  }
`;
