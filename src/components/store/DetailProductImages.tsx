import React from 'react';
import { useHistory } from 'react-router-dom';

import { Margin } from '../Margin';
import styled from 'styled-components';

type detailImage = {
  url: URL;
  thumb: {
    url: null;
  };
  square: {
    url: null;
  };
  banner: {
    url: null;
  };
  small_banner: {
    url: null;
  };
};

interface IDetailProductImages {
  detail_images: detailImage[];
}

const DetailProductImages: React.FC<IDetailProductImages> = ({
  detail_images,
}) => {
  return (
    <DetailProductImagesContainer className="flex-col">
      <div className="detail-product-image-title">상세 정보</div>
      <div className="detail-product-images-wrapper flex-col">
        {detail_images.map((image) => {
          return (
            <img
              className="product-detail-image"
              src={'https://api.pppper.com' + image.url}
            />
          );
        })}
      </div>
    </DetailProductImagesContainer>
  );
};

const DetailProductImagesContainer = styled.div`
  padding: 24px 0px;
  border-bottom: 6px solid;
  border-color: ${(props) => props.theme.colors.gray7};
  .detail-product-image-title {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${(props) => props.theme.colors.black};
    margin-left: 16px;
    margin-bottom: 21px;
  }
  .detail-product-images-wrapper {
  }
  .product-detail-image {
    width: 100%;
    object-fit: contain;
  }
`;
export default DetailProductImages;
