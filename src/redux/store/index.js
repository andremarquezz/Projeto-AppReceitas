import { configureStore } from '@reduxjs/toolkit';
import filters from '../slices/filterSlice';

const store = configureStore({
  reducer: {
    filters,
  },
});

export default store;
