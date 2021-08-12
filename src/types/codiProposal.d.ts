import IProduct from './product';

export interface ICodiProposal {
  id: number;
  name: string;
  description: string;
  tags: string[];
  referenceImages: string[];
  defaultProducts: IProduct[];
}
