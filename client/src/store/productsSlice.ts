import { createSlice } from "@reduxjs/toolkit"
import { fetchProducts, fetchNewProducts } from './productsThanks'
import { ProductsState } from '../types/Product'

const initialState: ProductsState = {
    products: [],
    newProducts: [],
    status: 'idle',
    statusNewProducts: 'idle',
    error: null,
    errorNewProducts: null,
}
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null
            })
            .addCase(fetchNewProducts.pending, (state) => {
                state.statusNewProducts = 'loading'
            })
            .addCase(fetchNewProducts.fulfilled, (state, action) => {
                state.statusNewProducts = 'succeeded'
                state.newProducts = action.payload
            })
            .addCase(fetchNewProducts.rejected, (state, action) => {
                state.statusNewProducts = 'failed'
                state.errorNewProducts = action.error.message || null
            })
    }
})

export default productsSlice.reducer
