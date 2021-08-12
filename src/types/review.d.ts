enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

interface IReviews {
  id: number;
  nickName: string;
  createdDate: string;
  grade: number;
  content: string;
  images: string[];
  height: number;
  weight: number;
  option: string;
  sex: Gender;
}
