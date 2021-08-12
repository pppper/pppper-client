import { IApiProduct } from '../../../types/api/product.api';
import apiClient from '../apiClient';

interface IGetProductsProps {
  page?: number;
  pageSize?: number;
  tag_id?: number;
  category_id?: number;
  brand_id?: number;
  select_content?: any;
}

export const getProducts = (props: IGetProductsProps): Promise<IApiProduct[]> =>
  apiClient.get(`/items`, { params: props });

interface IGetProductByIdProps {
  product_id: number;
}
export const getProductByIdAPI = (props: IGetProductByIdProps) =>
  apiClient.get(`/items/${props.product_id}`);
