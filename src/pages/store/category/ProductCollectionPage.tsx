import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

import Header from '../../../components/base/Header/Header';
import StoreItem from '../../../components/store/StoreItem';
import MenuSlider from '../../../components/store/StoreMenuSlider';

import { getProducts } from '../../../lib/api/product';
import { IApiProduct } from '../../../lib/api/product/type';

import IProduct from '../../../types/product';

import { mockProductList } from '../../../utils/mocks/mockProductList';

interface IProductCollectionPageProps {}

const ProductCollectionPage: React.FC<IProductCollectionPageProps> = () => {
  const location = useLocation();
  // const [productList, setProductList] = useState<IProduct[]>([]);

  const { currentCategoryId, currentParentCategoryName, childCategories } =
    location.state;

  // const getProductList = async () => {
  //   try {
  //     const products = await getProducts({
  //       category_id: currentCategoryId,
  //     });
  //     setProductList(products);
  //   } catch (error) {}
  // };

  // const getProductListByCategory=()=>{
  //   setProductList()
  // }

  // useEffect(() => {
  //   getProductListByCategory();
  // }, [location.pathname]);

  return (
    <>
      <Header title={currentParentCategoryName} hasRightIcons hasTitle />
      <MenuSlider
        currentCategoryId={currentCategoryId}
        currentParentCategoryName={currentParentCategoryName}
        childCategories={childCategories}
      />
      <StoreItemWrapper>
        {mockProductList.map(
          (product) =>
            product.categoryId === currentCategoryId && (
              <StoreItem key={product.id} product={product} type={'large'} />
            )
        )}
      </StoreItemWrapper>
    </>
  );
};

export default ProductCollectionPage;

const StoreItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
