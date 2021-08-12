import { ICategory } from '../../types/category';

export const p1 = {
  id: 1,
  name: '상의',
  position: 1,
  parentCategory: null,
};
export const p2 = {
  id: 2,
  name: '아우터',
  position: 2,
  parentCategory: null,
};
export const p3 = {
  id: 3,
  name: '하의',
  position: 3,
  parentCategory: null,
};
export const c1 = {
  id: 10,
  name: '전체',
  position: 10,
  parentCategory: p1,
};
export const c2 = {
  id: 11,
  name: '반팔티셔츠',
  position: 11,
  parentCategory: p1,
};
export const c3 = {
  id: 12,
  name: '셔츠/블라우스',
  position: 12,
  parentCategory: p1,
};
export const c4 = {
  id: 20,
  name: '전체',
  position: 20,
  parentCategory: p2,
};
export const c5 = {
  id: 21,
  name: '자켓',
  position: 21,
  parentCategory: p2,
};
export const c6 = {
  id: 22,
  name: '가디건',
  position: 22,
  parentCategory: p2,
};

export const categories: ICategory[] = [p1, p2, p3, c1, c2, c3, c4, c5, c6];
