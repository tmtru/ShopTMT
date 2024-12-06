// src/redux/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    filters: {
        category: [],
        color: [],
        price: [0, 500],
        size: []
    }
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        }
    }
});

export const { setProducts, setFilters } = productSlice.actions;
export default productSlice.reducer;

