export interface IApiCodiProposal {
  id?: number;
  user_id?: number;
  is_confirm?: boolean;
  bottom_size?: null;
  top_size?: null;
  comment?: string;
  user_style?: string[];
  created_at?: Date;
  updated_at?: Date;
  item_id?: number;
  place?: string[];
  occasion?: string[];
  user_fit?: string;
  height?: string;
  weight?: string;
  styles_count?: number;
  gender?: string;
}
