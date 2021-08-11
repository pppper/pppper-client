import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { CustomButton } from './Button';
import { Margin } from './Margin';

import { userActions } from '../modules/slices/user';
import { useAppSelector } from '../lib/hooks/useAppSelector';

interface BrandIntroProps {
  title?: string;
  subtitle?: string;
  content?: string;
  mainImage?: URL;
}
export const BrandIntroduction: React.FC<BrandIntroProps> = (props) => {
  const [userSwipeDistance, setUserSwipeDistance] = useState(0);
  const [sliderLocation, setSliderLocation] = useState(0);
  const dispatch = useDispatch();
  const userState = useAppSelector((state) => state.user);
  var swipeStart = 0;
  const sliderWidth = document.getElementsByClassName(
    'brand-codi-image-slider'
  )[0];
  function translateDistance() {
    const min = 0;
    const max = window.innerWidth - 16 - sliderWidth.clientWidth;
    if (-userSwipeDistance / 1.5 + sliderLocation < min)
      return setSliderLocation(min);
    else if (-userSwipeDistance / 1.5 + sliderLocation > max)
      return setSliderLocation(max);
    return setSliderLocation(-userSwipeDistance / 1.5 + sliderLocation);
  }
  useEffect(() => {
    if (sliderWidth) translateDistance();
  }, [userSwipeDistance]);

  console.log('userState', userState);

  const handleReduxTest = () => {
    dispatch(
      userActions.setUserInfo({
        id: 1,
        name: 'eun',
        email: 'koeun0712@ewhain.net',
        profileImage: '',
      })
    );
  };

  return (
    <Container moveDistance={sliderWidth ? sliderLocation : 0}>
      <div className="brand-introduction-title">DEEPCOLLECTIVE</div>
      <Margin margin={24} />
      <img
        className="brand-introduction-main-image"
        src="http://image.musinsa.com/images/plan_w_mobile_img/2021080913300600000002970.jpg"
      />
      <Margin margin={17} />
      <div className="brand-introduction-subtitle">모두에게 깊게 빠져들다</div>
      <Margin margin={11} />
      <div className="brand-introduction-content">
        스토리가 있는 의류패션과 라이프 스타일로 또 다른 문화를 만들다. Street
        Culture의 다채로움을 깊이 있게 담아내어 재탄생시킨다.
      </div>
      <Margin margin={17} />
      <div className="brand-codi-image-slider-background">
        <div className="brand-codi-image-slider"></div>
      </div>
      <Margin margin={11} />
      <div
        className="brand-codi-image-wrapper "
        onTouchStart={(e) => (swipeStart = e.changedTouches[0].pageX)}
        onTouchEnd={(e) =>
          setUserSwipeDistance(e.changedTouches[0].pageX - swipeStart)
        }
      >
        <img className="brand-codi-image" />
        <img className="brand-codi-image" />
        <img className="brand-codi-image" />
        <img className="brand-codi-image" />
        <img className="brand-codi-image" />
        <img className="brand-codi-image" />
        <img className="brand-codi-image" />
        <img className="brand-codi-image" />
      </div>
      <Margin margin={15} />
      <div className="brand-product-preview-wrapper flex-row">
        <BrandProductPreview
          title="1967 JET BLACK JEANS [WIDE STRAIGHT]"
          image=""
          price={59000}
          discount={20}
        />
        <BrandProductPreview
          title="Strappy sandal(Deep sleep)_OK2AM21002BLK"
          image=""
          price={59000}
          discount={20}
        />
        <BrandProductPreview
          title="트러플 카우 티"
          image=""
          price={59000}
          discount={20}
        />
        <BrandProductPreview
          title="트러플 카우 티"
          image=""
          price={59000}
          discount={20}
        />
      </div>
      <Margin margin={17} />
      <div className="brand-introduction-buttoncontainer">
        <CustomButton className="more-button" active={false} outlined>
          상품 더보기
        </CustomButton>
      </div>
    </Container>
  );
};

interface ISliderProps {
  moveDistance: number;
}

const Container = styled.div<ISliderProps>`
  padding: 36px 0 32px;
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colors.black};
  .brand-introduction-title {
    font-family: 'SpoqaHanSansNeo';
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    line-height: 39px;
    letter-spacing: -0.3px;
    text-align: center;
  }
  .brand-introduction-main-image {
    width: 100%;
    object-fit: cover;
  }
  .brand-introduction-subtitle {
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    line-height: 30px;
    letter-spacing: 0.72px;
    padding-left: 16px;
    text-align: left;
  }
  .brand-introduction-content {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.07px;
    padding-left: 16px;
    padding-right: 48px;
  }
  .brand-introduction-buttoncontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    .more-button {
      border-radius: 18px;
      height: 34px;
      width: 125px;
    }
  }
  .brand-codi-image-slider-background {
    height: 2px;
    width: calc(100vw - 16px);
    margin-left: 16px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.gray5};
  }
  .brand-codi-image-slider {
    height: 2px;
    width: calc(100% / 3);
    z-index: 3;
    background-color: ${(props) => props.theme.colors.primary2};
    transform: translate3d(${(props) => props.moveDistance}px, 0px, 0px);
    transition: transform 0.1s;
  }
  .brand-codi-image-wrapper {
    display: flex;
    flex-direction: row;
    overflow: scroll;
    flex-wrap: nowrap;
    margin-left: 16px;
    .brand-codi-image {
      min-width: 135px;
      min-height: 135px;
      object-fit: cover;
      margin-right: 4px;
    }
  }
  .brand-product-preview-wrapper {
    flex-wrap: wrap;
    padding-left: 16px;
  }
`;

interface IBrandProductPreview {
  title: string;
  image: string;
  price: number;
  discount: number | null;
}
const BrandProductPreview: React.FC<IBrandProductPreview> = (props) => {
  const { title, image, price, discount } = props;
  return (
    <StyledBrandProductPreview>
      <img className="preview-product-image" />
      <div className="preview-product-info-wrapper flex-col">
        <div className="preview-product-title">{title}</div>
        <div className=" flex-row">
          <div className="preview-product-price">
            {price.toLocaleString()}원
          </div>
          <div className="preview-product-discount">{discount}%</div>
        </div>
      </div>
    </StyledBrandProductPreview>
  );
};

const StyledBrandProductPreview = styled.div`
  display: flex;
  flex-direction: row;
  width: 164px;
  margin-bottom: 4px;
  margin-right: 8px;
  align-items: center;
  .preview-product-image {
    max-height: 45px;
    min-height: 45px;
    min-width: 45px;
  }
  .preview-product-info-wrapper {
    margin-left: 8px;
  }
  .preview-product-title {
    font-size: 10px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 14px;
    letter-spacing: normal;
    text-align: left;
    color: ${(props) => props.theme.colors.gray2};
    word-break: break-all;
    margin-bottom: 4px;
  }
  .preview-product-price {
    font-family: SpoqaHanSansNeo;
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 13px;
    letter-spacing: normal;
    color: ${(props) => props.theme.colors.black};
    margin-right: 4px;
  }
  .preview-product-discount {
    font-family: SpoqaHanSansNeo;
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 13px;
    letter-spacing: normal;
    color: ${(props) => props.theme.colors.primary1};
  }
`;
