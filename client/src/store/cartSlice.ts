import { createSlice } from "@reduxjs/toolkit"
import { sendingOrder } from "./cartThunks"
import { CartState } from "../types/Cart"

const initialState: CartState = {
  cartProducts: JSON.parse(localStorage.getItem('cartProducts') || '[]'),
  totalPrice: JSON.parse(localStorage.getItem('totalPrice') || '0'),
  totalQuantity: JSON.parse(localStorage.getItem('totalQuantity') || '0'),
  oderStatus: 'idle'
}

const updateLocalStorage = (state: CartState) => {
  localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
  localStorage.setItem('totalPrice', state.totalPrice.toFixed(2))
  localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload
    
      const productPrice = parseFloat(product.price) || 0
      const currentTotalPrice = state.totalPrice || 0
    
      state.totalPrice = parseFloat((currentTotalPrice + productPrice).toFixed(2))
      state.totalQuantity += 1
    
      const existingProduct = state.cartProducts.find((item) => item.product.id === product.id)
    
      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.cartProducts.push({ product, quantity: 1 })
      }
    
      updateLocalStorage(state)
    },

    clearProductFromCart(state, action) {
      const productId = action.payload.id
      const existingProduct = state.cartProducts.find(item => item.product.id === productId)

      if (existingProduct) {
        state.totalPrice = parseFloat((state.totalPrice - existingProduct.product.price * existingProduct.quantity).toFixed(2))
        state.totalQuantity -= existingProduct.quantity
        state.cartProducts = state.cartProducts.filter((item) => item.product.id !== productId)
      }

      updateLocalStorage(state)
    },

    removeFromCart(state, action) {
      const productId = action.payload.id
      const existingProduct = state.cartProducts.find(item => item.product.id === productId)

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1
          state.totalPrice = parseFloat((state.totalPrice - existingProduct.product.price).toFixed(2))
          state.totalQuantity -= 1
        } else {
          state.cartProducts = state.cartProducts.filter(item => item.product.id !== productId)
          state.totalPrice = parseFloat((state.totalPrice - existingProduct.product.price).toFixed(2))
          state.totalQuantity -= 1
        }
      }

      updateLocalStorage(state)
    },

    clearCart(state) {
      state.cartProducts = []
      state.totalPrice = 0
      state.totalQuantity = 0
      updateLocalStorage(state)
    },

    clearOderStatus(state) {
      state.oderStatus = 'idle'
    }

  },
  
  extraReducers: builder => {
    builder
    .addCase(sendingOrder.fulfilled, (state) => {
      state.oderStatus = 'succeeded'
    })
  }
})

export const { addToCart, removeFromCart, clearProductFromCart, clearCart, clearOderStatus } = cartSlice.actions
export default cartSlice.reducer

