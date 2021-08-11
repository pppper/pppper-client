import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserType = {
  id: number;
  name: string;
  email: string;
  profileImage: string;
};

const initialState: UserType = {
  id: 0,
  name: '',
  email: '',
  profileImage: '',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<UserType>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.profileImage = action.payload.profileImage;
    },
  },
});

export const userActions = { ...user.actions };

export default user;
