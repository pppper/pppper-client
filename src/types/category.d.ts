export interface ICategory {
  id: number;
  name: string;
  position: number;
  parentCategory: ICategory | null;
}
