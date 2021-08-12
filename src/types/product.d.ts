import { IApiProduct } from '../lib/api/product/type';

interface IProduct {
  id: number;
  price: number;
  title: string;
  tags: string[];
  brandId: number;
  brandName: string;
  codiImage: string;
  mainImage: string;
  categoryId: number;
  likesCount: number;
  originalPrice: number;
  bookmarksCount: number;
  detailImages: string[];
}

export default IProduct;
