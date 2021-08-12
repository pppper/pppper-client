import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';

import { getProductByIdAPI } from '../../lib/api/product';

import Header from '../../components/base/Header/Header';
import { Margin } from '../../components/Margin';
import DetailProductInformation from '../../components/store/DetailProductInformation';
import ShippingInformation from '../../components/store/ShippingInformation';
import BrandLink from '../../components/store/BrandLink';
import CodiRecommendation from '../../components/store/CodiRecommendation';
import DetailProductImages from '../../components/store/DetailProductImages';
import ProductRecommendation from '../../components/store/ProductRecommendation';

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
        setProduct(data.item);
      } catch (error) {}
    };
    getProductById(productId);
  }, [location]);
  return product ? (
    <StyledProductDetail className="flex-col">
      <Header hasRightIcons hasTitle={false} title="" />
      <img
        className="detail-product-main-image"
        src={'https://api.pppper.com' + product.image.url}
      />
      <DetailProductInformation product={product} />
      <ShippingInformation />
      <BrandLink brand_id={product.brand_id} />
      <CodiRecommendation />
      <DetailProductImages detail_images={product.detail_images} />
      <ProductRecommendation />
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
