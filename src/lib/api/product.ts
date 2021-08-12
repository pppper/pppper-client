import apiClient from './apiClient';

interface IGetProductsProps {
  page?: number;
  pageSize?: number;
  tag_id?: number;
  category_id?: number;
  brand_id?: number;
  select_content?: any;
}

export const getProducts = (props: IGetProductsProps) =>
  apiClient.get(`/items`, { params: props });
