import IProduct from './product';

export interface ICodi {
  id: number;
  name: string;
  description: string;
  products: IProduct[];
  bookmarksCount: number;
  likesCount: number;
  // position
  backgroundColor: string;
  productsZIndex: Record<number, number>;
  itemPositionAndSize: Record<number, ICodiItemPositionAndSize>;
  renderedImage: string;
}

export type ICodiItemPositionAndSize = ICodiItemPosition & ICodiItemSize;
export interface ICodiItemPosition {
  x: number;
  y: number;
}
export interface ICodiItemSize {
  width: number;
  height: number;
}
