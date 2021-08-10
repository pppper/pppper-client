import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { user } from './slices';

export const rootReducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
/* export type AppDispatch = typeof store.dispatch
나중에 미들웨어 쓰게되면
*/

export default store;
