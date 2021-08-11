import axios from 'axios';

interface GetProductsProps {
  page?: number;
  pageSize?: number;
  tag_id?: number;
  category_id?: number;
  brand_id?: number;
  select_content?: any;
}

const getProducts = async (props: GetProductsProps) => {
  const params = props;
  const url = 'https://api.pppper.com/items';
  try {
    const { data } = await axios.get(url, { params });
    return data;
  } catch {}
};

export default getProducts;
