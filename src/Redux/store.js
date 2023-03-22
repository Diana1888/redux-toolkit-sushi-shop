import { configureStore } from '@reduxjs/toolkit';
import plates from './platesSlice';
import cart from './cartSlice';

export const store = configureStore({
  reducer: {
    plates,
    cart

  },
})