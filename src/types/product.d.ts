import { IApiProduct } from '../lib/api/product/type';

interface IProduct {
  bookmarksCount: number;
  brandId: number;
  brandName: string;
  categoryId: number;
  codiImage: string;
  detailImages: string[];
  id: number;
  likesCount: number;
  mainImage: string;
  originalPrice: number;
  price: number;
  tags: string[];
  title: string;
}

export default IProduct;
