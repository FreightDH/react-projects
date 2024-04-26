import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './reducers/todoSlice';

export const setupStore = () => {
  return configureStore({
    reducer: todoReducer,
  });
};

export type RootState = ReturnType<typeof todoReducer>;
