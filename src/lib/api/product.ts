import apiClient from './apiClient';

interface GetProductsProps {
  page?: number;
  pageSize?: number;
  tag_id?: number;
  category_id?: number;
  brand_id?: number;
  select_content?: any;
}

export const getProductListAPI = (props: GetProductsProps) =>
  apiClient.get(`/items`, { params: props });
