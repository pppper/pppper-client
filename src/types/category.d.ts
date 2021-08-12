type IParentCategory = {
  id: number;
  title: string;
  position: number;
  childIds: number[];
};

type IChildCategory = {
  id: number;
  parentId: number;
  title: string;
  position: number;
};

export { IParentCategory, IChildCategory };
