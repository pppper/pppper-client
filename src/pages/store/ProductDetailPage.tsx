import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';

import { getProductByIdAPI } from '../../lib/api/product';

import Header from '../../components/base/Header/Header';
import { Margin } from '../../components/Margin';
import DetailProductInformation from '../../components/store/DetailProductInformation';

interface IProductDetailPageProps {}

const ProductDetailPage: React.FC<IProductDetailPageProps> = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const { productId } = location.state;
    const getProductById = async (productId) => {
      try {
        const { data } = await getProductByIdAPI({
          product_id: productId,
        });
        setProduct(data);
      } catch (error) {}
    };
    getProductById(productId);
  }, [location]);
  return product ? (
    <StyledProductDetail className="flex-col">
      <Header hasRightIcons hasTitle={false} title="" />
      <img
        className="detail-product-main-image"
        src={'https://api.pppper.com' + product.item.image.url}
      />
      <DetailProductInformation product={product.item} />
    </StyledProductDetail>
  ) : (
    <></>
  );
};

const StyledProductDetail = styled.div`
  .detail-product-main-image {
    object-fit: cover;
  }
`;

export default ProductDetailPage;
