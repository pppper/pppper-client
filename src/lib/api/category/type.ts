export interface IApiCategory {
  id: number;
  title: string;
  body: null;
  position: number;
  image: Image;
  created_at: Date;
  updated_at: Date;
  en_title: null;
  depth: string;
  positions: any[];
  parent_id: null;
  likes_count: number;
  books_count: number;
}

interface Image {
  url: null;
  thumb: Banner;
  square: Banner;
  banner: Banner;
  small_banner: Banner;
}

interface Banner {
  url: null;
}
