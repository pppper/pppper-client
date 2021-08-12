interface CategoryType {
  id: number;
  title: string;
  body: string;
  position: number;
  image: ImageType;
  created_at: string;
  updated_at: string;
  en_title: string;
  depth: string;
  positions: number[];
  parent_id: number;
  likes_count: number;
  books_count: number;
}

export default CategoryType;

export interface ImageType {
  url: string;
  thumb: ThumbType;
  square: SquareType;
  banner: BannerType;
  small_banner: SmallBannerType;
}

export interface ThumbType {
  url: string;
}

export interface SquareType {
  url: string;
}

export interface BannerType {
  url: string;
}

export interface SmallBannerType {
  url: string;
}

// postman에서 null로 오는값들은 우선 any로 해놨음
