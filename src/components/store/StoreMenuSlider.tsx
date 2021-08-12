import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CategoryType from '../../types/category';

interface IMenuSliderProps {
  currentParentId: number;
  currentCategoryId: number;
  childCategories: CategoryType[];
}

const settings = {
  infinite: false,
  centerPadding: '60px',
  slidesToShow: 5,
  swipeToSlide: true,
};

const MenuSlider: React.FC<IMenuSliderProps> = ({
  currentParentId,
  currentCategoryId,
  childCategories,
}) => {
  const history = useHistory();

  const handleClickMenuSliderItem = (childCategoryId: number) => {
    history.push({
      pathname: `/store/category/${childCategoryId}`,
      state: {
        currentCategoryId: Number(childCategoryId),
        currentParentId: Number(currentParentId),
        childCategories,
      },
    });
  };

  return (
    <MenuSliderWrapper {...settings}>
      {childCategories.map((childCategory) =>
        childCategory.id === currentCategoryId ? (
          <div
            className="menu-slider-item-wrapper"
            key={childCategory.id}
            onClick={() => handleClickMenuSliderItem(childCategory.id)}
          >
            <p className="menu-slider-item-label selected">
              {childCategory.title}
            </p>
          </div>
        ) : (
          <div
            className="menu-slider-item-wrapper"
            key={childCategory.id}
            onClick={() => handleClickMenuSliderItem(childCategory.id)}
          >
            <p className="menu-slider-item-label">{childCategory.title}</p>
          </div>
        )
      )}
    </MenuSliderWrapper>
  );
};

export default MenuSlider;

const MenuSliderWrapper = styled(Slider)`
  border-bottom: 0.5px solid ${(props) => props.theme.colors.gray4};
  border-top: 0.5px solid ${(props) => props.theme.colors.gray4};

  height: 41px;

  .slick-list {
    height: 41px;
    .slick-track {
      height: 41px;
    }
  }

  .slick-slide {
    div {
      height: 41px;
    }
  }

  .menu-slider-item-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 11px;
    box-sizing: border-box;

    .menu-slider-item-label {
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      line-height: 20px;
      letter-spacing: 0.07px;
      margin: 0;

      color: ${(props) => props.theme.colors.gray3};

      &.selected {
        color: ${(props) => props.theme.colors.black};
      }
    }
  }
`;
