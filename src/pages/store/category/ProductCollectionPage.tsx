import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

import Header from '../../../components/base/Header/Header';
import StoreItem from '../../../components/store/StoreItem';
import MenuSlider from '../../../components/store/StoreMenuSlider';
import { getProducts } from '../../../lib/api/product';
import { IApiProduct } from '../../../types/api/product.api';

interface IProductCollectionPageProps {}

const ProductCollectionPage: React.FC<IProductCollectionPageProps> = () => {
  const location = useLocation();
  const [productList, setProductList] = useState<IApiProduct[]>([]);

  const { currentCategoryId, currentParentId, childCategories } =
    location.state;

  const getProductList = async () => {
    try {
      const products = await getProducts({
        category_id: currentCategoryId,
      });
      setProductList(products);
    } catch (error) {}
  };

  useEffect(() => {
    getProductList();
  }, [location.pathname]);

  return (
    <>
      <Header title={'상의'} hasRightIcons hasTitle />
      <MenuSlider
        currentCategoryId={currentCategoryId}
        currentParentId={currentParentId}
        childCategories={childCategories}
      />
      <StoreItemWrapper>
        {productList.map((product) => (
          <StoreItem key={product.id} product={product} type={'large'} />
        ))}
      </StoreItemWrapper>
    </>
  );
};

export default ProductCollectionPage;

const StoreItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
