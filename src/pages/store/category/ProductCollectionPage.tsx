import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';

import Header from '../../../components/base/Header/Header';
import MenuSlider from '../../../components/store/StoreMenuSlider';
import StoreItem from '../../../components/store/StoreItem';

import getProducts from '../../../fetchers/product';

interface IProductCollectionPageProps {}

const ProductCollectionPage: React.FC<IProductCollectionPageProps> = () => {
  const location = useLocation();
  const [productList, setProductList] = useState([]);

  const { currentCategoryId, currentParentId, childCategories } =
    location.state;

  const getProductList = async () => {
    try {
      const data = await getProducts({ category_id: currentCategoryId });
      setProductList(data);
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
          <StoreItem key={product.id} product={product} />
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
