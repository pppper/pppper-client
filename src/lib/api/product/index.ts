import IProduct from '../../../types/product';
import apiClient, { extractData } from '../apiClient';
import { IApiProduct, IApiProduct2 } from './type';

interface IGetProductsProps {
  page?: number;
  pageSize?: number;
  tag_id?: number;
  category_id?: number;
  brand_id?: number;
  select_content?: any;
}

export const getProducts = (props: IGetProductsProps): Promise<IProduct[]> =>
  apiClient
    .get(`/items`, { params: props })
    .then(extractData)
    .then((products: IApiProduct[]): IProduct[] => {
      return products as IProduct[];
    });

interface IGetProductByIdProps {
  product_id: number;
}

// export const getProductById = (
//   props: IGetProductByIdProps
// ): Promise<IProduct> =>
//   apiClient
//     .get(`/items/${props.product_id}`)
//     .then(extractData)
//     .then((apiProduct: IApiProduct2): IProduct => {
//       let product: IProduct = {
//         bookmarksCount: apiProduct.item.books_count,
//         brandId: apiProduct.br,
//         brandName: string,
//         categoryId: number,
//         codiImage: string,
//         detailImages: string[],
//         id: number,
//         likesCount: number,
//         mainImage: string,
//         originalPrice: number,
//         price: number,
//         tags: string[],
//         title: string,
//       };
//       product.image = apiProduct.item.image.url;
//       product.detail_images = apiProduct.item.detail_images.map(
//         (image) => image.url
//       );
//       product.main_image = apiProduct.item.main_image.url;
//       product.main_image = apiProduct.item.main_image.url;
//       return apiProduct as IProduct;
//     });
