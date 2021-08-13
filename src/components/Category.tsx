import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as OpenCloseIcon } from '../assets/icon/category/category_open_close_icon.svg';
import { ICategory } from '../types/category';
// import { getChildCategories } from '../lib/api/category';
// import { ICategory, IParentCategory } from '../types/category';

interface ISubCategoryProps {
  categories: ICategory[];
  parentId: number;
}

interface IStyledCategoryProps {
  isSelected: boolean;
}

const Category: React.FC<ICategory> = ({ id, name }) => {
  const [childCategories, setChildCategories] = useState<ICategory[]>([]);
  const [isSelected, setIsSelected] = useState(false);

  const handleCategoryClicked = () => {
    setIsSelected((isSelected) => !isSelected);
  };

  // useEffect(() => {
  //   (async () => {
  //     setChildCategories(
  //       await getChildCategories({
  //         parent_id: id,
  //         type: 'child',
  //       })
  //     );
  //   })();
  // }, []);

  return (
    <StyledCategory
      key={id}
      onClick={handleCategoryClicked}
      isSelected={isSelected}
    >
      <div className="category-label" id={id.toString()}>
        {name}
        <OpenCloseIcon className="open-close-effect" />
      </div>
      {isSelected ? (
        <SubCategory parentId={id} categories={childCategories} />
      ) : null}
    </StyledCategory>
  );
};

export default Category;

const SubCategory: React.FC<ISubCategoryProps> = ({ categories, parentId }) => {
  const history = useHistory();

  const handleCategoryClicked = (e) => {
    history.push({
      pathname: `/store/category/${e.target.id}`,
      state: {
        currentCategoryId: Number(e.target.id),
        currentParentId: Number(parentId),
        childCategories: categories,
      },
    });
  };

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
                id={category.id.toString()}
              >
                {category.name}
              </div>
            );
          })}
      </div>
    </StyledSubCategory>
  );
};

const StyledCategory = styled.div<IStyledCategoryProps>`
  display: table-row;
  border-top: 0.5px solid;
  border-bottom: 0.5px solid;
  border-color: ${(props) => props.theme.colors.gray4};

  .category-label {
    font-family: 'SpoqaHanSansNeo';
    font-size: 14px;
    font-weight: 600;
    font-style: normal;
    line-height: 22px;
    text-align: left;
    color: ${(props) => props.theme.colors.black};
    margin: 11px 0px 10px;
    padding-left: 5px;
    padding-right: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .open-close-effect {
    transition: transform 0.3s;
    transform: ${(props) => (props.isSelected ? 'rotate(45deg)' : '')};
  }
`;

const StyledSubCategory = styled.div`
  .subcategory-wrapper {
    margin: 7px 0px 22px 26px;
    display: flex;
    flex-direction: column;
  }
  .subcategory-label {
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.07px;
    text-align: left;
    margin: 8px 0px 9px;
  }
`;
