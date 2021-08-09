import axios from 'axios';

type CategoryType = 'parent' | 'child';

interface GetParentsProps {
  page?: number;
  pageSize?: number;
  type: CategoryType;
}
const getParents = async (props: GetParentsProps) => {
  const params = props;
  const url = 'https://api.pppper.com/categories';
  try {
    const response = await axios.get(url, { params: params });
    return response.data;
  } catch {}
};

interface GetChildProps {
  page?: number;
  pageSize?: number;
  type: 'child';
  parent_id: number;
}
const getChilds = async (props: GetChildProps) => {
  const params = props;
  const url = 'https://api.pppper.com/categories';
  try {
    const response = await axios.get(url, { params: params });
    return response.data;
  } catch (error) {}
};

export const CategoryFetchers = {
  getParents,
  getChilds,
};
