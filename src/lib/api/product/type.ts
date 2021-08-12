export interface IApiProduct {
  id?: number;
  title?: string;
  price?: number;
  video?: null;
  created_at?: Date;
  updated_at?: Date;
  category_id?: number;
  description?: null;
  image?: string;
  status?: Status;
  reviews_average?: string;
  reviews_count?: null;
  view_count?: number;
  zipcode?: null;
  address1?: null;
  address2?: null;
  start_at?: null;
  end_at?: null;
  _type?: null;
  lat?: null;
  lng?: null;
  brand_id?: number;
  competitor_price?: number;
  shipping?: number;
  admin_user_id?: number;
  video_link?: null;
  detail_image1?: null;
  detail_image2?: null;
  main_image?: null;
  item_status?: ItemStatus;
  size_array?: any[];
  detail_images?: string[];
  item_type?: ItemType;
  item_link?: string;
  style_image?: string;
  influencer_show?: boolean;
  liked_at?: null;
  likes_count?: number;
  books_count?: number;
  musinsa_id?: number;
  tag_list?: null;
  brand_title?: string;
}

export enum ItemStatus {
  Show = 'show',
}

export enum ItemType {
  Default = 'default',
}

export enum Status {
  Active = 'active',
}

export interface IApiProduct2 {
  item: Item;
  contacts: any[];
  staff_review: null;
  percentage: number;
  avaliable_coupons: null;
}

export interface Item {
  id: number;
  title: string;
  price: number;
  video: null;
  created_at: Date;
  updated_at: Date;
  category_id: number;
  description: null;
  image: DetailImage1;
  status: string;
  reviews_average: string;
  reviews_count: null;
  view_count: number;
  zipcode: null;
  address1: null;
  address2: null;
  start_at: null;
  end_at: null;
  _type: null;
  lat: null;
  lng: null;
  brand_id: number;
  competitor_price: number;
  shipping: number;
  admin_user_id: number;
  video_link: null;
  detail_image1: DetailImage1;
  detail_image2: DetailImage1;
  main_image: null;
  item_status: string;
  size_array: any[];
  detail_images: DetailImage1[];
  item_type: string;
  item_link: string;
  style_image: DetailImage1;
  influencer_show: boolean;
  liked_at: null;
  likes_count: number;
  books_count: number;
  musinsa_id: number;
  tag_list: string[];
}

export interface DetailImage1 {
  url: null | string;
  thumb: Banner2;
  square: Banner2;
  banner: Banner2;
  small_banner: Banner2;
}

export interface Banner2 {
  url: null | string;
}
