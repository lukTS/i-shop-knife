import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import sliderReducer from './sliderSlice'
import authReducer from './authSlice'
import cartReducer from './cartSlice'
import categoriesSlice from './categoriesSlice'
import searchReducer from './searchSlice'
import modalWindowReducer from './modalWindowSlice'

const store = configureStore({
    reducer: {
        products: productsReducer,
        slider: sliderReducer,
        auth: authReducer,
        cart: cartReducer,
        categories: categoriesSlice,
        search: searchReducer,
        modal: modalWindowReducer,
    },
});

// Type for state
export type RootState = ReturnType<typeof store.getState>

// Type for dispatch
export type AppDispatch = typeof store.dispatch

export default store
