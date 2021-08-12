import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

import Header from '../../components/base/Header/Header';
import { Margin } from '../../components/Margin';
import BrandLink from '../../components/store/BrandLink';
import CodiRecommendation from '../../components/store/CodiRecommendation';
import DetailProductImages from '../../components/store/DetailProductImages';
import DetailProductInformation from '../../components/store/DetailProductInformation';
import ProductRecommendation from '../../components/store/ProductRecommendation';
import ShippingInformation from '../../components/store/ShippingInformation';
import { getProductById } from '../../lib/api/product';
import IProduct from '../../types/product';

interface IProductDetailPageProps {}

const ProductDetailPage: React.FC<IProductDetailPageProps> = () => {
  const location = useLocation();
  const [product, setProduct] = useState<IProduct>(null);
  useEffect(() => {
    const { productId } = location.state;
    const main = async (productId) => {
      try {
        const product: IProduct = await getProductById({
          product_id: productId,
        });
        setProduct(product);
      } catch (error) {}
    };
    main(productId);
  }, [location]);
  return product ? (
    <StyledProductDetail className="flex-col">
      <Header hasRightIcons hasTitle={false} title="" />
      <img
        className="detail-product-main-image"
        src={'https://api.pppper.com' + product.mainImage}
      />
      <DetailProductInformation product={product} />
      <ShippingInformation />
      <BrandLink brand_id={product.brandId} />
      <CodiRecommendation />
      <DetailProductImages product={product} />
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