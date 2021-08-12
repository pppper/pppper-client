import ICategory from '../../../types/category';
import apiClient, { extractData } from '../apiClient';
import { IApiCategory } from './type';

type CategoryType = 'parent' | 'child';

interface IGetParentCategoriesProps {
  page?: number;
  pageSize?: number;
  type: CategoryType;
}

export const getParentCategories = (
  props: IGetParentCategoriesProps
): Promise<ICategory[]> =>
  apiClient
    .get('/categories', { params: props })
    .then(extractData)
    .then(
      (parentCategories: IApiCategory[]) => parentCategories as ICategory[]
    );

interface IGetChildCategoriesProps {
  page?: number;
  pageSize?: number;
  type: 'child';
  parent_id: number;
}

export const getChildCategories = (
  props: IGetChildCategoriesProps
): Promise<ICategory[]> =>
  apiClient
    .get('/categories', { params: props })
    .then(extractData)
    .then((childCategories: IApiCategory[]) => childCategories as ICategory[]);
