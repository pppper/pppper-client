import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CategoryFetchers } from '../fetchers/categories';
import { useHistory } from 'react-router-dom';

interface CategoryProps {
  id: number;
  title: string;
}

export default function Category(props: CategoryProps) {
  const { id, title } = props;
  const [childCategories, setChildCategories] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    (async () => {
      setChildCategories(
        await CategoryFetchers.getChilds({
          parent_id: id,
          type: 'child',
        })
      );
    })();
  }, []);
  async function handleCategoryClicked() {
    setIsSelected(!isSelected);
  }
  return (
    <StyledCategory key={id} onClick={handleCategoryClicked}>
      <div className="category-label" id={id.toString()}>
        {title}
      </div>
      {isSelected ? <SubCategory categories={childCategories} /> : null}
    </StyledCategory>
  );
}

const StyledCategory = styled.div`
  display: table-row;
  border-top: 0.5px solid;
  border-bottom: 0.5px solid;
  border-color: ${(props) => props.theme.colors.gray4};

  .category-label {
    font-family: 'SpoqaHanSansNeo';
    font-size: 15px;
    font-weight: 600;
    font-style: normal;
    line-height: 22px;
    text-align: left;
    color: ${(props) => props.theme.colors.black};
    margin: 10px 0px 9.5px;
    padding-left: 5px;
  }
`;

interface SubCategoryProps {
  categories: any;
}
const SubCategory: React.FC<SubCategoryProps> = (props) => {
  const history = useHistory();
  const { categories } = props;
  function handleCategoryClicked() {
    console.log(1);
  }
  return (
    <StyledSubCategory>
      <div className="subcategory-wrapper">
        {categories &&
          categories.map((category) => {
            return (
              <div
                className="subcategory-label"
                onClick={handleCategoryClicked}
                key={category.id}
                id={category.id}
              >
                {category.title}
              </div>
            );
          })}
      </div>
    </StyledSubCategory>
  );
};

const StyledSubCategory = styled.div`
  .subcategory-wrapper {
    margin: 7px 0px 22px 26px;
    display: flex;
    flex-direction: column;
  }
  .subcategory-label {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.07px;
    text-align: left;
    margin: 8px 0px 9px;
  }
`;
