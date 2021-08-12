enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

interface IReview {
  id: number;
  nickName: string;
  createdDate: string;
  grade: number;
  description: string;
  images: string[];
  height: number;
  weight: number;
  option: string;
  sex: Gender;
}
