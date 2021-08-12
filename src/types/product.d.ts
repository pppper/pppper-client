interface IProduct {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  brandId: number;
  brandName: string;
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
