import { IApiProduct } from '../lib/api/product/type';

interface IProduct {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  brandId: number;
  brandName: string;
  categoryId: number;
  codiImage: string;
  detailImages: string[];
  mainImage: string;
  sizeArray: string[];
  tags: string[];

  bookmarksCount: number;
  likesCount: number;
  grade: number;
}

export default IProduct;
