import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productListSlice';

export const store = configureStore({
    reducer: {
        products: productReducer
    },
});